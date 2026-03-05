const REQUIRED_ENV = [
  "YT_CLIENT_ID",
  "YT_CLIENT_SECRET",
  "YT_REFRESH_TOKEN",
  "VIDEO_INPUT",
  "GITHUB_TOKEN",
  "GITHUB_REPOSITORY",
];

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function parseBoolean(value, defaultValue) {
  if (value === undefined) {
    return defaultValue;
  }
  const normalized = String(value).trim().toLowerCase();
  return normalized === "true" || normalized === "1" || normalized === "yes";
}

function extractVideoIdFromUrl(urlString) {
  try {
    const url = new URL(urlString);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.split("/").filter(Boolean)[0] || "";
    }
    if (url.pathname.startsWith("/embed/")) {
      return url.pathname.split("/").pop() || "";
    }
    return url.searchParams.get("v") || "";
  } catch {
    return "";
  }
}

function findVideoIdInText(text) {
  const urlMatches = text.match(/https?:\/\/[^\s)]+/g) || [];
  for (const url of urlMatches) {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const id = extractVideoIdFromUrl(url);
      if (id) {
        return id;
      }
    }
  }

  const idMatch = text.match(/\b[a-zA-Z0-9_-]{11}\b/);
  return idMatch ? idMatch[0] : "";
}

function extractVideoId(input) {
  const trimmed = input.trim();
  if (!trimmed) {
    return "";
  }

  const tokens = trimmed.split(/\s+/);
  if (tokens.length === 1 && !trimmed.includes("youtube.com") && !trimmed.includes("youtu.be")) {
    return trimmed;
  }

  return findVideoIdInText(trimmed);
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Request failed: ${response.status} ${response.statusText} - ${text}`);
  }
  return response.json();
}

async function fetchText(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Request failed: ${response.status} ${response.statusText} - ${text}`);
  }
  return response.text();
}

async function getAccessToken() {
  const clientId = requireEnv("YT_CLIENT_ID");
  const clientSecret = requireEnv("YT_CLIENT_SECRET");
  const refreshToken = requireEnv("YT_REFRESH_TOKEN");

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  const response = await fetchJson("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.access_token) {
    throw new Error("OAuth token response missing access_token");
  }

  return response.access_token;
}

async function listCaptions(accessToken, videoId) {
  const url = new URL("https://www.googleapis.com/youtube/v3/captions");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("videoId", videoId);

  const response = await fetchJson(url.toString(), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return Array.isArray(response.items) ? response.items : [];
}

function pickCaption(captions, preferManual, allowAsr) {
  if (!captions.length) {
    return null;
  }

  const manual = captions.filter((caption) => caption?.snippet?.trackKind !== "ASR");
  const asr = captions.filter((caption) => caption?.snippet?.trackKind === "ASR");

  if (preferManual && manual.length > 0) {
    return manual[0];
  }

  if (allowAsr && asr.length > 0) {
    return asr[0];
  }

  if (manual.length > 0) {
    return manual[0];
  }

  return null;
}

async function downloadCaption(accessToken, captionId) {
  const url = new URL(`https://www.googleapis.com/youtube/v3/captions/${captionId}`);
  url.searchParams.set("tfmt", "srt");

  return fetchText(url.toString(), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

function srtToPlainText(srtContent) {
  const normalized = srtContent.replace(/\r\n/g, "\n");
  const blocks = normalized.split(/\n{2,}/);
  const lines = blocks
    .map((block) =>
      block
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .filter((line) => !/^\d+$/.test(line))
        .filter((line) => !line.includes("-->"))
        .join(" ")
        .trim(),
    )
    .filter((line) => line.length > 0);

  return lines.join("\n");
}

async function getVideoTitle(accessToken, videoId) {
  const url = new URL("https://www.googleapis.com/youtube/v3/videos");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("id", videoId);

  const response = await fetchJson(url.toString(), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const item = Array.isArray(response.items) ? response.items[0] : null;
  return item?.snippet?.title || "";
}

function buildIssueBody({ videoId, transcript }) {
  return [
    "This issue contains a YouTube transcript generated by the workflow.",
    "",
    "@erikaheidi please review the transcript below.",
    "",
    `Video: https://www.youtube.com/watch?v=${videoId}`,
    "",
    "```",
    transcript,
    "```",
    "",
  ].join("\n");
}

async function createIssue({ repo, githubToken, title, body }) {
  const url = `https://api.github.com/repos/${repo}/issues`;
  const response = await fetchJson(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${githubToken}`,
      "Content-Type": "application/json",
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({ title, body }),
  });

  return response.html_url;
}

async function closeIssue({ repo, githubToken, issueNumber }) {
  const url = `https://api.github.com/repos/${repo}/issues/${issueNumber}`;
  await fetchJson(url, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${githubToken}`,
      "Content-Type": "application/json",
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({ state: "closed" }),
  });
}

function getRepoOwner(repo) {
  return repo.split("/")[0] || "";
}

async function main() {
  REQUIRED_ENV.forEach(requireEnv);

  const videoInput = requireEnv("VIDEO_INPUT");
  const githubToken = requireEnv("GITHUB_TOKEN");
  const repo = requireEnv("GITHUB_REPOSITORY");
  const issueNumber = process.env.ISSUE_NUMBER ? Number(process.env.ISSUE_NUMBER) : null;
  const issueAuthor = (process.env.ISSUE_AUTHOR || "").trim();
  const repoOwner = (process.env.REPO_OWNER || getRepoOwner(repo)).trim();

  if (issueNumber && issueAuthor && repoOwner && issueAuthor !== repoOwner) {
    console.log("Issue author is not repository owner. Skipping transcript creation.");
    return;
  }

  const videoId = extractVideoId(videoInput);
  if (!videoId) {
    throw new Error("Unable to determine video ID from input");
  }

  const preferManual = parseBoolean(process.env.PREFER_MANUAL, true);
  const allowAsr = parseBoolean(process.env.ALLOW_ASR, true);

  const accessToken = await getAccessToken();
  const captions = await listCaptions(accessToken, videoId);
  const caption = pickCaption(captions, preferManual, allowAsr);

  if (!caption) {
    throw new Error("No captions available for this video with the current settings");
  }

  const srtContent = await downloadCaption(accessToken, caption.id);
  const transcript = srtToPlainText(srtContent);

  if (!transcript) {
    throw new Error("Transcript is empty after conversion");
  }

  const videoTitle = await getVideoTitle(accessToken, videoId);
  const safeTitle = videoTitle.replace(/\s+/g, " ").trim() || videoId;
  const issueTitle = `YouTube Transcript: ${safeTitle}`;
  const body = buildIssueBody({ videoId, transcript });

  const issueUrl = await createIssue({
    repo,
    githubToken,
    title: issueTitle,
    body,
  });

  if (issueNumber) {
    await closeIssue({ repo, githubToken, issueNumber });
    console.log(`Closed triggering issue: ${issueNumber}`);
  }

  console.log(`Created issue: ${issueUrl}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

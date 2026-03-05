# eheidi.dev blog
 new blog, who dis? work in progress!

## Automated Blog Post Creation

This repository includes a GitHub Agentic Workflow that automatically creates pull requests with new blog posts from GitHub issues.

### How to Use

1. **Create a new issue** with your blog post content inside a code block (using triple backticks):
   ````
   ```
   Your blog post content here...
   ```
   ````
2. **Add the `content-todo` label** to the issue
3. The workflow will automatically:
   - Extract the content from the code block in the issue body
   - Dynamically scan existing posts to compile the current list of tags
   - Generate an SEO-friendly title and description based on the content
   - Select up to 3 appropriate tags from existing blog tags
   - Create a new markdown file with frontmatter and the content from the issue
   - Open a pull request with the new blog post
   - Comment on the issue with a link to the PR

4. **Review and merge** the PR when ready

### Tags

The workflow dynamically compiles tags from existing blog posts at runtime, ensuring it always uses the current set of tags. It will select up to 3 tags that best match your content.

## YouTube Transcript Workflow

This repository includes a GitHub Actions workflow that fetches a YouTube transcript and opens a new issue with the transcript in a code block for review.

### Required Secrets

Add these repository secrets before running the workflow:

- `YT_CLIENT_ID`
- `YT_CLIENT_SECRET`
- `YT_REFRESH_TOKEN`

The refresh token must be generated once via OAuth consent for the channel owner account.

### How to Run

1. Open the Actions tab and run the "YouTube Transcript to Issue" workflow.
2. Provide a YouTube video ID or URL.
3. The workflow will create a new issue titled with the video name and tag `@erikaheidi` for review.

You can also open an issue and apply the `transcript-needed` label with a YouTube URL or ID in the title or body to trigger the workflow. The workflow only runs for issues created by the repository owner, and it will auto-close the labeled issue after creating the transcript issue.

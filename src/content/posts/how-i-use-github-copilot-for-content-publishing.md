---
title: "How I'm Using GitHub Copilot to Streamline Content Publishing"
published: 2026-02-24
description: 'How GitHub Copilot and Agentic Workflows are helping me publish blog posts from anywhere — even from my phone at the gym.'
tags: [ 'copilot', 'productivity' ]
draft: false
---

Writing has always been a passion for me, but with everything else going on there is not much time left to sit on my desk, grab a cup of coffee, and just write. Writing became a work activity, not something I feel like doing when I have some free time. But the thinking never stops, and sometimes I feel like I have something valuable to share.

## Writing on the Go

So one of these days I tried writing on my notes app while I'm on the treadmill, at my gym. That worked surprisingly well, so I used some of my gym sessions to write down LinkedIn posts and random ideas for videos. I also used this time to edit videos from my phone.

Eventually I wrote way too much and ended up finding out that LinkedIn has a character limit for posts. "What a shame", I thought, as I found it difficult to cut down on words and I really wanted to share that piece of content on its entirety.

"What about my blog?", I thought. That would be great, but from the gym I cannot really post anything to my Git-based static blog. Or can I? 🤔

## Copilot to the Rescue

"Maybe Copilot can help me. I already have the content, after all!" - so it would be only an operational thing: create a pull request on my blog repo including the content I would provide it, and then I could preview, review, and merge the PR directly from the treadmill.

I went to the "Agents" tab of my repo using the GitHub mobile app. My first prompt was:

>Bootstrap a new blog post with the title "Use the Right Tool for the Job and your Skillset" and create a pull request so that I can add the content. Tags: "career", "development"


Then after a little while I got a notification from an open PR on my repo. The PR had exactly what I asked for: a markdown skeleton I could edit to include my text. I was able to finish the post from my phone, but it was still quite a bit of work. [This](/posts/use-the-right-tool-for-the-job-and-your-skillset/) was the first published post.

A couple days later I improved the process and instead of using the "Agents" tab, I created an issue with the content already in a code block, with instructions to create a blog post using that content. The, I assigned the issue to Copilot, and a similar process followed, but this time the PR already contained everything. [This](/posts/how-being-a-generalist-is-paying-off-in-2026/) was the result from the [original issue](https://github.com/erikaheidi/blog/issues/15).

## Turning Videos into Quickstart Tutorials

Another blogging struggle I had was around turning a video tutorial into a text version. Writing a detailed tutorial for things like 3D design software is lot of work, as I'd need to show the interface with screenshots and all. Making a video is much easier, and takes me much less time. But I understand that some people prefer to follow along with a text version. So I picked a video transcript from Google Drive (auto-generated when you upload a video there) and asked Copilot to create a step-by-step summary of the video and include the embed in a blog post. It also generated a short intro and conclusion, which was fine. You can see the result [here](/posts/freecad-tutorial-penholder/) and [here](https://eheidi.dev/posts/freecad-spreadsheets-formulas/). I was actually pretty happy with this use case, because I could focus on creating the videos and still make them acessible. Also, I wasn't using any AI to author the original content, so I felt good about that too.

## Migrating to Copilot Agentic Workflows

I was trying to figure out the best way to handle this automation without having to repeat the same prompt over and over, and that was around the same time I heard about [Copilot Agentic Workflows](https://github.github.io/gh-aw/) for the first time. 

Luckily for me, as part of the [GitHub Stars](https://stars.github.com/profiles/erikaheidi/) program I get to join some meetings with GitHub engineers where they share the latest features and things that are not yet in general availability. Shortly after one of these meetings I started my experiments to create Agentic Workflows with the goal of streamlining my blog publishing process, and here's where I am today: this post was 90% made from my phone while on the gym. Copilot created the PR for me, and I am just finishing the other 10% with some links to demonstrate the process. The best thing is that the "Blog Post Creator" workflow was **also** created by Copilot through the "Agents" tab!

After I got the Blog Post Creator workflow up and running, I set up another workflow to deal with the video tutorials, this time triggered by the label `youtube-todo`. Instead of creating a PR directly (which would sort of duplicate the process), I asked the agent to prepare the content and create a new issue with the `content-todo` label, in order to trigger the "Blog Post Creator" workflow. So, basically I:

- create an issue providing a YouTube URL and the transcript of the video in a code block, label with `youtube-todo`
- the "Youtube to Blog Post Creator" workflow starts working on the issue, generates a blog post, then creates a new issue to trigger the "Blog Post Creator" workflow (label `content-todo` )
- the "Blog Post Creator" workflow is triggered and proceeds to create a PR with the new blog post.

If the content is just text, I create an issue to trigger the Blog Post Creator workflow directly.

### The Prompt
The "Blog Post Creator" workflow was created based on the following prompt:

> Create a workflow for GitHub Agentic Workflows using https://raw.githubusercontent.com/github/gh-aw/main/create.md
>
>The purpose of this workflow is to create a PR with a new blog post using information provided in a GitHub issue. The workflow should be triggered when an open issue is labeled with the "content-todo" label. Based on the content provided, create a SEO friendly title and description. Check the tags already used in the blog and tag the post apropriately with a maximum of 3 tags. Do not include any additional content in the body of text.

Took only a couple minutes to get the PR ready for review with the new workflow. After [some tweaking](#workflow-setup), I got it up and running.

One important thing to notice is that Agentic workflows are actually markdown (.md) files with a YAML frontmatter that defines some metadata, permissions, and rules for triggering the workflow. You'll then run a `gh aw compile` command (or instruct the agent to do so, when needed) to "compile" the agentic workflow markdown and generate a **lock** file that is the actual workflow that will be executed. That will be a much longer file with several instructions and guardrails in place. For reference, you can have a look at [the agentic markdown file](https://github.com/erikaheidi/blog/blob/main/.github/workflows/create-blog-post.md) and its [generated lock file](https://github.com/erikaheidi/blog/blob/main/.github/workflows/create-blog-post.lock.yml).

### Workflow Setup
To make everything work, I needed to:

- Update a few settings in the repository to allow GitHub Actions to create new pull requests (Settings -> Actions -> General -> Workflow Permissions, then check the box for "Allow GitHub Actions to create and approve pull requests").
- Create a [fine-grained PAT (personal access token)](https://github.github.io/gh-aw/reference/auth/#copilot_github_token) to authenticate to Copilot CLI from the workflow.
- Update Copilot security settings (Settings -> Copilot -> Agent -> Custom Allowlist) to allow requests to `https://api.github.com/repos/github/gh-aw`, so that the agent is able to fetch the `gh aw` extension, which is needed to compile the markdown workflow file and generate the lock file (the actual workflow that you're not supposed to manually change).


## Conclusion

Agentic Workflows are really handy for my use case since I don't have much time to spend on the operational tasks required to get my ideas published here. I can focus on my original content and let Copilot handle the boring and time-consuming tasks without having to explicitly tell him what to do - just create an issue, add the content, and label it appropriately.

If you want to try out Copilot Agentic Workflows, check the excellent [official docs](https://github.github.io/gh-aw/setup/creating-workflows/) to get started quickly.

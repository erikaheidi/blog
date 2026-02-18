# eheidi.dev blog
 new blog, who dis? work in progress!

## Automated Blog Post Creation

This repository includes a GitHub Agentic Workflow that automatically creates pull requests with new blog posts from GitHub issues.

### How to Use

1. **Create a new issue** with the raw text content of your blog post in the issue body
2. **Add the `content-todo` label** to the issue
3. The workflow will automatically:
   - Extract the content from the issue body
   - Dynamically scan existing posts to compile the current list of tags
   - Generate an SEO-friendly title and description based on the content
   - Select up to 3 appropriate tags from existing blog tags
   - Create a new markdown file with frontmatter and the content from the issue
   - Open a pull request with the new blog post
   - Comment on the issue with a link to the PR

4. **Review and merge** the PR when ready

### Tags

The workflow dynamically compiles tags from existing blog posts at runtime, ensuring it always uses the current set of tags. It will select up to 3 tags that best match your content.

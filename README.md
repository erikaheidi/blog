# eheidi.dev blog
 new blog, who dis? work in progress!

## Automated Blog Post Creation

This repository includes a GitHub Agentic Workflow that automatically creates pull requests with new blog posts from GitHub issues.

### How to Use

1. **Create a new issue** with details about the blog post you want to create
2. **Add the `content-todo` label** to the issue
3. The workflow will automatically:
   - Generate an SEO-friendly title and description
   - Select up to 3 appropriate tags from existing blog tags
   - Create a new markdown file with the frontmatter
   - Open a pull request with the new blog post
   - Comment on the issue with a link to the PR

4. **Add your content** to the blog post file in the PR
5. **Review and merge** the PR when ready

### Existing Tags

The workflow uses the following existing tags (max 3 per post):
- 3d-printing
- ai
- beginners
- career
- containers
- copilot
- development
- freecad
- games
- laravel
- linux
- llms
- minecraft
- openscad
- php
- productivity
- raspberry
- technical-writing
- tools
- tutorial

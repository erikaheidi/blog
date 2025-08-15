---
title: 'Setting up a Documentation Website for your Software Project with Hugo and Netlify'
published: 2023-01-10
description: "In the second part of our series, we'll see how to set up a dedicated documentation website for your software project using the Hugo static site generator, and having it hosted for free on Netlify."
tags: [ 'technical-writing' , 'beginners' ]
---

## Introduction

In a previous post of this series, we've seen [tips and best practices to create a good readme](/tech-writing/20221212_documentation-101) for your software project, and how to organize an initial set of markdown docs to cover the basics.

Having some basic docs alongside your code works well as a starting point, but depending on the size of your project and the amount of features and configuration involved to set it up, having a dedicated documentation website is a better long-term solution to keep docs organized, making things easier to find and to link out.

In this post, which is part 2 on my Documentation 101 series, we'll see how to set up a dedicated documentation website for your software project using the Hugo static site generator, and having it hosted for free on Netlify.

## Choosing a platform

There are quite a few different solutions nowadays to build and to host your documentation site for free.

A few combinations that I have personally tried before:

- GitHub Pages:  typically built in a separate branch of the project, can become confusing with time. Less freedom to customize.
- Readthedocs + mkdocs: this is a good combination using the free documentation platform [Readthedocs](https://readthedocs.org). You get a free .readthedocs subdomain, and can also set up a custom domain. I use it for the [Minicli](https://docs.minicli.dev/en/latest/) docs, overall a good solution but I find it to be a bit flaky sometimes, specially when there are updates.
- Netlify + Hugo: my favorite so far, because this enables the "preview on PR" feature that gives you a preview whenever a PR is open (comes as a comment from the Netlify bot). The downside is that you'll want to use a custom domain (could be a subdomain you already own, or a dedicated domain name for that project) otherwise your site will have a really weird address.

Other reasons why I liked using Hugo include the fact that it can be widely customized and also that it's easy to host.

## Installing Hugo

[Hugo](https://gohugo.io/) is a popular static site generator written in Go. It uses markdown documents to generate the content, which is ideal to keep your documentation decoupled from styling and formatting. Metadata is added through a front matter section, very similar to what we use at DEV.to for writing posts using the basic markdown editor.

Hugo sites can be hosted for free on Netlify and several other platforms.

### 1. Downloading and Installing

First, download and install the latest version of Hugo available for your system. You can find the appropriate package on their [Releases](https://github.com/gohugoio/hugo/releases) page on GitHub. You should avoid using your system package manager in order to make sure you get an updated version of Hugo.

For Ubuntu users, for instance, download the `.deb` file and install it with `dpkg`:

```shell
sudo dpkg -i ~/Downloads/hugo_0.107.0_linux-amd64.deb
```

Once you're finished, run the `hugo version` command to make sure Hugo is available system-wide:

```shell
hugo version
```
You should get output similar to this:

```shell
hugo v0.107.0-2221b5b30a285d01220a26a82305906ad3291880 linux/amd64 BuildDate=2022-11-24T13:59:45Z VendorInfo=gohugoio
```

### 2. Creating a new Hugo Project

Now you can create a new Hugo site with the following command. For the examples in this guide, I'll use "mydocs" as site name.

```shell
hugo new site mydocs
```
You should get output similar to this:

```
Congratulations! Your new Hugo site is created in /home/erika/Projects/mydocs.

Just a few more steps and you're ready to go:

1. Download a theme into the same-named folder.
   Choose a theme from https://themes.gohugo.io/ or
   create your own with the "hugo new theme <THEMENAME>" command.
2. Perhaps you want to add some content. You can add single files
   with "hugo new <SECTIONNAME>/<FILENAME>.<FORMAT>".
3. Start the built-in live server via "hugo server".

Visit https://gohugo.io/ for quickstart guide and full documentation.

```

With the basic installation in place, you can start customizing your site.

### 3. Installing a Theme

The [official Hugo website](https://themes.gohugo.io/) has a large collection of themes ready to use. You can nail down your search by selecting the "docs" category to find a theme that is more targeted at documentation, these usually include extensions to improve code highlighting and navigation that facilitates indexing documentation.

For this tutorial, we'll use the [Geekdoc](https://themes.gohugo.io/themes/hugo-geekdoc/) theme, the same I have set up for the [yamldocs](https://yamldocs.dev/) documentation.

Generally speaking, you should follow the installation instructions provided by the theme you choose. Some themes are npm-based and require that in order to be properly installed locally.

For the Geekdocs theme, you just need to download and unpack the theme into the `themes` folder of your site. You can do that with the following commands:

```shell
cd mydocs/
mkdir -p themes/hugo-geekdoc/
curl -L https://github.com/thegeeklab/hugo-geekdoc/releases/latest/download/hugo-geekdoc.tar.gz | tar -xz -C themes/hugo-geekdoc/ --strip-components=1
```

Next, you'll need to edit your `config.toml` file, which currently looks very minimal. We'll add options that are specific to the theme and should set up some nice extensions.

This is how my `config.toml` file looks like after updating:

```toml
baseURL = "http://localhost"
title = "My Documentation Site"
theme = "hugo-geekdoc"

pluralizeListTitles = false

# Geekdoc required configuration
pygmentsUseClasses = true
pygmentsCodeFences = true
disablePathToLower = true

# Required if you want to render robots.txt template
enableRobotsTXT = true

# Needed for mermaid shortcodes
[markup]
  [markup.goldmark.renderer]
    # Needed for mermaid shortcode
    unsafe = true
  [markup.tableOfContents]
    startLevel = 1
    endLevel = 9

[taxonomies]
   tag = "tags"
```

Once you're finished editing, don't forget to save the file.

Next, run the development server to check your site:

```shell
hugo server -D
```
You should see a page like this:

![Hugo website default](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o5pren4q09oaqkvi37sy.png)

Naturally, it looks a bit empty, since there aren't any documents yet. Let's first have a look at the files structure so that you know where everything is:

```
.
├── archetypes
│   └── default.md
├── assets
├── content
├── data
├── layouts
├── public
│   ├── categories
│   ├── tags
│   ├── index.xml
│   └── sitemap.xml
├── resources
│   └── _gen
├── static
├── themes
│   └── hugo-geekdoc
└── config.toml

```

Here are a few important directories you should know about:

- **archetypes**: this directory contains templates for the markdown files that are generated through the "hugo new" command. You can set up different archetypes for different content types, setting default tags and other metadata for instance.
- **content**: the markdown files with your documentation will live here.
- **layouts**: here you will find the HTML files that are the base for your site. This folder is empty by default, but you can check the `themes/hugo-geekdoc/layouts` folder and you'll find out the layouts currently being used in your site. You'll notice that the theme replicates the folder structure of the root folder, and that is important to allow you to overwrite any templates that are defined by your theme. To do that, you just need to create a layout file with the same name in the root `layouts` folder, and these will take higher precedence than the layouts defined by the theme.
- **static**: any static resources such as logos and other images used by the site should be placed here.
- **public**: this is where the static HTML files are located when you build your website, so this is the directory that should be set as your document root when hosting Hugo.

Check the [official docs](https://gohugo.io/getting-started/directory-structure/) to learn more about Hugo's directory structure.

### 4. Building your Docs

Now that the site is up and running, you can start creating your documentation pages. This is where the actual work gets done, so take your time! You can always start with a basic "getting started" page and improve your docs later. We'll talk about content planning and organization in the next part of this series.

To create a new piece of content, you can use the "hugo new" command. This command will infer the type of content you're creating based on the path provided as output.

```shell
hugo new docs/getting-started.md
```
You'll see output similar to this:

```
Content "/home/erika/Projects/mydocs/content/docs/getting-started.md" created
```

Open the file and add some content. Then reload the page on your browser and you should see something like this:

![Hugo website with initial getting started page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/528xhsnvmpd5pjru12yp.png)

You'll notice that the generated markdown has a boilerplate content. This is based on the `themes/hugo-geekdoc/archetypes/docs.md` archetype, defined by the theme. You can overwrite this boilerplate content by creating a file with the same name in your `archetypes` folder.

To learn more about archetypes, check the [official Hugo docs](https://gohugo.io/content-management/archetypes/).

## Publishing your Hugo site to Netlify

As mentioned before, there are multiple ways in which you can host your Hugo website for free. The biggest advantage of using Netlify in my opinion is the ability to use their build preview feature, which creates a temporary deployment with a random URL where you can preview any changes brought in a pull request on GitHub.

We'll now see how to get this set up.

### 1. Create an account on Netlify
Start out by creating a (free) account on [Netlify](https://netlify.com). You can sign up with your GitHub account to facilitate bringing in your repository if it's hosted there. You should be able to get a "starter" account, which should be enough to get your static site hosted for free.

Once you're all set up, you'll land in a dashboard similar to this:

![Netlify Dashboard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wuzo4gol99h5sqoidwei.png)

### 2. Import your project
Click on the "Add new Site" button and you'll get a dropdown. Choose the first option "Import an existing project" and follow the instructions to import your project from your code hosting platform such as GitHub.

You may need to authorize Netlify to have access to your repositories. Then, you'll be able to choose which repository you want to import. Select your Hugo repository and advance to the next page.

### 3. Configure deployment settings for Hugo
In this page you'll find the deploy settings. Luckily for us, Netlify is able to detect that it's a Hugo website and already sets up some default values for us. Because the theme we chose is simple and doesn't require npm or anything like that, those default values are more than enough to get us up and running. This is what you should see:

![Netlify default deploy settings for Hugo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bou34ef2d8zqyoivk24p.png)

Click on "Deploy Site" to finish the setup process.

### 4. Preview Project
Once you're back to the dashboard, you'll see that your new site is being built, and has a random subdomain. You'll be able to set up a custom domain later on.

![Netlify Deploy](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uanur1elhe9c9lp8kl4e.png)

You can now access the temporary URL to preview your site and make sure it looks the same as you have locally.

### 5. Configure Deploy Preview
The deploy preview feature should be automatically enabled for you, but you'll need to [authorize the Netlify app](https://docs.netlify.com/configure-builds/repo-permissions-linking/#authentication-with-the-netlify-github-app) within your project repository in order to allow the Netlify bot to post a comment in your PRs with the link to the deploy preview.

To check if this feature is enabled, go to "Deploys" and then "Continuous Deployment" on the left menu. You should see a section like this:

![Deploy previews default settings on Netlify](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r00hjmfos4dtsfo6nvb1.png)

Check the [Netlify docs on deploy previews](https://docs.netlify.com/site-deploys/deploy-previews/) for a more detailed guide on how to set this up.

### 6. Configure custom domain name (optional)
The final step of this process is setting up a custom domain name for your website. Although optional, this is highly recommended, otherwise you'll have a random domain name that doesn't relate in any way to your project name. Once you set that up, you'll also be able to secure your site with a Let's Encrypt certificate (Netlify does that for you automatically).

To set up a custom domain, go to the "Set up a custom domain" link that shows up as step number 2 in the "Set up your website" section of the dashboard. You can use an existing domain you own or you can register a new domain through Netlify. Follow the instructions there and be aware it can take a few hours for your site to be reachable via the custom domain.

Check the [official Netlify docs](https://docs.netlify.com/domains-https/custom-domains/) for more guidance on how to set up a custom domain for your site.

## Conclusion

Although having docs living alongside your codebase can be a valid solution in many cases, you may want to set up a dedicated documentation website if your project starts to get more adoption or simply if you want to improve users experience with a long-term home for your project docs. There are a few different ways in which you can build and host documentation websites; in this article, we've seen how to set up a documentation website with Hugo and have it hosted for free on Netlify.

In the next part of this series, we'll talk about content planning and organization, with best practices to keep your documentation clean and easy to follow.


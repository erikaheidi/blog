---
title: 'Documentation 101: creating a good README for your software project'
published: 2023-01-01
description: "In this article, which is part 1 of a series on how to write good documentation, we'll see some tips to write a good README file for your project."
tags: [ 'technical-writing' ]
---

Having a good documentation for your open source project is an important (and often overlooked) feature to drive adoption and show the full potential of what users can accomplish with your application or library.

Unfortunately, documentation often grows in a much slower rate than code, mainly because some implementations that look rather simple may spawn a huge amount of possible use cases and variations for how something is done within an app or lib. It is never possible to cover all possible scenarios, that's why the first job of a technical writer is to scope and prioritize. It's very important to focus on what's essential knowledge and must be documented first to support the most common use cases.

In this article, which is **part 1** of a series about **Software Documentation for Beginners**, I'll share some tips to build a good README file for your project.

## The README file
The project's README file is often the first contact users will have with your project, since it's what they'll see first when directed at your project's repository. That's why it's important to prioritize having a good README as a starting point for your project's documentation.

This is a TL;DR of what we'll cover today:

- 1. README size (Less is More)
- 2. Splitting README into additional docs
- 3. Essential Information
- 4. Using Badges

Naturally, different projects have different things to showcase in a README, but these tips should work  as a good starting point for most software projects.

## 1. Less is More



You may be tempted to put everything in your README, like how to install and use the project, how to deploy, how to debug... But the README should be seen more like an entry point, where you share the most important information and links for more complete docs covering these topics in more detail.

Naturally, when you are starting out, having just a README is fine. But a very long README is not attractive, makes it harder to find information since there isn't a table of contents or menu to navigate, which ultimately goes against a good user experience. Shorter READMEs that link out to relevant resources make a project look more organized and less complicated.

What if I don't want to create a dedicated documentation website for this project? Well, in this case you may consider creating a `docs` folder in the root of your project, where you can keep additional markdown documentation that can be browsed directly from your code hosting platform (assuming GitHub).

## 2. Splitting README into additional docs

For in-repo docs, you can create a `/docs` directory in the root of your application, and use a `/docs/README.md` file as entry point or index for your docs.

Content ideas for this folder:

- installation.md - A doc showing in details how to get the project installed.
- usage.md - A more detailed view of the project's usage and main commands.
- advanced.md - A document with some advanced usage options and use cases.

These are just some ideas that can work as a starting point. If you feel that you need to create a more complex structure with subfolders, you should seriously consider creating a dedicated documentation website for your project (which we'll cover in upcoming articles of this series).

## 3. README Essentials

Here are a few things you should definitely have in your README:

- a high-level overview of the project, including the language in which it's written, what it does, why it's useful;
- the project requirements;
- links to installation docs;
- usage overview that gives users a brief idea of how to execute it;
- troubleshooting or debug tips (can be a link to a separate doc);
- links to other resources to learn more.

Ideally, these should be short instructions that link to more comprehensive docs whenever necessary.

Other content you should consider to have there, depending on your project's size and goals:

- a link to a CONTRIBUTING.md document that contains details about how users can contribute to your project, in case it's open source
- a link to a CODE_OF_CONDUCT.md document that contains the project's code of conduct.

If your project is hosted on GitHub, these will be shown prominently in your project's page on the right sidebar, right below the "about" section.


### Example Structure

Here is a general structure in markdown that you can use as base for building your project's README:

```markdown
# Project Name

A paragraph containing a high-level description of the project, main features and remarks.

## Requirements

Here you should give a general idea of what a user will need in order to use your library or application. List requirements and then link to another resource with detailed installation or setup instructions.

- Requirement one
- Another requirement

Check the [installation notes]() for more details on how to install the project.

## Usage

Include here a few examples of commands you can run and what they do. Finally link out to a resource to learn more (next paragraph).

For more details, check the [getting started guide]().

## Useful Resources

Include here any other links that are relevant for the project, such as more docs, tutorials, and demos.
```

## 4. Using Badges

You can use badges to enrich your README with quick information that is automatically pulled from the project, such as the status of the latest build, the latest stable release version, project license, among others.

There are different services that offer badges for open source projects. As pointed by @mohsin in the comments section of this post, you can pull badges directly from GitHub Actions by going to your workflow page, clicking on the three dots that show up on the top right, and selecting "Create status badge" from the menu:

![Screenshot showing where to find the menu to create a status badge from github actions](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bpb6g6xofhwm8vctwcem.png)

This will show you a dialog with markdown code that you can copy and paste to your README file.

Another good option is to use the site [Shields.io](https://shields.io/), which offers several different badges that you can use for free in your open source project.

For instance, this is the image URL to show the latest release of [yamldocs](https://github.com/erikaheidi/yamldocs):

```
https://img.shields.io/github/v/release/erikaheidi/yamldocs?sort=semver&style=for-the-badge
```

This generates the following badge, which shows the latest release version:

![latest stable release of yamldocs](https://img.shields.io/github/v/release/erikaheidi/yamldocs?sort=semver&style=for-the-badge)

Here's an example of README with multiple badges:
![Shows badges from yamldocs project readme](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5frlxoex4fyke8ra1avf.png)

## Conclusion

Documentation is an essential part of any software project, and should be taken seriously from the very beginning. The best way to start is by creating a good README that shows the essential information to your users without overwhelming them with content that they may not need in order to get started using your project.

In the next article of this series, we'll talk about other types of documentation, and where you can host your docs when you decide it's time to have a dedicated documentation website.

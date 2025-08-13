---
title: 'Setting Up Obsidian for Content Planning and Project Management'
description: 'Obsidian is a flexible markdown writing application that allow users to customize notes with templates and other plugins. In this post, I share my setup and my custom templates for content planning and simple project management.'
published: 2024-03-11
tags: [ 'productivity', 'tools' ]
coverImage:
    src: 'https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p4kfuwpib4h2vtmdv57o.png'
    alt: 'Banner showing the post title with some elements in the background'
    
---

_Originally published on [dev.to](https://dev.to/erikaheidi/setting-up-obsidian-for-content-planning-and-project-management-38f1)._

[Obsidian](https://obsidian.md/) is a writing application created to allow for offline / private note taking in markdown format, in an interface that looks a lot like our regular programming IDE. It is very flexible, with a good collection of community plugins that you can use to customize Obsidian to your heart contents.

I recently started using Obsidian at work for daily / weekly notes and it's being super helpful to keep me organized. I am now setting up Obsidian on my personal laptop to help me keep track of ideas and side projects. In this post, I share my setup and my custom templates to facilitate that.

## 1. Installing Obsidian
The first step is to get Obsidian installed on your computer. Check their [downloads page](https://obsidian.md/download) to download and install the appropriate version for your system.

## 2. Customizing Obsidian Appearance
Once you get Obsidian installed and when you open it for the first time, you will get a screen like this, asking you to create a new Vault or use an existing directory as vault. A "Vault" is a folder where your markdown documents will live.

![Getting started with Obsidian](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dqmcwl0r9h98c5h5gsa4.png)

You can specify where to create your Vault. I created a folder called "My Projects" under my "Documents" and used that. After confirming the location of your Vault, you'll see Obsidian's default interface.

![Obsidian interface](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ufwk9w3n6qo1b5anuvm4.png)

I prefer a dark color scheme, so I changed it in **Settings -> Appearance -> Base color scheme**.

![Changing to a dark color theme in Obsidian](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ap4valpccqvjbjn8rmu1.png)

Further down in the same screen, I increased the interface zoom in **Advanced -> Zoom Level**.

![Increasing interface zoom level in Obsidian](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sxhkge8d3gub6coq2val.png)

After that and still on the Settings window, I went to **Community Plugins-> Turn on Community Plugins** to enable community plugins. We'll need this to install some nice plugins that will help us make the most of Obsidian.

![Enabling community plugins on Obsidian](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/67j9to7i7tx2rdd2gvq0.png)

At this point, Obsidian is already functional, so you can start creating folders and organizing markdown documents. In the next step we'll install a few plugins to help with content planning and project management.

## 3. Installing Templater and Tasks plugins

Obsidian has a large collection of community-contributed plugins to serve various user needs. For this guide, we'll install [Templater](https://github.com/SilentVoid13/Templater) and [Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks), two plugins that can be really powerful when combined to create notes and task lists.

### Templater
_It defines a templating language that lets you insert variables and functions results into your notes. It will also let you execute JavaScript code manipulating those variables and functions._

We'll use Templater to set up a few default templates per folder. So when you create a new "tutorial" type of content, it will automatically use the designated "tutorial" template. We'll do the same for projects.

First, create a new folder for your templates in your Vault. You can call it "Templates". Then, go to `Settings -> Templater` and set up the `Template folder location` to the newly created directory. Also enable `Trigger Templater on new file creation` .

![Setting up Obsidian Templater plugin](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gq3z9ziuljmg2343sjx9.png)

Now you can start creating templates for different content types, projects, etc, and match each template with a content folder. We'll set up two templates in this guide: **Project** and **Content**.

Create a new file in your Templates folder and call it "Project". You can use the following template as base, customizing it to better fit your needs:

```markdown
---
name: Project Name
createdAt: <% tp.date.now() %>
description: A project to do X in Z
tags:
  - tag1
  - tag2
  - tag3
---

## To Do
- [ ] Task 01 ⏫ 
- [ ] Task 02
- [ ] Task 03

## Milestones

- Milestone 1
- Milestone 2
- Milestone 3 

## Ideas
- Idea 01
- Idea 02
- Idea 03
```


Create another file and call it "Content" - this will be your content template. You can use the following as base:

```markdown
---
title: How to Do This Thing
description: Learn how to do this thing on Linux
tags:
  - tag1
  - tag2
  - tag3
---
## Introduction
Introduce the thing.

##  1. Doing the first thing
Explain how to do the first step.

## 2. Doing a second thing
Explain how to do the second step.

## 3. Doing a third thing
Explain how to do the third step.

## Conclusion
Quick recap, final remarks, and how to learn more.

---

### Content Launch Checklist
- [ ] Content published to DEV
- [ ] Content shared on X/Twitter
- [ ] Content shared on LinkedIn
- [ ] Short video published on Reels (Instagram)
- [ ] Short video published on YouTube Shorts
- [ ] Long video shared on YouTube
- [ ] Video shared on YouTube

```

After setting up both templates, create a "Project" folder to save your project pages and a "Content" folder to save tutorial pages. Then go to `Settings -> Templater` then navigate to **Folder Templates** to set up the Project and Tutorial content types. You should now associate each folder with its corresponding template.

![Setting up Obsidian with folder templates](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gc5u2cd6jaxrf24pymiu.png)

After applying the changes, check that everything works as expected by right-clicking on the content or project folder and creating a new note there. The new note should be created using its designated template.

### Tasks
_Track tasks across your entire vault. Query them and mark them as done wherever you want. Supports due dates, recurring tasks (repetition), done dates, sub-set of checklist items, and filtering._

The Tasks plugin is very powerful because it allows you to create elaborate task lists and search/filter tasks from your whole Vault to be listed in a single document. You can, for instance, list all your TO DO tasks from all your projects, using various filters to surface only what's relevant or high priority.

As you may have noticed in the previous step where we set up Templater templates, we added a _TO DO_ list to the **Project** template and a _Content Launch Checklist_ to the **Tutorial** template. We can surface these tasks on another markdown document that we can use to have a high-level overview of all your open tasks.

Create a new file in the root of your vault and call it "Tasks". Copy the following raw content to this file:


~~~

### Projects
```tasks
not done
filter by function task.file.folder === "Projects/"
```


###  Content
```tasks
not done
filter by function task.file.folder === "Content/"
```
~~~

Now when you change from **editing** mode to **reading** mode, you'll get two lists with your TO DO tasks from the "Projects" folder and the "Content" folder, similar to this:

![Showing all TO DO tasks in Obsidian](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rouj0qavzntad8ygt8v9.png)

You can create multiple pages like this with different search filters to give you complete visibility on your plans and tasks.  Here I also created a "Completed Work" page to show tasks that are marked as "done".  For that, you can use a simple query like the following:

~~~
```tasks
done
```
~~~


Check the [Tasks plugin documentation](https://github.com/obsidian-tasks-group/obsidian-tasks) to learn more about the powerful search features provided by the plugin.

## Final Considerations

Obsidian is a powerful text writing application that allows users to customize it to their very specific needs. With a few plugins, you can turn your Obsidian into a powerful helper to plan and track content, new ideas, and projects.

In this guide we saw how to create a basic setup using the Templater and Tasks plugins to help you track your tasks for content creation and other projects in general. Based on what you learned here, you can further customize your folders and templates in a way that best suits your needs. 

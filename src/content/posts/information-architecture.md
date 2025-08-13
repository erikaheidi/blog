---
title: 'Information Architecture and Content Planning for Documentation Websites'
published: 2023-01-15
description: "In this post we'll learn about information architecture in the context of documentation websites and see tips to get your docs organized."
tags: [ 'technical writing' ]
---

In a [previous article in this series](/tech-writing/20221216_setting-up-a-documentation-site), we've seen how to set up a dedicated documentation website with Hugo, and how to host it for free on Netlify. Now you may be asking yourself what is the best way to organize your documentation so that users can make the best out of it and are able to find what they need more easily.

Although there is no magic formula to write great docs, some things will be decisive in creating a good experience for the final user. Organization, content type consistency, and good navigation are important features for any documentation.

In this post we'll learn about information architecture in the context of documentation websites and see tips to get your docs organized.

## 1. Introduction to Information Architecture
The term "Information Architecture" (IA) is used in multiple fields of study to refer to the practice of organizing and labeling (or categorizing) content in such a way that supports usability and _findability_. In the context of user experience, one of the main goals of IA is to reduce the cognitive load necessary for users to find the content they need.

Information Architecture studies will take into consideration three elements that compose the "Information Ecology" of any body of content: **user**, **content**, and **context**. These must be aligned in order to create a good experience for final users, whether it's in a physical library or on a documentation website.

When talking specifically about websites, authors Louis Rosenfeld and Peter Morville identified 4 components for a successful information architecture in their book [Information Architecture for the World Wide Web](https://books.google.nl/books/about/Information_Architecture_for_the_World_W.html?id=hLdcLklZOFAC&redir_esc=y):

- **Organization systems**: refers to the groups or categories in which content is organized. Documentation websites typically use a hierarchical system with broader categories on top, narrowing down to more specific ones as you navigate further down the taxonomy tree.
- **Labeling systems**: labels help users quickly identify sections and categories of content.
- **Navigation systems**: help users navigate the content, and can be of different types. A website can combine various styles of navigation to help surface content that otherwise would be difficult to find.
- **Search systems**: it is important to allow users to search through your content, since navigation alone is not likely to bring all relevant results a user is looking for.

Most CMSs and static site generators will have implementations of these systems as built-in features. Your job is to plan your content structure and taxonomy, keeping in mind your project's context and audience.

## 2. Content Structure for Static Websites
Most static site generators that are used for documentation websites (such as Hugo or mkdocs) rely heavily on folder hierarchy to define how content is grouped and exhibited.

If you ever tried to optimize a website for search engines you'll know that changing a URL structure later on will have a negative impact on users experience, unless you make sure to include redirects, which can be difficult to set up. That's why it's so important to plan how your content will be organized, and do it in such a way that allows your documentation to grow, hopefuly without over-engineering it. You don't want an excessively nested structure of folders, but you have to make sure content is organized in a way that makes sense.

Defining categories and content types can be a good starting point to decide how you want to organize your top-level directories. Here are some popular choices, from more broad to more specific:

- By locale / language, e.g.: **eng_US**, **pt_BR**...
- By project version, e.g.: **latest**, **2.2.1**...
- By topic, e.g.: **getting-started**, **advanced-usage**...
- By category, e.g.: **open-source**, **products**...
- By content type, e.g.: **tutorials**, **videos**...

Ultimately, the decision of how your top-level directories should look like depends on the size of your project and your own bandwidth for maintenance and updates. If you barely have the time to write basic docs, you shouldn't bother with multiple languages or multiple versions. This is important for large projects, thou - there will be people using legacy versions of your project and you should support them at least with the basic docs that were already there.

For small projects, organizing top-level directories by topic is a good strategy, since it allows you to put together a few different collections without over engineering the docs structure. If your site has content that doesn't fit well together (such as showing product docs and open source tutorials in the same space) you can use categories to help clarify the difference.

I wouldn't recommend using the content type as top-level taxonomy unless your content doesn't have a lot of variety in topics. It works well as a sub-level taxonomy, thou, inside a category or topic.

## 3. Content Types
A content type is a representation of information that follows a similar format, something that users can recognize across your body of content. Having different content types is a good way to provide variety in your content, and also enables you to reuse a similar content in a slightly different format, for a different audience. For instance, you may have a tutorial on a subject, going to each step in much detail. A _quickstart_ version of the tutorial could be more direct to the point, with only the commands you need to run to accomplish the same objective.

Defining content types can also help you speed up your content production because you won't need to think about the doc structure each time, you can reuse the same format of other articles already published.

## 4. Content Planning

Some of the decisions around content structure and taxonomy will only make sense when you have enough docs. You don't need to write them all at once before publishing your documentation website, but you can plan ahead and define your priorities.

Think about enough docs to make most users successful when trying your project. There will always be edge cases and scenarios that you can't predict or even reproduce on your own, so keep that in mind when defining your priorities. Documentation is never finished, there will always be things to include, update, or to improve.

Some topics or sections I consider essentials:

- **Getting Started**: A section showing in details how to get the project installed and test that it works.
- **Usage**: A section exploring a more detailed view of the project's usage and main commands.
- **Advanced**: A section with some advanced usage options and use cases.

Consider also having one or more step-by-step tutorials that show a practical scenario using your project, and a "troubleshooting" section or page.

## Practice Session
Now that we've seen some theory and tips to get you started with the information architecture of your documentation website, here are a few questions to help you practice:

**A)** Who is the audience of your project? What level of experience do you expect users to have in order to use your project?

**B)** What is the context around your project? Think about why you built it, how large is the surrounding community, if there are "competitors" or similar projects already established and how you position yourself in that market.

**C)** Consider the context of your project and your audience. What kind of content do they need? Are regular documentation / reference pages enough, or do you need to fill some gaps with conceptual content explaining elements from your ecosystem? Should you link out to other resources or create them yourself?

**D**) Which content types will serve your users better? Can you reuse content for increase output? What kind of media resources can you provide to enrich the user's experience? Think about graphs, diagrams, demo videos, slides...

**E**) What content must absolutely be there? Make a list (or spreadsheet, if you want to get organized) with tentative titles of all content you would like to have there. Then, organize them by priority and come down to 5 doc pages that should be your starting point.

## Conclusion

Information Architecture is a field of study that can help designers and content creators make decisions around how they organize and categorize content, in such a way to improve the user's experience. In the context of static sites, the content structure relies heavily on directory hierarchy, so it's important to plan in advance what kind of topics, categories, and content types you want to feature.

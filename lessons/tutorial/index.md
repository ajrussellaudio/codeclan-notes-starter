---
title: How to use this Gatsby starter
week: 0
day: 0
objectives: [
  "Be able to install and use this starter"
]
---

## Introduction

This project delivers our written notes to students. Notes are converted automatically from our `.md` Markdown files into rich HTML with highlighted code blocks and tables of contents. These pages are collected in an easily navigable index, ordered by the week and day of the course in which the lessons were delivered. The site which is generated is then available on Github Pages only to those who have the link (i.e. the students).

This document explains how to use this repo. **It should be deleted before deploying the generated site.**

## At a glance

To display Markdown files properly, the following points need to be met:

* Markdown files should be placed within the `/lessons` directory. Within this directory, folder structure is not important.
* Markdown files should include [front matter](#front-matter) at the top.
* `gatsby-config.js` should be configured with the current week and day, relative to the cohort.

## Front matter

In order to be displayed, Markdown files must include [front matter](http://assemble.io/docs/YAML-front-matter.html) at the top. Front matter is a block of YAML containing metadata about the lesson.

As a minimum, `title`, `week` and `day` fields must be included, for example:

```yaml
---
  title: Intro to Java
  week: 6
  day: 1
---
```

Optionally, an `objectives` field can also be included, which should contain an array of Learning Objectives for the lesson. These will be displayed as a list in the lesson index.

```yaml
---
  title: Test Driven Development Using Assert and Mocha
  week: 11
  day: 2
  objectives: [
    "Be able to write basic tests using Node's Assert module",
    "Be able to write unit tests using Assert in combination with Mocha",
    "Be able to run test files with Mocha using an npm script"
  ]
---
```

Will display in the index:

![Image of Week 11, Day 2 in the index](w11d2_tdd_js.png)

If no `objectives` field appears in the front matter, the index will display an excerpt of text from the top of the file.

Other fields can be included in the front matter, e.g. `module` and `duration`. These will be ignored by this app, but will still be displayed when viewing the file on Github.

## Technologies used

The main technology used here is [Gatsby](https://www.gatsbyjs.org/), a static site generator built with [React](https://reactjs.org/). Pages are built from standard React components, which pull data from Markdown files stored on the server with [GraphQL](https://graphql.org/). The difference is that rendering takes place on the server, not dynamically on the client. Typographic styling is handled with [Typography.js](https://kyleamathews.github.io/typography.js/).

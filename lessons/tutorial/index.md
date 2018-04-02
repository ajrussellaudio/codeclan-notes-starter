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

## Technologies used

The main technology used here is [Gatsby](https://www.gatsbyjs.org/), a static site generator built with [React](https://reactjs.org/). Pages are built from standard React components, which pull data from Markdown files stored on the server with [GraphQL](https://graphql.org/). The difference is that rendering takes place on the server, not dynamically on the client. Typographic styling is handled with [Typography.js](https://kyleamathews.github.io/typography.js/).

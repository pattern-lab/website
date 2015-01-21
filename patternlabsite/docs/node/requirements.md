---
layout: docs-node
title: Requirements | Pattern Lab Node
---

# Requirements

The requirements for the Node version of Pattern Lab vary depending on what features you want to use, but are centrally managed using the `package.json` file.

## Minimum Requirements for Building Pattern Lab

It's expected that you'll use the Node version of Pattern Lab locally on your computer to develop your atoms, molecules, organisms, templates and pages. To use the basic features of Pattern Lab, most people will opt to use grunt with Node. This comes with any download you may pull down from [Github](https://github.com/pattern-lab/patternlab-node) or [npm](https://www.npmjs.com/package/patternlab-node).

A templating engine called [Mustache](https://github.com/janl/mustache.js/) ships with Pattern Lab to construct patterns. 

You should _not_ need to set-up Apache, IIS or another web server to use Pattern Lab. 

## Minimum Requirements for Hosting Pattern Lab

Once you want to show off your edition of Pattern Lab to a client you might want to put it on your web host. There are **no** requirements for hosting your Pattern Lab site. The Pattern Lab site consists of HTML, CSS, and JavaScript. Simply upload the `public/` directory to your host and you should be good to go.


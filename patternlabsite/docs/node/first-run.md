---
layout: docs-node
title: Generating Pattern Lab Node for the First Time | Pattern Lab Node
---

# Generating Pattern Lab Node for the First Time
By default, a number of important pages, including the main page, **aren't** built when you first download the Node version of Pattern Lab. Before you visit your install of Pattern Lab you'll need to make sure all of the necessary pages have been built. 

## How to Generate the Pattern Lab Node Website

To generate the Pattern Lab website do the following:

1. Navigate to your installation directory from the command line.
2. Run 'grunt'

The site should now be generated in the 'public/' directory and available for browsing.

Running `grunt serve` will compile the patternlab front end and host it on [http://localhost:9001](http://localhost:9001) by default. Page will reload on any saved source code change.
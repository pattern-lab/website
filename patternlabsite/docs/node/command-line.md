---
layout: docs-node
title: Using The Command Line Options | Pattern Lab Node
---

# Using The Command Line Options

The following are grunt task arguments you may execute:

`patternlab`
With no arguments, patternlab runs the full builder, compiling patterns, and constructing the front-end site.

`patternlab:only_patterns`
Compile the patterns only, outputting to `./public/patterns`

`patternlab:v`
Retrieve the version of patternlab-node you have installed

`patternlab:help`
Get more information about patternlab-node, pattern lab in general, and where to report issues.

These are best suited to encorporate into your `Gruntfile.js` as you see shipped with Pattern Lab Node.
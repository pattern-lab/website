---
layout: docs-node
title: Exporting Patterns | Pattern Lab Node
---

# Exporting Patterns

While the Pattern Lab site is great for design, iteration, alignment, and discussion - you may find yourself wanting to export markup snippets into a different environment. This creates good opportunities for teams to maintain an up-to-date style guide that feeds their development and production source code.

`config.json` also has two properties that work together to export completed patterns for use in a production environment. Provide an array of keys and an output directory. Pattern Lab doesn't ship with any pattern export keys, but the default directory is `"./pattern_exports/"` created inside the install directory. Here is an example with three keys set.

    "patternExportKeys": ["molecules-primary-nav", "organisms-header", "organisms-header"],
    "patternExportDirectory": "./pattern_exports/"

Coupled with exported css (much easier to extract with existing tools like [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)), pattern export can help to maintain the relevancy of the design system by directly placing partials in a directory of your choosing.


---
layout: docs
title: Exporting Patterns | Pattern Lab Node
heading: Exporting Patterns
---

While the Pattern Lab website is great for design, iteration, alignment, and discussion - you may find yourself wanting to export whole pattern markup snippets into a different environment.

In Pattern Lab Node, `config.json` has two properties that work together to export completed patterns for use elsewhere. To export, provide an array of pattern-keys and an output directory. Pattern Lab Node doesn't ship with any pattern export keys, but the default directory is `'pattern_exports/'` created inside the install directory. Here is an example with three keys set.

```
"patternExportKeys": ["molecules-primary-nav", "organisms-header", "organisms-footer"],
"patternExportDirectory": "./pattern_exports/"
```

Couple this technique with exported CSS via tools like [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) to really make patterns portable.

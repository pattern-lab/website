---
layout: docs
title: Exporting Patterns | Pattern Lab
heading: Exporting Patterns
languages:
- language: node
- language: php
---

<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

While the Pattern Lab website is great for design, iteration, alignment, and discussion - you may find yourself wanting to export whole pattern markup snippets into a different environment.

In Pattern Lab Node, `patternlab-config.json` has two properties that work together to export completed patterns for use elsewhere. To export, provide an array of patternPartials and an output directory. Pattern Lab Node doesn't ship with any patternPartials specified for export. The default directory,`'./pattern_exports/'`, is created inside the install directory. Here is an example with three patternPartials set.

```javascript
"patternExportPatternPartials": ["molecules-primary-nav", "organisms-header", "organisms-footer"],
"patternExportDirectory": "./pattern_exports/"
```

Couple this technique with exported CSS via tools like [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) to really make patterns portable.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

Pattern Lab can export all of your patterns for you sans Pattern Lab's CSS and JavaScript. To export your patterns do the following:

1. In a terminal window navigate to the root of your project
2. Type `php core/console --export`

If you require your patterns to be exported without your global header and footer (_e.g. to export a clean molecule_) do the following:

1. In a terminal window navigate to the root of your project
2. Type `php core/console --export --clean`

In both cases the patterns will be exported to `./export/patterns`. The export directory is one of the many directories that can be [configured and changed](/docs/editing-source-files.html).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->

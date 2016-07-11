---
layout: docs
title: Editing the Configuration Options | Pattern Lab
heading: Editing the Configuration Options
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

Pattern Lab comes with a simple configuration file that allows you to modify certain aspects of the system. The configuration file can be found in `./config/config.yml`.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->


<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

Pattern Lab Node comes with a simple configuration file (`patternlab-config.json`) that allows you to modify certain aspects of the system. This file is found within [the editions](https://github.com/pattern-lab?utf8=%E2%9C%93&query=edition-node). It is used equally by edition tasks and the core library following example configuration is from [v2.1.1](https://github.com/pattern-lab/patternlab-node/releases/tag/v2.1.1) of Pattern Lab Node Core.

```javascript
{
  "paths" : {
    "source" : {
      "root": "./source/",
      "patterns" : "./source/_patterns/",
      "data" : "./source/_data/",
      "meta": "./source/_meta/",
      "annotations" : "./source/_annotations/",
      "styleguide" : "./node_modules/styleguidekit-assets-default/dist/",
      "patternlabFiles" : "./node_modules/styleguidekit-mustache-default/views/",
      "js" : "./source/js",
      "images" : "./source/images",
      "fonts" : "./source/fonts",
      "css" : "./source/css/"
    },
    "public" : {
      "root" : "./public/",
      "patterns" : "./public/patterns/",
      "data" : "./public/styleguide/data/",
      "annotations" : "./public/annotations/",
      "styleguide" : "./public/styleguide/",
      "js" : "./public/js",
      "images" : "./public/images",
      "fonts" : "./public/fonts",
      "css" : "./public/css"
    }
  },
  "styleGuideExcludes": [
  ],
  "defaultPattern": "all",
  "defaultShowPatternInfo": false,
  "cleanPublic" : true,
  "patternExtension": "mustache",
  "ignored-extensions" : ["scss", "DS_Store", "less"],
  "ignored-directories" : ["scss"],
  "debug": false,
  "ishControlsHide": {
    "s": false,
    "m": false,
    "l": false,
    "full": false,
    "random": false,
    "disco": false,
    "hay": true,
    "mqs": false,
    "find": false,
    "views-all": false,
    "views-annotations": false,
    "views-code": false,
    "views-new": false,
    "tools-all": false,
    "tools-docs": false
  },
  "ishMinimum": "240",
  "ishMaximum": "2600",
  "patternStateCascade": ["inprogress", "inreview", "complete"],
  "patternStates": {
  },
  "patternExportPatternPartials": [],
  "patternExportDirectory": "./pattern_exports/",
  "cacheBust": true,
  "starterkitSubDir": "dist"
}
```

Configuration documentation can be found on the [Github wiki](https://github.com/pattern-lab/patternlab-node/wiki/Configuration).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

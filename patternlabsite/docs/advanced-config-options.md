---
layout: docs
title: Editing the config.ini Options | Pattern Lab
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tab-panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

Pattern Lab comes with a simple configuration file that allows you to modify certain aspects of the system. The following example configuration is from `v0.7.9` of Pattern Lab.

    /*
     * Configuration Options for Pattern Lab
     * If config.ini doesn't exist Pattern Lab will try to create a new version
     */

    v  = "0.7.9"

    // file extensions to ignore when building or watching the source dir, separate with a comma
    ie = "scss,DS_Store,less"

    // directories and files to ignore when building or watching the source dir, separate with a comma
    id = "scss,.svn,.sass-cache"

    // choose if these services should be loaded in the nav and their ports
    autoReloadNav  = "true"
    autoReloadPort = "8002"
    pageFollowNav  = "true"
    pageFollowPort = "8003"

    // whether the qr code generator should be loaded automatically in the nav
    qrCodeGeneratorOn = "false"

    // pattern lab's xip host if you have it configured, to be used with the QR code generator
    xipHostname = "http://patternlab.*.xip.io"

    // whether the public directory should be cleaned when generating your site
    cleanPublic = "true"

    // the minimum and maximum for the viewport resizer
    ishMinimum = "240"
    ishMaximum = "2600"

    // which, if any, controls to hide in the nav, separate with a comma
    ishControlsHide = "hay"

    // the order of pattern states, css class names
    patternStates = "inprogress,inreview,complete"

    // the pattern types that shouldn't be included in the style guide, useful if you nest pages/templates
    styleGuideExcludes = ""

    // should the cache buster be on, set to false to set the cacheBuster value to 0
    cacheBusterOn = "true"

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->


<!--- start node -->

<div class="tab-panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

Pattern Lab Node comes with a simple configuration file (`config.json`) that allows you to modify certain aspects of the system. The following example configuration is from [v0.15.1](https://github.com/pattern-lab/patternlab-node/releases/tag/v0.15.1) of Pattern Lab Node.

```
    {
    	"patterns" : {
    		"source" : "./source/_patterns/",
    		"public" : "./public/patterns/"
    	},
     	"styleGuideExcludes": [
     		"templates",
     		"pages"
     	],
    	"ignored-extensions" : ["scss", "DS_Store", "less"],
    	"ignored-directories" : ["scss"],
    	"debug": false,
    	"ishControlsVisible": {
    		"s": true,
    		"m": true,
    		"l": true,
    		"full": true,
    		"random": true,
    		"disco": true,
    		"hay": true,
    		"mqs": true,
    		"find": true,
    		"views-all": true,
    		"views-annotations": true,
    		"views-code": true,
    		"views-new": true,
    		"tools-all": true,
    		"tools-sync": true,
    		"tools-shortcuts": true,
    		"tools-docs": true
    	},
      "patternStates": {
     	  "homepage-emergency" : "inprogress"
       },
      "patternExportKeys": [],
      "patternExportDirectory": "./pattern_exports/",
      "baseurl" : ""
    }
```

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

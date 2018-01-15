---
layout: docs
title: Editing the Configuration Options | Pattern Lab
heading: Editing the Configuration Options
languages:
- language: node
- language: php
---

<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

Pattern Lab Node comes with a configuration file [(`patternlab-config.json`)](https://github.com/pattern-lab/patternlab-node/blob/master/patternlab-config.json) that allows you to modify certain aspects of the system. The latest default values are included within  This file is shipped within [the editions](https://github.com/pattern-lab?utf8=%E2%9C%93&query=edition-node) or can be supplied from core and the command line interface. Below is a description of each configuration option and how it affects Pattern Lab Node

### cacheBust
Instructs Pattern Lab to append a unique query string to Javascript and CSS assets throughout the frontend.

``` javascript
"cacheBust": true
```

**default**: `true`

### cleanPublic
Sets whether or not to delete `public.patterns/` upon each build of Pattern Lab. When set to false, [incremental builds](https://github.com/pattern-lab/patternlab-node/wiki/Incremental-Builds) are also enabled.

**default**: `true`

### defaultPatttern
Sets a specific pattern upon launch of the styleguide. This pattern will not be available in the navigation, or in view all pages. The only way to get to it will be via a refresh. Set it using the [short-hand pattern-include syntax](http://localhost:4000/docs/pattern-including.html):

``` javascript
"defaultPattern": "pages-welcome",
```

A special value of `all` can also be supplied to display all patterns on load.

**default**: `all`

### defaultShowPatternInfo
Sets whether or not you want the styleguide to load with the pattern info open or closed.

**default**: `false`

### ishControlsHide
Sets whether or not to hide navigation options within the styleguide.

**default**:

``` javascript
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
}
```

### ishViewportRange
Sets the boundaries of each of the viewport toggles, 'S'mall, 'M'edium, and 'L'arge. Clicking on one of these buttons will randomly set the ish Viewport to a value within the given range. Setting the range to the same number can effectively set an exact value. The first entry in `ishViewportRange.s` is the `ishViewportMinimum`, which is now obsolete. The second entry in `ishViewportRange.l` is the `ishViewportMaximum`, which is now also obsolete.

**default**:

``` javascript
"ishViewportRange": {
  "s": [240, 500],
  "m": [768, 768],
  "l": [800, 2600]
},
```

### logLevel
Sets the level of verbosity for Pattern Lab Node logging. 

* `error` will output a message as a thrown error
* `warning` will output all warnings plus above
* `info` will output all info messages, plus above (intended default)
* `debug` will output all debug messages, plus above
* `quiet` will output ZERO logs

This replaces the now obsolete `debug` flag.

**default**: `info`

### outputFileSuffixes

Sets the naming of output pattern files. Suffixes are defined for 'rendered', 'rawTemplate', and 'markupOnly' files. This configuration is needed for some PatternEngines that use the same input and output file extensions. Most users will not have to change this.

``` javascript
"outputFileSuffixes": {
  "rendered": ".rendered",
  "rawTemplate": "",
  "markupOnly": ".markup-only"
},
```

### paths

Sets the configurable source and public directories for files Pattern Lab Node operates within. Build, copy, output, and server operations rely upon these paths. Paths may be relative or absolute. Note the `patternlabFiles` which help create the front end styleguide. Note also the intentional repetition of the nested structure, made this way for maximum flexibility. These are unlikely to change unless you customize your environment.

**default** :

```javascript
  "paths" : {
    "source" : {
      "root": "./source/",
      "patterns" : "./source/_patterns/",
      "data" : "./source/_data/",
      "meta": "./source/_meta/",
      "annotations" : "./source/_annotations/",
      "styleguide" : "./node_modules/@pattern-lab/styleguidekit-assets-default/dist/",
      "patternlabFiles" : {
        "general-header": "./node_modules/@pattern-lab/styleguidekit-mustache-default/views/partials/general-header.mustache",
        "general-footer": "./node_modules/@pattern-lab/styleguidekit-mustache-default/views/partials/general-footer.mustache",
        "patternSection": "./node_modules/@pattern-lab/styleguidekit-mustache-default/views/partials/patternSection.mustache",
        "patternSectionSubtype": "./node_modules/@pattern-lab/styleguidekit-mustache-default/views/partials/patternSectionSubtype.mustache",
        "viewall": "./node_modules/@pattern-lab/styleguidekit-mustache-default/views/viewall.mustache"
      },
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
```

### patternExtension

Sets the panel name and language for the code tab on the styleguide. Since this only accepts one value, this is a place where mixed pattern trees (different PatternEngines in the same instance of Pattern Lab) does not quite work.

**default**: `mustache`

### patternStateCascade

See the [Pattern State Documentation](http://patternlab.io/docs/pattern-states.html#node)

**default**: 

``` javascript
"patternStateCascade": ["inprogress", "inreview", "complete"],
```

### patternExportDirectory
Sets the location that any export operations should output files to. This may be a relative or absolute path.

**default**: `./pattern_exports/`

### patternExportPatternPartials
Sets an array of patterns (using the [short-hand pattern-include syntax](http://localhost:4000/docs/pattern-including.html)) to be exported after a build.

For example, to export the navigation, header, and footer, one might do:

``` javascript
"patternExportPatternPartials": ["molecules-primary-nav", "organisms-footer", "organisms-header"],
```

**default**: `[]`

### serverOptions
Sets live-server options. See the [live-server documentation](https://github.com/pattern-lab/live-server#usage-from-node) for more details.

**default**: 

``` javascript
"serverOptions": {
  "wait": 1000
},
```

### styleGuideExcludes
Sets whole pattern types to be excluded from the "All" patterns page on the styleguide. This is useful to decrease initial load of the styleguide. For example, to exlude all patterns under `templates` and `pages`, add the following:

``` javascript
"styleGuideExcludes": [
	"templates",
	"pages"
]
```

These template and page patterns would still be accessible via navigation.

**default**: `[]`

### theme
Sets the theme options for the styleguide. There are three options: 'color', 'density', and 'layout'.

Available values are:

``` javascript
"theme" : {
  "color" : "dark" | "light",
  "density" : "compact" | "cozy" | "comfortable",
  "layout" : "horizontal" | "vertical"
}

```

See the [initial release notes](https://github.com/pattern-lab/styleguidekit-assets-default/releases/tag/v4.0.0-alpha.2) for the theme feature for example output.

**default**: 

``` javascript
"theme" : {
  "color" : "dark",
  "density" : "compact",
  "layout" : "horizontal"
}

```



{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

Pattern Lab comes with a simple configuration file that allows you to modify certain aspects of the system. The configuration file can be found in `./config/config.yml`.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->
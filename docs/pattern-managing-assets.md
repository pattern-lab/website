---
layout: docs
title: Managing Pattern Assets | Pattern Lab
heading: Managing Pattern Assets
languages:
- language: node
- language: php
---

<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

Assets for patterns - including JavaScript, CSS, and images - should be stored and edited in the `./source/` directory. Pattern Lab will move these assets to the `./public/` directory for you when you generate your site or when you watch the `./source/` directory for changes. *You can name and organize your assets however you like.* If you would like to use `./source/stylesheets/` to store your styles instead of `./source/css/` you can do that. The structure will be maintained when they're moved to the `./public/` directory.

Pattern Lab ships with copy tasks in the `Gruntfile.js` or `Gulpfile.js` of [the Editions](https://github.com/pattern-lab/?utf8=%E2%9C%93&query=edition-node) that copy your assets for you.

This structure is meant to be extended to suit your purposes. Change targets, move files, or ignore certain filetypes altogether. **Note**: If you make changes to `Gruntfile.js` or `Gulpfile.js`, such as to copy a new directory, and have [auto re-generation and browser reload enabled](/docs/advanced-auto-regenerate.html#node), you will need to stop and start your tasks to pick up the changes.

## Configuring Asset Locations

Pattern Lab has a configuration object which allows users to separate source patterns and assets from what is generated. The paths are managed within `patternlab-config.json`, found at the root of the edition project. The contents are sampled here:

```javascript
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
  }
```

Note how some sets of files even extend into the "vendor" `./node_modules/` directory. Relative paths are the default but absolute paths are supported also. You may also use these paths within the Grunt or Gulp taskfiles by referring to the `paths()`  function.

## Adding Assets to the Pattern Header &amp; Footer

Static assets like Javascript and CSS **are not** added automagically to your patterns. You need to add them manually to the [shared pattern header and footer](/docs/advanced-auto-regenerate.html#node).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

Assets for patterns - including JavaScript, CSS, and images - should be stored and edited in the `./source/` directory. Pattern Lab will move these assets to the `./public/` directory for you when you generate your site or when you watch the `./source/` directory for changes. **You can name and organize your assets however you like.** If you would like to use `./source/stylesheets/` to store your styles instead of `./source/css/` you can do that. There is nothing to configure. The structure will be maintained when they're moved to the `./public/` directory.

## Ignoring and Not Moving Assets Based on File Extension

By default, Pattern Lab will not move assets with the following file extensions:

* `.less`
* `.scss`
* `.DS_Store`

To ignore more file extensions edit the `ie` configuration option in `./config/config.yml`. For example, to ignore `*.png` files your `ie` configuration option would look like:

    ie:
      - DS_Store
      - less
      - scss
      - png

## Ignoring and Not Moving Assets Based on Directory

By default, the PHP version of Pattern Lab will ignore **all** assets in directories that exactly match:

* `scss`

To ignore more directories just edit the `id` configuration option in `./config/config.yml`. For example, to ignore directories named `test/` your `id` configuration option would look like:

    id:
      - scss
      - test

**Important:** Pattern Lab will only ignore exact matches of ignored directories. For example, if you had a directory named `cool_scss/` it, and the assets underneath it, _would_ be moved to `./public/` even though `scss` was in the name of the directory.

## Adding Assets to the Pattern Header &amp; Footer

Static assets like Javascript and CSS **are not** added automagically to your patterns. You need to add them manually to the [shared pattern header and footer](/docs/pattern-header-footer.html).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->
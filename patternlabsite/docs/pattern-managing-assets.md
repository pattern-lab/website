---
layout: docs
title: Managing Pattern Assets | Pattern Lab
heading: Managing Pattern Assets
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tab-panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

Assets for patterns, including JavaScript, CSS, and images, should be stored in the `source/` directory. The PHP version of Pattern Lab will move these assets to the `public/` directory for you when you generate your site or when you watch the `source/` directory for changes. You can name and nest your assets however you like. The structure will be maintained when they're moved to the `public/` directory.

## Ignoring Assets Based on File Extension

By default, the PHP version of Pattern Lab will ignore assets with the following file extensions:

* `.less`
* `.scss`
* `.DS_Store`

To ignore more file extensions just edit the `ie` variable in `config/config.ini`. For example, to ignore `.png` files your `ie` variable would look like:

```
ie = "scss,DS_Store,less,png"
```

## Ignoring All Assets in a Directory

By default, the PHP version of Pattern Lab will ignore assets in directories with the following name:

* `scss`

To ignore more directories just edit the `id` variable in `config/config.ini`. For example, to ignore directories named `test/` your `id` variable would look like:

```
id = "scss,test"
```

**Important:** The PHP version of Pattern Lab will only ignore exact matches of ignored directories. For example, if you had a directory named `cool_scss` it, and the assets underneath it, _would_ be moved to `public/` even though `scss` was in the name of the directory.

## Adding Assets to the Pattern Header &amp; Footer

Static assets like Javascript and CSS **are not** added automagically to your patterns. You need to add them manually to the [shared pattern header and footer](/docs/pattern-header-footer.html).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->

<!--- start node -->

<div class="tab-panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

Assets for patterns, including JavaScript, CSS, and images, should be stored in the `source/` directory. The Node version of Pattern Lab will move these assets to the `public/` directory for you when you generate your site or when you watch the `source/` directory for changes. You can name and nest your assets however you like. Pattern Lab Node ships with copy tasks in the `Gruntfile.js` or `Gulpfile.js` that copy your assets for you. Here's an example of the from the `Gruntfile`:

```javascript
copy: {
  main: {
    files: [
    { expand: true, cwd: './source/js/', src: '*', dest: './public/js/'},
    { expand: true, cwd: './source/css/', src: '*.css', dest: './public/css/' },
    { expand: true, cwd: './source/images/', src: ['*.png', '*.jpg', '*.gif', '*.jpeg'], dest: './public/images/' },
    { expand: true, cwd: './source/images/sample/', src: ['*.png', '*.jpg', '*.gif', '*.jpeg'], dest: './public/images/sample/'},
    { expand: true, cwd: './source/fonts/', src: '*', dest: './public/fonts/'},
    { expand: true, cwd: './source/_data/', src: 'annotations.js', dest: './public/data/' }
    ]
  },
  css: {
    files: [
    { expand: true, cwd: './source/css/', src: '*.css', dest: './public/css/' }
    ]
  }
},
```

This structure is meant to be extended to suit your purposes. Change targets, move files, or ignore certain filetypes altogether. **Note**: If you make changes to `Gruntfile.js` or `Gulpfile.js`, such as to copy a new directory, and have [auto re-generation and browser reload enabled](/docs/node/advanced-auto-reloading-the-browser.html), you will need to stop and start your tasks to pick up the changes.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

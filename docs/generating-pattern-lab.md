---
layout: docs
title: Generating Pattern Lab | Pattern Lab
heading: Generating Pattern Lab
languages:
- language: node
- language: php
---

<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

Running Pattern Lab for the first time will vary depending on which version was [installed](/docs/installation.html). 

## edition-node
If you installed [edition-node](https://github.com/pattern-lab/edition-node), run the following command to serve Pattern Lab and watch for changes:

```
npm run pl:serve
```

## edition-twig
If you installed [edition-twig](https://github.com/pattern-lab/edition-php-twig-standard), run the following command to serve Pattern Lab and watch for changes:

```
php core/console --watch
```


## edition-node-gulp (legacy)
If you installed Pattern Lab [edition-node-gulp](https://github.com/pattern-lab/edition-node-gulp), run the following command to serve Pattern Lab and watch for changes:

```
gulp patternlab:serve
```

## Pattern Lab is now running: now what?
Your Pattern Lab should now be populated and [available for viewing](/docs/viewing-patterns.html#node) and you can [make changes to your patterns](/docs/editing-source-files.html).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

Pattern Lab consists of an empty shell when you first install it. To populate the public-facing side of Pattern Lab with your content and patterns do the following:

1. In a terminal window navigate to the root of your project
2. Type `php core/console --generate`

Your Pattern Lab install should now be populated and [available for viewing](/docs/viewing-patterns.html). As you [make changes to your patterns](/docs/editing-source-files.html) you'll need re-generate your site using step 2 above.

Manually re-generating your site after each change or collection of changes can be cumbersome. Pattern Lab can [watch files in the `./source/` directory for changes and re-generate the site automatically](/docs/advanced-auto-regenerate.html). The Pattern Lab website can also be [automatically reloaded](/docs/advanced-reload-browser.html).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->

---
layout: docs
title: Generating Pattern Lab | Pattern Lab
heading: Generating Pattern Lab
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

Pattern Lab consists of an empty shell when you first install it. To populate the public-facing side of Pattern Lab with your content and patterns do the following:

1. In a terminal window navigate to the root of your project
2. Type `php core/console --generate`

Your Pattern Lab install should now be populated and [available for viewing](/docs/viewing-pattern-lab.html). As you [make changes to your patterns](/docs/editing-source-files.html) you'll need re-generate your site using step 2 above.

Manually re-generating your site after each change or collection of changes can be cumbersome. The PHP and Node versions of Pattern Lab come with the ability to [watch files in the `./source/` directory for changes and re-generate the site automatically](/docs/advanced-auto-regenerate.html). The Pattern Lab website can also be [automatically reloaded](/docs/advanced-reload-browser.html).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->

<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

By default, a number of important pages, including the main page, **aren't** built when you first download the Node version of Pattern Lab. Before you visit your install of Pattern Lab you'll need to make sure all of the necessary pages have been built.

## How to Generate the Pattern Lab Node Website

To generate the Pattern Lab website do the following:

1. Navigate to your installation directory from the command line.
2. If you are using grunt, type `grunt patternlab`. If you are using gulp, type `gulp patternlab`

The site should now be generated in the 'public/' directory and available for browsing.

Additionally, you can [self-host the Pattern Lab website](/docs/advanced-page-follow.html#node) and sync it with multiple browsers or devices.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

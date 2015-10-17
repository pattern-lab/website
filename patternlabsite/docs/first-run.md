---
layout: docs
title: Generating Pattern Lab for the First Time | Pattern Lab
heading: Generating Pattern Lab for the First Time
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tab-panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

By default, a number of important pages, including the main page, **aren't** built when you first download the PHP version of Pattern Lab. Before you visit your install of Pattern Lab you'll need to make sure all of the necessary pages have been built. 

## How to Generate the Pattern Lab Website

To generate the Pattern Lab website do the following:

1. Open `core/scripts/`
2. Double-click `generateSite.command`

For Linux and Windows users, you can also generate the Pattern Lab website from the command line. To do so open a command prompt and navigate to the root of the patternlab-php directory. Type:

    php core/builder.php -g

The site should now be generated and available for browsing.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->

<!--- start node -->

<div class="tab-panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

By default, a number of important pages, including the main page, **aren't** built when you first download the Node version of Pattern Lab. Before you visit your install of Pattern Lab you'll need to make sure all of the necessary pages have been built. 

## How to Generate the Pattern Lab Node Website

To generate the Pattern Lab website do the following:

1. Navigate to your installation directory from the command line.
2. Run 'grunt'

The site should now be generated in the 'public/' directory and available for browsing.

Running `grunt serve` will compile the patternlab front end and host it on [http://localhost:9001](http://localhost:9001) by default. Page will reload on any saved source code change.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->
---
layout: docs
title: Stopping public/ from Being "Cleaned" | Pattern Lab
heading: Stopping `public/` from Being "Cleaned"
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

By default Pattern Lab deletes most of the files and directories found in `./public/` when building your site. Developers are supposed to use `./source/` to store their files. This includes static assets like images, JavaScript and CSS. When generating your site Pattern Lab will move all of the static assets found in `./source/` to `./public/` so there should be no reason not to use `./source/`.

That said, developers might be more comfortable storing their static assets in `./public/`. To turn off the "clean `./public/`" feature do the following:

1. Open `./config/config.yml`.
2. Change the `cleanPublic` option from `'true'` to `'false'`

When you next generate your site or start the watch `public/` will no longer be cleaned.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->


<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

By default Pattern Lab deletes most of the files and directories found in `public/` when generating your site or starting the watch. Developers are supposed to use `source/` to store their files. This includes static assets like images, JavaScript and CSS. When generating your site Pattern Lab moves all of the static assets found in `source/` to `public/` (_after cleaning it_) so there shouldn't be a reason not to use `source/`.

That said, developers might be more comfortable storing their static assets in `public/`. In order to turn-off the automatic cleaning of `public/` do the following:

1. Open patternlab-config.json` at the root of your project
2. Change the `cleanPublic` from `"true"` to `"false"`

When you next generate your site or start the watch `public/` will no longer be cleaned. Identically named files will be overridden, however.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

---
layout: docs
title: Installing Pattern Lab | Pattern Lab
heading: Installing Pattern Lab
languages:
- language: node
- language: php
---

<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

{% include download-node.html %}

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

{% include download-php.html %}

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->
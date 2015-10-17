---
layout: docs
title: Installation | Pattern Lab
heading: Installation
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tab-panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

In order to install the PHP version of Pattern Lab, first make sure you have the [required version of PHP](/docs/requirements.html) and then:

1. Visit the [Pattern Lab project on Github](https://github.com/pattern-lab/patternlab-php).
2. Download the Pattern Lab files either by [getting the a ZIP file of the project](https://github.com/pattern-lab/patternlab-php/archive/master.zip) or by cloning the project from the [Github repository](https://github.com/pattern-lab/patternlab-php).
3. [Generate Pattern Lab for the first time](/docs/first-run.html).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->

<!--- start node -->

<div class="tab-panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

Installing the Node version of Pattern Lab with either a direct download from Github or by using `npm`. 

## Download

1. Visit the [Pattern Lab Node project on Github](https://github.com/pattern-lab/patternlab-node).
2. Download the Pattern Lab files either by [getting the a ZIP file of the project](https://github.com/pattern-lab/patternlab-node/archive/master.zip) or by cloning the project from the [Github repository](https://github.com/pattern-lab/patternlab-node).
3. [Generate Pattern Lab Node for the first time](/docs/node/first-run.html).

## npm

1. Make sure Node and npm are installed. A great guide can be found here: [https://docs.npmjs.com/getting-started/installing-node](https://docs.npmjs.com/getting-started/installing-node)
2. From the directory you want to install Pattern Lab within, run `npm install patternlab-node`
3. [Generate Pattern Lab Node for the first time](/docs/node/first-run.html).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->
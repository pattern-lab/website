---
layout: docs
title: Requirements | Pattern Lab
heading: Requirements
languages:
  - language: node
  - language: php
---

<!--- start node-->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

## Minimum Requirements

Pattern compilation is done with [Node](https://nodejs.org), using [npm](https://www.npmjs.com/) to manage project dependencies. You can follow the directions for [installing Node](https://nodejs.org/en/download/) on the Node website if you haven't done so already. Installation will include `npm`. The version of Node that maintainers develop against is documented [here](https://github.com/pattern-lab/patternlab-node/blob/dev/.nvmrc). Pattern Lab comes with its own local development webserver.

Because Pattern Lab's output consists of HTML, CSS, and JavaScript there are **no requirements** for hosting your Pattern Lab site. Simply upload the `./public/` directory to your host and you should be good to go.

{% endcapture %}
{{ m | markdownify }}

</div>
<!--- end node -->

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

The requirements for Pattern Lab 2 vary depending on what features you want to use.

## Minimum Requirements

To use the basic features of Pattern Lab to compile patterns, you must have **PHP 5.4+** installed. On Mac OS X Pattern Lab should work "out of the box." If you're on Windows you can [download PHP from PHP.net](http://windows.php.net/download/). Pattern Lab comes with its own built-in web server.

Because Pattern Lab's output consists of HTML, CSS, and JavaScript there are **no requirements** for hosting your Pattern Lab site. Simply upload the `./public/` directory to your host and you should be good to go.

## Highly Recommended: Composer

Pattern Lab uses [Composer](https://getcomposer.org/) to manage project dependencies. While Pattern Lab can be downloaded as a Zip we highly recommend installing Composer so you can easily update your project in the future. Please follow the directions for [installing Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) on the Composer website. We recommend you [install it globally](https://getcomposer.org/doc/00-intro.md#globally).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->

---
layout: docs
title: Requirements | Pattern Lab
heading: Requirements
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

The requirements for Pattern Lab 2 vary depending on what features you want to use.

## Minimum Requirements

### For Running Pattern Lab

To use the basic features of Pattern Lab, you must have **PHP 5.4+** installed. On Mac OS X Pattern Lab should work "out of the box." If you're on Windows you can [download PHP from PHP.net](http://windows.php.net/download/). Pattern Lab comes with its own built-in web server.

### For Hosting Pattern Lab

Because Pattern Lab's output consists of HTML, CSS, and JavaScript there are **no requirements** for hosting your Pattern Lab site. Simply upload the `./public/` directory to your host and you should be good to go.

## Composer is Highly Recommended

Pattern Lab uses [Composer](https://getcomposer.org/) to manage project dependencies. While Pattern Lab can be downloaded as a Zip we highly recommend installing Composer so you can easily update your project. Please follow the directions for [installing Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) on the Composer website. We recommend you [install it globally](https://getcomposer.org/doc/00-intro.md#globally).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->


<!--- start node-->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}


The requirements for the Node version of Pattern Lab vary depending on what features you want to use, but are centrally managed using the `package.json` file.

## Minimum Requirements for Building Pattern Lab

It's expected that you'll use the Node version of Pattern Lab locally on your computer to develop your atoms, molecules, organisms, templates and pages. To use the basic features of Pattern Lab, most people will opt to use grunt with Node. This comes with any download you may pull down from [Github](https://github.com/pattern-lab/patternlab-node) or [npm](https://www.npmjs.com/package/patternlab-node).

A templating engine called [Mustache](https://github.com/janl/mustache.js/) ships with Pattern Lab to construct patterns.

You should _not_ need to set-up Apache, IIS or another web server to use Pattern Lab.

## Minimum Requirements for Hosting Pattern Lab

Once you want to show off your edition of Pattern Lab to a client you might want to put it on your web host. There are **no** requirements for hosting your Pattern Lab site. The Pattern Lab site consists of HTML, CSS, and JavaScript. Simply upload the `public/` directory to your host and you should be good to go.

{% endcapture %}
{{ m | markdownify }}

</div>
<!--- end node -->

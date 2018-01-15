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


The requirements for Pattern Lab 2 vary depending on what features you want to use, but all have the same foundation.

## Minimum Requirements

 Pattern compilation is done with [Node](https://nodejs.org), uses [npm](https://www.npmjs.com/) to manage project dependencies, and either [gulp.js](http://gulpjs.com/) or [grunt.js](http://gruntjs.com/) to run tasks and interface with the core library. **Node 4.X+** suffices. You can follow the directions for [installing Node](https://nodejs.org/en/download/) on the Node website if you haven't done so already. Installation will include npm. Pattern Lab comes with its own webserver.

Because Pattern Lab's output consists of HTML, CSS, and JavaScript there are **no requirements** for hosting your Pattern Lab site. Simply upload the `./public/` directory to your host and you should be good to go.


## Highly Recommended: Gulp and Grunt Globally Installed

It's also highly recommended that you [install gulp](https://github.com/gulpjs/gulp/blob/4.0/docs/getting-started.md) or [grunt](http://gruntjs.com/getting-started) globally.

> Note: The Node Gulp Edition of Pattern Lab uses Gulp 4, which may require a new global install of the Gulp command line interface. Follow the [gulp upgrade instructions](https://github.com/pattern-lab/edition-node-gulp/wiki/Updating-to-Gulp-4) if you already have gulp installed and need to upgrade. Gulp 4 is in alpha, but brings many benefits to the table and is relatively stable.

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

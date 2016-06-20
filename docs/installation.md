---
layout: docs
title: Installation | Pattern Lab
heading: Installation
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tabs__panel" id="php">
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

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

You can install the Node version of Pattern Lab a couple ways, and use either [grunt](http://gruntjs.com/) of [gulp](http://gulpjs.com/) to build and run the website. This page assumes that you have some familiarity with these tools, and can open the command line on your machine as administrator.

## Prerequisites

Make sure Node and npm are installed. A great guide can be found here: [https://docs.npmjs.com/getting-started/installing-node](https://docs.npmjs.com/getting-started/installing-node)

## Download Options

* Download the [latest release of Pattern Lab Node](https://github.com/pattern-lab/patternlab-node/releases/latest) from Github
* Via [npm](https://www.npmjs.com/), run `npm install patternlab-node` (Note this will auto install the grunt version currently. see below)
* **NOTE** Node version 4.X and 5.X have tentative support, citing [a lot of Windows issues](https://github.com/nodejs/node-gyp/issues/629). Upgrade node at your own risk until otherwise stated. I've tried to catalog some issues and troubleshooting steps on the [wiki](https://github.com/pattern-lab/patternlab-node/wiki/Windows-Issues).

## Choose Your Adventure! Vanilla, Grunt & Gulp

The Node version of Pattern Lab ships with two `package.json` files, a `Gruntfile.js`, and a `gulpfile.js`. The default is grunt currently. The core builder is not dependent on either.

## Getting Started - grunt

To run the Node version of Pattern Lab using grunt, do the following in the directory you downloaded and extracted the zipped release:

1. Run `npm install` from the command line.
2. Optionally, delete `package.gulp.json`, `gulpfile.js`, and `builder/patternlab_gulp.js` files if you are certain you don't need it.
* Not deleting `builder/patternlab_gulp.js` may cause a harmless error when running grunt. Delete it.
3. Run `grunt` or `grunt serve` from the command line.

This compiles all patterns, moves assets from `source/` to `public/`, and generates the website. It's strongly recommended to run `grunt serve` to have BrowserSync spin up and serve the files to you.

## Getting Started - gulp

To run the Node version of Pattern Lab using gulp, you need to swap out the default grunt configuration. Do the following in the directory you downloaded and extracted the zipped release:

1. Rename `package.json` to `package.grunt.json` or delete it if you don't intend on going back.
2. Rename `package.gulp.json` to `package.json`.
3. Run `npm install` from the command line.
4. Run `gulp` or `gulp serve` from the command line.

This compiles all patterns, moves assets from `source/` to `public/`, and generates the website. It's strongly recommended to run `gulp serve` to have BrowserSync spin up and serve the files to you.

## Switching Between Grunt and Gulp

It's not expected to toggle between the two build systems, but for those migrating between the two configurations, here are some general guidelines:

* Make sure your `package.json` files are correct per the Getting Started sections.
* Run `npm cache clear` before installation.
* Delete the contents of `./node_modules` if you want a cleaner installation.
* Regarding speed, Gulp is faster. BrowserSync takes a bit longer than the old static server to spin up, but its capabilities far outweigh the startup cost.

## Troubleshooting Installs

Make sure you are running your terminal/command line session as administrator. This could mean `sudo`, or opening the window with a right-click option.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

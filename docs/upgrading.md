---
layout: docs
title: Upgrading Pattern Lab | Pattern Lab
heading: Upgrading Pattern Lab
languages:
- language: php
- language: node
---

<!--- start php -->
<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

Pattern Lab 2 uses [Composer](https://getcomposer.org) to manage project dependencies. To upgrade an edition based on Pattern Lab 2 type the following in the terminal at the root of your project:

    composer update

During the upgrade process Pattern Lab 2 will move or add any files that are required for the new version to work. It will also update your configuration as appropriate. If you don't have Composer installed please [follow the directions for installing Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) that are available on the Composer website. We recommend you [install it globally](https://getcomposer.org/doc/00-intro.md#globally).

## Upgrading Pattern Lab 1 to Pattern Lab 2

Pattern Lab 2 was a complete rewrite and reorganization of Pattern Lab 1. To upgrade do the following:

1. [Download](http://patternlab.io/download.html) the PHP edition that matches your needs

If you chose a Mustache-based edition do the following:

1. Copy `./source` from your old project to your new edition
2. Copy `./source/_patterns/00-atoms/00-meta/_00-head.mustache` to `./source/_meta/_00-head.mustache`
3. Copy `./source/_patterns/00-atoms/00-meta/_01-foot.mustache` to `./source/_meta/_00-foot.mustache`
4. Copy `./source/_data/annotations.js` to `./source/_annotations/annotations.js`

If you chose another version do the above and convert the templates as appropriate.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->



<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

To upgrade the Node version of Pattern Lab do the following:

1. **Important:** Make a back-up of `source/` and `config.json` and your `Gruntfile`|`Gulpfile`.
2. [Download the latest release](https://github.com/pattern-lab/patternlab-node/releases) of the Node version of Pattern Lab, or use `npm update patternlab-node` if you originally [installed](/docs/node/installation.html) Pattern Lab via `npm.`
3. Restore files in `source/` and `config.json` if needed.
4. Be mindful of whether you need to merge any customizations to `config.json` or your `Gruntfile`|`Gulpfile`

If you encounter trouble - make sure your npm devDependencies are up to date. Assuming you have the latest `package.json` file, you can delete the contents of `./node_modules` and run `npm cache clear` before running `npm install` to pull down everything anew.

## Addenda

Some releases require a little extra file rearranging or reconfiguration. Please check the [addenda](https://github.com/pattern-lab/patternlab-node/wiki/Upgrading) on the wiki for more info.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

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

Pattern Lab 2 uses [Composer](https://getcomposer.org) to manage project dependencies. To upgrade an edition based on Pattern Lab 2 do the following:

1. In a terminal window navigate to the root of your project
2. Type `composer update`

During the upgrade process Pattern Lab 2 will move or add any files that are required for the new version to work. It will also update your configuration as appropriate. If you don't have Composer installed please [follow the directions for installing Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) that are available on the Composer website. We recommend you [install it globally](https://getcomposer.org/doc/00-intro.md#globally).

## Upgrading Pattern Lab 1 to Pattern Lab 2

Pattern Lab 2 was a complete rewrite and reorganization of Pattern Lab 1. [Learn about the changes](/docs/changes-1-to-2.html). To upgrade do the following:

1. [Download](http://patternlab.io/download.html) the PHP edition that matches your needs

If you chose a Mustache-based edition do the following:

1. Copy `./source` from your old project to your new edition
2. Copy `./source/_patterns/00-atoms/00-meta/_00-head.mustache` to `./source/_meta/_00-head.mustache`
3. Copy `./source/_patterns/00-atoms/00-meta/_01-foot.mustache` to `./source/_meta/_00-foot.mustache` (you can then delete `source/_patterns/00-atoms/00-meta/` directory)
4. In `./source/_meta/_00-head.mustache`, replace `{% pattern-lab-head %}` with `{{{ patternLabHead }}}`
6. In `./source/_meta/_00-foot.mustache` replace `{% pattern-lab-foot %}` with `{{{ patternLabFoot }}}`
7. Copy `./source/_data/annotations.js` to `./source/_annotations/annotations.js`

If you chose another version do the above and convert the templates as appropriate.

## Learning About Upgrades

New releases and upgrades are announced in Pattern Lab's [PHP room on Gitter](https://gitter.im/pattern-lab/php) and on Twitter at [@patternlabio](https://twitter.com/patternlabio).

You can also determine if your version of Pattern Lab 2 can be upgraded yourself by doing the following:

1. In a terminal window navigate to the root of your project
2. Type `composer outdated`

Two components of Pattern Lab 2 maintain CHANGELOGs as part of their "Releases" page on GitHub:

* [pattern-lab/core](https://github.com/pattern-lab/patternlab-php-core/releases)
* [pattern-lab/styleguidekit-assets-default](https://github.com/pattern-lab/styleguidekit-assets-default/releases)


{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->

<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

Pattern Lab uses [npm](https://www.npmjs.com/) to manage project dependencies. To upgrade an edition based on Pattern Lab 2 do the following:

1. In a terminal window navigate to the root of your project
2. Type `npm update`

During the upgrade process Pattern Lab 2 will move or add any files that are required for the new version to work. It will also update your configuration as appropriate.

It's recommended to review the [ChangeLog](https://github.com/pattern-lab/patternlab-node/wiki/ChangeLog) prior to any update so you are aware of upcoming changes. [Update Instructions](https://github.com/pattern-lab/patternlab-node/wiki/Upgrading) are also maintained on Github and may contain addenda should the normal upgrade process not apply.

## Upgrading from Pattern Lab 1.X to 2.X

1. Install a [node edition](https://github.com/pattern-lab?utf8=%E2%9C%93&query=edition-node) of Pattern Lab 2
2. Move the following files:

  * 1.X `source/*` to 2.X `source/`
  * 1.X `source/_patterns/00-atoms/00-meta/*` to 2.X `source/_meta/` (you can then delete `source/_patterns/00-atoms/00-meta/`)
  * 1.X `source/_data/annotations.js` to 2.X `source/_annotations/`
  
3. In `./source/_meta/_00-head.mustache`, replace `{% pattern-lab-head %}` with `{{{ patternLabHead }}}`
4. In `./source/_meta/_00-foot.mustache` replace `{% pattern-lab-foot %}` with `{{{ patternLabFoot }}}`
4. Remap the paths configured in the edition's `patternlab-config.json` file with yours, if needed.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

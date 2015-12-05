---
layout: docs
title: Upgrading Pattern Lab | Pattern Lab
heading: Upgrading Pattern Lab
languages:
- language: php
- language: node
---

<!--- start php -->
<div class="tab-panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

To upgrade the PHP version of Pattern Lab do the following:

1. **Important:** Make a back-up of `source/`. Also see the note below about upgrading pre-v0.7.0 installs.
2. [Download the latest release](https://github.com/pattern-lab/patternlab-php/releases) of the PHP version of Pattern Lab.
3. Copy the `core/` directory from your downloaded edition and copy it into your project.
4. If you're using Mac OS X open `core/scripts/` and double-click on `generateSite.command`. If you're using Windows or Linux you will need to use [the command line options](/docs/command-line.html).
5. Double-check that your files are intact in `source/`.

During the upgrade process the PHP version of Pattern Lab will run migrations to move or add any files that are required for the new edition to work as well as copy any of your configuration options.

## A Note About Upgrades for pre-v0.7.0 Editions of Pattern Lab

By default the v0.7.0+ editions of the PHP version of Pattern Lab will clean out `public/` and replace it with the files from `source/`. This is the expected behavior. Some users may have manually disabled this feature in pre-v0.7.0 editions. To make sure your files in `public/` are saved do the following:

1. Make a back-up of `public/`.
2. Upgrade using the instructions above.
3. [turn off `cleanPublic` via the new configuration option](/docs/advanced-clean-public.html).
4. replace `public/` with your back-up
5. manually copy `core/styleguide/` to `public/styleguide/`. 

Future upgrades will respect your new `cleanPublic` setting. You can also drop your public files in `source/` and not worry about steps #3-5 above.

If you edited the pattern header and footer found in `source/_patternlab-files/pattern-header-footer` you'll want to copy those changes to `source/_patterns/00-atoms/00-meta` once you've completed the upgrade. `00-meta` is [the new location for the pattern header and footer](/docs/pattern-header-footer.html).

## Cleaning Up Folders from pre-v0.7.0 Editions

If you want to you can clean-up some of the directories that are left-over after upgrading pre-v0.7.0 editions of the PHP version of Pattern Lab. You can delete the following as they reference old paths or are no longer used:

* `builder/`
* `listeners/`
* `scripts/`
* `source/_patternlab-files/`

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->



<!--- start node -->

<div class="tab-panel" id="node">
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

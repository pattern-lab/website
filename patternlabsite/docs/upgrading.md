---
layout: docs
title: Upgrading Pattern Lab | Pattern Lab
---

# Upgrading Pattern Lab

To upgrade the PHP version of Pattern Lab do the following:

1. **Important:** Make a back-up of your `public/` and `source/` directories.
2. [Download the latest release](https://github.com/pattern-lab/patternlab-php/releases) of the PHP version of Pattern Lab.
3. Copy the `core/` directory from your downloaded edition and copy it into your project.
4. If you're using Mac OS X open `core/scripts/` and double-click on `generateSite.command`. If you're using Windows or Linux you will need to use [the command line options](/docs/command-line.html).
5. Double-check that your files are intact in `public/` and `source/`.

During the upgrade process the PHP version of Pattern Lab will run migrations to move or add any files that are required for the new edition to work as well as copy any of your configuration options.

## A Note About cleanPublic() &amp; pre-v0.7.0 Upgrades

By default the v0.7.0+ editions of the PHP version of Pattern Lab will clean out `public/` and replace it with the files from `source/`. This is the expected behavior. Some users may have disabled that feature in pre-v0.7.0 editions. The easiest solution is to simply make a copy of `public/` pre-upgrade, upgrade, [turn off `cleanPublic` via the new configuration option](/docs/advanced-clean-public.html), and replace `public/` with your back-up. Future upgrades will respect your `cleanPublic` setting.

## Cleaning Up Folders from pre-v0.7.0 Editions

If you want to you can clean-up some of the directories that are left-over after upgrading pre-v0.7.0 editions of the PHP version of Pattern Lab. You can delete the following directories as they reference old paths or are no longer used:

* `builder/`
* `listeners/`
* `scripts/`
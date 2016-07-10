---
layout: docs
title: Watching for Changes and Auto Regenerating Patterns | Pattern Lab
heading: Watching for Changes and Auto Regenerating Patterns
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

The PHP version of Pattern Lab has the ability to watch for changes to patterns and select files. When these files change, it will automatically rebuild the entire Pattern Lab website. You simply make your changes, save the file, and the PHP version of Pattern Lab will take care of the rest.

## How to Start the Watch

To start the watch service on Mac OS X you can do the following:

1. Open `core/scripts/`
2. Double-click `startWatcher.command`

For Linux and Windows users you can start the watch from the command line. To do so open your command prompt and navigate to the root of the `patternlab-php` directory. Type:

```
php core/builder.php -w
```

## How to Start the Watch & Auto-Reload Server at the Same Time

Rather than manually refreshing your browser when your patterns or CSS change you can have the PHP version of Pattern Lab auto-reload your browser window for you when it's in watch mode. To start the watch and auto-reload services together on Mac OS X you can do the following:

1. Open `core/scripts/`
2. Double-click `startWatcherWithAutoReload.command`
3. Refresh the Pattern Lab site

For Linux and Windows users you can start the watch from the command line. To do so open your command prompt and navigate to the root of the `patternlab-php` directory. Type:

```
php core/builder.php -wr
```

## How to Stop the Watch

To stop watching files on Mac OS X you can press`CTRL+C` in the Terminal window where the process is running. If you've used the method above to start the auto-reload server it will also shut down when using `CTRL+C`.

## The Default Files That Are Watched

By default, the PHP version of Pattern Lab monitors the following files:

* all of the patterns under `source/_patterns`
* all of the JSON files under `source/_data/`
* any directory in `source/` without an `_` (underscore) or that doesn't match a directory name found in the `id` variable in `config/config.ini`
* any file in `source/` with a file extension that doesn't match one found in the `ie` variable in `config/config.ini`

## Ignoring Other Directories & File Extensions

Instructions on how to ignore assets in other directories or with other file extensions can be found in "[Managing Assets for a Pattern](/docs/pattern-managing-assets.html)".

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->


<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

Pattern Lab has the ability to watch for changes to patterns and frontend assets. When these files change, it will automatically rebuild the entire Pattern Lab website. You simply make your changes, save the file, and Pattern Lab will take care of the rest.

## How to Start the Watch

Open your terminal and navigate to the root of your project. Type:

```
gulp patternlab:watch
```

> If using grunt, substitute `grunt` for `gulp` above.

## How to Start the Watch and Self-Host the Pattern Lab Website

Rather than manually refreshing your browser when your patterns or frontend assets change you can have Pattern Lab watch for changes and [auto-reload your browser window](/docs/viewing-patterns.html#node) for you when it’s in watch mode.

## How to Stop the Watch

To stop watching files on Mac OS X and Windows you can press`CTRL+C` in the command line window where the process is running.

## The Default Files That Are Watched

By default, Pattern Lab monitors the following files:

* all of the JSON files under `source/_annotations/`
* all of the JSON files under `source/_data/`
* all of the files under `source/_meta/`
* all of the pattern templates under `source/_patterns/`
* all of the CSS files under `source/css/`
* all of the files under `source/images/` and `source/fonts/`
* all of the Javascript files under `source/js/`

The watch configuration is found within the Gruntfile or Gulpfile at the root of the project.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

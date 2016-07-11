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

Pattern Lab can watch for changes to files in `./source/` and automatically rebuild the entire Pattern Lab website for you. Make your changes, save the file, and Pattern Lab takes care of the rest.

## How to Start Watching for Changes

To start watching for changes do the following:

1. In a terminal window navigate to the root of your project
2. Type `php core/console --watch`

To stop watching files use `CTRL+C` in the same terminal window.

### Only Watch for Changes to Pattern Lab Files

If you use a task runner like Gulp or Grunt to compile Sass, JavaScript or images you may want Pattern Lab to only concern itself with its own files. To limit Pattern Lab to watch and move only its files do the following:

1. In a terminal window navigate to the root of your project
2. Type `php core/console --watch --patternsonly`

Or, better yet, use this command within your Gulp or Grunt script.

### Start the Web Server & Watch for Changes at the Same Time

If you're relying on Pattern Lab's server to view your content you'll want to run the watch and server with the same command. Do the following:

1. In a terminal window navigate to the root of your project
2. Type `php core/console --server --with-watch`

You can also start the server and watch only patterns:

1. In a terminal window navigate to the root of your project
2. Type `php core/console --server --with-watch --patternsonly`

To stop the server and watching files use `CTRL+C` in the same terminal window.

### Start the Web Server, Watch for Changes, and Reload the Browser at the Same Time

The ultimate solution for working with Pattern Lab if you're not using a task runner is Pattern Lab's [Auto-Reload Plugin](https://github.com/pattern-lab/plugin-php-reload). Do the following:

1. In a terminal window navigate to the root of your project
2. Install the [Auto-Reload Plugin](https://github.com/pattern-lab/plugin-php-reload) using `composer require pattern-lab/reload-plugin`
3. Type `php core/console --server --with-watch`

The Auto-Reload Plugin is automatically enabled when you install it. You can always [disable the plugin](https://github.com/pattern-lab/plugin-php-reload#disabling-the-plugin) if you need to.

## What Pattern Lab Will Watch

By default, the PHP version of Pattern Lab will watch all files in `./source` except those that match the "ignore" configuration options in `config/config.yml`. When using `--patternsonly` Pattern Lab will only watch those directories in `./source` that start with an underscore. For example, `_patterns`. To learn how to modify what is ignored check out "[Managing Assets for a Pattern](/docs/pattern-managing-assets.html)".

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

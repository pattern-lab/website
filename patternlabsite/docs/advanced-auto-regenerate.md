---
layout: docs
title: Watching for Changes and Auto Regenerating Patterns | Pattern Lab
heading: Watching for Changes and Auto Regenerating Patterns
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tab-panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

The PHP version of Pattern Lab has the ability to watch for changes to patterns and select files. When these files change, it will automatically rebuild the entire Pattern Lab website. You simply make your changes, save the file, and the PHP version of Pattern Lab will take care of the rest.

## How to Start the Watch

To start the watch service on Mac OS X you can do the following:

1. Open `core/scripts/`
2. Double-click `startWatcher.command`

For Linux and Windows users you can start the watch from the command line. To do so open your command prompt and navigate to the root of the `patternlab-php` directory. Type:

    php core/builder.php -w

## How to Start the Watch & Auto-Reload Server at the Same Time

Rather than manually refreshing your browser when your patterns or CSS change you can have the PHP version of Pattern Lab auto-reload your browser window for you when it's in watch mode. To start the watch and auto-reload services together on Mac OS X you can do the following:

1. Open `core/scripts/`
2. Double-click `startWatcherWithAutoReload.command`
3. Refresh the Pattern Lab site

For Linux and Windows users you can start the watch from the command line. To do so open your command prompt and navigate to the root of the `patternlab-php` directory. Type:

    php core/builder.php -wr

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

<div class="tab-panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

The Node version of Pattern Lab has the ability to watch for changes to patterns and select files. When these files change, it will automatically rebuild the entire Pattern Lab website. You simply make your changes, save the file, and the Node version of Pattern Lab will take care of the rest.

## How to Start the Watch and Self-Host the Frontend

By default, running `grunt serve` or `gulp serve` will compile the Pattern Lab frontend and host it on <a href="http://localhost:3000">http://localhost:3000</a> via the excellent [BrowserSync](http://www.browsersync.io/docs/) library. This is the recommended way to launch Pattern Lab Node versus using the filesystem.

BrowserSync is a tool with a lot of depth, but Pattern Lab Node ships with the following task configurations inside the [Gruntfile](https://github.com/pattern-lab/patternlab-node/blob/master/Gruntfile.js):

```
browserSync: {
  dev: {
    options: {
      server:  './public',
      watchTask: true,
      plugins: [
        {
          module: 'bs-html-injector',
          options: {
            files: './public/index.html'
          }
        }
      ]
    }
  }
},
bsReload: {
  css: './public/**/*.css'
}
```

The watch configuration also tells Pattern Lab Node what files to reload when changes are made. Here's the excerpt from the [Gruntfile](https://github.com/pattern-lab/patternlab-node/blob/master/Gruntfile.js) again:

```
watch: {
  all: {
    files: [
      'source/css/**/*.css',
      'public/styleguide/css/*.css',
      'source/_patterns/**/*.mustache',
      'source/_patterns/**/*.json',
      'source/_data/*.json'
    ],
    tasks: ['default']
  },
  patterns: {
    files: [
      'source/_patterns/**/*.mustache',
      'source/_patterns/**/*.json',
      'source/_data/*.json'
    ],
    tasks: ['default']
  }
},
```

You'll notice that if you have this open across different browsers, we do our best to keep the frontend in sync, but there is a known issue with synced navigation using the main menu. BrowserSync also hosts an administration interface that sits alongside the Pattern Lab frontend and by default can be found at [http://localhost:3001](http://localhost:3001).

## How to Stop the Watch

To stop watching files on Mac OS X and Windows you can press`CTRL+C` in the command line window where the process is running.

## The Default Files That Are Watched

By default, the Node version of Pattern Lab monitors the following files:

* all of the pattern templates under `source/_patterns/`
* all of the JSON files under `source/_patterns/`
* all of the JSON files under `source/_data/`
* all of the CSS files under `source/css/`
* all of the CSS files under `public/styleguide/css/`

You may also uncomment the scss statements throughout the Gruntfile or Gulpfile to utilize the shipped CSS preprocessor configuration should you desire.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

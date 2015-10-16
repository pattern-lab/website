---
layout: docs
title: Watching for Changes and Auto Regenerating Patterns | Pattern Lab
heading: Watching for Changes and Auto Regenerating Patterns
languages:
- language: php
- language: node
---

<!--- start php -->
<h2 id="php">php</h2>

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

<!--- end php -->


<!--- start node -->
<h2 id="node">node</h2>

Pattern Lab ships with three grunt tasks that effectively watch the source code and reload the live site whenever changes are detected. The configuration is all set up for you already in the `Gruntfile.js`.

First, the `watch` task, with the livereload option:

    watch: {
      // scss: { //scss can be watched if you like
      //  options: {
      //    livereload: true
      //  },
      //  files: ['source/css/**/*.scss', 'public/styleguide/css/*.scss'],
      //  tasks: ['default']
      // },
      all: {
        options: {
          livereload: true
        },
        files: [
        'source/_patterns/**/*.mustache',
        'source/_patterns/**/*.json',
        'source/_data/*.json'
        ],
        tasks: ['default']
      }
    }

The ** pattern matches any subdiretory under _patterns. The * is a file wildcard. It says to run the `['default']` task when a file change is detected. Not also the example for scss files.

Second, the `connect` task: 

    connect: {
      app:{
        options: {
          port: 9001,
          base: './public',
          hostname: 'localhost',
          open: true,
          livereload: 35729
        }
      }
    }

This establishes connection to the pattern lab site on port:9001 and lauches your default browser. From here, any changes to the files marked above will be reflected on your site. Coupled with query string arguments, this is quite useful.

<!--- end node -->


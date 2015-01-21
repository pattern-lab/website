---
layout: docs-node
title: Auto-Reloading the Browser Window When Changes Are Made | Pattern Lab Node
---

# Auto-Reloading the Browser Window When Changes Are Made

Pattern Lab Node ships with three grunt tasks that effectively watch the source code and reload the live site whenever changes are detected. The configuration is all set up for you already in the `Gruntfile.js`.

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


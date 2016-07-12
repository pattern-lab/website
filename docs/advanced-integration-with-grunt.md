---
layout: docs
title: Integration with Grunt/Gulp | Pattern Lab
heading: Integration with Grunt/Gulp
---

The PHP version of Pattern Lab can be integrated into an existing Grunt or Gulp workflow. Pattern Lab has been built to be YAT (Yet Another Task). The broad strokes of a solution:

1. Use a shell package for your task runner of choice. [grunt-shell](https://www.npmjs.com/package/grunt-shell) or [gulp-shell](https://www.npmjs.com/package/gulp-shell) should work.
2. For the shell task use `php core/console --generate --patternsonly`
3. Make sure that your task runner is watching any of the `./source/_*` directories for changes. If a change happens run the shell task.

If you have written a blog post detailing how to get the PHP version of Pattern Lab working with Grunt or Gulp let us know and we'll add a link here.

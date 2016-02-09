---
layout: docs
title: Running as an npm Dependency | Pattern Lab
heading: Running as an npm Dependency
---

**Note:** Following functionality was added in the [v1.1.0 Release](https://github.com/pattern-lab/patternlab-node/releases/tag/v1.1.0) of Pattern Lab Node)

Often, Pattern Lab is used in conjunction with other design and development tools to [create modular, pattern-driven designs](http://atomicdesign.bradfrost.com/chapter-4/). To these ends, Pattern Lab Node is configurable as an [npm](https://www.npmjs.com/) dependency to be more reliably incorporated into team workflows.

**Note** The following steps describe in general how a user could integrate Pattern Lab Node as an npm dependency to a parent system which houses the source and generated patterns. The steps are generalized and cannot possibly cover every consumption scenario. Incorporating Pattern Lab Node as a dependency into a larger parent system will likely invalidate a lot of the following documentation, because you will already have similar or competing tasks for copying file, hosting files, etc, and will not be able to use the shipped Grunt/Gulpfile. If this is the case, use their contents to guide what files need to move where. Support for this configuration is still young, and is still being actively worked on. Expect a few bumps in the road and feel free to report any issues you have along with a thorough writeup.

**Prerequisites**: Node/npm, and a project with gulp and/or grunt installed. Commands are given in bash.

1. **Install Pattern Lab**: Go to your project root and run `npm install --save-dev patternlab-node`
2. **Copy the default config**: you can call it whatever you want, but in this example, we do `cp node_modules/patternlab-node/config.json patternlab-config.json`
3. **Copy the default source**: you need a basic copy of the patternlab source files to get started. Do `cp -r node_modules/patternlab-node/source .`
4. **Create the public and public/patterns folders**: on a Unix machine, that's `mkdir public; mkdir public/patterns`
5. **Copy the Gulpfile or Gruntfile**: Either `cp node_modules/patternlab-node/gulpfile.js .` or `cp node_modules/patternlab-node/Gruntfile.js .`
6. **Edit your patternlab-config.json file**:
    1. In the `paths` object at the top, tell Pattern Lab where to build its static HTML site; the default is `[project root]/public`. Notice if you change the root you will likely have to change other entries to mirror the structure. You'll likely want to point it up to the `source` directory and `public` directory you just copied. Absolute or relative paths should suffice. If you intend to house your source and public folders as a parent of the node_modules/patternlab-node module, you will have to specify this now.
7. **Edit the `paths()` function** to point to `patternlab-config.json` or whatever you chose to call your custom config file.

Now, depending on your grunt/gulp configuration, do the following:

## **(Gulp Only)** Install additional dependencies to harness Pattern Lab Node

* **Install npm dependencies** needed for the gulpfile: `npm install --save-dev del gulp-strip-banner gulp-header gulp-nodeunit gulp-load browser-sync`
* **Edit your gulpfile** Comment out this line, currently at or near line 28: `gulp.loadTasks(__dirname+'/builder/patternlab_gulp.js');` We need our own version of the `patternlab` task, not the default that's included.
* **Create a custom `patternlab` task** inside your gulpfile that loads your project's pattern lab config and passes it in. Something like:

  ```javascript
  // The config and the Pattern Lab itself
  var config = require('./patternlab-config.json'),
      pl = require('patternlab-node')(config);

  gulp.task('patternlab', ['prelab'], function (done) {
    pl.build(true);
    done();
  });
  ```

* **Run** it and see if it works!

  ```bash
  gulp serve
  ```

## **(Grunt Only)** Install additional dependencies to harness Pattern Lab Node

* **Install npm dependencies** needed for the gruntfile: `npm install --save-dev bs-html-injector grunt-browser-sync grunt-contrib-concat grunt-contrib-copy grunt-contrib-nodeunit grunt-contrib-watch`
* **Edit your Gruntfile** Comment out this line, currently at or near line 128: `grunt.task.loadTasks('./builder/');` We need our own version of the `patternlab` task, not the default that's included.
* **Create a custom `patternlab` task** in your gruntfil that loads your project's pattern lab config and passes it in. Something like:

  ```javascript
  // The config and the Pattern Lab itself
  var config = require('./patternlab-config.json'),
    pl = require('patternlab-node')(config);

  grunt.registerTask('patternlab', function (done) {
    pl.build(true);
  });
  ```

* **Run** it and see if it works!

  ```bash
  grunt serve
  ```

---

## Reference Repositories

Reference examples of a parent projects running Pattern Lab Node as a dependency can be found here

* [Grunt](https://github.com/bmuenzenmeyer/patternlab-node-grunt-dependency-example)
* [Gulp](https://github.com/bmuenzenmeyer/patternlab-node-gulp-dependency-example)

---
layout: docs
title: Stopping public/ from Being "Cleaned" | Pattern Lab
heading: Stopping `public/` from Being "Cleaned"
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tab-panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

**Note:** *The cleanPublic configuration option was introduced in v0.7.0 of the PHP version of Pattern Lab.*

By default the PHP version of Pattern Lab deletes most of the files and directories found in `public/` when generating your site or starting the watch. Developers are supposed to use `source/` to store their files. This includes static assets like images, JavaScript and CSS. When generating your site the PHP version of Pattern Lab moves all of the static assets found in `source/` to `public/` (_after cleaning it_) so there shouldn't be a reason not to use `source/`.

That said, developers might be more comfortable storing their static assets in `public/`. In order to turn-off the automatic `cleanPublic()` feature you can edit your configuration file. To do so do the following:

1. Open `config/config.ini`.
2. Change the `cleanPublic` from `"true"` to `"false"`

When you next generate your site or start the watch `public/` will no longer be cleaned.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->


<!--- start node -->

<div class="tab-panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

By default the Node version of Pattern Lab deletes or overwrites most of the files and directories found in `public/` when generating your site or starting the watch. Developers are supposed to use `source/` to store their files. The build process and the copy task found in the [Gruntfile]() or [Gulpfile]() work in concert to move everything from `source/` to `public/`, including static assets like images, JavaScript and CSS. When generating your site the Node version of Pattern Lab moves all of the static assets found in `source/` to `public/` (_after cleaning it_) so there shouldn't be a reason not to use `source/`.

That said, developers might be more comfortable storing their static assets in `public/`. In order to turn-off the automatic overwriting of the `public/` directory:

If you use grunt...

1. Remove all or portions of the `copy` task from your gruntfile to stop overwriting of the assets you want to remain in `public/`
2. Inside `builder/patternlab_grunt.js`, change the flag inside calls to patternlab.build(true) and patternlab.build_patterns_only(true) to `false`.  

If you use gulp...

1. Remove all or portions of the `cp:assettype` tasks from your gulpfile to stop overwriting of the assets you want to remain in `public/`, or alternatively alter the gulp tasks at the bottom of the gulpfile.
2. Remove the `clean` tasks as a prerequisite from all other tasks, both in the gulpfile and in `builder/patternlab-gulp.js`

When you next generate your site or start the watch `public/` will no longer be cleaned.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

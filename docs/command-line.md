---
layout: docs
title: Using The Command Line Options | Pattern Lab
heading: Using The Command Line Options
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

To use Pattern Lab you must use the command line interface. To view the available commands when using Pattern Lab do the following:

1. In a terminal window navigate to the root of your project
2. Type `php core/console --help`

To get the options for a particular command, for example the `--generate` command, you can type:

    `php core/console --help --generate`

## A Special Note About Windows

To access the command prompt on Windows you can [follow the directions from Microsoft](http://windows.microsoft.com/en-us/windows-vista/open-a-command-prompt-window). After getting to the command prompt type the following to make sure you have PHP installed:

```
php -v
```

If you get an error and know that you've installed PHP you may need to [update your path variable so Windows can find PHP](http://willj.co/2012/10/run-wamp-php-windows-7-command-line/).
      
{% endcapture %}
{{ m | markdownify }}

</div>      

<!--- end php -->

<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

The Pattern Lab Node command line interface utilizes grunt or gulp tasks as the primary entry point to perform functions across all platforms. Two JavaScript files, `builer/patternlab_grunt.js` and `builer/patternlab_gulp.js` wrap and expose functions from the vanilla  `builder/patternlab.js` engine.

In the following commands, the `grunt|gulp` pairing signifies that both task systems share the same subsequent command.   

## Generation Commands

`grunt|gulp patternlab`

With no arguments, `patternlab `runs the full Pattern Lab Node builder once, removes old content from `public/`, compiles patterns, and moves content from `source/` to `public/`.

`grunt|gulp patternlab:only_patterns`

Compile the patterns only, outputting to `public/patterns/`. This omits the entire subset of logic that generates the Pattern Lab website.

These are best suited to incorporate into your `Gruntfile.js` or `Gulpfile.s` as you see shipped with Pattern Lab Node.

## Utility Commands

`grunt|gulp patternlab:v`

Retrieve the version of patternlab-node you have installed.

`grunt|gulp patternlab:help`

Get more information about patternlab-node, Pattern Lab in general, and where to report issues.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

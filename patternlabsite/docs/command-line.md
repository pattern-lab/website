---
layout: docs
title: Using The Command Line Options | Pattern Lab
heading: Using The Command Line Options
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tab-panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

If you're using Mac OS X all of the options for using the PHP version of Pattern Lab are available under the `core/scripts/` directory. Simply double-click on the appropriate `.command` file and the service should run. 

If you'd rather use the command line or are using Linux or Windows you can use the following commands and options.

## The Generate Command and Options

The generate command generates an entire site a single time. By default it removes old content in `public/`, compiles the patterns and moves content from `source/` into `public/`. Options can be mixed and matched.

    Usage:
      php core/builder.php --generate|-g [--patternsonly|-p] [--nocache|-n] [--enablecss|-c] 
    
    Available options:
      --patternsonly (-p)    Generate only the patterns. Does NOT clean public/.
      --nocache      (-n)    Set the cacheBuster value to 0.
      --enablecss    (-c)    Generate CSS for each pattern. Resource intensive.
    
    Samples:
    
     To generate only the patterns:
       php core/builder.php --generate --patternsonly
       php core/builder.php -g -p
    
     To turn off the cacheBuster:
       php core/builder.php --generate --nocache
       php core/builder.php -g -n
    
     To run and generate the CSS for each pattern:
       php core/builder.php --generate --enablecss
       php core/builder.php -g -c
    

## The Watch Command and Options

The watch command builds Pattern Lab, watches for changes in `source/` and regenerates Pattern Lab when there are any. Options can be mixed and matched.

    Usage:
      php core/builder.php --watch|-w [--patternsonly|-p] [--autoreload|-r] 
    
    Available options:
      --patternsonly (-p)    Watches only the patterns. Does NOT clean public/.
      --autoreload   (-r)    Turn on the auto-reload service.
    
    Samples:
    
     To watch and generate only the patterns:
       php core/builder.php --watch --patternsonly
       php core/builder.php -w -p
    
     To turn on auto-reload:
       php core/builder.php --watch --autoreload
       php core/builder.php -w -r
    

## The Version Command

The version command prints out the current version of Pattern Lab.

    Usage:
      php core/builder.php --version|-v
    

## Starting the Auto-Reload and Page Follow Services

    php core/autoReloadServer.php
      Starts the WebSocket-based server to monitor for and notify browsers of changes to content. Browser
      windows will re-load.
    
    php core/pageFollowServer.php
      Starts the WebSocket-based server to monitor for and notify browsers of changes to navigation. Browser
      windows should update to match the browser window that changed.
      
{% endcapture %}
{{ m | markdownify }}

</div>      

<!--- end php -->

<!--- start node -->

<div class="tab-panel" id="node">
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

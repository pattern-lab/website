---
layout: docs
title: Using The Command Line Options | Pattern Lab
---

# Using The Command Line Options

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

---
layout: docs
title: Using The Command Line Options | Pattern Lab
---

# Using The Command Line Options
If you're using Mac OS X all of the options for using the PHP version of Pattern Lab are available under the `core/scripts/` directory. Simply double-click on the appropriate `.command` file and the service should run. If you'd rather use the command line or aren't using Mac OS X here are the available options.

    php core/builder.php -g
      Iterates over the 'source' directories & files and generates the entire site a single time.
      It also cleans the 'public' directory.

    php core/builder.php -gc
      Iterates over the 'source' directories & files and generates the entire site a single time.
      It also cleans the 'public' directory as well as generates CSS for each pattern.

    php core/builder.php -w
      Generates the site like the -g flag and then watches for changes in the 'source' directories &
      files. Will re-generate files if they've changed.

    php core/builder.php -wr
      In addition to the -w flag features it will also automatically start the auto-reload server.

    php core/autoReloadServer.php
      Starts the WebSocket-based server to monitor for and notify browsers of changes to content. Browser
      windows will re-load.

    php core/pageFollowServer.php
      Starts the WebSocket-based server to monitor for and notify browsers of changes to navigation. Browser
      windows should update to match the browser window that changed.

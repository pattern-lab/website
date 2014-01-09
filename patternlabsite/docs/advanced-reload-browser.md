---
layout: docs
title: Auto Reloading the Browser Window When Changes Are Made | Pattern Lab
---

# Auto Reloading the Browser Window When Changes Are Made
Rather than manually refreshing your browser when your patterns or CSS change you can have the PHP version of Pattern Lab auto-reload your browser window for you. 

## How to Start the Service

To start the service on Mac OS X you can do the following:

1. Open `scripts/`
2. Double-click `startAutoReloadServer.command`
3. Refresh the Pattern Lab site

You can also start the service from the command line. To do so open Terminal and navigate to the root of the patternlab-php directory. Type:

    php listeners/contentSyncBroadcasterServer.php

Your browser should now be listening for auto-reload events and the Pattern Lab website toolbar should note that "Auto-Reload" is now "On." For this feature to work you **must** have the PHP version of Pattern Lab watching for changes. [Learn how to set this up](/docs/advanced-auto-regenerate.html).

**Important:** If you find that content sync is not working properly please make sure your browser [supports WebSockets](http://caniuse.com/websockets).

## How to Start the Watch & Auto-Reload Server at the Same Time

To start the watch and auto-reload services together on Mac OS X you can do the following:

1. Open `scripts/`
2. Double-click `startWatcherWithAutoReload.command`
3. Refresh the Pattern Lab site

You can also start the watch from the command line. To do so open Terminal and navigate to the root of the `patternlab-php` directory. Type:

    php builder/builder.php -wr

## How to Stop the Service

To stop the service on Mac OS X you can press `CTRL+C` in the Terminal window where the process is running. If you've used the method above to start the watch and the auto-reload server they  will both shut down when using `CTRL+C`.
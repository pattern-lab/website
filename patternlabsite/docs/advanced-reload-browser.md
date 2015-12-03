---
layout: docs
title: Auto Reloading the Browser Window When Changes Are Made | Pattern Lab
heading: Auto Reloading the Browser Window When Changes Are Made
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tab-panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}


Rather than manually refreshing your browser when your patterns or CSS change you can have the PHP version of Pattern Lab auto-reload your browser window for you.

## How to Start the Auto-Reload Server

To start the service on Mac OS X you can do the following:

1. Open `core/scripts/`
2. Double-click `startAutoReloadServer.command`
3. Refresh the Pattern Lab site

For Linux and Windows users you can also start the service from the command line. To do so open your command prompt and navigate to the root of the patternlab-php directory. Type:

    php core/autoReloadServer.php

Your browser should now be listening for auto-reload events and the Pattern Lab website toolbar should note that "Auto-Reload" is now "On." For this feature to work you **must** have the PHP version of Pattern Lab watching for changes. [Learn how to set this up](/docs/advanced-auto-regenerate.html).

**Important:** If you find that content sync is not working properly please make sure your browser [supports WebSockets](http://caniuse.com/websockets).

## How to Start the Watcher & Auto-Reload Server at the Same Time

To start the watch and auto-reload services together on Mac OS X you can do the following:

1. Open `core/scripts/`
2. Double-click `startWatcherWithAutoReload.command`
3. Refresh the Pattern Lab site

For Linux and Windows users you can also start the service from the command line. To do so open your command prompt and navigate to the root of the `patternlab-php` directory. Type:

    php core/builder.php -wr

## How to Stop the Service

To stop the service on Mac OS X you can press `CTRL+C` in the Terminal window where the process is running. If you've used the method above to start the watch and the auto-reload server they  will both shut down when using `CTRL+C`.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->


<!--- start node -->

<div class="tab-panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

Rather than manually refreshing your browser when your patterns or CSS change, the Node version of Pattern Lab auto-reloads your browser window for you using [BrowserSync](http://www.browsersync.io/).

Auto-reloading is a behavior that is done in concert with file watching. You can read more about how these two features work together [here](/docs/advanced-auto-regenerate.html).

## How to Start and Connect to Pattern Lab with BrowserSync

Running 'grunt serve' or 'gulp serve' from the command line of your working directory will start up Pattern Lab Node with BrowserSync and launch [http://localhost:3000](http://localhost:3000) in your default browser.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

---
layout: docs
title: Auto Reloading the Browser Window When Changes Are Made | Pattern Lab
heading: Auto Reloading the Browser Window When Changes Are Made
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

An auto-reload service was built into Pattern Lab 1. With Pattern Lab 2 this feature has been turned into the [Auto-Reload Plugin](https://github.com/pattern-lab/plugin-php-reload). To install this plugin do the following:

1. In a terminal window navigate to the root of your project
2. Type `composer require pattern-lab/reload-plugin`

The Auto-Reload Plugin is automatically enabled when you install it. You can always [disable the plugin](https://github.com/pattern-lab/plugin-php-reload#disabling-the-plugin) if you need to.

This service is enabled when using the `--watch` or `--server --with-watch` commands. Learn more about [watching for changes](/docs/advanced-auto-regenerate.html).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->


<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

Rather than manually refreshing your browser when your patterns or CSS change, Pattern Lab auto-reloads your browser window for you using [BrowserSync](http://www.browsersync.io/).

Auto-reloading is a behavior that is done in concert with file watching. You can read more about how these two features work together [here](/docs/advanced-auto-regenerate.html#node).

## How to Start and Connect to Pattern Lab with BrowserSync

Running 'gulp patternlab:serve' or 'grunt patternlab:serve' from the command line of your working directory will start up Pattern Lab with BrowserSync and launch [http://localhost:3000](http://localhost:3000) in your default browser.

## How to Stop the Server

To stop watching and serving files on Mac OS X and Windows you can press`CTRL+C` in the command line window where the process is running.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

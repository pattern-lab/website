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

    php core/console --help --generate

## A Special Note About Windows

To access the command prompt on Windows you can [follow the directions from Microsoft](http://windows.microsoft.com/en-us/windows-vista/open-a-command-prompt-window). After getting to the command prompt type the following to make sure you have PHP installed:

    php -v

If you get an error and know that you've installed PHP you may need to [update your path variable so Windows can find PHP](http://willj.co/2012/10/run-wamp-php-windows-7-command-line/).

{% endcapture %}
{{ m | markdownify }}

</div>      

<!--- end php -->

<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

To use Pattern Lab you must use the command line interface. Gulp or grunt tasks are the primary entry point to interact with the core library and manage frontend assets across all platforms. To view the available commands when using Pattern :Lab do the following:

1. In a terminal window navigate to the root of your project
2. Type `gulp patternlab:help`

> If using grunt, substitute `grunt` for `gulp` above.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

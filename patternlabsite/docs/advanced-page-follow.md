---
layout: docs
title: Multi browser & Multi device Testing with Page Follow | Pattern Lab
---

# Multi browser & Multi device Testing with Page Follow

The PHP version of Pattern Lab's Page Follow feature gives developers the ability to have one browser control other browsers that connect to the Pattern Lab website. When a browser first connects to the Pattern Lab website they'll be redirected to the last visited pattern. Navigating to a new pattern will update all connected browsers. This should be especially useful when testing patterns across multiple devices.

## How to Start the Page Follow Server

To start the service on Mac OS X you can do the following:

1. Open `core/scripts/`
2. Double-click `startPageFollowServer.command`
3. Refresh the Pattern Lab site

For Linux and Windows users you can also start the service from the command line. To do so open your command prompt and navigate to the root of the patternlab-php directory. Type:

    php core/pageFollowServer.php

Your browser should now be listening for Page Follow events and the Pattern Lab toolbar should note that "Page Follow" is now "On." Any other browser that visits the Pattern Lab site should now be redirected to the last visited pattern. When one browser views another pattern they should all be updated.

## How to Stop the Service

To stop the service on Mac OS X you can press CTRL+C in the Terminal window where the process is running.

## Viewing the Pattern Lab Website on Your Mobile Device

There is a [separate article on this topic](/docs/pattern-mobile-view.html).

**Important:** If you find that page follow is not working properly please make sure your browser [supports WebSockets](http://caniuse.com/websockets).
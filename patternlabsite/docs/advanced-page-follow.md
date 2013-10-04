---
layout: docs
title: Multi browser & Multi device Testing with Page Follow
---

# Multi browser & Multi device Testing with Page Follow
The PHP version of Pattern Lab's Page Follow feature gives developers the ability to have one browser control other browsers that connect to the Pattern Lab website. When a browser first connects to the Pattern Lab website they'll be redirected to the last visited pattern. Navigating to a new pattern will update all connected browsers. This should be especially useful when testing patterns across multiple devices.

## How to Start the Service

To start the service on Mac OS X you can do the following:

1. Open `scripts/`
2. Double-click `startPageFollowServer.command`
3. Refresh the Pattern Lab site

You can also start the service from the command line. To do so open Terminal and navigate to the root of the patternlab-php directory. Type:

    php listeners/navSyncBroadcasterServer.php

Your browser should now be listening for Page Follow events and the Pattern Lab toolbar should note that "Page Follow" is now "On." Any other browser that visits the Pattern Lab site should now be redirected to the last visited pattern. When one browser views another pattern they should all be updated.

## How to Stop the Service

To stop the service on Mac OS X you can press CTRL+C in the Terminal window where the process is running.

## Accessing the Pattern Lab Website from a Mobile Device

If you want to view patterns on your mobile device do the following:

1. Make sure your mobile device and computer are on the same WiFi network
2. Note the IP address for your computer. On Mac OS X this is found under System Preferences > Sharing.
3. Replace the star with your IP address in the following address: `patternlab.*.xip.io`
4. Enter that into the browser on your mobile device

The directions above assume that your Apache `VirtualHost` has `patternlab.*.xip.io` (with the star, not your IP address) as a `ServerAlias`.

**Important:** If you find that page follow is not working properly please make sure your browser [supports WebSockets](http://caniuse.com/websockets).
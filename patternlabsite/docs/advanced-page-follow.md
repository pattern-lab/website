---
layout: docs
title: Multi browser & Multi device Testing with Page Follow | Pattern Lab
heading: Multi browser & Multi device Testing with Page Follow
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tab-panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

The PHP version of Pattern Lab's Page Follow feature gives developers the ability to have one browser control other browsers that connect to the Pattern Lab website. When a browser first connects to the Pattern Lab website they'll be redirected to the last visited pattern. Navigating to a new pattern will update all connected browsers. This should be especially useful when testing patterns across multiple devices.

## How to Start the Page Follow Server

To start the service on Mac OS X you can do the following:

1. Open `core/scripts/`
2. Double-click `startPageFollowServer.command`
3. Refresh the Pattern Lab site

For Linux and Windows users you can also start the service from the command line. To do so open your command prompt and navigate to the root of the patternlab-php directory. Type:

```
php core/pageFollowServer.php
```

Your browser should now be listening for Page Follow events and the Pattern Lab toolbar should note that "Page Follow" is now "On." Any other browser that visits the Pattern Lab site should now be redirected to the last visited pattern. When one browser views another pattern they should all be updated.

## How to Stop the Service

To stop the service on Mac OS X you can press CTRL+C in the Terminal window where the process is running.

## Viewing the Pattern Lab Website on Your Mobile Device

There is a [separate article on this topic](/docs/pattern-mobile-view.html).

**Important:** If you find that page follow is not working properly please make sure your browser [supports WebSockets](http://caniuse.com/websockets).

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->


<!--- start node -->

<div class="tab-panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

The Node version of Pattern Lab's Page Follow feature gives developers the ability to have one browser control other browsers that connect to the Pattern Lab website. Pattern Lab Node utilizes [BrowserSync](http://www.browsersync.io/) to synchronize all connected browsers and devices.

## How to Start and Connect to Pattern Lab with BrowserSync

Running `grunt serve` or `gulp serve` from the command line of your working directory will start up Pattern Lab Node with BrowserSync. By default, BrowserSync will output four URLs of note:

1. Local: [http://localhost:3000](http://localhost:3000)
2. External: http://your.ip.address:3000
3. UI: [http://localhost:3001](http://localhost:3001)
4. UI External: http://your.ip.address:3001

Any browsers on your machine will be able to hit the localhost URLs. Browsers on other machines or devices should use the external URLs. Connecting to the Pattern Lab website will inform users they are also connected to BrowserSync.

## How to Stop the Page Follow

To stop watching files on Mac OS X and Windows you can press`CTRL+C` in the command line window where the process is running.

## BrowserSync Capabilities

It's strongly recommended to visit [BrowserSync](http://www.browsersync.io/) documentation or the BrowserSync UI at [http://localhost:3001](http://localhost:3001). From this administration interface one can perform the following:

* See all connected devices and browsers
* Open new tabbed instances of the Pattern Lab website on devices
* Sync all connected devices
* Reload all connected devices
* Scroll all connected devices to the top
* Toggle mouse click synchronization
* Toggle scroll synchronization
* Toggle form submission synchronization
* Toggle form input synchronization
* View browsing history of the connect session
* Toggle remote debugging tools
* Artificially throttle the network

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

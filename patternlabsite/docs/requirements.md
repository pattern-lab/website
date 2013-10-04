---
layout: docs
title: Requirements
---
# Requirements

The requirements for the PHP version of Pattern Lab vary depending on what features you want to enable.

## Minimum Requirements

If you want to:

* generate patterns & build the Pattern Lab website
* use the browser Auto-Reload feature

You must have *PHP 5.3+* installed. The Pattern Lab website will work without a web server. You can open the Pattern Lab site using the "Open File..." feature of your browser and browsing to your local copy of it. **Note:** While the site will work in Safari 6+ the back button is broken in the "Apache-less" version of Pattern Lab.

## Advanced Requirements

If you want to:

* use the Page Follow feature for multi-browser or multi-device testing

You must configure and run Apache. The PHP version of Pattern Lab comes with a sample Apache `VirtualHost` which is available in the `extras/` directory of the project.
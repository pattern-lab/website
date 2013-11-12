---
layout: docs
title: Requirements | Pattern Lab
---
# Requirements

The requirements for the PHP version of Pattern Lab vary depending on what features you want to use.

## Minimum Requirements

To use the basic features of Pattern Lab, you must have __[PHP 5.3+](http://php.net/downloads.php)__ installed. 

 The Pattern Lab website will work without a web server. You can open the Pattern Lab site using the "Open File..." feature of your browser and browsing to your local copy of it. 

<small>**Note:** While the site will work in Safari 6+ the back button is broken in the "Apache-less" version of Pattern Lab.</small>

## Advanced Requirements

If you want to use the Page Follow feature for multi-browser or multi-device testing, __you must configure and run Apache__. The PHP version of Pattern Lab comes with a sample Apache `VirtualHost` which is available in the `extras/` directory of the project.
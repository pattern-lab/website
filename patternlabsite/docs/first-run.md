---
layout: docs
title: Generating Pattern Lab for the First Time
---

# Generating Pattern Lab for the First Time
__By default, a number of important pages, including the main page, **aren't** built when you first download the PHP version of Pattern Lab. Before you visit your install of Pattern Lab you'll need to make sure all of the necessary pages have been built. 

## How to Generate the Pattern Lab Website

To generate the Pattern Lab website do the following:

1. Open `scripts/`
2. Double-click `generateSite.command`

You can also generate the Pattern Lab website from the command line. To do so open Terminal and navigate to the root of the patternlab-php directory. Type:

    php builder/builder.php -g

The site should now be generated and available for browsing.
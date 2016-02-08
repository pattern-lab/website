---
layout: docs
title: Managing Pattern Assets | Pattern Lab
---

# Managing Pattern Assets

Assets for patterns, including JavaScript, CSS, and images, should be stored in the `source/` directory. The PHP version of Pattern Lab will move these assets to the `public/` directory for you when you generate your site or when you watch the `source/` directory for changes. You can name and nest your assets however you like. The structure will be maintained when they're moved to the `public/` directory.

## Ignoring Assets Based on File Extension

By default, the PHP version of Pattern Lab will ignore assets with the following file extensions:

* `.less`
* `.scss`
* `.DS_Store`

To ignore more file extensions just edit the `ie` variable in `config/config.ini`. For example, to ignore `.png` files your `ie` variable would look like:

    ie = "scss,DS_Store,less,png"

## Ignoring All Assets in a Directory

By default, the PHP version of Pattern Lab will ignore assets in directories with the following name:

* `scss`

To ignore more directories just edit the `id` variable in `config/config.ini`. For example, to ignore directories named `test/` your `id` variable would look like:

    id = "scss,test"

**Important:** The PHP version of Pattern Lab will only ignore exact matches of ignored directories. For example, if you had a directory named `cool_scss` it, and the assets underneath it, _would_ be moved to `public/` even though `scss` was in the name of the directory.

## Adding Assets to the Pattern Header &amp; Footer

Static assets like Javascript and CSS **are not** added automagically to your patterns. You need to add them manually to the [shared pattern header and footer](/docs/pattern-header-footer.html).
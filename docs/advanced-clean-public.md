---
layout: docs
title: Stopping public/ from Being "Cleaned" | Pattern Lab
---

**Note:** *The cleanPublic configuration option was introduced in v0.7.0 of the PHP version of Pattern Lab.*

# Stopping `public/` from Being "Cleaned"

By default the PHP version of Pattern Lab deletes most of the files and directories found in `public/` when generating your site or starting the watch. Developers are supposed to use `source/` to store their files. This includes static assets like images, JavaScript and CSS. When generating your site the PHP version of Pattern Lab moves all of the static assets found in `source/` to `public/` (_after cleaning it_) so there shouldn't be a reason not to use `source/`.

That said, developers might be more comfortable storing their static assets in `public/`. In order to turn-off the automatic `cleanPublic()` feature you can edit your configuration file. To do so do the following:

1. Open `config/config.ini`.
2. Change the `cleanPublic` from `"true"` to `"false"`

When you next generate your site or start the watch `public/` will no longer be cleaned.
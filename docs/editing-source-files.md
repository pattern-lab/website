---
layout: docs
title: Editing Pattern Lab Source Files | Pattern Lab
---

# Editing Pattern Lab Source Files

Because the PHP version of Pattern Lab is a static site generator you <u>**should not edit the files in the `public/` directory**</u>. Instead, you should edit the files under the `source/` directory. In addition to editing patterns under the `source/` directory you'll want to [edit your JavaScript, CSS, and images](/docs/pattern-managing-assets.html) as well. Each time your site is generated your files will be automatically moved to the `public/` directory and the patterns will be automatically compiled.

Generating the Pattern Lab website after each change can be cumbersome. The PHP version of Pattern Lab comes with the ability to [watch files in the `source/` directory for changes and re-generate the site automatically](/docs/advanced-auto-regenerate.html). The Pattern Lab website can also be [automatically reloaded](/docs/advanced-reload-browser.html).
---
layout: docs
title: Editing Pattern Lab Source Files | Pattern Lab
heading: Editing Pattern Lab Source Files
---

When editing Pattern Lab you must put your files and edit them in the `./source/` directory. This includes your static assets like [JavaScript, CSS, and images](/docs/pattern-managing-assets.html). Each time [your site is generated](/docs/generating-pattern-lab.html) your patterns will be compiled and your static assets will be moved to the `./public/` directory. Because of this you **should not edit** the files in the `./public/` directory. 

Manually generating the Pattern Lab website after each change can be cumbersome. The PHP and Node versions of Pattern Lab come with the ability to [watch files in the `./source/` directory for changes and re-generate the site automatically](/docs/advanced-auto-regenerate.html). The Pattern Lab website can also be [automatically reloaded](/docs/advanced-reload-browser.html).

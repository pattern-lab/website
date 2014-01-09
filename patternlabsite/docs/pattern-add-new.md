---
layout: docs
title: Adding New Patterns | Pattern Lab
---

# Adding New Patterns
Adding new patterns to the PHP version of Pattern Lab is simply a matter of adding Mustache templates in the appropriate pattern type and pattern sub-type directories under `source/_patterns`. For example, let's add a new pattern under the pattern type "molecules" and the pattern sub-type "blocks". The `source/_patterns/01-molecules/02-blocks/` directory looks like:

    00-media-block.mustache
    01-headline-byline.mustache
    02-block-hero.mustache

If we want to add a new pattern we simply tack it onto the end:

    00-media-block.mustache
    01-headline-byline.mustache
    02-block-hero.mustache
    03-new-pattern.mustache

The numbering controls where the pattern will show up in the navigation so if you need it to show up higher in the navigation [you can reorganize it](/docs/pattern-reorganizing.html).


---
layout: docs
title: How Patterns Are Organized | Pattern Lab
heading: How Patterns Are Organized   
---

Patterns are organized in a nested folder structure that allows the PHP and Node versions of Pattern Lab to automatically find and build assets like the "view all" pages and the drop down navigation. The pattern directories and patterns are set-up using the following naming convention:

```
./source/_patterns/[patternType]/[patternSubtype]/[patternName].mustache
```

An explanation of each part of the above path:

* `patternType` denotes the overall pattern type. If using Atomic Design this will be something like "atoms" or "molecules" but it can be anything you want. For example, "components" or "elements."
* `patternSubtype` denotes the sub-type of pattern and is _optional_. This helps to organize patterns under an overall pattern type in the drop downs in Pattern Lab. For example, a "blocks" pattern subtype under the "molecules" pattern type.
* `patternName` is the name of the pattern. This is used when the pattern is displayed in the drop downs in Pattern Lab.

Dashes (`-`) in your pattern types, pattern subtypes and patterns will be replaced with spaces. For example, if you want a pattern to be displayed in the drop-down as "Hamburger Navigation" you should name it `hamburger-navigation.mustache`.

## Ordering

By default, pattern types, pattern subtypes and patterns are ordered alphabetically. If you want more control over their ordering please refer to "[Reorganizing Patterns](/docs/pattern-reorganizing.html)."

## Deeper Nesting

Both PHP and Node versions support nesting of folders under `patternSubtype`. For example, you may want to organize your [pattern documentation](docs/pattern-documenting.html), pattern, Sass files and [pseudo-patterns](docs/pattern-pseudo-patterns.html) in one directory like so:

    - molecules/
      - blocks/
        - media-block/
          - media-block.md
          - media-block.mustache
          - media-block.scss
          - media-block~variant1.json
          - media-block~variant2.json

In this example the `media-block/` directory is ignored for the purposes of generating breadcrumbs and navigation in the Pattern Lab front-end but the documenation, pattern and pseudo-patterns are compiled appropriately.

Folders can be nested under `media-block/` if desired but this is discouraged because of possible collisions when using the [shorthand partial syntax](http://patternlab.io/docs/pattern-including.html).

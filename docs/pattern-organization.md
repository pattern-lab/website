---
layout: docs
title: How Patterns Are Organized | Pattern Lab
---

# How Patterns Are Organized    
Patterns are organized in a nested folder structure that helps the PHP version of Pattern Lab automatically find and build assets like the "view all" pages and the drop down navigation. The pattern directories are set-up using the following naming convention: 

    source/_patterns/[patternType]/[patternSubType]/[patternName].mustache

**Important:** In order for the PHP version of Pattern Lab to work you *must* follow this directory structure. 

More information on each part:

* `patternType` denotes the overall type of pattern. This will be one of: atoms, molecules, organisms, templates, or pages.
* `patternSubType` denotes the sub-type of pattern. This helps to organize patterns under an overall pattern type in the drop downs in Pattern Lab.
* `patternName` is the name of the pattern. This is used when the pattern is displayed in the drop downs in Pattern Lab.

If you want to have spaces in your pattern sub-type or pattern names use a `-` (dash). For example, if you want a pattern to be displayed in the drop-down as "Hamburger Navigation" name it `hamburger-navigation.mustache`.

By default, the patterns are organized alphabetically. If you want more control over organizing your patterns and pattern sub-types please refer to "[Reorganizing Patterns](/docs/pattern-reorganizing.html)."
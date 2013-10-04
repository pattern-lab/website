---
layout: docs
title: Editing Pattern Lab Source Files
---

# Editing Pattern Lab Source Files
Because the PHP version of Pattern Lab is a static site generator you <u>**should not edit the files in the `public/` directory**</u>. Instead, you should edit the files under the `source/` directory. In addition to editing patterns under the `source/` directory you'll want to [edit your JavaScript, CSS, and images](https://github.com/pattern-lab/patternlab-php/wiki/Managing-Assets-for-a-Pattern) as well. Each time your site is generated your files will be automatically moved to the `public/` directory and the patterns will be automatically compiled.

Generating the Pattern Lab website after each change can be cumbersome. The PHP version of Pattern Lab comes with the ability to [watch files in the `source/` directory for changes and re-generate the site automatically](https://github.com/pattern-lab/patternlab-php/wiki/Watching-for-Changes-and-Auto-Regenerating-Patterns). The Pattern Lab website can also be [automatically reloaded](https://github.com/pattern-lab/patternlab-php/wiki/Auto-Reloading-the-Browser-Window-When-Changes-Are-Made).
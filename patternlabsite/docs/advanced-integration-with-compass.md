---
layout: docs
title: Integration with Compass | Pattern Lab
---

# Integration with Compass

**Note:** These directions are rough. They worked for me but YMMV. We also have to streamline the workflow.

## Setting Up Compass

Setting up Compass to work with the PHP version of Pattern Lab should be really straightforward. To set-up a Compass config that uses SCSS and _doesn't_ install any starter stylesheets do the following:

1. Open Terminal on a Mac
2. `gem install compass` (if you don't have it)
3. `cd <patternlab-project-folder>/source`
4. `compass create --bare --sass-dir "css" --css-dir "css" --javascripts-dir "js" --images-dir "images"`

You should be ready to rock & roll.

## Workflow with Pattern Lab

Compass will only recompile your SCSS. To get Pattern Lab to rebuild your entire site as well as reload the browser when your SCSS files have been updated do the following:

1. Open Terminal on a Mac
2. `cd <patternlab-project-folder>`
3. `compass watch source`
4. Open a new tab in Terminal
5. `php core/builder.php -wr`
6. Reload your browser

As you make changes to the SCSS files Compass will recompile them and, seeing the changes to `styles.css`, the PHP version of Pattern Lab will rebuild the entire site. It should also reload the Pattern Lab website.
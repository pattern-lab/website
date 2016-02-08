---
layout: docs
title: Modifying the Pattern Header & Footer | Pattern Lab
---

**Note:** *The _meta patterns were introduced in v0.7.0 of the PHP version of Pattern Lab.*

# Modifying the Pattern Header & Footer 

To add your own assets like JavaScript and CSS to your patterns' header and footer you need to modify two files:

* `source/_patterns/00-atoms/00-meta/_00-head.mustache`
* `source/_patterns/00-atoms/00-meta/_01-foot.mustache`

These files are added to every rendered pattern, "view all" page and style guide. To see your changes simply re-generate your site.

## Important: Don't Remove Two Things...

**Do not remove the following two lines in these patterns:**

* `{% raw %}{% pattern-lab-head %}{% endraw %}` in `_00-head.mustache`
* `{% raw %}{% pattern-lab-foot %}{% endraw %}` in `_00-foot.mustache`

Pattern Lab will stop working if you do.

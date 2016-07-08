---
layout: docs
title: Modifying the Pattern Header & Footer | Pattern Lab
heading: Modifying the Pattern Header & Footer
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

To add your own assets like JavaScript and CSS to your patterns' header and footer you need to modify two files:

* `source/_meta/_00-head.mustache`
* `source/_meta/_01-foot.mustache`

These files are added to every rendered pattern, "view all" page and style guide. To see your changes simply re-generate your site.

## Important: Don't Remove Two Things...

**Do not remove the following two lines in these patterns:**

* a tag referencing `patternLabHead` in `_00-head.mustache`
* a tag referencing `patternLabFoot` in `_00-foot.mustache`

Pattern Lab will stop working if you do.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->

<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

To add your own assets like JavaScripts and CSS to your patterns' header and footer you can modify two files:

* `source/_patternlab-files/pattern-header-footer/header.html`
* `source/_patternlab-files/pattern-header-footer/footer.html`

These files are added to every rendered pattern, "view all" page and style guide. To see your changes simply re-generate your site.

**Disclaimer**
Be careful.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

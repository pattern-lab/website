---
layout: docs
title: Modifying the Pattern Lab Nav | Pattern Lab
heading: Modifying the Pattern Lab Nav
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

**Note:** *This option was introduced in v0.7.5 of the PHP version of Pattern Lab.*


When sharing Pattern Lab with a client it may be beneficial to turn-off certain elements in the default navigation. To turn-off navigation elements simply add their keys to the `ishControlsHide` option in `config/config.ini` and then re-generate the site. The following keys are supported and will hide their respective elements:

```
s
m
l
full
random
disco
hay
mqs
find
views-all
views-annotations
views-code
views-new
tools-all
tools-follow
tools-reload
tools-shortcuts
tools-docs
```

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->


<!--- start node -->

<div class="tabs__panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

When sharing Pattern Lab with a client it may be beneficial to turn-off certain elements in the default navigation. To turn-off navigation elements, alter the flags inside the `ishControlsVisible` object within `config.json` and then re-generate the site. The following keys are supported and will hide their respective elements:

```javascript
"ishControlsVisible": {
   "s": true,
   "m": true,
   "l": true,
   "full": true,
   "random": true,
   "disco": true,
   "hay": true,
   "mqs": true,
   "find": true,
   "views-all": true,
   "views-annotations": true,
   "views-code": true,
   "views-new": true,
   "tools-all": true,
   "tools-sync": true,
   "tools-shortcuts": true,
   "tools-docs": true
},
```

By default all navigation elements are visible.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

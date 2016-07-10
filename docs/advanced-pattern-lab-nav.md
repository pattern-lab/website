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

When sharing Pattern Lab with a client it may be beneficial to turn-off certain elements in the default navigation. To turn-off navigation elements, alter the flags inside the `ishControlsHide` object within `patternlab-config.json` and then re-generate the site. The following keys are supported and will hide their respective elements if toggled on:

```javascript
"ishControlsHide": {
  "s": false,
  "m": false,
  "l": false,
  "full": false,
  "random": false,
  "disco": false,
  "hay": true,
  "find": false,
  "views-all": false,
  "views-annotations": false,
  "views-code": false,
  "views-new": false,
  "tools-all": false,
  "tools-docs": false
},
```

By default all navigation elements are visible except Hay Mode.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

---
layout: docs
title: Modifying Pattern Lab's Navigation | Pattern Lab
heading: Modifying Pattern Lab's Navigation
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tabs__panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

When sharing Pattern Lab with a client it may be beneficial to turn-off certain elements in the default navigation. To turn-off navigation elements do the following:

1. Open `./config/config.yml`
2. Add the keys for the elements you'd like to hide to the `ishControlsHide` configuration option
3. Re-generate your Pattern Lab site

The following keys are supported and will hide their respective elements:

```
s
m
l
full
random
disco
hay
find
views-new
tools-all
tools-docs
```

`hay` is disabled by default.

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

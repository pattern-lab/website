---
layout: docs
title: Using Pattern States | Pattern Lab
heading: Using Pattern States
languages:
- language: php
- language: node
---

<!--- start php -->

<div class="tab-panel" id="php">
<h2 class="language-title">php</h2>

{% capture m %}

**Note:** *Pattern states were introduced in v0.7.5 of the PHP version of Pattern Lab.*


Pattern states provide your team and your client a simple visual of the current state of patterns in Pattern Lab. Pattern states can track progress of a pattern from development, through client review, to completion or they can be used to give certain patterns specific classes. It's important to note that the state of a pattern can be influenced by its pattern partials.

## The Default Pattern States

The PHP version of Pattern Lab comes with the following default pattern states:

* **inprogress**: pattern is in development or being worked upon. a red dot.
* **inreview**: pattern is ready for a client to look at and comment upon. a yellow dot.
* **complete**: pattern is ready to be moved to production. a green dot.

Any pattern that includes a pattern partial that has a lower pattern state will inherit that state. For example, a pattern with the state of `inreview` that includes a pattern partial with the state of `inprogress` will have its state overridden and set to `inprogress`. It will not change to `inreview` until the pattern partial has a state of `inreview` or `complete`.

## Giving Patterns a State

Giving patterns a state is simply a matter of modifying the file name. If we wanted to give our `molecules-media-block` pattern a state of `inprogress` we'd change the file name from:

```
source/_patterns/01-molecules/02-blocks/00-media-block.mustache
```

to:

```
source/_patterns/01-molecules/02-blocks/00-media-block@inprogress.mustache
```

## Adding Customized States

The three default states included with the PHP version of Pattern Lab might not be enough for everyone. To add customized states you should modify your own CSS files. **DO NOT** modify `states.css` in `public/styleguide/css/`. This is because `states.css` will be overwritten in future upgrades.

You can use the following as your CSS template for new pattern states:

```css
.newpatternstate:before {
    color: #B10DC9 !important;
}
```

Then add `@newpatternstate` to your patterns to have the new look show up. If you want to add it to the cascade of the default patterns you can modify your `config.ini`. Simply add your new pattern state to the `patternStates` list.

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end php -->

<!--- start node -->

<div class="tab-panel" id="node">
<h2 class="language-title">node</h2>

{% capture m %}

**Note:** *Rudimentary support for pattern states was introduced in v0.1.3 of the Node version of Pattern Lab. Pattern states do not inherit the lowest state from any partials yet.*

Pattern states provide your team and your client a simple visual of the current state of patterns in Pattern Lab. Pattern states can track progress of a pattern from development, through client review, to completion or they can be used to give certain patterns specific classes.

## The Default Pattern States

The Node version of Pattern Lab comes with the following default pattern states:

* **inprogress**: pattern is in development or being worked upon. a red dot.
* **inreview**: pattern is ready for a client to look at and comment upon. a yellow dot.
* **complete**: pattern is ready to be moved to production. a green dot.

## Giving Patterns a State

In the Node version of Pattern Lab, pattern states are managed centrally from inside `config.json`. Adding the [pattern-type]-[pattern-name] name as the key, followed by the class name will apply the pattern state:

```
"patternStates": {
  "homepage-emergency" : "inprogress"
},
```

## Adding Customized States

The three default states included with the Node version of Pattern Lab might not be enough for everyone. To add customized states you should modify your own CSS files. **DO NOT** modify pattern states in `public/styleguide/css/styleguide.css`. You cannot be assured these files won't be overwritten.

You can use the following as your CSS template for new pattern states:

```css
.newpatternstate:before {
    color: #B10DC9 !important;
}
```

{% endcapture %}
{{ m | markdownify }}

</div>

<!--- end node -->

---
layout: docs
title: Using styleModifiers | Pattern Lab
heading: Using styleModifiers
---

styleModifiers provide a way to extend the shorthand include syntax to quickly pass one or more class names to the included pattern.

## Syntax

The basic syntax:

    {{> patternType-pattern:styleModifier }}

To include multiple classes just separate styleModefiers by a pipe. For example:

    {{> patternType-pattern:styleModifier1|styleModifier2 }}

## Example

Let's look at a simple example where we add a `styleModifier` Mustache variable to a pattern called `atoms-message`. For this feature to work the Mustache variable *has* to be called `styleModifier`.

```html
<div class="message {{ styleModifier }}">{{ message }}</div>
```

Now let's include the pattern partial:

```html
<div>
    {{> atoms-message:error }}
</div>
```

This would render as:

```html
<div>
    <div class="message error"></div>
</div>
```

We forgot to provide a message so we can do that too with [pattern parameters](/docs/pattern-parameters.html):

```html
<div>
    {{> atoms-message:error(message: "some error message") }}
</div>
```

Which would render as:

```html
<div>
    <div class="message error">some error message</div>
</div>
```

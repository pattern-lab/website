---
layout: docs
title: Using styleModifiers | Pattern Lab
---

**Note:** *styleModifiers were introduced in v0.7.0 of the PHP version of Pattern Lab.*

# Using styleModifiers

styleModifiers allow you to create a base pattern that you can easily modify by adding a class name to the pattern partial. 

## Syntax

The basic syntax:

    {% raw %}{{> patternType-pattern:styleModifier }}{% endraw %}

## Example

Let's look at a simple example where we add a `styleModifier` Mustache variable to a pattern called `atoms-message`. For this feature to work the Mustache variable *has* to be called `styleModifier`.

    {% raw %}<div class="message {{ styleModifier }}">{{ message }}</div>{% endraw %}

Now let's include the pattern partial:

    {% raw %}<div>
        {{> atoms-message:error }}
    </div>{% endraw %}

This would render as:

    {% raw %}<div>
        <div class="message error"></div>
    </div>{% endraw %}

We forgot to provide a message so we can do that too with [pattern parameters](/docs/pattern-parameters.html):

    {% raw %}<div>
        {{> atoms-message:error(message: "some error message") }}
    </div>{% endraw %}

Which would render as:

    <div>
        <div class="message error">some error message</div>
    </div>

This feature is in anticipation of a future release of the PHP version of Pattern Lab that will include support for [KSS](http://warpspire.com/kss/).
---
layout: docs
title: Using Pattern Parameters | Pattern Lab
---

**Note:** *Pattern parameters were introduced in v0.7.0 of the PHP version of Pattern Lab.*

# Using Pattern Parameters

Pattern parameters are a simple way to include data when using pattern partials rather than having to use a [pattern-specific JSON file](/docs/data-pattern-specific.html). They are especially useful when you have a pattern partial that you need to include multiple times in a molecule, template, or page but you need to supply distinct values for each pattern partial instance. Pattern parameters do have their limitations though. To use pattern parameters you must use the [pattern partial syntax](/docs/pattern-including.html). Also, pattern parameters do not support sub-lists and the use of long strings of text can be unwieldy.

## The Pattern Parameter Syntax

The attributes listed in the pattern parameters should match Mustache variable names in your pattern. The values listed for each attribute will replace the Mustache variables. For example:

    {% raw %}{{> patternType-pattern(attribute1: value, attribute2: "value string") }}{% endraw %}

## Adding Pattern Parameters to Your Pattern Partial

Let's look at a simple example for how we might use pattern parameters. First we'll set-up a pattern that might be included multiple times. We'll make it a simple "message" pattern with a single Mustache variable of `message`.

    {% raw %}<div class="message">{{ message }}</div>{% endraw %}

We'll organize it under Atoms > Global and call it "message" so it'll have the pattern partial of `atoms-message`.

Now let's create a pattern that includes our message pattern partial multiple times. It might look like this.

    {% raw %}<div class="main-container">
        {{> atoms-message }}
        <div>
           A bunch of extra information
        </div>
        {{> atoms-message }}
    </div>{% endraw %}

Using `data.json` or a pattern-specific JSON file we wouldn't be able to supply separate messages to each pattern partial. For example, if we defined `message` in our `data.json` as "this is an alert" then "this is an alert" would show up twice when our parent pattern was rendered.

Instead we can use pattern parameters to supply unique messages for each instance. So let's show what that would look like:

    {% raw %}<div class="main-container">
        {{> atoms-message(message: "this is an alert message") }}
        <div>
            A bunch of extra information
        </div>
        {{> atoms-message(message: "this is an informational message") }}
    </div>{% endraw %}

Now each pattern would have its very own message.

## The Special styleModifier Shorthand Syntax

One of the expected common use cases of pattern parameters is to easily modify a class for a pattern. This way we can avoid creating multiple patterns and instead simply modify a base pattern via a class. The basic syntax:

    {% raw %}{{> patternType-pattern:styleModifier }}{% endraw %}

Let's add a `styleModifier` Mustache variable to our message pattern. For this feature to work the Mustache variable *has* to be called `styleModifier`.

    {% raw %}<div class="message {{ styleModifier }}">{{ message }}</div>{% endraw %}

Now let's include the pattern partial:

    {% raw %}<div>
        {{> atoms-message:error }}
    </div>{% endraw %}

This would render as:

    {% raw %}<div>
        <div class="message error"></div>
    </div>{% endraw %}

We forgot to provide a message so we can do that too:

    {% raw %}<div>
        {{> atoms-message:error(message: "some error message") }}
    </div>{% endraw %}

Which would render as:

    <div>
        <div class="message error">some error message</div>
    </div>

This feature is in anticipation of a future release of the PHP version of Pattern Lab that will include support for [KSS](http://warpspire.com/kss/).

---
layout: docs
title: Using Pattern Parameters | Pattern Lab
---

**Note:** *Pattern parameters were introduced in v0.7.0 of the PHP version of Pattern Lab.*

# Using Pattern Parameters

Pattern parameters are a simple mechanism for replacing Mustache variables via attributes on a pattern partial tag rather than having to use a [pattern-specific JSON file](/docs/data-pattern-specific.html). They are especially useful when you want to supply distinct values for Mustache variables in a specific pattern partial instance that may be included multiple times in a molecule, template, or page. Pattern parameters **do not** currently support the following:

* sub-lists (e.g. iteration of a section),
* and the use of long strings of text can be unwieldy

Pattern parameters are Pattern Lab-specific and do not take advantage of the traditional Mustache syntax. Learn more about pattern parameters:

* [The Pattern Parameter Syntax](#pattern-parameter-syntax)
* [Adding Pattern Parameters to Your Pattern Partial](#adding-pattern-parameters)
* [Toggling Sections with Pattern Parameters](#toggling-sections)

## <span id="pattern-parameter-syntax"></span>The Pattern Parameter Syntax 

The attributes listed in the pattern parameters should match Mustache variable names in your pattern. The values listed for each attribute will replace the Mustache variables. For example:

    {% raw %}{{> patternType-pattern(attribute1: value, attribute2: "value string") }}{% endraw %}

Again, pattern parameters are a simple find and replace of Mustache variables with the supplied values.

## <span id="adding-pattern-paramters"></span>Adding Pattern Parameters to Your Pattern Partial

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

## <span id="toggling-sections"></span>Toggling Sections with Pattern Parameters

While pattern parameters are not a one-to-one match for Mustache they do offer the ability to toggle sections of content. For example we might have the following in a generic header pattern called `organisms-header`:

    {% raw %}<div class="main-container">
        {{# emergency }}
            <div class="alert">Emergency!!!</div>
        {{/ emergency }}
        <div class="header">
            ... stuff ...
        </div>
    </div>{% endraw %}

We call the header pattern in a template like so:

    {% raw %}{{> organisms-header }}
    ... stuff ...{% endraw %}

By default, if we don't have an `emergency` attribute in our `data.json` or the pattern-specific JSON file for the template the emergency alert will never be rendered. Instead of modifying either of those two files we can use a boolean pattern param to show it instead like so:

    {% raw %}{{> organisms-header(emergency: true) }}
    ... stuff ...{% endraw %}

Again, because pattern parameters aren't leveraging Mustache this may not fit the normal Mustache workflow. We still wanted to offer a way to quickly turn on and off sections of an included pattern.



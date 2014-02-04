---
layout: docs
title: Using Pseudo-Patterns | Pattern Lab
---

**Note:** *Pseudo-patterns were introduced in v0.7.0 of the PHP version of Pattern Lab.*

# Using Pseudo-Patterns

Pseudo-patterns are meant to give developers the ability to build multiple and unique **rendered** patterns off of one base pattern and its mark-up while giving them control over the data that is injected into the base pattern. This feature is especially useful when developing template- and page-style patterns.

## The Pseudo-Pattern Syntax

Pseudo-patterns are, essentially, the pattern-specific JSON files that would accompany a pattern. Rather than require a Mustache pattern, though, pseudo-patterns are hinted so a developer can reference a shared pattern. The basic syntax:

    patternName~pseudoPatternName.json

The tilde, `~`, and JSON extension denotes that this is a pseudo-pattern. `patternName` is the parent pattern that will be used when rendering the pseudo-pattern. `patternName` and `pseudoPatternName` are combined when adding the pseudo-pattern to the navigation.

The JSON file itself works exactly like the [pattern-specific JSON file](/docs/data-pattern-specific.html). It has the added benefit that the pseudo-pattern will also import any values from the parent pattern's pattern-specific JSON file.

## Adding Pseudo-Patterns to Your Project

Adding a pseudo-pattern is as simple as naming it correctly and following the [pattern-specific JSON file](/docs/data-pattern-specific.html) instructions for organizing its content. Let's look at a simple example where we want to show an emergency notification on our homepage template. Our `03-templates/` directory might look like this:

    00-homepage.mustache
    01-blog.mustache
    02-article.mustache

Our `00-homepage.mustache` template might look like this:

    {% raw %}<div id="main-container">
        {{# emergency }}
            <div class="emergency">Oh Noes! Emergency!</div>
        {{/ emergency }}
        { ...a bunch of other content... }
    </div>{% endraw %}

If our `_data.json` file doesn't give a value for `emergency` that section will never show up when `00-homepage.mustache` is rendered.

We want to show both the regular and emergency states of the homepage but we don't want to duplicate the entire `00-homepage.mustache` template. That would be a maintenance nightmare. So let's add our pseudo-pattern:

    00-homepage.mustache
    00-homepage~emergency.json
    01-blog.mustache
    02-article.mustache

In our pseudo-pattern, `00-homepage~emergency.json`, we add our `emergency` attribute:

    {
        "emergency": true
    }

Now when we generate our site we'll have our homepage template rendered twice. Once as the regular template and once as a pseudo-pattern showing the emergency section. Note that the pseudo-pattern will show up in our navigation as `Homepage Emergency`.

## Using Pseudo-Patterns as Pattern Partials

Pseudo-patterns **cannot** be used as pattern partials. The data included in the pseudo-pattern, the bit that actually controls the magic, cannot be accessed when rendering the pattern partial.

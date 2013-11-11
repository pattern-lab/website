---
layout: docs
title: Introduction to JSON & Mustache Variables | Pattern Lab
---

# Introduction to JSON & Mustache Variables
The best reference for this topic is the [Mustache documentation](http://mustache.github.io/mustache.5.html) but this should provide a good beginner's primer.

## Simple Variables

At its core JSON is a simple key-value store. This means that any piece of data in JSON has a key and a value. The key is the name of an attribute and the value is what should be shown when that attribute is referenced. Here's a simple example:

    "src": "../../images/fpo-avatar.png"

In this case the key is `src` and the value is `../../images/fpo-avatar.png`. Let's look at how we might reference this data in a pattern template. Mustache variables are denoted by the double-curly braces (or mustaches).

    <img src="{% raw %}{{ src }}{% endraw %}" alt="Avatar">

The Mustache variable is `{% raw %}{{ src }}{% endraw %}`. Note that `src` matches the name of the key in our JSON example. When the PHP version of Pattern Lab compiles this template the end result will be:

    <img src="../../images/fpo-avatar.png" alt="Avatar">

Note that `{% raw %}{{ src }}{% endraw %}` was replaced by the value for `src` found in our JSON example. 

## Nested Variables

We may want our JSON file to be a little more organized and our Mustache variable names to be a little more descriptive. For example, maybe we have multiple image sizes that we want to provide image sources for. We might organize our JSON key-values this way:

    "square": {
        "src": "../../images/fpo-square.png",
        "alt": "Square"
    },
    "avatar": {
        "src": "../../images/fpo-avatar.png",
        "alt": "Avatar"
    }

Note how their are attributes ( `src`, `alt` ) nested within a larger container ( `square` ). Also note how the attributes are separated by commas. If we wanted to use the attributes for the square image in our pattern we'd write:

    <img src="{% raw %}{{ square.src }}{% endraw %}" alt="{% raw %}{{ square.alt }}{% endraw %}">

This would compile to:

    <img src="../../images/fpo-square.png" alt="Square">

This nesting makes it easier to read how the attributes are organized in our patterns. The default `data.json` file has several examples of this type of nesting of attributes.

## Rendering HTML in Variables

You may want to include HTML in your variables. By default, Mustache will convert HTML mark-up to their HTML entity equivalents. For example, our JSON may look like:

    "lyrics": "Just <em>good ol' boys</em>, wouldn't change if they could, <strong>fightin'</strong> the system like a true modern day Robin Hood."

Based on our previous Mustache examples you would probably write out your template like so:

    <h2>TV Show Lyrics</h2>
    <p>{% raw %}{{ lyrics }}{% endraw %}</p>

Unfortunately, that would compile as:

    <h2>TV Show Lyrics</h2>
    <p>Just &lt;em&gt;good ol' boys&lt;/em&gt;, wouldn't change if they could, &lt;strong&gt;fightin'&lt;/strong&gt; the system like a true modern day Robin Hood.</p>

In order to make sure the mark-up doesn't get converted you must use _triple_ curly brackets like so:

    <h2>TV Show Lyrics</h2>
    <p>{% raw %}{{{ lyrics }}}{% endraw %}</p>

Now it would compile correctly:

    <h2>TV Show Lyrics</h2>
    <p>Just <em>good ol' boys</em>, wouldn't change if they could, <strong>fightin'</strong> the system like a true modern day Robin Hood.</p>
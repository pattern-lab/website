---
layout: docs
title: Linking to Patterns with Pattern Lab's Default `link` Variable | Pattern Lab
---

# Linking to Patterns with Pattern Lab's Default `link` Variable
You can build patterns that link to one another to help simulate using a real website. This is especially useful when working with the Pages and Templates pattern types. Rather than having to remember the actual path to a pattern you can use the same shorthand syntax you'd use to include one pattern within another. **Important:** Pattern links _do not_ support the same fuzzy matching of names as the shorthand partials syntax does. The basic format is:

    {% raw %}{{ link.pattern-name }}{% endraw %}

For example, if you wanted to add a link to the `article` template from your `blog` template you could write the following:

    <a href="{% raw %}{{ link.templates-article }}{% endraw %}">Article Headline</a>

This would compile to:

    <a href="/patterns/templates-layouts-article/templates-layouts-article.html">Article Headline</a>

As you can see, it's a much easier way of linking patterns to one another.
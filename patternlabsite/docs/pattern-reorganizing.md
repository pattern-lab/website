---
layout: docs
title: Reorganizing Patterns | Pattern Lab
---

# Reorganizing Patterns
By default, the PHP version of Pattern Lab organizes patterns alphabetically when displaying them in the drop-down navigation, pattern sub-type "view all" pages, and the style guide. This may not meet your needs. You can re-order pattern sub-types and patterns by prefixing them with two digit numbers. We'll look at how we can re-organize patterns as an example. Using alphabetical ordering the `lists` pattern sub-type in `atoms` looks like:

    definition.mustache
    ordered.mustache
    unordered.mustache

This is also the order they'll show up in the drop-down navigation. Because you rarely need to see the definition list pattern maybe you want to have it show up last in the navigation. To re-order the patterns just add numbers to the beginning:

    01-ordered.mustache
    02-unordered.mustache
    03-definition.mustache

You may want to put some space between the numbers just in case you want to further re-order and not touch the other patterns. For example, a better default ordering might be:

    01-ordered.mustache
    05-unordered.mustache
    10-definition.mustache

The numbers will not show up when Pattern Lab displays the name of the pattern in the drop-down navigation. They're simply a re-ordering mechanism.

### Can Pattern Types & Pattern Sub-Types Be Reorganized in the Same Way?

Yes.

### Do Pattern Partials Need to be Updated to Reflect the Numbering?

Assuming you use the partials shorthand then, no, you don't have to worry about including the numbering in the pattern partial. The PHP version  of Pattern Lab will find the pattern regardless of its numbering. For example, the partial call would look like this for `definition.mustache`, `03-definition.mustache` or `10-definition.mustache`:

    {% raw %}{{> atoms-definition }}{% endraw %}

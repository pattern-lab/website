---
layout: docs
title: Including Patterns | Pattern Lab
---

# Including Patterns
To use one pattern within another, for example to create a molecule from several atoms, you can either use:

* a shorthand partials syntax or 
* the default [Mustache](http://mustache.github.io/mustache.5.html) partials syntax.

## The Shorthand Partials Syntax

The shorthand partials syntax mimics the format that was found in the `inc()` function from the original version of Pattern Lab. It allows for partials to be less verbose than the default Mustache partials syntax. The shorthand syntax uses the following format:

    {% raw %}{{> [patternType]-[patternName] }}{% endraw %}

For example, let's say we wanted to include the following pattern in a molecule:

    00-atoms/03-images/02-landscape-16x9.mustache

The pattern type is `atoms` and the pattern name is `landscape-16x9`. Pattern sub-types are _never_ used in this format and any digits for re-ordering are _dropped_. The shorthand partial syntax would be:

    {% raw %}{{> atoms-landscape-16x9 }}{% endraw %}

Patterns can be re-ordered via the digits without requiring you to update any patterns. 

The shorthand syntax also allows for fuzzy matching on pattern names. This means that, if you feel your pattern name is going to be unique within a given pattern type, you can supply just the unique part of the pattern name and the partial will be included correctly. For example, using the shorthand syntax this partial could be written as:

    {% raw %}{{> atoms-16x9 }}{% endraw %}

**Important:** If you include `16x9` in another pattern the PHP version of Pattern Lab may find that first depending on how your patterns are organized.

## The Default Mustache Partials Syntax

The PHP version of Pattern Lab also supports the default Mustache partials syntax if you need more specificity when adding partials to your templates. The syntax is simply the path to the partial minus the `.mustache` extension. For example, let's say we wanted to include the following pattern in a molecule:

    00-atoms/03-images/02-landscape-16x9.mustache

The default Mustache partial syntax would be:

    {% raw %}{{> 00-atoms/03-images/02-landscape-16x9 }}{% endraw %}

**Important:** Unlike the shorthand partials syntax the default Mustache partials syntax **must** include any digits for reordering. If pattern names are updated then the partial paths also need to be updated.

## Examples

Here are some examples of how to include patterns as well as some gotchas.

    // partials to match
    00-atoms/00-global/04-test-with-picture.mustache
    00-atoms/00-global/05-test.mustache
    00-atoms/00-global/06-test.mustache
    00-atoms/00-global/test.mustache

    // using the shorthand partials syntax
    {% raw %}{{> atoms-test }}                 // will match 00-atoms/00-global/05-test.mustache
                                      // using the shorthand syntax you'll never be able to match 06-test nor test in this scenario
    {{> atoms-test-with-picture }}    // will match 00-atoms/00-global/04-test-with-picture.mustache 
    {{> atoms-test-wit }}             // will match 00-atoms/00-global/04-test-with-picture.mustache
    
    // using the default mustache partials syntax
    {{> atoms/global/05-test }}       // won't match anything because atoms & global are missing their digits
    {{> 00-atoms/00-global/06-test }} // will match 00-atoms/00-global/06-test.mustache{% endraw %}

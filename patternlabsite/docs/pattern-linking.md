---
layout: docs
title: Linking Directly to a Pattern | Pattern Lab
---

# Linking Directly to a Pattern
You can link directly to any pattern listed on the Pattern Lab website. This might be useful when asking clients for feedback on a particular template or page pattern. If you want to [link from one pattern to another use the `link` variable](/docs/data-link-variable.html).

## Copy & Paste

The simplest method is to copy the address found in the address bar.

## Manually Creating the Link

It's also very easy to create a link manually. Simply append `?p=pattern-name` to the end of the address for your Pattern Lab website. For example, if we wanted to link to the `templates-article` pattern we'd add the following to the address for our Pattern Lab website:

    ?p=templates-article

The direct link feature supports the [shorthand partials syntax](/docs/pattern-including.html) found in the PHP version of Pattern Lab. Just provide part of a pattern name and Pattern Lab will attempt to resolve it. 

## Other Link Options: Width, Hay Mode, Disco Mode

Pattern Lab also supports setting other attributes via a link. These options can be used while setting the default pattern. They are:

### Setting the Default Width

You can load a specific viewport size by using the `w` request variable.

    http://patternlab.localhost/?w=320   (sets the viewport to 320px)
    http://patternlab.localhost/?w=400px (sets the viewport to 400px)
    http://patternlab.localhost/?w=40em  (sets the viewport to 40em or 640px)

And it works with the `p` request variable so you can also do:

    http://patternlab.localhost/?p=atoms-landscape-4x3&w=400px

### Enabling Hay Mode

You can enable Hay Mode by default using the `h` or `hay` request variables.

    http://patternlab.localhost/?h=true
    http://patternlab.localhost/?hay=true

And it works with the `p` request variable so you can also do:

    http://patternlab.localhost/?p=atoms-landscape-4x3&h=true

### Enabling Disco Mode

You can enable Disco Mode by default using the `d` or `disco` request variables.

    http://patternlab.localhost/?d=true
    http://patternlab.localhost/?disco=true

And it works with the `p` request variable so you can also do:

    http://patternlab.localhost/?p=atoms-landscape-4x3&d=true
---
layout: docs
title: Creating Pattern-specific Values | Pattern Lab
---

# Creating Pattern-specific Values
Setting up data variables and values for your atoms, molecules, and organisms using the central `data.json` may work just fine. When fleshing out templates & pages, where data may need to be unique to each page but each will still use the same molecules and organisms, the central `data.json` file can become cumbersome. In order to work around this the PHP version of Pattern Lab allows you to define pattern-specific JSON files that allow you to override the default values found in `source/_data/data.json` or `source/_data/listitems.json`.

## Setting Up Pattern-specific Data

In order to tell the PHP version of Pattern Lab to use a pattern-specific JSON file to override the default variables just give the JSON file the same name as the pattern and put it in the same directory as the pattern. For example, if you wanted to provide pattern-specific data for the `article` pattern under the pattern type `pages` your `pages` directory would look like this:

    pages/article.mustache
    pages/article.json

## Overriding the Default Variables

Overriding the default variables using the pattern-specific data is a just a matter of giving the variables you want to override the same names and structure in your pattern-specific data as they appear in the central data file. For example, the 4x3 landscape image source may look like this in `data.json`:

    "landscape-4x3": {
        "src": "../../images/fpo-landscape-4x3.jpg",
        "alt": "Landscape 4x3 Image"
    }

In our pattern-specific data file, `article.json`, we'd simply copy that structure and provide our own information:

    "landscape-4x3": {
        "src": "../../images/a-team-hero.jpg"
    }

Now the article pattern will display an image of the A-Team when using `{% raw %}{{ landscape-4x3.src }}{% endraw %}`. All other patterns using `{% raw %}{{ landscape-4x3.src }}{% endraw %}` will display the default 4x3 image. Also, note that we **didn't** override the `landscape-4x3.alt` attribute. If we were to use that attribute in our pattern the default value, "Landscape 4x3 Image", would be displayed. 

**Important note:** You don't have to override every attribute. You can limit the data in your pattern-specific data file to just those variables you want. The PHP version of Pattern Lab will fallback to using the default attributes from `data.json` if the attributes aren't defined in the pattern-specific data file.

## Working With Partials

Pattern-specific data is only loaded for the overall pattern and not for any related partials. For example, the pages template, `article`, might include the molecule, `block-hero`. `block-hero` may have its own pattern-specific data file, `block-hero.json`. The PHP version of Pattern Lab **will not** use the `block-hero` data when rendering `article`. It will only use `article.json` (if available) and `data.json`. 
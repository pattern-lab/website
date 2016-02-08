---
layout: docs
title: Adding Annotations | Pattern Lab
---

# Adding Annotations

Annotations provide an easy way to add notes to elements within a pattern and they can be found in `source/_data/annotations.js`. They're _not_ pattern-specific. Rather, they're added to patterns using the same selector syntax you'd use for jQuery or CSS. 

## Explaining Annotations

To explain how annotations are structured here is the annotation that's added to the logo:

```
{
	"el": ".logo",
 	"title" : "Logo",
 	"comment": "<p>The logo image is an SVG file, which ensures that the logo displays crisply even on high resolution displays. A PNG fallback is provided for browsers that don't support SVG images.</p><p>Further reading: <a href=\"http://bradfrostweb.com/blog/mobile/hi-res-optimization/\">Optimizing Web Experiences for High Resolution Screens</a></p>"
}
```

Breaking down the JSON:

* **el** - the selector to be used to attach the annotation to a pattern
* **title** - the title for a given annotation
* **comment** - the description for a given annotation

## Making Changes to Annotations

In order to make changes or additions to annotations simply edit the `annotations.js` file. Once your changes have been made just make sure your site has been re-generated.

## Viewing Annotations

In order to view annotations you'll need to click "Annotations" under the "eye" icon in the Pattern Lab toolbar. Depending on which view you're on the annotations will look slightly different. 

### Pattern-only View

After clicking the "annotations" menu item you can mouse over elements that have annotations and your cursor will turn to a question mark. If you click the element then the annotation should pop up.

### Style Guide and List View

After clicking the "annotations" menu item the annotations should show up listed under the appropriate patterns.

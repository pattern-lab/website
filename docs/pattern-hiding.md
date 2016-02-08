---
layout: docs
title: Hiding Patterns in the Navigation | Pattern Lab
---

# Hiding Patterns in the Navigation

There may come a time when you want to remove a pattern from Pattern Lab's drop-down navigation and style guide but still keep it in your patterns directory for later use. You can "comment out" a pattern by adding an `_` (underscore) to the beginning of the pattern name. For example, we may have a Google Map-based pattern that we don't need for a particular project. The path might look like:

    molecules/media/map.mustache

To "hide" the pattern we add the underscore:

    molecules/media/_map.mustache

Once the site has been re-generated the map pattern will no longer show up in the drop-down navigation, the media pattern sub-type "view all" page, nor the style guide.
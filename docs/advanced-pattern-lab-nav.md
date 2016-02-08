---
layout: docs
title: Modifying the Pattern Lab Nav | Pattern Lab
---

**Note:** *This option was introduced in v0.7.5 of the PHP version of Pattern Lab.*

# Modifying the Pattern Lab Nav

When sharing Pattern Lab with a client it may be beneficial to turn-off certain elements in the default navigation. To turn-off navigation elements simply add their keys to the `ishControlsHide` option in `config/config.ini` and then re-generate the site. The following keys are supported and will hide their respective elements:

    s
    m
    l
    full
    random
    disco
    hay
    mqs
    find
    views-all
    views-annotations
    views-code
    views-new
    tools-all
    tools-follow
    tools-reload
    tools-shortcuts
    tools-docs

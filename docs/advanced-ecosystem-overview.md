---
layout: docs
title: Overview of Pattern Lab's Ecosystem | Pattern Lab
heading: Overview of Pattern Lab's Ecosystem
---

Pattern Lab 2 introduces the beginnings of an ecosystem that will allow teams to mix, match and extend Pattern Lab to meet their specific needs. It will also make it easier for the Pattern Lab team to push out new features. Documentation that explains how best to take advantage of the ecosystem will be released in the coming weeks.

## Editions

Editions let teams and agencies bundle all the things that support their unique workflows with Pattern Lab. An Edition can become the starting point for all of your projects while teams share and update functionality on the fly. The PHP version of Pattern Lab takes advantage of [Composer](https://getcomposer.org) and its `create-project` command to help you kick off your projects in a simple and standardized way.

## Components of an Edition

The following is a partial list of the components that can make up a team's custom Edition of Pattern Lab:

### Pattern Lab Core

This is what someone would traditionally think of as "Pattern Lab." Core is the guts of Pattern Lab and enables all of the other features. Because Core is standalone a team can update and stay current with the latest Pattern Lab features without disrupting the rest of their project.

### PatternEngines

PatternEngines are responsible for parsing patterns and turning them into HTML. PatternEngines give Pattern Lab Core the flexibility to render many different types of template languages. Patterns don't _have_ to be Mustache any longer.

### Plugins

Plugins allow developers to extend PL Core and other parts of the ecosystem. For example, the PHP version of Pattern Lab has a number of plugins like [Browser Auto-Reload](https://github.com/pattern-lab/plugin-php-reload), [Data Inheritance](https://github.com/pattern-lab/plugin-php-data-inheritance), and [Faker](https://github.com/pattern-lab/plugin-php-faker). An event-driven system allows developers to modify data at different stages, add their own commands or pattern rules, or change the front-end.

### StarterKits

StarterKits are sets of patterns, data, annotations, static assets and tools like Gulp that form the starting point of a project. For example, an agency may have a common set of basic patterns, Sass mix-ins, and JavaScript libraries that they know they'll use for every project. A StarterKit is perfect for bundling these assets together to make sure each project starts off on the right foot. And StarterKits are version-able. As your tools evolve so can your team's StarterKit.

If you want a StarterKit to be a living project instead of a starting point then the PHP version of Pattern Lab can clone your StarterKit repository. This way multiple team members can push and pull a project repo that is just the assets they're working on and not all of Pattern Lab.

### StyleguideKits

StyleguideKits are the front-end of Pattern Lab. We call this "The Viewer." StyleguideKits allow agencies to develop custom, branded layouts to show off their patterns.

### Other Types of Components

The flexibility of the Pattern Lab ecosystem means that teams can develop tools on top of Pattern Lab that meet _their_ needs. Want to standardize and push entire data sets to teams? Want to develop with granular collections of components instead of entire StarterKits? Only want to customize the CSS for the default StyleguideKit and distribute it as part of your projects? All of this and more is possible. We feel we're just scratching the surface on what it means to develop projects and design systems with a tool like Pattern Lab.

## Guidance and Help

If you have ideas or would like guidance before we have all of the documentation done please learn how you can [engage with the Pattern Lab community](/contribute.html).

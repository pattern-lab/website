---
layout: docs
title: Roadmap | Pattern Lab
heading: Roadmap
---

Pattern Lab's many repositories across GitHub can lead to confusion about what's all going on within the ecosystem. This document serves as a narrative companion to the [issues](https://github.com/pattern-lab/patternlab-node/issues), [milestones](https://github.com/pattern-lab/patternlab-node/milestones), [projects](https://github.com/pattern-lab/patternlab-node/projects), and [pull requests](https://github.com/pattern-lab/patternlab-node/pulls) that make up the future of the project.

## Pattern Lab 3.0 - Currently in Alpha

Pattern Lab 3.0 is an evolution of Pattern Lab 2.0 [ecosystem](/docs/advanced-ecosystem-overview.html), providing users and the internals more capabilities.

### Hello Monorepo

The [Pattern Lab Node repository](https://github.com/pattern-lab/patternlab-node) is now converted to a monorepo, hosting a dozen or so repositories previously managed independently. This allows the team to develop and orchestrate the release of changes in lockstep. A good example would be when changes need to occur to all PatternEngines at once, or a configuration entry changes across core, the CLI, and Editions. The [CONTRIBUTING](https://github.com/pattern-lab/patternlab-node/blob/master/.github/CONTRIBUTING.md) document outlines how to get setup with the monorepo.

Some repositories found on the [Pattern Lab organization](https://github.com/pattern-lab) at GitHub will remain, such as StarterKits (we want those to be easier to fork). Repositories now found in the monorepo will be archived once Pattern Lab Node 3.0 is released ([example](https://github.com/pattern-lab/plugin-node-tab/issues/25)).

The structure of the monorepo may change over time, but having things under one roof also allows us to run integration tests across the entire ecosystem, display examples, and develop features simpler within development Editions.

### One Core Library

Discussed at length at [this spec issue](https://github.com/pattern-lab/the-spec/issues/37), the unification of our core libraries serves to refocus our fragmented community. There are a lot of benefits mentioned inside that issue, but we'll recap here:

- Pattern Lab output need not be laboriously cross-checked between two separate systems
- Maintainers can respond quicker to the needs of the community
- New features from contributors do not need to be labeled or cross-checked as "on" or "off" spec.
- Major architectural refactoring can occur across a smaller footprint
- Simplify the documentation
- Unify the communities
- Create a single entry point into the ecosystem
- Users get a clearer sense of what features Pattern Lab offers

We knew there would be challenges along the way. [Evan Lovely](https://twitter.com/evanlovely)'s support and work to bring the primary PHP PatternEngine, Twig [into PL Core](https://github.com/pattern-lab/patternlab-node/pull/897) cannot be overstated.

### UIKits

UIKits are a new term in the Pattern Lab Ecosystem, attempting to evolve beyond the current Styleguidekit pattern which separated front-end templates from front-end assets like stylesheets and code. The existing `styleguidekit-assets-default` and `styleguidekit-mustache-default` have merged into `uikit-workshop` (more on that name in a bit). The hope is that by co-locating all front-end files in a single repository, users will be more capable of altering existing UIKits, making their own, even building multiple UIs from a single source of truth.

Pattern Lab will support multiple UI outputs from a single set of source patterns - implementing what [Brad Frost](https://twitter.com/brad_frost) coined as the [workshop and the storefront](http://bradfrost.com/blog/post/the-workshop-and-the-storefront/). The default Pattern Lab experience is therefore the workshop, with a storefront to come within the Pattern Lab Node 3.0 lifecycle as another offering. You can read more about UIKits in the [initial pull request](https://github.com/pattern-lab/patternlab-node/pull/840) introducing them.

UIKit Workshop is also undergoing an internal overhaul to modernize its tech stack.

### Async Rendering

An important milestone in Pattern Lab 3.0's development was making the core rendering of `template + data = HTML` an asynchronous operation. This foundational method call bubbled all the up the stack, resulting in a refactor of most of the codebase. Now, most public methods return Promises. Asynchronous rendering allows PatternEngines that require this capability to be possible, such as Twig, React, Nunjucks, and maybe even HTTP-based engines in the future.

### Command Line Interface

Central to the way Pattern Lab 3.0 will be installed, configured, and potentially ran, is a new Command Line Interface (CLI). Thank you to [Raphael Okon](https://twitter.com/raphaelokon_) for spearheading this effort. It allows users to more easily interact with the ecosystem and their local Pattern Lab. We've built the CLI to guide users into what combination of Edition and Starterkit they desire when starting a project. The CLI is also a drop-in new capability for existing projects, making installation of additional components like Plugins simpler.

The CLI feels like a large opportunity for growth and new capabilities yet to be discovered.

### New PatternEngines: Twig and React

As mentioned, Twig and React PatternEngines bring more capable templating and rendering systems into Pattern Lab, pursuant to the holy grail of component libraries, making patterns that are directly consumable in production systems. [Geoff Pursell](https://twitter.com/geoffpursell) is working toward basic React functionality within the Pattern Lab 3.0 lifecycle, while Evan works to solidify PHP-powered Twig rendering harnessed by Pattern Lab Node core.

Expect these PatternEngines to become more refined within the Pattern Lab 3.0 lifecycle and complement our existing offerings.

### No Task Runners Needed

Pattern Lab Node 2.0's reliance on Gulp or Grunt task runners was a crutch holding back adoption and integration opportunities. By having core manage the movement of assets from `source/` to `public/`, while still offering teams opportunities before and after build to alter these assets, we cut the cord from external task runners.

This remains an area of exploration that the Pattern Lab 3.0 lifecycle will serve to prove out with the community. Are there limitations this forces users into? What can be improved? Feedback is needed.

### New Docs, New Demos, New Site

Wow that's a lot of change! And with this change will come a need to refresh the content and styling of this site. Expect more in-depth How-To's, deeper dives into elements of the ecosystem previously kept behind the scenes, and overall more engagement.

If you have ideas, let us know what you want in a documentation site. Or better yet, <a href="/contribute.html">contribute!</a>

## Pattern Lab 4.0 and Beyond

See [this issue](https://github.com/pattern-lab/patternlab-node/issues/834).

❤️

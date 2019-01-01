---
layout: docs
title: Template Language and PatternEngines | Pattern Lab
heading: Template Language and PatternEngines
---

By default Pattern Lab uses the Mustache template language, extended with [pattern parameters](/docs/pattern-parameters.html). PatternEngines let you add support for a template language of your personal choice. Each PatternEngine has it's own set of features and caveats.

## Official PatternEngines for Node
<ul id="pattern-engine-list">
  <!-- This list is automatically replaced by a script -->
  <li>See the [Pattern Lab repository on GitHub](https://github.com/pattern-lab/patternlab-node/tree/master/packages) or [search on npmjs.com](https://www.npmjs.com/search?q=keywords%3A%27Pattern%20Lab%27%20engine)</li>
</ul>

## Install and Configure a PatternEngine

1. Install a new PatternEngine that you wish to use. For example, to install the Handlebars engine, run `npm install --save @pattern-lab/engine-handlebars`.
2. (Optional) Change the `"patternExtension"` property of your config. This sets the panel name and language for the code tab on the styleguide.

You'll need to restart Pattern Lab for changes to take effect. Some PatternEngines may provide further configuration.

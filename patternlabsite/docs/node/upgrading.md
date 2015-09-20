---
layout: docs-node
title: Upgrading Pattern Lab | Pattern Lab Node
---

# Upgrading Pattern Lab Node

To upgrade the Node version of Pattern Lab do the following:

1. **Important:** Make a back-up of `source/` and `config.json` and your `Gruntfile`|`Gulpfile`. 
2. [Download the latest release](https://github.com/pattern-lab/patternlab-node/releases) of the Node version of Pattern Lab, or use `npm update patternlab-node` if you originally [installed](/docs/node/installation.html) Pattern Lab via `npm.`
3. Restore files in `source/` and `config.json` if needed.
4. Be mindful of whether you need to merge any customizations to `config.json` or your `Gruntfile`|`Gulpfile` 

If you encounter trouble - make sure your npm devDependencies are up to date. Assuming you have the latest `package.json` file, you can delete the contents of `./node_modules` and run `npm cache clear` before running `npm install` to pull down everything anew.

###### Addendum:

* Upgrading to [v0.12.0](https://github.com/pattern-lab/patternlab-node/releases/tag/v0.12.0) requires overwriting: `source/_patternlab-files/partials/ishControls.mustache`
* Upgrading to [v0.10.X or v0.11.0](https://github.com/pattern-lab/patternlab-node/releases/tag/v0.11.0) requires: 
  * Add `"baseurl" : ""` to `config.json`
  * Overwrite `source/_patternlab-files/pattern-header-footer/footer.html`
  * Overwrite `source/_patternlab-files/styleguide.mustache`
  * Overwrite `source/_patternlab-files/viewall.mustache`

---
layout: docs-node
title: Upgrading Pattern Lab | Pattern Lab Node
---

# Upgrading Pattern Lab Node

To upgrade the Node version of Pattern Lab do the following:

1. **Important:** Make a back-up of `source/` and `config.json`. 
2. [Download the latest release](https://github.com/pattern-lab/patternlab-node/releases) of the Node version of Pattern Lab, or use `npm update patternlab-node` if you originally [installed](/docs/node/installation.html) Pattern Lab via `npm.`
3. Restore files in `source/` and `config.json` if needed.

If you encounter trouble - make sure your npm devDependencies are up to date. Assuming you have the latest `package.json` file, you can delete the contents of `./node_modules` and run `npm cache clear` before running `npm install` to pull down everything anew.

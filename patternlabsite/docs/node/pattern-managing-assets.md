---
layout: docs-node
title: Managing Pattern Assets | Pattern Lab Node
---

# Managing Pattern Assets

Assets for patterns, including JavaScript, CSS, and images, should be stored in the `source/` directory. The Node version of Pattern Lab will move these assets to the `public/` directory for you when you generate your site or when you watch the `source/` directory for changes. You can name and nest your assets however you like. Pattern Lab Node ships with a `Gruntfile.js` task, `copy,` that can copy your assets for you. It looks like this:


    copy: {
        main: {
            files: [
                {
                    expand: true,
                    cwd: './source/js/',
                    src: '*',
                    dest: './public/js/'
                },
                {
                    expand: true,
                    cwd: './source/css/',
                    src: 'style.css',
                    dest: './public/css/'
                },
                {
                    expand: true,
                    cwd: './source/images/',
                    src: ['*.png', '*.jpg', '*.gif', '*.jpeg'],
                    dest: './public/images/'
                },
                {
                    expand: true,
                    cwd: './source/images/sample/',
                    src: ['*.png', '*.jpg', '*.gif', '*.jpeg'],
                    dest: './public/images/sample/'
                },
                {
                    expand: true,
                    cwd: './source/fonts/',
                    src: '*',
                    dest: './public/fonts/'
                },
                {
                    expand: true,
                    cwd: './source/_data/',
                    src: 'annotations.js',
                    dest: './public/data/'
                }
            ]
        }
    }

This structure is meant to be extended to suit your purposes. Change targets, move files, or ignore certain filetypes altogether. **Note**: If you make changes to `Gruntfile.js`, such as to copy a new directory, and have [auto re-generation and browser reload enabled](/docs/node/advanced-auto-reloading-the-browser.html), you will need to stop and start your grunt tasks to pick up the changes.


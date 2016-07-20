# DOCUMENTATION

[Live Preview Here](http://loadshift.yourwebvisual.com)

---

## Introduction

If you're porting this codebase over to a CMS you may not need to install anything at all and can skip those steps. The installation & setup instructions only serve to get the codebase running locally and/or making changes to the source.

## Installation &  Setup

This project is built with [Jekyll 3.0.3](http://jekyllrb.com) - a static site generator. It also uses [Grunt.js](http://gruntjs.com) - a JavaScript task runner and [Bower](http://bower.io) for package management.
### On Mac:

You may need to install Ruby, Ruby Gems, NodeJS & Git. There are detailed instructions on the [Jekyll](http://jekyllrb.com/docs/installation/) website.

    git clone git@github.com:liquidvisual/loshift-0516.git
    cd loshift-0516
    bundle install
    npm install
    bower install
    grunt serve
    # => Now browse to http://localhost:9000

For production:

    grunt build # => to concat and minify etc

### On Windows:

Jekyll is quite easy to set up on Mac OS X or Linux. On Windows, it will require a few different steps. These resources should help:

[Jekyll Docs on Windows](http://jekyllrb.com/docs/windows/#installation)
[Step by Step Guide](http://jekyll-windows.juthilo.com)

---

## Referencing the Build Folder

The online repo that stores the build folder named **/dist** (generated from /src) can be found on a separate branch - under the **gh-pages** branch of this very repo.

[https://github.com/liquidvisual/loshift-0516/tree/gh-pages](https://github.com/liquidvisual/loshift-0516/tree/gh-pages)

Feel free to use it as a reference. Although, it's advantageous to know how the [source](https://github.com/liquidvisual/loshift-0516/tree/master/src) files are organised since the structure aims to mimic a back-end environment with proper template inheritance. Many templating questions have already been solved and this can be a benefit if you draw from the source as well as the final compiled **build** directory.

Once you get the hang of reading Jekyll templates - you'll be able to breeze through, copy-pasting everything and substituting the basic templating syntax for your own.

---

## QUICK START


### 01. Copy Over /assets Directory

Jump into the [dist directory](https://github.com/liquidvisual/loshift-0516/tree/gh-pages) and grab the *entire* **/assets** folder. Put it into your project's root directory. This contains all the compiled CSS, fonts, images and JavaScript. This is important as all paths are root relative to the **/assets** folder.

That's all you'll need from the **/dist** directory. From this point on, all the action is in the **/src**.

### 02. Access /_layouts/master.html

Start with this and substitute the template logic for your own. When it comes to the assets, they compile into **/assets** on build so you'll only need to do a bit of substitution.

You can replace this:

    <!-- build:css /assets/css/minified.css -->
      <link rel="stylesheet" href="/css/some-css-file.css">
      <link rel="stylesheet" href="/css/some-css-file.css">
      <link rel="stylesheet" href="/css/some-css-file.css">
      <link rel="stylesheet" href="/css/some-css-file.css">
      <link rel="stylesheet" href="/css/some-css-file.css">
    <!-- endbuild -->

With this:

    <link rel="stylesheet" href="/assets/css/minified.css">

The same applies to Javascript. That's probably the trickiest bit that's not so obvious. The end result will look like this:

    <script src="/assets/scripts/minified.js"></script> <!-- Before closing body -->

### 03. Copy Over Partials in /_includes

Templates reference partials from this folder.

---

## How Templating Works

**NOTE:** All of these folders live inside **/src**

### /_layouts

Layouts are stored in the **/_layouts** folder and have 3 levels of heirarchy. They inherit from the bottom up.

1. master.html
2. internal.html
3. Page Layout (eg. homepage.html)

### /_includes

Some templates will draw on partials, which are just small HTML chunks inside the **/_includes** folder. These includes will sometimes use global template variables from their parent template.

### /_data

Some templates and includes will draw data (such as the navigation and locations listing) from YAML files located inside **/_data**. This keeps things external and templates are able to use basic loops and conditionals to interact with it, similiar to the logic in the back-end.


### /pages

Each Jekyll page is initiated with a single MARKDOWN file acting as the point of entry. These files contain meta data, permalinks and page specific variables which get passed into the layouts. They also contain body text which is stored as:

    {{ content }}

In the YAML front matter - these leaf pages will specify a template to use, eg. /internal/blog.html which will start at the page layouts and inherit up the chain.

### Front Matter

Every layout and markdown file (except the master.html) contain front matter in the form of YAML at the head of the document. This is used to specify layouts and page variables. Some data is stubbed inside the actual layout - for hinting and quick access.

As a general rule of thumb; if variables are in the front-matter, they're page variables and user editable. If they're inside the actual layout - it's for layout logic.

---

## How do I update this thing?

### The Quick Way

When updates need to be made, I'm just an email away. Cosmetic changes can be updated the easiest by just replacing your **/assets** folder with the one in the [gh-pages]([https://github.com/liquidvisual/loshift-0516/tree/gh-pages](https://github.com/liquidvisual/loshift-0516/tree/gh-pages) repo. Remember the assets folder contains everything that isn't HTML (images, fonts, JavaScript, CSS).

### Manually

Simply create a new stylesheet or Javascript and link to it in the **master.html**. These files can store quick fixes and time sensitive updates. At a later time, they can be absorbed into the Sass files and recompiled with a **grunt build**.

In future, when updates are made - one only needs to copy over the **dist/assets** folder from the remote repo.

## Please let me know how you go

I'm constantly trying to improve this workflow to make porting as smooth as possible. If anything isn't clear or could be improved, please let me know!
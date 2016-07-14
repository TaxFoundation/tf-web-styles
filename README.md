# Tax Foundation Style Guide

These are the standard CSS styles used in Tax Foundation web properties.

## Build

```
git clone https://github.com/TaxFoundation/tf-web-styles.git
npm install
npm start
```

## Development Guidelines

> No accidental standards.
>
> -[Nicholas C. Zarkas](https://www.nczonline.net/blog/2015/05/14/the-bunny-theory-of-code/)

This style guide consists of five major components:

* HTML templates compiled using [swig](http://paularmstrong.github.io/swig/)
* SCSS styles
* JavaScript for basic presentation and interaction where CSS alone won't cut it
* Images essential to the style, such as our logo
* Mock data for style guide generation

We use Swig for HTML templating because of its similarity to twig, which we can use for WordPress themes thanks to [Timber](https://wordpress.org/plugins/timber-library/).

HTML and styles are written according to a [BEM](http://getbem.com/naming/) pattern to make development quick and clear, and to avoid conflicts with semantic or third-party styles.

SCSS is found in `src/scss` and broken into three parts:
* `style.scss` simply imports all of the other SCSS partials. Gulp creates the final CSS file from this file.
* `_global` contains styles that are relevant across the site and other SCSS partials. These files should always be imported first in `style.scss`. These include a basic CSS reset, mixins, the grid, global SCSS variables, and structural styles.
* `_blocks` contains styles corresponding to different blocks in the BEM pattern. Each file corresponds to one block. E.g., the site-wide navbar block is styled by `_navbar.scss`. Some of these files correspond less to specific blocks than elements generally, such as `_forms.scss` and `_tables.scss`.

HTML is found in `src/templates` and broken into three parts:
* Files in `src/templates` correspond to generated html pages in the style guide. So `src/templates/index.html` will be transformed by gulp into `dist/index.html`.
* `_partials` contains reusable HTML partials. This directory also includes `base.html`, which is used as the basis for all pages and is extended by files in `src/templates`.
* `_examples` contains HTML files used only to generate example content for the style guide. These files may include mock data to pass into partials.

# Hongju Portfolio

Brand and graphic design portfolio by Hongju Yoon.

[Visit the portfolio](https://houzuuu.github.io/hongju-design-portfolio/)

A minimal editorial portfolio with four selected works, a three-column visual archive, 19 project case studies and About.

## Local preview

Static HTML, CSS and JavaScript. No build step or dependencies.

```sh
python3 -m http.server 4317 --directory dist
```

Open http://127.0.0.1:4317/.

## Checks

```sh
node tests/project-detail.test.cjs
node tests/text-reveal.test.cjs
```

## Structure

- `dist/index.html` — shared header and home sections
- `dist/app.js` — project routing, captions and text interactions
- `dist/projects.js` — project content and media
- `dist/style.css` — responsive styling
- `dist/images`, `dist/videos` — portfolio artwork

All portfolio artwork and brand assets belong to their respective owners.

## GitHub Pages deployment

The live site is served from the root of the `gh-pages` branch, generated from `dist/`.

```sh
git subtree split --prefix dist -b pages-update
git push origin pages-update:gh-pages
git branch -D pages-update
```

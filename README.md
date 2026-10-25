# Hongju Portfolio

Brand and graphic design portfolio by Hongju Yoon.

[Visit the portfolio](https://hongju-editorial-portfolio.houzuuu.chatgpt.site/)

A minimal editorial portfolio with five selected works, a three-column visual archive, 19 project case studies and About.

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

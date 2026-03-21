# mwazovzky.github.io

Personal portfolio site built with [VitePress](https://vitepress.dev/). Bilingual (Russian / English).

## Setup

```bash
npm install
```

## Development

```bash
npm run docs:dev
```

Opens a local dev server with hot reload.

## Build & Preview

```bash
npm run docs:build
npm run docs:preview
```

## Deploy

```bash
bash deploy.sh
```

Builds the site and force-pushes the output to the `master` branch, which is served by GitHub Pages. Source code lives on other branches (`upgrade`, `dev`).

## Project Structure

```
docs/
├── .vitepress/
│   ├── config.mjs          # Site config (locales, nav, sidebar)
│   └── theme/              # Custom theme (word cloud, quote, layout)
├── public/                 # Static assets (images, favicons)
├── index.md                # Home page (RU)
├── about/index.md          # About page (RU)
├── education.md            # Education (RU)
├── jobs.md                 # Work experience (RU)
├── projects.md             # Projects (RU)
└── en/                     # English versions (same structure)
```

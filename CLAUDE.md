# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

Personal portfolio site (`mwazovzky.github.io`) built with **VitePress 1.6.x**.
Bilingual: Russian (default at `/`) and English (`/en/`).
Content: personal profile, education, work experience, projects.

## Commands

- `npm run docs:dev` — start local dev server
- `npm run docs:build` — build static site to `docs/.vitepress/dist/`
- `npm run docs:preview` — preview the built site
- `bash deploy.sh` — build and deploy to GitHub Pages (force-pushes dist to `master`)

## Structure

- `docs/` — VitePress source root (markdown content + config)
  - `.vitepress/config.mjs` — site config (locales, nav, sidebar)
  - `.vitepress/theme/` — custom theme extending VitePress default
  - `public/` — static assets (images, favicons)
  - `index.md`, `education.md`, `jobs.md`, `projects.md` — Russian content
  - `about/index.md` — Russian about page (with OG/Twitter meta)
  - `en/` — English content (mirrors Russian structure)

## Custom Theme

The theme extends VitePress default via `sidebar-nav-after` layout slot to inject:
- `Quote.vue` — Dijkstra quote
- `TechnologyCloud.vue` / `WordCloud.vue` — d3-based word cloud (client-only, uses `<ClientOnly>` wrapper)
- `PoweredByVitepress.vue` — footer attribution

## Deployment

`deploy.sh` builds the site, inits a fresh git repo in `docs/.vitepress/dist/`, and force-pushes to `master` on GitHub. The `master` branch is served by GitHub Pages and contains only build output.

  Summary

  This is a static GitHub Pages deployment of a VuePress 1.4.1 personal portfolio
   site. The code is entirely machine-generated build output with no source
  files. The most notable issues are incomplete English content, exposed personal
   contact info, typos in the English version, and outdated copyright/framework
  version.

  Bugs

  B1 — English homepage feature descriptions are empty (en/index.html:53) [major]
  The three feature cards ("Focus on Bussiness Requirements", "Modern Techology
  Stack", "Project Management Experience") have empty <p></p> bodies, while the
  Russian versions have full paragraph descriptions. This makes the English
  homepage look broken/incomplete.
  Fix: Either populate the English feature descriptions from the VuePress source,
   or if editing compiled output, add the translated text into the <p></p> tags.

  B2 — Typo "Bussiness" in English homepage (en/index.html:53) [minor]
  "Focus on Bussiness Requirements" — should be "Business".
  Fix: Correct the spelling.

  B3 — Typo "Techology" in English homepage (en/index.html:53) [minor]
  "Modern Techology Stack" — should be "Technology".
  Fix: Correct the spelling.

  B4 — Invalid lang attribute en-EN (en/index.html:2, en/projects.html:2, and
  other /en/ pages) [minor]
  en-EN is not a valid BCP 47 language tag. Valid values would be en, en-US, or
  en-GB.
  Fix: Change lang="en-EN" to lang="en" (or a valid regional variant) in VuePress
   locale config.

  Design Issues

  D1 — Copyright year frozen at 2018 (index.html:54, en/index.html:54) [minor]
  Footer reads "MIT Licensed | Copyright &copy; 2018" — 8 years out of date.
  Fix: Update to a range ("2018–2026") or make it dynamic in the VuePress source
  config.

  D2 — VuePress 1.4.1 is outdated (all pages, meta generator tag) [minor]
  VuePress 1.4.1 was released in 2020. VuePress 1.x reached end-of-life; VuePress
   2.x or VitePress are the current successors. This is a static portfolio site
  so the risk is low, but the framework has known issues with newer Node
  versions.
  Fix: Consider upgrading when rebuilding from source.

  D3 — style.css loaded via <link> inside <div> body content (projects.html:47,
  jobs.html:16, education.html:16) [minor]
  Several content pages include <link rel="stylesheet" type="text/css"
  href="/style.css"> inside the rendered body content <div>, rather than in
  <head>. While browsers tolerate this, it's invalid HTML and can cause a flash
  of unstyled content.
  Fix: Move the custom stylesheet import to the VuePress head config so it
  renders in <head>.

  D4 — No source files in this repo [major]
  The deployment repo contains only compiled output. There is no VuePress source
  (markdown, config, package.json), making the site effectively unmaintainable
  without locating the original source. Any content fix requires editing
  minified/compiled HTML.
  Fix: Either add the VuePress source to this repo (e.g., in a docs/ or src/
  branch) or document where the source lives.

  Test Gaps

  No findings. (Static site with no test infrastructure — not applicable for
  compiled output.)

  Security

  S1 — Personal email exposed in public HTML (about/index.html:54) [minor]
  mike.wazovzky@gmail.com is in plain text in the page, easily harvested by spam
  bots.
  Fix: Consider obfuscating with JavaScript-based email rendering or using a
  contact form instead.
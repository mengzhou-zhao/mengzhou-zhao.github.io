# Warm engineering portfolio — interactive preview

Standalone, dependency-free prototype. Open through a local HTTP server from the repository root at `/_preview/`. The approved warm-modern version is now exported to the production homepage. Jekyll excludes underscore-prefixed directories by default; do not add this directory to its `include` setting.

## Preview

From the repository root, run `python -m http.server 8765 --bind 127.0.0.1`, then open `http://127.0.0.1:8765/_preview/`.

- Chinese / English switch (Chinese first)
- All 10 existing projects, with category filters and visible result counts
- Ten project stories, each with three illustrated steps
- Hero project carousel: 5.5-second interval, 700 ms cross-fade, manual previous/next and pause
- Rotation pauses on hover, focus, open dialogs, hidden pages and when offscreen; reduced-motion users start paused
- Native modal dialog: Escape to close, keyboard focus containment, arrow-key navigation
- Engineering process tabs with arrow-key navigation
- Responsive layout and reduced-motion support

## Content basis

- `_data/profile.yml`
- `_projects/2026/2026-morphing-wing-cover-tpu-petg.md`
- `_projects/2024/2024-winding-path-planning-graph-theory.md`
- `_projects/2025/2025-avian-morphing-skeleton-fabrication.md`
- `_publications/2025/2025-wraptor-coaxial-truss-joints.md`

Copy is condensed for the prototype, not a replacement for source records. Assets are referenced from the existing repository. The CV link is explicitly Chinese in English mode. The research link opens the existing paper DOI.

The remaining seven project records are exported from `_projects/` by `python _preview/sync_projects.py` into `projects-data.js`. Their detail text comes from the source problem / role / impact paragraphs; their card titles and short descriptions are curated in the export script.

## Rollback baseline

Remote tag: `backup-before-card-redesign-2026-09-23`

Commit: `6c504181374846592645fdea52bb817e6427cf52`

Removing `_preview/` does not revert the published homepage. To restore the previous homepage, restore `index.html` from the baseline tag and commit that change. Do not reset the whole repository if it contains subsequent unrelated work.

## Publish updates

Run `python _preview/sync_projects.py` when source records change, then `python _preview/publish_homepage.py` to refresh `index.html` and `assets/portfolio/`. Run `bundle exec jekyll build` before committing. The production page omits preview-only noindex metadata. The selected typography is Georgia for Latin headings with Microsoft YaHei and platform sans-serif fallbacks for Chinese.

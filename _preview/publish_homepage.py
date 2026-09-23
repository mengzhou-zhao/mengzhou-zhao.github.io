"""Export the approved static homepage from the standalone prototype."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PREVIEW = ROOT / '_preview'
OUTPUT = ROOT / 'assets' / 'portfolio'
OUTPUT.mkdir(parents=True, exist_ok=True)
for name in ('style.css', 'app.js', 'projects-data.js'):
    content = (PREVIEW / name).read_text(encoding='utf-8')
    content = content.replace('../assets/', '/assets/')
    (OUTPUT / name).write_text(content, encoding='utf-8')
page = (PREVIEW / 'index.html').read_text(encoding='utf-8')
page = page.replace('  <meta name="robots" content="noindex,nofollow">\n', '')
page = page.replace('../assets/', '/assets/')
for name in ('style.css', 'app.js', 'projects-data.js'):
    page = page.replace('"' + name + '"', '"/assets/portfolio/' + name + '"')
page = page.replace('  <meta name="theme-color"', '  <meta name="description" content="Mengzhou Zhao — lightweight structures, composites, computational design and physical validation at the University of Bristol.">\n  <link rel="canonical" href="https://mengzhou-zhao.github.io/">\n  <meta name="theme-color"')
page = page.replace('此交互预览需要 JavaScript。This interactive preview requires JavaScript.', '互动项目展示需要 JavaScript。也可浏览 <a href="/projects.html">项目档案 / Project archive</a>。')
(ROOT / 'index.html').write_text(page, encoding='utf-8')
print('Exported homepage and three portfolio assets.')

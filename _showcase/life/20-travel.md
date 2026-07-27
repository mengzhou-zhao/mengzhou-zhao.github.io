---
show: true
width: 8
date: 2026-05-01 00:02:00 +0800
height: 360px
group: Travel
images:
# TODO: replace each src with your own photo under assets/images/showcase/
- src: assets/images/empty_300x200.png
  title: Place one
  title_zh: 地点一
  desc: Where it is and why it stuck with you.
  desc_zh: 它在哪里，以及为何让你念念不忘。
- src: assets/images/empty_300x200.png
  title: Place two
  title_zh: 地点二
  desc: A short caption.
  desc_zh: 一句简短的说明。
- src: assets/images/empty_300x200.png
  title: Place three
  title_zh: 地点三
  desc: A short caption.
  desc_zh: 一句简短的说明。
---

{% include widgets/carousel.html id=page.id images=page.images height=page.height %}

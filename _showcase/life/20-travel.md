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
  desc: Where it is and why it stuck with you.
- src: assets/images/empty_300x200.png
  title: Place two
  desc: A short caption.
- src: assets/images/empty_300x200.png
  title: Place three
  desc: A short caption.
---

{% include widgets/carousel.html id=page.id images=page.images height=page.height %}

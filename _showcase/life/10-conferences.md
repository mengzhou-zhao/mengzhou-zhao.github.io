---
show: true
width: 8
date: 2026-06-01 00:02:00 +0800
height: 360px
group: Conferences
images:
# TODO: replace each src with your own photo under assets/images/showcase/
- src: assets/images/empty_300x200.png
  title: Giving my talk
  desc: Conference name, city — year.
- src: assets/images/empty_300x200.png
  title: At my poster
  desc: Conference name, city — year.
- src: assets/images/empty_300x200.png
  title: With the group
  desc: A few words about the people / trip.
---

{% include widgets/carousel.html id=page.id images=page.images height=page.height %}

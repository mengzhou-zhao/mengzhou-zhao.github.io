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
  title_zh: 我在作报告
  desc: Conference name, city — year.
  desc_zh: 会议名称，城市 — 年份。
- src: assets/images/empty_300x200.png
  title: At my poster
  title_zh: 在我的海报前
  desc: Conference name, city — year.
  desc_zh: 会议名称，城市 — 年份。
- src: assets/images/empty_300x200.png
  title: With the group
  title_zh: 和团队在一起
  desc: A few words about the people / trip.
  desc_zh: 关于同行伙伴 / 这趟旅程的几句话。
---

{% include widgets/carousel.html id=page.id images=page.images height=page.height %}

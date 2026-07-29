---
title:      "Automated 3D Winding Path Planning for Modular Truss Joints: From Manual Craft to Computational Design"
title_zh:   "模块化桁架节点的自动化三维缠绕路径规划：从手工试错到计算驱动设计"
date:       2024-01-01 12:00:00 +0800
selected:   true
role:       "PhD Research"
role_zh:    "博士研究"
cover:      /assets/images/covers/winding-path-planning-jig.jpg
tags:
  - Computational Design
  - Path Planning
  - Optimisation
  - Filament Winding
tags_zh:
  - 计算设计
  - 路径规划
  - 优化
  - 纤维缠绕
summary: >-
  <div class="mb-3 pl-3" style="border-left: 3px solid #ced4da;">
    <p class="mb-1"><strong>Problem</strong> &mdash; A hierarchical space frame demands joints of every topology: three trusses, four, at arbitrary angles and spacings. But each new joint geometry used to require an engineer to work out by hand how a single continuous fibre could traverse the entire joint &mdash; reaching every member, never colliding with what had already been laid down, staying continuous, and remaining windable in practice. That is craft: slow, dependent on the individual, impossible to reproduce or guarantee, and it is precisely what stops modular wound space frames from ever scaling to industrial production. The manufacturing process was no longer the bottleneck; designing the path was.</p>
    <p class="mb-1"><strong>My role</strong> &mdash; I made path planning computational. I extended graph-theoretical methods so that spatial constraints, fibre continuity and manufacturability are satisfied simultaneously and automatically, and coupled the planner with structural optimisation so that what comes out is not merely a joint that <em>can</em> be wound, but one that is structurally efficient.</p>
    <p class="mb-0"><strong>Impact</strong> &mdash; It converts what had been a manual, trial-and-error craft into a systematic, computationally driven design process: a new joint topology is planned automatically instead of being invented by hand, so the result is reproducible, auditable and transferable to geometries nobody has wound before. This is the capability that takes modular wound trusses from one-off demonstrators to something an industry could actually adopt.</p>
  </div>

  This work is the computational counterpart to the winding processes developed earlier in this series: those established that a whole truss joint <em>could</em> be built in one continuous wind; this one answers how to decide, automatically, what that wind should be for any joint you are asked to make.

  <p class="mt-2 mb-0 font-italic">Manuscript in preparation &mdash; methodology and results will be shared once the paper is published.</p>
summary_zh: >-
  <div class="mb-3 pl-3" style="border-left: 3px solid #ced4da;">
    <p class="mb-1"><strong>问题</strong> &mdash; 分级空间框架需要各种拓扑的节点：连接三根桁架的、四根的、各种角度与间距的。可过去每换一种节点几何，都得靠工程师用手去想——一根连续的纤维要如何走遍整个节点，既要覆盖到每一根杆件，又不能与已经铺下的纤维打架，还要保持连续、并且在实际操作中真的缠得出来。这是"手艺"：慢、依赖个人、无法复现也无法保证，而它恰恰是模块化缠绕空间框架始终无法规模化量产的原因。此时瓶颈已经不在制造工艺，而在于路径本身怎么设计。</p>
    <p class="mb-1"><strong>我的角色</strong> &mdash; 我把路径规划变成了可计算的问题。我拓展了图论方法，使空间约束、纤维连续性与可制造性能够被同时、自动地满足；并将路径规划与结构优化耦合起来，让最终产出的不只是"缠得出来"的节点，而是结构上高效的节点。</p>
    <p class="mb-0"><strong>成果与应用</strong> &mdash; 它把原本依赖手工试错的"手艺"，变成了系统化、由计算驱动的设计流程：面对一种新的节点拓扑，不再靠人去"想"出来，而是自动规划出来——结果可复现、可追溯，并且能迁移到此前从没有人缠过的几何上。正是这项能力，让模块化缠绕桁架有机会从一次性的演示件，走向产业真正用得起的东西。</p>
  </div>

  这项工作是本系列中此前那些缠绕工艺的"计算侧对应物"：那些工作证明了一个完整的桁架节点<em>能够</em>在一次连续缠绕中做出来；而这项工作回答的是——面对任意一个要求做的节点，如何自动决定这一次缠绕究竟该怎么走。

  <p class="mt-2 mb-0 font-italic">论文撰写中 &mdash; 方法与结果将在论文发表后公布。</p>
---

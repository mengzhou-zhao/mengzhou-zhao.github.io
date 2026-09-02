---
title:      "Single-Print Compliant Morphing Wing Cover: Co-Printed TPU Compliant Skin with an Integrated PETG-CF Rigid Frame"
title_zh:   "一次打印成型的柔顺变形机翼盖板：TPU 柔性蒙皮与 PETG-CF 刚性框架共打印"
date:       2026-04-01 00:01:00 +0800
selected:   true
role:       "Research Associate"
role_zh:    "研究员（博士后）"
cover:      /assets/images/covers/morphing-wing-cover-tpu-petg-flex.jpg
tags:
  - Additive Manufacturing
  - Morphing Structures
  - Compliant Mechanisms
  - Multi-Material FDM
tags_zh:
  - 增材制造
  - 变形结构
  - 柔顺机构
  - 多材料 FDM
summary: >-
  <div class="mb-3 pl-3" style="border-left: 3px solid #ced4da;">
    <p class="mb-1"><strong>Problem</strong> &mdash; A morphing wing for the next generation of airliners (an Airbus next-generation aircraft): replace the hinged flap with a control surface that changes camber continuously &mdash; no gaps, no steps &mdash; to cut drag, noise and fuel burn across the whole flight envelope. The entire concept lives or dies on the skin that wraps the main-wing control surface: it must be compliant enough chordwise for a modest actuator to change camber, yet stiff enough out-of-plane to hold its shape against aerodynamic pressure without deflecting off-design or buckling. Stiffness and compliance are demanded of the same material, in different directions at once &mdash; the exact conflict that has stalled morphing wings for decades.</p>
    <p class="mb-1"><strong>My role</strong> &mdash; My core contribution is not "printing the part" but a digital geometry-generation pipeline. To realise this load-bearing compliant skin on an aerodynamically-optimised, doubly-curved swept wing surface (not a flat coupon), I use implicit modelling to automatically generate a zero-Poisson-ratio conformal cellular core and multi-material structure over that surface, and to emit a model that is print-ready in a single build with no supports and no post-processing; compliance and stiffness are assigned to distinct regions within the same print, and the layer lines run along the flexing direction so the skin folds repeatedly without delaminating. The zero Poisson's ratio is the crux: the skin deforms chordwise without contracting spanwise, so the aerodynamic surface stays continuous and never wrinkles.</p>
    <p class="mb-0"><strong>Impact</strong> &mdash; It turns morphing-skin manufacture from a hand-built kit of parts into an automated digital route that runs straight from any aerodynamically-optimised surface to a print-ready model &mdash; no supports, no post-processing, one build &mdash; and removes the glue line, the weakest and first-to-fatigue link of the conventional approach, along the way. The pipeline transfers to different wing surfaces, aimed squarely at making next-generation morphing wings buildable.</p>
  </div>

  A one-piece morphing wing cover fabricated by dual-material fused-deposition printing, in which a flexible TPU compliant skin and a stiff PETG-CF rigid frame are co-printed in a single build with no fasteners, bonding or post-assembly. The compliant span is a TPU section built on a zero-Poisson-ratio cellular core, which lets the cover bend through large chordwise curvature without contracting spanwise, so the aerodynamic surface stays continuous and never wrinkles; the leading and trailing regions transition into rigid PETG-CF that provides mounting stiffness and a clean interface to the surrounding structure. The two materials are printed contiguously so that load transfers across a graded TPU&ndash;PETG-CF boundary rather than a glue line, removing the weakest link of a conventionally bonded skin. The part is printed standing on its edge on a Bambu&nbsp;Lab multi-material system, letting the layer lines run along the flexing direction so the compliant skin folds without delaminating. A later build pushes the same single-print route to three filaments at once &mdash; two TPU grades of different shore hardness alongside a glass-fibre-reinforced TPU (TPU-GF) &mdash; each placed where its own stiffness is wanted, so the skin is tailored direction by direction instead of behaving as one uniform elastomer. The current direction is to hand the rigid frame to TPU-GF in place of PETG-CF: its shrinkage is extremely low, which keeps a part this long and slender dimensionally true off the bed, and it bonds far better to the TPU of the compliant span &mdash; frame and skin then sit in the same material family rather than meeting across a dissimilar-polymer interface. The result is a single printed component that reproduces the stiff-to-compliant-to-stiff behaviour a morphing cover needs, at prototype cost and lead time.

  <div class="row mt-2 no-gutters">
    <div class="col-6 pr-1">
      <img src="/assets/images/covers/morphing-wing-cover-tpu-petg-printed.jpg" class="w-100 rounded-sm mb-1" alt="Morphing wing cover as printed, standing on the build plate of a Bambu Lab multi-material FDM printer, showing the green TPU compliant skin transitioning to black PETG-CF edges">
      <div class="small text-center text-muted">As printed: one-piece TPU&nbsp;+&nbsp;PETG-CF cover on the Bambu&nbsp;Lab bed</div>
    </div>
    <div class="col-6 pl-1">
      <img src="/assets/images/covers/morphing-wing-cover-tpu-petg-flex.jpg" class="w-100 rounded-sm mb-1" alt="The printed cover held in two hands and flexed into chordwise curvature, showing the compliant TPU span deforming between rigid PETG-CF ends">
      <div class="small text-center text-muted">Flexed by hand: compliant TPU skin bends between rigid PETG-CF ends</div>
    </div>
  </div>

  <div class="row mt-1 no-gutters">
    <div class="col-12">
      <img src="/assets/images/covers/morphing-wing-cover-tri-material-print.jpg" class="w-100 rounded-sm mb-1" alt="Two morphing skin frames lying on the printer bed, each printed in a single build from three different filaments in one continuous part">
      <div class="small text-center text-muted">Three filaments printed simultaneously: two TPU hardnesses plus a glass-fibre-reinforced TPU, each placed where its own stiffness is wanted so the skin is tuned direction by direction</div>
    </div>
  </div>
summary_zh: >-
  <div class="mb-3 pl-3" style="border-left: 3px solid #ced4da;">
    <p class="mb-1"><strong>问题</strong> &mdash; 面向下一代民航客机（Airbus 新一代机型）的变形机翼：用连续变弯度的变形舵面取代带铰链的传统襟翼，消除缝隙与阶差，从而在整个飞行包线内降低阻力、噪声与油耗。而整套方案的成败，最终都压在包覆于主翼舵面表面的那层蒙皮上——它必须在弦向足够柔顺，让作动器以很小的能量改变弯度；又要在面外足够刚硬，顶住气动压力而不被吹成非设计外形、不发生局部屈曲。刚与柔要在同一块材料上、沿不同方向同时兑现，这正是变形机翼数十年来始终卡住的环节。</p>
    <p class="mb-1"><strong>我的角色</strong> &mdash; 我的核心工作不是"把零件打印出来"，而是一套数字化几何生成流程。要把这层承载式柔顺蒙皮做到一张经过气动优化的、双曲率后掠自由曲面上（而非一块平板），我以隐式（implicit）建模自动为该曲面生成零泊松比的随形胞元核心与多材料结构，并直接输出无需支撑、无需后处理、可一次成型打印的模型；柔顺与刚性被按区域分配进同一次打印，层线顺着弯曲方向排布，让蒙皮反复折叠而不分层。零泊松比是这里的关键——蒙皮沿弦向变形时不会在展向收缩，气动外形因而始终保持连续、不起皱。</p>
    <p class="mb-0"><strong>成果与应用</strong> &mdash; 它把"变形蒙皮制造"从依赖手工的套件装配，升级为一条从任意气动优化曲面直达可打印模型的自动化数字流程——无支撑、无后处理、一次成型，并顺带去掉了传统方案中最薄弱、最先疲劳失效的胶接线。这条流程可迁移到不同机翼曲面，直指下一代客机变形机翼的工程落地。</p>
  </div>

  一款通过双材料熔融沉积（FDM）打印制成的整体式变形机翼盖板，柔性 TPU 蒙皮与刚性 PETG-CF 框架在一次打印中共同成型，无需任何紧固件、粘接或后装配。柔顺段是一段以零泊松比胞元核心构成的 TPU 结构，使盖板能够在弦向发生大曲率弯曲而不在展向收缩，气动表面因而始终保持连续、不起皱；前缘与后缘区域过渡为刚性 PETG-CF，提供安装刚度以及与周围结构之间干净的连接界面。两种材料连续打印，使载荷跨越一个梯度化的 TPU&ndash;PETG-CF 界面传递，而非经由一条胶接线，从而消除了传统粘接蒙皮中最薄弱的环节。零件以侧立姿态打印于 Bambu&nbsp;Lab 多材料系统上，使层线沿弯曲方向排布，从而让柔性蒙皮在折叠时不发生分层。在此基础上，后续打印把同一条一次成型路线推进到三种耗材同时打印——两种不同邵氏硬度的 TPU 与玻纤增强 TPU（TPU-GF）——按各自的力学特性分配到需要它的位置，使蒙皮不再是一块均质弹性体，而是可以逐方向定制刚度。目前的方向是用 TPU-GF 取代 PETG-CF 来承担刚性框架：其收缩率极低，使这样细长的零件下机后仍能保持尺寸精度；同时它与柔顺段所用的 TPU 同属一个材料体系，界面结合远好于两种异质聚合物之间的搭接。最终得到一个单一打印件，以样机级的成本与周期，复现了变形盖板所需的“刚&mdash;柔&mdash;刚”行为。

  <div class="row mt-2 no-gutters">
    <div class="col-6 pr-1">
      <img src="/assets/images/covers/morphing-wing-cover-tpu-petg-printed.jpg" class="w-100 rounded-sm mb-1" alt="Morphing wing cover as printed, standing on the build plate of a Bambu Lab multi-material FDM printer, showing the green TPU compliant skin transitioning to black PETG-CF edges">
      <div class="small text-center text-muted">打印成型状态：Bambu&nbsp;Lab 打印床上的整体式 TPU&nbsp;+&nbsp;PETG-CF 盖板</div>
    </div>
    <div class="col-6 pl-1">
      <img src="/assets/images/covers/morphing-wing-cover-tpu-petg-flex.jpg" class="w-100 rounded-sm mb-1" alt="The printed cover held in two hands and flexed into chordwise curvature, showing the compliant TPU span deforming between rigid PETG-CF ends">
      <div class="small text-center text-muted">手动弯折：柔性 TPU 蒙皮在刚性 PETG-CF 两端之间弯曲</div>
    </div>
  </div>

  <div class="row mt-1 no-gutters">
    <div class="col-12">
      <img src="/assets/images/covers/morphing-wing-cover-tri-material-print.jpg" class="w-100 rounded-sm mb-1" alt="Two morphing skin frames lying on the printer bed, each printed in a single build from three different filaments in one continuous part">
      <div class="small text-center text-muted">三种耗材同时打印：两种不同硬度的 TPU 加玻纤增强 TPU（TPU-GF），各按其力学特性布置到相应位置，从而逐方向定制蒙皮刚度</div>
    </div>
  </div>
---

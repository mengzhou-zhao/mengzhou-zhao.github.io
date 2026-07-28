---
title:      "Surrogate-Based Multi-Objective Optimisation of an Avian Morphing Wing Skeleton"
title_zh:   "基于代理模型的仿鸟类变形机翼骨架多目标优化"
date:       2025-11-01 00:01:00 +0800
selected:   true
role:       "Research Associate"
role_zh:    "研究员（博士后）"
cover:      /assets/images/covers/avian-morphing-pareto-front.png
tags:
  - Optimisation
  - Finite Element Analysis
  - Surrogate Modelling
  - Bio-Inspired
tags_zh:
  - 优化
  - 有限元分析
  - 代理模型
  - 仿生
summary: >-
  <div class="mb-3 pl-3" style="border-left: 3px solid #ced4da;">
    <p class="mb-1"><strong>Problem</strong> &mdash; Designing the best morphing-wing skeleton is really a search through a large, conflicting trade-off space &mdash; bending stiffness, torsional stiffness and how compactly the wing folds all pull against each other &mdash; where every candidate costs one expensive high-fidelity FE run. Reaching the optimum by hand, through trial and error, is next to impossible.</p>
    <p class="mb-1"><strong>My role</strong> &mdash; I built the computational optimisation framework &mdash; Abaqus beam FE, surrogate models, an adaptive-infill loop, and a genetic multi-objective search &mdash; calibrated against experiment.</p>
    <p class="mb-0"><strong>Impact</strong> &mdash; The framework delivers a Pareto-optimal front validated by full FE, and a Sobol analysis that shows exactly which geometric variables drive performance &mdash; upgrading morphing-skeleton design from hand trial-and-error to a systematic, experiment-anchored automatic search whose optimum is reproducible and explainable.</p>
  </div>

  A computational design framework that navigates the four-bar skeleton's geometric design space for competing objectives &mdash; specific bending stiffness, specific torsional stiffness, and how compactly the wing folds (span fold ratio). The work follows directly from the experimental finding that global performance is governed by skeletal <em>geometry</em> rather than local reinforcement, so it is the geometry itself that is optimised. Each candidate design is evaluated by an Abaqus Timoshenko-beam finite-element model; the expensive FE responses are then replaced by surrogate models (a sparse polynomial chaos expansion together with a polynomial-chaos Kriging model built in UQLab), while cheap closed-form geometric quantities such as the fold ratio are evaluated exactly rather than surrogated. The beam model's effective section moduli are inverse-calibrated against the full experimental rigidity dataset, anchoring the optimisation to measured behaviour. An adaptive-infill loop &mdash; re-optimise, re-evaluate the resulting Pareto front by full FE, then fold the validated points back into training &mdash; closes the gap between global surrogate accuracy and accuracy where the optimiser actually operates, with a genetic multi-objective search returning the converged front. A global (Sobol) sensitivity analysis identifies which geometric variables drive each objective, reinforcing the experimental conclusion that truss proportion, not local material reinforcement, sets the skeleton's structural behaviour.

  <div class="row mt-2 no-gutters">
    <div class="col-6 pr-1">
      <img src="/assets/images/covers/avian-morphing-sobol-sensitivity.png" class="w-100 rounded-sm mb-1" alt="Sobol first- and total-order sensitivity indices for the bending and torsional stiffness objectives">
      <div class="small text-center text-muted">Sobol sensitivities: which geometric variables drive each objective</div>
    </div>
    <div class="col-6 pl-1">
      <img src="/assets/images/covers/avian-morphing-surrogate-convergence.png" class="w-100 rounded-sm mb-1" alt="Convergence of the on-front surrogate-versus-FE error across adaptive-infill rounds">
      <div class="small text-center text-muted">Adaptive-infill convergence of on-front surrogate accuracy</div>
    </div>
  </div>
summary_zh: >-
  <div class="mb-3 pl-3" style="border-left: 3px solid #ced4da;">
    <p class="mb-1"><strong>问题</strong> &mdash; 要设计出最好的变形机翼骨架，本质上是在一个庞大且相互冲突的权衡空间里找最优——弯曲刚度、扭转刚度、折叠得有多紧凑，三者彼此拉扯；而每评估一个方案都要跑一次昂贵的高保真有限元。靠工程师手工试错，几乎不可能走到最优。</p>
    <p class="mb-1"><strong>我的角色</strong> &mdash; 我构建了整套计算优化框架——Abaqus 梁有限元、代理模型、自适应填充循环与遗传多目标搜索——并与实验标定。</p>
    <p class="mb-0"><strong>成果与应用</strong> &mdash; 框架直接给出一条经完整有限元验证的 Pareto 最优前沿，并用 Sobol 敏感性分析指出到底是哪些几何变量在主导性能——把变形骨架设计从"手工试错"升级为"系统化、以实验证据为锚"的自动寻优，让最优方案可复现、可解释。</p>
  </div>

  一套计算设计框架，在四连杆骨架的几何设计空间中针对相互竞争的目标进行寻优——比弯曲刚度、比扭转刚度，以及机翼折叠的紧凑程度（翼展折叠比）。该工作直接承接了此前的实验发现：整体性能由骨架<em>几何</em>而非局部加强决定，因此优化的对象正是几何本身。每个候选设计都由 Abaqus 铁摩辛柯梁有限元模型评估；随后用代理模型（在 UQLab 中构建的稀疏多项式混沌展开与多项式混沌 Kriging 模型）替代昂贵的有限元响应，而折叠比等廉价的闭式几何量则直接精确计算、不做代理。梁模型的有效截面模量通过与完整实验刚度数据集进行反演标定，使优化锚定于实测行为。一个自适应填充循环——重新优化、用完整有限元重新评估所得 Pareto 前沿、再将验证过的点纳入训练集——弥合了全局代理精度与优化器实际工作区域精度之间的差距，并由遗传多目标搜索给出收敛的前沿。全局（Sobol）敏感性分析辨识出哪些几何变量主导各目标，进一步印证了实验结论：决定骨架结构行为的是桁架比例，而非局部材料加强。

  <div class="row mt-2 no-gutters">
    <div class="col-6 pr-1">
      <img src="/assets/images/covers/avian-morphing-sobol-sensitivity.png" class="w-100 rounded-sm mb-1" alt="Sobol first- and total-order sensitivity indices for the bending and torsional stiffness objectives">
      <div class="small text-center text-muted">Sobol 敏感性：哪些几何变量主导各目标</div>
    </div>
    <div class="col-6 pl-1">
      <img src="/assets/images/covers/avian-morphing-surrogate-convergence.png" class="w-100 rounded-sm mb-1" alt="Convergence of the on-front surrogate-versus-FE error across adaptive-infill rounds">
      <div class="small text-center text-muted">前沿处代理精度的自适应填充收敛</div>
    </div>
  </div>
---

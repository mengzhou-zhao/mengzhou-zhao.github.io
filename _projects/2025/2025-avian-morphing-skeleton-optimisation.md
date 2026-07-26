---
title:      "Surrogate-Based Multi-Objective Optimisation of an Avian Morphing Wing Skeleton"
date:       2025-11-01 00:01:00 +0800
selected:   true
role:       "Research Associate"
cover:      /assets/images/covers/avian-morphing-pareto-front.png
tags:
  - Optimisation
  - Finite Element Analysis
  - Surrogate Modelling
  - Bio-Inspired
summary: >-
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
---

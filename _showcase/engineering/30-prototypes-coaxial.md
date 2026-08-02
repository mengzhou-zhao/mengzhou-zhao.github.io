---
show: true
width: 4
date: 2026-04-03 00:01:00 +0800
group: Prototypes &amp; Iterations
images:
  - src: /assets/images/covers/wraptor-coaxial-joint-prototypes.png
    alt: "Several coaxial joint prototypes wound at different member thicknesses"
  - src: /assets/images/covers/wraptor-coaxial-joint-winding-sequence.webp
    alt: "Two-panel diagram of the winding sequence: one continuous tow path numbered 1 to 6 from start to end, and the finished bracing pattern after three repeats"
    caption: "The winding sequence. One continuous tow runs 1&rarr;6 around the jig posts and comes back to where it started, so the pattern closes and can simply be repeated &mdash; which is what makes the pass count a design dial rather than a new layup."
    caption_zh: "缠绕顺序。一根连续纤维束沿 1&rarr;6 绕过工装立柱后回到起点，路径自身闭合、因而可以直接重复——这正是缠绕道数能成为一个设计旋钮、而不需要重新设计铺层的原因。"
  - src: /assets/images/covers/wraptor-coaxial-joint-winder-bench.jpg
    alt: "The 3D-printed winding jig mounted in an aluminium-extrusion frame on the bench, a partly wound coaxial joint on it and a drip tray underneath"
    caption: "The same jig on the bench, part-way through a joint. The printed posts set where the tow turns, so the geometry in the drawing above is enforced by the tooling rather than by the operator's hand."
    caption_zh: "同一套工装在工作台上，一个节点缠到一半。打印立柱决定了纤维在哪里转向——上图那套几何是由工装保证的，而不是靠操作者的手感。"
---
<div>
    <div class="p-3">
        <h5 class="card-title mb-1"><span class="lang-en" lang="en">Coaxial-joint prototypes</span><span class="lang-zh" lang="zh">同轴节点原型</span></h5>
        <p class="card-text text-muted mb-0 small"><span class="lang-en" lang="en">The same joint wound at different member thicknesses &mdash; dialling in stiffness by changing only the number of winding passes.</span><span class="lang-zh" lang="zh">同一节点以不同杆件厚度缠绕——仅靠改变缠绕道数来调定刚度。</span></p>

        <div class="build-log">
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Why</span><span class="lang-zh" lang="zh">起因</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">A space frame needs joints of many different stiffnesses. If each one demands its own geometry, the process is a series of one-offs and never becomes a <strong>product family</strong>.</span><span class="lang-zh" lang="zh">一个空间框架需要许多不同刚度的节点。如果每换一种刚度就得换一套几何，这套工艺就永远只是一堆一次性件，形不成<strong>产品族</strong>。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Snag</span><span class="lang-zh" lang="zh">卡点</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">The conventional lever is wall thickness or lay-up &mdash; and <strong>every change means new tooling</strong>. Tooling cost, not physics, would set how finely stiffness could be tuned.</span><span class="lang-zh" lang="zh">传统的调节手段是壁厚或铺层——而<strong>每改一次就要重开工装</strong>。这样一来，决定刚度能调多细的，就不是物理规律，而是工装成本。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Call</span><span class="lang-zh" lang="zh">取舍</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Freeze the geometry and make <strong>pass count the single stiffness variable</strong>. The joint is parameterised as a member layout that can be <em>selectively</em> reinforced &mdash; more passes only on the members that carry more load.</span><span class="lang-zh" lang="zh">把几何固定下来，让<strong>缠绕道数成为唯一的刚度设计变量</strong>。节点被参数化为一组可<em>选择性</em>加强的杆件布局——只在承载更大的杆件上多缠几道。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Proof</span><span class="lang-zh" lang="zh">验证</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">This whole family came off <strong>one unchanged set of tooling</strong> &mdash; same joint, different member thicknesses, stiffness dialled in by pass count alone. Stiffness became a number in the design file rather than a new mould.</span><span class="lang-zh" lang="zh">照片里这一整组样件出自<strong>同一副、零改动的工装</strong>——同一个节点、不同的杆件厚度，刚度仅由道数调定。刚度从此是设计文件里的一个数字，而不是一副新模具。</span></div>
            </div>
        </div>
    </div>
</div>

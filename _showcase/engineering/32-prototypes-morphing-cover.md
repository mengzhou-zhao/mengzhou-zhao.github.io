---
show: true
width: 4
date: 2026-04-01 00:01:00 +0800
group: Prototypes &amp; Iterations
images:
  - src: /assets/images/covers/morphing-wing-skin-single-print-bed.jpg
    alt: "The compliant morphing skin straight off the Bambu Lab build plate, the black aerofoil-section skin still sitting inside its printed white support cradle"
    caption: "Straight off the build plate. The black compliant skin closes into a full aerofoil section in a single print, still held in the white printed cradle that supported it during the build."
    caption_zh: "刚从打印床上下来。黑色柔性蒙皮在一次打印中闭合成完整的翼型剖面，此时仍卡在打印时用于支撑它的白色随形托架里。"
  - src: /assets/images/covers/morphing-wing-skin-single-print-held.jpg
    alt: "A gloved hand lifting the printed compliant skin clear of its support block, the thin black skin holding an open teardrop aerofoil loop"
    caption: "Lifted clear by hand. Nothing is fastened or bonded &mdash; the skin holds its aerofoil loop as one continuous printed piece, thin enough to flex yet closed enough to keep the section."
    caption_zh: "用手取下。全件无任何紧固与粘接——蒙皮以一个连续打印件的形态自持翼型闭环，既薄到可以弯曲，又能守住剖面形状。"
---
<div>
    <div class="p-3">
        <h5 class="card-title mb-1"><span class="lang-en" lang="en">Single-print compliant skin</span><span class="lang-zh" lang="zh">一次3D打印成型的柔性蒙皮</span></h5>
        <p class="card-text text-muted mb-0 small"><span class="lang-en" lang="en">A TPU compliant skin and a PETG rigid frame co-printed as one part &mdash; no fasteners, no bonding, no assembly.</span><span class="lang-zh" lang="zh">TPU 柔性蒙皮与 PETG 刚性框架共打印为一个整件——无紧固件、无粘接、无装配。</span></p>

        <div class="build-log">
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Why</span><span class="lang-zh" lang="zh">起因</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">A morphing cover has to be <strong>stiff, then compliant, then stiff again</strong> across one continuous surface. Conventionally that means a flexible skin bonded to rigid frames &mdash; and the <strong>glue line is the weakest, first-to-fatigue link</strong>.</span><span class="lang-zh" lang="zh">变形盖板要在同一张连续表面上做到<strong>刚—柔—刚</strong>。传统做法是把柔性蒙皮粘接到刚性框架上——而<strong>胶接线正是最薄弱、最先疲劳失效的一环</strong>。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Snag</span><span class="lang-zh" lang="zh">卡点</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Printing it as one piece trades one weak interface for another: an FDM part flexed repeatedly <strong>delaminates between layers</strong>. Removing the glue line is pointless if the layer lines fail instead.</span><span class="lang-zh" lang="zh">整体打印只是把一处薄弱界面换成了另一处：FDM 件反复弯折会<strong>层间分层</strong>。如果层线接着失效，去掉胶接线就毫无意义。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Call</span><span class="lang-zh" lang="zh">取舍</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Two decisions, one about material and one about <em>orientation</em>. Co-print TPU and PETG contiguously so load crosses a <strong>graded boundary rather than a glue line</strong>; then print the part <strong>standing on its edge</strong> so the layer lines run <em>along</em> the flexing direction instead of across it.</span><span class="lang-zh" lang="zh">两个决定，一个关于材料，一个关于<em>摆放方向</em>。让 TPU 与 PETG 连续共打印，使载荷跨越一条<strong>梯度界面而非胶接线</strong>；再把零件<strong>侧立打印</strong>，让层线<em>顺着</em>弯曲方向排布，而不是横穿它。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Proof</span><span class="lang-zh" lang="zh">验证</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">One part off the build plate reproduces the full stiff&ndash;compliant&ndash;stiff behaviour and takes <strong>repeated hand flexing into large chordwise curvature without delaminating</strong> &mdash; no fasteners, no bonding, no post-assembly, at prototype cost and lead time.</span><span class="lang-zh" lang="zh">从打印床上下来的<strong>单一零件</strong>即复现了完整的刚—柔—刚行为，并能<strong>反复手动弯折至大弦向曲率而不分层</strong>——无紧固件、无粘接、无后装配，且是样机级的成本与周期。</span></div>
            </div>
        </div>
    </div>
</div>

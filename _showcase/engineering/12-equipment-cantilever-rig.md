---
show: true
width: 4
date: 2026-06-01 00:01:00 +0800
group: Custom Test Equipment
images:
  - src: /assets/images/covers/wraptor-coaxial-joint-cantilever.png
    alt: "Cantilever bending test rig for the coaxial-joint truss structure"
  - src: /assets/images/covers/wraptor-coaxial-joint-threaded-rod-end.webp
    alt: "Threaded rod ends bonded into the truss members and overwound, giving the specimen a bolted interface to the rig"
    caption: "How the specimen meets the rig: a threaded rod is set into each member end and wound over, so the truss bolts into the fixture instead of being clamped on its composite surface."
    caption_zh: "试件与台架的接口：每根杆件端部埋入螺杆并缠绕包覆，使桁架以螺栓连接装入夹具，而不是直接夹持在复合材料表面上。"
  - src: /assets/images/covers/wraptor-coaxial-joint-eccentricity.webp
    alt: "Idealised truss centrelines overlaid on a real coaxial joint, showing the members do not intersect at a single point"
    caption: "Idealised centrelines laid over the real joint: the members do not meet at one point. That offset is a local moment the pin-jointed idealisation does not contain &mdash; which is why the joint gets measured rather than assumed."
    caption_zh: "把理想桁架轴线叠在真实节点上：各杆件并不交于一点。这段偏心意味着一个局部弯矩，而铰接理想化模型并不包含它——这正是节点需要实测、而非假设的原因。"
---
<div>
    <div class="p-3">
        <h5 class="card-title mb-1"><span class="lang-en" lang="en">Coaxial-joint cantilever rig</span><span class="lang-zh" lang="zh">同轴节点悬臂试验台</span></h5>
        <p class="card-text text-muted mb-0 small"><span class="lang-en" lang="en">Cantilever bending rig whose fixture rigidity I verified with a 0.05&deg; inclinometer that held a zero reading under nearly double the test load.</span><span class="lang-zh" lang="zh">悬臂弯曲台架；夹具刚性用 0.05&deg; 倾角仪验证——在近乎两倍试验载荷下读数保持为零。</span></p>

        <div class="build-log">
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Why</span><span class="lang-zh" lang="zh">起因</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">This dataset had one job: decide whether the matrix-structural-analysis model could be <strong>trusted as a design tool</strong>. A validation test is only worth running if the measurement is clean.</span><span class="lang-zh" lang="zh">这批数据只有一个任务：判定矩阵结构分析（MSA）模型能否<strong>被当作设计工具来信任</strong>。而验证试验只有在测量足够干净时才值得做。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Snag</span><span class="lang-zh" lang="zh">卡点</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">On a cantilever, a mere <strong>fraction of a degree of root rotation</strong> is amplified along the span into a large tip deflection &mdash; and it would be indistinguishable from genuine structural compliance. The model would then be validated against the fixture.</span><span class="lang-zh" lang="zh">在悬臂结构上，根部哪怕<strong>零点几度的转动</strong>，沿跨度放大后都会变成可观的端部挠度——而且它与结构本身的柔度<strong>无法区分</strong>。那样验证的就不是模型，而是夹具。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Call</span><span class="lang-zh" lang="zh">取舍</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Make the fixture's rigidity <strong>an evidenced claim, not an assumption</strong>: a 6061-T6 aluminium bracket with bonded-in stainless threaded-rod inserts, then a 0.05&deg; inclinometer at the root under an <strong>80&nbsp;N</strong> check load &mdash; nearly double the 44&nbsp;N test load. Deflection read by LVDT at six stations, three readings averaged each to suppress noise.</span><span class="lang-zh" lang="zh">把夹具刚性<strong>从"假设"变成"有证据的结论"</strong>：6061-T6 铝支架配粘接不锈钢螺杆嵌件，再用 0.05&deg; 倾角仪在<strong>80&nbsp;N</strong> 校核载荷（近乎 44&nbsp;N 试验载荷的两倍）下监测根部。挠度由 LVDT 沿跨度六个测点读取，每点取三次读数平均以抑制噪声。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Proof</span><span class="lang-zh" lang="zh">验证</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Inclinometer held <strong>zero</strong> at the check load, so the deflection was the structure's. Measured shapes then matched MSA to within <strong>4.5%</strong> at max load (4.3% average) &mdash; the model earned its place as a design tool.</span><span class="lang-zh" lang="zh">倾角仪在校核载荷下读数保持<strong>为零</strong>，说明测到的挠度确属结构本身。实测挠曲形状在最大载荷下与 MSA 偏差在 <strong>4.5%</strong> 以内（平均 4.3%）——模型由此坐实为可用的设计工具。</span></div>
            </div>
        </div>
    </div>
</div>

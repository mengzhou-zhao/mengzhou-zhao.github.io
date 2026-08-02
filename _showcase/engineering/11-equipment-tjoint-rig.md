---
show: true
width: 6
date: 2026-06-02 00:01:00 +0800
group: Custom Test Equipment
---
<div>
    <img data-src="{{ 'assets/images/covers/wraptor-tjoint-test-rig-render.png' | relative_url }}"
         class="lazy w-100 rounded-xl"
         src="{{ '/assets/images/empty_300x200.png' | relative_url }}"
         alt="CAD design of the two-part cantilever rig for combined bending-torsion testing of a T-joint substructure">
    <div class="p-3">
        <h5 class="card-title mb-1"><span class="lang-en" lang="en">Bending&ndash;torsion T-joint rig</span><span class="lang-zh" lang="zh">弯扭复合 T 形节点台架</span></h5>
        <p class="card-text text-muted mb-0 small"><span class="lang-en" lang="en">A two-part cantilever rig around an INSTRON: a stiff main mount plus a separate unloaded reference frame that measures and subtracts the rig's own deflection (just 2.3% of signal).</span><span class="lang-zh" lang="zh">围绕 INSTRON 的两段式悬臂台架：刚性主安装座，加一个独立不承载的参考框架，测量并扣除台架自身变形（仅占信号 2.3%）。</span></p>

        <div class="build-log">
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Why</span><span class="lang-zh" lang="zh">起因</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">A T-jointed substructure sees <strong>bending and torsion at once</strong> in service, but an INSTRON gives only one axis of travel. The load path had to be created by the rig, not by the machine.</span><span class="lang-zh" lang="zh">T 形节点子结构在使用中承受的是<strong>弯扭复合</strong>载荷，而 INSTRON 只能提供单轴行程。载荷路径必须由台架、而非试验机来构造。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Snag</span><span class="lang-zh" lang="zh">卡点</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Any cantilever rig deflects too. Its compliance sits inside every reading and &mdash; worse &mdash; I had <strong>no idea how much of the signal it was</strong>. "Stiff enough" is not a measurement.</span><span class="lang-zh" lang="zh">悬臂台架自身也会变形，这份柔度混在每一次读数里；更糟的是我<strong>并不知道它占了信号的多少</strong>。"够刚"不是一个测量结果。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Call</span><span class="lang-zh" lang="zh">取舍</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Rather than chase an infinitely rigid frame, <strong>measure the rig instead of trusting it</strong>: a bolted aluminium-extrusion primary mount, plus a completely unloaded reference frame carrying four LVDTs that record the rig's own deflection so it can be subtracted point by point. Load applied off-centre on the middle beam to induce the combined state.</span><span class="lang-zh" lang="zh">与其去追求一个无限刚性的框架，不如<strong>把台架测出来，而不是相信它</strong>：螺栓连接铝型材主安装座，外加一个完全不承载的参考框架，其上四只 LVDT 专门记录台架自身变形，逐点扣除。载荷偏心施加于中间梁，以引入弯扭复合状态。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Proof</span><span class="lang-zh" lang="zh">验证</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Rig compliance turned out to be <strong>2.3% of the signal</strong> &mdash; now a known, subtracted quantity rather than an assumption. Four repeated runs averaged.</span><span class="lang-zh" lang="zh">台架柔度实测<strong>仅占信号 2.3%</strong>——它从此是一个已知并被扣除的量，而不是一个假设。取四次重复试验的平均值。</span></div>
            </div>
        </div>
    </div>
</div>

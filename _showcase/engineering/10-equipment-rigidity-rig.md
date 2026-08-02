---
show: true
width: 4
date: 2026-06-03 00:01:00 +0800
group: Custom Test Equipment
images:
  - src: /assets/images/covers/avian-morphing-rigidity-test-rig.jpg
    alt: "Custom-built cantilever rig for testing the morphing-wing skeleton across its range of extension"
  - src: /assets/images/covers/avian-morphing-rigidity-rig-setup.jpg
    alt: "A wound composite truss member mounted as a cantilever between a root fixture and the load cell, with the test machine's force and stroke readout alongside"
    caption: "The rig mid-test: the member is clamped at the root on the feed stage and loaded at the tip through the load cell, with force and stroke read off together."
    caption_zh: "试验进行中：杆件根部夹持在进给台上，翼尖经测力传感器加载，力与位移同步读取。"
  - src: /assets/images/covers/avian-morphing-rigidity-universal-joint.jpg
    alt: "Load cell coupled to the wound truss member through a universal joint and threaded rod"
    caption: "The universal joint at the loading point: the coupling passes vertical force and nothing else, so no parasitic moment reaches the structure."
    caption_zh: "加载点的万向节：该连接只传递竖向力，不传递弯矩，使附加力矩无法进入结构。"
---
<div>
    <div class="p-3">
        <h5 class="card-title mb-1"><span class="lang-en" lang="en">Morphing-wing rigidity rig</span><span class="lang-zh" lang="zh">变形机翼刚度试验台</span></h5>
        <p class="card-text text-muted mb-0 small"><span class="lang-en" lang="en">Aluminium-extrusion frame with a milling-machine-style feed stage for fine wing-tip positioning, loaded through a universal joint so only a clean vertical force reaches the structure.</span><span class="lang-zh" lang="zh">铝型材框架配铣床式进给台，实现翼尖精细定位；经万向节加载，使结构只承受纯净的竖向力。</span></p>

        <div class="build-log">
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Why</span><span class="lang-zh" lang="zh">起因</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">A morphing wing has a different stiffness at every extension, so one number is meaningless. I needed to load the <strong>same tip point</strong> repeatably at <strong>any</strong> configuration &mdash; no such rig existed.</span><span class="lang-zh" lang="zh">变形机翼在每个展开状态下刚度都不同，一个数字毫无意义。我需要在<strong>任意构型</strong>下都能可重复地加载<strong>同一个翼尖点</strong>——没有现成设备做得到。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Snag</span><span class="lang-zh" lang="zh">卡点</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">The linkage and actuator carry mechanical clearance, so backlash and true elastic response arrive <strong>mixed into the same curve</strong>. Fitting it raw underestimates the stiffness.</span><span class="lang-zh" lang="zh">连杆与作动器本身有机械间隙，间隙回差和真实弹性响应<strong>混在同一条曲线里</strong>。直接拟合会把刚度算低。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Call</span><span class="lang-zh" lang="zh">取舍</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Fix what hardware can fix, solve the rest in software: a milling-machine feed stage for tip positioning, a universal joint so no parasitic moment enters the structure &mdash; then a stiffness-extraction routine to separate backlash from elasticity before any fit.</span><span class="lang-zh" lang="zh">硬件能解决的用硬件，剩下的交给算法：铣床式进给台做翼尖定位，万向节加载杜绝附加弯矩进入结构——再写一套刚度提取算法，在拟合前把间隙段与弹性段分开。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Proof</span><span class="lang-zh" lang="zh">验证</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">The extracted stiffnesses revealed a consistent <strong>specific-stiffness minimum set by linkage geometry, not material</strong> &mdash; independently corroborated by a Jacobian / virtual-joint stiffness mapping.</span><span class="lang-zh" lang="zh">提取出的刚度揭示了一个稳定存在的<strong>比刚度极小值，且由连杆几何而非材料决定</strong>——并由雅可比／虚拟关节刚度映射从解析上独立印证。</span></div>
            </div>
        </div>
    </div>
</div>

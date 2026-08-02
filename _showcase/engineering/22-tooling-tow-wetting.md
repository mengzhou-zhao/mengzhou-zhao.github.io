---
show: true
width: 4
date: 2026-05-01 00:01:00 +0800
group: Tooling &amp; 3D-Printed Parts
images:
  - src: /assets/images/covers/wraptor-tjoint-winding-new.jpg
    alt: "Guided tow-wetting system with a tow wheel, PTFE guide tube and ceramic eyelet during T-joint winding"
  - src: /assets/images/covers/wraptor-tjoint-winder-axes.webp
    alt: "The T-joint winder: an aluminium-extrusion frame with a stepper-driven rotating mandrel and X and Y carriages, the tow-wetting head riding on the Y axis"
    caption: "Where the wetting head has to work: it rides on the X&ndash;Y carriage while the mandrel turns under it, so the tow is being paid out from a platform that is itself moving on three axes &mdash; which is why guiding the fibre, rather than dipping it, is what makes the process repeatable."
    caption_zh: "浸润头的工作环境：它装在 X&ndash;Y 滑台上，而芯轴在其下方旋转——纤维是从一个自身正在三轴运动的平台上放出来的。这正是为什么让纤维走导轨、而不是过树脂槽，才能让工艺可复现。"
  - src: /assets/images/covers/wraptor-tjoint-prebulking.jpg
    alt: "Close-up of wound bracing members with straight red reference lines drawn between the nodes, arrows marking where the tow sits off the straight path"
    caption: "The red lines are the straight path between nodes; the arrows mark where the tow actually sits. A bowed tow is not carrying load along the line the design assumed &mdash; which is what the guiding and tensioning have to fix."
    caption_zh: "红线是节点之间的理想直线路径，箭头指出纤维束的实际位置。走弯了的纤维，并没有沿着设计假定的那条线传力——这正是导向与张力控制要解决的问题。"
---
<div>
    <div class="p-3">
        <h5 class="card-title mb-1"><span class="lang-en" lang="en">Guided tow-wetting system</span><span class="lang-zh" lang="zh">导向式纤维浸润系统</span></h5>
        <p class="card-text text-muted mb-0 small"><span class="lang-en" lang="en">A tow wheel, a 0.5&nbsp;mm PTFE tube and a ceramic eyelet that replaced a hand-held resin bath &mdash; and more than doubled the fibre content of the part.</span><span class="lang-zh" lang="zh">导轮 + 0.5&nbsp;mm PTFE 导管 + 陶瓷导丝眼，取代手持树脂槽——使零件的纤维含量翻倍有余。</span></p>

        <div class="build-log">
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Why</span><span class="lang-zh" lang="zh">起因</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Branching T-joints demanded finer <strong>3k (200&nbsp;tex)</strong> tow. The hand-held resin bath that had been fine on coarse tow suddenly was not: how much resin the tow carried depended entirely on <strong>the feel of my hand</strong>.</span><span class="lang-zh" lang="zh">分叉的 T 形节点要求使用更细的 <strong>3k（200&nbsp;tex）</strong>纤维束。原本在粗束上够用的手持树脂槽突然不行了：纤维束究竟带走多少树脂，完全取决于<strong>我的手感</strong>。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Snag</span><span class="lang-zh" lang="zh">卡点</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">The result was the <strong>"tow-catching" defect</strong> &mdash; visible on the part surface &mdash; along with low fibre content and resin-rich voids. Worse than the defect itself: the process was <strong>not reproducible</strong>, so no downstream number could be trusted.</span><span class="lang-zh" lang="zh">结果就是<strong>"捕束"缺陷</strong>——它直接写在零件表面上——伴随纤维含量偏低与富树脂空隙。比缺陷本身更糟的是：这道工序<strong>不可复现</strong>，于是后续任何数据都不可信。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Call</span><span class="lang-zh" lang="zh">取舍</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">I did not try to get better at it by hand. I moved the variable <strong>out of the operator and into geometry</strong>: a tow wheel to set tension, a precision <strong>0.5&nbsp;mm PTFE tube</strong> that meters how much resin can travel with the tow, and a ceramic eyelet defining the exit. Wetting stops being a skill and becomes a dimension.</span><span class="lang-zh" lang="zh">我没有选择"多练几次把手感练出来"，而是把这个变量<strong>从操作者身上搬到几何上</strong>：导轮定张力，精密 <strong>0.5&nbsp;mm PTFE 导管</strong>计量纤维束能带走多少树脂，陶瓷导丝眼定义出口。浸润量从此不再是一门手艺，而是一个尺寸。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Proof</span><span class="lang-zh" lang="zh">验证</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Thermogravimetric analysis on wound samples, old process vs. new: fibre volume fraction <strong>22.53% &rarr; 46.34% (+105.6%)</strong>, with more uniform fibre alignment and fewer resin-rich voids.</span><span class="lang-zh" lang="zh">对缠绕试样做热重分析（TGA），新旧工艺对比：纤维体积分数 <strong>22.53% &rarr; 46.34%（+105.6%）</strong>，且纤维排布更均匀、富树脂空隙更少。</span></div>
            </div>
        </div>
    </div>
</div>

---
show: true
width: 4
date: 2026-03-02 00:01:00 +0800
group: Failures &amp; Lessons
images:
  - src: /assets/images/covers/wraptor-tjoint-fe-comparison.png
    alt: "Load-displacement curve showing the experiment softening earlier than the defect-free FE prediction"
---
<div>
    <div class="p-3">
        <h5 class="card-title mb-1"><span class="lang-en" lang="en">When the part softened early</span><span class="lang-zh" lang="zh">结构提前软化时</span></h5>
        <p class="card-text text-muted mb-0 small"><span class="lang-en" lang="en">The structure was less stiff than predicted. I traced it to a manufacturing-induced pre-buckle &mdash; and modelling that defect made the FE finally match reality.</span><span class="lang-zh" lang="zh">结构比预测更软。我把原因追溯到制造引入的杆件预屈曲——把该缺陷纳入模型后，有限元终于与现实吻合。</span></p>

        <div class="build-log">
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">What</span><span class="lang-zh" lang="zh">现象</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">The T-joint substructure softened earlier than the finite-element model said it should. The defect-free FE was <strong>overestimating stiffness by roughly a third</strong>.</span><span class="lang-zh" lang="zh">T 形节点子结构比有限元预测更早软化。无缺陷的有限元模型<strong>把刚度高估了约三分之一</strong>。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Temptation</span><span class="lang-zh" lang="zh">诱惑</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">The cheap fix was to tune the material moduli down until the curves lay on top of each other. It would have looked like agreement &mdash; and it would have <strong>destroyed the model's ability to predict any other configuration</strong>. A calibrated fudge is not a validated model.</span><span class="lang-zh" lang="zh">最省事的做法是把材料模量往下调，直到两条曲线重合。那看上去像"吻合"——但也会<strong>彻底毁掉这个模型预测其他构型的能力</strong>。凑出来的标定不是被验证的模型。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Call</span><span class="lang-zh" lang="zh">取舍</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Go back to the hardware and find the physical cause. Close inspection traced the softening to <strong>slightly pre-buckled members</strong>, caused by an unforeseen <strong>winding-mandrel interference</strong>. That defect then went explicitly into the FE &mdash; as geometry, not as a fitted coefficient.</span><span class="lang-zh" lang="zh">回到实物上去找物理原因。仔细排查后，把提前软化追溯到<strong>杆件的轻微预屈曲</strong>，其成因是一处未预料到的<strong>缠绕芯轴干涉</strong>。随后把这个缺陷<strong>显式</strong>建进有限元——作为几何，而不是作为一个拟合系数。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Lesson</span><span class="lang-zh" lang="zh">教训</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">The models with and without the defect now <strong>bracket the measured response</strong> &mdash; the tool is validated, and the disagreement turned into knowledge instead of a fudge factor. <strong>A prediction is only realistic when the manufacturing defects are modelled too.</strong></span><span class="lang-zh" lang="zh">含缺陷与不含缺陷的两个模型如今<strong>恰好把实测响应上下包络住</strong>——工具得到验证，而那次"对不上"也变成了知识，而不是一个凑数因子。<strong>预测要真实，就必须把制造缺陷一起建进模型。</strong></span></div>
            </div>
        </div>
    </div>
</div>

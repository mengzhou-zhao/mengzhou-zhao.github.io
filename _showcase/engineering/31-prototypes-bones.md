---
show: true
width: 4
date: 2026-04-02 00:01:00 +0800
group: Prototypes &amp; Iterations
images:
  - src: /assets/images/covers/avian-morphing-wound-humerus-bones.jpg
    alt: "Four filament-wound humerus bone specimens at increasing reinforcement levels"
  - src: /assets/images/covers/avian-morphing-bones-specimen-set.jpg
    alt: "Wound truss bone specimens laid out in pairs, each pair at a different winding pass count, with joint ends wound into the members"
    caption: "The specimen set. Only the pass count changes from pair to pair &mdash; the joint ends are wound into the member rather than bonded on afterwards, so reinforcement level is the one variable being swept."
    caption_zh: "试样全家福。各组之间唯一改变的是缠绕道数——关节端是随杆件一起缠绕成型、而非事后粘接，因此被扫掠的变量只有加强等级这一个。"
  - src: /assets/images/covers/avian-morphing-bones-deposited-mass.jpg
    alt: "A pair of wound truss bones weighed on a digital balance reading 12.38 grams"
    caption: "Each set goes on the balance. Weighing every specimen is where the linear mass-versus-pass-count relation comes from &mdash; it is measured, not inferred from the winding program."
    caption_zh: "每一组都要上天平。质量与道数的线性关系正是这样一件件称出来的——它是实测结果，而不是从缠绕程序推算出来的。"
---
<div>
    <div class="p-3">
        <h5 class="card-title mb-1"><span class="lang-en" lang="en">Wound &ldquo;bones&rdquo;, 1&ndash;4&times; passes</span><span class="lang-zh" lang="zh">缠绕成型的&ldquo;骨骼&rdquo;（1&ndash;4&times; 道数）</span></h5>
        <p class="card-text text-muted mb-0 small"><span class="lang-en" lang="en">Filament-wound humerus specimens at four reinforcement levels; deposited mass scales linearly with pass count (R&sup2;&nbsp;=&nbsp;0.997).</span><span class="lang-zh" lang="zh">四种加强等级的肱骨试样；沉积质量随缠绕道数线性增加（R&sup2;&nbsp;=&nbsp;0.997）。</span></p>

        <div class="build-log">
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Why</span><span class="lang-zh" lang="zh">起因</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">The skeleton's stiffness is meant to be tailored <strong>bone by bone</strong> through pass count. That only works if "one more pass" adds a <strong>predictable</strong> amount of material &mdash; otherwise the design variable is fiction.</span><span class="lang-zh" lang="zh">骨架的刚度本应<strong>逐根"骨骼"</strong>通过缠绕道数来定制。可这只有在"多缠一道"能带来<strong>可预测</strong>的材料增量时才成立——否则这个设计变量就是虚构的。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Snag</span><span class="lang-zh" lang="zh">卡点</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">These are <strong>hand-wound</strong> parts. Consistency is the first thing anyone doubts about a hand process &mdash; and rightly so. A claim of controllability needs evidence, not confidence.</span><span class="lang-zh" lang="zh">这些是<strong>手工缠绕</strong>的零件。一致性正是任何人对手工工艺最先质疑的地方——这个质疑也是合理的。"工艺可控"这句话需要证据，而不是自信。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Call</span><span class="lang-zh" lang="zh">取舍</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Rather than argue about it, <strong>make the process characterise itself</strong>: wind a deliberate series of humerus specimens at <strong>1, 2, 3 and 4 passes</strong>, weigh every one, and treat the pass-count&ndash;mass relationship as the direct measure of process control.</span><span class="lang-zh" lang="zh">与其争论，不如<strong>让工艺自己给出表征</strong>：刻意缠出 <strong>1、2、3、4 道</strong>的一系列肱骨试样，逐件称重，把"道数—质量"关系当作工艺可控性的直接度量。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Proof</span><span class="lang-zh" lang="zh">验证</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Deposited mass scales <strong>linearly with pass count, R&sup2;&nbsp;=&nbsp;0.997</strong>. Pass count is now a legitimate, quantified design variable &mdash; and it is what the later optimisation is allowed to act on.</span><span class="lang-zh" lang="zh">沉积质量随道数<strong>线性增加，R&sup2;&nbsp;=&nbsp;0.997</strong>。缠绕道数由此成为一个正当且已被量化的设计变量——也正是后续优化被允许去调的那个量。</span></div>
            </div>
        </div>
    </div>
</div>

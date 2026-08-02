---
show: true
width: 4
date: 2026-03-01 00:01:00 +0800
group: Failures &amp; Lessons
images:
  - src: /assets/images/covers/avian-morphing-failure-humerus-joint.png
    alt: "Failure of an optimised skeleton configuration localising at the humerus-bearing interface"
---
<div>
    <div class="p-3">
        <h5 class="card-title mb-1"><span class="lang-en" lang="en">Where it breaks</span><span class="lang-zh" lang="zh">它会从哪里断</span></h5>
        <p class="card-text text-muted mb-0 small"><span class="lang-en" lang="en">Failure consistently localises at the humerus&ndash;bearing joint. Knowing exactly where the weakest interface is tells the next design where to spend material.</span><span class="lang-zh" lang="zh">失效始终局部化于肱骨&ndash;轴承关节。清楚最薄弱界面在哪，就知道下一版设计该把材料用在何处。</span></p>

        <div class="build-log">
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Why</span><span class="lang-zh" lang="zh">起因</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Reinforcement without a known failure location is guesswork. Before spending a single gram, I wanted to know <strong>which interface goes first</strong>.</span><span class="lang-zh" lang="zh">不知道从哪里先坏就去加强，只是在猜。在花掉哪怕一克材料之前，我要先知道<strong>哪个界面会先失效</strong>。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Snag</span><span class="lang-zh" lang="zh">卡点</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">A morphing skeleton has no single worst case. Its stiffness changes right across the range of extension, so the dangerous configuration is <strong>not</strong> full extension &mdash; it is wherever specific stiffness bottoms out.</span><span class="lang-zh" lang="zh">变形骨架没有唯一的最危险工况。它的刚度沿整个展开范围变化，因此最危险的构型<strong>并不是</strong>完全展开——而是比刚度落到谷底的那一处。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Call</span><span class="lang-zh" lang="zh">取舍</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Use the rigidity campaign to <em>locate</em> that minimum-stiffness configuration first, then run the failure tests <strong>there</strong> &mdash; and repeat across several reinforcement schemes so the result is a pattern, not one broken part.</span><span class="lang-zh" lang="zh">先用刚度试验把那个<em>比刚度极小值构型</em>找出来，再<strong>专门在该构型下</strong>做失效试验；并对多种加强方案重复，使结论是一种规律，而不是一件断掉的样件。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Lesson</span><span class="lang-zh" lang="zh">教训</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Failure localised <strong>consistently at the humerus&ndash;bearing joint</strong>, whatever the reinforcement. That makes the interface &mdash; not the bones &mdash; the limiting feature, and tells the next design exactly where the material should go. <strong>A known failure location is a design input, not a defeat.</strong></span><span class="lang-zh" lang="zh">无论采用哪种加强方案，失效都<strong>稳定地局部化在肱骨&ndash;轴承关节界面</strong>。这说明限制强重比的是那个界面、而不是"骨骼"本身，也就明确告诉下一版设计该把材料花在哪里。<strong>一个已知的失效位置是设计输入，而不是一次失败。</strong></span></div>
            </div>
        </div>
    </div>
</div>

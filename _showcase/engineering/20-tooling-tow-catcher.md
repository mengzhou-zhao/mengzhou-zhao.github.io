---
show: true
width: 6
date: 2026-05-03 00:01:00 +0800
group: Tooling &amp; 3D-Printed Parts
---
<div>
    <img data-src="{{ 'assets/images/covers/wraptor-coaxial-joint-tow-catcher.png' | relative_url }}"
         class="lazy w-100 rounded-xl"
         src="{{ '/assets/images/empty_300x200.png' | relative_url }}"
         alt="3D-printed two-armed tow catcher gripping carbon tow against the joint tubes">
    <div class="p-3">
        <h5 class="card-title mb-1"><span class="lang-en" lang="en">3D-printed &ldquo;tow catcher&rdquo;</span><span class="lang-zh" lang="zh">3D 打印&ldquo;捕束器&rdquo;</span></h5>
        <p class="card-text text-muted mb-0 small"><span class="lang-en" lang="en">The small part that made the whole process work: a two-armed anchor that grips carbon tow through sharp direction changes and presses it flat to maximise bond area.</span><span class="lang-zh" lang="zh">让整套工艺得以成立的小零件：双臂锚定件，在纤维束急转向时将其抓住并压平贴合，以最大化粘接面积。</span></p>

        <div class="build-log">
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Why</span><span class="lang-zh" lang="zh">起因</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Winding a flat beam needs only simple turning posts. Winding a <strong>3D joint</strong> asks the tow to turn through large angles in space &mdash; the posts stopped working, and with them the whole idea of a one-piece wound joint.</span><span class="lang-zh" lang="zh">缠绕平面梁只需要简单的转向柱。而缠绕一个<strong>三维节点</strong>，纤维束要在空间中大角度转向——转向柱失效了，"整体一次缠绕成型的节点"这个想法也就跟着卡死。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Snag</span><span class="lang-zh" lang="zh">卡点</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">At a sharp turn the tow <strong>lifts off the tube</strong> and bridges the corner. Bond area collapses, and the joint is then held together by resin alone &mdash; exactly the failure mode I did not want to design in.</span><span class="lang-zh" lang="zh">在急转向处，纤维束会<strong>离开管壁</strong>、把弯角"架空"。粘接面积随之崩塌，节点最后只能靠树脂维系——这恰恰是我最不想设计进去的失效模式。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Call</span><span class="lang-zh" lang="zh">取舍</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">Stop treating the corner as a <em>turning</em> problem and treat it as a <em>clamping</em> problem. A two-armed anchor, printed and mounted <strong>concentric to each joint tube</strong>, catches the tow at the turn and presses it flat against the tube wall &mdash; direction change and bond area solved by the same feature.</span><span class="lang-zh" lang="zh">不再把弯角当作"<em>转向</em>问题"，而当作"<em>压紧</em>问题"。一个双臂锚定件，打印后与<strong>每根节点管同心安装</strong>，在转向处接住纤维束并把它压平贴合管壁——转向与粘接面积由同一个特征一并解决。</span></div>
            </div>
            <div class="build-log-row">
                <div class="build-log-key"><span class="lang-en" lang="en">Proof</span><span class="lang-zh" lang="zh">验证</span></div>
                <div class="build-log-val"><span class="lang-en" lang="en">The first working coaxial joint came off the mandrel in <strong>a single continuous wind</strong>: <strong>17.85&nbsp;g</strong> total (3.12&nbsp;g tubes + 14.73&nbsp;g wound lattice), no metal, no secondary assembly. The same part is later re-used as a co-cured pivot axle in the morphing skeleton.</span><span class="lang-zh" lang="zh">第一个可用的同轴节点<strong>在一次连续缠绕中</strong>下线：总重 <strong>17.85&nbsp;g</strong>（节点管 3.12&nbsp;g + 缠绕格构 14.73&nbsp;g），无金属、无二次装配。同一个零件后来在变形骨架中被复用为共固化的转动轴。</span></div>
            </div>
        </div>
    </div>
</div>

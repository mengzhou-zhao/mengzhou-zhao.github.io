'use strict';
// Curated prototype copy, grounded in _data/profile.yml and the project files.
// No new performance claims or publication statuses are introduced here.
const copy = {
  zh: {
    navWork:'项目',navApproach:'工作方式',navAbout:'关于我',role:'结构与材料研究',
    heroTitle:'让轻量化的想法，<br>成为<em>真实的结构。</em>',
    heroIntro:'我是赵梦舟，在布里斯托大学从事轻量化结构研究。从几何与材料出发，走过算法、制造与测试，把设计带到现实里。',
    explore:'探索我的项目',cv:'查看简历',objectTitle:'像鸟翼一样，重新思考结构。',bridge:'更轻、更强，也真正造得出来。',
    workTitle:'从一个问题，到一件实物。',workNote:'几何、材料与制造的交汇处，是我工作的起点。点击卡片，看看它们如何发生。',
    filterAll:'全部项目',filterStructures:'变形结构',filterComputation:'计算设计',filterManufacturing:'制造工艺',filterTesting:'实验验证',openCase:'打开项目故事',pause:'暂停轮播',play:'播放轮播',
    approachTitle:'设计不是终点。验证才是。',approachNote:'把整个工程闭环走完，也把重复的步骤变成可以复用的流程。',
    step0:'计算与设计',step1:'制造与实现',step2:'测试与反馈',
    name:'赵梦舟',personRole:'航空航天工程博士 · 研究员（博士后）',
    aboutText:'我的工作横跨结构力学、复合材料工艺与机构设计。面向先进飞行器与智能机器人，我关心的不只是纸面上的最优解，还有它如何被制造、装配与验证。',
    phd:'航空航天工程博士 · 布里斯托大学',meng:'机械工程硕士（MEng）· 布里斯托大学',
    paperTitle:'连续纤维，连接更复杂的结构。',paperDescription:'WrapToR 同轴复合材料桁架节点：从制造概念到分析与实验验证。',readPaper:'阅读开放获取论文 ↗',
    contactTitle:'让下一个想法，走向现实。',previous:'← 上一步',next:'下一步 →',done:'完成 ✓',caseLabel:'项目故事',count:'个项目',
    steps:[
      {title:'让复杂几何变成可计算的问题。',text:'把几何、材料与制造约束放进同一个设计流程，用参数化建模和算法减少重复工作，保留关键的工程判断。',labels:['几何与需求','计算与规划','可制造模型'],symbols:['∿','⌘','◇']},
      {title:'从模型，走到工作台。',text:'设计工装、搭建设备，把连续纤维缠绕和多材料打印变成可执行的制造路线。制造过程本身，也是设计的一部分。',labels:['工装与设备','材料与工艺','实物样件'],symbols:['⊞','≋','△']},
      {title:'让物理试验回答关键问题。',text:'通过自建与调试的测试台架检验结构响应，将实测结果与分析对照，再把发现带回下一轮设计。',labels:['加载与测量','对照分析','迭代设计'],symbols:['↓','⌁','↺']}
    ]
  },
  en: {
    navWork:'Work',navApproach:'Approach',navAbout:'About',role:'STRUCTURES & MATERIALS',
    heroTitle:'Lighter ideas.<br><em>Real structures.</em>',
    heroIntro:'I’m Mengzhou, a researcher at the University of Bristol. I bring geometry and materials together through computation, manufacturing and physical testing.',
    explore:'Explore my work',cv:'View CV (中文)',objectTitle:'Rethinking structure, inspired by flight.',bridge:'Lighter. Stronger. Built to be made.',
    workTitle:'From a question to something real.',workNote:'My work starts where geometry, materials and manufacturing meet. Open a card to explore the story.',
    filterAll:'All projects',filterStructures:'Morphing structures',filterComputation:'Computational design',filterManufacturing:'Manufacturing',filterTesting:'Testing',openCase:'Explore the project',pause:'Pause',play:'Play',
    approachTitle:'Designed. Built. Put to the test.',approachNote:'An end-to-end engineering loop, with repeatable workflows along the way.',
    step0:'Compute & design',step1:'Make & assemble',step2:'Test & refine',
    name:'Mengzhou Zhao',personRole:'PhD in Aerospace Engineering · Research Associate',
    aboutText:'I work across structural mechanics, composite manufacturing and mechanism design. For advanced aircraft and intelligent robotics, I care about how a structure is made, assembled and validated as much as how it performs on paper.',
    phd:'PhD, Aerospace Engineering · Bristol',meng:'MEng, Mechanical Engineering · Bristol',
    paperTitle:'Continuous fibres. Connected structures.',paperDescription:'WrapToR coaxial composite truss joints: from manufacturing concept to analysis and experimental demonstration.',readPaper:'Read the open-access paper ↗',
    contactTitle:'Bring the next idea into the world.',previous:'← Previous',next:'Next →',done:'Done ✓',caseLabel:'PROJECT STORY',count:'projects',
    steps:[
      {title:'Make complex geometry computable.',text:'Bring geometry, materials and manufacturing constraints into one workflow. Parametric modelling and algorithms handle repetition, while engineering judgement guides the decisions.',labels:['Geometry & needs','Compute & plan','Buildable model'],symbols:['∿','⌘','◇']},
      {title:'From the model to the workbench.',text:'Design the tooling, build the equipment and turn continuous filament winding and multi-material printing into practical manufacturing routes. The process is part of the design.',labels:['Tooling','Materials & process','Physical part'],symbols:['⊞','≋','△']},
      {title:'Let physical tests answer the question.',text:'Build and commission rigs, measure structural response and compare it with analysis. Feed what the experiment reveals into the next design iteration.',labels:['Load & measure','Compare','Iterate'],symbols:['↓','⌁','↺']}
    ]
  }
};
const projects = [
  {
    id:'skin',category:'structures',year:'2026',image:'morphing-wing-cover-tpu-petg-flex.jpg',
    zh:{type:'多材料打印 / 变形结构',title:'在同一块蒙皮里，<br>安排好刚与柔。',description:'把柔顺蒙皮与刚性框架放进同一次打印，让结构跟随机翼改变形态。',tag:'隐式建模 · TPU / PETG-CF',titlePlain:'一次打印成型的变形机翼蒙皮',slides:[
      ['问题','既要变形，也要承载。','变形机翼蒙皮需要沿弦向柔顺，同时抵抗面外气动载荷。两种要求作用在同一层结构上，需要通过几何与材料共同协调。','morphing-wing-cover-tpu-petg-flex.jpg','实物演示：柔性 TPU 区域在刚性端部之间弯曲。','手动弯曲照片展示变形能力，不代表完整的气动或疲劳验证。'],
      ['方法','先设计材料如何分工。','通过隐式建模，在双曲率机翼曲面上生成随形胞元核心和多材料结构。零泊松比核心的设计目标是减少弦向变形引起的展向收缩；TPU 与 PETG-CF 分别承担柔顺和框架功能。','morphing-wing-cover-tpu-petg-printed.jpg','打印实物：TPU 柔性蒙皮与 PETG-CF 框架一次成型。','我的贡献：从曲面到可打印结构的数字化几何生成流程。'],
      ['实现','把制造，也写进设计里。','按现有项目记录，模型可直接用于无需支撑的一次打印，减少粘接与后装配。后续样件尝试两种硬度的 TPU 与 TPU-GF，将不同的材料性能分配到结构需要的位置。','morphing-wing-cover-tri-material-print.jpg','后续探索：三个耗材在同一次打印中分区使用。','下一步材料方向：探索以 TPU-GF 替代 PETG-CF 刚性框架。']
    ]},
    en:{type:'MULTI-MATERIAL PRINTING / MORPHING',title:'Stiff where it holds.<br>Soft where it moves.',description:'A compliant skin and rigid frame, co-printed in one build to follow a changing wing shape.',tag:'Implicit modelling · TPU / PETG-CF',titlePlain:'A single-print morphing wing skin',slides:[
      ['The challenge','Deform and carry load.','A morphing skin must be compliant along the chord while resisting out-of-plane aerodynamic loading. Geometry and materials have to reconcile these demands within one structure.','morphing-wing-cover-tpu-petg-flex.jpg','Physical demonstration: the TPU span flexes between rigid ends.','A hand-flex demonstration shows deformation, not full aerodynamic or fatigue validation.'],
      ['The method','Give each material a job.','Implicit modelling generates a conformal cellular core and multi-material structure on a doubly curved wing surface. The zero-Poisson-ratio core is designed to reduce spanwise contraction; TPU provides compliance and PETG-CF forms the frame.','morphing-wing-cover-tpu-petg-printed.jpg','As printed: TPU skin and PETG-CF frame in one build.','My contribution: a digital geometry pipeline from surface to printable structure.'],
      ['The build','Design the manufacturing route, too.','The project records a support-free single build that reduces bonding and post-assembly. Later specimens combine two TPU hardnesses and TPU-GF, placing different material properties where the structure needs them.','morphing-wing-cover-tri-material-print.jpg','A later build with three filaments allocated across the structure.','Ongoing direction: investigate TPU-GF as a replacement for the PETG-CF frame.']
    ]}
  },
  {
    id:'planner',category:'computation',year:'2024',image:'winding-path-planning-joint-family.jpg',
    zh:{type:'计算设计 / 纤维缠绕',title:'让纤维的路径，<br>由算法找到。',description:'从手工试错到图论规划，让不同拓扑的节点走向可重复制造。',tag:'图论 · 路径规划',titlePlain:'从图论到实物的缠绕路径规划',slides:[
      ['问题','换一种节点，还要从头试？','多种杆件方向与连接拓扑让连续纤维的铺放路线难以凭经验重复设计。路径需要同时满足连续性、空间约束和实际可制造性。','winding-path-planning-graph-axial-selection.webp','图表示：候选连接与选中的杆件。','项目来源：博士研究；相关论文仍在撰写中。'],
      ['方法','把手工判断变成计算约束。','拓展图论方法，将纤维连续性与空间约束纳入路径规划，并与结构优化耦合。相同的规划思路用于 T 形和四向节点。','winding-path-planning-crossjoint-layers.webp','四向节点：按缠绕层着色的规划路径。','方法细节和结果将随论文发表公开。'],
      ['实物','让路径走出屏幕。','不同拓扑的节点已被缠绕成型。四向十字节点进一步用于四旋翼机架，连接中央节点与四条桁架臂，展示计算规划与实际制造之间的连接。','winding-path-planning-cross-joint-airframe.jpg','以连续缠绕四向节点连接的四旋翼机架。','机架制造演示不等于已完成飞行性能验证。']
    ]},
    en:{type:'COMPUTATIONAL DESIGN / WINDING',title:'Let the algorithm<br>find the fibre path.',description:'Graph-based planning turns manual trial and error into repeatable routes across joint topologies.',tag:'Graph theory · Path planning',titlePlain:'Winding paths, from graphs to physical parts',slides:[
      ['The challenge','A new joint. Another manual route?','Different member orientations and joint topologies make continuous fibre placement difficult to design by hand. Routes must respect continuity, spatial constraints and practical manufacturability together.','winding-path-planning-graph-axial-selection.webp','A graph of candidate connections and selected members.','PhD research project; manuscript in preparation.'],
      ['The method','Turn judgement into constraints.','Extended graph-theoretical methods encode fibre continuity and spatial constraints, coupled with structural optimisation. The planning approach transfers from T-joints to four-way joints.','winding-path-planning-crossjoint-layers.webp','A planned four-way joint, coloured by winding layer.','Methodology and results will be shared with publication.'],
      ['The build','Take the path off the screen.','A family of joint topologies has been physically wound. A four-way node connects the central joint and four truss arms of a quadcopter airframe, linking computational planning to manufacturing.','winding-path-planning-cross-joint-airframe.jpg','A quadcopter airframe built around a continuously wound four-way node.','An airframe manufacturing demonstration does not establish flight performance.']
    ]}
  },
  {
    id:'skeleton',category:'structures',year:'2025',image:'avian-morphing-pva-jig-assembly.png',
    zh:{type:'仿生结构 / 复合材料',title:'让关节，长在<br>结构里面。',description:'以水溶性工装预置连接件，把碳纤维“骨骼”和关节一体制造。',tag:'连续纤维 · 牺牲性工装',titlePlain:'关节一体化的仿鸟变形机翼骨架',slides:[
      ['问题','一副能动起来的轻量骨架。','仿鸟变形机翼需要多个关节来实现折叠与展开。独立连接支架会增加重量和装配环节，因此需要把连接功能更直接地集成进复合材料结构。','avian-morphing-skeleton-assembly.jpg','装配后的仿鸟四连杆机翼骨架。','这项工作关注骨架制造与关节集成。'],
      ['方法','让工装暂时存在，让关节留下。','水溶性 PVA 芯与可重复使用的 PETG 插件预先定位轴承和螺纹嵌件。连续纤维缠绕与固化把它们固定在结构内部，再溶去芯体。','avian-morphing-pva-jig-assembly.png','工装分解图：预置关节组件与桁架模板。','流程：定位 → 缠绕 → 固化 → 溶芯 → 装配。'],
      ['实物','把加强量变成可调的参数。','改变缠绕道数获得不同加强水平的骨骼样件。现有记录中，质量沉积量与道数呈线性关系（R² = 0.997），为可预测的制造提供依据。','avian-morphing-wound-humerus-bones.jpg','不同缠绕道数的肱骨样件。','R² 描述质量与道数的拟合关系，不是刚度预测精度。']
    ]},
    en:{type:'BIO-INSPIRED STRUCTURES / COMPOSITES',title:'Build the joints<br>into the structure.',description:'Dissolvable tooling locates the inserts so composite bones and their joints can be made together.',tag:'Continuous fibres · Sacrificial tooling',titlePlain:'Joint-integrated bones for a morphing wing',slides:[
      ['The challenge','A light skeleton that moves.','A bird-inspired morphing wing needs multiple joints to fold and extend. Separate brackets add mass and assembly steps, motivating a closer integration of joints and composite structure.','avian-morphing-skeleton-assembly.jpg','The assembled bird-inspired four-bar wing skeleton.','This project addresses skeleton manufacture and joint integration.'],
      ['The method','Dissolve the tooling. Keep the joints.','Water-soluble PVA cores and reusable PETG inserts locate bearings and threaded inserts before winding. Continuous fibres and curing integrate them into the structure; the core then dissolves away.','avian-morphing-pva-jig-assembly.png','Exploded tooling with pre-positioned joint components.','Locate → wind → cure → dissolve → assemble.'],
      ['The build','Make reinforcement a controllable parameter.','Varying winding count produces different reinforcement levels. The project reports a linear relationship between deposited mass and pass count (R² = 0.997), supporting a predictable manufacturing process.','avian-morphing-wound-humerus-bones.jpg','Humerus specimens at different winding counts.','R² describes the mass–pass-count fit, not stiffness prediction accuracy.']
    ]}
  }
];
projects.push(...additionalProjects);
projects.sort((a,b)=>Number(b.year)-Number(a.year));
let lang='zh', filter='all', step=0, activeProject=null, slide=0;
let sourceCard=null, caseAnimating=false;
const $=selector=>document.querySelector(selector);
const dialog=$('#case-dialog');
const asset=file=>'../assets/images/covers/'+file;
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let heroIndex=projects.findIndex(p=>p.id==='skeleton'), heroFrame=0, heroRequest=0;
let heroPaused=reduceMotion.matches, heroTimer;
function updateHeroLabels(){
  const p=projects[heroIndex], t=p[lang];
  $('.hero-object').dataset.project=p.id;
  $('.hero-object').setAttribute('aria-label',`${copy[lang].openCase}: ${t.titlePlain}`);
  $('#hero-index').textContent=`PROJECT STUDY / ${String(heroIndex+1).padStart(2,'0')}`;
  $('#hero-counter').textContent=`${String(heroIndex+1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}`;
  $('#hero-project-title').textContent=t.title.replace(/<br\s*\/?>/g,' ');
  $('#hero-toggle').textContent=heroPaused?`▶ ${copy[lang].play}`:`Ⅱ ${copy[lang].pause}`;
  $('#hero-toggle').setAttribute('aria-label',heroPaused?copy[lang].play:copy[lang].pause);
}
async function changeHero(index){
  const request=++heroRequest;
  const nextIndex=(index+projects.length)%projects.length, p=projects[nextIndex];
  const frame=document.querySelectorAll('.hero-frame')[1-heroFrame];
  frame.src=asset(p.id==='skeleton'?'avian-morphing-skeleton-assembly.jpg':p.image);
  try{await frame.decode();}catch{return;}
  if(request!==heroRequest)return;
  document.querySelectorAll('.hero-frame')[heroFrame].classList.remove('is-active');
  frame.classList.add('is-active');heroFrame=1-heroFrame;heroIndex=nextIndex;updateHeroLabels();
}
function restartHeroTimer(){
  clearInterval(heroTimer);
  if(heroPaused)return;
  heroTimer=setInterval(()=>{
    const region=$('.hero-carousel'), rect=region.getBoundingClientRect();
    if(document.hidden||dialog.open||region.matches(':hover')||region.contains(document.activeElement)||rect.bottom<0||rect.top>window.innerHeight)return;
    changeHero(heroIndex+1);
  },5500);
}
$('#hero-prev').addEventListener('click',()=>{changeHero(heroIndex-1);restartHeroTimer();});
$('#hero-next').addEventListener('click',()=>{changeHero(heroIndex+1);restartHeroTimer();});
$('#hero-toggle').addEventListener('click',()=>{heroPaused=!heroPaused;updateHeroLabels();restartHeroTimer();});
reduceMotion.addEventListener('change',()=>{heroPaused=reduceMotion.matches;updateHeroLabels();restartHeroTimer();});
function renderProjects(){
  const shown=projects.filter(p=>filter==='all'||p.category===filter);
  $('#project-grid').innerHTML=shown.map(p=>{const t=p[lang];return `<button class="project-card" type="button" data-project="${p.id}" aria-haspopup="dialog" aria-label="${copy[lang].openCase}: ${t.titlePlain}"><div class="project-image"><span class="image-index">${p.year} / ${String(projects.indexOf(p)+1).padStart(2,'0')}</span><img src="${asset(p.image)}" alt="${t.titlePlain}" loading="lazy"></div><div class="project-body"><span class="project-type">${t.type}</span><h3>${t.title}</h3><p>${t.description}</p><div class="card-bottom"><span>${t.tag}</span><span class="arrow" aria-hidden="true">↗</span></div></div></button>`;}).join('');
  $('#filter-status').textContent=lang==='zh'?`显示 ${shown.length} / ${projects.length} 个项目`:`Showing ${shown.length} of ${projects.length} projects`;
}
function renderStep(){
  document.querySelectorAll('[data-step]').forEach(el=>{const selected=Number(el.dataset.step)===step;el.setAttribute('aria-selected',selected);el.tabIndex=selected?0:-1;});
  const s=copy[lang].steps[step];
  $('#step-panel').setAttribute('aria-labelledby',`step-tab-${step}`);
  $('#step-panel').innerHTML=`<div><h3>${s.title}</h3><p>${s.text}</p></div><div class="flow">${s.labels.map((label,i)=>`${i?'<span class="flow-arrow" aria-hidden="true">→</span>':''}<div class="flow-item"><span aria-hidden="true">${s.symbols[i]}</span>${label}</div>`).join('')}</div>`;
}
function renderCase(){
  const t=activeProject[lang], s=t.slides[slide];
  $('#case-label').textContent=`${copy[lang].caseLabel} / ${activeProject.year}`;
  $('#case-title').textContent=t.titlePlain;
  $('#case-content').innerHTML=`<div class="case-stage"><figure><img src="${asset(s[3])}" alt="${s[4]}"><figcaption>${s[4]}</figcaption></figure><div class="case-copy"><span class="eyebrow">0${slide+1} / ${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p><p class="case-note">${s[5]}</p></div></div>`;
  $('#previous').textContent=copy[lang].previous;
  $('#previous').disabled=slide===0;
  $('#next').textContent=slide===t.slides.length-1?copy[lang].done:copy[lang].next;
  $('#slide-status').textContent=`0${slide+1} / 0${t.slides.length}`;
}
const frame=()=>new Promise(resolve=>requestAnimationFrame(resolve));
function cardImage(card){
  if(!card)return null;
  return card.matches('.hero-object')?card.querySelector('.hero-frame.is-active'):card.querySelector('.project-image img');
}
function imageClone(image,rect){
  if(!image)return null;
  const clone=image.cloneNode();
  clone.className='case-transition-image';
  Object.assign(clone.style,{left:`${rect.left}px`,top:`${rect.top}px`,width:`${rect.width}px`,height:`${rect.height}px`});
  document.body.appendChild(clone);
  return clone;
}
function sharedImageAnimation(image,from,to,duration,easing='cubic-bezier(.16,1,.3,1)'){
  const clone=imageClone(image,from);
  if(!clone)return Promise.resolve();
  const dx=to.left-from.left,dy=to.top-from.top,sx=to.width/from.width,sy=to.height/from.height;
  const animation=clone.animate([
    {transform:'translate3d(0,0,0) scale(1)',borderRadius:'10px',filter:'saturate(.9)'},
    {transform:`translate3d(${dx*.78}px,${dy*.78}px,0) scale(${1+(sx-1)*.78},${1+(sy-1)*.78})`,offset:.56},
    {transform:`translate3d(${dx}px,${dy}px,0) scale(${sx},${sy})`,borderRadius:'7px',filter:'saturate(1)'}
  ],{duration,easing,fill:'forwards'});
  return animation.finished.catch(()=>{}).finally(()=>clone.remove());
}
async function openCase(card){
  if(caseAnimating||dialog.open)return;
  caseAnimating=true;sourceCard=card;
  activeProject=projects.find(p=>p.id===card.dataset.project);slide=0;renderCase();
  const sourceImage=cardImage(card),sourceRect=sourceImage?.getBoundingClientRect();
  dialog.className='is-preparing';dialog.showModal();document.body.classList.add('dialog-open');
  await frame();
  const target=dialog.querySelector('.case-stage figure'),targetRect=target.getBoundingClientRect();
  dialog.className=reduceMotion.matches?'is-open':'is-opening';
  if(!reduceMotion.matches&&sourceRect)await sharedImageAnimation(sourceImage,sourceRect,targetRect,620);
  else await new Promise(resolve=>setTimeout(resolve,120));
  dialog.className='is-open';caseAnimating=false;
}
function render(){
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  document.title=lang==='zh'?'赵梦舟 · Engineering in the making':'Mengzhou Zhao · Engineering in the making';
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.innerHTML=copy[lang][el.dataset.i18n];});
  $('#language').innerHTML=lang==='zh'?'EN <span aria-hidden="true">↗</span>':'中文 <span aria-hidden="true">↗</span>';
  $('#language').setAttribute('aria-label',lang==='zh'?'Switch to English':'切换至中文');
  renderProjects();renderStep();updateHeroLabels();if(activeProject)renderCase();
}
$('#language').addEventListener('click',()=>{lang=lang==='zh'?'en':'zh';render();});
document.addEventListener('click',event=>{
  const card=event.target.closest('[data-project]');
  if(card)openCase(card);
  const f=event.target.closest('[data-filter]');
  if(f){filter=f.dataset.filter;document.querySelectorAll('[data-filter]').forEach(el=>el.setAttribute('aria-pressed',el===f));renderProjects();}
  const s=event.target.closest('[data-step]');if(s){step=Number(s.dataset.step);renderStep();}
});
$('.process-tabs').addEventListener('keydown',event=>{
  const keys=['ArrowRight','ArrowLeft','Home','End'];if(!keys.includes(event.key))return;
  event.preventDefault();step=event.key==='Home'?0:event.key==='End'?2:(step+(event.key==='ArrowRight'?1:2))%3;renderStep();$(`#step-tab-${step}`).focus();
});
async function closeCase(){
  if(caseAnimating||!dialog.open)return;
  caseAnimating=true;
  const sourceImage=cardImage(sourceCard);
  const sourceRect=sourceImage?.isConnected?sourceImage.getBoundingClientRect():null;
  const dialogRect=dialog.getBoundingClientRect();
  if(sourceRect){
    const originX=sourceRect.left+sourceRect.width/2-dialogRect.left;
    const originY=sourceRect.top+sourceRect.height/2-dialogRect.top;
    dialog.style.setProperty('--close-origin-x',`${originX}px`);
    dialog.style.setProperty('--close-origin-y',`${originY}px`);
  }
  dialog.className=reduceMotion.matches?'is-closing-reduced':'is-closing';
  await new Promise(resolve=>setTimeout(resolve,reduceMotion.matches?90:220));
  dialog.close();dialog.className='';dialog.style.removeProperty('--close-origin-x');dialog.style.removeProperty('--close-origin-y');document.body.classList.remove('dialog-open');
  caseAnimating=false;
}
$('#close-dialog').addEventListener('click',closeCase);
dialog.addEventListener('cancel',event=>{event.preventDefault();closeCase();});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');caseAnimating=false;});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeCase();}});
function moveSlide(delta){if(caseAnimating)return;slide=Math.max(0,Math.min(activeProject[lang].slides.length-1,slide+delta));renderCase();dialog.scrollTop=0;if($('#previous').disabled&&document.activeElement===$('#previous'))$('#next').focus();}
$('#previous').addEventListener('click',()=>moveSlide(-1));
$('#next').addEventListener('click',()=>slide===activeProject[lang].slides.length-1?closeCase():moveSlide(1));
dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();moveSlide(event.key==='ArrowRight'?1:-1);}});
render();
restartHeroTimer();

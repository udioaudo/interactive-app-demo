
const CAREERS=[{"id": "buy_side", "title": "二级资管买方", "salary": "25–30w", "development": "3年50w，5–7年100w，确定性约80%", "intensity": "不大，但心累", "stability": "不太稳定", "market": "近两年扩招，业务行情较好", "fit": 82, "kind": "recommended", "x": -160, "y": -120, "z": 120, "skills": ["财务分析", "行业研究", "组合思维", "风险判断"], "pros": ["中长期收入上限较高", "研究与投资能力可复用", "近两年需求改善"], "cons": ["业绩压力与心理负担较大", "对市场周期较敏感", "岗位数量有限"]}, {"id": "quant", "title": "量化", "salary": "50–80w", "development": "3年100w，后续小几百万；确定性约80%", "intensity": "比较累", "stability": "不太稳定", "market": "长期看好", "fit": 66, "kind": "stretch", "x": -280, "y": -220, "z": 160, "skills": ["Python / C++", "概率统计", "机器学习", "因子研究"], "pros": ["起薪高", "能力壁垒强", "长期行业空间较好"], "cons": ["技术门槛高", "职业生涯相对短", "绩效淘汰明显"]}, {"id": "consulting", "title": "咨询", "salary": "20–50w", "development": "3–5年50w，7–10年100w；确定性约60%", "intensity": "很大，很累", "stability": "不太稳定", "market": "裁员较多，目前需求不大", "fit": 72, "kind": "adjacent", "x": -260, "y": 20, "z": 20, "skills": ["结构化分析", "商业沟通", "PPT表达", "项目管理"], "pros": ["训练通用商业能力", "行业覆盖广", "转型出口多"], "cons": ["工时长", "市场需求波动", "容易长期处于建议角色"]}, {"id": "ib", "title": "投行", "salary": "20–50w", "development": "大年时3年过100w，确定性低于50%", "intensity": "很大，很累", "stability": "不太稳定", "market": "业务逐步恢复，招聘中", "fit": 76, "kind": "recommended", "x": -60, "y": -230, "z": -40, "skills": ["财务与估值", "项目执行", "尽调", "客户沟通"], "pros": ["项目经验密度高", "金融职业信号强", "可转 PE / 产业资本"], "cons": ["周期性强", "工时极长", "职业确定性偏低"]}, {"id": "research", "title": "行研", "salary": "约20w", "development": "3–5年50w，确定性约30%", "intensity": "很大，很累", "stability": "不太稳定", "market": "行业仍较差，前景不确定", "fit": 68, "kind": "adjacent", "x": 80, "y": -210, "z": 30, "skills": ["行业研究", "建模", "信息搜集", "观点输出"], "pros": ["形成行业认知", "可转买方研究", "适合深度思考者"], "cons": ["薪资起点一般", "行业波动大", "确定性偏低"]}, {"id": "bank_hq", "title": "银行总行", "salary": "20–30w", "development": "5–10年50w，确定性约80%", "intensity": "不大，比较舒适", "stability": "非常稳定", "market": "稳定招聘", "fit": 88, "kind": "recommended", "x": 165, "y": -90, "z": 90, "skills": ["政策与合规", "业务分析", "组织沟通", "银行产品"], "pros": ["稳定性高", "节奏较舒适", "职业路径清晰"], "cons": ["晋升较慢", "收入上限相对温和", "组织层级较重"]}, {"id": "internet", "title": "互联网", "salary": "20–50w", "development": "7–10年100w，确定性约50%", "intensity": "很大，很累", "stability": "很不稳定", "market": "稳定招聘", "fit": 74, "kind": "adjacent", "x": 245, "y": 40, "z": 120, "skills": ["数据分析", "产品思维", "业务运营", "快速执行"], "pros": ["成长快", "薪资弹性大", "业务机会多"], "cons": ["35岁风险", "组织变化快", "高强度"]}, {"id": "bank_branch", "title": "银行省分", "salary": "15–25w", "development": "10年30–40w，确定性约80%", "intensity": "不大，比较舒服", "stability": "非常稳定", "market": "稳定招聘", "fit": 84, "kind": "recommended", "x": 260, "y": 180, "z": -20, "skills": ["客户经营", "本地市场", "银行业务", "关系维护"], "pros": ["稳定", "本地资源积累", "节奏可控"], "cons": ["收入成长较慢", "地域绑定强", "创新性有限"]}, {"id": "fin_infra", "title": "金融基础设施", "salary": "25–30w", "development": "5–10年100w，确定性约50%", "intensity": "不大，比较舒服", "stability": "非常稳定", "market": "近两年扩招", "fit": 86, "kind": "recommended", "x": 80, "y": 235, "z": -70, "skills": ["金融市场规则", "系统运营", "监管理解", "项目协同"], "pros": ["稳定性很高", "工作节奏好", "专业壁垒清晰"], "cons": ["岗位数量少", "晋升节奏较慢", "行业曝光有限"]}, {"id": "soe_hq", "title": "实业央企总部", "salary": "25–35w", "development": "10年70–100w，确定性约60%", "intensity": "不大，比较舒服", "stability": "非常稳定", "market": "稳定招聘", "fit": 80, "kind": "recommended", "x": -70, "y": 250, "z": 50, "skills": ["产业分析", "资本运作", "组织协调", "政策理解"], "pros": ["平台稳定", "发展空间较广", "产业与金融结合"], "cons": ["决策链条长", "晋升依赖组织", "岗位竞争强"]}, {"id": "wealth", "title": "银行理财子", "salary": "25–35w", "development": "5–7年100w，确定性约80%", "intensity": "不大，压力不大", "stability": "相对稳定", "market": "近两年扩招", "fit": 85, "kind": "recommended", "x": -205, "y": 155, "z": -60, "skills": ["资产配置", "产品设计", "客户需求", "合规风控"], "pros": ["收入与稳定性平衡", "产品化程度较高", "近年机会增加"], "cons": ["受监管影响大", "岗位专业化", "绩效仍有压力"]}, {"id": "amc", "title": "AMC", "salary": "20–25w", "development": "7–12年100w，确定性约50%", "intensity": "不大，会出差", "stability": "相对稳定", "market": "近两年扩招", "fit": 70, "kind": "adjacent", "x": -305, "y": 120, "z": -30, "skills": ["不良资产处置", "法律与财务", "谈判", "项目管理"], "pros": ["适合法律+金融复合背景", "项目差异化强", "长期可积累资源"], "cons": ["出差较多", "项目周期长", "收入确定性一般"]}, {"id": "big4", "title": "四大", "salary": "13–15w", "development": "5年30–40w，10年70–80w", "intensity": "很大，很累", "stability": "相对稳定", "market": "近两年招人减少", "fit": 64, "kind": "stretch", "x": -330, "y": -40, "z": -100, "skills": ["审计", "会计", "流程控制", "客户沟通"], "pros": ["训练体系成熟", "品牌信号强", "出口较多"], "cons": ["起薪较低", "高强度", "招聘收缩"]}, {"id": "leasing", "title": "金租", "salary": "约20w", "development": "10–15年100w，确定性约30%", "intensity": "不大，会出差", "stability": "相对稳定", "market": "近两年扩招", "fit": 69, "kind": "adjacent", "x": 315, "y": -20, "z": -80, "skills": ["融资租赁", "产业分析", "项目尽调", "客户开发"], "pros": ["金融+产业结合", "节奏相对可控", "部分赛道有增长"], "cons": ["出差", "职业确定性一般", "业务能力差异大"]}, {"id": "origin", "title": "你的职业原点", "salary": "—", "development": "由学历、实习、技能与偏好生成", "intensity": "—", "stability": "—", "market": "动态更新", "fit": 100, "kind": "origin", "x": 0, "y": 70, "z": 0, "skills": ["学历背景", "实习经历", "技能标签", "地域偏好"], "pros": ["所有路径都从这里出发"], "cons": ["信息不足时推荐置信度会下降"]}];
const EDGES=[["origin", "buy_side", true], ["origin", "ib", true], ["origin", "bank_hq", true], ["origin", "wealth", true], ["origin", "fin_infra", true], ["origin", "soe_hq", false], ["origin", "consulting", false], ["origin", "research", false], ["origin", "internet", false], ["origin", "bank_branch", false], ["origin", "amc", false], ["origin", "leasing", false], ["origin", "big4", false], ["origin", "quant", false]];

const screens=[
  {
    name:"Onboarding",
    html:`<p class="kicker">建立职业坐标原点</p>
      <h2 class="title">先告诉 North 你现在在哪里。</h2>
      <p class="sub">学历、实习、技能和偏好共同决定职业坐标原点。也可以直接上传简历识别。</p>
      <div class="form-grid">
        <div class="field"><label>学历</label><select id="degree"><option>本科 · 金融</option><option>本科 · 会计</option><option>硕士 · 金融工程</option><option>硕士 · 商科其他</option></select></div>
        <div class="field"><label>学校层次</label><select id="school"><option>985 / 211</option><option>海外 Top 100</option><option>普通本科</option></select></div>
        <div class="field"><label>工作 / 实习经历</label><input id="internship" placeholder="例如：券商投行实习 2 段、四大审计 1 段"/></div>
        <div class="field"><label>技能</label><input id="skills" placeholder="例如：Excel、Python、建模、CPA 科目"/></div>
        <div class="field"><label>偏好</label><select id="preference"><option>稳定优先</option><option>收入优先</option><option>成长优先</option><option>工作生活平衡</option></select></div>
      </div>
      <div class="upload-box">
        <input id="resumeInput" type="file" accept=".pdf,.doc,.docx,.txt"/>
        <label for="resumeInput">上传简历，由 AI 自动识别</label>
        <p>识别学历、实习、项目、技能与关键词</p>
        <div id="parseResult" class="parse-result"></div>
      </div>
      <button class="cta" onclick="buildOrigin()">生成我的职业坐标</button>`
  },
  {
    name:"All Paths",
    html:`<p class="kicker">金融职业宇宙</p><h2 class="title">从你的原点，看到所有可能。</h2>
      <p class="sub">每个职业光点都可以点击。系统会根据第一页输入动态调整适配度与推荐路径。</p>
      <div class="tabs"><button class="active" onclick="switchTab('paths',this)">All Paths</button><button onclick="switchTab('skills',this)">Skill Growth</button></div>
      <div id="careerTab"></div>`
  },
  {
    name:"Today",
    html:`<p class="kicker">当前推荐 · 银行总行</p><h2 class="title">今天做什么，为什么值得。</h2>
      <p class="sub">不是为了打卡，而是为了积累一条能影响职业推荐、面试表达和简历内容的真实证据。</p>

      <div class="card dark">
        <p class="kicker" style="color:#d7aa72">今日核心任务 · 25 分钟</p>
        <h3>完成一份银行产品判断 mini memo。</h3>
        <p class="sub" style="color:#cdbfb1">选择一个银行产品，用“用户—业务—风险—建议”的结构写 200 字判断。</p>
      </div>

      <div class="today-impact">
        <span>完成后对你有什么帮助</span>
        <b>把“我对银行感兴趣”升级为“我能分析银行业务”。</b>
        <p>系统会为“业务分析、风险判断、结构化表达”各增加 1 个证据点，并提高银行总行与金融基础设施路径的适配度。</p>
      </div>

      <div class="row"><div class="icon">1</div><div class="copy"><b>选题</b><small>信用卡、财富管理或数字人民币产品</small></div></div>
      <div class="row"><div class="icon">2</div><div class="copy"><b>输出</b><small>写清用户、商业价值、风险与建议</small></div></div>
      <div class="row"><div class="icon">3</div><div class="copy"><b>验证</b><small>发给一位银行从业者获得反馈</small></div></div>

      <div class="resume-proof">
        <span>如何写进简历</span>
        <code id="resumeBullet">独立完成银行零售产品分析，围绕用户需求、商业价值与风险提出结构化建议，并基于行业从业者反馈迭代结论。</code>
        <button onclick="copyResumeBullet()">复制简历表述</button>
      </div>

      <p class="kicker" style="margin-top:16px">学历 / 课程建议</p>
      <div class="course-card">
        <header><b>银行业务与风险管理</b><small>优先级：高</small></header>
        <p>适合补足银行总行、金融基础设施和理财子路径的业务理解。</p>
        <a href="#" onclick="event.preventDefault()">查看课程</a>
      </div>
      <div class="course-card">
        <header><b>财务报表分析</b><small>优先级：中</small></header>
        <p>可提升买方、投行、行研和银行相关岗位的共同底层能力。</p>
        <a href="#" onclick="event.preventDefault()">加入学习计划</a>
      </div>
      <div class="course-card">
        <header><b>是否需要继续读研？</b><small>根据画像判断</small></header>
        <p>若目标是量化或金融工程，硕士价值较高；若目标是银行总行或金融基础设施，优质实习与业务证据通常更直接。</p>
      </div>`
  },
  {
    name:"AI 顾问",
    html:`<p class="kicker">AIGC · 金融垂类问答</p><h2 class="title">问任何关于细分赛道的问题。</h2>
      <p class="sub">基于职业坐标的领域 RAG，输出可被验证的判断与下一步行动。当前为前端 demo，未接入真实检索后端。</p>

      <div class="aigc-hero">
        <span class="badge">VERTICAL AI · BETA</span>
        <h3 id="aigcHeroTitle">选一个垂类，开始对话</h3>
        <p id="aigcHeroSub">不同赛道有不同的语料、术语与回答风格。先告诉我，你要问哪个方向？</p>
      </div>

      <p class="kicker" style="margin-top:14px">选择细分领域</p>
      <div class="vertical-grid" id="verticalGrid"></div>

      <p class="kicker" style="margin-top:14px">热门问题（点击直接发送）</p>
      <div class="preset-q" id="presetQ"></div>

      <div class="aigc-input">
        <textarea id="aigcInput" rows="2" placeholder="例如：买方研究员一周的工作节奏是怎样的？"></textarea>
        <button id="aigcSend">发送</button>
      </div>

      <div class="chat-stream" id="chatStream"></div>`
  },
  {
    name:"Growth",
    html:`<p class="kicker">成长复盘</p><h2 class="title">技能证据正在改变你的职业推荐。</h2>
      <div class="card dark"><h3>银行总行适配度：84% → 88%</h3><p class="sub" style="color:#cdbfb1">因为你完成了 2 次银行产品分析，并与 1 位总行从业者完成交流。</p></div>
      <div class="skill-card"><header><b>业务分析</b><small>68%</small></header><div class="progress"><i style="width:68%"></i></div></div>
      <div class="skill-card"><header><b>财务分析</b><small>54%</small></header><div class="progress"><i style="width:54%"></i></div></div>
      <div class="skill-card"><header><b>Python / 量化</b><small>24%</small></header><div class="progress"><i style="width:24%"></i></div></div>
      <div class="skill-card"><header><b>组织沟通</b><small>72%</small></header><div class="progress"><i style="width:72%"></i></div></div>`
  }
];

const nav=document.getElementById('nav');
const screen=document.getElementById('screen');
const bottom=[...document.querySelectorAll('.bottom-nav button')];
let yaw=-8,pitch=7,zoom=1,dragging=false,lastX=0,lastY=0;
let profile={degree:'本科 · 金融',school:'985 / 211',internship:'券商投行实习 2 段',skills:'Excel、财务建模',preference:'稳定优先'};

function renderList(id,items){document.getElementById(id).innerHTML=items.map(x=>`<div>${x}</div>`).join('')}
function inspectCareer(id, opts){
  const c=CAREERS.find(x=>x.id===id);
  document.getElementById('nodeTitle').textContent=c.title;
  document.getElementById('nodeReason').textContent=id==='origin'?'这是由第一页输入生成的职业坐标原点。':`根据你的 ${profile.degree}、${profile.internship||'经历'} 与“${profile.preference}”偏好评估。`;
  document.getElementById('fitScore').textContent=c.fit+'%';
  document.getElementById('salary').textContent=c.salary;
  document.getElementById('development').textContent=c.development;
  document.getElementById('intensity').textContent=c.intensity;
  document.getElementById('stability').textContent=c.stability;
  document.getElementById('market').textContent=c.market;
  renderList('skillsList',c.skills);renderList('prosList',c.pros);renderList('consList',c.cons);
  const detail=document.getElementById('careerDetail');
  if(detail){
    const reason=id==='origin'?'这是由第一页输入生成的职业坐标原点。':`根据你的 ${profile.degree}、${profile.internship||'经历'} 与“${profile.preference}”偏好评估。`;
    const kindMap={recommended:'推荐路径',stretch:'挑战路径',origin:'职业原点',adjacent:'相邻路径'};
    detail.innerHTML=`
      <div class="detail-head">
        <p class="kicker">职业详情 · ${kindMap[c.kind]||'路径'}</p>
        <h3 class="title" style="font-size:22px;margin:4px 0 6px">${c.title}</h3>
        <p class="sub">${reason}</p>
      </div>
      <div class="detail-metrics">
        <div><span>适配度</span><b>${c.fit}%</b></div>
        <div><span>薪资区间</span><b>${c.salary}</b></div>
      </div>
      <div class="detail-row"><span>发展路径</span><b>${c.development}</b></div>
      <div class="detail-row"><span>工作强度</span><b>${c.intensity}</b></div>
      <div class="detail-row"><span>稳定性</span><b>${c.stability}</b></div>
      <div class="detail-row"><span>市场行情</span><b>${c.market}</b></div>
      <p class="kicker" style="margin-top:14px">核心能力</p>
      <div class="chip-row">${c.skills.map(s=>`<span class="chip">${s}</span>`).join('')}</div>
      <p class="kicker" style="margin-top:14px">优势</p>
      <ul class="pc-list pros">${c.pros.map(x=>`<li>${x}</li>`).join('')}</ul>
      <p class="kicker" style="margin-top:10px">挑战</p>
      <ul class="pc-list cons">${c.cons.map(x=>`<li>${x}</li>`).join('')}</ul>`;
    if(opts && opts.scroll){
      requestAnimationFrame(()=>detail.scrollIntoView({behavior:'smooth',block:'start'}));
      detail.classList.remove('flash');void detail.offsetWidth;detail.classList.add('flash');
    }
  }
}
function selectScreen(i){
  screen.classList.add('swap');
  setTimeout(()=>{
    screen.innerHTML=screens[i].html;
    [...nav.querySelectorAll('button')].forEach((b,n)=>b.classList.toggle('active',n===i));
    bottom.forEach((b,n)=>b.classList.toggle('active',n===i));
    screen.classList.remove('swap');
    if(i===0)initUpload();
    if(i===1)renderPaths();
    if(i===3)initAigc();
  },130);
}
screens.forEach((s,i)=>{const b=document.createElement('button');b.textContent=`${i+1}. ${s.name}`;b.onclick=()=>selectScreen(i);nav.appendChild(b)});
bottom.forEach((b,i)=>b.onclick=()=>selectScreen(i));

function initUpload(){
  const input=document.getElementById('resumeInput');
  input.onchange=()=>{
    const box=document.getElementById('parseResult');
    box.style.display='block';
    box.textContent=`已识别：金融本科｜券商/银行相关经历｜Excel/建模｜稳定性偏好待确认`;
    document.getElementById('internship').value='券商投行实习 2 段、银行实习 1 段';
    document.getElementById('skills').value='Excel、财务建模、Python 基础';
  };
}
function buildOrigin(){
  profile={
    degree:document.getElementById('degree').value,
    school:document.getElementById('school').value,
    internship:document.getElementById('internship').value,
    skills:document.getElementById('skills').value,
    preference:document.getElementById('preference').value
  };
  document.getElementById('profileSummary').textContent=`${profile.degree} · ${profile.school} · ${profile.preference}`;
  if(profile.preference.includes('稳定')){
    CAREERS.find(x=>x.id==='bank_hq').fit=91;
    CAREERS.find(x=>x.id==='bank_branch').fit=89;
    CAREERS.find(x=>x.id==='fin_infra').fit=90;
  }
  if((profile.skills||'').toLowerCase().includes('python')){
    CAREERS.find(x=>x.id==='quant').fit=74;
  }
  selectScreen(1);
}

function switchTab(tab,btn){
  document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  if(tab==='paths')renderPaths();else renderSkills();
}
function renderSkills(){
  document.getElementById('careerTab').innerHTML=`
    <p class="sub">Skill Growth 是第二层：先看职业路径，再决定为了目标路径要补什么。</p>
    <div class="skill-card"><header><b>财务分析</b><small>54%</small></header><div class="progress"><i style="width:54%"></i></div></div>
    <div class="skill-card"><header><b>行业研究</b><small>48%</small></header><div class="progress"><i style="width:48%"></i></div></div>
    <div class="skill-card"><header><b>Python / 量化</b><small>24%</small></header><div class="progress"><i style="width:24%"></i></div></div>
    <div class="skill-card"><header><b>组织沟通</b><small>72%</small></header><div class="progress"><i style="width:72%"></i></div></div>
    <div class="skill-card"><header><b>客户经营</b><small>42%</small></header><div class="progress"><i style="width:42%"></i></div></div>`;
}
function renderPaths(){
  document.getElementById('careerTab').innerHTML=`
    <div class="path-tree"><div id="pathViewport" class="path-viewport">
      <div class="ring r1"></div><div class="ring r2"></div><div class="ring r3"></div>
      <svg id="treeLines" class="tree-lines"></svg><div id="treeScene" class="tree-scene"></div>
    </div><div class="path-hint">拖动旋转 · 滚轮缩放 · 点击任一职业节点查看下方详情</div></div>
    <section id="careerDetail" class="career-detail"></section>`;
  initTree();inspectCareer('bank_hq');
}
function initTree(){
  const vp=document.getElementById('pathViewport'),scene=document.getElementById('treeScene'),lines=document.getElementById('treeLines');
  const els=new Map();
  CAREERS.forEach(n=>{
    const el=document.createElement('button');el.className='career-node';
    const star=n.kind==='origin'?'origin':(n.kind==='recommended'?'big':'');
    el.innerHTML=`<i class="star ${star}"></i><b>${n.title}</b><small>${n.fit}% · ${n.salary}</small>`;
    el.onclick=e=>{e.stopPropagation();inspectCareer(n.id,{scroll:true})};scene.appendChild(el);els.set(n.id,el);
  });
  function project(n){
    const ry=yaw*Math.PI/180,rx=pitch*Math.PI/180;
    let x=n.x,y=n.y,z=n.z;
    const x1=x*Math.cos(ry)+z*Math.sin(ry),z1=-x*Math.sin(ry)+z*Math.cos(ry);
    const y1=y*Math.cos(rx)-z1*Math.sin(rx),z2=y*Math.sin(rx)+z1*Math.cos(rx);
    const k=760/(760-z2);
    return {x:vp.clientWidth/2+x1*k*zoom,y:vp.clientHeight/2+y1*k*zoom,s:Math.max(.68,Math.min(1.3,k*zoom)),z:z2};
  }
  function render(){
    const pts=new Map();
    CAREERS.forEach(n=>{const p=project(n);pts.set(n.id,p);const el=els.get(n.id);el.style.left=p.x+'px';el.style.top=p.y+'px';el.style.transform=`translate(-50%,-50%) scale(${p.s})`;el.style.zIndex=Math.round(1000+p.z)});
    lines.setAttribute('viewBox',`0 0 ${vp.clientWidth} ${vp.clientHeight}`);lines.innerHTML='';
    EDGES.forEach(([a,b,rec])=>{const p1=pts.get(a),p2=pts.get(b);const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1',p1.x);l.setAttribute('y1',p1.y);l.setAttribute('x2',p2.x);l.setAttribute('y2',p2.y);if(rec)l.classList.add('recommended');lines.appendChild(l)});
  }
  vp.onpointerdown=e=>{dragging=true;lastX=e.clientX;lastY=e.clientY;vp.classList.add('dragging');vp.setPointerCapture(e.pointerId)};
  vp.onpointermove=e=>{if(!dragging)return;yaw+=(e.clientX-lastX)*.23;pitch-=(e.clientY-lastY)*.18;pitch=Math.max(-48,Math.min(48,pitch));lastX=e.clientX;lastY=e.clientY;render()};
  vp.onpointerup=()=>{dragging=false;vp.classList.remove('dragging')};
  vp.onwheel=e=>{e.preventDefault();zoom+=e.deltaY>0?-.055:.055;zoom=Math.max(.75,Math.min(1.35,zoom));render()};
  render();
}
selectScreen(0);inspectCareer('bank_hq');


function copyResumeBullet(){
  const text=document.getElementById('resumeBullet')?.textContent||'';
  if(navigator.clipboard){
    navigator.clipboard.writeText(text);
  }
  const btn=event?.target;
  if(btn){
    const old=btn.textContent;
    btn.textContent='已复制';
    setTimeout(()=>btn.textContent=old,1200);
  }
}

const splash=document.getElementById('splash');
const enter=document.getElementById('enterApp');
if(enter){
  enter.onclick=()=>splash.classList.add('hidden');
}
setTimeout(()=>{ if(splash) splash.classList.add('hidden'); },5000);

/* ============== AIGC 金融垂类问答 ============== */
const VERTICALS = [
  { id:'buy_side', emoji:'📈', name:'二级买方', tag:'公募/私募研究员',
    q:['买方研究员每周节奏？','刚入行如何建立行业框架？','买方面试的能力评估维度是什么？'],
    a:'买方研究员通常每周节奏为：周一晨会复盘 + 排日程；周二到周四调研、跟踪持仓股、写更新；周五写周报与组合建议。\n核心能力链：行业框架 → 公司深度 → 组合贡献。新人前 6 个月建议聚焦 1–2 个细分赛道（例如新能源中游 / 消费医疗 / 半导体设计），把行业图谱、关键变量、上下游与可比公司啃透，再开始扩展。',
    src:['《主动权益基金研究员能力模型》（内部资料 v3.2）','Wind 行业研究方法手册 2024','某头部公募新员工入职 90 天计划'] },
  { id:'quant', emoji:'🧮', name:'量化', tag:'因子/高频/CTA',
    q:['量化研究员需要哪些数学基础？','因子方向 vs 高频方向怎么选？','本科生怎么准备量化校招？'],
    a:'核心数学栈：概率论与数理统计、随机过程、时间序列、最优化、线性代数。工程栈至少二选一精通：Python（pandas/numpy/torch）或 C++（低延迟）。\n方向选择：偏研究思维 → 多因子 / 中低频；偏工程与基础设施 → 高频做市；偏宏观叙事 → CTA。校招优先级：刷 LeetCode + Kaggle 项目 + 一段量化私募实习 + 公开复现一个经典因子。',
    src:['《主动量化研究框架》（华泰金工 2023）','某 Top 私募量化研究员校招题库','arXiv: Empirical Asset Pricing via Machine Learning'] },
  { id:'ib', emoji:'💼', name:'投行', tag:'IBD/ECM/DCM',
    q:['投行 IBD 实习一般做什么？','IPO 项目执行流程是怎样的？','投行 vs 行研怎么选？'],
    a:'IBD 实习日常：行业研究、可比公司分析（Comps）、估值建模（DCF/LBO）、Pitch Book 制作、尽调资料整理、与中介机构对接。\nIPO 流程主线：立项 → 尽调（业务/财务/法律）→ 申报材料 → 受理问询 → 上会 → 发行定价 → 挂牌。每个环节实习生都会接触到底稿、问询回复或路演材料。',
    src:['《IPO 实务操作指南》（上交所 2024）','某券商投行 Analyst 培训手册','PitchBook 行业数据库'] },
  { id:'bank_hq', emoji:'🏦', name:'银行总行', tag:'管培/业务部门',
    q:['总行管培生轮岗怎么选？','零售 vs 对公差别有多大？','总行晋升路径长什么样？'],
    a:'总行管培生通常在 1–2 年内轮岗 3–5 个部门，建议选择"业务条线 + 中后台"组合：例如对公业务部 + 风险管理部，便于建立完整业务地图。\n零售强调获客与产品转化，节奏更快；对公强调客户经营与项目融资，更看重行业理解。晋升路径一般为：管培 → 业务岗 → 处室副职（5–7y）→ 部门副职（10y+），稳定但需要持续业务证据。',
    src:['六大行 2024 校招简章对比','《商业银行总行岗位地图》（内部）','某股份行管培三年轮岗复盘'] },
  { id:'wealth', emoji:'💎', name:'银行理财子', tag:'固收/权益/多资产',
    q:['理财子和公募差别在哪？','固收 + 策略怎么搭建？','理财子的投研团队结构？'],
    a:'差异主要在：客户结构（理财子以银行渠道零售客户为主，风险偏好低）、产品形态（净值化但仍以低波稳健为主）、考核机制（更注重回撤控制与持有体验）。\n固收+ 通常以中短债打底（60–80%）+ 权益/转债/衍生品（10–30%）+ 黄金/REITs 等另类（0–10%）。核心是回撤管理而非单纯收益最大化。',
    src:['理财子公司监管办法（2022）','某理财子固收+产品说明书','银行业协会理财半年报'] },
  { id:'fin_infra', emoji:'🧱', name:'金融基础设施', tag:'交易所/清算/登记',
    q:['交易所 vs 中登 vs 上清所？','金融基础设施的核心岗位？','非技术背景能去吗？'],
    a:'交易所负责撮合与监管自律；中登负责证券登记结算；上清所负责场外衍生品中央对手清算。三者岗位均涵盖业务规则、市场监察、产品创新、风控合规。\n非技术背景完全可以进入，业务/法律/合规/产品方向尤其欢迎金融、法学、统计背景。优势在于稳定性 + 系统视角，劣势是绝对收入弹性较小。',
    src:['上交所/深交所 2024 校招岗位说明','《中国资本市场基础设施白皮书》','某清算所新员工业务培训资料'] },
  { id:'consulting', emoji:'🧭', name:'咨询', tag:'MBB/战略/财务',
    q:['MBB 案例面试怎么准备？','战略咨询 vs 财务咨询？','咨询出口都去哪？'],
    a:'案例面试核心三层：结构化拆解（MECE）→ 数据假设与计算 → 形成可被验证的建议。准备路径：Case in Point + Victor Cheng + 至少 30 个 mock case。\n战略咨询面对 CEO 议题（增长、并购、组织），财务咨询更聚焦 deal advisory（尽调、估值、整合）。常见出口：产业战略部、PE 投后、互联网战略、自己创业。',
    src:['Case in Point 9th edition','MBB 中国区 2024 校招流程整理','某 MBB Associate 三年晋升复盘'] },
  { id:'research', emoji:'🔬', name:'卖方行研', tag:'行业研究员',
    q:['卖方研究员日常做什么？','新财富评选还重要吗？','行研转买方需要准备什么？'],
    a:'日常：覆盖公司财报点评、行业事件解读、深度报告、路演销售、买方调研陪同。一年要写 50+ 篇报告 + 100+ 场路演。\n新财富仍是行业重要排名，但近年合规收紧后，更多看派点、深度报告影响力与产业资源。转买方需准备：1 个看得懂的细分赛道 + 1 篇能讲清楚的深度 + 对组合贡献的理解。',
    src:['新财富 2024 评选规则','某券商首席 30 篇代表作清单','《卖方研究员的一天》（业内访谈）'] },
  { id:'internet_fin', emoji:'🌐', name:'互联网金融', tag:'蚂蚁/支付/数科',
    q:['互联网金融岗位还有机会吗？','数据分析在金融业务里怎么用？','大厂金融科技 vs 银行总行？'],
    a:'监管趋严后，互金从 C 端流量转向 B 端服务（开放银行、风控 SaaS、数字人民币应用）。岗位机会仍存在，但更偏产品/数据/风控，而非纯增长。\n数据分析典型场景：用户分层与LTV、反欺诈、信用评分卡、流失预警、产品 A/B test。建议熟练 SQL + Python + 一个建模框架（XGBoost / LightGBM）。',
    src:['蚂蚁/京东数科 2024 校招岗位','银保监会金融科技发展规划（2022–2025）','某大厂数据分析师面试题汇总'] },
  { id:'soe_hq', emoji:'🏛️', name:'央企产业', tag:'战略投资/资本运作',
    q:['央企总部战投部做什么？','金融出身去产业有优势吗？','央企晋升节奏怎么样？'],
    a:'战投部典型工作：行业研究、并购标的筛选、投资执行（尽调/谈判/交割）、投后管理、集团资本运作（分拆/上市/整合）。\n金融出身的优势：估值与交易经验、资本市场资源、财务建模。挑战在于需要补产业 know-how。晋升节奏稳但层级多，5 年到副处、10 年到正处是常见路径。',
    src:['国资委央企名录（2024）','某能源央企战投部岗位说明书','《产业资本与金融资本的协同》（清华五道口）'] },
  { id:'amc', emoji:'♻️', name:'AMC', tag:'不良资产/特殊机会',
    q:['AMC 主要做哪些业务？','不良资产处置有哪些方式？','法律背景在 AMC 的价值？'],
    a:'四大 AMC + 地方 AMC 主要业务：不良债权收购、重组、处置、特殊机会投资、问题企业纾困。\n处置方式：诉讼追偿、债务重组、债转股、资产证券化、整体打包出售。法律背景在债权确认、抵押物处置、破产重整环节有显著优势，金融 + 法律复合背景在 AMC 议价能力很强。',
    src:['银保监会 AMC 监管办法','《不良资产处置实务》2023 版','某地方 AMC 项目复盘合集'] },
  { id:'big4', emoji:'📊', name:'四大', tag:'审计/咨询/税务',
    q:['四大审计真的很累吗？','审计 vs 咨询 vs 税务？','四大出来一般去哪？'],
    a:'审计旺季（11–4 月）确实压力大，加班到 11 点是常态；淡季相对轻松。咨询节奏更项目制，税务最稳定。\n出口：审计 → 上市公司财务、投行、PE 投后；咨询 → 战略部 / 互联网战略 / 创业；税务 → 企业税务总监 / 税务师事务所合伙人。品牌信号在国内外都比较通用。',
    src:['四大 2024 校招对比','某 Big4 Senior 三年成长复盘','ACCA / CPA 备考路线图'] },
];

let activeVertical = null;

function initAigc(){
  const grid=document.getElementById('verticalGrid');
  if(!grid) return;
  grid.innerHTML = VERTICALS.map(v=>`
    <button class="vertical-chip" data-id="${v.id}">
      <span class="v-emoji">${v.emoji}</span>
      <span class="v-name">${v.name}</span>
    </button>`).join('');
  grid.querySelectorAll('.vertical-chip').forEach(btn=>{
    btn.onclick=()=>selectVertical(btn.dataset.id);
  });
  const send=document.getElementById('aigcSend');
  const input=document.getElementById('aigcInput');
  send.onclick=()=>submitAigc(input.value);
  input.addEventListener('keydown',e=>{
    if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); submitAigc(input.value); }
  });
  document.getElementById('chatStream').innerHTML='';
  document.getElementById('presetQ').innerHTML='';
  selectVertical('buy_side');
}

function selectVertical(id){
  activeVertical = VERTICALS.find(v=>v.id===id) || VERTICALS[0];
  document.querySelectorAll('.vertical-chip').forEach(b=>{
    b.classList.toggle('active', b.dataset.id===activeVertical.id);
  });
  const hero=document.getElementById('aigcHeroTitle');
  const sub=document.getElementById('aigcHeroSub');
  if(hero) hero.textContent = `${activeVertical.emoji} ${activeVertical.name} · ${activeVertical.tag}`;
  if(sub) sub.textContent = `已切换到「${activeVertical.name}」语料域。回答会带上该领域的真实参考来源。`;
  const pq=document.getElementById('presetQ');
  pq.innerHTML = activeVertical.q.map(q=>`<button>${q}</button>`).join('');
  pq.querySelectorAll('button').forEach(b=>b.onclick=()=>submitAigc(b.textContent));
}

function submitAigc(text){
  text=(text||'').trim();
  if(!text || !activeVertical) return;
  const input=document.getElementById('aigcInput');
  const send=document.getElementById('aigcSend');
  input.value='';
  const stream=document.getElementById('chatStream');
  const u=document.createElement('div');u.className='bubble user';u.textContent=text;stream.appendChild(u);
  const a=document.createElement('div');a.className='bubble ai';
  a.innerHTML=`<span class="ai-tag">${activeVertical.emoji} ${activeVertical.name} · AI</span><div class="typing"><i></i><i></i><i></i></div>`;
  stream.appendChild(a);
  send.disabled=true;
  a.scrollIntoView({behavior:'smooth',block:'end'});
  // pick preset answer if matches one of preset q, else a generic
  const v=activeVertical;
  const matched = v.q.includes(text);
  const ansBody = matched ? v.a : `（演示回答）针对你的问题「${text}」，在「${v.name}」语料域中可以这样思考：\n${v.a}`;
  setTimeout(()=>{
    a.innerHTML = `
      <span class="ai-tag">${v.emoji} ${v.name} · AI</span>
      <div>${ansBody.replace(/\n/g,'<br/>')}</div>
      <div class="src"><b>参考来源（demo）：</b><br/>${v.src.map((s,i)=>`${i+1}. ${s}`).join('<br/>')}</div>`;
    send.disabled=false;
    a.scrollIntoView({behavior:'smooth',block:'end'});
  }, 900);
}

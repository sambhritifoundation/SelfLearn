(() => {
 'use strict';
 const D=window.CareerData, $=id=>document.getElementById(id), params=new URLSearchParams(location.search);
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let career=D.careers.find(c=>c.id===params.get('interest'))||D.careers[0];
 let grade=Number(params.get('class'));
 if(!Number.isInteger(grade)||grade<6||grade>16)grade=6;
 const startingStage=()=>grade<=8?0:grade<=10?1:grade<=12?2:grade<=14?3:grade===15?4:5;
 let stage=startingStage();
 $('class').value=String(grade);
 const key=()=>`sl-career-plan-v1:${career.id}:${grade}`;
 function loadPlan(){let p={};try{p=JSON.parse(localStorage.getItem(key())||'{}')||{};}catch{}$('note').value=typeof p.note==='string'?p.note.slice(0,600):'';$('done').checked=p.done===true;$('status').textContent='';}
 function savePlan(silent=false){try{localStorage.setItem(key(),JSON.stringify({note:$('note').value,done:$('done').checked}));if(!silent)$('status').textContent='Saved in this browser. Your next step is ready.';}catch{if(!silent)$('status').textContent='This browser cannot save your plan. You can still print it or copy your note.';}}
 function updateURL(){const u=new URL(location.href);u.searchParams.set('interest',career.id);u.searchParams.set('class',grade);history.replaceState(null,'',u);}
 function renderDetail(){const s=D.stages[stage],step=career.steps[stage];$('detail').innerHTML=`<div class="detail-header"><span aria-hidden="true">${s.icon}</span><div><p>${s.label}${stage===startingStage()?' · Your starting stage':''}</p><h2 id="detail-title">${s.title}</h2></div></div><div class="detail-grid">${['What to prepare','When to prepare','How to practise'].map((h,i)=>`<div><h3>${h}</h3><p>${esc(step[i])}</p></div>`).join('')}</div><div class="evidence"><strong>A milestone to aim for →</strong> ${esc(step[3])}</div><div class="stage-shortcuts">${(stage<3?[['opportunities','Find school & student opportunities'],['work','See real work']]:stage===3?[['courses','Compare courses & institutes'],['jobs','Explore employers']]:stage===4?[['courses','Compare postgraduate courses'],['research','Explore research']]:stage===5?[['research','Explore research routes'],['opportunities','Find funding & opportunities']]:[['jobs','Explore career portals'],['enterprise','Build your own venture']]).map(([id,label])=>`<button data-resource-jump="${id}">${label} ↗</button>`).join('')}</div>`;}
 function renderRoadmap(){ $('roadmap').innerHTML=D.stages.map((s,i)=>`<button class="milestone ${i===startingStage()?'current':''}" data-stage="${i}" aria-pressed="${i===stage}" aria-controls="detail"><span class="number">0${i+1}</span><small>${s.label}</small><strong>${s.title}</strong><span class="symbol" aria-hidden="true">${s.icon}</span><small>${i===stage?'Viewing this milestone':'Explore milestone →'}</small></button>`).join('');renderDetail();}
 function render(){
  $('interests').innerHTML=D.careers.map(c=>`<button class="interest" data-interest="${c.id}" aria-pressed="${c.id===career.id}"><b aria-hidden="true">${c.icon}</b>${c.name}</button>`).join('');
  $('journey-title').textContent=`Your journey to becoming a ${career.destination}`;
  $('journey-intro').textContent=career.intro;
  renderRoadmap();
  $('print-stages').innerHTML='<h2>Your complete preparation timeline</h2>'+D.stages.map((s,i)=>`<section class="print-stage"><h3>${s.label} · ${s.title}</h3>${['What','When','How','Milestone'].map((label,j)=>`<p><b>${label}:</b> ${esc(career.steps[i][j])}</p>`).join('')}</section>`).join('');
  renderResources();
  $('branches').innerHTML=career.branches.map((b,i)=>`<article class="branch"><span>Possibility 0${i+1}</span><h3>${esc(b[0])}</h3><p>${esc(b[1])}</p></article>`).join('');
  $('routes').innerHTML=career.routes.map(r=>`<div class="route"><strong>${esc(r[0])}</strong><p>${esc(r[1])}</p></div>`).join('');
  $('challenge').textContent=startingStage()===0?career.challenge:`Take one small part of this stage’s practice and try it this week: ${career.steps[startingStage()][2]}`;
  $('learning-link').href=career.link;
  $('sources').innerHTML=career.sources.map(s=>`<a href="${esc(s[1])}" target="_blank" rel="noopener noreferrer">${esc(s[0])} ↗</a>`).join('');
  loadPlan();updateURL();
 }
 const categories=[['courses','Courses & institutes'],['work','Real work'],['jobs','Careers & employers'],['enterprise','Entrepreneurship'],['opportunities','Competitions & opportunities'],['research','Research routes']];
 let resource='courses',courseLevel='all',scope='all';
 const link=(url,label)=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`;
 const badge=t=>`<span class="resource-badge">${esc(t)}</span>`;
 function renderResources(){
  const r=career.resources;
  $('resource-title').textContent=`Explore the world of ${career.name.toLowerCase()}`;
  $('resource-nav').innerHTML=categories.map(([id,label])=>`<button data-resource="${id}" aria-pressed="${id===resource}" aria-controls="resource-${id}">${label}</button>`).join('');
  const courses=r.courses.filter(c=>courseLevel==='all'||c.level.includes(courseLevel));
  const opps=[...r.opportunities,...D.globalOpportunities].filter(o=>scope==='all'||o.scope.includes(scope));
  const filters=(id,value,options)=>`<label class="resource-filter">${id==='course-level'?'Study level':'Opportunity reach'} <select id="${id}">${options.map(([v,l])=>`<option value="${v}" ${v===value?'selected':''}>${l}</option>`).join('')}</select></label>`;
  const card=(title,body)=>`<article class="resource-card"><h3>${esc(title)}</h3>${body}</article>`;
  const parts={
   courses:`<div class="panel-head"><p>Representative courses offered by named institutes. Compare curriculum, recognition, fees, delivery mode and eligibility before applying.</p>${filters('course-level',courseLevel,[['all','All levels'],['Graduation','Graduation / integrated'],['Postgraduation','Postgraduation'],['Research','Research']])}</div><div class="resource-grid">${courses.map(c=>card(c.name,`<p class="institute">${esc(c.institute)}</p>${badge(c.level)}<p><b>Duration:</b> ${esc(c.duration)}</p><p><b>Prepare:</b> ${esc(c.prepare)}</p>${link(c.url,'Official course / institute')} `)).join('')||'<p>No listed courses match this level. Explore the research routes for relevant programme information.</p>'}</div>`,
   work:`<p class="panel-intro">Learn from real projects. The practice suggestions below are SelfLearn activities inspired by the examples.</p><div class="resource-grid">${r.work.map(w=>card(w.name,`<p>${esc(w.description)}</p><p class="try-it"><b>Try this:</b> ${esc(w.tryIt)}</p>${link(w.url,'Explore the work')}`)).join('')}</div>`,
   jobs:`<p class="panel-intro">Example employers and organisations with official career portals. Search current vacancies by role, location and experience; these links do not guarantee a vacancy, internship or selection.</p><div class="resource-grid">${r.employers.map(e=>card(e.name,`<p><b>Roles to explore:</b> ${esc(e.roles)}</p><p><b>Build toward it:</b> ${esc(e.prepare)}</p>${link(e.url,'Official career portal')}`)).join('')}</div>`,
   enterprise:`<p class="panel-intro">Ideas to explore, then validate with real users. At school, begin with supervised prototypes and simulated budgets. Adult ventures need appropriate agreements, records and role-specific compliance.</p><div class="resource-grid">${r.enterprise.map(([title,description])=>card(title,`<p>${esc(description)}</p>`)).join('')}</div><div class="venture-support"><strong>Learn → validate → prototype → cost → launch → improve</strong><p>Start with a small problem and evidence of demand. Look for mentoring before taking on financial commitments.</p>${link('https://www.startupindia.gov.in/','Startup India · learning, mentoring & startup resources')} · ${link('https://www.ecell.in/','E-Cell IIT Bombay · entrepreneurship programmes')}</div>`,
   opportunities:`<div class="panel-head"><p>National and international competitions, programmes and funding routes. This is a discovery directory; verify the current cycle, eligibility, deadlines and entry costs on the organiser’s site.</p>${filters('opportunity-scope',scope,[['all','National & international'],['National','National'],['International','International']])}</div><div class="resource-grid">${opps.map(o=>card(o.name,`${badge(o.scope)} ${badge(o.type)}<p><b>Stage:</b> ${esc(o.stage)}</p><p><b>Who can apply:</b> ${esc(o.eligibility)}</p><p><b>How to prepare:</b> ${esc(o.prepare)}</p>${link(o.url,'Official rules & current cycle')}`)).join('')}</div>`,
   research:`<p class="panel-intro">Research can begin with a supervised project. Postgraduate or doctoral study is one route; it is optional for many careers. Check entry qualifications, supervisor fit, funding and ethical requirements.</p><div class="resource-grid">${r.research.map(re=>card(re.name,`<p><b>Explore:</b> ${esc(re.area)}</p><p><b>Prepare:</b> ${esc(re.prepare)}</p>${link(re.url,'Official research / programme information')}`)).join('')}</div><div class="venture-support"><strong>Explore international study and research support</strong><p>Match your subject, study level, country eligibility and language requirements to a specific call.</p>${link(D.globalOpportunities[0].url,'DAAD · scholarships and research funding')}</div>`
  };
  $('resource-panels').innerHTML=categories.map(([id,label])=>`<section id="resource-${id}" class="resource-panel" aria-label="${label}" ${id===resource?'':'hidden'}><h3 class="print-panel-title">${label}</h3>${parts[id]}</section>`).join('');
 }
 function selectResource(id,scroll=false){resource=id;renderResources();if(scroll){$('resources').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});$('resource-nav').querySelector(`[data-resource="${id}"]`).focus();}}
 $('resource-nav').addEventListener('click',e=>{const b=e.target.closest('[data-resource]');if(b)selectResource(b.dataset.resource);});
 $('detail').addEventListener('click',e=>{const b=e.target.closest('[data-resource-jump]');if(b)selectResource(b.dataset.resourceJump,true);});
 $('resource-panels').addEventListener('change',e=>{if(e.target.id==='course-level'){courseLevel=e.target.value;renderResources();$('course-level').focus();}if(e.target.id==='opportunity-scope'){scope=e.target.value;renderResources();$('opportunity-scope').focus();}});
 $('interests').addEventListener('click',e=>{const b=e.target.closest('[data-interest]');if(!b)return;savePlan(true);career=D.careers.find(c=>c.id===b.dataset.interest);stage=startingStage();render();$('interests').querySelector(`[data-interest="${career.id}"]`).focus();});
 $('class').addEventListener('change',()=>{savePlan(true);grade=Number($('class').value);stage=startingStage();render();});
 $('roadmap').addEventListener('click',e=>{const b=e.target.closest('[data-stage]');if(!b)return;stage=Number(b.dataset.stage);renderRoadmap();$('roadmap').querySelector(`[data-stage="${stage}"]`).focus();});
 $('save').addEventListener('click',()=>savePlan());
 $('note').addEventListener('input',()=>{$('status').textContent='Unsaved changes — select Save my plan.';});
 $('done').addEventListener('change',()=>savePlan());
 $('print').addEventListener('click',()=>{savePlan(true);window.print();});
 $('share').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);$('share').textContent='Journey link copied ✓';}catch{$('status').textContent='Copy the address from your browser to share this class and career journey.';}});
 window.addEventListener('beforeunload',()=>savePlan(true));
 render();
})();

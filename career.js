(() => {
 'use strict';
 const D=window.CareerData, $=id=>document.getElementById(id), params=new URLSearchParams(location.search);
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let career=D.careers.find(c=>c.id===params.get('interest'))||D.careers[0];
 let grade=Number(params.get('class'));
 if(!Number.isInteger(grade)||grade<6||grade>13)grade=6;
 const startingStage=()=>grade<=8?0:grade<=10?1:grade<=12?2:3;
 let stage=startingStage();
 $('class').value=String(grade);
 const key=()=>`sl-career-plan-v1:${career.id}:${grade}`;
 function loadPlan(){let p={};try{p=JSON.parse(localStorage.getItem(key())||'{}')||{};}catch{}$('note').value=typeof p.note==='string'?p.note.slice(0,600):'';$('done').checked=p.done===true;$('status').textContent='';}
 function savePlan(silent=false){try{localStorage.setItem(key(),JSON.stringify({note:$('note').value,done:$('done').checked}));if(!silent)$('status').textContent='Saved in this browser. Your next step is ready.';}catch{if(!silent)$('status').textContent='This browser cannot save your plan. You can still print it or copy your note.';}}
 function updateURL(){const u=new URL(location.href);u.searchParams.set('interest',career.id);u.searchParams.set('class',grade);history.replaceState(null,'',u);}
 function renderDetail(){const s=D.stages[stage],step=career.steps[stage];$('detail').innerHTML=`<div class="detail-header"><span aria-hidden="true">${s.icon}</span><div><p>${s.label}${stage===startingStage()?' · Your starting stage':''}</p><h2 id="detail-title">${s.title}</h2></div></div><div class="detail-grid">${['What to prepare','When to prepare','How to practise'].map((h,i)=>`<div><h3>${h}</h3><p>${esc(step[i])}</p></div>`).join('')}</div><div class="evidence"><strong>A milestone to aim for →</strong> ${esc(step[3])}</div>`;}
 function renderRoadmap(){ $('roadmap').innerHTML=D.stages.map((s,i)=>`<button class="milestone ${i===startingStage()?'current':''}" data-stage="${i}" aria-pressed="${i===stage}" aria-controls="detail"><span class="number">0${i+1}</span><small>${s.label}</small><strong>${s.title}</strong><span class="symbol" aria-hidden="true">${s.icon}</span><small>${i===stage?'Viewing this milestone':'Explore milestone →'}</small></button>`).join('');renderDetail();}
 function render(){
  $('interests').innerHTML=D.careers.map(c=>`<button class="interest" data-interest="${c.id}" aria-pressed="${c.id===career.id}"><b aria-hidden="true">${c.icon}</b>${c.name}</button>`).join('');
  $('journey-title').textContent=`Your journey to becoming a ${career.destination}`;
  $('journey-intro').textContent=career.intro;
  renderRoadmap();
  $('branches').innerHTML=career.branches.map((b,i)=>`<article class="branch"><span>Possibility 0${i+1}</span><h3>${esc(b[0])}</h3><p>${esc(b[1])}</p></article>`).join('');
  $('routes').innerHTML=career.routes.map(r=>`<div class="route"><strong>${esc(r[0])}</strong><p>${esc(r[1])}</p></div>`).join('');
  $('challenge').textContent=startingStage()===0?career.challenge:`Take one small part of this stage’s practice and try it this week: ${career.steps[startingStage()][2]}`;
  $('learning-link').href=career.link;
  $('sources').innerHTML=career.sources.map(s=>`<a href="${esc(s[1])}" target="_blank" rel="noopener noreferrer">${esc(s[0])} ↗</a>`).join('');
  loadPlan();updateURL();
 }
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

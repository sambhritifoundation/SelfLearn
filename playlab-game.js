/* Assembly engine. State is separate from the UI so future activities can use their own engine. */
(function () {
  'use strict';
  const data = window.PlayLabData, key = 'selflearn.playlab.computer.v1';
  function fresh() { return {version:1,language:'en',current:0,runs:data.levels.map(l=>({placed:[...(l.prefilled||[])],mistakes:0,hints:0,complete:false,score:0}))}; }
  function valid(s) {
    return s && s.version===1 && ['en','hi'].includes(s.language) && Number.isInteger(s.current) && s.current>=0 && s.current<5 && Array.isArray(s.runs) && s.runs.length===5 && s.runs.every((r,i)=>r && Array.isArray(r.placed) && new Set(r.placed).size===r.placed.length && r.placed.every(p=>data.levels[i].parts.includes(p)) && (data.levels[i].prefilled||[]).every(p=>r.placed.includes(p)) && ['mistakes','hints','score'].every(k=>Number.isInteger(r[k])&&r[k]>=0&&r[k]<=100000) && typeof r.complete==='boolean' && (!r.complete || r.placed.length===data.levels[i].parts.length)) && s.runs.every((r,i)=>!r.complete || s.runs.slice(0,i).every(x=>x.complete)) && (s.current===0 || s.runs.slice(0,s.current).every(r=>r.complete));
  }
  let state=fresh(), saving=true;
  try { const raw=localStorage.getItem(key); if(raw){const parsed=JSON.parse(raw);if(valid(parsed))state=parsed;} } catch (_) { saving=false; }
  function save(){try{localStorage.setItem(key,JSON.stringify(state));saving=true;}catch(_){saving=false;}}
  function run(){return state.runs[state.current];}
  function unlocked(i){return Number.isInteger(i) && i>=0 && i<data.levels.length && (i===0 || state.runs.slice(0,i).every(r=>r.complete));}
  function place(part,slot){
    const r=run(),level=data.levels[state.current];
    if(r.complete || !level.parts.includes(part) || !level.parts.includes(slot))return 'inactive';
    if(r.placed.includes(slot))return 'occupied';
    if(part!==slot){r.mistakes++;save();return 'wrong';}
    if(['cpu','ram','storage','cooler'].includes(part)&&!r.placed.includes('motherboard'))return 'board-first';
    if(part==='cooler'&&!r.placed.includes('cpu'))return 'cpu-first';
    r.placed.push(part);save();return 'correct';
  }
  function answer(index){const r=run(),l=data.levels[state.current];if(r.complete||r.placed.length!==l.parts.length)return false;if(index!==l.answer){r.mistakes++;save();return false;}r.complete=true;r.score=Math.max(40,100-r.mistakes*10-r.hints*5);save();return true;}
  window.PlayLabGame={get state(){return state;},get saving(){return saving;},run,unlocked,place,answer,save,
    choose(i){if(unlocked(i)){state.current=i;save();return true;}return false;},
    hint(){if(!run().complete){run().hints++;save();}},
    language(lang){state.language=lang;save();},
    reset(){state=fresh();save();},valid};
})();

/* Versioned assembly, connection and diagnostic learning state. */
(function () {
  'use strict';
  const data=window.PlayLabData,key='selflearn.playlab.computer.v1';
  const connections=i=>data.connections.filter(c=>i>=c.min);
  function fresh(){return {version:2,language:'en',current:0,repairs:[],transfer:false,runs:data.levels.map(l=>({placed:[...(l.prefilled||[])],cables:[],booted:false,mistakes:0,hints:0,complete:false,score:0}))};}
  function valid(s){
    if(!s||![1,2].includes(s.version)||!['en','hi'].includes(s.language)||!Number.isInteger(s.current)||s.current<0||s.current>=5||!Array.isArray(s.runs)||s.runs.length!==5)return false;
    if(!s.runs.every((r,i)=>r&&Array.isArray(r.placed)&&new Set(r.placed).size===r.placed.length&&r.placed.every(p=>data.levels[i].parts.includes(p))&&(data.levels[i].prefilled||[]).every(p=>r.placed.includes(p))&&['mistakes','hints','score'].every(k=>Number.isInteger(r[k])&&r[k]>=0&&r[k]<=100000)&&typeof r.complete==='boolean'&&(!r.complete||r.placed.length===data.levels[i].parts.length)))return false;
    if(!s.runs.every((r,i)=>!r.complete||s.runs.slice(0,i).every(x=>x.complete))||!s.runs.slice(0,s.current).every(r=>r.complete))return false;
    if(s.version===1)return true;
    return Array.isArray(s.repairs)&&new Set(s.repairs).size===s.repairs.length&&s.repairs.every(id=>data.repairs.some(x=>x.id===id))&&typeof s.transfer==='boolean'&&s.runs.every((r,i)=>Array.isArray(r.cables)&&new Set(r.cables).size===r.cables.length&&r.cables.every(id=>connections(i).some(c=>c.id===id&&r.placed.includes(c.from)&&r.placed.includes(c.to)))&&typeof r.booted==='boolean'&&(!(r.booted||r.complete)||(r.booted&&r.placed.length===data.levels[i].parts.length&&r.cables.length===connections(i).length)));
  }
  let state=fresh(),saving=true;
  try{const raw=localStorage.getItem(key);if(raw){const parsed=JSON.parse(raw);if(valid(parsed)){state=parsed;if(state.version===1){state.version=2;state.repairs=[];state.transfer=false;state.runs.forEach((r,i)=>{r.cables=r.complete?connections(i).map(c=>c.id):[];r.booted=r.complete;});}}}}catch(_){saving=false;}
  function save(){try{localStorage.setItem(key,JSON.stringify(state));saving=true;}catch(_){saving=false;}}
  const run=()=>state.runs[state.current];
  const unlocked=i=>Number.isInteger(i)&&i>=0&&i<5&&(i===0||state.runs.slice(0,i).every(r=>r.complete));
  function place(part,slot){const r=run(),l=data.levels[state.current];if(r.complete||!l.parts.includes(part)||!l.parts.includes(slot))return 'inactive';if(r.placed.includes(slot))return 'occupied';if(part!==slot){r.mistakes++;save();return 'wrong';}if(['cpu','ram','storage','cooler'].includes(part)&&!r.placed.includes('motherboard'))return 'board-first';if(part==='cooler'&&!r.placed.includes('cpu'))return 'cpu-first';r.placed.push(part);r.booted=false;save();return 'correct';}
  function connect(id,port){const r=run(),c=connections(state.current).find(x=>x.id===id);if(!c||r.complete)return 'inactive';if(r.cables.includes(id))return 'connected';if(!r.placed.includes(c.from)||!r.placed.includes(c.to))return 'parts-first';if(port!==id){r.mistakes++;save();return 'wrong';}r.cables.push(id);r.booted=false;save();return 'correct';}
  function powerOn(){const r=run(),missing=data.levels[state.current].parts.filter(p=>!r.placed.includes(p)),cables=connections(state.current).filter(c=>!r.cables.includes(c.id));if(missing.length||cables.length)return {ok:false,missing,cables:cables.map(c=>c.id)};r.booted=true;save();return {ok:true,missing:[],cables:[]};}
  function answer(index){const r=run(),l=data.levels[state.current];if(r.complete||!r.booted||r.placed.length!==l.parts.length)return false;if(index!==l.answer){r.mistakes++;save();return false;}r.complete=true;r.score=Math.max(40,100-r.mistakes*10-r.hints*5);save();return true;}
  function repair(id,index){if(!state.runs.every(r=>r.complete))return false;const q=data.repairs.find(x=>x.id===id);if(!q||q.answer!==index)return false;if(!state.repairs.includes(id))state.repairs.push(id);save();return true;}
  function transfer(index){if(!state.runs.every(r=>r.complete)||index!==data.transfer.answer)return false;state.transfer=true;save();return true;}
  window.PlayLabGame={get state(){return state;},get saving(){return saving;},run,connections,unlocked,place,connect,powerOn,answer,repair,transfer,save,valid,
    choose(i){if(unlocked(i)){state.current=i;save();return true;}return false;},
    hint(){if(!run().complete){run().hints++;save();}},language(lang){if(['en','hi'].includes(lang)){state.language=lang;save();}},reset(){state=fresh();save();}};
})();

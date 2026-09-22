(function(){
  "use strict";
  function L(x){return x?(x[window.LANG]||x.en):"";}
  function E(x){return String(x==null?"":x).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
  function key(ch){var raw="sl_compapp_practical_"+ch;try{return typeof window.PK==="function"?window.PK(raw):raw;}catch(e){return raw;}}
  function load(ch){try{return JSON.parse(localStorage.getItem(key(ch))||"{}");}catch(e){return{};}}
  function save(ch,s){try{localStorage.setItem(key(ch),JSON.stringify(s));}catch(e){}}
  function allItems(p){return(p.steps||[]).map(function(x,i){return{kind:"step",index:i,text:x};}).concat((p.quality||[]).map(function(x,i){return{kind:"quality",index:i,text:x};}));}
  function itemId(x){return x.kind+"-"+x.index;}
  function progress(ch,p){var s=load(ch),items=allItems(p),done=items.filter(function(x){return s[itemId(x)];}).length;return{done:done,total:items.length,pct:items.length?Math.round(done*100/items.length):0};}
  function checklist(ch,p,kind,title){
    var s=load(ch),items=allItems(p).filter(function(x){return x.kind===kind;});
    return'<section class="ca-practical-block"><h2>'+title+'</h2><div class="ca-task-list">'+items.map(function(x){var id=itemId(x);return'<label class="ca-task"><input type="checkbox" '+(s[id]?"checked":"")+' onchange="compappPracticalCheck('+ch+',\''+id+'\',this.checked)"><span><b>'+E(kind==="step"?String(x.index+1):"✓")+'</b>'+E(L(x.text))+'</span></label>';}).join("")+'</div></section>';
  }
  window.renderComputerApplicationPractical=function(chapter){
    var p=chapter&&chapter.practical;if(!p)return"";var pr=progress(chapter.no,p),s=load(chapter.no);
    return'<section class="ca-practical" data-ca-chapter="'+chapter.no+'"><div class="ca-practical-hero"><div><span class="chip green">'+(window.LANG==="hi"?"Office simulation":"Office simulation")+'</span><h2>'+(window.LANG==="hi"?"काम करके skill साबित करें":"Prove the skill by doing the work")+'</h2><p>'+E(L(p.scenario))+'</p></div><div class="ca-time"><b>'+E(L(p.time))+'</b><span>'+(window.LANG==="hi"?"Suggested time":"Suggested time")+'</span></div></div>'+
      '<div class="ca-deliverable"><b>'+(window.LANG==="hi"?"Deliverable":"Deliverable")+'</b><p>'+E(L(p.output))+'</p></div>'+
      '<section class="ca-practical-block"><h2>'+(window.LANG==="hi"?"शुरू करने से पहले":"Before you start")+'</h2><ul class="ca-tool-list">'+(p.tools||[]).map(function(x){return'<li>'+E(L(x))+'</li>';}).join("")+'</ul></section>'+
      '<div class="ca-progress-card"><div><b>'+(window.LANG==="hi"?"Activity progress":"Activity progress")+'</b><span id="caPracticalCount">'+pr.done+' / '+pr.total+'</span></div><div class="ca-progress-track"><i id="caPracticalBar" style="width:'+pr.pct+'%"></i></div><p id="caPracticalMessage">'+(pr.pct===100?(window.LANG==="hi"?"Checklist complete — evidence और files final review करें।":"Checklist complete — give the evidence and files one final review."):(window.LANG==="hi"?"हर step असली computer पर पूरा होने के बाद tick करें।":"Tick each item only after completing it on the real computer."))+'</p></div>'+
      checklist(chapter.no,p,"step",window.LANG==="hi"?"Guided work steps":"Guided work steps")+
      '<section class="ca-practical-block"><h2>'+(window.LANG==="hi"?"Evidence save करें":"Save evidence")+'</h2><div class="ca-evidence-list">'+(p.evidence||[]).map(function(x){return'<span>📎 '+E(L(x))+'</span>';}).join("")+'</div><label class="ca-evidence-note">'+(window.LANG==="hi"?"File names, confirmation number या trainer note":"File names, confirmation number or trainer note")+'<textarea rows="4" oninput="compappPracticalEvidence('+chapter.no+',this.value)" placeholder="'+(window.LANG==="hi"?"Evidence location लिखें; password, OTP या confidential data नहीं।":"Record where the evidence is saved; never enter a password, OTP or confidential data.")+'">'+E(s.evidence||"")+'</textarea></label></section>'+
      checklist(chapter.no,p,"quality",window.LANG==="hi"?"Quality check before handover":"Quality check before handover")+
      '<div class="ca-practical-actions"><button class="btn ghost" type="button" onclick="window.print()">🖨 '+(window.LANG==="hi"?"Activity brief print करें":"Print activity brief")+'</button><button class="btn ghost" type="button" onclick="compappPracticalReset('+chapter.no+')">↺ '+(window.LANG==="hi"?"Checklist reset करें":"Reset checklist")+'</button></div></section>';
  };
  window.compappPracticalCheck=function(ch,id,on){var s=load(ch);s[id]=!!on;save(ch,s);var subject=(window.SL_DATA.subjects||[]).find(function(x){return x.code==="COMPAPP";}),chapter=subject&&subject.chapters.find(function(x){return x.no===ch;});if(!chapter||!chapter.practical)return;var p=progress(ch,chapter.practical),bar=document.getElementById("caPracticalBar"),count=document.getElementById("caPracticalCount"),msg=document.getElementById("caPracticalMessage");if(bar)bar.style.width=p.pct+"%";if(count)count.textContent=p.done+" / "+p.total;if(msg)msg.textContent=p.pct===100?(window.LANG==="hi"?"Checklist complete — evidence और files final review करें।":"Checklist complete — give the evidence and files one final review."):(window.LANG==="hi"?"हर step असली computer पर पूरा होने के बाद tick करें।":"Tick each item only after completing it on the real computer.");};
  window.compappPracticalEvidence=function(ch,value){var s=load(ch);s.evidence=value;save(ch,s);};
  window.compappPracticalReset=function(ch){if(!confirm(window.LANG==="hi"?"इस activity के checks और evidence note reset करें?":"Reset this activity's checks and evidence note?"))return;try{localStorage.removeItem(key(ch));}catch(e){}if(typeof window.go==="function")window.go("assignment",{code:"COMPAPP",chapter:ch});};
})();

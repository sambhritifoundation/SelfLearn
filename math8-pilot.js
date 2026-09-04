/* Additive Class 8 adapter. Other courses retain their existing behaviour. */
(function () {
  'use strict';
  var api = window.SL8 = {};
  function B(en,hi){return LANG==='hi'?hi:en;}
  function is8(){return !!(QUIZ && QUIZ.qs.length && QUIZ.qs[0].subject==='MATH8');}
  function svg(inner,label){return '<svg viewBox="0 0 360 290" role="img" aria-label="'+esc(label)+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg>';}
  function grid(n,old,label){
    var size=220/n, h='';
    for(var row=0;row<n;row++) for(var col=0;col<n;col++){
      var border=old!=null && (row>=old||col>=old);
      h+='<rect x="'+(70+col*size)+'" y="'+(35+row*size)+'" width="'+(size-1)+'" height="'+(size-1)+'" fill="'+(border?'#b15e00':'#245c97')+'" stroke="white" stroke-width="1"/>';
    }
    h+='<text x="180" y="22" text-anchor="middle" font-size="19" fill="currentColor">'+n+' × '+n+'</text>';
    h+='<text x="180" y="281" text-anchor="middle" font-size="19" fill="currentColor">'+esc(label)+'</text>';
    return svg(h,label);
  }
  function eq(s){return '<div class="m8-equation">'+s+'</div>';}
  function primes(n){var p=[]; for(var d=2;d*d<=n;d++){while(n%d===0){p.push(d);n/=d;}} if(n>1)p.push(n); return p;}
  api.factorInfo=function(n,size){
    var ps=primes(n),counts={},groups=[],root=1,mul=1,div=1;
    ps.forEach(function(p){counts[p]=(counts[p]||0)+1;});
    Object.keys(counts).forEach(function(k){var c=counts[k],p=+k;root*=Math.pow(p,Math.floor(c/size));var rem=c%size;
      if(rem){mul*=Math.pow(p,size-rem);div*=Math.pow(p,rem);}
      for(var i=0;i<c;i+=size)groups.push({p:p,count:Math.min(size,c-i)});
    });
    return {primes:ps,groups:groups,root:root,multiplier:mul,divisor:div,perfect:mul===1};
  };
  function factors(n,size){
    var f=api.factorInfo(n,size),h=eq(n+' = '+f.primes.join(' × '));
    h+='<div class="m8-groups">'+f.groups.map(function(g){return '<span class="m8-group '+(g.count<size?'incomplete':'')+'">'+Array(g.count).fill(g.p).join(' × ')+(g.count<size?' · '+B('missing ','कमी ')+(size-g.count):'')+'</span>';}).join('')+'</div>';
    h+='<p>'+B(size===2?'Make pairs of equal primes.':'Make triples of equal primes.',size===2?'बराबर primes की जोड़ियाँ बनाइए।':'बराबर primes के triples बनाइए।')+'</p>';
    h+=f.perfect?eq((size===2?'√':'∛')+n+' = '+f.root):eq(B('Not a perfect '+(size===2?'square':'cube')+'.','यह perfect '+(size===2?'square':'cube')+' नहीं है।'));
    if(!f.perfect)h+='<p>'+B('Smallest positive whole-number multiplier: ','सबसे छोटा धनात्मक whole-number multiplier: ')+'<b>'+f.multiplier+'</b> → '+n+' × '+f.multiplier+' = '+(n*f.multiplier)+'.<br>'+B('Smallest positive whole-number divisor: ','सबसे छोटा धनात्मक whole-number divisor: ')+'<b>'+f.divisor+'</b> → '+n+' ÷ '+f.divisor+' = '+(n/f.divisor)+'.</p>';
    return h;
  }
  var configs={
    square:{title:['Build Rani’s tile square','रानी का टाइल-square बनाइए'],label:['Tiles along each side','हर side पर टाइलें'],min:1,max:12,value:4},
    pattern:{title:['Predict the next border','अगले किनारे का अंदाज़ा'],label:['Original side length','पुरानी side की लंबाई'],min:1,max:10,value:4},
    root:{title:['Area → side','Area → side'],label:['Choose an area (square units)','Area चुनिए (square units)'],options:[9,16,25,36,49,64,81,100,121,144],value:49},
    pairs:{title:['Find the lonely prime','अकेला prime खोजिए'],label:['Number of tiles','टाइलों की संख्या'],options:[36,48,72,98,144,180,196,324],value:144},
    estimate:{title:['Trap a garden’s side length','बगीचे की side की सीमा खोजिए'],label:['Garden area in m²','बगीचे का area, m²'],min:20,max:150,value:50},
    division:{title:['Predict, then reveal one step','सोचिए, फिर एक step खोलिए'],label:['Square display size','Square display की गिनती'],options:[1296,2025,2304],value:2025},
    cube:{title:['Count the layers, not just the front','सिर्फ सामने नहीं, परतें गिनिए'],label:['Cubes along each edge','हर edge पर cubes'],min:1,max:6,value:3},
    triples:{title:['Three equal factors per group','हर समूह में तीन बराबर factors'],label:['Number of unit cubes','Unit cubes की गिनती'],options:[27,64,125,216,512,1000,1728],value:216},
    complete:{title:['Supply or remove missing factors','कमी पूरी करें या अधूरा समूह हटाएँ'],label:['Number of unit cubes','Unit cubes की गिनती'],options:[16,25,32,72,108,200,250,500],value:72},
    plan:{title:['Change the school plan','स्कूल की योजना बदलें'],label:['Garden side in metres','बगीचे की side, metre में'],min:3,max:12,value:12}
  };
  function divisionSteps(n){
    var a=Math.floor(n/100),first=Math.floor(Math.sqrt(a)),working=(a-first*first)*100+n%100,second=0;
    while(second<9 && (20*first+second+1)*(second+1)<=working)second++;
    return [B('Pair from the right: ','दाईं ओर से जोड़ी: ')+a+' | '+String(n%100).padStart(2,'0'),first+'² = '+first*first+' ≤ '+a+'. '+B('First digit: ','पहला digit: ')+first,B('Subtract, then bring down: ','घटाकर अगली जोड़ी नीचे लाएँ: ')+(a-first*first)+' → '+working,B('Double the root digit and shift: ','Root digit को दोगुना कर एक स्थान आगे: ')+first+' × 2 × 10 = '+20*first,'('+20*first+' + '+second+') × '+second+' = '+working,'√'+n+' = '+(first*10+second)+'. '+B('Check: ','जाँच: ')+(first*10+second)+'² = '+n];
  }
  function output(kind,n,step){
    if(kind==='square')return grid(n,null,n*n+' '+B('tiles','टाइलें'))+eq(n+'² = '+n+' × '+n+' = '+n*n)+'<p>'+B('Area: ','Area: ')+n*n+' '+B('square units. Perimeter: ','square units। Perimeter: ')+4*n+' '+B('units.','units।')+'</p>';
    if(kind==='pattern')return grid(n+1,n,B('New border: ','नया किनारा: ')+(2*n+1))+eq('('+n+' + 1)² − '+n+'² = '+(2*n+1))+'<p>'+B('Blue: old square. Amber: two strips plus one corner.','नीला: पुराना square। भूरा: दो पट्टियाँ और एक कोना।')+' '+n+' + '+n+' + 1 = '+(2*n+1)+'</p>';
    if(kind==='root')return grid(Math.sqrt(n),null,n+' '+B('square units','square units'))+eq('√'+n+' = '+Math.sqrt(n))+'<p>'+Math.sqrt(n)+' × '+Math.sqrt(n)+' = '+n+'. '+B('This reverses squaring, not doubling.','यह squaring की उल्टी क्रिया है, दोगुना करने की नहीं।')+'</p>';
    if(kind==='pairs'||kind==='triples'||kind==='complete')return factors(n,kind==='pairs'?2:3);
    if(kind==='estimate'){
      var lo=Math.floor(Math.sqrt(n)),hi=lo+1,x=60+240*(Math.sqrt(n)-lo),s='<line x1="60" y1="135" x2="300" y2="135" stroke="currentColor" stroke-width="3"/>';
      [60,300].forEach(function(px,i){s+='<line x1="'+px+'" y1="125" x2="'+px+'" y2="145" stroke="currentColor" stroke-width="2"/><text x="'+px+'" y="172" text-anchor="middle" font-size="22" fill="currentColor">'+(lo+i)+'</text>';});
      s+='<circle cx="'+x+'" cy="135" r="7" fill="#b15e00"/><text x="180" y="90" text-anchor="middle" font-size="20" fill="currentColor">√'+n+' ≈ '+Math.sqrt(n).toFixed(2)+' m</text>';
      return svg(s,B('Root position between neighbouring whole numbers','पड़ोसी whole numbers के बीच root की जगह'))+eq(lo*lo===n?'√'+n+' = '+lo:lo+' < √'+n+' < '+hi)+'<p>'+lo+'² = '+lo*lo+'; '+hi+'² = '+hi*hi+'. '+B('The decimal display is rounded to two places. The whole-number bounds are exact.','Decimal दो स्थान तक rounded है। Whole-number सीमाएँ exact हैं।')+'</p>';
    }
    if(kind==='division'){
      var steps=divisionSteps(n),k=Math.max(1,Math.min(6,step||1));
      return '<p>'+B('Before revealing: predict the next calculation on paper.','खोलने से पहले: कागज़ पर अगला हिसाब सोचिए।')+'</p><ol>'+steps.slice(0,k).map(function(s){return '<li style="margin:10px 0">'+esc(s)+'</li>';}).join('')+'</ol><div class="m8-controls"><button class="btn sm" type="button" onclick="SL8.step(1)" '+(k===6?'disabled':'')+'>'+B('Reveal next step','अगला step खोलिए')+'</button><button class="btn ghost sm" type="button" onclick="SL8.step(0)">'+B('Start again','फिर शुरू करें')+'</button></div>';
    }
    if(kind==='cube'){
      var layers='<div class="m8-layers">';
      for(var i=0;i<n;i++)layers+='<figure>'+grid(n,null,n*n+' '+B('cubes','cubes'))+'<figcaption>'+B('Layer ','परत ')+(i+1)+' / '+n+'</figcaption></figure>';
      return layers+'</div>'+eq(n+'³ = '+n+' × '+n+' × '+n+' = '+n*n*n)+'<p>'+B('Every picture is one separate square layer. Count all layers once.','हर चित्र एक अलग square परत है। सभी परतें एक-एक बार गिनिए।')+'</p>';
    }
    if(kind==='plan'){
      return grid(n,null,B('Garden: ','बगीचा: ')+n*n+' m²')+eq('√'+n*n+' = '+n+' m; '+B('fence','बाड़')+' = '+4*n+' m')+'<p>'+B('At ₹30/m, full fencing costs ','₹30/m पर पूरी बाड़ का खर्च ')+'<b>₹'+120*n+'</b>. '+B('No gate, waste or labour included.','Gate, wastage और मजदूरी शामिल नहीं।')+'</p>'+eq(B('Separate fixed model: ','अलग स्थिर model: ')+'5³ = 125 cm³; ∛125 = 5 cm');
    }
    return '';
  }
  function lab(kind){var c=configs[kind],id='m8-input-'+kind;
    var h='<section class="m8-lab" id="m8-lab-'+kind+'" data-value="'+c.value+'" data-step="1"><h3>'+B(c.title[0],c.title[1])+'</h3><label for="'+id+'">'+B(c.label[0],c.label[1])+' <output id="m8-value-'+kind+'">'+c.value+'</output></label>';
    if(c.options)h+='<select id="'+id+'" onchange="SL8.paint(\''+kind+'\',this.value)">'+c.options.map(function(n){return '<option value="'+n+'" '+(n===c.value?'selected':'')+'>'+n+'</option>';}).join('')+'</select>';
    else h+='<input id="'+id+'" type="range" min="'+c.min+'" max="'+c.max+'" step="1" value="'+c.value+'" oninput="SL8.paint(\''+kind+'\',this.value)">';
    return h+'<div class="m8-output" aria-live="polite">'+output(kind,c.value,1)+'</div></section>';
  }
  api.paint=function(kind,value){var c=configs[kind],el=document.getElementById('m8-lab-'+kind),n=Number(value);if(!c||!el||!Number.isFinite(n))return;
    if(c.options && c.options.indexOf(n)<0)return; if(!c.options)n=Math.min(c.max,Math.max(c.min,Math.round(n)));
    el.dataset.value=n;el.dataset.step=1;document.getElementById('m8-value-'+kind).textContent=n;el.querySelector('.m8-output').innerHTML=output(kind,n,1);
  };
  api.step=function(delta){var el=document.getElementById('m8-lab-division');if(!el)return;var k=delta?Math.min(6,+el.dataset.step+1):1;el.dataset.step=k;el.querySelector('.m8-output').innerHTML=output('division',+el.dataset.value,k);var btn=el.querySelector('.m8-controls button'+(k===6?':last-child':':first-child'));if(btn)btn.focus();};
  Object.keys(configs).forEach(function(k){DIAGRAMS['m8-'+k]=function(){return lab(k);};});

  var originalTopic=vTopic;
  vTopic=function(code){var h=originalTopic(code);if(!/^M8-/.test(code))return h;var tp=topicByCode(code).topic;
    var formats=[['all','All 8 questions','सभी 8 प्रश्न'],['mcq','Single answer','एक सही उत्तर'],['multi','Multiple answers','कई सही उत्तर'],['fill','Fill blanks','खाली जगह'],['match','Match','मिलान'],['subjective','Written response','लिखित उत्तर']];
    var saved='';try{var records=JSON.parse(localStorage.getItem(PK('sl_m8_written'))||'{}');qForTopic(code).filter(function(q){return q.type==='subjective'&&records[q.id];}).forEach(function(q){var r=records[q.id];saved+='<details class="m8-transcript"><summary>'+B('Your last saved written response','आपका पिछला सहेजा हुआ लिखित उत्तर')+'</summary><p>'+esc(t(q.q))+'</p><p style="white-space:pre-wrap">'+esc(r.text)+'</p><p>'+r.checks.length+'/'+q.rubric.length+' '+B('criteria self-checked','बिंदु खुद जाँचे')+'</p></details>';});}catch(e){}
    return h+'<section class="card" style="margin-top:16px"><h3>'+B('Choose a practice format','अभ्यास का तरीका चुनिए')+'</h3><p class="m8-note">'+B('All eight questions are available, not a random sample. Written responses are self-reviewed and excluded from automatic accuracy.','आठों प्रश्न उपलब्ध हैं, random sample नहीं। लिखित उत्तर self-review हैं और automatic accuracy में शामिल नहीं हैं।')+'</p><div class="m8-formats">'+formats.map(function(f){return '<button class="btn ghost sm" onclick="SL8.practice(\''+code+'\',\''+f[0]+'\')">'+B(f[1],f[2])+'</button>';}).join('')+'</div>'+saved+'</section>';
  };
  api.practice=function(code,type){var info=topicByCode(code),qs=qForTopic(code).filter(function(q){return type==='all'||q.type===type;});if(!info||!qs.length)return;
    QUIZ={scope:'m8',key:code+'::'+type,title:t(info.topic.name),backTopic:code,backSubject:'MATH8',qs:qs,i:0,results:[],answered:false,t0:Date.now(),m8Type:type,written:{}};go('quiz');
  };
  var originalStart=startQuiz;
  startQuiz=function(scope,a,b){if(scope==='topic'&&/^M8-/.test(a)){api.practice(a,'all');return;}return originalStart(scope,a,b);};
  var originalReplay=replayQuiz;
  replayQuiz=function(){if(is8()&&QUIZ.scope==='m8'){api.practice(QUIZ.backTopic,QUIZ.m8Type);return;}originalReplay();};
  function current(){return QUIZ && QUIZ.qs[QUIZ.i];}
  var originalQuiz=vQuiz;
  vQuiz=function(){var h=originalQuiz(),q=current();if(!is8())return h;
    var body='';
    if(q.type==='multi'){
      if(QUIZ.m8OptionId!==q.id){QUIZ.m8OptionId=q.id;QUIZ.m8Order=shuffle(q.opts.en.map(function(_,i){return i;}));QUIZ.m8Selected=[];}
      body='<p class="m8-note">'+B('Select every correct answer, then check. Exact set required; no partial marks.','हर सही उत्तर चुनकर जाँचिए। सभी सही विकल्प चाहिए; आंशिक अंक नहीं।')+'</p>';
      QUIZ.m8Order.forEach(function(i){var key='ABCD'[i],checked=QUIZ.m8Selected.indexOf(key)>=0;
        body+='<label class="option m8-choice" id="m8-choice-'+key+'"><input type="checkbox" value="'+key+'" '+(checked?'checked':'')+' '+(QUIZ.answered?'disabled':'')+' onchange="SL8.select(this.value,this.checked)"><span>'+fmtInline(t(q.opts)[i])+'</span></label>';
      });body+='<button class="btn" onclick="SL8.answerMulti()" '+(QUIZ.answered?'disabled':'')+'>'+B('Check selections','चयन जाँचें')+'</button>';
    } else if(q.type==='subjective'){
      QUIZ.written=QUIZ.written||{};var w=QUIZ.written[q.id]||{text:'',checks:[],revealed:false};QUIZ.written[q.id]=w;
      body='<p class="m8-note">'+B('Explain your steps. You can work on paper and describe them here. This is self-review, not an automatic correctness judgement.','अपने steps समझाइए। कागज़ पर करके यहाँ तरीका लिख सकते हैं। यह self-review है, automatic सही-गलत का फैसला नहीं।')+'</p><label for="m8-written">'+B('Your explanation','आपकी व्याख्या')+'</label><textarea class="m8-written" id="m8-written" oninput="SL8.draft(this.value)" '+(QUIZ.answered?'readonly':'')+'>'+esc(w.text)+'</textarea><button class="btn" style="margin-top:10px" onclick="SL8.reveal()" '+(w.revealed?'disabled':'')+'>'+B('Compare with a model answer','Model उत्तर से तुलना करें')+'</button><div id="m8-review">'+(w.revealed?review(q,w):'')+'</div>';
    } else if(q.type==='fill'){
      body='<label for="shortAns">'+B('Fill the blank (number only; fractions such as 3/4 are accepted)','खाली जगह भरिए (सिर्फ संख्या; 3/4 जैसे fractions भी)')+'</label><input class="shortinput" id="shortAns" inputmode="text" autocomplete="off" onkeydown="if(event.key===\'Enter\')answerShort()"><button class="btn" style="margin-top:10px" onclick="answerShort()">'+B('Check','जाँचें')+'</button>';
    }
    if(body){var start=h.indexOf('id="qbody">')+'id="qbody">'.length,end=h.indexOf('</div><div id="exp">',start);h=h.slice(0,start)+body+h.slice(end);}
    return h;
  };
  api.select=function(letter,on){if(!is8()||QUIZ.answered)return;var a=QUIZ.m8Selected||[];QUIZ.m8Selected=a.filter(function(x){return x!==letter;});if(on)QUIZ.m8Selected.push(letter);};
  api.multiCorrect=function(selected,correct){return selected.length===correct.length && correct.every(function(x){return selected.indexOf(x)>=0;});};
  api.answerMulti=function(){if(!is8()||QUIZ.answered)return;var q=current(),sel=QUIZ.m8Selected||[];if(!sel.length){toast(B('Select at least one option first.','पहले कम-से-कम एक विकल्प चुनिए।'));return;}
    var ok=api.multiCorrect(sel,q.correct);QUIZ.m8Order.forEach(function(i){var key='ABCD'[i],row=document.getElementById('m8-choice-'+key);row.querySelector('input').disabled=true;if(q.correct.indexOf(key)>=0)row.classList.add('correct');else if(sel.indexOf(key)>=0)row.classList.add('wrong');});
    var checkButton=document.querySelector('#qbody > button');if(checkButton)checkButton.disabled=true;
    var answers=q.correct.map(function(k){return t(q.opts)['ABCD'.indexOf(k)];}).join('; ');settle(ok,q,'<p>'+B('Correct selections: ','सही विकल्प: ')+esc(answers)+'</p>');
  };
  api.numeric=function(value){var s=String(value).trim().replace(/[०-९]/g,function(c){return String(c.charCodeAt(0)-0x966);}).replace(/−/g,'-').replace(/\s+/g,'');
    if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:\/[+-]?(?:\d+(?:\.\d*)?|\.\d+))?$/.test(s))return null;var p=s.split('/'),v=Number(p[0])/(p.length===2?Number(p[1]):1);return Number.isFinite(v)?v:null;
  };
  var originalShort=answerShort;
  answerShort=function(){var q=current();if(!is8()||q.type!=='fill')return originalShort();if(QUIZ.answered)return;var el=document.getElementById('shortAns'),v=api.numeric(el.value);
    if(v===null){toast(B('Enter a number or fraction, without units.','बिना units के संख्या या fraction लिखिए।'));return;}
    var ok=String(q.correct).split('|').some(function(a){return Math.abs(api.numeric(a)-v)<1e-9;});el.disabled=true;settle(ok,q,ok?'':'<p>'+B('Answer: ','उत्तर: ')+esc(String(q.correct).split('|')[0])+'</p>');
  };
  api.draft=function(text){if(!QUIZ.answered)QUIZ.written[current().id].text=text;};
  function review(q,w){return '<div class="m8-feedback"><h3>'+B('One possible answer','एक संभावित उत्तर')+'</h3><p>'+fmtInline(t(q.model))+'</p><p>'+B('Tick only what your own answer includes. Unticked points show what to improve.','अपने उत्तर में जो है, सिर्फ वही tick करें। बाकी बिंदु बताते हैं कहाँ सुधार करें।')+'</p>'+q.rubric.map(function(r,i){return '<label class="m8-rubric"><input type="checkbox" '+(w.checks.indexOf(i)>=0?'checked':'')+' '+(QUIZ.answered?'disabled':'')+' onchange="SL8.rubric('+i+',this.checked)">'+esc(t(r))+'</label>';}).join('')+'<button class="btn" onclick="SL8.finishWritten()" '+(QUIZ.answered?'disabled':'')+'>'+B('Finish self-review','Self-review पूरा करें')+'</button></div>';}
  api.reveal=function(){if(QUIZ.answered)return;var q=current(),w=QUIZ.written[q.id];if(w.text.trim().length<3){toast(B('Write your attempt first, even if unfinished.','पहले अपनी कोशिश लिखिए, अधूरी हो तो भी।'));return;}w.revealed=true;document.getElementById('m8-review').innerHTML=review(q,w);};
  api.rubric=function(i,on){if(QUIZ.answered)return;var w=QUIZ.written[current().id];w.checks=w.checks.filter(function(x){return x!==i;});if(on)w.checks.push(i);};
  api.finishWritten=function(){if(QUIZ.answered)return;var q=current(),w=QUIZ.written[q.id];if(!w||!w.revealed)return;
    QUIZ.results[QUIZ.i]='reviewed';QUIZ.answered=true;
    document.getElementById('m8-written').readOnly=true;document.getElementById('m8-review').innerHTML=review(q,w);
    var saved=true;try{var records=JSON.parse(localStorage.getItem(PK('sl_m8_written'))||'{}');records[q.id]={text:w.text,checks:w.checks,date:Date.now()};localStorage.setItem(PK('sl_m8_written'),JSON.stringify(records));}catch(e){saved=false;}
    document.getElementById('exp').innerHTML='<p class="m8-feedback">'+B('Self-review complete: ','Self-review पूरा: ')+w.checks.length+'/'+q.rubric.length+' '+B('criteria checked. Not included in automatic accuracy.','बिंदु tick किए। Automatic accuracy में शामिल नहीं।')+' '+(saved?B('Saved in this browser profile.','इस browser profile में सहेजा गया।'):B('Browser storage is unavailable; copy your work before leaving.','Browser में save नहीं हो सका; जाने से पहले काम copy कर लें।'))+'</p>';
    var nb=document.getElementById('nextBtn');nb.style.display='inline-block';nb.textContent=QUIZ.i===QUIZ.qs.length-1?B('See results →','परिणाम देखें →'):B('Next →','अगला →');
  };
  var originalRender=render;
  render=function(){originalRender();if(VIEW.name==='quiz'&&is8()&&QUIZ.answered){var q=current(),r=QUIZ.results[QUIZ.i];
      if(q.type==='subjective'){var nb=document.getElementById('nextBtn');if(nb){nb.style.display='inline-block';nb.textContent=B('Next →','अगला →');}return;}
      var body=document.getElementById('qbody');if(body)body.querySelectorAll('input,select,button').forEach(function(el){el.disabled=true;});showExplanation(r===true,q);
    }};
  var originalNext=nextQ;
  nextQ=function(){if(!is8())return originalNext();if(!QUIZ.answered)return;if(QUIZ.i<QUIZ.qs.length-1){QUIZ.i++;QUIZ.answered=false;render();window.scrollTo(0,0);return;}
    var scored=QUIZ.results.filter(function(r){return typeof r==='boolean';}),score=scored.filter(Boolean).length;
    if(scored.length)saveSession({date:Date.now(),key:QUIZ.key,score:score,total:scored.length});go('result');
  };
  var originalResult=vResult;
  vResult=function(){if(!is8())return originalResult();var scored=QUIZ.results.filter(function(r){return typeof r==='boolean';}),correct=scored.filter(Boolean).length,reviewed=QUIZ.results.filter(function(r){return r==='reviewed';}).length;
    var h='<section class="card m8-results"><h1>'+B('Practice complete','अभ्यास पूरा')+'</h1><p>'+esc(QUIZ.title)+'</p><div class="m8-equation">'+(scored.length?correct+' / '+scored.length+' '+B('automatically scored','automatic जाँच'):B('Written practice · no automatic score','लिखित अभ्यास · automatic score नहीं'))+'</div><p>'+reviewed+' '+B('written responses self-reviewed. These do not count as right or wrong in your accuracy.','लिखित उत्तर self-review किए। ये accuracy में सही या गलत नहीं गिने जाते।')+'</p><h2>'+B('Review your reasoning','अपना तरीका दोहराइए')+'</h2>';
    QUIZ.qs.forEach(function(q,i){var r=QUIZ.results[i],w=QUIZ.written&&QUIZ.written[q.id];h+='<details><summary>'+B(r==='reviewed'?'Self-reviewed':r===true?'Correct':'Revisit',r==='reviewed'?'Self-review':r===true?'सही':'दोहराएँ')+' · '+fmtInline(t(q.q))+'</summary>'+(w?'<h3>'+B('Your response','आपका उत्तर')+'</h3><p style="white-space:pre-wrap">'+esc(w.text)+'</p><p>'+w.checks.length+'/'+q.rubric.length+' '+B('criteria checked','बिंदु tick किए')+'</p>':'')+'<p>'+fmtInline(t(q.exp))+'</p></details>';});
    h+='<div class="m8-controls"><button class="btn" onclick="go(\'subject\',{code:\'MATH8\'})">'+B('Chapter topics','Chapter के topics')+'</button>';
    if(QUIZ.backTopic)h+='<button class="btn ghost" onclick="go(\'topic\',{code:\''+QUIZ.backTopic+'\'})">'+B('Back to this lesson','इस पाठ पर लौटें')+'</button><button class="btn ghost" onclick="SL8.practice(\''+QUIZ.backTopic+'\',\''+(QUIZ.m8Type||'all')+'\')">'+B('Practise again','फिर अभ्यास')+'</button>';
    else h+='<button class="btn ghost" onclick="startAssessment(\'MATH8\',1)">'+B('Try chapter assignment','Chapter असाइनमेंट करें')+'</button>';
    return h+'</div></section>';
  };
  // Prevent the legacy form from destroying rich fields; preserve JSON in exports.
  var originalAdminEdit=adminEdit;
  adminEdit=function(){var q=EDIT_ID&&allQuestions().find(function(x){return x.id===EDIT_ID;});if(q&&q.subject==='MATH8')return '<div class="card"><h2>'+esc(q.id)+'</h2><p>This pilot is authored in data-math8.js. The legacy form cannot safely edit multi-answer, matching or rubric fields. Spreadsheet exports preserve the full record in question_json.</p><pre style="white-space:pre-wrap;overflow-wrap:anywhere">'+esc(JSON.stringify(q,null,2))+'</pre></div>';return originalAdminEdit();};
  var originalQToRow=qToRow,originalRowToQ=rowToQ;
  HEADERS.push('question_json');
  qToRow=function(q){var row=originalQToRow(q);row.push(q.subject==='MATH8'?JSON.stringify(q):'');return row;};
  rowToQ=function(r){if(r.question_json){try{var q=JSON.parse(r.question_json);if(q.subject==='MATH8'&&api.validQuestion(q))return q;return null;}catch(e){return null;}}return originalRowToQ(r);};
  api.validQuestion=function(q){if(!q||!/^M8-Q\d+$/.test(q.id)||q.subject!=='MATH8'||!topicByCode(q.topic)||!q.q||!q.q.en||!q.q.hi||!q.exp||!q.exp.en||!q.exp.hi||['published','draft','review'].indexOf(q.status)<0)return false;
    if(q.type==='multi'||q.type==='mcq'){if(!q.opts||!Array.isArray(q.opts.en)||q.opts.en.length!==4||!Array.isArray(q.opts.hi)||q.opts.hi.length!==4)return false;var keys=q.type==='multi'?q.correct:[q.correct];return Array.isArray(keys)&&keys.length>0&&new Set(keys).size===keys.length&&keys.every(function(k){return /^[A-D]$/.test(k);});}
    if(q.type==='fill')return String(q.correct).split('|').every(function(v){return api.numeric(v)!==null;});
    if(q.type==='match')return Array.isArray(q.pairs)&&q.pairs.length>1&&q.pairs.every(function(p){return p.l&&p.l.en&&p.l.hi&&p.r&&p.r.en&&p.r.hi;});
    if(q.type==='subjective')return q.model&&q.model.en&&q.model.hi&&Array.isArray(q.rubric)&&q.rubric.length>0&&q.rubric.every(function(r){return r.en&&r.hi;});return false;
  };
  if(location.hash==='#math8')go('subject',{code:'MATH8'});else render();
}());

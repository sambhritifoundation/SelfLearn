/* Additive Class 8 adapter. Other courses retain their existing behaviour. */
(function () {
  'use strict';
  var api = window.SL8 = {};
  function B(en,hi){return LANG==='hi'?hi:en;}
  function is8(){return !!(QUIZ && QUIZ.qs.length && ['MATH8','SCI8'].indexOf(QUIZ.qs[0].subject)>=0);}
  function richCode(code){return /^(?:M8|S8)-/.test(code||'');}
  function richSubject(code){var info=topicByCode(code);return info&&info.subject?info.subject.code:'MATH8';}
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

  function sx(x,y,value,size,anchor,fill){return '<text x="'+x+'" y="'+y+'" text-anchor="'+(anchor||'middle')+'" font-size="'+(size||16)+'" fill="'+(fill||'currentColor')+'">'+esc(String(value))+'</text>';}
  function boxRow(items,y,colors){
    var gap=8,w=(300-gap*(items.length-1))/items.length;
    return items.map(function(item,i){var x=30+i*(w+gap);return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="58" rx="7" fill="'+((colors&&colors[i])||'var(--primary-light)')+'" stroke="var(--primary)" stroke-width="2"/>'+sx(x+w/2,y+35,item,Math.max(11,Math.min(17,150/(String(item).length+5))));}).join('');
  }
  function segmentBar(values,labels,y){
    var total=values.reduce(function(a,b){return a+b;},0),x=30,h='';
    values.forEach(function(v,i){var w=300*v/total;h+='<rect x="'+x+'" y="'+y+'" width="'+w+'" height="62" fill="'+(i%2?'#f59e0b':'#4f46e5')+'" stroke="#fff" stroke-width="2"/>'+sx(x+w/2,y+37,labels[i],14,'middle','#fff');x+=w;});
    return h;
  }
  function plotSvg(values,line){
    var max=Math.max.apply(null,values),h='<line x1="42" y1="240" x2="330" y2="240" stroke="#334155" stroke-width="2"/><line x1="42" y1="35" x2="42" y2="240" stroke="#334155" stroke-width="2"/>',pts=[];
    values.forEach(function(v,i){var x=75+i*(240/Math.max(1,values.length-1)),y=225-v/max*165;pts.push(x+','+y);if(line)h+='<circle cx="'+x+'" cy="'+y+'" r="6" fill="#4f46e5"/>'+sx(x,260,i+1,13);else h+='<rect x="'+(x-18)+'" y="'+y+'" width="36" height="'+(240-y)+'" fill="'+(i%2?'#f59e0b':'#4f46e5')+'"/>'+sx(x,260,i+1,13);});
    if(line)h='<polyline points="'+pts.join(' ')+'" fill="none" stroke="#4f46e5" stroke-width="4"/>'+h;
    return h;
  }
  function triangleSvg(a,b,c,context){return '<path d="M70 225 L70 70 L290 225 Z" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="4"/><path d="M70 205 h20 v20" fill="none" stroke="#f59e0b" stroke-width="3"/>'+sx(48,150,a,16)+sx(180,252,b,16)+sx(200,140,c,16)+(context?sx(180,32,context,15):'');}
  function topicValue(code,n){
    var values={
      'M8-2-1':'2^'+n+' = '+Math.pow(2,n)+' '+B('after '+n+' doublings','यानी '+n+' बार doubling'),
      'M8-2-2':'2^'+n+' × 2² = 2^('+(n+2)+') = '+Math.pow(2,n+2),
      'M8-2-3':'2^−'+n+' = 1/2^'+n+' = 1/'+Math.pow(2,n),
      'M8-2-4':n+' × 10³ = '+(n*1000),
      'M8-3-1':n+' '+B('groups of five + 3 more','पाँच के groups + 3 अधिक')+' = '+(5*n+3),
      'M8-3-2':'121 base '+n+' = 1×'+n+'² + 2×'+n+' + 1 = '+(n*n+2*n+1),
      'M8-3-3':n+' hundreds + 3 tens + 4 ones = '+(100*n+34),
      'M8-3-4':n+',05,006 = '+n+' lakh + 5 thousand + 6',
      'M8-4-1':B('Rectangle area','Rectangle area')+' = '+n+' × '+(n+2)+' = '+n*(n+2)+'; '+B('square area','square area')+' = '+n+'² = '+n*n,
      'M8-4-2':(60+5*n)+'° + 90° + 100° + '+(110-5*n)+'° = 360°',
      'M8-4-3':B('Opposite sides are equal: ','Opposite sides बराबर: ')+(n+2)+', '+n+', '+(n+2)+', '+n,
      'M8-4-4':B('Kite adjacent pairs: ','Kite adjacent pairs: ')+(n+2)+', '+(n+2)+' · '+(n+4)+', '+(n+4)+'; '+B('trapezium parallel sides: ','trapezium parallel sides: ')+(n+2)+', '+(n+6),
      'M8-5-1':B('First five multiples of ','पहले पाँच multiples of ')+n+': '+[1,2,3,4,5].map(function(k){return n*k;}).join(', '),
      'M8-5-2':(120+n)+' → '+B('digit sum','digit sum')+' = '+(3+n)+( (3+n)%3===0 ? ' → '+B('divisible by 3','3 से divisible') : ' → '+B('not divisible by 3','3 से divisible नहीं')),
      'M8-5-3':n+'7 = '+n+' tens + 7 ones = '+(10*n+7),
      'M8-5-4':'A + A = B; A = '+n+', B = '+(2*n),
      'M8-6-1':n+'(10 + 3) = '+(10*n)+' + '+(3*n)+' = '+(13*n),
      'M8-6-2':'('+n+' + 2)² = '+n+'² + 4×'+n+' + 4 = '+Math.pow(n+2,2),
      'M8-6-3':'3x + 2 = '+(3*n+2)+' → 3x = '+(3*n)+' → x = '+n,
      'M8-6-4':n+'² + 3×'+n+' = '+n+'('+n+' + 3) = '+n*(n+3),
      'M8-7-1':n+' kg × ₹20/kg = ₹'+(20*n),
      'M8-7-2':(2*n)+' : '+(3*n)+' = 2 : 3',
      'M8-7-3':'2 '+B('notebooks','notebooks')+' = ₹40; '+n+' '+B('notebooks','notebooks')+' = ₹'+(20*n),
      'M8-7-4':'₹'+(5*n)+' '+B('shared in 2:3','को 2:3 में बाँटा')+' → ₹'+(2*n)+' + ₹'+(3*n),
      'M8-8-1':n+'/8 = '+(n/8).toFixed(3).replace(/0+$/,'').replace(/\.$/,'')+' = '+(n*12.5)+'%',
      'M8-8-2':(n*10)+'% '+B('of ₹200','of ₹200')+' = ₹'+(20*n),
      'M8-8-3':B('Marked ₹','Marked ₹')+(100*n)+' − 10% '+B('discount','discount')+' = ₹'+(90*n),
      'M8-8-4':'₹1000 × 1.1^'+n+' = ₹'+(1000*Math.pow(1.1,n)).toFixed(2),
      'M8-9-1':'('+(3*n)+')² + ('+(4*n)+')² = ('+(5*n)+')²',
      'M8-9-2':B('Square area','Square area')+' '+n+'² = '+n*n+'; '+B('each half','हर half')+' = '+(n*n/2),
      'M8-9-3':'('+(3*n)+', '+(4*n)+', '+(5*n)+') '+B('is a right-triangle triple','right-triangle triple है'),
      'M8-9-4':B('Two road legs','दो road legs')+' '+(3*n)+' m, '+(4*n)+' m → '+B('direct path','सीधा रास्ता')+' '+(5*n)+' m',
      'M8-10-1':'1 cm = '+n+' km → 3 cm = '+(3*n)+' km',
      'M8-10-2':(2*n)+' : '+(3*n)+' : '+(4*n)+' = 2 : 3 : 4',
      'M8-10-3':n+'/8 '+B('of the circle','circle का')+' = '+(45*n)+'° = '+(12.5*n)+'%',
      'M8-10-4':n+' '+B('workers','workers')+' × '+(24/n).toFixed(2).replace(/\.00$/,'')+' '+B('days','days')+' = 24 worker-days',
      'M8-11-1':B('Three copies at each step','हर step में तीन copies')+' → 3^'+n+' = '+Math.pow(3,n)+' '+B('small parts','छोटे parts'),
      'M8-11-2':B('Highlighted square is face ','Highlighted square face है ')+n+B(' of 6; all six fold into one cube.',' of 6; सभी छह मिलकर cube बनाते हैं।'),
      'M8-11-3':B('Top view: 3 occupied positions; front heights: 1, ','Top view: 3 occupied positions; front heights: 1, ')+n+', 1.',
      'M8-11-4':B('Unfold the faces: diagonal','Faces खोलिए: diagonal')+' = √('+(3*n)+'² + '+(4*n)+'²) = '+(5*n),
      'M8-12-1':B('Mean of ','Mean of ')+n+', '+(n+2)+', '+(n+4)+' = '+(n+2),
      'M8-12-2':B('Dot plot values: ','Dot plot values: ')+n+', '+n+', '+(n+1)+', '+(n+2)+', '+(n+2),
      'M8-12-3':B('Line graph values: ','Line graph values: ')+n+', '+(n+2)+', '+(n+1)+', '+(n+4),
      'M8-12-4':B('Values rise from ','Values ')+n+B(' to ',' से ')+(n+2)+B('. A vertical axis starting at ',' तक बढ़ीं। Vertical axis ')+(n-1)+B(' makes the same rise look steeper—read the scale.',' से शुरू हो तो वही rise अधिक steep दिखती है—scale पढ़िए।'),
      'M8-13-1':'3x + 2 = '+(3*n+2)+' → x = '+n,
      'M8-13-2':n+' → ×2 → +6 → ÷2 → '+(n+3),
      'M8-13-3':B('Bottom','Bottom')+': '+n+', '+(n+2)+', '+(n+4)+' → '+B('top sum','top sum')+' = '+(4*n+8),
      'M8-13-4':(10*n+7)+' − '+(70+n)+' = 9('+n+' − 7) = '+(9*(n-7)),
      'M8-14-1':B('Rectangle area','Rectangle area')+' = '+n+' × '+(n+3)+' = '+n*(n+3),
      'M8-14-2':'½ × '+(2*n)+' × '+n+' = '+n*n+' '+B('square units','square units'),
      'M8-14-3':'½ × ['+(n+2)+' + '+(n+6)+'] × 4 = '+(4*n+16),
      'M8-14-4':(n+4)+' × '+(n+3)+' − 2 × 2 = '+((n+4)*(n+3)-4)+' '+B('square units','square units')
    };
    return values[code]||null;
  }
  function topicSvg(code,n){
    var m=/^M8-(\d+)-(\d+)$/.exec(code);if(!m)return '';var ch=+m[1],tp=+m[2],h='';
    if(ch===2){
      if(tp===1){var seq=[];for(var i=0;i<=Math.min(n,5);i++)seq.push(Math.pow(2,i));h=boxRow(seq,105);}
      else if(tp===2)h=boxRow(['2^'+n,'× 2²','2^'+(n+2)],105,['var(--primary-light)','#fff3cd','#dcfce7']);
      else if(tp===3)h=boxRow(['1','1/2','1/4','1/'+Math.pow(2,n)],105);
      else h=boxRow([String(n),'× 10³',String(n*1000)],105,['var(--primary-light)','#fff3cd','#dcfce7']);
    }else if(ch===3){
      if(tp===1){for(var g=0;g<n;g++)for(var d=0;d<5;d++)h+='<line x1="'+(32+g*36+d*5)+'" y1="90" x2="'+(32+g*36+d*5)+'" y2="140" stroke="'+(g%2?'#f59e0b':'#4f46e5')+'" stroke-width="3"/>';h+=boxRow(['+ 3',String(5*n+3)],185);}
      else if(tp===2)h=boxRow(['1 × '+n+'²','2 × '+n,'1'],105);
      else if(tp===3)h=boxRow([n+' hundreds','3 tens','4 ones'],105);
      else h=boxRow([n+' lakh','05 thousand','006 ones'],105);
    }else if(ch===4){
      if(tp===1)h='<rect x="45" y="75" width="150" height="110" fill="var(--primary-light)" stroke="#4f46e5" stroke-width="4"/><rect x="235" y="75" width="80" height="80" fill="#fff3cd" stroke="#f59e0b" stroke-width="4"/>'+sx(120,215,n+' × '+(n+2),15)+sx(275,185,n+' × '+n,15);
      else if(tp===2)h='<polygon points="80,65 285,80 310,220 55,205" fill="var(--primary-light)" stroke="#4f46e5" stroke-width="4"/>'+sx(82,95,60+5*n+'°',14)+sx(274,110,'90°',14)+sx(282,204,'100°',14)+sx(85,190,110-5*n+'°',14);
      else if(tp===3)h='<polygon points="85,70 285,70 245,220 45,220" fill="var(--primary-light)" stroke="#4f46e5" stroke-width="4"/>'+sx(185,52,n+2,15)+sx(185,247,n+2,15)+sx(58,145,n,15)+sx(272,145,n,15);
      else h='<polygon points="85,75 175,45 285,215 45,215" fill="var(--primary-light)" stroke="#4f46e5" stroke-width="3"/><polygon points="210,70 315,70 285,210 175,210" fill="#fff3cd" stroke="#f59e0b" stroke-width="3"/>'+sx(92,112,n+2,13)+sx(135,72,n+2,13)+sx(72,205,n+4,13)+sx(245,205,n+4,13)+sx(90,260,'kite',15)+sx(260,260,'trapezium',15);
    }else if(ch===5){
      if(tp===1)h=boxRow([n,2*n,3*n,4*n,5*n],105);
      else if(tp===2)h=boxRow(['1','2',n,'sum = '+(3+n)],105);
      else if(tp===3)h=boxRow([n+' tens','7 ones',String(10*n+7)],105);
      else h=boxRow(['A = '+n,'A + A','B = '+(2*n)],105,['var(--primary-light)','#fff3cd','#dcfce7']);
    }else if(ch===6){
      if(tp===1||tp===4)h='<rect x="40" y="70" width="280" height="150" fill="var(--primary-light)" stroke="#4f46e5" stroke-width="3"/><line x1="255" y1="70" x2="255" y2="220" stroke="#f59e0b" stroke-width="4"/>'+sx(145,150,n+' × 10',18)+sx(287,150,n+' × 3',18);
      else if(tp===2)h='<rect x="70" y="55" width="210" height="210" fill="var(--primary-light)" stroke="#4f46e5" stroke-width="3"/><line x1="230" y1="55" x2="230" y2="265" stroke="#f59e0b" stroke-width="3"/><line x1="70" y1="215" x2="280" y2="215" stroke="#f59e0b" stroke-width="3"/>'+sx(150,145,n+'²',20)+sx(255,145,'2n',16)+sx(150,245,'2n',16)+sx(255,245,'4',16);
      else h=boxRow(['3x + 2 = '+(3*n+2),'− 2 both sides','÷ 3 → x = '+n],105);
    }else if(ch===7){
      if(tp===1)h=boxRow([n+' kg','× ₹20','₹'+(20*n)],105);
      else if(tp===2)h=segmentBar([2,3],['2 parts','3 parts'],105);
      else if(tp===3)h=boxRow(['2 books ₹40',n+' books','₹'+(20*n)],105);
      else h=segmentBar([2,3],['₹'+(2*n),'₹'+(3*n)],105);
    }else if(ch===8){
      if(tp===1)h=segmentBar([n,8-n],[n+'/8',8-n+'/8'],105);
      else if(tp===2)h=segmentBar([n,10-n],[n*10+'%','rest'],105);
      else if(tp===3)h=boxRow(['₹'+(100*n),'− 10%','₹'+(90*n)],105);
      else h=plotSvg(Array.from({length:n+1},function(_,i){return Math.pow(1.1,i);}),true);
    }else if(ch===9){
      if(tp===2)h='<rect x="80" y="50" width="200" height="200" fill="var(--primary-light)" stroke="#4f46e5" stroke-width="4"/><line x1="80" y1="50" x2="280" y2="250" stroke="#f59e0b" stroke-width="4"/>'+sx(130,180,'½n²',18)+sx(230,120,'½n²',18);
      else h=triangleSvg(3*n,4*n,5*n,tp===4?B('road corner','road corner'):B('right angle','right angle'));
    }else if(ch===10){
      if(tp===1)h='<path d="M45 205 C110 70 230 260 315 75" fill="none" stroke="#4f46e5" stroke-width="7" stroke-dasharray="12 7"/>'+sx(180,35,'map: 3 cm',16)+sx(180,278,'real: '+3*n+' km',16);
      else if(tp===2)h=segmentBar([2,3,4],['2','3','4'],105);
      else if(tp===3){var end=-90+45*n;h='<circle cx="180" cy="145" r="105" fill="var(--primary-light)" stroke="#4f46e5" stroke-width="3"/>'+(n===8?'<circle cx="180" cy="145" r="102" fill="#f59e0b" opacity=".85"/>':'<path d="M180 145 L180 40 A105 105 0 '+(n>4?1:0)+' 1 '+(180+105*Math.cos(end*Math.PI/180))+' '+(145+105*Math.sin(end*Math.PI/180))+' Z" fill="#f59e0b" opacity=".85"/>')+sx(180,150,45*n+'°',20);}
      else h=boxRow([n+' workers',(24/n).toFixed(1)+' days','24 worker-days'],105);
    }else if(ch===11){
      if(tp===1){var count=Math.pow(3,n);h=boxRow(['1','3','9',String(count)],105);}
      else if(tp===2){var faces=[[135,35],[65,105],[135,105],[205,105],[275,105],[135,175]];h='<g stroke="#4f46e5" stroke-width="2">'+faces.map(function(p,i){return '<rect x="'+p[0]+'" y="'+p[1]+'" width="70" height="70" fill="'+(i===n-1?'#f59e0b':'var(--primary-light)')+'"/>';}).join('')+'</g>'+sx(180,275,B('face ','face ')+n+B(' of 6',' of 6'),16);}
      else if(tp===3){h='<g fill="#4f46e5" stroke="#fff"><rect x="80" y="170" width="55" height="55"/><rect x="200" y="170" width="55" height="55"/>';for(var layer=0;layer<n;layer++)h+='<rect x="140" y="'+(170-layer*42)+'" width="55" height="40"/>';h+='</g>'+sx(100,260,B('top: 3 positions','top: 3 positions'),14)+sx(255,260,B('front: 1,','front: 1,')+n+',1',14);}
      else h='<rect x="55" y="55" width="250" height="175" fill="var(--primary-light)" stroke="#4f46e5" stroke-width="3"/><line x1="55" y1="230" x2="305" y2="55" stroke="#f59e0b" stroke-width="5"/>'+sx(180,270,B('unfolded surface path','खुली surface का रास्ता'),16);
    }else if(ch===12){
      if(tp===1)h=plotSvg([n,n+2,n+4],false)+sx(180,25,B('balance at ','balance at ')+(n+2),15);
      else if(tp===2){var vals=[n,n,n+1,n+2,n+2];vals.forEach(function(v,i){h+='<circle cx="'+(70+(v-n)*90)+'" cy="'+(205-(i%2)*34)+'" r="9" fill="#4f46e5"/>';});h+=sx(70,245,n,14)+sx(160,245,n+1,14)+sx(250,245,n+2,14);}
      else if(tp===3)h=plotSvg([n,n+2,n+1,n+4],true);
      else h='<line x1="35" y1="235" x2="165" y2="235" stroke="#334155" stroke-width="2"/><line x1="35" y1="45" x2="35" y2="235" stroke="#334155" stroke-width="2"/><polyline points="55,190 95,165 135,140" fill="none" stroke="#4f46e5" stroke-width="4"/><line x1="195" y1="235" x2="330" y2="235" stroke="#334155" stroke-width="2"/><line x1="195" y1="45" x2="195" y2="235" stroke="#334155" stroke-width="2"/><polyline points="215,205 255,135 295,65" fill="none" stroke="#f59e0b" stroke-width="4"/>'+sx(100,268,B('axis starts 0','axis starts 0'),13)+sx(260,268,B('axis starts ','axis starts ')+(n-1),13)+sx(16,190,n,12)+sx(16,140,n+2,12)+sx(178,205,n,12)+sx(178,65,n+2,12);
    }else if(ch===13){
      if(tp===1)h=boxRow(['3x + 2',String(3*n+2),'x = '+n],105);
      else if(tp===2)h=boxRow([n,'×2 = '+2*n,'+6 = '+(2*n+6),'÷2 = '+(n+3)],105);
      else if(tp===3)h=boxRow([n,n+2,n+4],190)+boxRow([2*n+2,2*n+6],115)+boxRow([4*n+8],40);
      else h=boxRow([String(10*n+7),'− '+(70+n),'9 × '+(n-7)],105);
    }else if(ch===14){
      if(tp===1)h='<rect x="55" y="65" width="250" height="165" fill="var(--primary-light)" stroke="#4f46e5" stroke-width="4"/>'+sx(180,260,n+3,16)+sx(35,150,n,16);
      else if(tp===2)h='<polygon points="55,230 305,230 180,65" fill="var(--primary-light)" stroke="#4f46e5" stroke-width="4"/><line x1="180" y1="65" x2="180" y2="230" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8 5"/>'+sx(180,260,2*n,16)+sx(205,150,n,16);
      else if(tp===3)h='<polygon points="95,65 255,65 315,230 45,230" fill="var(--primary-light)" stroke="#4f46e5" stroke-width="4"/><line x1="95" y1="65" x2="95" y2="230" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8 5"/>'+sx(175,52,n+2,15)+sx(180,260,n+6,15)+sx(70,150,'h=4',15);
      else h='<path d="M55 55 H305 V235 H55 Z M225 155 H305 V235 H225 Z" fill="var(--primary-light)" fill-rule="evenodd" stroke="#4f46e5" stroke-width="4"/>'+sx(180,275,B('large rectangle − cut-out','बड़ा rectangle − cut-out'),15)+sx(266,205,'2×2',14);
    }
    return h;
  }
  function explorerRange(code,kind){
    var c={min:1,max:8,value:3,label:B('Change the example','Example बदलकर देखिए')};
    if(code==='M8-3-2'){c.min=3;c.value=5;}if(code==='M8-5-4'){c.max=4;c.value=3;}if(code==='M8-8-4'||code==='M8-11-1'||code==='M8-11-3'){c.max=5;c.value=3;}if(code==='M8-11-2'){c.max=6;c.value=1;}
    if(kind.indexOf('rational')===0){c.label=B('Change the numerator','Numerator बदलकर देखिए');c.max=kind==='rational'?8:7;c.value=kind==='rational'?6:3;}
    return c;
  }
  function explorerValue(kind,n,code){
    var tv=topicValue(code,n);if(tv)return tv;
    if(kind==='power')return '2<sup>'+n+'</sup> = '+Math.pow(2,n);
    if(kind==='number')return n+' hundreds + '+n+' tens + '+n+' ones = '+(111*n);
    if(kind==='rational'){
      var g=n%2===0?(n%4===0?4:2):1;
      return n+' '+B('of 8 equal parts shaded','बराबर 8 हिस्सों में रंगे')+' = <b>'+n+'/8 = '+(n/g)+'/'+(8/g)+' = '+(n/8).toFixed(n%8===0?0:3).replace(/0+$/,'').replace(/\.$/,'')+'</b>';
    }
    if(kind==='rational-compare')return '<b>'+n+'/8 '+(n<4?'&lt;':n>4?'&gt;':'=')+' 4/8 = 1/2</b>';
    if(kind==='rational-ops')return '<b>'+n+'/8 + 1/8 = '+(n+1)+'/8</b> · '+B('Equal denominators mean equal-sized parts.','Same denominator का मतलब बराबर आकार के हिस्से।');
    if(kind==='rational-between')return '<b>'+n+'/8 &lt; '+(2*n+1)+'/16 &lt; '+(n+1)+'/8</b> · '+B('The middle value is the average.','बीच की value दोनों का average है।');
    if(kind==='quad')return n+' × 10° + '+(360-n*10)+'° = 360°';
    if(kind==='div')return B('First five multiples: ','पहले पाँच multiples: ')+[1,2,3,4,5].map(function(k){return n*k;}).join(', ');
    if(kind==='algebra')return n+'('+n+' + 3) = '+n*n+' + '+3*n+' = '+n*(n+3);
    if(kind==='ratio')return (2*n)+' : '+(3*n)+' = 2 : 3';
    if(kind==='percent')return (n*10)+'% '+B('of 200','का 200')+' = '+(20*n);
    if(kind==='pyth')return (3*n)+'² + '+(4*n)+'² = '+(5*n)+'²';
    if(kind==='geometry')return n+' × '+n+' × '+n+' = '+n*n*n+' '+B('unit cubes','unit cubes');
    if(kind==='data')return B('Values: ','Values: ')+n+', '+(n+2)+', '+(n+4)+'; '+B('mean','mean')+' = '+(n+2);
    return n+' × '+(n+3)+' = '+n*(n+3)+' '+B('square units','square units');
  }
  function explorerSvg(kind,n,label,code){
    var h='',a=Math.min(260,35+n*18),b=Math.min(190,40+n*12);
    var topicArt=topicSvg(code,n);if(topicArt)return svg(topicArt,label);
    if(kind.indexOf('rational')===0){
      var x0=48,w=36,y=64,parts='';
      for(var j=0;j<8;j++)parts+='<rect x="'+(x0+j*w)+'" y="'+y+'" width="'+w+'" height="58" fill="'+(j<n?(j===n-1?'#f59e0b':'#4f46e5'):'#fff')+'" stroke="#334155" stroke-width="1.5"/>';
      if(kind==='rational'){
        var marker=x0+n*w;
        h=parts+'<text x="192" y="148" text-anchor="middle" fill="currentColor">'+n+' / 8 '+B('parts shaded','हिस्से रंगे')+'</text><line x1="48" y1="210" x2="336" y2="210" stroke="#334155" stroke-width="3"/><text x="48" y="240" text-anchor="middle" fill="currentColor">0</text><text x="336" y="240" text-anchor="middle" fill="currentColor">1</text><circle cx="'+marker+'" cy="210" r="8" fill="#f59e0b"/><text x="'+marker+'" y="194" text-anchor="middle" fill="currentColor">'+n+'/8</text>';
      }else if(kind==='rational-compare'){
        var half=x0+4*w,point=x0+n*w;
        h=parts+'<line x1="48" y1="210" x2="336" y2="210" stroke="#334155" stroke-width="3"/><circle cx="'+point+'" cy="210" r="8" fill="#4f46e5"/><circle cx="'+half+'" cy="210" r="8" fill="#f59e0b"/><text x="'+point+'" y="190" text-anchor="middle" fill="currentColor">'+n+'/8</text><text x="'+half+'" y="244" text-anchor="middle" fill="currentColor">4/8 = 1/2</text>';
      }else if(kind==='rational-ops'){
        h=parts+'<path d="M'+(x0+n*w)+' 138 v24 h'+w+' v-24" fill="none" stroke="#f59e0b" stroke-width="3"/><text x="'+(x0+(n+.5)*w)+'" y="184" text-anchor="middle" fill="currentColor">+ 1/8</text><text x="192" y="225" text-anchor="middle" fill="currentColor">'+n+'/8 + 1/8 = '+(n+1)+'/8</text>';
      }else{
        var left=x0+n*w,right=x0+(n+1)*w,mid=(left+right)/2;
        h='<line x1="48" y1="150" x2="336" y2="150" stroke="#334155" stroke-width="3"/><circle cx="'+left+'" cy="150" r="7" fill="#4f46e5"/><circle cx="'+right+'" cy="150" r="7" fill="#4f46e5"/><circle cx="'+mid+'" cy="150" r="8" fill="#f59e0b"/><text x="'+left+'" y="185" text-anchor="middle" fill="currentColor">'+n+'/8</text><text x="'+right+'" y="185" text-anchor="middle" fill="currentColor">'+(n+1)+'/8</text><text x="'+mid+'" y="126" text-anchor="middle" fill="currentColor">'+(2*n+1)+'/16</text><text x="192" y="230" text-anchor="middle" fill="currentColor">'+B('A rational number between them','इनके बीच एक rational number')+'</text>';
      }
    }
    else if(kind==='pyth')h='<path d="M70 220 L70 70 L270 220 Z" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="4"/><text x="48" y="150" fill="currentColor">'+3*n+'</text><text x="165" y="248" fill="currentColor">'+4*n+'</text><text x="175" y="135" fill="currentColor">'+5*n+'</text>';
    else if(kind==='data')h=[0,1,2].map(function(i){var v=n+i*2;return '<rect x="'+(75+i*75)+'" y="'+(235-v*10)+'" width="42" height="'+v*10+'" fill="'+(i===1?'#b15e00':'#245c97')+'"/><text x="'+(96+i*75)+'" y="260" text-anchor="middle" fill="currentColor">'+v+'</text>';}).join('');
    else if(kind==='geometry')h='<path d="M95 85 L205 55 L270 105 L160 140 Z M95 85 L95 190 L160 240 L160 140 M160 240 L270 205 L270 105" fill="none" stroke="var(--primary)" stroke-width="4"/>';
    else h='<rect x="50" y="55" width="'+a+'" height="'+b+'" rx="8" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="3"/><line x1="50" y1="'+(55+b/2)+'" x2="'+(50+a)+'" y2="'+(55+b/2)+'" stroke="#b15e00" stroke-width="3"/>';
    return svg(h,label);
  }
  function conceptLab(tp){
    var id='m8-concept-'+tp.code.toLowerCase(),kind=tp.lab.kind,cfg=explorerRange(tp.code,kind),n=cfg.value,label=t(tp.lab.title);
    return '<section class="m8-lab" id="'+id+'"><h3>'+esc(label)+'</h3>'
      + '<label for="'+id+'-input">'+cfg.label+' <output>'+n+'</output></label>'
      + '<input id="'+id+'-input" type="range" min="'+cfg.min+'" max="'+cfg.max+'" value="'+n+'" oninput="SL8.explore(\''+tp.code+'\',this.value)">'
      + '<div class="m8-output" aria-live="polite">'+explorerSvg(kind,n,label,tp.code)+eq(explorerValue(kind,n,tp.code))+'</div></section>';
  }
  api.explore=function(code,value){
    var info=topicByCode(code),tp=info&&info.topic,cfg=tp&&tp.lab?explorerRange(code,tp.lab.kind):{min:1,max:8},n=Math.max(cfg.min,Math.min(cfg.max,Math.round(Number(value)||cfg.min)));
    if(!tp||!tp.lab)return;var el=document.getElementById('m8-concept-'+code.toLowerCase());if(!el)return;
    el.querySelector('output').textContent=n;el.querySelector('.m8-output').innerHTML=explorerSvg(tp.lab.kind,n,t(tp.lab.title),code)+eq(explorerValue(tp.lab.kind,n,code));
  };
  var m8Course=window.SL_DATA.subjects.find(function(s){return s.code==='MATH8';});
  if(m8Course)m8Course.chapters.forEach(function(c){c.topics.forEach(function(tp){if(tp.lab)DIAGRAMS['m8-explore-'+tp.code.toLowerCase()]=function(){return conceptLab(tp);};});});

  var originalTopic=vTopic;
  vTopic=function(code){var h=originalTopic(code);if(!richCode(code))return h;var tp=topicByCode(code).topic;
    var formats=[['all','All 8 questions','सभी 8 प्रश्न'],['mcq','Single answer','एक सही उत्तर'],['multi','Multiple answers','कई सही उत्तर'],['fill','Fill blanks','खाली जगह'],['match','Match','मिलान'],['subjective','Written response','लिखित उत्तर']];
    var saved='';try{var records=JSON.parse(localStorage.getItem(PK('sl_m8_written'))||'{}');qForTopic(code).filter(function(q){return q.type==='subjective'&&records[q.id];}).forEach(function(q){var r=records[q.id];saved+='<details class="m8-transcript"><summary>'+B('Your last saved written response','आपका पिछला सहेजा हुआ लिखित उत्तर')+'</summary><p>'+esc(t(q.q))+'</p><p style="white-space:pre-wrap">'+esc(r.text)+'</p><p>'+r.checks.length+'/'+q.rubric.length+' '+B('criteria self-checked','बिंदु खुद जाँचे')+'</p></details>';});}catch(e){}
    return h+'<section class="card" style="margin-top:16px"><h3>'+B('Choose a practice format','अभ्यास का तरीका चुनिए')+'</h3><p class="m8-note">'+B('All eight questions are available, not a random sample. Written responses are self-reviewed and excluded from automatic accuracy.','आठों प्रश्न उपलब्ध हैं, random sample नहीं। लिखित उत्तर self-review हैं और automatic accuracy में शामिल नहीं हैं।')+'</p><div class="m8-formats">'+formats.map(function(f){return '<button class="btn ghost sm" onclick="SL8.practice(\''+code+'\',\''+f[0]+'\')">'+B(f[1],f[2])+'</button>';}).join('')+'</div>'+saved+'</section>';
  };
  api.practice=function(code,type){var info=topicByCode(code),qs=qForTopic(code).filter(function(q){return type==='all'||q.type===type;});if(!info||!qs.length)return;
    QUIZ={scope:'class8-rich',key:code+'::'+type,title:t(info.topic.name),backTopic:code,backSubject:info.subject.code,qs:qs,i:0,results:[],answered:false,t0:Date.now(),m8Type:type,written:{}};go('quiz');
  };
  var originalStart=startQuiz;
  startQuiz=function(scope,a,b){if(scope==='topic'&&richCode(a)){api.practice(a,'all');return;}return originalStart(scope,a,b);};
  var originalReplay=replayQuiz;
  replayQuiz=function(){if(is8()&&QUIZ.scope==='class8-rich'){api.practice(QUIZ.backTopic,QUIZ.m8Type);return;}originalReplay();};
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
      body='<label for="shortAns">'+B('Fill the blank (a number, fraction, or key term)','खाली जगह भरिए (संख्या, fraction या key term)')+'</label><input class="shortinput" id="shortAns" inputmode="text" autocomplete="off" onkeydown="if(event.key===\'Enter\')answerShort()"><button class="btn" style="margin-top:10px" onclick="answerShort()">'+B('Check','जाँचें')+'</button>';
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
  answerShort=function(){var q=current();if(!is8()||q.type!=='fill')return originalShort();if(QUIZ.answered)return;var el=document.getElementById('shortAns'),raw=String(el.value||'').trim();
    if(!raw){toast(B('Enter your answer first.','पहले अपना उत्तर लिखिए।'));return;}
    var v=api.numeric(raw),answers=String(q.correct).split('|'),numericAnswers=answers.map(api.numeric),ok;
    if(v!==null&&numericAnswers.every(function(x){return x!==null;}))ok=numericAnswers.some(function(a){return Math.abs(a-v)<1e-9;});
    else {var norm=function(s){return String(s).toLocaleLowerCase().replace(/[.,;:!?।]/g,'').replace(/[-–—_]/g,' ').replace(/\s+/g,' ').trim();};ok=answers.some(function(a){return norm(a)===norm(raw);});}
    el.disabled=true;settle(ok,q,ok?'':'<p>'+B('Answer: ','उत्तर: ')+esc(answers[0])+'</p>');
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
    h+='<div class="m8-controls"><button class="btn" onclick="go(\'subject\',{code:\''+QUIZ.backSubject+'\'})">'+B('Chapter topics','Chapter के topics')+'</button>';
    if(QUIZ.backTopic)h+='<button class="btn ghost" onclick="go(\'topic\',{code:\''+QUIZ.backTopic+'\'})">'+B('Back to this lesson','इस पाठ पर लौटें')+'</button><button class="btn ghost" onclick="SL8.practice(\''+QUIZ.backTopic+'\',\''+(QUIZ.m8Type||'all')+'\')">'+B('Practise again','फिर अभ्यास')+'</button>';
    else h+='<button class="btn ghost" onclick="startAssessment(\''+QUIZ.backSubject+'\',1)">'+B('Try chapter assignment','Chapter असाइनमेंट करें')+'</button>';
    return h+'</div></section>';
  };
  // Prevent the legacy form from destroying rich fields; preserve JSON in exports.
  var originalAdminEdit=adminEdit;
  adminEdit=function(){var q=EDIT_ID&&allQuestions().find(function(x){return x.id===EDIT_ID;});if(q&&['MATH8','SCI8'].indexOf(q.subject)>=0)return '<div class="card"><h2>'+esc(q.id)+'</h2><p>This Class 8 course uses rich multi-answer, matching, fill and rubric fields. Spreadsheet exports preserve the full record in question_json.</p><pre style="white-space:pre-wrap;overflow-wrap:anywhere">'+esc(JSON.stringify(q,null,2))+'</pre></div>';return originalAdminEdit();};
  var originalQToRow=qToRow,originalRowToQ=rowToQ;
  HEADERS.push('question_json');
  qToRow=function(q){var row=originalQToRow(q);row.push(['MATH8','SCI8'].indexOf(q.subject)>=0?JSON.stringify(q):'');return row;};
  rowToQ=function(r){if(r.question_json){try{var q=JSON.parse(r.question_json);if(['MATH8','SCI8'].indexOf(q.subject)>=0&&api.validQuestion(q))return q;return null;}catch(e){return null;}}return originalRowToQ(r);};
  api.validQuestion=function(q){var prefix=q&&q.subject==='SCI8'?'S8':'M8';if(!q||!(new RegExp('^'+prefix+'-Q\\d+$')).test(q.id)||['MATH8','SCI8'].indexOf(q.subject)<0||!topicByCode(q.topic)||!q.q||!q.q.en||!q.q.hi||!q.exp||!q.exp.en||!q.exp.hi||['published','draft','review'].indexOf(q.status)<0)return false;
    if(q.type==='multi'||q.type==='mcq'){if(!q.opts||!Array.isArray(q.opts.en)||q.opts.en.length!==4||!Array.isArray(q.opts.hi)||q.opts.hi.length!==4)return false;var keys=q.type==='multi'?q.correct:[q.correct];return Array.isArray(keys)&&keys.length>0&&new Set(keys).size===keys.length&&keys.every(function(k){return /^[A-D]$/.test(k);});}
    if(q.type==='fill')return typeof q.correct==='string'&&String(q.correct).split('|').every(function(v){return v.trim().length>0;});
    if(q.type==='match')return Array.isArray(q.pairs)&&q.pairs.length>1&&q.pairs.every(function(p){return p.l&&p.l.en&&p.l.hi&&p.r&&p.r.en&&p.r.hi;});
    if(q.type==='subjective')return q.model&&q.model.en&&q.model.hi&&Array.isArray(q.rubric)&&q.rubric.length>0&&q.rubric.every(function(r){return r.en&&r.hi;});return false;
  };
  if(location.hash==='#math8')go('subject',{code:'MATH8'});else if(location.hash==='#science8'||location.hash==='#sci8')go('subject',{code:'SCI8'});else render();
}());

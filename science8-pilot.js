/* Original, low-bandwidth Class 8 Science concept diagrams. */
(function(){
  'use strict';
  if(!window.SL8)return;
  var api=window.SL8,course=window.SL_DATA.subjects.find(function(s){return s.code==='SCI8';});
  if(!course)return;
  function B(en,hi){return LANG==='hi'?hi:en;}
  function E(s){return esc(String(s));}
  function text(x,y,s,size,anchor,fill,weight){return '<text x="'+x+'" y="'+y+'" text-anchor="'+(anchor||'middle')+'" font-size="'+(size||15)+'" fill="'+(fill||'currentColor')+'" font-weight="'+(weight||600)+'">'+E(s)+'</text>';}
  function wrapLabel(s){s=String(s);return s.length>22?s.slice(0,21)+'…':s;}
  function node(x,y,w,h,label,on,shape){var fill=on?'#f59e0b':'var(--primary-light)',stroke=on?'#b45309':'var(--primary)';
    if(shape==='circle')return '<circle cx="'+x+'" cy="'+y+'" r="'+Math.min(w,h)/2+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="3"/>'+text(x,y+5,wrapLabel(label),13,'middle',on?'#3b2100':'currentColor',700);
    return '<rect x="'+(x-w/2)+'" y="'+(y-h/2)+'" width="'+w+'" height="'+h+'" rx="10" fill="'+fill+'" stroke="'+stroke+'" stroke-width="3"/>'+text(x,y+5,wrapLabel(label),13,'middle',on?'#3b2100':'currentColor',700);
  }
  function arrow(x1,y1,x2,y2){return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="#64748b" stroke-width="3" marker-end="url(#s8arr)"/>';}
  function defs(){return '<defs><marker id="s8arr" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#64748b"/></marker></defs>';}
  var families={
    process:'question fair measure evidence microscope organisation wellbeing prevention transmission immunity field electromagnet battery pressure air conduct plating',
    structure:'cellparts microbes states mixture uniform element compound dissolve saturation density ecosystem interaction planet lifesupport reproduction fertilisation lifecycle puberty adolescent soil sowing pest harvest fossil refinery',
    force:'pushpull balance contact floating heating particles compress friction controlfriction',
    hazard:'storm cyclone fire flame climate lightning earthquake',
    wave:'reflection mirrors refraction lenses phases observe calendar orbit vibration sound gas change',
    network:'foodweb cycle'
  };
  function family(kind){for(var k in families)if((' '+families[k]+' ').indexOf(' '+kind+' ')>=0)return k;return 'process';}
  function artwork(tp,focus){var labels=tp.lab.labels.map(function(x){return t(x);}),kind=tp.lab.kind,f=family(kind),h=defs();
    if(kind==='floating'){
      h+='<rect x="25" y="168" width="310" height="92" fill="#dbeafe"/><path d="M25 168 Q65 156 105 168 T185 168 T265 168 T335 168" fill="none" stroke="#2563eb" stroke-width="4"/><rect x="142" y="116" width="76" height="76" rx="8" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="4"/>';
      h+='<line x1="180" y1="126" x2="180" y2="62" stroke="'+(focus===1?'#b45309':'#4f46e5')+'" stroke-width="7" marker-end="url(#s8arr)"/><line x1="180" y1="182" x2="180" y2="244" stroke="'+(focus===0?'#b45309':'#4f46e5')+'" stroke-width="7" marker-end="url(#s8arr)"/>';
      h+=text(180,38,labels[1],14)+text(180,279,labels[0],14)+text(290,108,labels[2],14,'middle',focus===2?'#b45309':'currentColor',800);
    }else if(kind==='pressure'){
      h+='<line x1="30" y1="238" x2="330" y2="238" stroke="#64748b" stroke-width="4"/><rect x="65" y="116" width="45" height="120" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="4"/><rect x="208" y="166" width="115" height="70" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="4"/>';
      h+='<line x1="88" y1="48" x2="88" y2="104" stroke="'+(focus===0?'#b45309':'#4f46e5')+'" stroke-width="7" marker-end="url(#s8arr)"/><line x1="266" y1="98" x2="266" y2="154" stroke="'+(focus===0?'#b45309':'#4f46e5')+'" stroke-width="7" marker-end="url(#s8arr)"/>';
      h+=text(88,28,labels[0],14)+text(266,267,labels[1],14,'middle',focus===1?'#b45309':'currentColor',800)+text(180,72,labels[2],14,'middle',focus===2?'#b45309':'currentColor',800)+text(88,258,B('small area','small area'),12)+text(266,220,B('large area','large area'),12);
    }else if(kind==='reflection'){
      h+='<line x1="35" y1="220" x2="325" y2="220" stroke="var(--primary)" stroke-width="6"/><line x1="180" y1="35" x2="180" y2="260" stroke="#94a3b8" stroke-width="3" stroke-dasharray="8 6"/><line x1="60" y1="65" x2="176" y2="213" stroke="'+(focus===0?'#b45309':'#4f46e5')+'" stroke-width="6" marker-end="url(#s8arr)"/><line x1="184" y1="213" x2="300" y2="65" stroke="'+(focus===2?'#b45309':'#4f46e5')+'" stroke-width="6" marker-end="url(#s8arr)"/>';
      h+=text(68,48,labels[0],13)+text(180,25,labels[1],13,'middle',focus===1?'#b45309':'currentColor',800)+text(292,48,labels[2],13);
    }else if(kind==='refraction'){
      h+='<rect x="25" y="150" width="310" height="112" fill="#dbeafe" opacity=".8"/><line x1="25" y1="150" x2="335" y2="150" stroke="#2563eb" stroke-width="4"/><line x1="180" y1="30" x2="180" y2="270" stroke="#94a3b8" stroke-width="2" stroke-dasharray="7 6"/><line x1="72" y1="55" x2="180" y2="150" stroke="#4f46e5" stroke-width="6" marker-end="url(#s8arr)"/><line x1="180" y1="150" x2="235" y2="250" stroke="#b45309" stroke-width="6" marker-end="url(#s8arr)"/>';
      h+=text(82,38,labels[0],13,'middle',focus===0?'#b45309':'currentColor',800)+text(278,132,labels[1],13,'middle',focus===1?'#b45309':'currentColor',800)+text(270,238,labels[2],13,'middle',focus===2?'#b45309':'currentColor',800);
    }else if(kind==='mirrors'||kind==='lenses'){
      h+='<line x1="25" y1="100" x2="150" y2="100" stroke="#4f46e5" stroke-width="4"/><line x1="25" y1="145" x2="150" y2="145" stroke="#4f46e5" stroke-width="4"/><line x1="25" y1="190" x2="150" y2="190" stroke="#4f46e5" stroke-width="4"/>';
      if(kind==='mirrors')h+='<path d="M165 55 Q235 145 165 235" fill="none" stroke="var(--primary)" stroke-width="7"/><line x1="170" y1="100" x2="292" y2="145" stroke="#b45309" stroke-width="4"/><line x1="170" y1="190" x2="292" y2="145" stroke="#b45309" stroke-width="4"/>';
      else h+='<path d="M170 50 Q130 145 170 240 Q210 145 170 50 Z" fill="#dbeafe" stroke="var(--primary)" stroke-width="5"/><line x1="174" y1="100" x2="300" y2="145" stroke="#b45309" stroke-width="4"/><line x1="174" y1="190" x2="300" y2="145" stroke="#b45309" stroke-width="4"/>';
      h+=text(75,75,labels[0],13,'middle',focus===0?'#b45309':'currentColor',800)+text(255,72,labels[1],13,'middle',focus===1?'#b45309':'currentColor',800)+text(292,172,labels[2],13,'middle',focus===2?'#b45309':'currentColor',800);
    }else if(kind==='phases'){
      var moons=[[62,'#111827'],[140,'url(#s8half)'],[218,'#f8fafc'],[296,'url(#s8half2)']];h+='<defs><linearGradient id="s8half"><stop offset="50%" stop-color="#111827"/><stop offset="50%" stop-color="#f8fafc"/></linearGradient><linearGradient id="s8half2"><stop offset="50%" stop-color="#f8fafc"/><stop offset="50%" stop-color="#111827"/></linearGradient></defs>';
      moons.forEach(function(m,i){h+='<circle cx="'+m[0]+'" cy="142" r="38" fill="'+m[1]+'" stroke="var(--primary)" stroke-width="3"/>';if(i<3)h+=arrow(m[0]+41,142,m[0]+73,142);});h+=text(62,215,labels[0],13,'middle',focus===0?'#b45309':'currentColor',800)+text(180,52,labels[1],13,'middle',focus===1?'#b45309':'currentColor',800)+text(296,215,labels[2],13,'middle',focus===2?'#b45309':'currentColor',800);
    }else if(kind==='orbit'){
      h+='<ellipse cx="180" cy="145" rx="140" ry="92" fill="none" stroke="#94a3b8" stroke-width="3" stroke-dasharray="8 5"/><circle cx="180" cy="145" r="48" fill="#60a5fa" stroke="#2563eb" stroke-width="4"/><circle cx="300" cy="97" r="12" fill="#f59e0b"/>'+arrow(294,79,260,59);
      h+=text(180,151,B('Earth','पृथ्वी'),16,'middle','#fff',800)+text(85,58,labels[0],13,'middle',focus===0?'#b45309':'currentColor',800)+text(288,132,labels[1],13,'middle',focus===1?'#b45309':'currentColor',800)+text(180,274,labels[2],13,'middle',focus===2?'#b45309':'currentColor',800);
    }else if(kind==='calendar'||kind==='observe'){
      h+='<path d="M30 220 Q90 92 180 140 T330 78" fill="none" stroke="var(--primary)" stroke-width="4" stroke-dasharray="9 6"/>';[60,180,300].forEach(function(x,i){var y=i===0?178:i===1?140:92;h+='<circle cx="'+x+'" cy="'+y+'" r="24" fill="'+(i===1?'#f59e0b':'var(--primary-light)')+'" stroke="var(--primary)" stroke-width="3"/>'+text(x,y+48,labels[i],13,'middle',focus===i?'#b45309':'currentColor',800);});
    }else if(kind==='fire'){
      h+='<polygon points="180,42 55,246 305,246" fill="#fff7ed" stroke="#ea580c" stroke-width="5"/>';h+=node(180,74,92,42,labels[0],focus===0)+node(92,222,92,42,labels[1],focus===1)+node(268,222,92,42,labels[2],focus===2)+text(180,170,B('Remove one side to stop fire','Fire रोकने के लिए one side हटाएँ'),14,'middle','#9a3412',800);
    }else if(kind==='flame'){
      h+='<path d="M180 252 C102 210 130 151 171 109 C158 151 207 154 194 60 C263 130 270 220 180 252 Z" fill="#f59e0b" stroke="#c2410c" stroke-width="5"/><path d="M181 231 C151 205 169 180 187 158 C183 187 211 191 205 142 C233 190 220 224 181 231 Z" fill="#2563eb"/>';h+=text(82,65,labels[0],13,'middle',focus===0?'#b45309':'currentColor',800)+text(286,120,labels[1],13,'middle',focus===1?'#b45309':'currentColor',800)+text(76,226,labels[2],13,'middle',focus===2?'#b45309':'currentColor',800);
    }else if(kind==='lightning'){
      h+='<path d="M75 105 Q82 53 137 65 Q170 22 215 65 Q278 55 286 110 Z" fill="#cbd5e1" stroke="#475569" stroke-width="4"/><path d="M190 106 L150 175 L188 168 L154 256 L232 150 L194 158 L225 106 Z" fill="#f59e0b" stroke="#b45309" stroke-width="3"/>';h+=text(76,145,labels[0],13,'middle',focus===0?'#b45309':'currentColor',800)+text(285,170,labels[1],13,'middle',focus===1?'#b45309':'currentColor',800)+text(278,246,labels[2],13,'middle',focus===2?'#b45309':'currentColor',800);
    }else if(kind==='earthquake'){
      h+='<path d="M24 150 L85 120 L145 150 L205 112 L336 150 L336 244 L24 244 Z" fill="#fed7aa" stroke="#9a3412" stroke-width="4"/><path d="M192 112 L170 152 L194 180 L163 244" fill="none" stroke="#7c2d12" stroke-width="7"/>';
      [1,2,3].forEach(function(i){h+='<path d="M'+(150-25*i)+' '+(175-20*i)+' Q170 '+(130-30*i)+' '+(210+25*i)+' '+(175-20*i)+'" fill="none" stroke="#4f46e5" stroke-width="3" stroke-dasharray="7 5"/>';});h+=text(70,86,labels[0],13,'middle',focus===0?'#b45309':'currentColor',800)+text(250,83,labels[1],13,'middle',focus===1?'#b45309':'currentColor',800)+text(270,221,labels[2],13,'middle',focus===2?'#b45309':'currentColor',800);
    }else if(kind==='climate'){
      h+='<circle cx="180" cy="170" r="94" fill="#60a5fa" stroke="#2563eb" stroke-width="4"/><path d="M90 120 Q180 32 270 120" fill="none" stroke="#f59e0b" stroke-width="8"/><line x1="180" y1="18" x2="180" y2="64" stroke="#f59e0b" stroke-width="6" marker-end="url(#s8arr)"/>';h+=text(70,40,labels[0],13,'middle',focus===0?'#b45309':'currentColor',800)+text(292,64,labels[1],13,'middle',focus===1?'#b45309':'currentColor',800)+text(180,178,labels[2],13,'middle',focus===2?'#b45309':'#fff',800);
    }else if(f==='process'){
      h+=node(62,145,92,56,labels[0],focus===0)+arrow(110,145,140,145)+node(190,145,92,56,labels[1],focus===1)+arrow(238,145,268,145)+node(318,145,72,56,labels[2],focus===2);
      h+=text(190,55,B('Observe → connect → explain','देखें → जोड़ें → समझाएँ'),18,'middle','currentColor',800);
    }else if(f==='structure'){
      h+='<ellipse cx="180" cy="150" rx="132" ry="92" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="4"/>';
      h+=node(116,124,70,48,labels[0],focus===0,'circle')+node(218,105,70,48,labels[1],focus===1,'circle')+node(205,190,70,48,labels[2],focus===2,'circle');
      h+=text(180,276,B('Parts and roles belong to one connected system','Parts और roles एक connected system में हैं'),14);
    }else if(f==='force'){
      h+='<rect x="132" y="105" width="96" height="80" rx="9" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="4"/>';
      h+='<line x1="126" y1="145" x2="42" y2="145" stroke="'+(focus===0?'#b45309':'#4f46e5')+'" stroke-width="8" marker-end="url(#s8arr)"/><line x1="234" y1="145" x2="318" y2="145" stroke="'+(focus===1?'#b45309':'#4f46e5')+'" stroke-width="8" marker-end="url(#s8arr)"/>';
      h+=text(70,115,wrapLabel(labels[0]),13)+text(290,115,wrapLabel(labels[1]),13)+text(180,225,wrapLabel(labels[2]),14,'middle',focus===2?'#b45309':'currentColor',800);
    }else if(f==='hazard'){
      h+='<path d="M180 42 C230 42 265 76 266 116 C267 155 235 169 223 195 C210 224 224 248 252 262 C190 272 130 244 127 197 C124 156 161 139 166 112 C171 83 151 63 118 55 C137 46 158 42 180 42 Z" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="4"/>';
      h+=node(104,92,98,48,labels[0],focus===0)+node(255,130,98,48,labels[1],focus===1)+node(142,225,98,48,labels[2],focus===2);
      h+=text(180,22,B('Cause → event → safer response','Cause → event → safer response'),16,'middle','currentColor',800);
    }else if(f==='wave'){
      h+='<path d="M30 150 C55 70 85 230 110 150 S165 70 190 150 S245 230 270 150 S325 70 342 150" fill="none" stroke="var(--primary)" stroke-width="5"/>';
      h+=node(70,55,96,44,labels[0],focus===0)+node(180,245,96,44,labels[1],focus===1)+node(292,55,96,44,labels[2],focus===2);
      h+=text(180,180,B('A changing pattern carries information','Changing pattern information carry करता है'),14);
    }else{
      h+=node(180,54,106,48,labels[0],focus===0)+node(86,214,106,48,labels[1],focus===1)+node(274,214,106,48,labels[2],focus===2);
      h+=arrow(154,77,103,188)+arrow(111,214,246,214)+arrow(257,188,206,77);
      h+=text(180,148,B('Follow every connection','हर connection follow करें'),15,'middle','currentColor',800);
    }
    return '<svg viewBox="0 0 360 290" role="img" aria-label="'+E(t(tp.lab.title))+'. '+E(labels.join(', '))+'" xmlns="http://www.w3.org/2000/svg">'+h+'</svg>';
  }
  function panel(tp,focus){var labels=tp.lab.labels.map(function(x){return t(x);});return artwork(tp,focus)+'<div class="m8-equation">'+E(labels[focus])+'</div><p>'+B('Explain how this highlighted idea connects to the other two. The picture is a concept model; use the lesson text for exact conditions and limits.','Highlighted idea बाकी two से कैसे connect है, explain करें। Picture concept model है; exact conditions और limits के लिए lesson text use करें।')+'</p>';}
  function lab(tp){var id='s8-concept-'+tp.code.toLowerCase();return '<section class="m8-lab" id="'+id+'"><h3>'+E(t(tp.lab.title))+'</h3><label for="'+id+'-input">'+B('Focus on one labelled idea','एक labelled idea पर focus')+' <output>1 / 3</output></label><input id="'+id+'-input" type="range" min="1" max="3" value="1" oninput="SL8.exploreScience(\''+tp.code+'\',this.value)"><div class="m8-output" aria-live="polite">'+panel(tp,0)+'</div></section>';}
  api.exploreScience=function(code,value){var info=topicByCode(code),tp=info&&info.topic,el=document.getElementById('s8-concept-'+String(code).toLowerCase()),n=Math.max(1,Math.min(3,Math.round(Number(value)||1)));if(!tp||!el)return;el.querySelector('output').textContent=n+' / 3';el.querySelector('.m8-output').innerHTML=panel(tp,n-1);};
  course.chapters.forEach(function(c){c.topics.forEach(function(tp){DIAGRAMS['s8-'+tp.code.toLowerCase()]=function(){return lab(tp);};});});
}());

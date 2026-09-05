/* No browser or extra packages required: node scripts/test-math8.cjs */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const elements=new Map();
function element(id){if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:'',style:{},dataset:{},disabled:false,classList:{add(){},remove(){},toggle(){}},setAttribute(){},getAttribute(){return '';},querySelectorAll(){return [];},querySelector(){return element(id+'child');},insertAdjacentHTML(){},focus(){},addEventListener(){}});return elements.get(id);}
const memory=new Map();
const sandbox={console,Math,Date,JSON,Set,Number,Array,String,Boolean,RegExp,Object,parseInt,parseFloat,isNaN,encodeURIComponent,decodeURIComponent,
  localStorage:{getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,v),removeItem:k=>memory.delete(k)},
  document:{getElementById:element,querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){},body:{classList:{toggle(){}}}},
  navigator:{},location:{hash:''},setTimeout:()=>1,clearTimeout(){},setInterval:()=>1,clearInterval(){},requestAnimationFrame:()=>1,cancelAnimationFrame(){},scrollTo(){},addEventListener(){},matchMedia:()=>({matches:false}),alert(){},confirm:()=>true};
sandbox.window=sandbox;vm.createContext(sandbox);
const html=read('index.html');assert.equal(html,read('selflearn-app.html'),'app copies drifted');
const tags=[...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)];
let sharedSpeakFrom,sharedAudio;
for(const [,attrs,body] of tags){const src=/src="([^"]+)"/.exec(attrs);if(src){const file=src[1].split('?')[0];if(file==='math8-pilot.js'){sharedSpeakFrom=sandbox.audioPlayerSpeakFrom;sharedAudio=sandbox.vAudioExplainer;}if(!file.startsWith('http'))vm.runInContext(read(file),sandbox,{filename:file});}else if(body.trim())vm.runInContext(body,sandbox,{filename:'index-inline.js'});}
const data=sandbox.SL_DATA,subject=data.subjects.find(s=>s.code==='MATH8'),chapter=subject.chapters[0],qs=data.questions.filter(q=>q.subject==='MATH8');
assert.equal(subject.chapters.length,15);assert.equal(subject.chapters.reduce((n,c)=>n+c.topics.length,0),66);assert.equal(qs.length,528);
assert.equal(chapter.alignment.ncert,'1');assert.equal(chapter.alignment.jac,'5–6');
for(const lang of ['en','hi']){sandbox.LANG=lang;const intro=sandbox.vSubjectIntro('MATH8');assert(intro.includes('m8-alignment'));assert(intro.includes('5–6'));assert.equal((intro.match(/<tbody>/g)||[]).length,1);assert.equal((intro.match(/<tr>/g)||[]).length,16);}
for(const lang of ['en','hi']){sandbox.LANG=lang;const catalogue=sandbox.vSubject('MATH8');assert(catalogue.includes('chapter-index-grid'));assert.equal((catalogue.match(/id="math8-chapter-/g)||[]).length,15);assert.equal((catalogue.match(/document\.getElementById\('math8-chapter-/g)||[]).length,15);assert(catalogue.includes(lang==='en'?'All Class 8 units':'कक्षा 8 के सभी units'));}
assert(subject.intro.en.includes('fourteen chapters'));assert(subject.intro.en.includes('thirteen chapters'));assert(subject.intro.en.includes('only content already available'));
assert(subject.intro.hi.includes('चौदह chapters'));assert(subject.intro.hi.includes('तेरह chapters'));assert(subject.intro.hi.includes('केवल वही content'));
assert.equal(new Set(data.questions.map(q=>q.id)).size,data.questions.length,'duplicate IDs');
const counts={};qs.forEach(q=>{assert(sandbox.SL8.validQuestion(q),q.id);counts[q.type]=(counts[q.type]||0)+1;});
assert.deepEqual(counts,{mcq:198,multi:66,fill:132,match:66,subjective:66});
for(const tp of chapter.topics){assert.equal(qs.filter(q=>q.topic===tp.code).length,8);for(const lang of ['en','hi']){assert(tp.notes[lang].length>500);assert(tp.worked[0].problem[lang]);sandbox.LANG=lang;const rendered=sandbox.vTopic(tp.code);assert(!rendered.includes('{{diagram:'),tp.code);assert(rendered.includes('m8-lab-'));assert(!rendered.includes('Read the audio transcript'));assert(rendered.includes('SL8.practice'));}assert.equal(tp.audio,undefined);assert.equal(tp.audioPlayer,undefined);}
for(const c of subject.chapters.slice(1)){assert.equal(c.topics.length,4);assert(c.alignment.ncert&&c.alignment.jac);assert.equal(c.revision.length,4);for(const tp of c.topics){assert.equal(qs.filter(q=>q.topic===tp.code).length,8);for(const lang of ['en','hi']){assert(tp.notes[lang].length>500,tp.code);sandbox.LANG=lang;const rendered=sandbox.vTopic(tp.code);assert(!rendered.includes('{{diagram:'),tp.code);assert(rendered.includes('m8-concept-'));assert(rendered.includes('SL8.practice'));}}}
const rationalKinds=subject.chapters.find(c=>c.no===15).topics.map(tp=>tp.lab.kind);
assert.equal(JSON.stringify(rationalKinds),JSON.stringify(['rational','rational-compare','rational-ops','rational-between']));
sandbox.LANG='en';const rationalLesson=sandbox.vTopic('M8-15-1');assert(rationalLesson.includes('6/8 = 3/4 = 0.75'));assert(rationalLesson.includes('parts shaded'));assert(!rationalLesson.includes('hundreds'));
sandbox.LANG='hi';assert(sandbox.vTopic('M8-15-1').includes('हिस्से रंगे'));
for(const c of subject.chapters){const cq=qs.filter(q=>q.chapter===c.no);assert.equal(cq.length,c.no===1?80:32,'question count chapter '+c.no);for(const id of [...c.assessment,...c.revision])assert(cq.some(q=>q.id===id),'bad chapter question reference '+id);}
for(const q of qs.filter(q=>q.opts))for(const lang of ['en','hi'])assert.equal(new Set(q.opts[lang]).size,q.opts[lang].length,'duplicate option '+q.id+' '+lang);
// Independently computed objective-answer expectations, by lesson.
const expected=[
 ['A','C','B',['A','B','D'],49,24],['C','C','C',['A','C'],36,16],['A','B','C',['A','B'],11,.75],
 ['B','A','B',['A','B'],20,2],['C','B','B',['A','B','D'],5,13],['B','C','B',['A','B','D'],48,396],
 ['C','C','B',['A','B','D'],125,8],['A','B','B',['A','B','D'],9,8],['A','C','C',['A','B','D'],4,4],['A','B','C',['A','B','C'],60,343]
];
for(let t=0;t<10;t++)for(let j=0;j<6;j++){const q=qs[t*8+j],e=expected[t][j];if(q.type==='fill')assert.equal(sandbox.SL8.numeric(String(q.correct).split('|')[0]),e,q.id);else assert.equal(JSON.stringify(q.correct),JSON.stringify(e),q.id);}
for(const q of qs.filter(q=>q.type==='match'))for(const lang of ['en','hi'])assert.equal(new Set(q.pairs.map(p=>p.r[lang])).size,q.pairs.length,'ambiguous match '+q.id);
for(const id of [...chapter.assessment,...chapter.revision])assert(qs.some(q=>q.id===id));
assert.equal(chapter.assessment.length,20);assert.equal(chapter.revision.length,10);
const pow=(n,k)=>Math.abs(Math.pow(Math.round(Math.pow(n,1/k)),k)-n)<1e-8;
for(let n=2;n<=500;n++)for(const k of [2,3]){const f=sandbox.SL8.factorInfo(n,k);assert(pow(n*f.multiplier,k));assert(pow(n/f.divisor,k));for(let m=1;m<f.multiplier;m++)assert(!pow(n*m,k));for(let d=1;d<f.divisor;d++)if(n%d===0)assert(!pow(n/d,k));}
for(const [s,v] of [['४९',49],[' −5 ',-5],['3 / 4',.75],['.75',.75],['0/2',0],['1/0',null],['2+2',null],['NaN',null],['5 cm',null]])assert.equal(sandbox.SL8.numeric(s),v,s);
assert(sandbox.SL8.multiCorrect(['D','A','B'],['A','B','D']));assert(!sandbox.SL8.multiCorrect(['A'],['A','B']));assert(!sandbox.SL8.multiCorrect(['A','B','C'],['A','B']));
sandbox.LANG='en';
for(const q of qs){const row=sandbox.qToRow(q);assert.equal(row.length,sandbox.HEADERS.length);const r=Object.fromEntries(sandbox.HEADERS.map((h,i)=>[h,row[i]]));assert.equal(JSON.stringify(sandbox.rowToQ(r)),JSON.stringify(q),'roundtrip '+q.id);sandbox.QUIZ={qs:[q],i:0,results:[],answered:false,title:'Test',scope:'m8',written:{},t0:Date.now()};const rendered=sandbox.vQuiz();assert(rendered.includes('id="qbody"'));assert(rendered.includes('id="exp"'));if(q.type==='multi')assert(rendered.includes('type="checkbox"'));if(q.type==='subjective')assert(rendered.includes('textarea'));}
// Exercise scoring, duplicate-submission guards and subjective score separation.
sandbox.SL8.practice('M8-1-1','multi');sandbox.SL8.select('A',true);sandbox.SL8.select('B',true);sandbox.SL8.select('D',true);sandbox.SL8.answerMulti();assert.equal(sandbox.QUIZ.results[0],true);const attempts=sandbox.totalAttempts();sandbox.SL8.answerMulti();assert.equal(sandbox.totalAttempts(),attempts);
sandbox.SL8.practice('M8-1-3','fill');element('shortAns').value='११';sandbox.answerShort();assert.equal(sandbox.QUIZ.results[0],true);
sandbox.SL8.practice('M8-1-1','subjective');sandbox.SL8.draft('8 rows of 8 make 64.');sandbox.SL8.reveal();sandbox.SL8.rubric(0,true);sandbox.SL8.finishWritten();assert.equal(sandbox.QUIZ.results[0],'reviewed');assert(sandbox.vResult().includes('no automatic score'));assert(memory.has('sl_m8_written'));
assert.equal(sandbox.rowToQ({question_json:'{"subject":"MATH8"}'}),null);
// Removing pilot audio must leave the shared player and Class 11 audio intact.
assert.equal(sandbox.audioPlayerSpeakFrom,sharedSpeakFrom);
assert.equal(sandbox.vAudioExplainer,sharedAudio);
let spoken;
const voices=[{lang:'en-IN',name:'Test English'},{lang:'hi-IN',name:'Test Hindi'}];
sandbox.speechSynthesis={getVoices:()=>voices,cancel(){},speak(u){spoken=u;}};
sandbox.SpeechSynthesisUtterance=function(text){this.text=text;};sandbox.TTS_OK=true;sandbox._slVoices=[];
sandbox.audioPlayerLoad('MTH11-7-1','hi');assert.equal(spoken.lang,'hi-IN');
assert(sandbox.vAudioExplainer(sandbox.topicByCode('MTH11-7-1').topic).length>0);
for(const tp of chapter.topics){
  assert.equal(sandbox.vAudioExplainer(tp),'');
  for(const lang of ['en','hi']){
    sandbox.LANG=lang;const rendered=sandbox.vTopic(tp.code);
    assert(!rendered.includes('audioPlayerLoad('));assert(!rendered.includes('Read the audio transcript'));
    assert(!rendered.includes('Audio की script पढ़िए'));
  }
}
assert(!/audio/i.test(subject.intro.en));assert(!/audio/i.test(subject.intro.hi));
sandbox.LANG='en';
// Existing courses still render and retain original quiz formats.
for(const s of data.subjects.filter(s=>s.code!=='MATH8')){assert(sandbox.vSubject(s.code).includes(s.name.en));assert(sandbox.vTopic(s.chapters[0].topics[0].code).length>100);}
console.log('PASS: 15 aligned units, 66 bilingual micro-topics, 528 questions, interactive diagrams, answer keys, 998 factor cases, five-format scoring, spreadsheet round trips, and existing-course render smoke tests.');

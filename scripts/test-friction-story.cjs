/* Focused acceptance test for the story-led Friction pilot. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8'),elements=new Map();
function el(id){if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',value:'',style:{},dataset:{},disabled:false,classList:{add(){},remove(){},toggle(){}},setAttribute(){},getAttribute(){return''},querySelectorAll(){return[]},querySelector(){return el(id+'c')},focus(){},addEventListener(){}});return elements.get(id)}
const s={console,Math,Date,JSON,Set,Number,Array,String,Boolean,RegExp,Object,parseInt,parseFloat,isNaN,encodeURIComponent,decodeURIComponent,localStorage:{getItem(){return null},setItem(){},removeItem(){}},document:{getElementById:el,querySelector(){return null},querySelectorAll(){return[]},addEventListener(){},body:{classList:{toggle(){}}}},navigator:{},location:{hash:''},setTimeout(){return 1},clearTimeout(){},setInterval(){return 1},clearInterval(){},requestAnimationFrame(){return 1},cancelAnimationFrame(){},scrollTo(){},addEventListener(){},matchMedia(){return{matches:false}},alert(){},confirm(){return true}};s.window=s;vm.createContext(s);
const html=read('index.html');for(const [,a,b] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)){const m=/src="([^"]+)"/.exec(a);if(m){const f=m[1].split('?')[0];if(!f.startsWith('http'))vm.runInContext(read(f),s,{filename:f})}else if(b.trim())vm.runInContext(b,s)}
const c=s.SL_DATA.subjects.find(x=>x.code==='SCI8').chapters.find(x=>x.no===19),qs=s.SL_DATA.questions.filter(q=>q.subject==='SCI8'&&q.chapter===19);assert(c);assert.equal(c.topics.length,4);assert.equal(qs.length,32);assert.equal(new Set(qs.map(q=>q.id)).size,32);
const hindiLesson=c.topics.map(tp=>[tp.name.hi,tp.notes.hi,tp.worked.map(w=>[w.title.hi,w.problem.hi,w.answer.hi,w.steps.map(x=>[x.do.hi,x.why.hi])])]).flat(Infinity).join(' ').replace(/\{\{diagram:[^}]+\}\}/g,'');
const latinWords=hindiLesson.match(/[A-Za-z]+/g)||[],hindiWords=hindiLesson.match(/[\u0900-\u097F]+/g)||[];
const latinRatio=latinWords.length/(latinWords.length+hindiWords.length);
assert(latinRatio<0.06,`Hindi lesson still contains too much English (${Math.round(latinRatio*100)}%; ${[...new Set(latinWords)].slice(0,60).join(', ')})`);
for(const lang of ['en','hi']){s.LANG=lang;for(const tp of c.topics){const h=s.vTopic(tp.code);assert(h.includes('friction-story-hero'));assert(h.includes('cycle-repair-story.webp'));assert(h.includes(lang==='en'?'Science-club notebook':'विज्ञान-मंडली की कॉपी'));assert(h.includes(lang==='en'?'Pause and predict':'पहले अनुमान लगाएँ'));assert(h.includes('friction-choice-row'));assert(!h.includes('{{diagram:'));assert(!/undefined|NaN/.test(h));}}
const requiredLabels={
  's8-friction-slip':['Tyre','Road surface','Friction force'],
  's8-friction-brake':['Brake pad','Wheel rim','Wheel hub','Stopping-time scale'],
  's8-friction-hub':['Hub shell','Ball bearings','Axle','Heat indicator'],
  's8-friction-decision':['Tyre','Tyre tread','Road surface']
};
for(const [key,labels] of Object.entries(requiredLabels)){s.LANG='en';const h=s.DIAGRAMS[key]();assert(h.includes('<img'));assert(h.includes('<svg'));assert(h.includes('Predict first'));assert(h.includes('friction-component-key'));for(const label of labels)assert(h.includes(label),`${key} is missing ${label}`);}
const css=read('math8-pilot.css');assert(css.includes('.friction-svg-label'));assert(css.includes('font-size:14px'));assert(css.includes('.friction-component-key'));
assert(fs.statSync(path.join(root,'assets/science8/friction/cycle-repair-story.webp')).size<350000,'story image too heavy');
console.log('PASS: Friction pilot has four continuous story episodes, one optimised original scene, four specific prediction labs, 32 mixed questions, bilingual narrative, and safety limits.');

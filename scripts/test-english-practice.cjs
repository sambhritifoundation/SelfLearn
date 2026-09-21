/* Browser regression: SL_NODE_MODULES points at the installed Playwright package parent. */
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require(path.join(process.env.SL_NODE_MODULES,'playwright'));
const root=path.resolve(__dirname,'..');
const server=http.createServer((req,res)=>{
  const name=decodeURIComponent(req.url.split('?')[0]);const file=path.resolve(root,'.'+(name==='/'?'/index.html':name));
  if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
  fs.readFile(file,(err,data)=>{if(err){res.writeHead(404).end();return;}res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':'text/html');res.end(data);});
});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const base='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({headless:true,args:['--use-fake-device-for-media-stream','--use-fake-ui-for-media-stream'],executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'});
 const errors=[];
 try{
  for(const width of [1280,390]){
   const page=await browser.newPage({viewport:{width,height:900},...(width===390?{userAgent:'Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 Chrome/125.0 Mobile Safari/537.36'}:{})});
   page.on('pageerror',e=>errors.push(e.message));
   await page.route(/^https?:\/\/(?!127\.0\.0\.1)/,route=>route.abort());
   await page.route('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1/+esm',route=>route.fulfill({contentType:'application/javascript',body:"export async function pipeline(task,model){globalThis.__asrModel=model;return async()=>({text:'Hello Akshata, I am Riya. I am from Patna.'})}"}));
   await page.goto(base);await page.evaluate(()=>go('subject',{code:'ENGCOM'}));
   assert.equal(await page.locator('.ep-choices .card').count(),2);
   await page.locator('.ep-choices button').first().click();assert.equal(await page.locator('.ep-lesson').count(),12);
   for(const track of ['listening','speaking'])for(const lang of ['en','hi'])for(let i=0;i<12;i++){
    await page.evaluate(({track,lang,i})=>{LANG=lang;EnglishPractice.open(track,i);},{track,lang,i});
    assert.equal(await page.locator('#ep-title').count(),1);
    assert(!(await page.locator('.ep').innerText()).includes('<span'), 'No escaped translation markup');
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`${track}/${lang}/${i}: overflow ${width}`);
    const conversational=await page.evaluate(i=>!!SL_ENGLISH_PRACTICE[i].conversation,i);
    assert.equal(await page.locator('details').count(),track==='listening'?2:(conversational?1:3));
   }
   await page.evaluate(()=>{LANG='en';EnglishPractice.open('listening',0);});
   await page.getByRole('button',{name:'Finish this practice',exact:true}).click();
   assert.match(await page.locator('#ep-completion').innerText(),/First get all three/);
   await page.getByRole('button',{name:'Check my understanding',exact:true}).click();
   assert.equal(await page.locator('fieldset [role=status]').filter({hasText:'Choose an answer'}).count(),3);
   for(let j=0;j<3;j++)await page.locator(`input[name=ep-q${j}][value="${[0,1,2][j]}"]`).check();
   await page.getByRole('button',{name:'Check my understanding',exact:true}).click();
   assert.match(await page.locator('#ep-result').innerText(),/3\/3/);
   await page.locator('#ep-retold').check();await page.getByRole('button',{name:'Finish this practice',exact:true}).click();
   assert.match(await page.locator('#ep-completion').innerText(),/Practice saved/);
   await page.evaluate(()=>EnglishPractice.open('listening'));
   assert.match(await page.locator('.ep-summary').innerText(),/1\/12/);
   await page.reload();await page.evaluate(()=>EnglishPractice.open('listening'));
   assert.match(await page.locator('.ep-summary').innerText(),/1\/12/);
   await page.evaluate(()=>{switchProfile('Track tester');EnglishPractice.open('listening');});
   assert.match(await page.locator('.ep-summary').innerText(),/0\/12/);
   await page.evaluate(()=>switchProfile(''));
   // Chapter 1 is a system-led conversation: speak, auto-record, check, continue.
   await page.reload();
   await page.evaluate(width=>{LANG='en';const mobile=width===390,originalGetUserMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=async constraints=>{const stream=await originalGetUserMedia(constraints);window.__trackReleased=false;stream.getTracks().forEach(track=>{const stop=track.stop.bind(track);track.stop=()=>{window.__trackReleased=true;stop();};});return stream;};window.SpeechRecognition=class{start(){setTimeout(()=>this.onstart?.(),0)}stop(){setTimeout(()=>{if(!mobile||window.__trackReleased)this.onresult?.({results:[[{transcript:'Hello Akshata, I am Riya. I am from Patna.'}]]});if(!mobile)this.onend?.();},80)}};Object.defineProperty(window,'webkitSpeechRecognition',{configurable:true,value:undefined});speechSynthesis.speak=u=>setTimeout(()=>u.onend(),0);EnglishPractice.open('speaking',0);},width);
   await page.locator('#ep-start-chat').click();
   const replies=['Hello Akshata, I am Riya. I am from Patna.','Nice to meet you too. I study in Class 8.','Science.','I usually come to school by bus.','Yes, I have lunch with my friends.','I like to play badminton.','Yes, the library is next to the science room.','Of course, I can show you the library after class.','Yes, we play football.','Yes, let us meet at lunch tomorrow.','Yes, see you tomorrow.'];
   for(const [replyIndex,reply] of replies.entries()){
    await page.waitForFunction(()=>!document.getElementById('ep-stop-turn').disabled);
    if(replyIndex===0){await page.waitForTimeout(500);assert(!(await page.locator('#ep-stop-turn').isDisabled()),'recording must not time out');}
    const stoppedAt=Date.now();await page.locator('#ep-stop-turn').click();
    await page.waitForFunction(count=>document.querySelectorAll('.ep-bubble.learner').length===count,replyIndex+1);
    if(width===390&&replyIndex===0){assert(Date.now()-stoppedAt<2000,'mobile transcript should post without the old six-second wait');assert.equal(await page.evaluate(()=>window.__asrModel),undefined,'mobile microphone release should avoid local transcription');}
    if(replyIndex===0)assert((await page.locator('.ep-bubble.learner').last().innerText()).includes(reply),'complete learner response');
   }
   await page.waitForFunction(()=>document.getElementById('ep-chat-status').textContent.includes('Conversation complete'));
   assert.equal(await page.locator('.ep-bubble.feedback').count(),11);
   assert.equal(await page.locator('.ep-bubble.learner').count(),11);
   assert.equal(await page.locator('.ep-bubble.system').count(),11);
   assert.equal(await page.locator('#ep-model-text').textContent(),'Yes, I would like that. See you tomorrow, Akshata!');
   assert(await page.locator('#ep-start-chat').isEnabled());
   await page.locator('#ep-start-chat').click();await page.waitForFunction(()=>!document.getElementById('ep-stop-turn').disabled);await page.locator('#ep-end-chat').click();
   assert.match(await page.locator('#ep-chat-status').innerText(),/Conversation stopped/);
   // If native speech recognition returns nothing, transcribe the recorded audio locally.
   await page.evaluate(()=>{window.SpeechRecognition=undefined;window.webkitSpeechRecognition=undefined;window.AudioContext=class{async decodeAudioData(){const samples=new Float32Array(16000);samples.fill(.1);return{duration:1,sampleRate:16000,length:16000,numberOfChannels:1,getChannelData:()=>samples}}async close(){}};window.OfflineAudioContext=class{createBufferSource(){return{connect(){},start(){}}}async startRendering(){return{getChannelData:()=>new Float32Array(16000).fill(.1)}}};EnglishPractice.open('speaking',0);speechSynthesis.speak=u=>setTimeout(()=>u.onend(),0);});
   await page.locator('#ep-start-chat').click();await page.waitForFunction(()=>!document.getElementById('ep-stop-turn').disabled);await page.locator('#ep-stop-turn').click();
   await page.waitForFunction(()=>document.querySelectorAll('.ep-bubble.learner').length===1);
   assert((await page.locator('.ep-bubble.learner').innerText()).includes('Hello Akshata, I am Riya. I am from Patna.'));
   assert.equal(await page.evaluate(()=>window.__asrModel),width===390?'Xenova/whisper-tiny.en':'Xenova/whisper-base.en');
   await page.locator('#ep-end-chat').click();
   await page.evaluate(()=>Object.defineProperty(navigator.mediaDevices,'getUserMedia',{configurable:true,value:async()=>{throw new Error('denied');}}));
   await page.locator('#ep-start-chat').click();await page.waitForFunction(()=>!document.getElementById('ep-transcript-wrap').hidden);
   await page.locator('#ep-transcript').fill('Hello Akshata, I am Riya. I am from Patna.');await page.getByRole('button',{name:'Check my response and continue'}).click();
   assert.match(await page.locator('#ep-chat-status').innerText(),/partner will continue/);await page.locator('#ep-end-chat').click();
   await page.evaluate(()=>EnglishPractice.open('speaking'));
   assert.match(await page.locator('.ep-summary').innerText(),/1\/12/);
   // Exercise the actual audio controls against a deterministic device boundary.
   await page.evaluate(()=>{window.__spoken=[];speechSynthesis.speak=u=>window.__spoken.push({text:u.text,rate:u.rate});EnglishPractice.open('listening',11);});
   await page.getByRole('button',{name:'▶ Listen',exact:true}).click();await page.getByRole('button',{name:'🐢 Slow',exact:true}).click();
   assert.deepEqual(await page.evaluate(()=>window.__spoken.map(x=>x.rate)),[1,.75]);
   assert((await page.evaluate(()=>window.__spoken[0].text)).includes('community centre'));
   await page.getByRole('button',{name:'■ Stop',exact:true}).click();
   // Wrong answers provide evidence and must not satisfy completion.
   for(let j=0;j<3;j++)await page.locator(`input[name=ep-q${j}][value="${[0,1,0][j]}"]`).check();
   await page.getByRole('button',{name:'Check my understanding',exact:true}).click();
   assert.match(await page.locator('#ep-result').innerText(),/0\/3/);
   assert.equal(await page.locator('.ep-retry').count(),3);
   // Every answer key produces a passing attempt; speaking progress stays separate.
   for(let i=0;i<12;i++){
    await page.evaluate(i=>EnglishPractice.open('listening',i),i);
    const keys=await page.evaluate(i=>SL_ENGLISH_PRACTICE[i].checks.map(q=>q[2]),i);
    for(let j=0;j<3;j++)await page.locator(`input[name=ep-q${j}][value="${keys[j]}"]`).check();
    await page.getByRole('button',{name:'Check my understanding',exact:true}).click();assert.match(await page.locator('#ep-result').innerText(),/3\/3/);
   }
   for(const code of ['ENGCOM','MATH8','SCI8','ACC11']){
    await page.evaluate(code=>go('subject',{code}),code);
    if(code!=='ACC11')assert(await page.locator('h1').count());
    if(code!=='ENGCOM')assert.equal(await page.locator('.ep-choices').count(),0);
   }
   const topic=await page.evaluate(()=>SUBJECTS.find(s=>s.code==='ENGCOM').chapters[0].topics[0].code);
   await page.evaluate(code=>go('topic',{code}),topic);assert((await page.locator('#app').innerText()).length>200);
   await page.evaluate(code=>startQuiz('topic',code),topic);
   assert.equal(await page.evaluate(()=>VIEW.name),'quiz');
   assert((await page.evaluate(()=>QUIZ.qs.length))>0);
   await page.evaluate(()=>go('home'));assert(await page.locator('h1').count());
   await page.goto(base+'/examprep.html');assert((await page.locator('body').innerText()).includes('ExamPrep'));
   await page.goto(base+'/selflearn-app.html');await page.evaluate(()=>EnglishPractice.open('speaking',11));assert.equal(await page.locator('#ep-title').count(),1);
   await page.evaluate(()=>EnglishPractice.open('speaking',0));
   fs.mkdirSync(path.join(root,'tmp'),{recursive:true});
   await page.screenshot({path:path.join(root,'tmp',`english-speaking-${width}.png`),fullPage:true});
   await page.evaluate(()=>EnglishPractice.open('listening',0));await page.screenshot({path:path.join(root,'tmp',`english-listening-${width}.png`),fullPage:true});
   await page.close();
  }
  assert.deepEqual(errors,[]);
  assert.equal(fs.readFileSync(path.join(root,'index.html'),'utf8'),fs.readFileSync(path.join(root,'selflearn-app.html'),'utf8'));
  console.log('PASS: 96 bilingual desktop/mobile lesson views, eleven-turn speaking conversation, corrections, stop flow, 24 answer sets, completion gates, learner isolation, microphone fallback, audio controls, existing subjects and ExamPrep; no application errors.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>server.close());

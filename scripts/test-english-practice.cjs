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
   const page=await browser.newPage({viewport:{width,height:900}});
   page.on('pageerror',e=>errors.push(e.message));
   await page.route(/^https?:\/\/(?!127\.0\.0\.1)/,route=>route.abort());
   await page.goto(base);await page.evaluate(()=>go('subject',{code:'ENGCOM'}));
   assert.equal(await page.locator('.ep-choices .card').count(),2);
   await page.locator('.ep-choices button').first().click();assert.equal(await page.locator('.ep-lesson').count(),12);
   for(const track of ['listening','speaking'])for(const lang of ['en','hi'])for(let i=0;i<12;i++){
    await page.evaluate(({track,lang,i})=>{LANG=lang;EnglishPractice.open(track,i);},{track,lang,i});
    assert.equal(await page.locator('#ep-title').count(),1);
    assert(!(await page.locator('.ep').innerText()).includes('<span'), 'No escaped translation markup');
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`${track}/${lang}/${i}: overflow ${width}`);
    assert.equal(await page.locator('details').count(),track==='listening'?2:3);
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
   await page.evaluate(()=>{switchProfile('');EnglishPractice.open('speaking',0);});
   await page.locator('#ep-draft').fill('<script>draft stays text</script>');
   await page.evaluate(()=>{EnglishPractice.open('speaking',1);EnglishPractice.open('speaking',0);});
   assert.equal(await page.locator('#ep-draft').inputValue(),'<script>draft stays text</script>');
   await page.locator('#ep-record').click();
   await page.waitForFunction(()=>document.getElementById('ep-record-status').textContent.startsWith('Recording locally'));
   await page.waitForTimeout(350);
   await page.locator('#ep-record-stop').click();
   await page.waitForFunction(()=>!document.getElementById('ep-recording').hidden);
   assert((await page.locator('#ep-recording').getAttribute('src')).startsWith('blob:'));
   await page.locator('#ep-record').click();
   await page.waitForFunction(()=>document.getElementById('ep-record-status').textContent.startsWith('Recording locally'));
   await page.evaluate(()=>{setLang('hi');setLang('en');});
   assert(await page.locator('#ep-record-stop').isDisabled());
   await page.evaluate(()=>Object.defineProperty(navigator.mediaDevices,'getUserMedia',{configurable:true,value:async()=>{throw new Error('denied');}}));
   await page.locator('#ep-record').click();
   await page.waitForFunction(()=>document.getElementById('ep-record-status').textContent.includes('unavailable'));
   for(const box of await page.locator('.ep-rubric,#ep-transfer').all())await box.check();
   await page.getByRole('button',{name:'Finish this practice',exact:true}).click();
   assert.match(await page.locator('#ep-completion').innerText(),/Practice saved/);
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
   fs.mkdirSync(path.join(root,'tmp'),{recursive:true});
   await page.screenshot({path:path.join(root,'tmp',`english-speaking-${width}.png`),fullPage:true});
   await page.evaluate(()=>EnglishPractice.open('listening',0));await page.screenshot({path:path.join(root,'tmp',`english-listening-${width}.png`),fullPage:true});
   await page.close();
  }
  assert.deepEqual(errors,[]);
  assert.equal(fs.readFileSync(path.join(root,'index.html'),'utf8'),fs.readFileSync(path.join(root,'selflearn-app.html'),'utf8'));
  console.log('PASS: 96 bilingual desktop/mobile lesson views, 24 answer sets, retries, completion gates, learner isolation, reload persistence, safe draft rendering, microphone fallback, audio controls, existing subjects and ExamPrep; no application errors.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(()=>server.close());

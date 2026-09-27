const assert=require('node:assert/strict'),path=require('node:path');
const {projects,prompts}=require('../computer-project-prompts.js');
const {chromium}=require(process.env.SL_NODE_MODULES?path.join(process.env.SL_NODE_MODULES,'playwright'):'playwright');
const root=path.resolve(__dirname,'..'),file=p=>'file:///'+path.join(root,p).replace(/\\/g,'/');
(async()=>{const opts={headless:true};if(process.platform==='win32')opts.executablePath=process.env.SL_CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe';const browser=await chromium.launch(opts);try{
 for(const width of [350,1280]){
  const page=await browser.newPage({viewport:{width,height:900}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route(/^https?:/,r=>r.abort());await page.goto(file('index.html'));
  for(const lang of ['en','hi'])for(const p of Object.values(projects)){
   const count=p.chapter===25?7:6;
   for(let n=1;n<=count;n++){
    await page.evaluate(({lang,code})=>{LANG=lang;go('topic',{code});},{lang,code:'COMPAPP-'+p.chapter+'-'+n});
    assert(await page.locator('.project-prompt').count()>=2);
    const first=page.locator('.project-prompt').first();await first.locator('summary').click();
    const value=await first.locator('textarea').inputValue();assert(value.includes('ACCEPTANCE CHECKS'));assert(value.includes('OUTPUT'));assert(value.includes('PROJECT CONTEXT'));
    await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async text=>{window.copiedPrompt=text;}}}));
    await first.locator('button').click();assert.equal(await page.evaluate(()=>window.copiedPrompt),value);
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
   }
  }
  await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw Error('denied');}}}));
  await page.locator('.project-prompt').first().locator('button').click();assert(await page.locator('.project-prompt textarea').first().evaluate(e=>e.selectionStart===0&&e.selectionEnd===e.value.length));
  for(const [key,p] of Object.entries(projects)){
   await page.goto(file('examples/'+p.folder+'/AI-PROMPTS.html'));assert.equal(await page.locator('details').count(),prompts.filter(x=>x.project===key).length);
   await page.locator('summary').first().click();const value=await page.locator('textarea').first().inputValue();assert.equal(value,prompts.find(x=>x.project===key).body);
   await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:undefined}));await page.locator('button').first().click();assert(await page.locator('textarea').first().evaluate(e=>e.selectionEnd===e.value.length));assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  }
  assert.deepEqual(errors,[]);await page.close();
 }
 console.log('PASS: all 13 lesson prompt panels in both languages, complete copy payloads, clipboard-denied fallback, offline guides and phone/desktop layout.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});

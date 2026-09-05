/* Run after serving dist: SL_NODE_MODULES=<bundled node_modules> node scripts/audit-science8-browser.cjs */
const assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs');
const modules=process.env.SL_NODE_MODULES;if(!modules)throw new Error('Set SL_NODE_MODULES to the bundled node_modules directory.');
const {chromium}=require(path.join(modules,'playwright'));
(async()=>{const installedChrome='C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';const browser=await chromium.launch({headless:true,...(fs.existsSync(installedChrome)?{executablePath:installedChrome}:{})});const errors=[],blockedExternal=[];
  for(const width of [1280,390]){const page=await browser.newPage({viewport:{width,height:900}});page.on('console',m=>{if(m.type()==='error'){const x='console '+m.text();(x.includes('ERR_NETWORK_ACCESS_DENIED')?blockedExternal:errors).push(x);}});page.on('pageerror',e=>errors.push('page '+e.message));
    await page.goto('http://127.0.0.1:8765/#science8');await page.waitForTimeout(150);
    assert.equal(await page.locator('.chapter-card').count(),18);assert((await page.locator('h1').first().innerText()).includes('Science'));
    assert((await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)),'subject overflow '+width);
    if(width===1280)await page.screenshot({path:'tmp/science8-catalogue.png',fullPage:true});
    for(const lang of ['en','hi']){await page.evaluate(lang=>{LANG=lang;go('subject',{code:'SCI8'});},lang);for(let c=1;c<=18;c++)for(let t=1;t<=4;t++){const code=`S8-${c}-${t}`;await page.evaluate(code=>go('topic',{code}),code);await page.waitForTimeout(5);
        assert.equal(await page.locator('.m8-lab svg').count(),1,code+' svg');assert.equal(await page.locator('.m8-formats button').count(),6,code+' formats');
        const body=await page.locator('main').innerText();assert(!body.includes('{{diagram:'),code);assert(body.includes(lang==='en'?'Three examples around you':'अपने आसपास के तीन examples'),code+' examples');assert(body.includes(lang==='en'?'What this prepares you for':'आगे किस काम आएगा'),code+' next');
        const before=await page.locator('.m8-output').innerHTML();await page.locator('.m8-lab input[type=range]').evaluate(el=>{el.value='3';el.dispatchEvent(new Event('input',{bubbles:true}));});const after=await page.locator('.m8-output').innerHTML();assert.notEqual(after,before,code+' explorer unchanged');assert.equal(await page.locator('.m8-lab output').innerText(),'3 / 3');
        assert((await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)),code+' overflow '+width+' '+lang);
        if(width===1280&&lang==='en'&&code==='S8-5-4')await page.screenshot({path:'tmp/science8-topic.png',fullPage:true});
      }}await page.close();}
  assert.deepEqual(errors,[]);await browser.close();console.log('PASS: browser-rendered 288 topic views (72 × 2 languages × 2 widths), all explorers, practice controls, responsive widths, and zero application errors. '+blockedExternal.length+' expected CDN request(s) were blocked by the local sandbox.');
})().catch(e=>{console.error(e);process.exitCode=1;});

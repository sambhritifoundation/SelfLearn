/* Browser regression for the seven lessons, starter links and functional demo. */
const assert=require('node:assert/strict'),path=require('node:path');
const {chromium}=require(process.env.SL_NODE_MODULES?path.join(process.env.SL_NODE_MODULES,'playwright'):'playwright');
const root=path.resolve(__dirname,'..');
(async()=>{const opts={headless:true};if(process.platform==='win32')opts.executablePath=process.env.SL_CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe';const browser=await chromium.launch(opts);try{
  for(const width of [390,1280]){
    const page=await browser.newPage({viewport:{width,height:900}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route(/^https?:/,r=>r.abort());await page.goto('file:///'+path.join(root,'index.html').replace(/\\/g,'/'));
    assert.equal(await page.evaluate(()=>SL_DATA.subjects.find(s=>s.code==='COMPAPP').chapters.find(c=>c.no===25).topics.length),7);
    assert.equal(await page.evaluate(()=>SL_DATA.questions.filter(q=>q.chapter===25&&q.subject==='COMPAPP').length),21);
    for(const lang of ['en','hi']){
      await page.evaluate(lang=>{LANG=lang;go('subject',{code:'COMPAPP'});},lang);
      assert((await page.locator('#app').innerText()).includes(lang==='en'?'Satbarwa Bazar':'Satbarwa Bazar'));
      for(let n=1;n<=7;n++){
        await page.evaluate(n=>go('topic',{code:'COMPAPP-25-'+n}),n);
        const visual=page.locator('.notes img');assert.equal(await visual.count(),n===1?2:1);
        await visual.first().scrollIntoViewIfNeeded();
        await page.waitForFunction(()=>{const img=document.querySelector('.notes img');return img&&img.complete&&img.naturalWidth===(innerWidth<601?350:960);});
        if(n===1){assert.equal(await page.locator('.starter-actions a[download][href="examples/satbarwa-bazar-starter.zip"]').count(),1);assert.equal(await page.locator('.starter-actions a[href="examples/satbarwa-bazar/index.html"]').count(),1);}
        assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
      }
      await page.evaluate(()=>go('assignment',{code:'COMPAPP',chapter:25}));
      assert.equal(await page.locator('.ca-practical a[href="examples/satbarwa-bazar/index.html"]').count(),1);
      assert.equal(await page.locator('.ca-practical a[download][href="examples/satbarwa-bazar-starter.zip"]').count(),1);
      if(width===1280&&lang==='en'){
        const ids=await page.evaluate(()=>SL_DATA.questions.filter(q=>q.subject==='COMPAPP'&&q.chapter===25).map(q=>q.id));
        for(const id of ids){
          await page.evaluate(id=>{const q=SL_DATA.questions.find(x=>x.id===id);QUIZ={scope:'topic',key:q.topic,title:q.topic,backTopic:q.topic,qs:[q],i:0,results:[],answered:false,t0:Date.now()};go('quiz');},id);
          await page.evaluate(()=>{const q=QUIZ.qs[0];if(q.type==='mcq')answerMcq(QUIZ.optOrder.indexOf('ABCD'.indexOf(q.correct)));else{document.getElementById('shortAns').value=q.correct;answerShort();}});
          assert.equal(await page.evaluate(()=>QUIZ.results[0]),true,id+' should score');
        }
      }
    }
    assert.deepEqual(errors,[]);await page.close();
    const demo=await browser.newPage({viewport:{width,height:900}}),demoErrors=[];demo.on('pageerror',e=>demoErrors.push(e.message));await demo.goto('file:///'+path.join(root,'examples','satbarwa-bazar','index.html').replace(/\\/g,'/'));
    assert.equal(await demo.locator('.product').count(),6);
    assert.equal(await demo.locator('.add:disabled').count(),1);
    await demo.locator('.product').filter({hasText:'Rice'}).getByRole('button',{name:'Add Rice'}).click();
    await demo.locator('.product').filter({hasText:'Rice'}).getByRole('button',{name:'Add Rice'}).click();
    await demo.locator('.product').filter({hasText:'Dal'}).getByRole('button',{name:'Add Dal'}).click();
    assert.equal(await demo.locator('#total').innerText(),'₹230');
    await demo.locator('.cart-row').filter({hasText:'Rice'}).getByRole('button',{name:'Rice −'}).click();
    assert.equal(await demo.locator('#total').innerText(),'₹170');
    await demo.locator('.cart-row').filter({hasText:'Dal'}).getByRole('button',{name:'Remove'}).click();
    assert.equal(await demo.locator('#total').innerText(),'₹60');
    await demo.locator('#search').fill('DAL');assert.equal(await demo.locator('.product').count(),1);
    await demo.getByRole('button',{name:'Vegetables'}).click();assert(await demo.locator('#empty').isVisible());
    await demo.locator('#clear').click();assert.equal(await demo.locator('.product').count(),6);
    await demo.locator('#hiBtn').click();assert.equal(await demo.locator('#catalog h2').innerText(),'Sample products');assert.equal(await demo.locator('.product').count(),6);
    assert(await demo.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    assert.deepEqual(demoErrors,[]);await demo.close();
  }
  console.log('PASS: 7 bilingual lessons, preview, starter links, 14 responsive diagrams, 21 questions, search/filter/empty state, demo cart totals, phone and desktop layouts.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});

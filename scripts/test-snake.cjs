const assert=require('node:assert/strict'),path=require('node:path');
const E=require('../examples/snake-arcade/engine.js');
let g=E.create(20,()=>0);assert(!g.snake.some(p=>p.x===g.food.x&&p.y===g.food.y));
g.food={x:11,y:10};E.step(g,()=>0);assert.equal(g.score,10);assert.equal(g.snake.length,4);
assert.equal(E.turn(g,'left'),false);assert.equal(E.turn(g,'up'),true);assert.equal(E.turn(g,'left'),false);E.step(g);assert.deepEqual(g.snake[0],{x:11,y:9});
g=E.create();g.snake=[{x:19,y:10},{x:18,y:10},{x:17,y:10}];E.step(g);assert.equal(g.over,true);
g=E.create();g.snake=[{x:2,y:2},{x:2,y:3},{x:3,y:3},{x:3,y:2},{x:4,y:2}];g.food={x:0,y:0};E.step(g);assert.equal(g.over,true,'body collision');
g=E.create();g.snake=[{x:2,y:2},{x:2,y:3},{x:3,y:3},{x:3,y:2}];g.food={x:0,y:0};E.step(g);assert.equal(g.over,false,'moving old tail is allowed');
g={size:2,snake:[{x:0,y:0},{x:0,y:1},{x:1,y:1}],direction:'right',queued:null,food:{x:1,y:0},score:0,over:false};E.step(g);assert.equal(g.won,true);assert.equal(g.food,null);
const {chromium}=require(process.env.SL_NODE_MODULES?path.join(process.env.SL_NODE_MODULES,'playwright'):'playwright');
const root=path.resolve(__dirname,'..');const file=p=>'file:///'+path.join(root,p).replace(/\\/g,'/');
(async()=>{const opts={headless:true};if(process.platform==='win32')opts.executablePath=process.env.SL_CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe';const browser=await chromium.launch(opts);try{
 for(const width of [350,1280]){
  const page=await browser.newPage({viewport:{width,height:950}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route(/^https?:/,r=>r.abort());await page.goto(file('examples/snake-arcade/index.html'));
  await page.getByRole('button',{name:'Start game',exact:true}).click();await page.evaluate(()=>{game.food={x:game.snake[0].x+1,y:game.snake[0].y};});await page.waitForFunction(()=>document.getElementById('score').textContent==='10');
  await page.getByRole('button',{name:'Pause',exact:true}).click();const before=await page.evaluate(()=>JSON.stringify(game.snake));await page.waitForTimeout(250);assert.equal(await page.evaluate(()=>JSON.stringify(game.snake)),before);
  await page.getByRole('button',{name:'Resume',exact:true}).click();await page.getByRole('button',{name:'Move up',exact:true}).click();await page.waitForFunction(()=>game.direction==='up');
  await page.locator('#board').focus();await page.keyboard.press('Space');assert.equal(await page.locator('#stateLabel').innerText(),'PAUSED');await page.getByRole('button',{name:'Restart',exact:true}).click();assert.equal(await page.locator('#score').innerText(),'0');
  await page.evaluate(()=>{game.snake=[{x:19,y:10},{x:18,y:10},{x:17,y:10}];game.direction='right';game.queued=null;});await page.waitForFunction(()=>document.getElementById('stateLabel').textContent==='GAME OVER');assert(await page.getByRole('button',{name:'Pause',exact:true}).isDisabled());
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));assert.deepEqual(errors,[]);await page.close();
  const course=await browser.newPage({viewport:{width,height:950}});await course.route(/^https?:/,r=>r.abort());await course.goto(file('index.html'));
  for(const lang of ['en','hi']){await course.evaluate(lang=>{LANG=lang;go('subject',{code:'COMPAPP'});},lang);assert((await course.locator('#app').innerText()).includes('Snake Lab'));
   for(let n=1;n<=6;n++){await course.evaluate(n=>go('topic',{code:'COMPAPP-28-'+n}),n);const image=course.locator('.notes img');await image.scrollIntoViewIfNeeded();await course.waitForFunction(()=>{const im=document.querySelector('.notes img');return im&&im.complete&&im.naturalWidth>0;});assert(await course.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
   await course.evaluate(()=>go('topic',{code:'COMPAPP-28-1'}));assert.equal(await course.locator('a[download][href="examples/snake-arcade-starter.zip"]').count(),1);
   await course.evaluate(()=>go('assignment',{code:'COMPAPP',chapter:28}));assert.equal(await course.locator('.ca-practical a[href="examples/snake-arcade/index.html"]').count(),1);
  }await course.close();
 }
 console.log('PASS: growth/score, collision, reverse and rapid-turn rules, tail and win cases; keyboard/touch, pause/restart, phone layouts, 6 bilingual lessons, visual assets and starter links.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});

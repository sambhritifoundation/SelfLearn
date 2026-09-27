const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),cp=require('node:child_process');
const {chromium}=require(process.env.SL_NODE_MODULES?path.join(process.env.SL_NODE_MODULES,'playwright'):'playwright');
const {lessons}=require('../data-computer-application-web-developer.js');
const root=path.resolve(__dirname,'..'),scratch=fs.mkdtempSync(path.join(os.tmpdir(),'selflearn-web-check-')),database=path.join(scratch,'market.db');
const python=process.env.SL_PYTHON||'python3';let child,browser;
function start(){return new Promise((resolve,reject)=>{child=cp.spawn(python,[path.join(root,'examples/web-foundations/server.py'),'--port','0','--db',database],{windowsHide:true,stdio:['ignore','pipe','pipe']});let output='';const timeout=setTimeout(()=>reject(Error('Server startup timed out: '+output)),10000);child.on('error',e=>{clearTimeout(timeout);reject(e);});child.stdout.on('data',chunk=>{output+=chunk;const match=output.match(/http:\/\/127\.0\.0\.1:\d+/);if(match){clearTimeout(timeout);resolve(match[0]);}});child.stderr.on('data',x=>output+=x);child.on('exit',code=>{clearTimeout(timeout);if(!output.match(/http:\/\//))reject(Error('Server exit '+code+': '+output));});});}
async function stop(){if(child&&child.exitCode===null){const done=new Promise(resolve=>child.once('exit',resolve));child.kill();await done;}child=null;}
const file=p=>'file:///'+path.join(root,p).replace(/\\/g,'/');
(async()=>{let url=await start();
 const get=await fetch(url+'/api/products');assert.equal(get.status,200);assert.equal((await get.json()).length,2);
 for(const body of [{name:'Notebook',price:40},{name:"'); DROP TABLE products;--",price:1},{name:'कॉपी',price:40}]){const r=await fetch(url+'/api/products',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});assert.equal(r.status,201);assert.equal((await r.json()).name,body.name);}
 for(const body of [{name:'',price:40},{name:'N',price:-1},{name:'N',price:true},{name:'N',price:1.5},[],{name:'N',price:100001}]){const r=await fetch(url+'/api/products',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});assert.equal(r.status,400);}
 assert.equal((await fetch(url+'/api/products',{method:'POST',headers:{'Content-Type':'application/json'},body:'{' })).status,400);
 assert.equal((await fetch(url+'/api/products',{method:'POST',headers:{'Content-Type':'application/json'},body:'x'.repeat(4097)})).status,413);
 for(const route of ['/data/market.db','/server.py','/missing'])assert.equal((await fetch(url+route)).status,404);
 assert.equal((await fetch(url+'/visuals/31-1.svg')).status,200);
 await stop();url=await start();assert.equal((await (await fetch(url+'/api/products')).json()).length,5,'SQLite rows persist across process restart');
 const opts={headless:true};if(process.platform==='win32')opts.executablePath=process.env.SL_CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe';browser=await chromium.launch(opts);
 for(const width of [350,1280]){
  const page=await browser.newPage({viewport:{width,height:950}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(url+'/?mode=server');assert((await page.locator('#mode').innerText()).includes('REAL LOCAL BACKEND'));await page.locator('#name').fill('Browser test '+width);await page.locator('#price').fill('55');await page.getByRole('button',{name:'Add item · POST'}).click();await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('Added Browser'));await page.reload();assert(await page.getByRole('cell',{name:'Browser test '+width,exact:true}).isVisible());assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  await page.goto(file('examples/web-foundations/index.html'));assert((await page.locator('#mode').innerText()).includes('BROWSER SIMULATION'));await page.locator('#name').fill('Demo');await page.getByRole('button',{name:'Add item · POST'}).click();assert.equal(await page.locator('#rows tr').count(),3);await page.reload();assert.equal(await page.locator('#rows tr').count(),2);
  await page.route(/^https?:/,r=>r.abort());await page.goto(file('index.html'));for(const lang of ['en','hi'])for(const l of lessons){await page.evaluate(({lang,code})=>{LANG=lang;go('topic',{code});},{lang,code:'COMPAPP-'+l.ch+'-'+l.n});const im=page.locator('.notes img');await im.scrollIntoViewIfNeeded();await page.waitForFunction(()=>{const im=document.querySelector('.notes img');return im&&im.complete&&im.naturalWidth>0;});assert.equal(await page.locator('.web-code').count(),1);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
  for(const folder of ['web-foundations','git-publish-lab']){await page.goto(file('examples/'+folder+'/GUIDE.html'));assert.equal(await page.locator('section').count(),folder==='web-foundations'?8:7);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
  if(width===1280){await page.unroute(/^https?:/);await page.goto(url+'/?mode=server');await page.screenshot({path:path.join(root,'tmp','web-foundations-desktop.png'),fullPage:true});}
  assert.deepEqual(errors,[]);await page.close();
 }
 console.log('PASS: real Python/SQLite create/read/persistence, validation and file protection, browser UI, simulation reset, 15 bilingual visual lessons, code examples and offline guides at phone/desktop widths.');
} )().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{if(browser)await browser.close();await stop();});

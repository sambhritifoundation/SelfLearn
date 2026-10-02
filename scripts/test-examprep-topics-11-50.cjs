const assert=require('node:assert/strict'),fs=require('node:fs'),http=require('node:http'),path=require('node:path');
const {chromium}=require(path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));
const root=path.resolve(__dirname,'..'),types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.mp4':'video/mp4','.m4a':'audio/mp4'};
const server=http.createServer((req,res)=>{const target=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));if(!target.startsWith(root+path.sep)){res.writeHead(403).end();return}res.setHeader('Content-Type',types[path.extname(target)]||'application/octet-stream');fs.createReadStream(target).on('error',()=>res.writeHead(404).end()).pipe(res)});
(async()=>{await new Promise(done=>server.listen(8776,'127.0.0.1',done));const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});try{
 const page=await browser.newPage({viewport:{width:390,height:900}}),errors=[];page.on('pageerror',error=>errors.push(error.message));await page.goto('http://127.0.0.1:8776/examprep.html');await page.locator('[data-mode=practice]').click();assert.equal(await page.locator('#practice-topic option').count(),50);
 for(let n=11;n<=50;n++){
  const id=`SL-PRACTICE-VOC-CA-T${String(n).padStart(2,'0')}-20261002`;
  if(n===50)await page.locator('#language').selectOption('hi');
  await page.locator('#practice-topic').selectOption(id);await page.locator('[data-practice-set]').click();await page.locator('#setup button[type=submit]').click();
  assert.equal(await page.locator('.tutorial-step').count(),3,`Topic ${n} tutorial`);assert.equal(await page.locator('.tutorial-visual img').count(),1);await page.locator('.tutorial-visual img').evaluate(img=>img.decode());
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`Topic ${n} mobile overflow`);assert(await page.locator('.tutorial-swipe').isVisible());if(n===25)assert.match(await page.locator('.tutorial-example').textContent(),/=B2\+C2/);
  if(n===50)assert.match(await page.locator('.tutorial-kicker').textContent(),/चित्रयुक्त/);
  await page.locator('#begin-practice').click();assert.equal(await page.locator('#palette button').count(),20,`Topic ${n} question count`);assert.equal(await page.locator('input[name=answer]').count(),4);if(n===50)await page.locator('input[name=answer][value=A]').check();
  await page.locator('#palette [data-i="10"]').click();assert.equal(await page.locator('input[name="multi-answer"]').count(),5);if(n===50)for(const letter of ['A','B','C'])await page.locator(`input[name="multi-answer"][value=${letter}]`).check();
  await page.locator('#palette [data-i="14"]').click();assert.equal(await page.locator('#fill-answer').count(),1);if(n===50)await page.locator('#fill-answer').fill('परियोजना');
  await page.locator('#palette [data-i="17"]').click();assert.equal(await page.locator('.match-options select').count(),4);await page.locator('.pyq-diagram img').evaluate(img=>img.decode());if(n===50)for(const [i,letter] of ['D','B','C','A'].entries())await page.locator('.match-options select').nth(i).selectOption(letter);
  await page.locator('#submit').click();assert.equal(await page.locator('.review-badge').count(),0);if(n===50)assert.match(await page.locator('#provisional-summary').textContent(),/8\/33/);assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await page.locator('#new').click();
 }
 assert.deepEqual(errors,[]);await page.goto('http://127.0.0.1:8776/examprep.html?practiceSet=SL-PRACTICE-VOC-CA-T50-20261002&mode=practice');assert.equal(await page.locator('#setup').count(),1);await page.locator('#back-catalog').click();assert.equal(await page.locator('#practice-topic').inputValue(),'SL-PRACTICE-VOC-CA-T50-20261002');await page.close();console.log('PASS: Handbook Topics 11–50 open with bilingual mobile tutorials, diagrams and all four question types.');
 }finally{await browser.close();server.close()}})().catch(error=>{console.error(error);server.close();process.exitCode=1});

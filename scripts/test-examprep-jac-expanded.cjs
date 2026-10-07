const fs=require('node:fs'),http=require('node:http'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require(path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));
const server=http.createServer((req,res)=>{const name=decodeURIComponent(req.url.split('?')[0]),file=path.join(__dirname,'..',name==='/'?'index.html':name);fs.readFile(file,(error,data)=>{if(error){res.writeHead(404);res.end();return}res.setHeader('Content-Type',({'.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml'}[path.extname(file)]||'text/html'));res.end(data)})});
(async()=>{
 await new Promise(resolve=>server.listen(8777,'127.0.0.1',resolve));
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try{
  const page=await browser.newPage({viewport:{width:390,height:840}}),errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  for(const [cl,subject,code] of [['7','English','ENG-CH2'],['8','Science','SCI-CH5'],['9','Maths','MATH-CH4']]){
   const id=`SL-PRACTICE-JAC-C${cl}-${code}-20261007`;
   await page.goto(`http://127.0.0.1:8777/examprep.html?practiceSet=${id}&mode=practice`);
   assert.equal(await page.locator('#setup').count(),1,`${id}: share link did not open`);
   await page.locator('#back-catalog').click();
   assert.equal(await page.locator('#practice-group').inputValue(),`${cl}|${subject}`);
   assert.equal(await page.locator('#practice-topic option').count(),5);
   await page.locator('#practice-topic').selectOption(id);
   await page.locator('[data-practice-set]').click();await page.locator('#setup button[type=submit]').click();
   assert.equal(await page.locator('.tutorial-step').count(),3);
   await page.locator('.tutorial-visual img').evaluate(img=>img.decode());
   await page.locator('#begin-practice').click();
   assert.equal(await page.locator('#palette button').count(),16);
   await page.locator('#palette [data-i="15"]').click();assert.equal(await page.locator('textarea').count(),1);
   await page.locator('#submit').click();assert.match(await page.locator('#provisional-summary').textContent(),/30/);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  }
  await page.goto('http://127.0.0.1:8777/examprep.html?test=assessment-SL-PRACTICE-JAC-C9-MATH-CH4-20261007');
  assert.equal(await page.locator('#setup').count(),1);
  assert.deepEqual(errors,[]);
  console.log('PASS: Class 7, 8 and 9 JAC practice links, chapter selectors, tutorials, 30-mark review and timed-test link.');
 }finally{await browser.close();server.close()}
})().catch(error=>{console.error(error);server.close();process.exitCode=1});

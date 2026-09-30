const assert=require('node:assert/strict');
const fs=require('node:fs');
const http=require('node:http');
const path=require('node:path');
const vm=require('node:vm');

const root=path.resolve(__dirname,'..');
const context={window:{}};
for(const file of ['data-examprep.js','data-examprep-pyq.js','data-examprep-qb.js','data-examprep-i18n-fixes.js','data-examprep-grading.js','data-examprep-iitm-es-2023.js','data-examprep-pyq-2025-videos.js','data-examprep-pyq-2025-rubrics.js','data-examprep-pyq-2025-science-video.js','data-examprep-pyq-2025-hindi-video.js','data-examprep-pyq-2025-hindi-rubrics.js','data-examprep-pyq-2025-maths-rubrics.js'])vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const bank=context.window.EXAMPREP;
const topic='1 — Real Numbers';
const expected=[...bank.questions,...bank.written].filter(q=>q.class==='10'&&q.subject==='Maths'&&q.topic===topic&&/^JAC PYQ \d{4}$/.test(q.sourceType));
assert(expected.length>0);
assert(expected.every(q=>q.sourceRef));
const iitm=[...bank.questions,...bank.written].filter(q=>q.sourceType==='IITM ES Qualifier 2023'&&q.marks>0);
const listening=iitm.filter(q=>q.subject==='English I'&&q.subTopic==='Listening comprehension');
assert.equal(iitm.length,101);
assert.equal(listening.length,5);
assert(listening.every(q=>q.sourceRef&&q.audioUrl));

const {chromium}=require(path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));
const server=http.createServer((req,res)=>{
 const relative=decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\//,'')||'index.html';
 const file=path.join(root,relative);
 if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return}
 fs.readFile(file,(error,data)=>{if(error){res.writeHead(404);res.end();return}res.setHeader('Content-Type',path.extname(file)==='.js'?'text/javascript':'text/html');res.end(data)});
});

(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const base=`http://127.0.0.1:${server.address().port}/examprep.html`;
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try{
  const page=await browser.newPage();
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto(base);
  assert.equal(await page.locator('#topic-class').inputValue(),'10');
  await page.locator('#topic-subject').selectOption('Maths');
  await page.locator('#topic-name').selectOption(topic);
  assert.match(await page.locator('#topic-count').textContent(),new RegExp(`^${expected.length} questions`,'i'));
  const testLink=await page.locator('#topic-share-link').getAttribute('href');
  assert.equal(new URL(testLink).searchParams.get('topic'),topic);
  await page.locator('#choose-topic').click();
  await page.locator('#setup button[type=submit]').click();
  await page.locator('#begin-exam').click();
  assert.equal(await page.locator('#palette button').count(),expected.length);
  assert.match(await page.locator('#timer').textContent(),/\d/);
  await page.goto(testLink);
  assert.equal(await page.locator('#setup').count(),1,'shared topic test opens its setup');
  await page.goto(base);
  await page.locator('[data-mode=practice]').click();
  await page.locator('#topic-subject').selectOption('Maths');
  await page.locator('#topic-name').selectOption(topic);
  const practiceLink=await page.locator('#topic-share-link').getAttribute('href');
  assert.equal(new URL(practiceLink).searchParams.get('mode'),'practice');
  await page.locator('#choose-topic').click();
  await page.locator('#setup button[type=submit]').click();
  assert.equal(await page.locator('#palette button').count(),expected.length);
  assert.match(await page.locator('#timer').textContent(),/Untimed/);
  await page.goto(practiceLink);
  assert.equal(await page.locator('#setup').count(),1,'shared topic practice opens its setup');
  await page.goto(base);
  await page.locator('#topic-class').selectOption('IITM BS Electronic System');
  const sections=['English I','Mathematics for Electronics I','Electronic Systems Thinking and Circuits','Introduction to C Programming'];
  assert.deepEqual((await page.locator('#topic-subject option').allTextContents()).sort(),sections.slice().sort());
  let covered=0;
  for(const section of sections){
   await page.locator('#topic-subject').selectOption(section);
   for(const name of await page.locator('#topic-name option').allTextContents()){
    await page.locator('#topic-name').selectOption(name);
    covered+=Number.parseInt(await page.locator('#topic-count').textContent(),10);
   }
  }
  assert.equal(covered,101,'topic picker covers every scored IITM question once');
  await page.locator('#topic-subject').selectOption('English I');
  await page.locator('#topic-name').selectOption('Listening comprehension');
  assert.match(await page.locator('#topic-count').textContent(),/^5 Questions · PYQ years: 2023/);
  const iitmTestLink=await page.locator('#topic-share-link').getAttribute('href');
  await page.locator('#choose-topic').click();
  await page.locator('#setup button[type=submit]').click();
  await page.locator('#begin-exam').click();
  assert.equal(await page.locator('#palette button').count(),5);
  assert.equal(await page.locator('audio').count(),1);
  await page.goto(iitmTestLink);
  assert.equal(await page.locator('#setup').count(),1,'shared IITM topic test opens its setup');
  await page.goto(base);
  await page.locator('[data-mode=practice]').click();
  await page.locator('#topic-class').selectOption('IITM BS Electronic System');
  await page.locator('#topic-subject').selectOption('English I');
  await page.locator('#topic-name').selectOption('Listening comprehension');
  const iitmPracticeLink=await page.locator('#topic-share-link').getAttribute('href');
  assert.equal(new URL(iitmPracticeLink).searchParams.get('mode'),'practice');
  await page.locator('#choose-topic').click();
  await page.locator('#setup button[type=submit]').click();
  assert.equal(await page.locator('#palette button').count(),5);
  assert.match(await page.locator('#timer').textContent(),/Untimed/);
  await page.goto(iitmPracticeLink);
  assert.equal(await page.locator('#setup').count(),1,'shared IITM topic practice opens its setup');
  assert.deepEqual(errors,[]);
  await page.close();
  console.log(`PASS: ${expected.length} Real Numbers and 101 IITM PYQs grouped by topic in both modes with share links.`);
 }finally{await browser.close();server.close()}
})().catch(error=>{console.error(error);server.close();process.exitCode=1});

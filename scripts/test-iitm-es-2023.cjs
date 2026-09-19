const fs = require('node:fs');
const assert = require('node:assert/strict');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require(path.join(process.env.USERPROFILE, '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));

const server = http.createServer((req, res) => {
  const requested = decodeURIComponent(req.url.split('?')[0]);
  const file = path.join(process.cwd(), requested === '/' ? 'examprep.html' : requested);
  fs.readFile(file, (error, data) => {
    if (error) { res.writeHead(404); return res.end(); }
    res.setHeader('Content-Type', path.extname(file) === '.js' ? 'text/javascript' : path.extname(file) === '.mp3' ? 'audio/mpeg' : 'text/html');
    res.end(data);
  });
});

(async () => {
  await new Promise(resolve => server.listen(8768, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('http://127.0.0.1:8768/examprep.html');
    assert.deepEqual(await page.locator('#class option').allTextContents(), ['10', 'IITM BS']);
    await page.locator('#class').selectOption('IITM BS');
    assert.deepEqual(await page.locator('#subject option').allTextContents(), ['English I', 'Mathematics for Electronics I', 'Electronic Systems Thinking and Circuits', 'Introduction to C Programming']);
    await page.locator('#set').selectOption('exam:IITM-ES-QPQ1-20230806');
    await page.locator('#delivery-email').fill('teacher@example.org');
    await page.locator('#student').fill('Test learner');
    await page.locator('#setup button:not([type=button])').click();
    assert.equal(await page.locator('.exam-home').count(), 1);
    assert((await page.locator('.exam-home').textContent()).includes('240 minutes · 230 marks'));
    assert((await page.locator('.exam-home').textContent()).includes('QPQ1'));
    assert.equal(await page.locator('#timer').textContent(), '');
    await page.locator('#begin-exam').click();
    assert.equal(await page.locator('#palette button').count(), 105);
    assert.match(await page.locator('#timer').textContent(), /^240:00|239:5\d$/);
    await page.locator('#palette button').nth(6).click();
    assert.equal(await page.locator('audio').count(), 1);
    assert((await page.locator('.audio-note').textContent()).includes('Original exam question Q7 · relevant audio 00:13–00:15'));
    assert((await page.locator('.play-segment').textContent()).includes('Play only Q7 segment'));
    assert((await page.locator('.audio-note').textContent()).includes('not the original IIT Madras recording'));
    await page.locator('#palette button').nth(42).click();
    assert((await page.locator('input[name=multi-answer]').count()) >= 2);
    await page.locator('input[name=multi-answer]').first().check();
    await page.locator('input[name=multi-answer]').nth(1).check();
    assert.equal(await page.locator('.answered').count(), 1);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    assert.deepEqual(errors, []);
    console.log('PASS: IITM ES exam landing page, selectors, timer, audio and MSQ interactions verified.');
  } finally {
    await browser.close();
    server.close();
  }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });

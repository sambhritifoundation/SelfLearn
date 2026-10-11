const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const {chromium} = require(process.env.SL_NODE_MODULES ? path.join(process.env.SL_NODE_MODULES, 'playwright') : 'playwright');
process.chdir(path.resolve(__dirname, '..'));
const ctx = {window: {}};
for (const file of ['career-data.js', 'career-resources.js']) vm.runInNewContext(fs.readFileSync(file, 'utf8'), ctx);
const D = ctx.window.CareerData;
assert.equal(D.stages.length, 7);
assert.equal(D.careers.length, 6);
for (const career of D.careers) {
  assert.equal(career.steps.length, 7);
  assert(career.steps.every(step => step.length === 4 && step.every(text => typeof text === 'string' && text.trim().length > 0)));
  const r = career.resources;
  for (const category of ['courses', 'work', 'employers', 'enterprise', 'opportunities', 'research']) assert(r[category].length >= 2, `${career.id}: ${category}`);
  for (const item of [...r.courses, ...r.work, ...r.employers, ...r.opportunities, ...r.research]) assert.equal(new URL(item.url).protocol, 'https:');
  assert(r.opportunities.some(o => o.scope.includes('National')));
  assert(r.opportunities.some(o => o.scope.includes('International')));
}
assert(fs.readFileSync('scripts/build-static.cjs', 'utf8').includes('career-resources.js'));
fs.mkdirSync('../outputs/career', {recursive: true});
(async () => {
  const browser = await chromium.launch({headless: true, executablePath: process.env.SL_BROWSER_EXECUTABLE || undefined});
  try {
    const page = await browser.newPage({viewport: {width: 1440, height: 1000}});
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const url = 'file:///' + path.resolve('career.html').replace(/\\/g, '/');
    await page.goto(url);
    await page.waitForSelector('.milestone');
    assert.equal(await page.locator('.interest').count(), 6);
    assert.equal(await page.locator('.milestone').count(), 7);
    assert.equal(await page.locator('.print-stage').count(), 7);
    await page.screenshot({path: '../outputs/career/career-desktop-preview.png', fullPage: true});
    await page.locator('#note').fill('Saturday: draw two poster layouts');
    await page.locator('#save').click();
    await page.reload();
    assert.equal(await page.locator('#note').inputValue(), 'Saturday: draw two poster layouts');
    await page.locator('#class').selectOption('11');
    assert.equal(await page.locator('.milestone.current').getAttribute('data-stage'), '2');
    assert.equal(await page.locator('#note').inputValue(), '');
    for (const career of D.careers) {
      await page.locator(`[data-interest="${career.id}"]`).click();
      for (let i = 0; i < 7; i++) {
        await page.locator(`[data-stage="${i}"]`).click();
        assert.match(await page.locator('#detail').innerText(), /How to practise/i);
      }
      for (const category of ['courses','work','jobs','enterprise','opportunities','research']) {
        await page.locator(`[data-resource="${category}"]`).click();
        assert(await page.locator(`#resource-${category}`).isVisible());
        assert.equal(await page.locator('.resource-panel:visible').count(), 1);
        assert((await page.locator(`#resource-${category}`).innerText()).length > 100);
      }
    }
    await page.locator('[data-interest="design"]').click();
    await page.locator('[data-resource="courses"]').click();
    await page.locator('#course-level').selectOption('Postgraduation');
    assert.equal(await page.locator('#resource-courses .resource-card').count(), 2);
    await page.locator('#course-level').selectOption('all');
    await page.locator('[data-resource="opportunities"]').click();
    await page.locator('#opportunity-scope').selectOption('International');
    assert.equal(await page.locator('#resource-opportunities .resource-card').count(), 3);
    assert(!(await page.locator('#resource-opportunities').innerText()).includes('INSPIRE'));
    await page.locator('#opportunity-scope').selectOption('all');
    await page.locator('[data-stage="5"]').click();
    await page.locator('[data-resource-jump="research"]').click();
    assert(await page.locator('#resource-research').isVisible());
    for (const [grade, stage] of [['14','3'], ['15','4'], ['16','5']]) {
      await page.locator('#class').selectOption(grade);
      assert.equal(await page.locator('.milestone.current').getAttribute('data-stage'), stage);
    }
    await page.goto(url + '?interest=invalid&class=99');
    assert.equal(await page.locator('#class').inputValue(), '6');
    await page.locator('#note').fill('');
    await page.locator('#save').click();
    await page.setViewportSize({width: 390, height: 844});
    for (const category of ['courses','work','jobs','enterprise','opportunities','research']) {
      await page.locator(`[data-resource="${category}"]`).click();
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Mobile overflow: ${category}`);
    }
    await page.locator('[data-resource="courses"]').click();
    await page.screenshot({path: '../outputs/career/career-mobile-preview.png', fullPage: true});
    await page.locator('#resources').screenshot({path: '../outputs/career/career-courses-preview.png'});
    await page.emulateMedia({media: 'print'});
    assert.equal(await page.locator('.resource-panel:visible').count(), 6);
    assert(await page.locator('#print-stages').isVisible());
    await page.pdf({path: '../outputs/career/career-design-journey.pdf', format: 'A4', printBackground: true});
    assert.deepEqual(errors, []);
    const blocked = await browser.newPage();
    await blocked.addInitScript(() => Object.defineProperty(window, 'localStorage', {get() {throw new Error('Storage unavailable');}}));
    await blocked.goto(url);
    await blocked.locator('#save').click();
    assert.match(await blocked.locator('#status').innerText(), /cannot save/);
    console.log('PASS: 6 interests, 42 milestones, official resource data, 36 resource panels, course/scope filters, advanced stages, shortcuts, save/reload, invalid links, blocked storage, mobile layouts and complete printable journey.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });


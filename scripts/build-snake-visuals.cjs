const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),dir=path.join(root,'assets/computer-application/snake');fs.mkdirSync(dir,{recursive:true});
const scenes=[
 ['2','A prompt you can test',[['ASK','Files + rules + controls'],['PREVIEW','Open index.html'],['CHECK','Play a complete round']]],
 ['3','One tick of the game',[['MOVE','Head goes one square'],['EAT','Grow + add 10 points'],['CHECK','Wall or body = game over']]],
 ['4','Make every control work',[['KEYBOARD','Arrows / W A S D'],['PHONE','Four touch arrows'],['PAUSE','Freeze → resume round']]],
 ['5','One feature at a time',[['SAVE','Keep a working copy'],['PROMPT','Add one theme button'],['PLAY','Check old + new features']]],
 ['6','Grow your game website',[['BUILD','Arcade page + game cards'],['LINK','Snake → index.html'],['PUBLISH','Open link on another device']]]
];
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
for(const [id,title,cards] of scenes)for(const mobile of [false,true]){
 const w=mobile?350:960,h=mobile?710:300;
 let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" rx="16" fill="#101b28"/><text x="24" y="42" fill="#bcf476" font-family="Arial" font-size="${mobile?20:28}" font-weight="700">${esc(title)}</text>`;
 cards.forEach((c,i)=>{let x=mobile?24:24+i*310,y=mobile?72+i*210:82;svg+=`<rect x="${x}" y="${y}" width="${mobile?302:288}" height="182" rx="12" fill="#172638" stroke="#304255"/><text x="${x+20}" y="${y+35}" font-family="Arial" font-size="14" fill="#bcf476">0${i+1} · ${c[0]}</text><text x="${x+20}" y="${y+104}" font-family="Arial" font-size="17" fill="#f2f5f7">${esc(c[1])}</text><path d="M${x+20} ${y+141}h200" stroke="#304255" stroke-width="4"/>`;});
 fs.writeFileSync(path.join(dir,id+(mobile?'-mobile':'')+'.svg'),svg+'</svg>');
}
const {chromium}=require(process.env.SL_NODE_MODULES?path.join(process.env.SL_NODE_MODULES,'playwright'):'playwright');
(async()=>{const opts={headless:true};if(process.platform==='win32')opts.executablePath=process.env.SL_CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe';const browser=await chromium.launch(opts);try{for(const [suffix,width,height] of [['',960,1200],['-mobile',350,1330]]){const page=await browser.newPage({viewport:{width,height}});await page.goto('file:///'+path.join(root,'examples/snake-arcade/index.html').replace(/\\/g,'/'));await page.screenshot({path:path.join(dir,'1'+suffix+'.png')});await page.close();}}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});

/* Build compact, accessible visual concept maps for Handbook Topics 11–50. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),context={window:{EXAMPREP:{questions:[],practiceSets:[]}}};
for(const name of ['data-examprep-practice-tutorials.js','data-examprep-topics-11-50.js'])vm.runInNewContext(fs.readFileSync(path.join(root,name),'utf8'),context,{filename:name});
const specs=context.window.EXAMPREP_NEW_TOPIC_SPECS;
if(specs.length!==40||specs.some((t,i)=>t.number!==i+11))throw Error('Expected handbook Topics 11–50 in order');
const esc=value=>String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
const lines=(value,max=33)=>{const out=[],words=value.split(' ');let line='';for(const word of words){const next=line?line+' '+word:word;if(next.length>max&&line){out.push(line);line=word}else line=next}if(line)out.push(line);return out.slice(0,3)};
const colours=[['#e8f1ff','#1c62b6'],['#e7f7ed','#21744a'],['#fff2e1','#a96313'],['#f2eaff','#6b4fa7']];
for(const topic of specs){
 const cards=topic.facts.slice(0,4).map((fact,i)=>{const x=i%2?414:30,y=i>1?242:90,[fill,ink]=colours[i];return `<g><rect x="${x}" y="${y}" width="356" height="134" rx="16" fill="${fill}" stroke="${ink}" stroke-opacity=".35" stroke-width="2"/><circle cx="${x+34}" cy="${y+35}" r="19" fill="${ink}"/><text x="${x+34}" y="${y+42}" text-anchor="middle" font-family="Arial,sans-serif" font-size="20" font-weight="bold" fill="white">${i+1}</text><text x="${x+64}" y="${y+42}" font-family="Arial,sans-serif" font-size="21" font-weight="bold" fill="${ink}">${esc(fact[0].length>25?fact[0].slice(0,24)+'…':fact[0])}</text>${lines(fact[2]).map((text,j)=>`<text x="${x+20}" y="${y+78+j*20}" font-family="Arial,sans-serif" font-size="16" fill="#263a51">${esc(text)}</text>`).join('')}</g>`}).join('');
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 406" role="img" aria-labelledby="title desc"><title id="title">Topic ${topic.number}: ${esc(topic.title)}</title><desc id="desc">Four beginner concepts: ${topic.facts.slice(0,4).map(f=>esc(f[0])).join(', ')}.</desc><rect width="800" height="406" rx="24" fill="#f4f8ff"/><text x="32" y="43" font-family="Arial,sans-serif" font-size="25" font-weight="bold" fill="#0757bf">${esc(`Topic ${topic.number} · ${topic.title}`)}</text><text x="32" y="70" font-family="Arial,sans-serif" font-size="16" fill="#52657c">Four ideas to know before the practice questions</text>${cards}</svg>`;
 const file=path.join(root,'assets','examprep','computer-basics',`topic-${String(topic.number).padStart(2,'0')}-guide.svg`);fs.writeFileSync(file,svg+'\n');
}
console.log(`Built ${specs.length} topic visual guides.`);

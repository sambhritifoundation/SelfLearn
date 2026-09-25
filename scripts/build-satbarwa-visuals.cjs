/* Original, responsive SVG teaching diagrams for the Satbarwa Bazar project. */
const fs=require('node:fs'),path=require('node:path');
const dir=path.join(__dirname,'..','assets','computer-application','satbarwa');fs.mkdirSync(dir,{recursive:true});
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const rect=(x,y,w,h,fill='#fff',stroke='none',r=8)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
const text=(x,y,value,size=18,color='#17372b',weight=500)=>`<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${escape(value)}</text>`;
const line=(x,y,x2,y2,color='#bfd2c2',w=2)=>`<path d="M${x} ${y}L${x2} ${y2}" stroke="${color}" stroke-width="${w}" fill="none"/>`;
const green='#146c4a',dark='#17372b',muted='#587267',pale='#e5f4e8',blue='#e7f0fb',cream='#fff1d9';
function tag(x,y,label,fill=pale,color=green){return rect(x,y,215,35,fill,'none',7)+text(x+11,y+23,label,15,color,700);}
function phone(x,y){return rect(x,y,155,181,'#fff','#aac6b2',17)+rect(x+16,y+17,123,28,pale)+rect(x+16,y+54,123,22,'#f2f6ef')+rect(x+16,y+86,55,62,cream)+rect(x+84,y+86,55,62,blue)+rect(x+48,y+160,59,6,'#cbd9c7');}
function table(x,y,heads,values){let s=rect(x,y,219,31*(values.length+1),'#fff','#b7ccba',5)+rect(x,y,219,31,pale);heads.forEach((h,i)=>s+=text(x+8+i*108,y+21,h,14,dark,700));values.forEach((row,j)=>{s+=line(x,y+31*(j+1),x+219,y+31*(j+1));row.forEach((v,i)=>s+=text(x+8+i*108,y+31*(j+1)+21,v,14,dark));});return s;}
function panel(x,title,body,footer){return rect(x,104,280,308,'#fff','#d7e5d9',14)+rect(x,104,280,47,'#eff5ef','none',14)+rect(x,136,280,15,'#eff5ef','none',0)+text(x+18,135,title,18,dark,700)+body+text(x+18,389,footer,14,muted);}
const scenes=[
  ['1','Begin with a market need',[
    ['Shopper need',text(70,201,'Find everyday items',19,dark,700)+tag(67,230,'Before a market visit'),'One clear job'],
    ['Phone sketch',phone(402,168)+text(377,369,'Search · cards · cart',15,muted),'Draw before coding'],
    ['Pass check',tag(675,191,'Find rice',pale,green)+tag(675,239,'See price / unit',blue,'#245992')+tag(675,287,'Reach the cart',cream,'#9b5f11'),'Use sample data']]],
  ['2','Build the first page',[
    ['Three files',tag(66,181,'index.html')+tag(66,229,'styles.css',blue,'#245992')+tag(66,277,'app.js',cream,'#9b5f11'),'Keep roles clear'],
    ['Mobile layout',phone(402,168)+text(371,369,'Readable one column',15,muted),'Then widen the grid'],
    ['Keyboard check',tag(675,190,'Tab → search')+tag(675,238,'Tab → category',blue,'#245992')+tag(675,286,'Enter → choose',cream,'#9b5f11'),'No sideways scroll']]],
  ['3','One record, one card',[
    ['Product data',table(64,186,['Field','Value'],[['name','Rice'],['unit','1 kg'],['price','₹60'],['stock','Yes']]),'Keep one source'],
    ['Rendered card',rect(390,180,180,160,'#fff','#aac6b2',11)+rect(391,181,178,78,cream)+text(462,233,'🍚',38)+text(407,286,'Rice · 1 kg',18,dark,700)+text(407,322,'₹60',22,green,700),'Card reads the record'],
    ['Change + check',tag(675,197,'₹60 → ₹62',cream,'#9b5f11')+tag(675,253,'Reload card',pale,green),'Then test the cart']]],
  ['4','Search and filter together',[
    ['Two choices',tag(65,189,'Search: dal')+tag(65,246,'Category: Grocery',blue,'#245992'),'Both must apply'],
    ['Matching result',rect(385,192,190,128,'#fff','#aac6b2',10)+text(411,233,'Dal · 1 kg',19,dark,700)+text(411,272,'₹110',25,green,700),'Count: 1 item'],
    ['No match',tag(675,191,'dal + Vegetables',cream,'#9b5f11')+tag(675,249,'No matching items')+text(690,330,'Clear filters',16,green,700),'Explain the way back']]],
  ['5','Check the cart maths',[
    ['Add items',table(65,192,['Item','Qty'],[['Rice · ₹60','2'],['Dal · ₹110','1']]),'Available items only'],
    ['Calculate',tag(370,190,'2 × ₹60 = ₹120')+tag(370,243,'1 × ₹110 = ₹110',blue,'#245992')+tag(370,296,'Total = ₹230',cream,'#9b5f11'),'Change one quantity'],
    ['Clear boundary',tag(675,199,'Practice cart')+tag(675,253,'No order placed',cream,'#9b5f11'),'No payment or address']]],
  ['6','Improve one thing a day',[
    ['Feedback',tag(65,194,'“Filter is confusing”',cream,'#9b5f11')+text(82,288,'Write the real problem',16,muted),'One need at a time'],
    ['Small AI prompt',tag(370,194,'Change only filter')+tag(370,249,'Show changed files',blue,'#245992'),'Inspect the proposal'],
    ['Test + log',tag(675,188,'Phone + keyboard')+tag(675,238,'Search + cart',blue,'#245992')+tag(675,288,'changes.md',cream,'#9b5f11'),'Keep or revise']]],
  ['7','Extend the working starter',[
    ['Add content',tag(65,188,'New product record')+tag(65,240,'Unique id + unit',blue,'#245992')+tag(65,292,'Sample price',cream,'#9b5f11'),'Check card + search'],
    ['Add one feature',tag(370,188,'Price ceiling')+tag(370,240,'Or favourites',blue,'#245992')+tag(370,292,'One change only',cream,'#9b5f11'),'Inspect the edit'],
    ['Test the journey',tag(675,188,'Phone + keyboard')+tag(675,240,'Filters + cart',blue,'#245992')+tag(675,292,'Record result',cream,'#9b5f11'),'Keep or revise']]]
];
for(const [id,title,cards] of scenes){
  let desktop=`<svg xmlns="http://www.w3.org/2000/svg" width="960" height="455" viewBox="0 0 960 455" role="img" aria-labelledby="title"><title id="title">${escape(title)}</title>`+rect(0,0,960,455,'#f7faf6','none',0)+rect(0,0,960,82,'#123c2b','none',0)+text(36,51,title,30,'#fff',700);
  cards.forEach((c,i)=>desktop+=panel(35+i*305,...c));desktop+=`<path d="M319 258h20m-8-8 8 8-8 8M624 258h20m-8-8 8 8-8 8" stroke="${green}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`+text(36,439,'Prompt → preview → test → improve',16,muted)+'</svg>';
  fs.writeFileSync(path.join(dir,id+'.svg'),desktop);
  let mobile=`<svg xmlns="http://www.w3.org/2000/svg" width="350" height="1120" viewBox="0 0 350 1120" role="img" aria-labelledby="title"><title id="title">${escape(title)}</title>`+rect(0,0,350,1120,'#f7faf6','none',0)+rect(0,0,350,82,'#123c2b','none',0)+text(24,50,title,22,'#fff',700);
  cards.forEach((c,i)=>mobile+=`<g transform="translate(${-305*i} ${329*i})">${panel(35+i*305,...c)}</g>`);mobile+=text(35,1101,'Prompt → preview → test',15,muted)+'</svg>';
  fs.writeFileSync(path.join(dir,id+'-mobile.svg'),mobile);
}
console.log('Built 7 desktop and 7 mobile Satbarwa lesson diagrams.');

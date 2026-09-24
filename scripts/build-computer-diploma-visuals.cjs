/* Rebuild the original, editable SVG teaching visuals for diploma Word and Excel. */
const fs = require('node:fs');
const path = require('node:path');
const out = path.join(__dirname, '..', 'assets', 'computer-application', 'diploma');
fs.mkdirSync(out, { recursive: true });
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const R = (x,y,w,h,fill,stroke='none',radius=9) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="${fill}" stroke="${stroke}"/>`;
const T = (x,y,s,size=19,color='#1e293b',weight=500) => `<text x="${x}" y="${y}" fill="${color}" font-family="Arial, sans-serif" font-size="${size}" font-weight="${weight}">${esc(s)}</text>`;
const L = (x1,y1,x2,y2,color='#cbd5e1',width=2) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${color}" stroke-width="${width}" fill="none"/>`;
const accent = '#0f766e', ink='#172033', muted='#526276', pale='#ecfdf5', blue='#eff6ff', amber='#fff7ed';
function card(x,title,body,subtitle){
  return R(x,105,280,316,'#fff','#dbe3ea',14)+R(x,105,280,48,'#f1f5f9','none',14)+R(x,139,280,14,'#f1f5f9','none',0)+T(x+18,137,title,19,ink,700)+body+(subtitle?T(x+18,397,subtitle,15,muted,500):'');
}
function page(x,y,lines,highlight=-1){
  let s=R(x,y,200,192,'#fff','#cbd5e1',4);
  lines.forEach((v,i)=>{let yy=y+37+i*31;s+=i===highlight?R(x+13,yy-21,174,29,pale,'none',3):'';s+=T(x+21,yy,v,16,i===highlight?accent:ink,i===highlight?700:500);});
  return s;
}
function rows(x,y,heads,values,high=-1,widths){
  widths=widths||heads.map(()=>218/heads.length); let xs=[x]; widths.forEach(w=>xs.push(xs.at(-1)+w));
  let h=31, s=R(x,y,218,h*(values.length+1),'#fff','#b9c9d4',3)+R(x,y,218,h,'#e9f4f2','none',3);
  values.forEach((row,i)=>{if(i===high)s+=R(x+1,y+h*(i+1)+1,216,h-2,pale,'none',0);});
  for(let i=1;i<xs.length-1;i++)s+=L(xs[i],y,xs[i],y+h*(values.length+1),'#cbd5e1',1);
  for(let i=1;i<=values.length;i++)s+=L(x,y+h*i,x+218,y+h*i,'#cbd5e1',1);
  heads.forEach((v,i)=>s+=T(xs[i]+6,y+21,v,13,ink,700));
  values.forEach((row,j)=>row.forEach((v,i)=>s+=T(xs[i]+6,y+h*(j+1)+21,v,13,j===high?accent:ink,j===high?700:500)));
  return s;
}
function pill(x,y,text,fill=pale,color=accent){return R(x,y,220,41,fill,'none',8)+T(x+12,y+27,text,17,color,700);}
function arrow(x,y){return L(x,y,x+36,y,accent,4)+`<path d="M${x+27} ${y-8}l12 8-12 8" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;}
function bars(x,y,items,max=700){let s='';items.forEach(([name,value],i)=>{let yy=y+i*47;s+=T(x,yy+18,name,14,ink,600)+R(x+82,yy,Math.max(9,value/max*118),25,['#0d9488','#14b8a6','#5eead4','#99f6e4'][i], 'none',4)+T(x+207,yy+18,value,14,ink,700);});return s;}
const specs = [
  ['12-1','Save a master, edit a copy','WORD',[
    ['Brief',page(75,177,['Learning Day','12 Oct 2026','Training Hall','Purpose / Contact'],1),'Check changing details'],
    ['Master',page(380,177,['Learning Day','12 Oct 2026','Training Hall','Four sections'],1),'Keep the original'],
    ['October copy',page(685,177,['Learning Day','12 Oct 2026','Training Hall','Ready to review'],1),'Edit this copy']]],
  ['12-2','Use styles for real headings','WORD',[
    ['Before',page(75,177,['Learning Day','Purpose','Programme','Contact']),'Looks like headings'],
    ['Apply styles',page(380,177,['TITLE  Learning Day','H1  Purpose','H1  Programme','H1  Contact'],2),'Choose Heading 1'],
    ['Result',page(685,177,['Contents','Purpose ........ 2','Programme .... 3','Contact ....... 4'],2),'Headings can be listed']]],
  ['12-3','Keep the programme aligned','WORD',[
    ['Loose text',page(75,177,['10:00 Welcome Asha','10:15 Practice Ravi','11:30 Questions Neha']),'Hard to scan'],
    ['Three columns',rows(370,181,['Time','Activity','Lead'],[['10:00','Welcome','Asha'],['10:15','Practice','Ravi'],['11:30','Questions','Neha']],1,[52,103,63]),'One event per row'],
    ['Picture + wrap',page(685,177,['Learning Day','Programme table','[image]','Contact details'],2),'Text remains readable']]],
  ['12-4','Refresh the contents list','WORD',[
    ['Section changes',page(75,177,['Purpose','Programme','Materials','Contact'],2),'Rename in the guide'],
    ['Update entire table',pill(371,204,'Update entire table',blue,'#1d4ed8')+arrow(462,284),'Refresh names + pages'],
    ['Contents updated',page(685,177,['Purpose ...... 2','Programme .... 3','What to bring  4','Contact ...... 5'],2),'New name appears']]],
  ['12-5','Merge one letter with two records','WORD',[
    ['Common letter',page(75,177,['Dear «First_Name»','Join Learning Day','12 Oct · 10 am','Training Hall'],0),'Insert a merge field'],
    ['Recipient list',rows(370,181,['First','Last'],[['Asha','Das'],['Ravi','Sen']],0,[109,109]),'Preview both records'],
    ['Two outputs',R(689,178,92,159,'#fff','#cbd5e1',3)+R(792,178,92,159,'#fff','#cbd5e1',3)+T(700,217,'Dear',15)+T(700,242,'Asha',17,accent,700)+T(803,217,'Dear',15)+T(803,242,'Ravi',17,accent,700)+T(694,373,'Same event details',15,muted),'Check each letter']]],
  ['12-6','Check source and final PDF','WORD',[
    ['Editable source',page(75,177,['Learning Day','12 Oct 2026','10 am','Training Hall'],2),'Review facts + layout'],
    ['Export PDF',pill(371,204,'Export updated PDF',blue,'#1d4ed8')+arrow(462,284),'Open the new file'],
    ['Delivery copy',page(685,177,['Learning Day','12 Oct 2026','10 am','Training Hall'],2),'Details must match']]],
  ['13-1','Put each item in its own row','EXCEL',[
    ['Item list',page(75,177,['Notebooks: 20 at 35','Pens: 30 at 10','Folders: 10 at 25','Markers: 4 at 40']),'Separate the inputs'],
    ['Budget cells',rows(370,181,['Item','Qty','Rate'],[['Notebooks','20','35'],['Pens','30','10'],['Folders','10','25'],['Markers','4','40']],0,[112,44,62]),'A1:C5'],
    ['Read one cell',pill(675,198,'B2 = 20')+pill(675,253,'C2 = 35',blue,'#1d4ed8'),'Numbers stay numeric']]],
  ['13-2','Let a formula respond to change','EXCEL',[
    ['Inputs',pill(65,198,'B2 = 20')+pill(65,253,'C2 = 35',blue,'#1d4ed8'),'20 × 35'],
    ['Formula',pill(370,198,'D2 = B2*C2')+pill(370,253,'D2 = 700',blue,'#1d4ed8'),'Fill down to D5'],
    ['Test',pill(675,198,'B2 = 25',amber,'#b45309')+pill(675,253,'D2 = 875'),'Restore B2 to 20']]],
  ['13-3','Fix the shared allowance rate','EXCEL',[
    ['One assumption',pill(65,198,'G2 = 10%')+T(83,291,'Not a tax rate',15,muted),'Label the rate'],
    ['Copy the formula',pill(370,198,'E2 = D2*$G$2')+pill(370,253,'E3 = D3*$G$2',blue,'#1d4ed8'),'G2 stays fixed'],
    ['Change test',pill(675,198,'G2 = 5%',amber,'#b45309')+pill(675,253,'E2 = 35'),'All rows update']]],
  ['13-4','Check the three totals','EXCEL',[
    ['Base amounts',rows(65,181,['Item','Amount'],[['Notebooks','700'],['Pens','300'],['Folders','250'],['Markers','160']],0,[126,92]),'SUM = 1,410'],
    ['Allowances',rows(370,181,['Item','10%'],[['Notebooks','70'],['Pens','30'],['Folders','25'],['Markers','16']],0,[126,92]),'SUM = 141'],
    ['Planned total',pill(675,198,'1,410 + 141')+pill(675,253,'= 1,551',blue,'#1d4ed8'),'Verify each part']]],
  ['13-5','Sort and filter whole records','EXCEL',[
    ['Wrong: one column',rows(65,181,['Item','Amount'],[['Notebooks','160'],['Pens','250'],['Folders','300'],['Markers','700']],0,[126,92]),'Names no longer match'],
    ['Sort high → low',rows(370,181,['Item','Amount'],[['Notebooks','700'],['Pens','300'],['Folders','250'],['Markers','160']],1,[126,92]),'Keep rows together'],
    ['Filter > 250',rows(675,181,['Item','Amount'],[['Notebooks','700'],['Pens','300']],0,[126,92]),'Two visible items']]],
  ['13-6','Compare four item costs','EXCEL',[
    ['Source values',rows(65,181,['Item','Amount'],[['Notebooks','700'],['Pens','300'],['Folders','250'],['Markers','160']],0,[126,92]),'Exclude the total'],
    ['Four-bar chart',bars(365,182,[['Notebooks',700],['Pens',300],['Folders',250],['Markers',160]]),'Base amount · INR'],
    ['Handover check',pill(675,198,'4 item bars')+pill(675,253,'No total bar',blue,'#1d4ed8'),'Refresh after changes']]]
];
for(const [id,title,app,panels] of specs){
  let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="960" height="480" viewBox="0 0 960 480" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">${esc(panels.map(p=>p[0]+': '+p[2]).join('; '))}</desc>`;
  svg+=R(0,0,960,480,'#f8fafc','none',0)+R(0,0,960,82,'#0f172a','none',0)+T(36,51,title,30,'#fff',700)+R(807,24,115,33,app==='WORD'?'#2563eb':'#07805f','none',17)+T(831,47,app,16,'#fff',700);
  panels.forEach((p,i)=>svg+=card(35+i*305,p[0],p[1],p[2]));
  svg+=`<path d="M321 260h15m-7-7 7 7-7 7M626 260h15m-7-7 7 7-7 7" fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
  svg+=T(37,456,'Try the steps, then change one input and check the result.',16,muted,500)+'</svg>';
  fs.writeFileSync(path.join(out,id+'.svg'),svg);
  const words=title.split(' '), lines=[''];
  words.forEach(word=>{const last=lines.length-1;if((lines[last]+' '+word).trim().length>25)lines.push(word);else lines[last]=(lines[last]+' '+word).trim();});
  let mobile=`<svg xmlns="http://www.w3.org/2000/svg" width="350" height="1135" viewBox="0 0 350 1135" role="img" aria-labelledby="title desc"><title id="title">${esc(title)}</title><desc id="desc">${esc(panels.map(p=>p[0]+': '+p[2]).join('; '))}</desc>`;
  mobile+=R(0,0,350,1135,'#f8fafc','none',0)+R(0,0,350,82,'#0f172a','none',0);
  lines.forEach((line,i)=>mobile+=T(25,34+i*26,line,22,'#fff',700));
  panels.forEach((p,i)=>mobile+=`<g transform="translate(${-305*i} ${328*i})">${card(35+i*305,p[0],p[1],p[2])}</g>`);
  mobile+=T(35,1110,'Try it. Change one input. Check again.',15,muted,500)+'</svg>';
  fs.writeFileSync(path.join(out,id+'-mobile.svg'),mobile);
}
console.log(`Built ${specs.length} desktop and mobile diploma lesson visuals in ${out}`);

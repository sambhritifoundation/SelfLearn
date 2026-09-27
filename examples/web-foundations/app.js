'use strict';
const real=new URLSearchParams(location.search).get('mode')==='server';
const byId=id=>document.getElementById(id);
let samples=[{id:1,name:'Rice · 1 kg',price:60},{id:2,name:'Dal · 1 kg',price:110}];
byId('mode').textContent=real?'REAL LOCAL BACKEND: requests go to Python and SQLite on this server.':'BROWSER SIMULATION: no server or database is running here. Rows are held in memory and reset when you refresh. Run the downloaded Python starter to try real persistence.';
function trace(lines){byId('trace').replaceChildren(...lines.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));}
function render(items){byId('rows').replaceChildren(...items.map(p=>{const tr=document.createElement('tr');[p.id,p.name,p.price].forEach(v=>{const td=document.createElement('td');td.textContent=v;tr.append(td);});return tr;}));}
async function api(method,body){
 if(!real){if(method==='POST')samples.push({id:Math.max(0,...samples.map(x=>x.id))+1,...body});return method==='GET'?samples:samples[samples.length-1];}
 const response=await fetch('./api/products',{method,headers:body?{'Content-Type':'application/json'}:{},body:body?JSON.stringify(body):undefined});
 const data=await response.json().catch(()=>({error:'The API did not return JSON. Open the local server URL from the guide.'}));
 if(!response.ok)throw Error(data.error||'Request failed: '+response.status);return data;
}
async function read(){try{const data=await api('GET');render(data);trace(real?['Browser: GET /api/products','Python: SELECT id, name, price FROM products','SQLite → JSON response → table']:['Simulated GET: JavaScript reads the sample array','No network request or SQL query was made','Sample rows appear in the table']);byId('status').textContent=data.length+' items loaded.';}catch(e){byId('status').textContent=e.message;}}
byId('productForm').addEventListener('submit',async event=>{event.preventDefault();const name=byId('name').value.trim(),price=byId('price').valueAsNumber;
 if(!name||name.length>60||!Number.isInteger(price)||price<0||price>100000){byId('status').textContent='Use a name of 1–60 characters and a whole price from 0 to 100000.';return;}
 const button=event.submitter;button.disabled=true;
 try{const added=await api('POST',{name,price});render(await api('GET'));trace(real?['Browser: POST /api/products with JSON','Python validates name and integer price','SQLite INSERT using parameters → commit','201 Created; GET reads the saved row']:['Simulated POST: input checked in browser','JavaScript adds one row to the sample array','No backend or database was contacted']);byId('status').textContent='Added '+added.name+' (id '+added.id+').';byId('name').value='';}
 catch(e){byId('status').textContent=e.message;}finally{button.disabled=false;}
});byId('reload').addEventListener('click',read);read();

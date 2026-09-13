const fs=require('node:fs');
for(const f of ['index.html','selflearn-app.html']){
 let s=fs.readFileSync(f,'utf8');
 if(!s.includes('location.href=\'examprep.html\''))s=s.replace('<div class="navlinks">','<div class="navlinks"><button onclick="location.href=\'examprep.html\'">ExamPrep</button>');
 fs.writeFileSync(f,s);
}
const f='scripts/build-static.cjs';let s=fs.readFileSync(f,'utf8');
if(!s.includes("'examprep.html'"))s=s.replace("const names=[","const names=['examprep.html','examprep.css','examprep.js','data-examprep.js',");
fs.writeFileSync(f,s);

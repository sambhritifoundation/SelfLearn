/* Static deployment assembly; no bundler or dependencies required. */
const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const root=path.resolve(__dirname,'..');
cp.execFileSync(process.execPath,[path.join(__dirname,'test-math8.cjs')],{stdio:'inherit'});
const out=path.join(root,'dist');fs.mkdirSync(out,{recursive:true});
const names=['index.html','selflearn-app.html','data-accountancy.js','data-english.js','data-math.js','data-math8.js','data-math8-rest.js','data-physics.js','data-physics12.js','math8-pilot.js','math8-pilot.css','selflearn-question-template.xlsx','LICENSE','NOTICE.md'];
// Remove the retired pilot audio artifact from previous builds.
fs.rmSync(path.join(out,'audio-math8-hinglish.js'),{force:true});
for(const name of names)fs.copyFileSync(path.join(root,name),path.join(out,name));
fs.cpSync(path.join(root,'assets'),path.join(out,'assets'),{recursive:true});
console.log('Static build ready: dist/index.html');

/* Static deployment assembly; no bundler or dependencies required. */
const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const root=path.resolve(__dirname,'..');
cp.execFileSync(process.execPath,[path.join(__dirname,'build-iitm-es-2023.cjs')],{stdio:'inherit'});
cp.execFileSync(process.execPath,[path.join(__dirname,'test-examprep.cjs')],{stdio:'inherit'});
cp.execFileSync(process.execPath,[path.join(__dirname,'test-exam-set.cjs')],{stdio:'inherit'});
cp.execFileSync(process.execPath,[path.join(__dirname,'test-iitm-es-2023.cjs')],{stdio:'inherit'});
cp.execFileSync(process.execPath,[path.join(__dirname,'test-math8.cjs')],{stdio:'inherit'});
cp.execFileSync(process.execPath,[path.join(__dirname,'test-science8.cjs')],{stdio:'inherit'});
cp.execFileSync(process.execPath,[path.join(__dirname,'test-friction-story.cjs')],{stdio:'inherit'});
const out=path.join(root,'dist');fs.mkdirSync(out,{recursive:true});
const names=['computer-application-task-pilot.js','computer-application-task-pilot.css','computer-application.css','computer-application.js','computer-application-practical.js','computer-application-exam.js','data-computer-application.js','data-computer-application-basic-more.js','data-computer-application-enrichment.js','data-computer-application-basic-complete.js','data-computer-application-diploma-1.js','data-computer-application-diploma-2-3.js','data-computer-application-diploma-2-3-practice.js','data-computer-application-satbarwa.js','data-computer-application-support.js','english-practice.css','english-practice-data.js','english-practice.js','examprep.html','examprep.css','examprep-extra.css','examprep.js','data-examprep.js','data-examprep-pyq.js','data-examprep-qb.js','data-examprep-i18n-fixes.js','data-examprep-grading.js','data-examprep-iitm-es-2023.js','index.html','selflearn-app.html','data-accountancy.js','data-english.js','data-math.js','data-math8.js','data-math8-rest.js','data-science8.js','data-science8-friction-story.js','data-physics.js','data-physics12.js','math8-pilot.js','science8-pilot.js','science8-friction-pilot.js','math8-pilot.css','selflearn-question-template.xlsx','LICENSE','NOTICE.md'];
// Remove the retired pilot audio artifact from previous builds.
fs.rmSync(path.join(out,'audio-math8-hinglish.js'),{force:true});
for(const name of names)fs.copyFileSync(path.join(root,name),path.join(out,name));
fs.cpSync(path.join(root,'assets'),path.join(out,'assets'),{recursive:true});
fs.cpSync(path.join(root,'examples'),path.join(out,'examples'),{recursive:true});
console.log('Static build ready: dist/index.html');

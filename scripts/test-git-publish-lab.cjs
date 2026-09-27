const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),cp=require('node:child_process'),assert=require('node:assert/strict');
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'selflearn-git-lab-'));
fs.cpSync(path.join(__dirname,'../examples/git-publish-lab'),temp,{recursive:true});
const env={...process.env,GIT_CONFIG_GLOBAL:process.platform==='win32'?'NUL':'/dev/null',GIT_CONFIG_SYSTEM:process.platform==='win32'?'NUL':'/dev/null'};
const git=(...args)=>cp.execFileSync('git',args,{cwd:temp,env,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
git('init','-b','main');git('config','user.name','SelfLearn test');git('config','user.email','test@example.invalid');
git('add','index.html','styles.css','README.md','GUIDE.html','.gitignore','visuals/');git('commit','-m','Add first practice page');assert.equal(git('status','--porcelain'),'');
git('switch','-c','improve-heading');const file=path.join(temp,'index.html'),original=fs.readFileSync(file,'utf8');fs.writeFileSync(file,original.replace('<h1>My first published page</h1>','<h1>My improved page</h1>'));assert(git('diff').includes('My improved page'));git('add','index.html');git('restore','--staged','index.html');assert(git('diff').includes('My improved page'));git('add','index.html');git('commit','-m','Clarify the page heading');git('switch','main');git('merge','improve-heading');assert(fs.readFileSync(file,'utf8').includes('My improved page'));git('revert','--no-edit','HEAD');assert.equal(fs.readFileSync(file,'utf8'),original);assert.equal(git('rev-list','--count','HEAD'),'3');
console.log('PASS: tutorial init, explicit staging including visuals, commit, diff, unstage, branch, merge and non-destructive revert in a disposable repository.');

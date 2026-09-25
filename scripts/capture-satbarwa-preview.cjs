/* Capture the actual starter site for the first lesson's visual preview. */
const path=require('node:path');
const {chromium}=require(process.env.SL_NODE_MODULES?path.join(process.env.SL_NODE_MODULES,'playwright'):'playwright');
const root=path.resolve(__dirname,'..');
const url='file:///'+path.join(root,'examples','satbarwa-bazar','index.html').replace(/\\/g,'/');
(async()=>{
  const options={headless:true};
  if(process.platform==='win32')options.executablePath=process.env.SL_CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe';
  const browser=await chromium.launch(options);
  try{
    for(const [name,width,height] of [['desktop',960,1120],['mobile',350,1320]]){
      const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
      await page.goto(url);
      await page.screenshot({path:path.join(root,'assets','computer-application','satbarwa','storefront-preview-'+name+'.png')});
      await page.close();
    }
  }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});

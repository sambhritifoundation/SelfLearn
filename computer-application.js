(function(){
  "use strict";

  function lessonList(items){
    return '<ol class="ca-plan-list">'+items.map(function(item){
      return '<li><span class="ca-plan-no">'+item[0]+'</span><span><b>'+sp(item[1],item[2])+'</b><small>'+sp(item[3],item[4])+'</small></span></li>';
    }).join('')+'</ol>';
  }

  window.computerApplicationOverview=function(){
    var basic=[
      ['1','Meet the computer','कंप्यूटर को जानें','Hardware, accessories, ports, power supply, safe handling, power on and sign-in.','Hardware, accessories, ports, power supply, safe handling, power on और sign-in।'],
      ['2','Mouse and touchpad','Mouse और touchpad','Point, click, double-click, right-click, drag and scroll.','Point, click, double-click, right-click, drag और scroll।'],
      ['3','Keyboard and typing','Keyboard और typing','Home row, accurate typing, shortcuts and daily speed practice.','Home row, सही typing, shortcuts और रोज speed practice।'],
      ['4','Windows desktop','Windows desktop','Start, Search, taskbar, windows and settings.','Start, Search, taskbar, windows और settings।'],
      ['5','Files and folders','Files और folders','Create, rename, copy, move, delete, restore and use a USB drive.','Create, rename, copy, move, delete, restore और USB drive उपयोग।'],
      ['6','Microsoft Word basics','Microsoft Word basics','Type, edit, format, insert a picture, save, print and make a PDF.','Type, edit, format, picture insert, save, print और PDF बनाना।'],
      ['7','Internet basics','Internet basics','Use a browser, search well, download files and recognise safe websites.','Browser उपयोग, सही search, files download और safe websites पहचानना।'],
      ['8','Email and online forms','Email और online forms','Send email, attach a file and complete an online form.','Email भेजना, file attach करना और online form भरना।'],
      ['9','Digital safety','Digital safety','Strong passwords, scams, privacy, updates and backups.','Strong passwords, scams, privacy, updates और backups।'],
      ['10','Basic project','Basic project','Create, save, print and share one useful document.','एक उपयोगी document बनाएँ, save करें, print और share करें।']
    ];
    var diploma=[
      ['1','Windows productivity','Windows productivity','Organise files, accounts, apps, storage and common settings.','Files, accounts, apps, storage और common settings व्यवस्थित करें।'],
      ['2','Word for office work','Office work के लिए Word','Styles, tables, images, page layout, references and mail merge basics.','Styles, tables, images, page layout, references और mail merge basics।'],
      ['3','Excel foundations','Excel foundations','Data entry, formulas, functions, formatting, sorting and charts.','Data entry, formulas, functions, formatting, sorting और charts।'],
      ['4','PowerPoint presentations','PowerPoint presentations','Plan slides, use visuals and charts, and present clearly.','Slides plan करें, visuals और charts उपयोग करें, साफ present करें।'],
      ['5','Internet, email and cloud','Internet, email और cloud','Professional email, calendars, cloud files and collaboration.','Professional email, calendars, cloud files और collaboration।'],
      ['6','PDF, scan and print','PDF, scan और print','Create PDFs, scan documents and manage print jobs.','PDF बनाएँ, documents scan करें और print jobs संभालें।'],
      ['7','Office communication and data entry','Office communication और data entry','Prepare letters, notices, records and improve speed with accuracy.','Letters, notices, records बनाएँ और accuracy के साथ speed बढ़ाएँ।'],
      ['8','Computer care and troubleshooting','Computer care और troubleshooting','Updates, storage cleanup, devices, Wi-Fi and common fixes.','Updates, storage cleanup, devices, Wi-Fi और common fixes।'],
      ['9','Safety and privacy','Safety और privacy','Permissions, phishing, account recovery and secure sharing.','Permissions, phishing, account recovery और secure sharing।'],
      ['10','Diploma office project','Diploma office project','Complete a connected Word, Excel and PowerPoint assignment.','Word, Excel और PowerPoint से जुड़ा assignment पूरा करें।']
    ];
    var advanced=[
      ['1','Advanced Word','Advanced Word','Templates, long documents, forms, sections and document automation.','Templates, long documents, forms, sections और document automation।'],
      ['2','Advanced Excel','Advanced Excel','Lookups, logic, data validation, PivotTables and dashboards.','Lookups, logic, data validation, PivotTables और dashboards।'],
      ['3','Advanced presentations','Advanced presentations','Data stories, media, reusable themes and confident delivery.','Data stories, media, reusable themes और confident delivery।'],
      ['4','Database fundamentals','Database fundamentals','Tables, relationships, queries, forms and reports.','Tables, relationships, queries, forms और reports।'],
      ['5','Web fundamentals','Web fundamentals','Understand websites and publish a simple accessible page.','Websites समझें और simple accessible page publish करें।'],
      ['6','Cloud workflows','Cloud workflows','Shared folders, permissions, version history and team workflows.','Shared folders, permissions, version history और team workflows।'],
      ['7','Cybersecurity and recovery','Cybersecurity और recovery','Protect devices, manage access, back up data and recover safely.','Devices protect करें, access manage करें, backup और recovery करें।'],
      ['8','Automation and responsible AI','Automation और responsible AI','Use automation and AI to assist office tasks, then verify the result.','Office tasks में automation और AI उपयोग करें, फिर result verify करें।'],
      ['9','Small-office systems','Small-office systems','Plan records, forms, reports and a repeatable digital process.','Records, forms, reports और repeatable digital process plan करें।'],
      ['10','Advanced capstone','Advanced capstone','Build and present a complete digital solution for a real need.','किसी real need के लिए complete digital solution बनाएँ और present करें।']
    ];

    return '<div class="ca-version">'+sp('<b>Pilot version:</b> Windows 11 + Microsoft 365 / Office 2024','<b>पायलट संस्करण:</b> Windows 11 + Microsoft 365 / Office 2024')+'</div>'+
      '<div class="ca-levels" aria-label="Course levels">'+
        '<div class="ca-level active"><span class="ca-status">● '+sp('Available now','अभी उपलब्ध')+'</span><h3>🌱 '+sp('Basic','बेसिक')+'</h3><div class="sub">'+sp('Start with a computer. Learn by doing one real task at a time.','कंप्यूटर शुरू करें। एक-एक असली काम करके सीखें।')+'</div></div>'+
        '<div class="ca-level"><span class="ca-status">○ '+sp('Planned','आगे आएगा')+'</span><h3>🧰 '+sp('Diploma','डिप्लोमा')+'</h3><div class="sub">'+sp('Documents, spreadsheets, presentations, internet and office work.','दस्तावेज़, स्प्रेडशीट, प्रेज़ेंटेशन, इंटरनेट और कार्यालय कार्य।')+'</div></div>'+
        '<div class="ca-level"><span class="ca-status">○ '+sp('Planned','आगे आएगा')+'</span><h3>🚀 '+sp('Advanced Diploma','एडवांस्ड डिप्लोमा')+'</h3><div class="sub">'+sp('Advanced office work, data, collaboration, security and projects.','उन्नत कार्यालय कार्य, डेटा, सहयोग, सुरक्षा और प्रोजेक्ट।')+'</div></div>'+
      '</div>'+
      '<section class="ca-roadmap" aria-labelledby="ca-roadmap-title">'+
        '<div class="ca-roadmap-head"><div><span class="eyebrow">'+sp('Complete learning path','पूरा learning path')+'</span><h3 id="ca-roadmap-title">'+sp('Planned lessons in every stage','हर stage के planned lessons')+'</h3></div><p>'+sp('The Basic stage begins below with Chapter 1. Diploma and Advanced Diploma lessons are the planned sequence for future chapters.','Basic stage नीचे Chapter 1 से शुरू होता है। Diploma और Advanced Diploma future chapters का planned sequence है।')+'</p></div>'+
        '<div class="ca-plan-grid">'+
          '<article class="ca-plan-card active"><div class="ca-plan-title"><span>🌱</span><div><h4>'+sp('Basic Certificate','बेसिक सर्टिफिकेट')+'</h4><span class="ca-available">'+sp('Chapter 1 available','Chapter 1 उपलब्ध')+'</span></div></div>'+lessonList(basic)+'</article>'+
          '<article class="ca-plan-card"><div class="ca-plan-title"><span>🧰</span><div><h4>'+sp('Diploma','डिप्लोमा')+'</h4><span>'+sp('Planned','Planned')+'</span></div></div>'+lessonList(diploma)+'</article>'+
          '<article class="ca-plan-card"><div class="ca-plan-title"><span>🚀</span><div><h4>'+sp('Advanced Diploma','एडवांस्ड डिप्लोमा')+'</h4><span>'+sp('Planned','Planned')+'</span></div></div>'+lessonList(advanced)+'</article>'+
        '</div>'+
      '</section>';
  };
})();

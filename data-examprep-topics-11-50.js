/* Topics 11–50 follow the supplied Pragati Visual Handbook (pp. 1–3).
   Each concept is paired with the cited publisher or standards body's primary guidance. */
(()=>{
 const bank=window.EXAMPREP,guides=window.EXAMPREP_PRACTICE_TUTORIALS,root='assets/examprep/computer-basics/',L='ABCDE';
 const refs={
  windows:'https://support.microsoft.com/en-US/Windows/Hardware/Input-Devices/windows-keyboard-tips-and-tricks',
  mouse:'https://support.microsoft.com/en-us/windows/hardware/input-devices/change-mouse-settings',
  files:'https://support.microsoft.com/en-gb/windows/experience/fileexplorer/file-explorer-in-windows',
  search:'https://support.google.com/websearch/answer/134479',
  browser:'https://support.google.com/chrome/answer/95759',
  mail:'https://support.microsoft.com/en-us/office/create-and-send-email-in-outlook-on-the-web-e31b8910-76fd-4043-859f-bb2dfed0cde1',
  cloud:'https://support.microsoft.com/en-us/onedrive/what-is-microsoft-cloud-storage',
  word:'https://support.microsoft.com/en-us/word/training/create-a-document-in-word',
  excel:'https://support.microsoft.com/en-US/Excel/basic-tasks-in-excel',
  formula:'https://support.microsoft.com/en-us/excel/create-a-simple-formula',
  chart:'https://support.microsoft.com/en-us/excel/get-started/create-a-chart-from-start-to-finish',
  slides:'https://support.microsoft.com/en-us/powerpoint/training/create-a-presentation-in-powerpoint',
  code:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/A_first_splash',
  algorithm:'https://developer.mozilla.org/en-US/docs/Glossary/Algorithm',
  ai:'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research',
  prompt:'https://developers.openai.com/api/docs/guides/prompt-engineering',
  safety:'https://www.cisa.gov/secure-our-world',
  footprint:'https://www.unicef.org/parenting/child-care/online-privacy',
  misinformation:'https://www.unicef.org/eca/stories/quick-guide-spotting-misinformation',
  cyberbullying:'https://www.stopbullying.gov/cyberbullying/how-to-report',
  qr:'https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information; https://www.qrcode.com/en/about/index.html',
  web:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works',
  html:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content',
  design:'https://www.w3.org/WAI/tips/designing/',
  image:'https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types',
  media:'https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats',
  trouble:'https://support.microsoft.com/en-us/support/get-help/windows-troubleshooters'
 };
 const topics=[];
 // Fact format: term | Hindi term | precise role or use | Hindi role or use.
 const add=(number,title,titleHi,summary,summaryHi,ref,facts)=>topics.push({number,title,titleHi,summary,summaryHi,ref:refs[ref],facts:facts.map(line=>line.split('|'))});
 // The handbook's "Try It Yourself" column, adapted as one concrete learner action per topic.
 const tryIt={
  11:['Type a five-line introduction. Use Backspace to correct one mistake.','पाँच पंक्तियों में अपना परिचय लिखें। एक गलती बैकस्पेस से सुधारें।'],
  12:['Open a folder, right-click an item, then scroll through a page.','एक फ़ोल्डर खोलें, किसी वस्तु पर दायाँ क्लिक करें, फिर पेज स्क्रॉल करें।'],
  13:['Create a My School folder with Maths and Science subfolders.','मेरा विद्यालय फ़ोल्डर बनाएँ और उसमें गणित व विज्ञान के उपफ़ोल्डर रखें।'],
  14:['Save a notice, edit it, then use Save As to keep a second named copy.','सूचना सहेजें, बदलें, फिर सेव ऐज़ से दूसरे नाम की प्रति रखें।'],
  15:['Copy a sentence, move a file with Cut and Paste, then undo one action.','वाक्य कॉपी करें, कट और पेस्ट से फ़ाइल ले जाएँ, फिर एक काम अनडू करें।'],
  16:['Use Ctrl+C and Ctrl+V to duplicate a line, then Ctrl+S to save.','Ctrl+C और Ctrl+V से पंक्ति की प्रति बनाएँ, फिर Ctrl+S से सहेजें।'],
  17:['Search for solar-system planets, then add school level to narrow the results.','सौरमंडल के ग्रह खोजें, फिर परिणाम सीमित करने को कक्षा स्तर जोड़ें।'],
  18:['Change a vague search such as planets into planets in order from the Sun.','ग्रह जैसी अस्पष्ट खोज को सूर्य से क्रम में ग्रह जैसी स्पष्ट खोज बनाएँ।'],
  19:['Download a practice PDF, then upload a teacher-provided file to the class page.','अभ्यास PDF डाउनलोड करें, फिर शिक्षक की दी फ़ाइल कक्षा पेज पर अपलोड करें।'],
  20:['Draft a polite email to a teacher with a subject and a practice attachment.','शिक्षक को विषय पंक्ति और अभ्यास फ़ाइल सहित विनम्र ईमेल मसौदा लिखें।'],
  21:['Mark a photo on your device as local and its uploaded copy as cloud.','उपकरण की फ़ोटो को स्थानीय और उसकी अपलोड प्रति को क्लाउड चिह्नित करें।'],
  22:['Write a one-page school notice with a title, date and clear message.','शीर्षक, तिथि और स्पष्ट संदेश वाली एक पेज की विद्यालय सूचना लिखें।'],
  23:['Improve a plain project page using a heading, bullets and one useful image.','साधारण परियोजना पेज को शीर्षक, बिंदुओं और एक उपयोगी चित्र से सुधारें।'],
  24:['Make a marks table with Name in column A and Score in column B.','अंक तालिका बनाएँ: A स्तंभ में नाम और B स्तंभ में अंक रखें।'],
  25:['If B2 is 8 and C2 is 5, enter =B2+C2 to get 13.','यदि B2 में 8 और C2 में 5 है, तो =B2+C2 से 13 पाएँ।'],
  26:['Plot three monthly expenses as a column chart and give it a clear title.','तीन महीनों के खर्च का स्तंभ चार्ट बनाएँ और साफ़ शीर्षक दें।'],
  27:['Create three slides: school name, one picture, and three things you like.','तीन स्लाइड बनाएँ: विद्यालय का नाम, एक चित्र और पसंद की तीन बातें।'],
  28:['Remove crowded text from a slide and explain its one main idea aloud.','भीड़भाड़ वाला टेक्स्ट हटाएँ और स्लाइड का एक मुख्य विचार बोलकर समझाएँ।'],
  29:['Write exact instructions for making tea and check whether each step is in order.','चाय बनाने के स्पष्ट निर्देश लिखें और देखें कि हर चरण सही क्रम में है।'],
  30:['Draw steps for getting ready for school, including a decision about rain.','विद्यालय जाने की तैयारी के चरण चित्रित करें, बारिश का निर्णय भी जोड़ें।'],
  31:['List five everyday features that may use AI, then explain one.','रोज़मर्रा की पाँच सुविधाएँ लिखें जिनमें AI हो सकता है, फिर एक समझाएँ।'],
  32:['Compare a calculator following fixed rules with a photo-labeling AI model.','तय नियम वाले कैलकुलेटर की तुलना फ़ोटो पहचानने वाले AI मॉडल से करें।'],
  33:['Improve Explain plants to Explain photosynthesis to a Class 6 learner in three steps.','पौधे समझाओ को बदलकर कक्षा 6 के विद्यार्थी को प्रकाश संश्लेषण तीन चरणों में समझाओ लिखें।'],
  34:['Ask for a simple explanation, then request five quiz questions and check the answers.','सरल व्याख्या माँगें, फिर पाँच अभ्यास प्रश्न लें और उत्तर जाँचें।'],
  35:['Check an AI claim about a planet against a textbook or trusted science source.','किसी ग्रह पर AI के दावे को पाठ्यपुस्तक या विश्वसनीय विज्ञान स्रोत से मिलाएँ।'],
  36:['Describe an educational poster with subject, background, colours and readable labels.','शैक्षिक पोस्टर के लिए विषय, पृष्ठभूमि, रंग और पढ़ने योग्य नाम लिखें।'],
  37:['Sort sample posts into safe to share and better kept private.','नमूना पोस्ट को साझा करने योग्य और निजी रखने योग्य में बाँटें।'],
  38:['Check who first published a surprising claim before forwarding it.','चौंकाने वाला दावा भेजने से पहले देखें कि उसे पहले किसने प्रकाशित किया।'],
  39:['For a hurtful message, save evidence and tell a trusted adult.','आहत करने वाले संदेश का प्रमाण रखें और विश्वसनीय बड़े को बताएँ।'],
  40:['Read a sample urgent OTP message and identify why it is suspicious.','तुरंत OTP माँगने वाला नमूना संदेश पढ़ें और संदेह के कारण पहचानें।'],
  41:['Draw a phone and laptop connected by Wi-Fi to one router.','एक राउटर से वाई-फ़ाई द्वारा जुड़े फ़ोन और लैपटॉप का चित्र बनाएँ।'],
  42:['Draw browser → internet → server → browser for a webpage request.','वेबपेज अनुरोध के लिए ब्राउज़र → इंटरनेट → सर्वर → ब्राउज़र बनाएं।'],
  43:['Write an HTML heading, one paragraph and a three-item list.','HTML में शीर्षक, एक अनुच्छेद और तीन वस्तुओं की सूची लिखें।'],
  44:['Build a small My School page with a heading, paragraph and list.','शीर्षक, अनुच्छेद और सूची वाला छोटा मेरा विद्यालय पेज बनाएँ।'],
  45:['Scan a classroom QR code and inspect the address before opening it.','कक्षा का QR कोड स्कैन करें और खोलने से पहले उसका पता जाँचें।'],
  46:['Design a school-event poster with one clear heading and readable contrast.','एक साफ़ शीर्षक और पढ़ने योग्य रंग अंतर वाला विद्यालय कार्यक्रम पोस्टर बनाएँ।'],
  47:['Crop an extra edge from a practice photo, then resize a copy.','अभ्यास फ़ोटो का अनावश्यक किनारा काटें, फिर प्रति का आकार बदलें।'],
  48:['Record a 30-second explanation, replay it and check whether words are clear.','30 सेकंड की व्याख्या रिकॉर्ड करें, फिर चलाकर शब्दों की स्पष्टता जाँचें।'],
  49:['For a blank monitor, check power and cables before changing settings.','मॉनिटर खाली हो तो सेटिंग बदलने से पहले बिजली और केबल जाँचें।'],
  50:['Put your best document, chart and slide deck in one portfolio folder.','अपना अच्छा दस्तावेज़, चार्ट और स्लाइड एक पोर्टफोलियो फ़ोल्डर में रखें।']
 };
 function publish(t){
  const p=String(t.number).padStart(2,'0'),page=t.number<=13?1:t.number<=34?2:3,id=`SL-PRACTICE-VOC-CA-T${p}-20261002`,visual=`${root}topic-${p}-guide.svg`,facts=t.facts;
  if(facts.length!==10||facts.some(f=>f.length!==4||f.some(x=>!x.trim()))||!t.ref)throw Error(`Incomplete Topic ${t.number}`);
  const ref=`Pragati_Computer_Basics_Visual_Handbook_50_Topics.pdf, p. ${page}, topic ${t.number} “${t.title}”; concept verification: ${t.ref}`;
  const base=(n,type,marks,subTopic,subTopicHi)=>({qid:`EP-VOC-CA-T${p}-${String(n).padStart(2,'0')}`,class:'Vocational',subject:'Computer Application',topic:t.title,subTopic,subTopicHi,type,marks,difficulty:'Practice',sourceType:`Pragati Computer Basics Visual Handbook · Topic ${t.number}`,sourceRef:ref,sourceVerifiedFromHandbook:true,sourceVerifiedFromPrimary:true});
  const q=[];
  for(let i=0;i<10;i++){
   const indexes=[i,(i+3)%10,(i+5)%10,(i+7)%10],ordered=indexes.slice(i%4).concat(indexes.slice(0,i%4)),f=facts[i];
   q.push({...base(i+1,'mcq',1,f[0],f[1]),question:`Which term best matches this description? ${f[2]}`,questionHi:`किस शब्द का यह अर्थ है? ${f[3]}`,options:ordered.map(j=>facts[j][0]),optionsHi:ordered.map(j=>facts[j][1]),correct:L[ordered.indexOf(i)],explanation:`${f[0]}: ${f[2]}`,explanationHi:`${f[1]}: ${f[3]}`});
  }
  const groups=[[0,1,2,3,4],[2,3,4,5,6],[4,5,6,7,8],[6,7,8,9,0]];
  groups.forEach((indexes,i)=>{
   const raw=indexes.map((j,k)=>({en:`${facts[j][0]} — ${facts[k<3?j:indexes[k-1]][2]}`,hi:`${facts[j][1]} — ${facts[k<3?j:indexes[k-1]][3]}`,correct:k<3})),shift=(t.number+i)%5,ordered=raw.slice(shift).concat(raw.slice(0,shift));
   q.push({...base(i+11,'msq',2,'Check the pairs','सही जोड़ियाँ चुनें'),question:`Set ${i+1}: select every correct term and meaning pair for ${t.title}.`,questionHi:`समूह ${i+1}: ${t.titleHi} की सभी सही शब्द और अर्थ की जोड़ियाँ चुनें।`,options:ordered.map(x=>x.en),optionsHi:ordered.map(x=>x.hi),correct:ordered.flatMap((x,j)=>x.correct?[L[j]]:[]),explanation:indexes.slice(0,3).map(j=>`${facts[j][0]} — ${facts[j][2]}`).join('; ')+'.',explanationHi:indexes.slice(0,3).map(j=>`${facts[j][1]} — ${facts[j][3]}`).join('; ')+'।'});
  });
  [1,4,7].forEach((j,i)=>{const f=facts[j];q.push({...base(i+15,'fill',1,f[0],f[1]),question:`Fill in the term: ${f[2]} → ______.`,questionHi:`शब्द भरें: ${f[3]} → ______।`,correct:f[0],correctHi:f[1],acceptedAnswers:[f[0],f[1]],explanation:`${f[0]}: ${f[2]}`,explanationHi:`${f[1]}: ${f[3]}`})});
  [[0,1,2,3],[3,4,5,6],[6,7,8,9]].forEach((indexes,i)=>{const baseOrder=[indexes[2],indexes[0],indexes[3],indexes[1]],shift=(t.number+i)%4,order=baseOrder.slice(shift).concat(baseOrder.slice(0,shift));q.push({...base(i+18,'match',4,'Match terms and roles','शब्द और अर्थ मिलाएँ'),question:`Group ${i+1}: match each ${t.title.toLowerCase()} term to its role.`,questionHi:`समूह ${i+1}: ${t.titleHi} के हर शब्द को उसके काम या अर्थ से मिलाएँ।`,leftItems:indexes.map(j=>facts[j][0]),leftItemsHi:indexes.map(j=>facts[j][1]),options:order.map(j=>facts[j][2]),optionsHi:order.map(j=>facts[j][3]),correct:indexes.map(j=>L[order.indexOf(j)]),explanation:indexes.map(j=>`${facts[j][0]} → ${facts[j][2]}`).join('; ')+'.',explanationHi:indexes.map(j=>`${facts[j][1]} → ${facts[j][3]}`).join('; ')+'।',...(i===0?{imageUrl:visual,imageAlt:`Visual guide to ${t.title}`,imageAltHi:`${t.titleHi} का चित्र`}:{})})});
  bank.questions.push(...q);
  bank.practiceSets.push({id,class:'Vocational',subject:'Computer Application',topic:t.title,title:`Topic ${t.number} · ${t.title}`,titleHi:`विषय ${t.number} · ${t.titleHi}`,description:t.summary,descriptionHi:t.summaryHi,questionIds:q.map(x=>x.qid)});
  guides[id]={lead:[t.summary,t.summaryHi],image:visual,alt:[`Visual guide to ${t.title}: ${facts.slice(0,4).map(f=>f[0]).join(', ')}.`,`${t.titleHi} का चित्र: ${facts.slice(0,4).map(f=>f[1]).join(', ')}।`],steps:facts.slice(0,3).map(f=>[[f[0],f[1]],[f[2],f[3]]]),example:tryIt[t.number]};
 }
 add(11,'Keyboard and Typing Skills','कीबोर्ड और टाइपिंग कौशल','Learn the keys that enter, correct and move through text.','टेक्स्ट लिखने, सुधारने और उसमें चलने वाली कुंजियाँ सीखें।','windows',[
 'Letter keys|अक्षर कुंजियाँ|Enter alphabetic characters while typing.|टाइप करते समय वर्ण दर्ज करती हैं।',
 'Number keys|अंक कुंजियाँ|Enter digits such as 0 through 9.|0 से 9 तक के अंक दर्ज करती हैं।',
 'Spacebar|स्पेसबार|Inserts a blank space between words.|शब्दों के बीच खाली जगह जोड़ता है।',
 'Enter|एंटर|Starts a new line in ordinary text editing.|सामान्य टेक्स्ट में नई पंक्ति शुरू करता है।',
 'Backspace|बैकस्पेस|Deletes the character immediately before the cursor.|कर्सर के ठीक पहले का अक्षर मिटाता है।',
 'Shift|शिफ्ट|Produces an uppercase letter while held with its key.|अक्षर कुंजी के साथ दबाने पर बड़ा अक्षर लिखता है।',
 'Caps Lock|कैप्स लॉक|Keeps alphabetic typing in uppercase until switched off.|बंद करने तक अंग्रेज़ी अक्षर बड़े रूप में लिखता है।',
 'Tab|टैब|Moves focus to the next field in many forms.|कई फ़ॉर्म में अगली जगह पर फोकस ले जाता है।',
 'Arrow keys|तीर कुंजियाँ|Move the cursor in the indicated direction.|कर्सर को तीर की दिशा में ले जाती हैं।',
 'Typing practice|टाइपिंग अभ्यास|Builds accuracy by correcting errors in short text.|छोटे टेक्स्ट की गलतियाँ सुधारकर शुद्धता बढ़ाता है।']);
 add(12,'Master Your Mouse','माउस का सही उपयोग','Use pointer, clicks, scrolling and dragging for everyday tasks.','रोज़मर्रा के काम में पॉइंटर, क्लिक, स्क्रॉल और ड्रैग उपयोग करें।','mouse',[
 'Pointer|पॉइंटर|Shows where the mouse is aimed on screen.|स्क्रीन पर माउस की जगह दिखाता है।',
 'Single-click|एक क्लिक|Selects an item with one press of a mouse button.|माउस बटन एक बार दबाकर वस्तु चुनता है।',
 'Double-click|दोहरा क्लिक|Often opens a file or folder with two quick presses.|अक्सर दो तेज़ क्लिक से फ़ाइल या फ़ोल्डर खोलता है।',
 'Right-click|दायाँ क्लिक|Often opens a context menu of available actions.|अक्सर उपलब्ध कामों का संदर्भ मेन्यू खोलता है।',
 'Scroll wheel|स्क्रॉल पहिया|Moves through a page without changing its text.|टेक्स्ट बदले बिना पेज में ऊपर-नीचे ले जाता है।',
 'Drag|ड्रैग|Moves an item while a mouse button stays pressed.|बटन दबाए रखते हुए वस्तु खिसकाता है।',
 'Drop|ड्रॉप|Releases a dragged item at the chosen location.|खींची हुई वस्तु चुनी जगह पर छोड़ता है।',
 'Selection|चयन|Marks an item so the next action applies to it.|वस्तु चिह्नित करता है ताकि अगला काम उस पर हो।',
 'Left button|बायाँ बटन|Performs the usual select action on most setups.|अधिकांश कंप्यूटरों में सामान्य चयन करता है।',
 'Touchpad|टचपैड|Controls the pointer on many laptops without a separate mouse.|कई लैपटॉप में अलग माउस बिना पॉइंटर चलाता है।']);
 add(13,'Files and Folders','फ़ाइलें और फ़ोल्डर','Organize school work using clear file names and folders.','स्पष्ट फ़ाइल नाम और फ़ोल्डर से पढ़ाई का काम व्यवस्थित करें।','files',[
 'File|फ़ाइल|Stores one document, picture or other saved item.|एक दस्तावेज़, चित्र या अन्य सहेजी वस्तु रखती है।',
 'Folder|फ़ोल्डर|Groups files and other folders together.|फ़ाइलें और अन्य फ़ोल्डर एक साथ रखता है।',
 'File name|फ़ाइल नाम|Helps identify a saved item in a folder.|फ़ोल्डर में सहेजी वस्तु पहचानने में मदद करता है।',
 'Subfolder|उपफ़ोल्डर|Organizes a smaller group inside a parent folder.|मुख्य फ़ोल्डर के भीतर छोटा समूह बनाता है।',
 'File Explorer|फ़ाइल एक्सप्लोरर|Lets Windows users browse files and folders.|विंडोज़ में फ़ाइल और फ़ोल्डर देखने देता है।',
 'Path|पाथ|Describes the location of a file through folders.|फ़ोल्डरों के रास्ते से फ़ाइल का स्थान बताता है।',
 'Rename|नाम बदलें|Changes a file or folder name without editing its contents.|अंदर की सामग्री बदले बिना नाम बदलता है।',
 'Move|स्थान बदलें|Places an item in a different folder.|वस्तु को दूसरे फ़ोल्डर में रखता है।',
 'Copy|कॉपी|Creates another copy while keeping the original item.|मूल वस्तु रखते हुए दूसरी प्रति बनाता है।',
 'Organized folder|व्यवस्थित फ़ोल्डर|Keeps related school files easy to find later.|संबंधित पढ़ाई की फ़ाइलें बाद में आसानी से ढूँढ़ने देता है।']);
 add(14,'Save vs Save As','सेव और सेव ऐज़','Know when to update a file and when to make a named copy.','फ़ाइल अपडेट करने और अलग नाम से प्रति बनाने का अंतर समझें।','word',[
 'Save|सेव|Writes current changes to the existing file.|मौजूदा फ़ाइल में अभी के बदलाव सहेजता है।',
 'Save As|सेव ऐज़|Creates a file with a chosen new name or location.|चुने हुए नए नाम या स्थान पर फ़ाइल बनाता है।',
 'New document|नया दस्तावेज़|Needs a name and location when first saved.|पहली बार सहेजते समय नाम और स्थान चाहिए।',
 'Edit|संपादन|Changes the content before the next save.|अगली बार सहेजने से पहले सामग्री बदलता है।',
 'Original file|मूल फ़ाइल|Remains available when Save As creates a separate copy.|सेव ऐज़ से अलग प्रति बनने पर उपलब्ध रहती है।',
 'File location|फ़ाइल स्थान|Tells where a saved document is kept.|बताता है कि सहेजा दस्तावेज़ कहाँ रखा है।',
 'File name|फ़ाइल नाम|Identifies a saved document in its folder.|अपने फ़ोल्डर में सहेजे दस्तावेज़ को पहचानता है।',
 'Copy of a file|फ़ाइल की प्रति|Lets you try changes while keeping another version.|दूसरा संस्करण रखते हुए नए बदलाव आज़माने देती है।',
 'Unsaved change|बिना सहेजा बदलाव|May be lost if the app closes unexpectedly.|ऐप अचानक बंद हो जाए तो खो सकता है।',
 'Version|संस्करण|Names a particular saved state of a document.|दस्तावेज़ की किसी सहेजी हुई अवस्था को बताता है।']);
 add(15,'Copy, Cut and Paste','कॉपी, कट और पेस्ट','Duplicate or move selected text and files, and undo mistakes.','चुने टेक्स्ट और फ़ाइलों की प्रति बनाएँ या उन्हें ले जाएँ; गलती सुधारें।','windows',[
 'Select|चुनें|Marks the text or item to act on.|काम करने के लिए टेक्स्ट या वस्तु चिह्नित करता है।',
 'Copy|कॉपी|Puts a duplicate on the clipboard and keeps the original.|मूल रखते हुए प्रति क्लिपबोर्ड पर रखती है।',
 'Cut|कट|Prepares a selected item to move elsewhere.|चुनी वस्तु दूसरी जगह ले जाने के लिए तैयार करता है।',
 'Paste|पेस्ट|Inserts clipboard content at the chosen place.|क्लिपबोर्ड की सामग्री चुनी जगह रखता है।',
 'Clipboard|क्लिपबोर्ड|Temporarily holds copied or cut content.|कॉपी या कट की सामग्री अस्थायी रूप से रखता है।',
 'Undo|अनडू|Reverses the most recent supported action.|पिछला समर्थित काम वापस करता है।',
 'Duplicate text|टेक्स्ट की प्रति|Appears when copied text is pasted in another place.|कॉपी किया टेक्स्ट दूसरी जगह पेस्ट होने पर मिलता है।',
 'Move a file|फ़ाइल ले जाएँ|Can be done by cutting and then pasting it elsewhere.|फ़ाइल कट करके दूसरी जगह पेस्ट करने से होता है।',
 'Destination|गंतव्य|Is the place where pasted content will appear.|वह जगह है जहाँ पेस्ट की सामग्री आएगी।',
 'Original|मूल|Stays in place after Copy but is moved after Cut and Paste.|कॉपी पर वहीं रहता है; कट और पेस्ट पर स्थान बदलता है।']);
 add(16,'Useful Keyboard Shortcuts','उपयोगी कीबोर्ड शॉर्टकट','Use common Ctrl shortcuts to edit, save, print and find.','संपादन, सेव, प्रिंट और खोज के सामान्य Ctrl शॉर्टकट उपयोग करें।','windows',[
 'Ctrl+C|Ctrl+C|Copies selected content to the clipboard.|चुनी सामग्री क्लिपबोर्ड पर कॉपी करता है।',
 'Ctrl+V|Ctrl+V|Pastes clipboard content at the cursor.|कर्सर की जगह क्लिपबोर्ड सामग्री पेस्ट करता है।',
 'Ctrl+X|Ctrl+X|Cuts selected content for moving.|चुनी सामग्री ले जाने के लिए कट करता है।',
 'Ctrl+Z|Ctrl+Z|Undoes the last supported action.|पिछला समर्थित काम वापस करता है।',
 'Ctrl+S|Ctrl+S|Saves the current file in many apps.|कई ऐप में वर्तमान फ़ाइल सहेजता है।',
 'Ctrl+P|Ctrl+P|Opens the print command in many apps.|कई ऐप में प्रिंट आदेश खोलता है।',
 'Ctrl+F|Ctrl+F|Finds text on a page or in a document.|पेज या दस्तावेज़ में टेक्स्ट खोजता है।',
 'Ctrl+A|Ctrl+A|Selects all content in many editing contexts.|कई संपादन जगहों में पूरी सामग्री चुनता है।',
 'Ctrl key|Ctrl कुंजी|Is held with another key to invoke a shortcut.|शॉर्टकट चलाने के लिए दूसरी कुंजी के साथ दबती है।',
 'Shortcut|शॉर्टकट|Runs a common command without opening a menu.|मेन्यू खोले बिना सामान्य आदेश चलाता है।']);
 add(17,'How to Search Better','बेहतर खोज कैसे करें','Use specific keywords and refine results to find useful information.','विशिष्ट शब्दों से खोजें और परिणाम सुधारकर उपयोगी जानकारी पाएँ।','search',[
 'Keyword|मुख्य शब्द|Names the important idea in a search.|खोज के मुख्य विचार का नाम बताता है।',
 'Specific query|विशिष्ट खोज|Adds details that narrow the result topic.|विवरण जोड़कर परिणाम का विषय सीमित करती है।',
 'Search result|खोज परिणाम|Links to a page returned for a query.|खोज के जवाब में मिला पेज लिंक होता है।',
 'Search refinement|खोज सुधार|Changes words after viewing unhelpful results.|बेकार परिणाम देखकर खोज के शब्द बदलता है।',
 'Source|स्रोत|Shows where information on a result page comes from.|दिखाता है कि परिणाम की जानकारी कहाँ से आई।',
 'Publication date|प्रकाशन तिथि|Helps judge whether time-sensitive information is current.|समय पर निर्भर जानकारी नई है या नहीं, यह जाँचने में मदद करती है।',
 'Reliable source|विश्वसनीय स्रोत|Gives evidence and a clear responsible publisher.|प्रमाण और स्पष्ट जिम्मेदार प्रकाशक देता है।',
 'Search phrase|खोज वाक्यांश|Combines several useful words in one search.|एक खोज में कई उपयोगी शब्द जोड़ता है।',
 'Compare sources|स्रोत मिलान|Checks an important claim against another trustworthy page.|महत्वपूर्ण दावे को दूसरे विश्वसनीय पेज से जाँचता है।',
 'Solar system query|सौरमंडल खोज|Works better with a focused question than a vague single word.|अस्पष्ट एक शब्द की जगह केंद्रित सवाल से बेहतर होती है।']);
 add(18,'Smart Search vs Poor Search','अच्छी और कमजोर खोज','Rewrite vague searches into clear questions with useful details.','अस्पष्ट खोज को उपयोगी विवरण वाले स्पष्ट सवाल में बदलें।','search',[
 'Vague query|अस्पष्ट खोज|Uses too little detail to show the information needed.|ज़रूरी जानकारी बताने के लिए बहुत कम विवरण देती है।',
 'Clear query|स्पष्ट खोज|States the topic and the answer needed.|विषय और चाहिए उत्तर साफ बताती है।',
 'Place detail|स्थान विवरण|Narrows a search to a named location.|खोज को किसी बताए स्थान तक सीमित करता है।',
 'Time detail|समय विवरण|Helps when the answer changes by year or date.|उत्तर वर्ष या तिथि से बदलता हो तो मदद करता है।',
 'Comparison word|तुलना शब्द|Asks how two ideas differ or resemble each other.|पूछता है कि दो विचार कैसे अलग या समान हैं।',
 'Question words|प्रश्न शब्द|Use what, how or why to state the need.|क्या, कैसे या क्यों से ज़रूरत स्पष्ट करते हैं।',
 'Unneeded word|अनावश्यक शब्द|Can be removed when it does not help the search.|खोज में मदद न करे तो हटाया जा सकता है।',
 'Result check|परिणाम जाँच|Shows whether the rewritten query found relevant pages.|दिखाती है कि बदली खोज से संबंधित पेज मिले या नहीं।',
 'Source check|स्रोत जाँच|Tests who published a page before trusting it.|पेज पर भरोसा करने से पहले प्रकाशक जाँचती है।',
 'Rewritten query|सुधारी खोज|Keeps the main topic and adds a useful constraint.|मुख्य विषय रखकर उपयोगी शर्त जोड़ती है।']);
 add(19,'Download vs Upload','डाउनलोड और अपलोड','Tell whether a file moves to your device or to an online service.','पहचानें कि फ़ाइल आपके उपकरण पर आती है या ऑनलाइन सेवा में जाती है।','browser',[
 'Download|डाउनलोड|Moves a file from an online source to your device.|फ़ाइल ऑनलाइन स्रोत से आपके उपकरण पर लाता है।',
 'Upload|अपलोड|Sends a file from your device to an online service.|फ़ाइल उपकरण से ऑनलाइन सेवा पर भेजता है।',
 'Device|उपकरण|Can receive a downloaded file or provide one for upload.|डाउनलोड फ़ाइल ले या अपलोड के लिए फ़ाइल दे सकता है।',
 'Website|वेबसाइट|Can provide a download or accept an uploaded file.|डाउनलोड दे सकती है या अपलोड की फ़ाइल ले सकती है।',
 'Attachment|अटैचमेंट|Is a file added to a message for sending.|भेजने के लिए संदेश में जोड़ी गई फ़ाइल है।',
 'Downloads folder|डाउनलोड फ़ोल्डर|Is a common place to find received files.|प्राप्त फ़ाइलें ढूँढ़ने की सामान्य जगह है।',
 'File picker|फ़ाइल चुनने वाला भाग|Lets you choose a local file for upload.|अपलोड के लिए उपकरण की फ़ाइल चुनने देता है।',
 'Progress indicator|प्रगति संकेत|Shows that a transfer is still underway.|दिखाता है कि फ़ाइल का स्थानांतरण अभी चल रहा है।',
 'Source|स्रोत|Is where a transferred file begins.|वह जगह है जहाँ से भेजी जा रही फ़ाइल शुरू होती है।',
 'Destination|गंतव्य|Is where a transferred file ends up.|वह जगह है जहाँ फ़ाइल पहुँचती है।']);
 add(20,'Email Basics','ईमेल की बुनियाद','Compose a polite message with recipient, subject and attachment.','प्राप्तकर्ता, विषय और अटैचमेंट के साथ विनम्र संदेश लिखें।','mail',[
 'Recipient|प्राप्तकर्ता|Is the address to which the message is sent.|वह पता है जहाँ संदेश भेजा जाता है।',
 'Subject|विषय पंक्ति|Briefly tells the purpose of the email.|ईमेल का उद्देश्य संक्षेप में बताती है।',
 'Message body|संदेश भाग|Contains the main written message.|मुख्य लिखित संदेश रखता है।',
 'CC|सीसी|Sends a visible copy to another recipient.|दूसरे प्राप्तकर्ता को दिखाई देने वाली प्रति भेजता है।',
 'Attachment|अटैचमेंट|Adds a file to be sent with the email.|ईमेल के साथ भेजने के लिए फ़ाइल जोड़ता है।',
 'Greeting|अभिवादन|Starts a polite message to its reader.|पाठक के लिए विनम्र संदेश शुरू करता है।',
 'Closing|समापन|Ends the email politely, often with a name.|अक्सर नाम के साथ ईमेल विनम्रता से समाप्त करता है।',
 'Draft|मसौदा|Is a message saved before it is sent.|भेजने से पहले सहेजा गया संदेश है।',
 'Send|भेजें|Dispatches the completed email to its recipients.|पूरा ईमेल प्राप्तकर्ताओं को भेजता है।',
 'Reply|उत्तर दें|Responds to an email already received.|पहले मिले ईमेल का जवाब देता है।']);
 add(21,'What is Cloud Storage?','क्लाउड स्टोरेज क्या है?','Compare files kept on a device with files stored online.','उपकरण पर रखी फ़ाइल और ऑनलाइन रखी फ़ाइल की तुलना करें।','cloud',[
 'Local storage|स्थानीय स्टोरेज|Keeps a file on a particular device.|फ़ाइल किसी खास उपकरण पर रखता है।',
 'Cloud storage|क्लाउड स्टोरेज|Keeps a file with an online storage service.|फ़ाइल ऑनलाइन स्टोरेज सेवा पर रखता है।',
 'Sync|सिंक|Updates changes between connected copies when available.|कनेक्टेड प्रतियों में उपलब्ध होने पर बदलाव मिलाता है।',
 'Internet connection|इंटरनेट कनेक्शन|Is usually needed to reach cloud files online.|ऑनलाइन क्लाउड फ़ाइलें पाने के लिए सामान्यतः चाहिए।',
 'Account|खाता|Controls access to a personal online file space.|व्यक्तिगत ऑनलाइन फ़ाइल जगह तक पहुँच नियंत्रित करता है।',
 'Shared link|साझा लिंक|Can give others access to a selected cloud file.|दूसरों को चुनी क्लाउड फ़ाइल की पहुँच दे सकता है।',
 'Upload|अपलोड|Sends a local file to a cloud service.|स्थानीय फ़ाइल क्लाउड सेवा में भेजता है।',
 'Download|डाउनलोड|Brings an online file to the device.|ऑनलाइन फ़ाइल उपकरण पर लाता है।',
 'Backup copy|बैकअप प्रति|Provides another copy if the original is unavailable.|मूल न मिले तो दूसरी प्रति देती है।',
 'Access permission|पहुँच अनुमति|Determines who can see or edit a shared file.|तय करती है कि साझा फ़ाइल कौन देख या बदल सकता है।']);
 add(22,'MS Word Basics','एमएस वर्ड की बुनियाद','Create, edit, format and save a simple document.','सरल दस्तावेज़ बनाएँ, बदलें, सजाएँ और सहेजें।','word',[
 'Document|दस्तावेज़|Holds the text and other content made in Word.|वर्ड में लिखा टेक्स्ट और अन्य सामग्री रखता है।',
 'Blank document|खाली दस्तावेज़|Starts a new page without existing content.|पहले से सामग्री बिना नया पेज शुरू करता है।',
 'Typing cursor|टाइपिंग कर्सर|Shows where the next typed character will appear.|अगला टाइप किया अक्षर कहाँ आएगा, दिखाता है।',
 'Edit|संपादन|Changes words already written in a document.|दस्तावेज़ में पहले लिखे शब्द बदलता है।',
 'Save|सेव|Stores a document so it can be opened later.|दस्तावेज़ सहेजता है ताकि बाद में खोला जा सके।',
 'Bold|बोल्ड|Makes selected text heavier for emphasis.|चुने टेक्स्ट को उभारने के लिए गहरा करता है।',
 'Font size|फ़ॉन्ट आकार|Controls how large text appears.|टेक्स्ट कितना बड़ा दिखेगा, यह तय करता है।',
 'Paragraph|अनुच्छेद|Groups sentences as one section of text.|वाक्यों को टेक्स्ट के एक भाग में रखता है।',
 'Print preview|प्रिंट पूर्वावलोकन|Shows how pages may look on paper.|कागज़ पर पेज कैसे दिखेंगे, यह दिखाता है।',
 'School notice|विद्यालय सूचना|Is a short document with a clear message and date.|स्पष्ट संदेश और तिथि वाला छोटा दस्तावेज़ है।']);
 add(23,'Make a Better Document','बेहतर दस्तावेज़ बनाएँ','Use structure, spacing and visuals to make a page easy to read.','संरचना, दूरी और चित्र से पेज पढ़ने में आसान बनाएँ।','word',[
 'Heading|शीर्षक|Names a section so readers can scan the page.|भाग का नाम बताता है ताकि पाठक पेज जल्दी समझे।',
 'Alignment|संरेखण|Places text consistently along a page edge or centre.|टेक्स्ट को पेज के किनारे या बीच में व्यवस्थित रखता है।',
 'Bulleted list|बिंदुवार सूची|Groups short related points clearly.|छोटे संबंधित बिंदु साफ़ समूह में रखती है।',
 'Image|चित्र|Illustrates an idea that text alone may not show quickly.|विचार दिखाता है जिसे अकेला टेक्स्ट जल्दी न समझाए।',
 'Table|तालिका|Arranges information in rows and columns.|जानकारी पंक्तियों और स्तंभों में रखती है।',
 'Consistent font|एकसमान फ़ॉन्ट|Keeps the document style steady across sections.|दस्तावेज़ के भागों की शैली समान रखता है।',
 'White space|खाली जगह|Separates content so the page is easier to read.|सामग्री अलग करती है ताकि पेज आसानी से पढ़ें।',
 'Caption|चित्र विवरण|Explains what a nearby picture or table shows.|पास के चित्र या तालिका का अर्थ बताता है।',
 'Page title|पेज शीर्षक|Tells the main subject of the whole document.|पूरे दस्तावेज़ का मुख्य विषय बताता है।',
 'Proofread|दोबारा जाँचें|Finds spelling and clarity problems before sharing.|साझा करने से पहले वर्तनी और स्पष्टता की गलती पकड़ता है।']);
 add(24,'MS Excel Basics','एमएस एक्सेल की बुनियाद','Enter data in worksheets, cells, rows and columns.','वर्कशीट, सेल, पंक्ति और स्तंभ में डेटा दर्ज करें।','excel',[
 'Workbook|वर्कबुक|Contains one or more Excel worksheets.|एक या अधिक एक्सेल वर्कशीट रखती है।',
 'Worksheet|वर्कशीट|Provides a grid for entering and organizing data.|डेटा लिखने और सजाने के लिए ग्रिड देती है।',
 'Row|पंक्ति|Runs horizontally across the worksheet.|वर्कशीट में बाएँ से दाएँ चलती है।',
 'Column|स्तंभ|Runs vertically down the worksheet.|वर्कशीट में ऊपर से नीचे चलता है।',
 'Cell|सेल|Is the box where a row and column meet.|पंक्ति और स्तंभ के मिलने वाला खाना है।',
 'Cell address|सेल पता|Names a cell using its column and row, such as B3.|B3 जैसे स्तंभ और पंक्ति से सेल पहचानता है।',
 'Header row|शीर्ष पंक्ति|Names the meaning of data columns.|डेटा स्तंभों का अर्थ बताती है।',
 'Data entry|डेटा प्रविष्टि|Places a value or label into a cell.|सेल में मान या नाम लिखती है।',
 'Sheet tab|शीट टैब|Lets users switch between worksheets in a workbook.|वर्कबुक की वर्कशीटों के बीच बदलने देता है।',
 'Marks table|अंक तालिका|Organizes learner names and scores in cells.|विद्यार्थियों के नाम और अंक सेल में रखती है।']);
 add(25,'Excel Formulas','एक्सेल सूत्र','Use cell references and formulas to calculate totals and averages.','सेल संदर्भ और सूत्र से कुल और औसत निकालें।','formula',[
 'Equals sign|बराबर चिह्न|Begins an Excel formula entered in a cell.|सेल में लिखे एक्सेल सूत्र की शुरुआत करता है।',
 'Cell reference|सेल संदर्भ|Points a formula to another cell such as A2.|सूत्र को A2 जैसे दूसरे सेल की ओर ले जाता है।',
 'Addition operator|जोड़ चिह्न|Adds values in a formula with the plus sign.|सूत्र में + चिह्न से मान जोड़ता है।',
 'Subtraction operator|घटाव चिह्न|Subtracts one value from another with a minus sign.|− चिह्न से एक मान दूसरे से घटाता है।',
 'SUM|SUM|Adds the numbers in a selected range.|चुने सेल समूह के अंक जोड़ता है।',
 'AVERAGE|AVERAGE|Returns the arithmetic mean of selected numbers.|चुने अंकों का अंकगणितीय औसत देता है।',
 'MAX|MAX|Returns the largest number in a range.|सेल समूह की सबसे बड़ी संख्या देता है।',
 'Range|सेल समूह|Names several cells such as A1:A5.|A1:A5 जैसे कई सेल बताता है।',
 'Formula result|सूत्र परिणाम|Shows the value calculated from a formula.|सूत्र से निकला मान दिखाता है।',
 'Recalculation|पुनर्गणना|Updates a formula result after referenced data changes.|संदर्भित डेटा बदलने पर सूत्र परिणाम बदलती है।']);
 add(26,'Charts and Data','चार्ट और डेटा','Turn a table of values into a chart that tells a clear story.','मानों की तालिका को स्पष्ट बात बताने वाले चार्ट में बदलें।','chart',[
 'Data table|डेटा तालिका|Holds the values a chart can show.|वे मान रखती है जिन्हें चार्ट दिखा सकता है।',
 'Column chart|स्तंभ चार्ट|Uses vertical bars to compare categories.|श्रेणियों की तुलना के लिए खड़े स्तंभ उपयोग करता है।',
 'Chart title|चार्ट शीर्षक|States what the chart is about.|चार्ट किस विषय पर है, यह बताता है।',
 'Category label|श्रेणी नाम|Names each item being compared.|तुलना में हर वस्तु का नाम बताता है।',
 'Value axis|मान अक्ष|Shows the number scale for a chart.|चार्ट में संख्याओं का पैमाना दिखाता है।',
 'Series|डेटा श्रृंखला|Groups related values displayed together.|साथ दिखाई देने वाले संबंधित मानों को रखती है।',
 'Legend|संकेत सूची|Explains which colour represents each series.|बताती है कि कौन-सा रंग किस श्रृंखला का है।',
 'Comparison|तुलना|Shows which category has a larger or smaller value.|दिखाती है कि किस श्रेणी का मान अधिक या कम है।',
 'Source data|स्रोत डेटा|Is the original table used to build a chart.|वह मूल तालिका है जिससे चार्ट बनाया गया।',
 'Misleading scale|भ्रामक पैमाना|Can exaggerate a small difference between values.|मानों का छोटा अंतर बहुत बड़ा दिखा सकता है।']);
 add(27,'PowerPoint Basics','पावरपॉइंट की बुनियाद','Create slides with titles, text, images and simple layouts.','शीर्षक, टेक्स्ट, चित्र और सरल लेआउट वाले स्लाइड बनाएँ।','slides',[
 'Presentation|प्रस्तुति|Collects slides for explaining a topic to an audience.|दर्शकों को विषय समझाने के लिए स्लाइड रखती है।',
 'Slide|स्लाइड|Is one page in a presentation.|प्रस्तुति का एक पेज है।',
 'Title|शीर्षक|States the main idea of a slide.|स्लाइड का मुख्य विचार बताता है।',
 'Text box|टेक्स्ट बॉक्स|Holds editable words on a slide.|स्लाइड पर बदले जा सकने वाले शब्द रखता है।',
 'Image|चित्र|Adds a visual example to a slide.|स्लाइड में दृश्य उदाहरण जोड़ता है।',
 'Layout|लेआउट|Places title and content areas on a slide.|स्लाइड पर शीर्षक और सामग्री की जगह तय करता है।',
 'Theme|थीम|Applies a coordinated design across slides.|स्लाइडों में एक जैसी डिज़ाइन लगाती है।',
 'Slide order|स्लाइड क्रम|Sets the sequence in which ideas are presented.|विचार किस क्रम में दिखेंगे, तय करता है।',
 'Slide show|स्लाइड शो|Displays slides for an audience in presentation view.|दर्शकों को स्लाइड प्रस्तुति रूप में दिखाता है।',
 'Save presentation|प्रस्तुति सहेजें|Keeps the slide deck for later editing or showing.|बाद में बदलने या दिखाने के लिए स्लाइड सेट रखता है।']);
 add(28,'Present Like a Pro','अच्छी प्रस्तुति दें','Make slides readable and explain them confidently.','स्लाइड पढ़ने योग्य बनाएँ और भरोसे से समझाएँ।','slides',[
 'Readable font|पढ़ने योग्य फ़ॉन्ट|Lets people read text from a distance.|दूर से भी लोगों को टेक्स्ट पढ़ने देता है।',
 'Limited text|कम टेक्स्ट|Keeps a slide focused on its main message.|स्लाइड को मुख्य संदेश पर केंद्रित रखता है।',
 'Useful image|उपयोगी चित्र|Supports the idea being spoken about.|बोले जा रहे विचार को समझाने में मदद करता है।',
 'Alignment|संरेखण|Lines up slide elements neatly.|स्लाइड के भाग साफ़ कतार में रखता है।',
 'Contrast|स्पष्ट रंग अंतर|Helps text stand out against its background.|टेक्स्ट को पृष्ठभूमि से साफ़ अलग दिखाता है।',
 'One key idea|एक मुख्य विचार|Makes a slide easier for an audience to follow.|दर्शकों के लिए स्लाइड समझना आसान करता है।',
 'Speaking pace|बोलने की गति|Should give listeners time to understand each point.|श्रोताओं को हर बात समझने का समय देनी चाहिए।',
 'Eye contact|नज़र मिलाना|Helps a speaker connect with the audience.|वक्ता को दर्शकों से जुड़ने में मदद करता है।',
 'Practice run|पूर्व अभ्यास|Helps check timing and unclear explanations.|समय और अस्पष्ट व्याख्या जाँचने में मदद करता है।',
 'Audience question|दर्शक प्रश्न|Can show which part needs more explanation.|बताता है कि किस भाग को और समझाना चाहिए।']);
 add(29,'What is Coding?','कोडिंग क्या है?','Understand code as ordered instructions a computer can follow.','कोड को ऐसे क्रमबद्ध निर्देश समझें जिन पर कंप्यूटर काम करे।','code',[
 'Code|कोड|Is written instructions for a computer to run.|कंप्यूटर के चलाने के लिए लिखे निर्देश हैं।',
 'Instruction|निर्देश|Tells a program what action to perform.|प्रोग्राम को बताता है कि कौन-सा काम करे।',
 'Sequence|क्रम|Puts instructions in the order they should run.|निर्देशों को चलने के सही क्रम में रखता है।',
 'Program|प्रोग्राम|Is the complete coded set of instructions for one or more tasks.|एक या अधिक काम के लिए पूरे लिखे निर्देशों का समूह है।',
 'Input|इनपुट|Is information supplied to a program.|प्रोग्राम को दी गई जानकारी है।',
 'Output|आउटपुट|Is a result produced by a program.|प्रोग्राम से निकला परिणाम है।',
 'Condition|शर्त|Chooses an action when a test is true or false.|जाँच सही या गलत होने पर काम चुनती है।',
 'Loop|लूप|Repeats instructions while its rule allows.|नियम अनुमति दे तब तक निर्देश दोहराता है।',
 'Bug|त्रुटि|Is an error that makes a program behave unexpectedly.|ऐसी गलती है जिससे प्रोग्राम अलग तरह से चलता है।',
 'Debugging|त्रुटि सुधार|Finds and corrects a problem in code.|कोड में समस्या ढूँढ़कर सुधारता है।']);
 add(30,'Algorithms Around Us','हमारे आसपास एल्गोरिदम','Plan a task as clear, ordered steps before coding it.','किसी काम को कोड से पहले स्पष्ट क्रमबद्ध चरणों में बाँटें।','algorithm',[
 'Algorithm|एल्गोरिदम|Is an ordered method for solving a problem.|समस्या हल करने की क्रमबद्ध विधि है।',
 'Start|शुरुआत|Marks the point where the steps begin.|वह बिंदु है जहाँ चरण शुरू होते हैं।',
 'Step|चरण|Describes one action in the process.|प्रक्रिया का एक काम बताता है।',
 'Order|क्रम|Keeps steps in a sequence that makes sense.|चरणों को सही अर्थ वाले अनुक्रम में रखता है।',
 'Decision|निर्णय|Chooses a next step based on a condition.|शर्त के आधार पर अगला चरण चुनता है।',
 'Repeat|दोहराव|Runs a step again when needed.|ज़रूरत होने पर चरण फिर चलाता है।',
 'Input|इनपुट|Provides the information needed to start a process.|प्रक्रिया शुरू करने की ज़रूरी जानकारी देता है।',
 'Result|परिणाम|Is what the process produces at the end.|प्रक्रिया के अंत में मिलने वाली चीज़ है।',
 'Test|जाँच|Checks whether steps reach the intended result.|जाँचती है कि चरण इच्छित परिणाम देते हैं या नहीं।',
 'Flowchart|प्रवाह चित्र|Draws the path through steps and decisions.|चरण और निर्णयों का रास्ता चित्र में दिखाता है।']);
 add(31,'What is Artificial Intelligence?','कृत्रिम बुद्धिमत्ता क्या है?','Recognize everyday AI uses and the need for human judgment.','रोज़मर्रा के AI उपयोग और मानवीय जाँच की ज़रूरत पहचानें।','ai',[
 'Artificial intelligence|कृत्रिम बुद्धिमत्ता|Names computer systems built for tasks that involve learning or reasoning.|सीखने या तर्क वाले कामों के लिए बने कंप्यूटर सिस्टम कहलाते हैं।',
 'Pattern recognition|पैटर्न पहचान|Finds regular features in data such as images or sound.|चित्र या ध्वनि जैसे डेटा में नियमित विशेषताएँ ढूँढ़ती है।',
 'Recommendation|सुझाव|Suggests items based on observed signals and system design.|संकेतों और सिस्टम की रचना के आधार पर चीज़ें सुझाता है।',
 'Voice recognition|आवाज़ पहचान|Turns spoken input into text or commands.|बोली हुई बात को टेक्स्ट या आदेश में बदलती है।',
 'Translation tool|अनुवाद साधन|Produces text in another language, needing human checking.|दूसरी भाषा में टेक्स्ट देता है, जिसे मनुष्य जाँचे।',
 'Training data|प्रशिक्षण डेटा|Provides examples from which a model learns patterns.|मॉडल को पैटर्न सीखने के उदाहरण देता है।',
 'Model|मॉडल|Uses learned patterns to produce predictions or outputs.|सीखे पैटर्न से अनुमान या परिणाम देता है।',
 'Human review|मानवीय जाँच|Checks whether an AI output is accurate and suitable.|जाँचती है कि AI परिणाम सही और उपयुक्त है या नहीं।',
 'Bias|पक्षपात|Can make results unfair when data or design is unbalanced.|डेटा या रचना असंतुलित हो तो परिणाम अनुचित कर सकता है।',
 'Generative AI|जनरेटिव AI|Creates new text, images or other outputs from a prompt.|प्रॉम्प्ट से नया टेक्स्ट, चित्र या अन्य परिणाम बनाता है।']);
 add(32,'AI vs Normal Software','AI और सामान्य सॉफ़्टवेयर','Compare fixed rules with systems that learn patterns from data.','तय नियमों की तुलना डेटा से पैटर्न सीखने वाले सिस्टम से करें।','ai',[
 'Fixed rule|तय नियम|Directs software to follow an explicitly written condition.|सॉफ़्टवेयर को साफ़ लिखी शर्त पर चलाता है।',
 'Rule-based software|नियम आधारित सॉफ़्टवेयर|Follows programmed rules for its decisions.|निर्णय के लिए लिखे प्रोग्राम नियम मानता है।',
 'Learned pattern|सीखा पैटर्न|Is regularity a model identifies from examples.|उदाहरणों से मॉडल द्वारा पहचानी नियमितता है।',
 'AI model|AI मॉडल|Uses trained patterns to predict or generate output.|प्रशिक्षित पैटर्न से अनुमान या परिणाम बनाता है।',
 'Calculator|कैलकुलेटर|Uses defined arithmetic rules for a requested calculation.|माँगी गणना के लिए तय अंकगणितीय नियम उपयोग करता है।',
 'Image classifier|चित्र वर्गीकार|Predicts a label for an image using learned examples.|सीखे उदाहरणों से चित्र का नाम अनुमान करता है।',
 'Input|इनपुट|Is the information given to either kind of system.|दोनों प्रकार के सिस्टम को दी जानकारी है।',
 'Output|आउटपुट|Is the result produced by either kind of system.|दोनों प्रकार के सिस्टम से निकला परिणाम है।',
 'Uncertainty|अनिश्चितता|Means a model prediction may be wrong.|मॉडल का अनुमान गलत भी हो सकता है।',
 'Human check|मानवीय जाँच|Confirms results before an important use.|महत्वपूर्ण उपयोग से पहले परिणाम सही होने की पुष्टि करती है।']);
 add(33,'How to Ask AI Better Questions','AI से बेहतर सवाल कैसे पूछें','Write prompts with task, context, constraints and desired format.','कार्य, संदर्भ, सीमा और वांछित रूप वाला प्रॉम्प्ट लिखें।','prompt',[
 'Prompt|प्रॉम्प्ट|Is the instruction or question given to an AI tool.|AI साधन को दिया निर्देश या सवाल है।',
 'Clear task|स्पष्ट काम|States exactly what the tool should do.|ठीक बताता है कि साधन को क्या करना है।',
 'Context|संदर्भ|Supplies background needed for a useful answer.|उपयोगी जवाब के लिए पृष्ठभूमि देता है।',
 'Audience|पाठक समूह|Tells whom the answer should suit.|बताता है कि जवाब किसके लिए है।',
 'Constraint|सीमा|Sets a rule such as length or reading level.|लंबाई या पढ़ने के स्तर जैसा नियम रखती है।',
 'Output format|उत्तर का रूप|Requests a table, list or another structure.|तालिका, सूची या दूसरा ढाँचा माँगता है।',
 'Example|उदाहरण|Shows a model what kind of response is desired.|मॉडल को अपेक्षित जवाब का नमूना दिखाता है।',
 'Follow-up|अगला सवाल|Refines an answer with more specific guidance.|और स्पष्ट निर्देश से जवाब सुधारता है।',
 'Source request|स्रोत माँग|Asks where factual claims came from for checking.|तथ्य कहाँ से आए, यह जाँचने के लिए पूछती है।',
 'Review|समीक्षा|Checks the generated answer before using it.|बनाया जवाब उपयोग से पहले जाँचती है।']);
 add(34,'Use AI for Learning','सीखने में AI का उपयोग','Ask for explanations and quizzes while checking and thinking yourself.','व्याख्या और अभ्यास प्रश्न लें, पर स्वयं सोचें और जाँचें।','ai',[
 'Explanation|व्याख्या|Breaks an idea into understandable steps.|विचार को समझ आने वाले चरणों में बाँटती है।',
 'Example|उदाहरण|Shows how an idea works in a concrete case.|ठोस स्थिति में विचार कैसे काम करता है, दिखाता है।',
 'Practice quiz|अभ्यास प्रश्नोत्तरी|Presents questions that test recall and understanding.|याद और समझ जाँचने वाले प्रश्न देती है।',
 'Hint|संकेत|Gives guidance without immediately giving the whole answer.|पूरा उत्तर तुरंत दिए बिना दिशा बताता है।',
 'Brainstorming|विचार मंथन|Offers possible ideas for a project or question.|परियोजना या प्रश्न के लिए संभावित विचार देता है।',
 'Independent thinking|स्वतंत्र सोच|Requires the learner to reason before accepting an answer.|जवाब मानने से पहले विद्यार्थी का अपना तर्क माँगती है।',
 'Textbook check|पाठ्यपुस्तक जाँच|Compares an AI claim with trusted course material.|AI के दावे को विश्वसनीय पाठ से मिलाती है।',
 'Correction|सुधार|Fixes an error found in a generated response.|बनाए जवाब में मिली गलती ठीक करता है।',
 'Question practice|प्रश्न अभ्यास|Gives more chances to apply a learned concept.|सीखी बात लागू करने के और अवसर देता है।',
 'Privacy|गोपनीयता|Means avoiding unnecessary personal details in prompts.|प्रॉम्प्ट में अनावश्यक निजी जानकारी न देने का अर्थ है।']);
 add(35,'Can AI Be Wrong?','क्या AI गलत हो सकता है?','Check AI claims against trusted evidence before relying on them.','AI के दावों पर भरोसा करने से पहले विश्वसनीय प्रमाण से जाँचें।','ai',[
 'Incorrect answer|गलत जवाब|Is an AI response that does not match the facts.|वह AI जवाब है जो तथ्यों से नहीं मिलता।',
 'Fabricated citation|गढ़ा स्रोत|Names a source that may not actually support the claim.|ऐसे स्रोत का नाम देता है जो दावे को शायद न समर्थन दे।',
 'Trusted source|विश्वसनीय स्रोत|Provides accountable evidence for checking a claim.|दावा जाँचने के लिए जिम्मेदार प्रमाण देता है।',
 'Cross-check|मिलान जाँच|Compares a claim with another reliable source.|दावे को दूसरे विश्वसनीय स्रोत से मिलाती है।',
 'Uncertainty|अनिश्चितता|Shows an answer may need more investigation.|दिखाती है कि जवाब की और जाँच चाहिए हो सकती है।',
 'Outdated fact|पुराना तथ्य|May no longer be correct after a later change.|बाद के बदलाव से अब सही न भी हो सकता है।',
 'Primary source|मूल स्रोत|Comes from the organization or document behind a claim.|दावे के पीछे के संगठन या दस्तावेज़ से आता है।',
 'Human judgment|मानवीय निर्णय|Decides whether an answer is suitable after checking.|जाँच के बाद तय करता है कि जवाब उचित है या नहीं।',
 'Evidence|प्रमाण|Supports a factual claim with something verifiable.|जाँचने योग्य चीज़ से तथ्य के दावे का समर्थन करता है।',
 'Correction|सुधार|Replaces a mistaken claim with a checked fact.|गलत दावे को जाँचे तथ्य से बदलता है।']);
 add(36,'AI Image Generation','AI से चित्र बनाना','Use detailed text prompts to create and then inspect images.','विस्तृत टेक्स्ट प्रॉम्प्ट से चित्र बनाएँ और फिर जाँचें।','prompt',[
 'Image prompt|चित्र प्रॉम्प्ट|Describes the picture a generator should create.|बताता है कि जनरेटर कैसा चित्र बनाए।',
 'Subject|मुख्य विषय|Names the main person, object or scene in an image.|चित्र के मुख्य व्यक्ति, वस्तु या दृश्य का नाम है।',
 'Setting|परिवेश|Describes where the pictured scene takes place.|बताता है कि चित्र का दृश्य कहाँ है।',
 'Style|शैली|Suggests a look such as diagram or photograph.|आरेख या फ़ोटो जैसा रूप सुझाती है।',
 'Colour|रंग|Can be specified when a visual needs a palette.|दृश्य में खास रंग चाहिए तो बताए जा सकते हैं।',
 'Composition|रचना|Describes where important parts appear in the picture.|चित्र में ज़रूरी भाग कहाँ दिखें, बताती है।',
 'Revision|संशोधन|Changes a prompt after inspecting the first result.|पहला परिणाम देखकर प्रॉम्प्ट बदलता है।',
 'Visual check|चित्र जाँच|Looks for missing labels or misleading details.|छूटे नाम या भ्रामक विवरण खोजती है।',
 'Educational poster|शैक्षिक पोस्टर|Combines a clear teaching idea with readable visuals.|स्पष्ट सीखने का विचार और पढ़ने योग्य दृश्य जोड़ता है।',
 'Source image|स्रोत चित्र|Should be used with permission when editing work made by others.|किसी दूसरे का चित्र बदलते समय अनुमति से उपयोग होना चाहिए।']);
 add(37,'Digital Footprint','डिजिटल निशान','Understand how online actions can leave lasting traces.','समझें कि ऑनलाइन काम लंबे समय तक निशान छोड़ सकते हैं।','footprint',[
 'Digital footprint|डिजिटल निशान|Is the trace left by online activity.|ऑनलाइन गतिविधि से छोड़ा गया निशान है।',
 'Public post|सार्वजनिक पोस्ट|Can be seen by people beyond your close friends.|नज़दीकी दोस्तों से बाहर के लोग भी देख सकते हैं।',
 'Comment|टिप्पणी|Can remain visible after an online discussion.|ऑनलाइन बातचीत के बाद भी दिखाई दे सकती है।',
 'Account|खाता|Connects online actions to a user identity.|ऑनलाइन काम को उपयोगकर्ता की पहचान से जोड़ता है।',
 'Privacy setting|गोपनीयता सेटिंग|Controls who may see some account information.|तय करती है कि खाते की कुछ जानकारी कौन देखे।',
 'Screenshot|स्क्रीनशॉट|Can preserve a copy of something shown on screen.|स्क्रीन पर दिखी चीज़ की प्रति रख सकता है।',
 'Personal detail|निजी जानकारी|Should be shared only when truly necessary.|वास्तव में ज़रूरत हो तभी साझा करनी चाहिए।',
 'Searchable profile|खोजी जा सकने वाली प्रोफ़ाइल|May reveal past public activity to others.|दूसरों को पुरानी सार्वजनिक गतिविधि दिखा सकती है।',
 'Delete action|हटाने की क्रिया|May remove a post but cannot guarantee all copies vanish.|पोस्ट हटा सकती है, पर हर प्रति मिटने की गारंटी नहीं।',
 'Pause before posting|पोस्ट से पहले रुकें|Helps consider who might see the content later.|सोचने में मदद करता है कि बाद में सामग्री कौन देखेगा।']);
 add(38,'Fake News and Deepfakes','फ़र्ज़ी खबर और डीपफेक','Check claims and media before believing or forwarding them.','दावे और मीडिया पर भरोसा या साझा करने से पहले जाँचें।','misinformation',[
 'Claim|दावा|Is a statement that needs evidence before acceptance.|मानने से पहले प्रमाण माँगने वाला कथन है।',
 'Original source|मूल स्रोत|Shows where a picture, video or statement began.|दिखाता है कि चित्र, वीडियो या कथन कहाँ शुरू हुआ।',
 'Publication date|प्रकाशन तिथि|Helps check whether an old story is being recirculated.|पुरानी खबर फिर फैलाई जा रही है या नहीं, यह जाँचती है।',
 'Independent report|स्वतंत्र रिपोर्ट|Offers another source to compare with a claim.|दावे से मिलाने के लिए दूसरा स्रोत देती है।',
 'Deepfake|डीपफेक|Is manipulated media that can make a person appear to say or do something.|बदला मीडिया है जो व्यक्ति को कुछ कहते या करते दिखा सकता है।',
 'Reverse image search|उलटी चित्र खोज|Can help find earlier uses of an image.|चित्र के पुराने उपयोग ढूँढ़ने में मदद कर सकती है।',
 'Context|संदर्भ|Explains when and where a media clip was made.|बताता है कि मीडिया क्लिप कब और कहाँ बनी।',
 'Evidence|प्रमाण|Supports a claim beyond an exciting headline.|रोचक शीर्षक से आगे दावे का समर्थन करता है।',
 'Suspicious headline|संदिग्ध शीर्षक|May use extreme language to attract clicks.|क्लिक पाने के लिए बहुत तीखे शब्द उपयोग कर सकता है।',
 'Do not forward yet|अभी साझा न करें|Is a safe response while a doubtful claim is checked.|संदिग्ध दावे की जाँच तक सुरक्षित कदम है।']);
 add(39,'Cyberbullying','साइबरबुलिंग','Recognize harmful online behaviour and seek safe support.','हानिकारक ऑनलाइन व्यवहार पहचानें और सुरक्षित मदद लें।','cyberbullying',[
 'Cyberbullying|साइबरबुलिंग|Is repeated harmful behaviour through digital communication.|डिजिटल बातचीत से बार-बार किया हानिकारक व्यवहार है।',
 'Hurtful message|आहत करने वाला संदेश|Can cause harm even when sent online.|ऑनलाइन भेजा जाए तब भी नुकसान कर सकता है।',
 'Block|ब्लॉक|Stops an account from contacting you on many services.|कई सेवाओं में खाते का आपसे संपर्क रोकता है।',
 'Report|रिपोर्ट|Alerts a platform or trusted adult to harmful behaviour.|हानिकारक व्यवहार की सूचना मंच या विश्वसनीय बड़े को देता है।',
 'Evidence screenshot|प्रमाण स्क्रीनशॉट|Records a harmful message before it disappears.|हानिकारक संदेश मिटने से पहले रिकॉर्ड करता है।',
 'Trusted adult|विश्वसनीय बड़ा|Can help a student respond safely to online harm.|ऑनलाइन नुकसान पर विद्यार्थी को सुरक्षित कदम में मदद कर सकता है।',
 'Privacy|गोपनीयता|Protects personal details while asking for help.|मदद माँगते समय निजी जानकारी सुरक्षित रखती है।',
 'Respectful reply|सम्मानजनक जवाब|Avoids adding more harm to a conversation.|बातचीत में और नुकसान जोड़ने से बचता है।',
 'Do not retaliate|बदला न लें|Means avoiding a harmful response to an aggressor.|आक्रामक व्यक्ति को हानिकारक जवाब न देने का अर्थ है।',
 'Support a peer|साथी की मदद|Includes listening and helping them reach a trusted adult.|सुनना और विश्वसनीय बड़े तक पहुँचाने में मदद करना शामिल है।']);
 add(40,'Passwords, OTP and Scams','पासवर्ड, OTP और धोखाधड़ी','Protect accounts and recognize messages that ask for secrets.','खाते बचाएँ और राज माँगने वाले संदेश पहचानें।','safety',[
 'Password|पासवर्ड|Is a secret used to protect account access.|खाते की पहुँच बचाने वाला रहस्य है।',
 'Unique password|अलग पासवर्ड|Is used for one account instead of reused everywhere.|हर जगह दोहराने के बजाय एक खाते के लिए उपयोग होता है।',
 'Password manager|पासवर्ड प्रबंधक|Can create and store strong passwords securely.|मज़बूत पासवर्ड बना और सुरक्षित रख सकता है।',
 'OTP|एक बार का कोड|Is a temporary sign-in code that should not be shared.|अस्थायी लॉगिन कोड है जिसे साझा नहीं करना चाहिए।',
 'Phishing|फ़िशिंग|Tries to trick someone into giving information or opening harmful links.|जानकारी लेने या हानिकारक लिंक खुलवाने की चाल है।',
 'Urgency trick|जल्दी का दबाव|Pushes a person to act before checking a message.|संदेश जाँचे बिना काम करने का दबाव डालता है।',
 'Official website|आधिकारिक वेबसाइट|Should be opened directly when a message seems suspicious.|संदिग्ध संदेश पर सीधे स्वयं खोलनी चाहिए।',
 'MFA|बहु-कारक सुरक्षा|Adds another sign-in factor beyond a password.|पासवर्ड के अलावा एक और लॉगिन जाँच जोड़ती है।',
 'Suspicious link|संदिग्ध लिंक|May lead to a fake page that asks for secrets.|राज माँगने वाले नकली पेज पर ले जा सकता है।',
 'Report scam|धोखाधड़ी रिपोर्ट|Alerts a trusted person or service about a deceptive message.|धोखे वाले संदेश की सूचना विश्वसनीय व्यक्ति या सेवा को देता है।']);
 add(41,'How Wi-Fi Works','वाई-फ़ाई कैसे काम करता है?','Follow the wireless path from device to router and internet.','उपकरण से राउटर और इंटरनेट तक का बेतार रास्ता समझें।','web',[
 'Wi-Fi|वाई-फ़ाई|Connects nearby devices to a local network using radio signals.|रेडियो संकेत से पास के उपकरण स्थानीय नेटवर्क से जोड़ता है।',
 'Router|राउटर|Directs traffic between connected devices and other networks.|जुड़े उपकरणों और दूसरे नेटवर्कों के बीच डेटा भेजता है।',
 'Wireless signal|बेतार संकेत|Carries data through the air over a local distance.|पास की दूरी में हवा से डेटा ले जाता है।',
 'Device|उपकरण|Can join a Wi-Fi network when allowed.|अनुमति मिलने पर वाई-फ़ाई नेटवर्क से जुड़ सकता है।',
 'Network name|नेटवर्क नाम|Helps identify which Wi-Fi network to join.|किस वाई-फ़ाई नेटवर्क से जुड़ना है, यह पहचानता है।',
 'Network password|नेटवर्क पासवर्ड|Protects access to a secured Wi-Fi network.|सुरक्षित वाई-फ़ाई नेटवर्क की पहुँच बचाता है।',
 'Internet access|इंटरनेट पहुँच|May come through a router with an upstream connection.|ऊपर की कड़ी वाले राउटर से मिल सकती है।',
 'Signal strength|संकेत शक्ति|Can change with distance and obstacles.|दूरी और बाधाओं से बदल सकती है।',
 'Local network|स्थानीय नेटवर्क|Connects devices in a nearby area.|पास के क्षेत्र में उपकरण जोड़ता है।',
 'Offline network|बिना इंटरनेट नेटवर्क|Can connect devices locally even without internet service.|इंटरनेट सेवा बिना भी उपकरण स्थानीय रूप से जोड़ सकता है।']);
 add(42,'How a Website Works','वेबसाइट कैसे काम करती है?','Trace a browser request to a server and back to the screen.','ब्राउज़र अनुरोध से सर्वर और वापस स्क्रीन तक का रास्ता देखें।','web',[
 'Browser|ब्राउज़र|Requests and displays a webpage for the user.|उपयोगकर्ता के लिए वेबपेज माँगता और दिखाता है।',
 'Web address|वेब पता|Names where a webpage can be reached.|बताता है कि वेबपेज कहाँ मिलेगा।',
 'Request|अनुरोध|Asks a server for a page or other resource.|सर्वर से पेज या अन्य सामग्री माँगता है।',
 'Internet|इंटरनेट|Carries data between connected networks.|जुड़े नेटवर्कों के बीच डेटा ले जाता है।',
 'Web server|वेब सर्वर|Responds with page files to a browser request.|ब्राउज़र अनुरोध पर पेज फ़ाइलें भेजता है।',
 'Response|जवाब|Brings requested page data back to the browser.|माँगा पेज डेटा ब्राउज़र तक वापस लाता है।',
 'HTML|HTML|Provides the structure and content of a webpage.|वेबपेज की संरचना और सामग्री देता है।',
 'CSS|CSS|Controls much of a webpage visual appearance.|वेबपेज का अधिकतर दृश्य रूप तय करता है।',
 'Image file|चित्र फ़ाइल|Can be another resource loaded for a webpage.|वेबपेज के लिए लोड की जाने वाली दूसरी सामग्री है।',
 'Rendered page|दिखा पेज|Is what the browser presents after processing files.|फ़ाइलों पर काम करके ब्राउज़र जो दिखाता है, वह है।']);
 add(43,'What is HTML?','HTML क्या है?','Use basic tags to structure a webpage with headings and lists.','शीर्षक और सूची के साथ वेबपेज बनाने के मूल टैग सीखें।','html',[
 'HTML|HTML|Is markup that structures content on a webpage.|वेबपेज की सामग्री व्यवस्थित करने वाली मार्कअप भाषा है।',
 'Element|एलिमेंट|Is a marked part of a webpage such as a paragraph.|वेबपेज का चिह्नित भाग है, जैसे अनुच्छेद।',
 'Opening tag|शुरू टैग|Marks where many HTML elements begin.|बताता है कि कई HTML एलिमेंट कहाँ शुरू होते हैं।',
 'Closing tag|बंद टैग|Marks where many HTML elements end.|बताता है कि कई HTML एलिमेंट कहाँ समाप्त होते हैं।',
 'Heading|शीर्षक|Gives a page or section a meaningful title.|पेज या भाग को अर्थपूर्ण नाम देता है।',
 'Paragraph|अनुच्छेद|Groups sentences as body text on a page.|वाक्यों को पेज के मुख्य टेक्स्ट में रखता है।',
 'List|सूची|Groups related items in an ordered or unordered form.|संबंधित वस्तुओं को क्रमवार या बिना क्रम में रखती है।',
 'Link|लिंक|Points readers to another web address.|पाठक को दूसरे वेब पते पर ले जाता है।',
 'Body|बॉडी|Contains the content shown to the webpage reader.|वेबपेज के पाठक को दिखने वाली सामग्री रखती है।',
 'Browser|ब्राउज़र|Interprets HTML to display a webpage.|HTML पढ़कर वेबपेज दिखाता है।']);
 add(44,'Make Your First Webpage','अपना पहला वेबपेज बनाएँ','Combine basic HTML parts into a small school or personal page.','मूल HTML भाग जोड़कर छोटा स्कूल या निजी पेज बनाएँ।','html',[
 'Page title|पेज शीर्षक|Tells visitors what the page is about.|आगंतुकों को पेज का विषय बताता है।',
 'Heading element|शीर्षक एलिमेंट|Marks the main visible heading of a page.|पेज का मुख्य दिखाई देने वाला शीर्षक चिह्नित करता है।',
 'Paragraph element|अनुच्छेद एलिमेंट|Holds sentences that explain the topic.|विषय समझाने वाले वाक्य रखता है।',
 'List item|सूची वस्तु|Presents one point in an HTML list.|HTML सूची का एक बिंदु दिखाती है।',
 'Link element|लिंक एलिमेंट|Lets a reader open another page.|पाठक को दूसरा पेज खोलने देता है।',
 'Image element|चित्र एलिमेंट|Shows a suitable picture in a page.|पेज पर उपयुक्त चित्र दिखाता है।',
 'Alt text|वैकल्पिक टेक्स्ट|Describes an image for people who cannot see it.|चित्र न देख सकने वालों को उसका वर्णन देता है।',
 'HTML file|HTML फ़ाइल|Stores webpage markup for a browser to open.|ब्राउज़र के खोलने के लिए पेज मार्कअप रखती है।',
 'Preview|पूर्वावलोकन|Shows how the page appears in a browser.|ब्राउज़र में पेज कैसा दिखता है, दिखाता है।',
 'Revision|संशोधन|Improves the page after checking its content and display.|सामग्री और दृश्य जाँचकर पेज सुधारता है।']);
 add(45,'What is a QR Code?','QR कोड क्या है?','Use QR codes to open information while checking the destination.','QR कोड से जानकारी खोलें और गंतव्य जाँचें।','qr',[
 'QR code|QR कोड|Is a scannable pattern that can encode information.|स्कैन होने वाला पैटर्न है जिसमें जानकारी हो सकती है।',
 'Camera scan|कैमरा स्कैन|Reads a QR pattern with a suitable device.|उपयुक्त उपकरण से QR पैटर्न पढ़ता है।',
 'Web link|वेब लिंक|Can be the destination encoded inside a QR code.|QR कोड में रखा गंतव्य हो सकता है।',
 'Preview address|पता पूर्वावलोकन|Lets a user inspect a link before opening it.|लिंक खोलने से पहले उसका पता जाँचने देता है।',
 'Trusted source|विश्वसनीय स्रोत|Matters because a printed QR code can point anywhere.|ज़रूरी है क्योंकि छपा QR कोड कहीं भी ले जा सकता है।',
 'Classroom handout|कक्षा पर्चा|Can carry a QR code for lesson material.|पाठ सामग्री के लिए QR कोड रख सकता है।',
 'Scam QR code|धोखेबाज़ QR कोड|May direct a scan to a fake site.|स्कैन पर नकली साइट पर ले जा सकता है।',
 'Destination|गंतव्य|Is the page or information a QR scan opens.|QR स्कैन से खुलने वाला पेज या जानकारी है।',
 'Permission|अनुमति|Should be considered before sharing information about other people.|दूसरे की जानकारी साझा करने से पहले सोचना चाहिए।',
 'Safe action|सुरक्षित कदम|Is to verify an unexpected QR destination before entering details.|विवरण देने से पहले अनपेक्षित QR गंतव्य की जाँच है।']);
 add(46,'Digital Design Basics','डिजिटल डिज़ाइन की बुनियाद','Arrange text and images into a clear, readable poster.','टेक्स्ट और चित्र से साफ़ पढ़ने योग्य पोस्टर बनाएँ।','design',[
 'Layout|लेआउट|Places parts of a design in a useful arrangement.|डिज़ाइन के भाग उपयोगी क्रम में रखता है।',
 'Spacing|खाली दूरी|Separates elements so they do not feel crowded.|भागों के बीच जगह रखती है ताकि भीड़ न लगे।',
 'Font choice|फ़ॉन्ट चुनाव|Uses readable letter shapes for the audience.|दर्शकों के लिए पढ़ने योग्य अक्षर रूप चुनता है।',
 'Contrast|रंग अंतर|Makes important text stand out from its background.|ज़रूरी टेक्स्ट को पृष्ठभूमि से साफ़ अलग दिखाता है।',
 'Hierarchy|प्राथमिकता क्रम|Shows which information readers should notice first.|दिखाता है कि पाठक पहले कौन-सी बात देखें।',
 'Purposeful image|उद्देश्यपूर्ण चित्र|Supports the message instead of merely filling space.|सिर्फ जगह भरने के बजाय संदेश समझाता है।',
 'Alignment|संरेखण|Keeps related parts on consistent visual lines.|संबंधित भाग एक जैसी दृश्य रेखा में रखता है।',
 'Poster title|पोस्टर शीर्षक|Communicates the event or main message quickly.|कार्यक्रम या मुख्य संदेश जल्दी बताता है।',
 'Audience|दर्शक|Is the group the design must communicate with.|वह समूह है जिसके लिए डिज़ाइन बनाया गया है।',
 'Review|समीक्षा|Checks that the final poster is readable and accurate.|जाँचती है कि अंतिम पोस्टर पढ़ने योग्य और सही है।']);
 add(47,'Photo and Image Basics','फ़ोटो और चित्र की बुनियाद','Crop and resize an image while considering clarity and file type.','चित्र काटें और आकार बदलें, स्पष्टता व फ़ाइल प्रकार देखें।','image',[
 'Crop|क्रॉप|Removes unwanted outer parts of a picture.|चित्र के अनचाहे बाहरी भाग हटाता है।',
 'Resize|आकार बदलें|Changes the displayed or stored dimensions of an image.|चित्र का दिखने या सहेजने वाला आकार बदलता है।',
 'Resolution|रिज़ॉल्यूशन|Describes image dimensions in pixels.|पिक्सेल में चित्र का आयाम बताता है।',
 'Pixel|पिक्सेल|Is a tiny unit in a digital raster image.|डिजिटल रास्टर चित्र की छोटी इकाई है।',
 'Aspect ratio|आकार अनुपात|Compares image width with its height.|चित्र की चौड़ाई और ऊँचाई की तुलना करता है।',
 'JPEG|JPEG|Often stores photos in a compressed image file.|अक्सर फ़ोटो संपीड़ित चित्र फ़ाइल में रखता है।',
 'PNG|PNG|Can preserve transparency in an image.|चित्र में पारदर्शिता रख सकता है।',
 'Original image|मूल चित्र|Should be kept before making irreversible edits.|स्थायी बदलाव से पहले संभालकर रखना चाहिए।',
 'Sharpness|स्पष्टता|Can suffer when a small image is enlarged greatly.|छोटा चित्र बहुत बड़ा करने पर घट सकती है।',
 'Export|निर्यात|Saves an edited picture in a chosen format.|बदला चित्र चुने फ़ाइल प्रकार में सहेजता है।']);
 add(48,'Audio and Video Basics','ऑडियो और वीडियो की बुनियाद','Record, play and share clear audio or video for learning.','सीखने के लिए स्पष्ट ऑडियो या वीडियो रिकॉर्ड और चलाएँ।','media',[
 'Audio|ऑडियो|Carries recorded sound without requiring pictures.|चित्र के बिना रिकॉर्ड ध्वनि रखता है।',
 'Video|वीडियो|Combines moving pictures and often sound.|चलते चित्र और अक्सर ध्वनि जोड़ता है।',
 'Microphone|माइक्रोफ़ोन|Captures sound during a recording.|रिकॉर्डिंग में ध्वनि लेता है।',
 'Camera|कैमरा|Captures pictures for a video recording.|वीडियो रिकॉर्डिंग के चित्र लेता है।',
 'Playback|प्लेबैक|Lets a learner listen to or watch a recording.|विद्यार्थी को रिकॉर्डिंग सुनने या देखने देता है।',
 'Pause|विराम|Temporarily stops playback at a chosen point.|चुनी जगह पर चलती रिकॉर्डिंग अस्थायी रूप से रोकता है।',
 'Volume|आवाज़ स्तर|Controls how loudly sound plays.|ध्वनि कितनी तेज़ बजेगी, तय करता है।',
 'Recording length|रिकॉर्डिंग अवधि|States how long an audio or video clip lasts.|ऑडियो या वीडियो क्लिप कितनी देर की है, बताती है।',
 'Caption|उपशीर्षक|Displays words that represent spoken video content.|वीडियो में बोली बात लिखकर दिखाता है।',
 'Review recording|रिकॉर्डिंग जाँच|Checks clarity before a clip is shared.|क्लिप साझा करने से पहले स्पष्टता जाँचती है।']);
 add(49,'Solve Common Computer Problems','सामान्य कंप्यूटर समस्याएँ सुलझाएँ','Check simple causes systematically before asking for help.','मदद माँगने से पहले सरल कारण क्रम से जाँचें।','trouble',[
 'Power check|बिजली जाँच|Confirms the device is receiving power.|पुष्टि करती है कि उपकरण को बिजली मिल रही है।',
 'Cable check|केबल जाँच|Looks for a loose or missing connection.|ढीला या छूटा कनेक्शन खोजती है।',
 'Volume setting|आवाज़ सेटिंग|Can explain why sound is not heard.|ध्वनि न सुनाई देने का कारण बता सकती है।',
 'Network check|नेटवर्क जाँच|Looks at connection status when a page will not load.|पेज न खुले तो कनेक्शन की स्थिति देखती है।',
 'Storage check|स्टोरेज जाँच|Finds whether low free space may block saving.|जाँचती है कि कम खाली जगह सेव रोक रही है या नहीं।',
 'Restart|फिर शुरू करें|Closes and starts software or a device again.|सॉफ़्टवेयर या उपकरण बंद करके फिर चालू करता है।',
 'Error message|गलती संदेश|Gives clues about what went wrong.|समस्या के बारे में संकेत देता है।',
 'One change at a time|एक बार में एक बदलाव|Helps identify which step solved the problem.|पता लगाने में मदद करता है कि किस कदम से समस्या ठीक हुई।',
 'Safe help|सुरक्षित मदद|Means asking a mentor before opening hardware or risking data.|हार्डवेयर खोलने या डेटा जोखिम से पहले मार्गदर्शक से पूछना है।',
 'Test again|फिर जाँचें|Confirms whether the attempted fix actually worked.|पुष्टि करती है कि किया सुधार सचमुच काम आया या नहीं।']);
 add(50,'Build Your Digital Portfolio','अपना डिजिटल पोर्टफोलियो बनाएँ','Collect and explain your best work as evidence of learning.','अपने अच्छे काम को सीख के प्रमाण के रूप में सजाएँ और समझाएँ।','files',[
 'Portfolio|पोर्टफोलियो|Collects selected work to show what a learner can do.|विद्यार्थी की क्षमता दिखाने वाले चुने काम रखता है।',
 'Project|परियोजना|Is a completed piece of learning work.|पूरा किया गया सीखने का काम है।',
 'Document sample|दस्तावेज़ नमूना|Shows writing and formatting skills.|लिखने और सजाने की क्षमता दिखाता है।',
 'Spreadsheet sample|स्प्रेडशीट नमूना|Shows organized data or calculations.|व्यवस्थित डेटा या गणना दिखाता है।',
 'Presentation sample|प्रस्तुति नमूना|Shows how ideas were explained with slides.|दिखाता है कि विचार स्लाइड से कैसे समझाए गए।',
 'Design sample|डिज़ाइन नमूना|Shows a visual made for a clear purpose.|स्पष्ट उद्देश्य से बनाया दृश्य दिखाता है।',
 'Code sample|कोड नमूना|Shows instructions written for a computer.|कंप्यूटर के लिए लिखे निर्देश दिखाता है।',
 'Project description|परियोजना विवरण|Explains the goal and what the learner made.|लक्ष्य और विद्यार्थी ने क्या बनाया, बताता है।',
 'Portfolio folder|पोर्टफोलियो फ़ोल्डर|Keeps selected files together in one organized place.|चुनी फ़ाइलें एक व्यवस्थित जगह रखता है।',
 'Reflection|चिंतन|Explains what was learned and what could improve.|बताता है कि क्या सीखा और क्या बेहतर हो सकता है।']);
 topics.forEach(publish);
 window.EXAMPREP_NEW_TOPIC_SPECS=topics;
})();

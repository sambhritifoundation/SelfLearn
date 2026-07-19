/* SelfLearn content pack — CBSE Class 11 Accountancy (rationalised syllabus)
   Auto-loaded by selflearn-app.html. Edit via Admin portal or import/export spreadsheet. */
window.SL_DATA = window.SL_DATA || { subjects: [], questions: [] };

window.SL_DATA.subjects.push({
  code: "ACC", board: "CBSE", klass: "11", icon: "📒",
  name: { en: "Accountancy", hi: "लेखांकन" },
  chapters: [
    { no: 1, name: { en: "Introduction to Accounting", hi: "लेखांकन का परिचय" }, topics: [
      { code: "ACC-1-1", name: { en: "Meaning and Process of Accounting", hi: "लेखांकन का अर्थ और प्रक्रिया" }, exam: true,
        notes: {
          en: "Accounting is the process of identifying, measuring, recording and communicating the financial transactions of a business so users can make informed decisions.\n\nKey points:\n• Only transactions measurable in money are recorded.\n• The 4 steps: Identify → Measure → Record → Communicate.\n• Book-keeping is only the recording part; accounting also summarises, analyses and interprets results.\n\nExample: Ravi starts a shop with ₹50,000 cash — measurable in money, so recorded as capital introduced. Hiring a talented manager is important but not recorded until money is paid.",
          hi: "लेखांकन वह प्रक्रिया है जिसमें व्यवसाय के वित्तीय लेन-देन की पहचान, मापन, अभिलेखन और संप्रेषण किया जाता है ताकि उपयोगकर्ता सही निर्णय ले सकें।\n\nमुख्य बिंदु:\n• केवल मुद्रा में मापने योग्य लेन-देन दर्ज होते हैं।\n• 4 चरण: पहचान → मापन → अभिलेखन → संप्रेषण।\n• बही-खाता केवल अभिलेखन है; लेखांकन में सारांश, विश्लेषण और व्याख्या भी शामिल है।\n\nउदाहरण: रवि ₹50,000 नकद से दुकान शुरू करता है — मुद्रा में मापने योग्य, इसलिए पूंजी के रूप में दर्ज। योग्य प्रबंधक की नियुक्ति महत्वपूर्ण है पर बिना भुगतान दर्ज नहीं होती।" } },
      { code: "ACC-1-2", name: { en: "Objectives and Advantages of Accounting", hi: "लेखांकन के उद्देश्य और लाभ" }, exam: true,
        notes: {
          en: "Main objectives of accounting:\n• Maintain systematic records of transactions.\n• Calculate profit or loss of the period.\n• Show the financial position through the balance sheet.\n• Provide information to users for decisions.\n\nAdvantages: replaces memory, provides evidence in court, helps in tax assessment, enables comparison across years, and helps in the sale of business. Limitations: records only monetary items, is influenced by personal judgement, and ignores price-level changes.",
          hi: "लेखांकन के मुख्य उद्देश्य:\n• लेन-देन का व्यवस्थित अभिलेख रखना।\n• अवधि का लाभ या हानि ज्ञात करना।\n• चिट्ठे (बैलेंस शीट) द्वारा वित्तीय स्थिति दर्शाना।\n• उपयोगकर्ताओं को निर्णय हेतु सूचना देना।\n\nलाभ: स्मृति का स्थान लेता है, न्यायालय में प्रमाण देता है, कर निर्धारण में सहायक, वर्षों की तुलना संभव, व्यवसाय की बिक्री में सहायक। सीमाएँ: केवल मौद्रिक मदें दर्ज, व्यक्तिगत निर्णय का प्रभाव, मूल्य-स्तर परिवर्तन की उपेक्षा।" } },
      { code: "ACC-1-3", name: { en: "Basic Accounting Terms", hi: "लेखांकन की मूल शब्दावली" }, exam: true,
        notes: {
          en: "Essential terms:\n• Capital — owner's investment in the business (internal liability).\n• Drawings — cash/goods withdrawn by the owner for personal use.\n• Assets — resources owned (fixed: building, machinery; current: cash, debtors, stock).\n• Liabilities — amounts the business owes to outsiders.\n• Debtors — persons who owe money to the business; Creditors — persons to whom the business owes money.\n• Revenue, Expense, Profit = Revenue − Expense.\n• Purchases/Sales — goods bought/sold in normal course of business.",
          hi: "आवश्यक शब्द:\n• पूंजी — स्वामी द्वारा व्यवसाय में लगाया धन (आंतरिक दायित्व)।\n• आहरण — स्वामी द्वारा निजी उपयोग हेतु निकाला गया नकद/माल।\n• संपत्तियाँ — स्वामित्व वाले संसाधन (स्थायी: भवन, मशीन; चालू: नकद, देनदार, स्टॉक)।\n• दायित्व — बाहरी पक्षों को देय राशियाँ।\n• देनदार — जो व्यवसाय को धन देते हैं; लेनदार — जिन्हें व्यवसाय धन देता है।\n• आगम, व्यय, लाभ = आगम − व्यय।\n• क्रय/विक्रय — सामान्य व्यापार में खरीदा/बेचा गया माल।" } },
      { code: "ACC-1-4", name: { en: "Users of Accounting Information", hi: "लेखांकन सूचना के उपयोगकर्ता" },
        notes: {
          en: "Internal users: owners (profit and safety of capital), management (planning and control), employees (job security, bonus).\n\nExternal users: investors (return and safety), creditors and banks (repaying capacity), government (tax), consumers, researchers and the public.\n\nQualities good information must have: reliability, relevance, understandability and comparability.",
          hi: "आंतरिक उपयोगकर्ता: स्वामी (लाभ व पूंजी की सुरक्षा), प्रबंधन (योजना व नियंत्रण), कर्मचारी (नौकरी की सुरक्षा, बोनस)।\n\nबाहरी उपयोगकर्ता: निवेशक (प्रतिफल व सुरक्षा), लेनदार व बैंक (भुगतान क्षमता), सरकार (कर), उपभोक्ता, शोधकर्ता व जनता।\n\nअच्छी सूचना के गुण: विश्वसनीयता, प्रासंगिकता, सुबोधता और तुलनीयता।" } }
    ]},
    { no: 2, name: { en: "Theory Base of Accounting", hi: "लेखांकन का सैद्धांतिक आधार" }, topics: [
      { code: "ACC-2-1", name: { en: "GAAP and Basic Concepts", hi: "GAAP और मूल अवधारणाएँ" }, exam: true,
        notes: {
          en: "GAAP (Generally Accepted Accounting Principles) are the common rules followed while recording and reporting so that statements are reliable and comparable.\n\nKey concepts:\n• Business Entity — business is separate from its owner.\n• Money Measurement — record only what can be measured in money.\n• Going Concern — business will continue for the foreseeable future.\n• Accounting Period — life divided into equal periods (usually a year).\n• Cost Concept — assets recorded at purchase cost.",
          hi: "GAAP (सामान्यतः स्वीकृत लेखांकन सिद्धांत) वे सामान्य नियम हैं जो अभिलेखन व रिपोर्टिंग में अपनाए जाते हैं ताकि विवरण विश्वसनीय व तुलनीय हों।\n\nमुख्य अवधारणाएँ:\n• व्यावसायिक इकाई — व्यवसाय स्वामी से अलग है।\n• मुद्रा मापन — केवल मुद्रा में मापने योग्य दर्ज करें।\n• चालू व्यवसाय — व्यवसाय निकट भविष्य में चलता रहेगा।\n• लेखांकन अवधि — जीवन समान अवधियों में विभाजित (सामान्यतः एक वर्ष)।\n• लागत अवधारणा — संपत्तियाँ क्रय लागत पर दर्ज।" } },
      { code: "ACC-2-2", name: { en: "More Principles: Dual Aspect, Matching, Conservatism", hi: "अन्य सिद्धांत: द्विपक्ष, मिलान, रूढ़िवादिता" }, exam: true,
        notes: {
          en: "• Dual Aspect — every transaction has two effects; basis of Assets = Liabilities + Capital.\n• Revenue Recognition — revenue recorded when earned, not necessarily when received.\n• Matching — expenses of a period matched against revenues of the same period.\n• Full Disclosure — all material facts must be reported.\n• Consistency — same methods year after year.\n• Conservatism (Prudence) — anticipate no profit, but provide for all possible losses.\n• Materiality and Objectivity — record significant items with verifiable evidence.",
          hi: "• द्विपक्ष अवधारणा — प्रत्येक लेन-देन के दो प्रभाव; संपत्तियाँ = दायित्व + पूंजी का आधार।\n• आगम मान्यता — आगम अर्जित होने पर दर्ज, प्राप्ति पर आवश्यक नहीं।\n• मिलान — अवधि के व्यय उसी अवधि के आगम से मिलाए जाते हैं।\n• पूर्ण प्रकटीकरण — सभी महत्वपूर्ण तथ्य बताने होंगे।\n• एकरूपता — हर वर्ष समान विधियाँ।\n• रूढ़िवादिता (विवेक) — लाभ की आशा न करें, पर सभी संभावित हानियों की व्यवस्था करें।\n• सारता व वस्तुनिष्ठता — महत्वपूर्ण मदें सत्यापन योग्य प्रमाण से दर्ज करें।" } },
      { code: "ACC-2-3", name: { en: "Cash vs Accrual Basis; Accounting Standards and GST", hi: "नकद बनाम उपार्जन आधार; लेखांकन मानक व GST" },
        notes: {
          en: "Cash basis — record only when cash is received or paid. Simple but ignores outstanding items.\nAccrual basis — record when earned/incurred, whether or not cash moves. Required by law for companies; gives true profit.\n\nAccounting Standards (issued by ICAI) and Ind-AS bring uniformity. GST (Goods and Services Tax) is an indirect tax on supply of goods and services — CGST + SGST within a state, IGST between states.",
          hi: "नकद आधार — केवल नकद प्राप्ति या भुगतान पर दर्ज। सरल, पर बकाया मदों की उपेक्षा।\nउपार्जन आधार — अर्जित/उपगत होने पर दर्ज, चाहे नकद चले या नहीं। कंपनियों के लिए अनिवार्य; सही लाभ दर्शाता है।\n\nलेखांकन मानक (ICAI द्वारा) व Ind-AS एकरूपता लाते हैं। GST (वस्तु एवं सेवा कर) वस्तुओं व सेवाओं की आपूर्ति पर अप्रत्यक्ष कर — राज्य के भीतर CGST + SGST, राज्यों के बीच IGST।" } }
    ]},
    { no: 3, name: { en: "Recording of Transactions – I", hi: "लेन-देनों का अभिलेखन – I" }, topics: [
      { code: "ACC-3-1", name: { en: "Accounting Equation", hi: "लेखांकन समीकरण" }, exam: true,
        notes: {
          en: "The accounting equation: Assets = Liabilities + Capital. It always balances because of the dual aspect concept.\n\nEffects of transactions:\n• Started business with ₹1,00,000 cash → Assets +1,00,000 (cash), Capital +1,00,000.\n• Purchased goods for cash ₹20,000 → one asset (stock) up, another (cash) down; totals unchanged.\n• Purchased goods on credit → Assets up (stock), Liabilities up (creditors).\n• Profit increases capital; drawings and losses reduce capital.",
          hi: "लेखांकन समीकरण: संपत्तियाँ = दायित्व + पूंजी। द्विपक्ष अवधारणा के कारण यह सदा संतुलित रहती है।\n\nलेन-देनों के प्रभाव:\n• ₹1,00,000 नकद से व्यवसाय शुरू → संपत्तियाँ +1,00,000 (नकद), पूंजी +1,00,000।\n• ₹20,000 का माल नकद खरीदा → एक संपत्ति (स्टॉक) बढ़ी, दूसरी (नकद) घटी; योग अपरिवर्तित।\n• उधार माल खरीदा → संपत्तियाँ बढ़ीं (स्टॉक), दायित्व बढ़े (लेनदार)।\n• लाभ पूंजी बढ़ाता है; आहरण व हानि पूंजी घटाते हैं।" } },
      { code: "ACC-3-2", name: { en: "Rules of Debit and Credit", hi: "नामे और जमा के नियम" }, exam: true,
        notes: {
          en: "Modern approach — Debit increases: Assets, Expenses, Drawings. Credit increases: Liabilities, Capital, Revenues.\n\nRemember: DEAD CLR → Debit: Expenses, Assets, Drawings; Credit: Liabilities, Revenue (income), Capital.\n\nTraditional rules: Personal a/c — debit the receiver, credit the giver. Real a/c — debit what comes in, credit what goes out. Nominal a/c — debit expenses and losses, credit incomes and gains.",
          hi: "आधुनिक दृष्टिकोण — नामे (Debit) से बढ़ते हैं: संपत्तियाँ, व्यय, आहरण। जमा (Credit) से बढ़ते हैं: दायित्व, पूंजी, आगम।\n\nयाद रखें: DEAD CLR → Debit: व्यय, संपत्ति, आहरण; Credit: दायित्व, आगम, पूंजी।\n\nपरंपरागत नियम: व्यक्तिगत खाता — पाने वाले को नामे, देने वाले को जमा। वास्तविक खाता — जो आए उसे नामे, जो जाए उसे जमा। नाममात्र खाता — व्यय-हानि नामे, आय-लाभ जमा।" } },
      { code: "ACC-3-3", name: { en: "Journal and Journalising", hi: "रोज़नामचा (जर्नल) और प्रविष्टि" }, exam: true,
        notes: {
          en: "The journal is the book of original entry — transactions recorded date-wise with a narration.\n\nFormat columns: Date, Particulars, L.F., Debit ₹, Credit ₹.\n\nExample: Purchased furniture for cash ₹5,000 →\nFurniture A/c Dr. 5,000\n  To Cash A/c 5,000\n(Being furniture purchased for cash)\n\nCompound entry combines more than two accounts of the same date/type.",
          hi: "रोज़नामचा मूल प्रविष्टि की पुस्तक है — लेन-देन तिथि-क्रम में विवरण (नैरेशन) सहित दर्ज होते हैं।\n\nप्रारूप स्तंभ: तिथि, विवरण, खाता पृष्ठ (L.F.), नामे ₹, जमा ₹।\n\nउदाहरण: ₹5,000 नकद से फर्नीचर खरीदा →\nफर्नीचर खाता नामे 5,000\n  नकद खाते को 5,000\n(नकद से फर्नीचर खरीदा गया)\n\nसंयुक्त प्रविष्टि में एक ही तिथि/प्रकार के दो से अधिक खाते होते हैं।" } },
      { code: "ACC-3-4", name: { en: "Ledger and Posting", hi: "खाताबही और खतौनी" },
        notes: {
          en: "The ledger is the principal book — all accounts of a business, one page per account. Posting is transferring entries from journal to ledger.\n\nEach account has a Dr. (left) and Cr. (right) side. Balancing: total both sides, put the difference on the smaller side as 'Balance c/d', bring it down next period as 'Balance b/d'.\n\nAssets normally show debit balances; liabilities and capital show credit balances.",
          hi: "खाताबही प्रधान पुस्तक है — व्यवसाय के सभी खाते, प्रत्येक खाते का अलग पृष्ठ। जर्नल से खाताबही में प्रविष्टि स्थानांतरित करना खतौनी कहलाता है।\n\nहर खाते में नामे (बाईं) व जमा (दाईं) पक्ष होते हैं। शेष निकालना: दोनों पक्षों का योग करें, अंतर छोटे पक्ष पर 'शेष आगे ले गए (c/d)' लिखें, अगली अवधि में 'शेष नीचे लाए (b/d)'।\n\nसंपत्तियों में सामान्यतः नामे शेष; दायित्व व पूंजी में जमा शेष।" } }
    ]}
  ]
});

window.SL_DATA.questions.push(
  /* ---- Chapter 1 ---- */
  { id:"ACC-Q001", board:"CBSE", klass:"11", subject:"ACC", chapter:1, topic:"ACC-1-1", type:"mcq", diff:"easy",
    q:{en:"Which of the following is recorded in accounting?", hi:"निम्न में से क्या लेखांकन में दर्ज किया जाता है?"},
    opts:{en:["The honesty of the manager","Purchase of goods for ₹10,000","A quarrel between two employees","The good location of the shop"],
          hi:["प्रबंधक की ईमानदारी","₹10,000 का माल खरीदना","दो कर्मचारियों के बीच झगड़ा","दुकान की अच्छी लोकेशन"]},
    correct:"B", exp:{en:"Only events measurable in money are recorded. A ₹10,000 purchase has a clear money value; the others do not.", hi:"केवल मुद्रा में मापने योग्य घटनाएँ दर्ज होती हैं। ₹10,000 की खरीद का स्पष्ट मौद्रिक मूल्य है; बाकी का नहीं।"},
    tags:["theory","exam-important"], source:"NCERT Ch 1, adapted", status:"published" },
  { id:"ACC-Q002", board:"CBSE", klass:"11", subject:"ACC", chapter:1, topic:"ACC-1-1", type:"tf", diff:"easy",
    q:{en:"Book-keeping and accounting are exactly the same activity.", hi:"बही-खाता और लेखांकन बिल्कुल एक ही कार्य हैं।"},
    correct:"FALSE", exp:{en:"Book-keeping is only the recording part; accounting also includes summarising, analysing and interpreting.", hi:"बही-खाता केवल अभिलेखन है; लेखांकन में सारांश, विश्लेषण और व्याख्या भी शामिल है।"},
    tags:["theory"], source:"NCERT Ch 1", status:"published" },
  { id:"ACC-Q003", board:"CBSE", klass:"11", subject:"ACC", chapter:1, topic:"ACC-1-1", type:"mcq", diff:"medium",
    q:{en:"The correct order of the accounting process is:", hi:"लेखांकन प्रक्रिया का सही क्रम है:"},
    opts:{en:["Record → Identify → Measure → Communicate","Identify → Measure → Record → Communicate","Measure → Communicate → Record → Identify","Identify → Record → Communicate → Measure"],
          hi:["अभिलेखन → पहचान → मापन → संप्रेषण","पहचान → मापन → अभिलेखन → संप्रेषण","मापन → संप्रेषण → अभिलेखन → पहचान","पहचान → अभिलेखन → संप्रेषण → मापन"]},
    correct:"B", exp:{en:"First identify financial transactions, measure them in money, record them in books, then communicate results to users.", hi:"पहले वित्तीय लेन-देन की पहचान, फिर मुद्रा में मापन, फिर पुस्तकों में अभिलेखन, अंत में उपयोगकर्ताओं को संप्रेषण।"},
    tags:["theory","exam-important"], source:"NCERT Ch 1", status:"published" },
  { id:"ACC-Q004", board:"CBSE", klass:"11", subject:"ACC", chapter:1, topic:"ACC-1-2", type:"mcq", diff:"easy",
    q:{en:"Which of these is NOT an objective of accounting?", hi:"इनमें से क्या लेखांकन का उद्देश्य नहीं है?"},
    opts:{en:["Maintaining systematic records","Calculating profit or loss","Fixing the selling price of every product","Showing the financial position"],
          hi:["व्यवस्थित अभिलेख रखना","लाभ-हानि ज्ञात करना","हर उत्पाद का विक्रय मूल्य तय करना","वित्तीय स्थिति दर्शाना"]},
    correct:"C", exp:{en:"Pricing is a management decision. Accounting's objectives are systematic records, profit/loss, financial position, and information for users.", hi:"मूल्य निर्धारण प्रबंधन का निर्णय है। लेखांकन के उद्देश्य हैं — व्यवस्थित अभिलेख, लाभ-हानि, वित्तीय स्थिति और उपयोगकर्ताओं को सूचना।"},
    tags:["theory"], source:"NCERT Ch 1", status:"published" },
  { id:"ACC-Q005", board:"CBSE", klass:"11", subject:"ACC", chapter:1, topic:"ACC-1-3", type:"short", diff:"medium",
    q:{en:"The amount invested by the owner in the business is called ____.", hi:"स्वामी द्वारा व्यवसाय में लगाई गई राशि को ____ कहते हैं।"},
    correct:"capital|पूंजी|poonji", exp:{en:"Capital is the owner's investment — an internal liability of the business towards the owner.", hi:"पूंजी स्वामी का निवेश है — व्यवसाय का स्वामी के प्रति आंतरिक दायित्व।"},
    tags:["terminology"], source:"NCERT Ch 1", status:"published" },
  { id:"ACC-Q006", board:"CBSE", klass:"11", subject:"ACC", chapter:1, topic:"ACC-1-3", type:"mcq", diff:"medium",
    q:{en:"Goods withdrawn by the owner for personal use are called:", hi:"स्वामी द्वारा निजी उपयोग हेतु निकाला गया माल कहलाता है:"},
    opts:{en:["Purchases","Drawings","Expenses","Losses"], hi:["क्रय","आहरण","व्यय","हानि"]},
    correct:"B", exp:{en:"Drawings are cash or goods withdrawn by the owner for personal use; they reduce capital.", hi:"आहरण स्वामी द्वारा निजी उपयोग हेतु निकाला गया नकद या माल है; इससे पूंजी घटती है।"},
    tags:["terminology","exam-important"], source:"NCERT Ch 1", status:"published" },
  { id:"ACC-Q007", board:"CBSE", klass:"11", subject:"ACC", chapter:1, topic:"ACC-1-4", type:"mcq", diff:"easy",
    q:{en:"Which of the following is an INTERNAL user of accounting information?", hi:"निम्न में से लेखांकन सूचना का आंतरिक उपयोगकर्ता कौन है?"},
    opts:{en:["Bank","Management","Government","Investors"], hi:["बैंक","प्रबंधन","सरकार","निवेशक"]},
    correct:"B", exp:{en:"Management (and owners, employees) are internal users. Banks, government and investors are external users.", hi:"प्रबंधन (तथा स्वामी, कर्मचारी) आंतरिक उपयोगकर्ता हैं। बैंक, सरकार व निवेशक बाहरी उपयोगकर्ता हैं।"},
    tags:["theory"], source:"NCERT Ch 1", status:"published" },

  /* ---- Chapter 2 ---- */
  { id:"ACC-Q008", board:"CBSE", klass:"11", subject:"ACC", chapter:2, topic:"ACC-2-1", type:"mcq", diff:"easy",
    q:{en:"According to the Business Entity concept:", hi:"व्यावसायिक इकाई अवधारणा के अनुसार:"},
    opts:{en:["Business and owner are the same","Business is separate from its owner","Only companies are separate entities","Owner's house is a business asset"],
          hi:["व्यवसाय और स्वामी एक हैं","व्यवसाय स्वामी से अलग है","केवल कंपनियाँ अलग इकाई हैं","स्वामी का घर व्यवसाय की संपत्ति है"]},
    correct:"B", exp:{en:"The business is treated as separate from its owner — that is why capital is a liability of the business towards the owner.", hi:"व्यवसाय को स्वामी से अलग माना जाता है — इसीलिए पूंजी व्यवसाय का स्वामी के प्रति दायित्व है।"},
    tags:["theory","exam-important"], source:"NCERT Ch 2", status:"published" },
  { id:"ACC-Q009", board:"CBSE", klass:"11", subject:"ACC", chapter:2, topic:"ACC-2-1", type:"mcq", diff:"medium",
    q:{en:"Assets are recorded at their purchase price under which concept?", hi:"किस अवधारणा के अंतर्गत संपत्तियाँ क्रय मूल्य पर दर्ज होती हैं?"},
    opts:{en:["Going Concern","Cost Concept","Money Measurement","Matching"], hi:["चालू व्यवसाय","लागत अवधारणा","मुद्रा मापन","मिलान"]},
    correct:"B", exp:{en:"The Cost Concept requires assets to be recorded at their acquisition cost, not current market value.", hi:"लागत अवधारणा के अनुसार संपत्तियाँ अधिग्रहण लागत पर दर्ज होती हैं, वर्तमान बाज़ार मूल्य पर नहीं।"},
    tags:["theory"], source:"NCERT Ch 2", status:"published" },
  { id:"ACC-Q010", board:"CBSE", klass:"11", subject:"ACC", chapter:2, topic:"ACC-2-2", type:"mcq", diff:"medium",
    q:{en:"\"Anticipate no profit but provide for all possible losses\" describes:", hi:"\"लाभ की आशा न करें पर सभी संभावित हानियों की व्यवस्था करें\" किसका वर्णन है?"},
    opts:{en:["Consistency","Conservatism (Prudence)","Materiality","Full Disclosure"], hi:["एकरूपता","रूढ़िवादिता (विवेक)","सारता","पूर्ण प्रकटीकरण"]},
    correct:"B", exp:{en:"Conservatism/prudence: recognise possible losses immediately (e.g. provision for doubtful debts) but never anticipate profits.", hi:"रूढ़िवादिता/विवेक: संभावित हानियाँ तुरंत मानें (जैसे संदिग्ध ऋणों की व्यवस्था) पर लाभ की पहले से आशा न करें।"},
    tags:["theory","exam-important"], source:"NCERT Ch 2", status:"published" },
  { id:"ACC-Q011", board:"CBSE", klass:"11", subject:"ACC", chapter:2, topic:"ACC-2-2", type:"tf", diff:"easy",
    q:{en:"The Dual Aspect concept is the basis of the equation Assets = Liabilities + Capital.", hi:"द्विपक्ष अवधारणा ही समीकरण संपत्तियाँ = दायित्व + पूंजी का आधार है।"},
    correct:"TRUE", exp:{en:"Every transaction has two effects, so total assets always equal total claims (liabilities + capital).", hi:"हर लेन-देन के दो प्रभाव होते हैं, इसलिए कुल संपत्तियाँ सदा कुल दावों (दायित्व + पूंजी) के बराबर रहती हैं।"},
    tags:["theory"], source:"NCERT Ch 2", status:"published" },
  { id:"ACC-Q012", board:"CBSE", klass:"11", subject:"ACC", chapter:2, topic:"ACC-2-3", type:"mcq", diff:"medium",
    q:{en:"Under the accrual basis, revenue is recorded when it is:", hi:"उपार्जन आधार पर आगम कब दर्ज होता है?"},
    opts:{en:["Received in cash","Earned","Deposited in bank","Budgeted"], hi:["नकद प्राप्त होने पर","अर्जित होने पर","बैंक में जमा होने पर","बजट बनने पर"]},
    correct:"B", exp:{en:"Accrual basis records revenue when earned and expenses when incurred, regardless of cash movement.", hi:"उपार्जन आधार पर आगम अर्जित होने पर और व्यय उपगत होने पर दर्ज होते हैं, नकद चले या नहीं।"},
    tags:["theory","exam-important"], source:"NCERT Ch 2", status:"published" },
  { id:"ACC-Q013", board:"CBSE", klass:"11", subject:"ACC", chapter:2, topic:"ACC-2-3", type:"mcq", diff:"easy",
    q:{en:"GST charged on a sale within the same state consists of:", hi:"एक ही राज्य के भीतर बिक्री पर लगने वाला GST होता है:"},
    opts:{en:["IGST only","CGST + SGST","CGST + IGST","SGST + IGST"], hi:["केवल IGST","CGST + SGST","CGST + IGST","SGST + IGST"]},
    correct:"B", exp:{en:"Intra-state supplies attract CGST (central) plus SGST (state). Inter-state supplies attract IGST.", hi:"राज्य के भीतर आपूर्ति पर CGST (केंद्र) + SGST (राज्य) लगता है। राज्यों के बीच आपूर्ति पर IGST।"},
    tags:["theory","gst"], source:"NCERT Ch 2", status:"published" },

  /* ---- Chapter 3 ---- */
  { id:"ACC-Q014", board:"CBSE", klass:"11", subject:"ACC", chapter:3, topic:"ACC-3-1", type:"mcq", diff:"medium",
    q:{en:"Mohan starts business with ₹1,00,000 cash. The effect on the accounting equation is:", hi:"मोहन ₹1,00,000 नकद से व्यवसाय शुरू करता है। लेखांकन समीकरण पर प्रभाव होगा:"},
    opts:{en:["Assets +1,00,000; Capital +1,00,000","Assets +1,00,000; Liabilities +1,00,000","Capital +1,00,000; Liabilities −1,00,000","No effect"],
          hi:["संपत्तियाँ +1,00,000; पूंजी +1,00,000","संपत्तियाँ +1,00,000; दायित्व +1,00,000","पूंजी +1,00,000; दायित्व −1,00,000","कोई प्रभाव नहीं"]},
    correct:"A", exp:{en:"Cash (asset) increases and the owner's capital increases by the same amount, keeping the equation balanced.", hi:"नकद (संपत्ति) बढ़ता है और स्वामी की पूंजी उतनी ही बढ़ती है — समीकरण संतुलित रहती है।"},
    tags:["numerical","exam-important"], source:"NCERT Ch 3", status:"published" },
  { id:"ACC-Q015", board:"CBSE", klass:"11", subject:"ACC", chapter:3, topic:"ACC-3-1", type:"mcq", diff:"hard",
    q:{en:"Goods costing ₹20,000 purchased on credit. Which is correct?", hi:"₹20,000 का माल उधार खरीदा गया। कौन-सा सही है?"},
    opts:{en:["Stock +20,000; Cash −20,000","Stock +20,000; Creditors +20,000","Cash +20,000; Creditors +20,000","Stock +20,000; Capital +20,000"],
          hi:["स्टॉक +20,000; नकद −20,000","स्टॉक +20,000; लेनदार +20,000","नकद +20,000; लेनदार +20,000","स्टॉक +20,000; पूंजी +20,000"]},
    correct:"B", exp:{en:"A credit purchase increases an asset (stock) and a liability (creditors) at the same time.", hi:"उधार खरीद से संपत्ति (स्टॉक) और दायित्व (लेनदार) दोनों एक साथ बढ़ते हैं।"},
    tags:["numerical"], source:"NCERT Ch 3", status:"published" },
  { id:"ACC-Q016", board:"CBSE", klass:"11", subject:"ACC", chapter:3, topic:"ACC-3-2", type:"mcq", diff:"easy",
    q:{en:"An increase in an expense is always:", hi:"व्यय में वृद्धि सदा होती है:"},
    opts:{en:["Credited","Debited","Ignored","Posted to capital"], hi:["जमा","नामे","उपेक्षित","पूंजी में खतौनी"]},
    correct:"B", exp:{en:"DEAD CLR: Debit increases Expenses, Assets, Drawings; Credit increases Liabilities, Revenue, Capital.", hi:"DEAD CLR: नामे से व्यय, संपत्ति, आहरण बढ़ते हैं; जमा से दायित्व, आगम, पूंजी बढ़ते हैं।"},
    tags:["theory","exam-important"], source:"NCERT Ch 3", status:"published" },
  { id:"ACC-Q017", board:"CBSE", klass:"11", subject:"ACC", chapter:3, topic:"ACC-3-2", type:"tf", diff:"medium",
    q:{en:"For a Real account the rule is: debit what comes in, credit what goes out.", hi:"वास्तविक खाते का नियम है: जो आए उसे नामे, जो जाए उसे जमा।"},
    correct:"TRUE", exp:{en:"Real accounts (assets) follow 'debit what comes in, credit what goes out' under the traditional approach.", hi:"परंपरागत दृष्टिकोण में वास्तविक खाते (संपत्तियाँ) 'जो आए नामे, जो जाए जमा' नियम का पालन करते हैं।"},
    tags:["theory"], source:"NCERT Ch 3", status:"published" },
  { id:"ACC-Q018", board:"CBSE", klass:"11", subject:"ACC", chapter:3, topic:"ACC-3-3", type:"mcq", diff:"medium",
    q:{en:"Furniture purchased for cash ₹5,000. The correct journal entry is:", hi:"₹5,000 नकद से फर्नीचर खरीदा। सही जर्नल प्रविष्टि है:"},
    opts:{en:["Cash A/c Dr.; To Furniture A/c","Furniture A/c Dr.; To Cash A/c","Purchases A/c Dr.; To Cash A/c","Furniture A/c Dr.; To Capital A/c"],
          hi:["नकद खाता नामे; फर्नीचर खाते को","फर्नीचर खाता नामे; नकद खाते को","क्रय खाता नामे; नकद खाते को","फर्नीचर खाता नामे; पूंजी खाते को"]},
    correct:"B", exp:{en:"Furniture (asset) comes in → debit. Cash (asset) goes out → credit. It is not 'Purchases' because furniture is not goods for resale.", hi:"फर्नीचर (संपत्ति) आया → नामे। नकद (संपत्ति) गया → जमा। यह 'क्रय' नहीं है क्योंकि फर्नीचर पुनर्विक्रय हेतु माल नहीं है।"},
    tags:["numerical","exam-important"], source:"NCERT Ch 3", status:"published" },
  { id:"ACC-Q019", board:"CBSE", klass:"11", subject:"ACC", chapter:3, topic:"ACC-3-3", type:"short", diff:"easy",
    q:{en:"The book of original entry in which transactions are first recorded date-wise is the ____.", hi:"मूल प्रविष्टि की वह पुस्तक जिसमें लेन-देन सबसे पहले तिथि-क्रम में दर्ज होते हैं, ____ कहलाती है।"},
    correct:"journal|जर्नल|रोज़नामचा|रोजनामचा", exp:{en:"The journal is the book of original (prime) entry; the ledger is the book of final entry.", hi:"जर्नल मूल प्रविष्टि की पुस्तक है; खाताबही अंतिम प्रविष्टि की पुस्तक है।"},
    tags:["terminology"], source:"NCERT Ch 3", status:"published" },
  { id:"ACC-Q020", board:"CBSE", klass:"11", subject:"ACC", chapter:3, topic:"ACC-3-4", type:"mcq", diff:"medium",
    q:{en:"Transferring entries from the journal to the ledger is called:", hi:"जर्नल से खाताबही में प्रविष्टियाँ स्थानांतरित करना कहलाता है:"},
    opts:{en:["Balancing","Posting","Journalising","Casting"], hi:["शेष निकालना","खतौनी","प्रविष्टि करना","योग लगाना"]},
    correct:"B", exp:{en:"Posting is the process of transferring journal entries to individual ledger accounts.", hi:"खतौनी जर्नल प्रविष्टियों को अलग-अलग खाताबही खातों में स्थानांतरित करने की प्रक्रिया है।"},
    tags:["terminology"], source:"NCERT Ch 3", status:"published" }
);
(function(){
var acc = window.SL_DATA.subjects.find(function(s){return s.code==="ACC";});
acc.chapters.push(
  { no: 4, name: { en: "Recording of Transactions – II", hi: "लेन-देनों का अभिलेखन – II" }, topics: [
    { code: "ACC-4-1", name: { en: "Cash Book", hi: "रोकड़ बही" }, exam: true,
      notes: {
        en: "The cash book records all cash and bank transactions. It is both a journal (original entry) and a ledger (cash/bank account).\n\nTypes:\n• Single column — cash only.\n• Double column — cash and bank columns.\n• Petty cash book — small repeated expenses under the imprest system.\n\nContra entry (C) — a transaction between cash and bank (e.g. cash deposited into bank) appears on both sides of a double-column cash book.",
        hi: "रोकड़ बही में सभी नकद व बैंक लेन-देन दर्ज होते हैं। यह जर्नल (मूल प्रविष्टि) और खाताबही (नकद/बैंक खाता) दोनों है।\n\nप्रकार:\n• एक स्तंभीय — केवल नकद।\n• दो स्तंभीय — नकद व बैंक स्तंभ।\n• खुदरा रोकड़ बही — अग्रदाय (इम्प्रेस्ट) प्रणाली में छोटे बार-बार होने वाले व्यय।\n\nविपरीत प्रविष्टि (C) — नकद और बैंक के बीच का लेन-देन (जैसे बैंक में नकद जमा) दो स्तंभीय रोकड़ बही के दोनों पक्षों में आता है।" } },
    { code: "ACC-4-2", name: { en: "Special Purpose Books", hi: "विशेष उद्देश्य की पुस्तकें" }, exam: true,
      notes: {
        en: "When transactions are many, subsidiary books save time:\n• Purchases Book — credit purchases of goods only.\n• Sales Book — credit sales of goods only.\n• Purchases Return (Return Outward) Book and Sales Return (Return Inward) Book.\n\nRemember: cash purchases/sales go to the cash book, and purchase of assets on credit goes to the journal proper — not these books. Source documents: invoice/bill for purchases and sales, debit note for purchase returns, credit note for sales returns.",
        hi: "लेन-देन अधिक होने पर सहायक पुस्तकें समय बचाती हैं:\n• क्रय बही — केवल माल का उधार क्रय।\n• विक्रय बही — केवल माल का उधार विक्रय।\n• क्रय वापसी (बाहरी वापसी) बही व विक्रय वापसी (आंतरिक वापसी) बही।\n\nयाद रखें: नकद क्रय/विक्रय रोकड़ बही में, और संपत्तियों का उधार क्रय जर्नल प्रॉपर में — इन पुस्तकों में नहीं। स्रोत प्रलेख: क्रय-विक्रय हेतु बीजक/बिल, क्रय वापसी हेतु नामे नोट, विक्रय वापसी हेतु जमा नोट।" } },
    { code: "ACC-4-3", name: { en: "Journal Proper", hi: "जर्नल प्रॉपर" },
      notes: {
        en: "The journal proper records transactions that do not fit any other book:\n• Opening entry (bringing forward balances)\n• Closing entries\n• Adjustment entries (outstanding, prepaid)\n• Rectification entries\n• Credit purchase/sale of assets\n• Drawings of goods, goods lost or given as charity.",
        hi: "जर्नल प्रॉपर में वे लेन-देन दर्ज होते हैं जो किसी अन्य पुस्तक में नहीं आते:\n• प्रारंभिक प्रविष्टि (शेष आगे लाना)\n• समापन प्रविष्टियाँ\n• समायोजन प्रविष्टियाँ (बकाया, पूर्वदत्त)\n• अशुद्धि-सुधार प्रविष्टियाँ\n• संपत्तियों का उधार क्रय/विक्रय\n• माल का आहरण, माल की हानि या दान।" } }
  ]},
  { no: 5, name: { en: "Bank Reconciliation Statement", hi: "बैंक समाधान विवरण" }, topics: [
    { code: "ACC-5-1", name: { en: "Need and Causes of Difference", hi: "आवश्यकता और अंतर के कारण" }, exam: true,
      notes: {
        en: "A Bank Reconciliation Statement (BRS) explains the difference between the bank balance shown by the cash book and by the bank passbook on a given date.\n\nCommon causes:\n• Cheques issued but not yet presented for payment.\n• Cheques deposited but not yet collected/credited.\n• Bank charges, interest allowed or charged by the bank, direct deposits by customers, payments made by bank under standing instructions — entered in passbook first.\n• Errors in either book.",
        hi: "बैंक समाधान विवरण (BRS) किसी तिथि को रोकड़ बही और बैंक पासबुक के बैंक शेष के अंतर की व्याख्या करता है।\n\nसामान्य कारण:\n• जारी चेक जो भुगतान हेतु प्रस्तुत नहीं हुए।\n• जमा चेक जिनकी वसूली/जमा नहीं हुई।\n• बैंक प्रभार, बैंक द्वारा दिया/लिया ब्याज, ग्राहकों द्वारा सीधी जमा, स्थायी निर्देश पर भुगतान — पहले पासबुक में दर्ज।\n• किसी भी पुस्तक में अशुद्धियाँ।" } },
    { code: "ACC-5-2", name: { en: "Preparing the BRS", hi: "बैंक समाधान विवरण बनाना" }, exam: true,
      notes: {
        en: "Start with the balance of one book and adjust for causes of difference to reach the other's balance.\n\nStarting with cash book (Dr.) favourable balance:\n• Add: cheques issued but not presented; interest allowed by bank; direct deposits by customers.\n• Less: cheques deposited but not collected; bank charges; interest charged.\n\nA debit balance in the cash book = favourable; a credit balance in the cash book = overdraft. When starting from overdraft, the add/less directions reverse.",
        hi: "एक पुस्तक के शेष से शुरू कर, अंतर के कारणों का समायोजन कर दूसरी के शेष तक पहुँचें।\n\nरोकड़ बही (नामे) अनुकूल शेष से शुरू करने पर:\n• जोड़ें: जारी पर अप्रस्तुत चेक; बैंक द्वारा दिया ब्याज; ग्राहकों की सीधी जमा।\n• घटाएँ: जमा पर अवसूलित चेक; बैंक प्रभार; लिया गया ब्याज।\n\nरोकड़ बही में नामे शेष = अनुकूल; जमा शेष = अधिविकर्ष (ओवरड्राफ्ट)। ओवरड्राफ्ट से शुरू करने पर जोड़-घटाव की दिशाएँ उलट जाती हैं।" } }
  ]},
  { no: 6, name: { en: "Trial Balance and Rectification of Errors", hi: "तलपट और अशुद्धियों का सुधार" }, topics: [
    { code: "ACC-6-1", name: { en: "Trial Balance: Meaning and Preparation", hi: "तलपट: अर्थ और निर्माण" }, exam: true,
      notes: {
        en: "A trial balance is a statement listing the debit and credit balances of all ledger accounts on a date to check arithmetical accuracy.\n\n• Debit column: assets, expenses, losses, drawings.\n• Credit column: liabilities, capital, revenues, gains.\n• Totals must agree — but agreement does not prove there are no errors.\n\nMethods: balance method (most common), total method, total-cum-balance method.",
        hi: "तलपट किसी तिथि को सभी खाताबही खातों के नामे व जमा शेषों की सूची है, जिससे अंकगणितीय शुद्धता जाँची जाती है।\n\n• नामे स्तंभ: संपत्तियाँ, व्यय, हानियाँ, आहरण।\n• जमा स्तंभ: दायित्व, पूंजी, आगम, लाभ।\n• योग बराबर होने चाहिए — पर बराबरी अशुद्धि न होने का प्रमाण नहीं है।\n\nविधियाँ: शेष विधि (सबसे प्रचलित), योग विधि, योग-सह-शेष विधि।" } },
    { code: "ACC-6-2", name: { en: "Types of Errors", hi: "अशुद्धियों के प्रकार" }, exam: true,
      notes: {
        en: "• Errors of omission — transaction completely or partially not recorded.\n• Errors of commission — wrong amount, wrong account of the same class, wrong posting or casting.\n• Errors of principle — violating accounting principles, e.g. treating purchase of machinery (capital) as an expense (revenue).\n• Compensating errors — two or more errors cancelling each other.\n\nErrors NOT affecting trial balance agreement: complete omission, principle, compensating, and posting to the wrong account with the correct amount and side.",
        hi: "• लोप की अशुद्धियाँ — लेन-देन पूर्णतः या अंशतः दर्ज नहीं।\n• कार्य/लेखन की अशुद्धियाँ — गलत राशि, उसी वर्ग का गलत खाता, गलत खतौनी या योग।\n• सैद्धांतिक अशुद्धियाँ — लेखांकन सिद्धांतों का उल्लंघन, जैसे मशीन का क्रय (पूंजीगत) व्यय (आगम) मान लेना।\n• क्षतिपूरक अशुद्धियाँ — दो या अधिक अशुद्धियाँ एक-दूसरे को निरस्त कर दें।\n\nतलपट की बराबरी को प्रभावित न करने वाली: पूर्ण लोप, सैद्धांतिक, क्षतिपूरक, तथा सही राशि व पक्ष से गलत खाते में खतौनी।" } },
    { code: "ACC-6-3", name: { en: "Rectification and Suspense Account", hi: "सुधार और उचंत खाता" },
      notes: {
        en: "One-sided errors (found before closing) are corrected by an explanatory note or through the suspense account; two-sided errors need a rectifying journal entry.\n\nIf the trial balance does not agree, the difference is temporarily placed in a Suspense Account. As one-sided errors are located and rectified through it, the suspense account closes automatically.",
        hi: "एकपक्षीय अशुद्धियाँ (समापन से पहले मिलने पर) टिप्पणी या उचंत खाते से सुधारी जाती हैं; द्विपक्षीय अशुद्धियों के लिए सुधार जर्नल प्रविष्टि चाहिए।\n\nतलपट न मिलने पर अंतर अस्थायी रूप से उचंत खाते में रखा जाता है। जैसे-जैसे एकपक्षीय अशुद्धियाँ मिलकर उसके माध्यम से सुधरती हैं, उचंत खाता स्वतः बंद हो जाता है।" } }
  ]}
);
window.SL_DATA.questions.push(
  /* ---- Chapter 4 ---- */
  { id:"ACC-Q021", board:"CBSE", klass:"11", subject:"ACC", chapter:4, topic:"ACC-4-1", type:"mcq", diff:"medium",
    q:{en:"Cash deposited into the bank is recorded in a double-column cash book as:", hi:"बैंक में नकद जमा करना दो स्तंभीय रोकड़ बही में दर्ज होता है:"},
    opts:{en:["A contra entry on both sides","Only on the debit side","Only in the journal proper","In the purchases book"],
          hi:["दोनों पक्षों में विपरीत प्रविष्टि","केवल नामे पक्ष में","केवल जर्नल प्रॉपर में","क्रय बही में"]},
    correct:"A", exp:{en:"Cash-bank transactions affect both columns, so they are contra entries marked 'C' on both sides.", hi:"नकद-बैंक लेन-देन दोनों स्तंभों को प्रभावित करते हैं, इसलिए दोनों पक्षों में 'C' चिह्नित विपरीत प्रविष्टि होती है।"},
    tags:["theory","exam-important"], source:"NCERT Ch 4", status:"published" },
  { id:"ACC-Q022", board:"CBSE", klass:"11", subject:"ACC", chapter:4, topic:"ACC-4-1", type:"mcq", diff:"easy",
    q:{en:"The petty cash book usually works under which system?", hi:"खुदरा रोकड़ बही सामान्यतः किस प्रणाली पर चलती है?"},
    opts:{en:["Accrual system","Imprest system","Mercantile system","Single entry system"], hi:["उपार्जन प्रणाली","अग्रदाय (इम्प्रेस्ट) प्रणाली","व्यापारिक प्रणाली","एकल प्रविष्टि प्रणाली"]},
    correct:"B", exp:{en:"Under the imprest system the petty cashier gets a fixed advance, spends it, and is reimbursed the exact amount spent.", hi:"अग्रदाय प्रणाली में खुदरा रोकड़िये को निश्चित अग्रिम मिलता है, वह खर्च करता है और खर्च की गई राशि की भरपाई होती है।"},
    tags:["theory"], source:"NCERT Ch 4", status:"published" },
  { id:"ACC-Q023", board:"CBSE", klass:"11", subject:"ACC", chapter:4, topic:"ACC-4-2", type:"mcq", diff:"medium",
    q:{en:"Which transaction is recorded in the Purchases Book?", hi:"कौन-सा लेन-देन क्रय बही में दर्ज होता है?"},
    opts:{en:["Cash purchase of goods","Credit purchase of goods","Credit purchase of machinery","Goods returned to supplier"],
          hi:["माल का नकद क्रय","माल का उधार क्रय","मशीन का उधार क्रय","आपूर्तिकर्ता को माल वापसी"]},
    correct:"B", exp:{en:"The purchases book records only credit purchases of goods. Cash purchases go to the cash book; asset purchases to the journal proper.", hi:"क्रय बही में केवल माल का उधार क्रय दर्ज होता है। नकद क्रय रोकड़ बही में; संपत्ति क्रय जर्नल प्रॉपर में।"},
    tags:["theory","exam-important"], source:"NCERT Ch 4", status:"published" },
  { id:"ACC-Q024", board:"CBSE", klass:"11", subject:"ACC", chapter:4, topic:"ACC-4-2", type:"short", diff:"medium",
    q:{en:"The document sent to a supplier when goods are returned is a ____ note.", hi:"माल लौटाने पर आपूर्तिकर्ता को भेजा जाने वाला प्रलेख ____ नोट कहलाता है।"},
    correct:"debit|नामे|debit note", exp:{en:"A debit note tells the supplier their account is debited for the returned goods; the supplier issues a credit note in reply.", hi:"नामे नोट आपूर्तिकर्ता को बताता है कि लौटाए माल हेतु उसका खाता नामे किया गया; उत्तर में आपूर्तिकर्ता जमा नोट भेजता है।"},
    tags:["terminology"], source:"NCERT Ch 4", status:"published" },
  { id:"ACC-Q025", board:"CBSE", klass:"11", subject:"ACC", chapter:4, topic:"ACC-4-3", type:"mcq", diff:"medium",
    q:{en:"Credit purchase of furniture (not for resale) is recorded in the:", hi:"फर्नीचर का उधार क्रय (पुनर्विक्रय हेतु नहीं) दर्ज होता है:"},
    opts:{en:["Purchases book","Cash book","Journal proper","Sales book"], hi:["क्रय बही","रोकड़ बही","जर्नल प्रॉपर","विक्रय बही"]},
    correct:"C", exp:{en:"The purchases book is only for goods. A credit purchase of an asset goes to the journal proper.", hi:"क्रय बही केवल माल के लिए है। संपत्ति का उधार क्रय जर्नल प्रॉपर में दर्ज होता है।"},
    tags:["theory"], source:"NCERT Ch 4", status:"published" },

  /* ---- Chapter 5 ---- */
  { id:"ACC-Q026", board:"CBSE", klass:"11", subject:"ACC", chapter:5, topic:"ACC-5-1", type:"mcq", diff:"easy",
    q:{en:"A Bank Reconciliation Statement is prepared to:", hi:"बैंक समाधान विवरण बनाया जाता है:"},
    opts:{en:["Find the cash in hand","Explain the difference between cash book and passbook bank balances","Calculate profit","Close the bank account"],
          hi:["हाथ में नकद ज्ञात करने हेतु","रोकड़ बही व पासबुक के बैंक शेष के अंतर की व्याख्या हेतु","लाभ ज्ञात करने हेतु","बैंक खाता बंद करने हेतु"]},
    correct:"B", exp:{en:"The BRS reconciles the bank balance per cash book with the balance per passbook on a given date.", hi:"BRS किसी तिथि को रोकड़ बही और पासबुक के बैंक शेष का मिलान करता है।"},
    tags:["theory","exam-important"], source:"NCERT Ch 5", status:"published" },
  { id:"ACC-Q027", board:"CBSE", klass:"11", subject:"ACC", chapter:5, topic:"ACC-5-1", type:"mcq", diff:"medium",
    q:{en:"A cheque issued but not yet presented for payment causes the passbook balance to be:", hi:"जारी किया गया पर भुगतान हेतु प्रस्तुत न हुआ चेक पासबुक शेष को बनाता है:"},
    opts:{en:["Lower than cash book","Higher than cash book","Equal to cash book","Zero"], hi:["रोकड़ बही से कम","रोकड़ बही से अधिक","रोकड़ बही के बराबर","शून्य"]},
    correct:"B", exp:{en:"The cash book already reduced the balance, but the bank has not paid yet — so the passbook shows a higher balance.", hi:"रोकड़ बही में शेष पहले ही घट चुका, पर बैंक ने भुगतान नहीं किया — इसलिए पासबुक में शेष अधिक दिखता है।"},
    tags:["theory","exam-important"], source:"NCERT Ch 5", status:"published" },
  { id:"ACC-Q028", board:"CBSE", klass:"11", subject:"ACC", chapter:5, topic:"ACC-5-2", type:"tf", diff:"medium",
    q:{en:"A credit balance in the cash book (bank column) means a bank overdraft.", hi:"रोकड़ बही (बैंक स्तंभ) में जमा शेष का अर्थ बैंक अधिविकर्ष (ओवरड्राफ्ट) है।"},
    correct:"TRUE", exp:{en:"Normally the bank column has a debit (favourable) balance; a credit balance means the business owes the bank — an overdraft.", hi:"सामान्यतः बैंक स्तंभ में नामे (अनुकूल) शेष होता है; जमा शेष का अर्थ है व्यवसाय बैंक का देनदार — ओवरड्राफ्ट।"},
    tags:["theory"], source:"NCERT Ch 5", status:"published" },
  { id:"ACC-Q029", board:"CBSE", klass:"11", subject:"ACC", chapter:5, topic:"ACC-5-2", type:"mcq", diff:"hard",
    q:{en:"Cash book shows ₹10,000 (Dr.). Cheques of ₹3,000 issued but not presented; cheques of ₹2,000 deposited but not collected. Passbook balance = ?", hi:"रोकड़ बही ₹10,000 (नामे)। ₹3,000 के जारी चेक अप्रस्तुत; ₹2,000 के जमा चेक अवसूलित। पासबुक शेष = ?"},
    opts:{en:["₹9,000","₹11,000","₹15,000","₹5,000"], hi:["₹9,000","₹11,000","₹15,000","₹5,000"]},
    correct:"B", exp:{en:"10,000 + 3,000 (not presented) − 2,000 (not collected) = ₹11,000.", hi:"10,000 + 3,000 (अप्रस्तुत) − 2,000 (अवसूलित) = ₹11,000।"},
    tags:["numerical","exam-important"], source:"NCERT Ch 5, adapted", status:"published" },

  /* ---- Chapter 6 ---- */
  { id:"ACC-Q030", board:"CBSE", klass:"11", subject:"ACC", chapter:6, topic:"ACC-6-1", type:"mcq", diff:"easy",
    q:{en:"A trial balance is prepared mainly to check:", hi:"तलपट मुख्यतः किसकी जाँच हेतु बनाया जाता है?"},
    opts:{en:["Profit of the year","Arithmetical accuracy of the books","Cash in hand","Value of assets"],
          hi:["वर्ष का लाभ","पुस्तकों की अंकगणितीय शुद्धता","हाथ में नकद","संपत्तियों का मूल्य"]},
    correct:"B", exp:{en:"Equal debit and credit totals indicate arithmetical accuracy — though some errors can still remain hidden.", hi:"नामे-जमा योगों की बराबरी अंकगणितीय शुद्धता दर्शाती है — फिर भी कुछ अशुद्धियाँ छिपी रह सकती हैं।"},
    tags:["theory","exam-important"], source:"NCERT Ch 6", status:"published" },
  { id:"ACC-Q031", board:"CBSE", klass:"11", subject:"ACC", chapter:6, topic:"ACC-6-1", type:"mcq", diff:"medium",
    q:{en:"Which balance appears in the CREDIT column of a trial balance?", hi:"तलपट के जमा स्तंभ में कौन-सा शेष आता है?"},
    opts:{en:["Drawings","Wages","Capital","Machinery"], hi:["आहरण","मज़दूरी","पूंजी","मशीनरी"]},
    correct:"C", exp:{en:"Capital, liabilities, revenues and gains show credit balances; assets, expenses and drawings show debit balances.", hi:"पूंजी, दायित्व, आगम व लाभ जमा शेष दिखाते हैं; संपत्तियाँ, व्यय व आहरण नामे शेष।"},
    tags:["theory"], source:"NCERT Ch 6", status:"published" },
  { id:"ACC-Q032", board:"CBSE", klass:"11", subject:"ACC", chapter:6, topic:"ACC-6-2", type:"mcq", diff:"medium",
    q:{en:"Treating the purchase of machinery as an ordinary expense is an error of:", hi:"मशीन के क्रय को साधारण व्यय मानना किस प्रकार की अशुद्धि है?"},
    opts:{en:["Omission","Commission","Principle","Compensating"], hi:["लोप","कार्य/लेखन","सैद्धांतिक","क्षतिपूरक"]},
    correct:"C", exp:{en:"Capital expenditure recorded as revenue expenditure violates accounting principles — an error of principle. It does not affect trial balance agreement.", hi:"पूंजीगत व्यय को आगम व्यय मानना सिद्धांतों का उल्लंघन है — सैद्धांतिक अशुद्धि। यह तलपट की बराबरी को प्रभावित नहीं करती।"},
    tags:["theory","exam-important"], source:"NCERT Ch 6", status:"published" },
  { id:"ACC-Q033", board:"CBSE", klass:"11", subject:"ACC", chapter:6, topic:"ACC-6-2", type:"tf", diff:"medium",
    q:{en:"If the trial balance agrees, the books are certainly free from all errors.", hi:"यदि तलपट मिल जाए तो पुस्तकें निश्चित रूप से सभी अशुद्धियों से मुक्त हैं।"},
    correct:"FALSE", exp:{en:"Errors of complete omission, principle, and compensating errors do not disturb the trial balance, so it can agree despite errors.", hi:"पूर्ण लोप, सैद्धांतिक व क्षतिपूरक अशुद्धियाँ तलपट को प्रभावित नहीं करतीं, इसलिए अशुद्धियों के बावजूद तलपट मिल सकता है।"},
    tags:["theory","exam-important"], source:"NCERT Ch 6", status:"published" },
  { id:"ACC-Q034", board:"CBSE", klass:"11", subject:"ACC", chapter:6, topic:"ACC-6-3", type:"mcq", diff:"medium",
    q:{en:"When the trial balance does not agree, the difference is temporarily transferred to:", hi:"तलपट न मिलने पर अंतर अस्थायी रूप से किस खाते में रखा जाता है?"},
    opts:{en:["Capital account","Suspense account","Drawings account","Profit and loss account"], hi:["पूंजी खाता","उचंत खाता","आहरण खाता","लाभ-हानि खाता"]},
    correct:"B", exp:{en:"The suspense account temporarily holds the difference until one-sided errors are located and rectified.", hi:"उचंत खाता एकपक्षीय अशुद्धियाँ मिलने और सुधरने तक अंतर को अस्थायी रूप से रखता है।"},
    tags:["theory"], source:"NCERT Ch 6", status:"published" }
);
})();
(function(){
var acc = window.SL_DATA.subjects.find(function(s){return s.code==="ACC";});
acc.chapters.push(
  { no: 7, name: { en: "Depreciation, Provisions and Reserves", hi: "ह्रास, आयोजन और संचय" }, topics: [
    { code: "ACC-7-1", name: { en: "Depreciation: Meaning and Causes", hi: "ह्रास: अर्थ और कारण" }, exam: true,
      notes: {
        en: "Depreciation is the gradual, permanent decrease in the value of a fixed asset due to use, passage of time or obsolescence. It is a non-cash expense charged to spread the asset's cost over its useful life (matching concept).\n\nCauses: wear and tear, passage of time, obsolescence, depletion, accident.\n\nFactors for calculation: cost of the asset, estimated useful life, and estimated scrap (residual) value.",
        hi: "ह्रास उपयोग, समय बीतने या अप्रचलन के कारण स्थायी संपत्ति के मूल्य में क्रमिक, स्थायी कमी है। यह गैर-नकद व्यय है जो संपत्ति की लागत को उसके उपयोगी जीवन पर बाँटता है (मिलान अवधारणा)।\n\nकारण: टूट-फूट, समय बीतना, अप्रचलन, क्षय, दुर्घटना।\n\nगणना के घटक: संपत्ति की लागत, अनुमानित उपयोगी जीवन, अनुमानित अवशिष्ट मूल्य।" } },
    { code: "ACC-7-2", name: { en: "Straight Line vs Written Down Value Method", hi: "सीधी रेखा बनाम क्रमागत ह्रास विधि" }, exam: true,
      notes: {
        en: "Straight Line Method (SLM): equal depreciation each year = (Cost − Scrap value) ÷ Useful life. Simple; asset can reach zero; suits assets like patents, leases.\n\nWritten Down Value (WDV): fixed % on the reducing book value; depreciation is higher in early years and never reaches zero. Suits machinery and vehicles; total charge (depreciation + repairs) stays more even; accepted by income tax law.\n\nExample: Machine ₹1,00,000, life 10 yrs, scrap ₹10,000 → SLM = (1,00,000 − 10,000)/10 = ₹9,000 per year.",
        hi: "सीधी रेखा विधि (SLM): प्रति वर्ष समान ह्रास = (लागत − अवशिष्ट मूल्य) ÷ उपयोगी जीवन। सरल; संपत्ति शून्य तक पहुँच सकती है; पेटेंट, पट्टे जैसी संपत्तियों हेतु उपयुक्त।\n\nक्रमागत ह्रास विधि (WDV): घटते पुस्तक मूल्य पर निश्चित %; प्रारंभिक वर्षों में ह्रास अधिक, कभी शून्य नहीं। मशीन, वाहनों हेतु उपयुक्त; कुल भार (ह्रास + मरम्मत) समान रहता है; आयकर मान्य।\n\nउदाहरण: मशीन ₹1,00,000, जीवन 10 वर्ष, अवशिष्ट ₹10,000 → SLM = (1,00,000 − 10,000)/10 = ₹9,000 प्रति वर्ष।" } },
    { code: "ACC-7-3", name: { en: "Provisions and Reserves", hi: "आयोजन और संचय" }, exam: true,
      notes: {
        en: "Provision — an amount set aside for a known liability or expected loss whose amount is uncertain (e.g. provision for doubtful debts, for repairs). Charged against profit (debited to P&L) even if there is a loss.\n\nReserve — an appropriation of profit kept to strengthen the financial position (e.g. general reserve). Created only when there is profit.\n\nTypes: revenue vs capital reserve; general vs specific; secret reserve. Provision is a charge; reserve is an appropriation.",
        hi: "आयोजन (Provision) — किसी ज्ञात दायित्व या संभावित हानि हेतु अलग रखी राशि जिसकी मात्रा अनिश्चित है (जैसे संदिग्ध ऋण आयोजन, मरम्मत आयोजन)। लाभ पर भार — हानि होने पर भी बनाना अनिवार्य।\n\nसंचय (Reserve) — वित्तीय स्थिति सुदृढ़ करने हेतु लाभ का विनियोजन (जैसे सामान्य संचय)। केवल लाभ होने पर बनता है।\n\nप्रकार: आगम बनाम पूंजी संचय; सामान्य बनाम विशिष्ट; गुप्त संचय। आयोजन भार है; संचय विनियोजन।" } }
  ]},
  { no: 8, name: { en: "Financial Statements – I", hi: "वित्तीय विवरण – I" }, topics: [
    { code: "ACC-8-1", name: { en: "Capital vs Revenue; Stakeholders", hi: "पूंजीगत बनाम आगम; हितधारक" }, exam: true,
      notes: {
        en: "Capital expenditure — benefit lasts more than a year (purchase of machinery, building, installation costs). Shown in the balance sheet.\nRevenue expenditure — benefit consumed within the year (rent, wages, repairs). Shown in trading/P&L account.\nDeferred revenue expenditure — heavy revenue expense whose benefit spreads over years (large advertising campaign).\n\nWrong classification distorts both profit and financial position — an error of principle.",
        hi: "पूंजीगत व्यय — लाभ एक वर्ष से अधिक (मशीन, भवन का क्रय, स्थापना लागत)। चिट्ठे में दर्शाया जाता है।\nआगम व्यय — लाभ वर्ष के भीतर समाप्त (किराया, मज़दूरी, मरम्मत)। व्यापार/लाभ-हानि खाते में।\nआस्थगित आगम व्यय — भारी आगम व्यय जिसका लाभ कई वर्षों तक (बड़ा विज्ञापन अभियान)।\n\nगलत वर्गीकरण लाभ व वित्तीय स्थिति दोनों बिगाड़ता है — सैद्धांतिक अशुद्धि।" } },
    { code: "ACC-8-2", name: { en: "Trading Account and Gross Profit", hi: "व्यापार खाता और सकल लाभ" }, exam: true,
      notes: {
        en: "The trading account shows the result of buying and selling goods:\nGross Profit = Net Sales − Cost of Goods Sold.\nCOGS = Opening stock + Net purchases + Direct expenses − Closing stock.\n\nDirect expenses: wages, carriage/freight inwards, fuel and power, factory rent.\n\nExample: Sales ₹2,00,000; opening stock ₹20,000; purchases ₹1,20,000; wages ₹10,000; closing stock ₹30,000 → COGS = 20,000+1,20,000+10,000−30,000 = 1,20,000 → Gross profit = ₹80,000.",
        hi: "व्यापार खाता माल के क्रय-विक्रय का परिणाम दिखाता है:\nसकल लाभ = शुद्ध विक्रय − बेचे गए माल की लागत।\nCOGS = प्रारंभिक स्टॉक + शुद्ध क्रय + प्रत्यक्ष व्यय − अंतिम स्टॉक।\n\nप्रत्यक्ष व्यय: मज़दूरी, आवक भाड़ा, ईंधन व शक्ति, कारखाना किराया।\n\nउदाहरण: विक्रय ₹2,00,000; प्रारंभिक स्टॉक ₹20,000; क्रय ₹1,20,000; मज़दूरी ₹10,000; अंतिम स्टॉक ₹30,000 → COGS = 1,20,000 → सकल लाभ = ₹80,000।" } },
    { code: "ACC-8-3", name: { en: "Profit & Loss Account and Balance Sheet", hi: "लाभ-हानि खाता और चिट्ठा" }, exam: true,
      notes: {
        en: "The P&L account starts with gross profit, adds indirect incomes, deducts indirect expenses (salaries, rent, insurance, depreciation, carriage outwards) → Net Profit, which is added to capital.\n\nThe balance sheet is a statement (not an account) of assets and liabilities on a date. Marshalling: order of liquidity (cash first) or order of permanence (fixed assets first). Assets = Liabilities + Capital must hold.",
        hi: "लाभ-हानि खाता सकल लाभ से शुरू होता है, अप्रत्यक्ष आय जोड़ता है, अप्रत्यक्ष व्यय घटाता है (वेतन, किराया, बीमा, ह्रास, जावक भाड़ा) → शुद्ध लाभ, जो पूंजी में जुड़ता है।\n\nचिट्ठा किसी तिथि की संपत्तियों व दायित्वों का विवरण (खाता नहीं) है। क्रमबद्धता: तरलता क्रम (नकद पहले) या स्थायित्व क्रम (स्थायी संपत्ति पहले)। संपत्तियाँ = दायित्व + पूंजी अनिवार्यतः संतुलित।" } }
  ]},
  { no: 9, name: { en: "Financial Statements – II (Adjustments)", hi: "वित्तीय विवरण – II (समायोजन)" }, topics: [
    { code: "ACC-9-1", name: { en: "Need for Adjustments; Closing Stock; Outstanding & Prepaid", hi: "समायोजन की आवश्यकता; अंतिम स्टॉक; बकाया व पूर्वदत्त" }, exam: true,
      notes: {
        en: "Adjustments ensure the accrual/matching concepts — all items of the current year, and only of the current year, enter the statements.\n\n• Closing stock: credited to trading a/c and shown as an asset.\n• Outstanding expense (due but unpaid): add to the expense, show as a liability.\n• Prepaid expense (paid in advance): deduct from the expense, show as an asset.\n• Accrued income: add to income, show as an asset. Income received in advance: deduct, show as a liability.\n\nEvery adjustment appears at TWO places in the final accounts.",
        hi: "समायोजन उपार्जन/मिलान अवधारणाओं की पूर्ति करते हैं — चालू वर्ष की सभी मदें, और केवल चालू वर्ष की, विवरणों में आएँ।\n\n• अंतिम स्टॉक: व्यापार खाते में जमा और संपत्ति के रूप में।\n• बकाया व्यय (देय पर अदत्त): व्यय में जोड़ें, दायित्व दिखाएँ।\n• पूर्वदत्त व्यय (अग्रिम भुगतान): व्यय से घटाएँ, संपत्ति दिखाएँ।\n• उपार्जित आय: आय में जोड़ें, संपत्ति दिखाएँ। अग्रिम प्राप्त आय: घटाएँ, दायित्व दिखाएँ।\n\nहर समायोजन अंतिम खातों में दो स्थानों पर आता है।" } },
    { code: "ACC-9-2", name: { en: "Depreciation, Bad Debts and Provisions in Final Accounts", hi: "अंतिम खातों में ह्रास, अशोध्य ऋण व आयोजन" }, exam: true,
      notes: {
        en: "• Depreciation: debit P&L, deduct from the asset in the balance sheet.\n• Bad debts: debit P&L, deduct from debtors.\n• Provision for doubtful debts: created as a % of good debtors (after further bad debts); debited to P&L, deducted from debtors.\n• Interest on capital: expense in P&L, add to capital. Interest on drawings: income in P&L, deduct from capital.\n\nSequence on debtors: Debtors − further bad debts − provision for doubtful debts − provision for discount on debtors.",
        hi: "• ह्रास: लाभ-हानि खाते में नामे, चिट्ठे में संपत्ति से घटाएँ।\n• अशोध्य ऋण: लाभ-हानि नामे, देनदारों से घटाएँ।\n• संदिग्ध ऋण आयोजन: शुद्ध देनदारों पर % से (अतिरिक्त अशोध्य ऋण के बाद); लाभ-हानि नामे, देनदारों से घटाएँ।\n• पूंजी पर ब्याज: लाभ-हानि में व्यय, पूंजी में जोड़ें। आहरण पर ब्याज: लाभ-हानि में आय, पूंजी से घटाएँ।\n\nदेनदारों पर क्रम: देनदार − अतिरिक्त अशोध्य ऋण − संदिग्ध ऋण आयोजन − छूट आयोजन।" } }
  ]}
);
window.SL_DATA.questions.push(
  /* ---- Chapter 7 ---- */
  { id:"ACC-Q035", board:"CBSE", klass:"11", subject:"ACC", chapter:7, topic:"ACC-7-1", type:"mcq", diff:"easy",
    q:{en:"Depreciation is charged on:", hi:"ह्रास किस पर लगाया जाता है?"},
    opts:{en:["Current assets","Fixed assets","Liabilities","Capital"], hi:["चालू संपत्तियाँ","स्थायी संपत्तियाँ","दायित्व","पूंजी"]},
    correct:"B", exp:{en:"Depreciation applies to fixed (tangible) assets like machinery and buildings that lose value through use and time.", hi:"ह्रास मशीन, भवन जैसी स्थायी (मूर्त) संपत्तियों पर लगता है जो उपयोग व समय से मूल्य खोती हैं।"},
    tags:["theory"], source:"NCERT Ch 7", status:"published" },
  { id:"ACC-Q036", board:"CBSE", klass:"11", subject:"ACC", chapter:7, topic:"ACC-7-2", type:"mcq", diff:"medium",
    q:{en:"Machine cost ₹1,00,000, scrap value ₹10,000, life 10 years. Annual depreciation under SLM = ?", hi:"मशीन लागत ₹1,00,000, अवशिष्ट मूल्य ₹10,000, जीवन 10 वर्ष। SLM से वार्षिक ह्रास = ?"},
    opts:{en:["₹10,000","₹9,000","₹11,000","₹90,000"], hi:["₹10,000","₹9,000","₹11,000","₹90,000"]},
    correct:"B", exp:{en:"SLM = (Cost − Scrap) ÷ Life = (1,00,000 − 10,000) ÷ 10 = ₹9,000 per year.", hi:"SLM = (लागत − अवशिष्ट) ÷ जीवन = (1,00,000 − 10,000) ÷ 10 = ₹9,000 प्रति वर्ष।"},
    tags:["numerical","exam-important"], source:"NCERT Ch 7", status:"published" },
  { id:"ACC-Q037", board:"CBSE", klass:"11", subject:"ACC", chapter:7, topic:"ACC-7-2", type:"mcq", diff:"hard",
    q:{en:"Machine ₹50,000, depreciation 10% p.a. by WDV. Depreciation for the SECOND year = ?", hi:"मशीन ₹50,000, WDV से 10% वार्षिक ह्रास। दूसरे वर्ष का ह्रास = ?"},
    opts:{en:["₹5,000","₹4,500","₹4,000","₹5,500"], hi:["₹5,000","₹4,500","₹4,000","₹5,500"]},
    correct:"B", exp:{en:"Year 1: 10% of 50,000 = 5,000. Book value = 45,000. Year 2: 10% of 45,000 = ₹4,500.", hi:"वर्ष 1: 50,000 का 10% = 5,000। पुस्तक मूल्य = 45,000। वर्ष 2: 45,000 का 10% = ₹4,500।"},
    tags:["numerical","exam-important"], source:"NCERT Ch 7", status:"published" },
  { id:"ACC-Q038", board:"CBSE", klass:"11", subject:"ACC", chapter:7, topic:"ACC-7-3", type:"mcq", diff:"medium",
    q:{en:"Which statement about provisions and reserves is correct?", hi:"आयोजन व संचय के विषय में कौन-सा कथन सही है?"},
    opts:{en:["Both are appropriations of profit","A provision is a charge; a reserve is an appropriation","A reserve must be created even in loss","A provision is created only in profit years"],
          hi:["दोनों लाभ के विनियोजन हैं","आयोजन भार है; संचय विनियोजन","संचय हानि में भी बनाना अनिवार्य","आयोजन केवल लाभ वर्ष में बनता है"]},
    correct:"B", exp:{en:"A provision is charged against profit (made even in loss); a reserve is an appropriation made only out of profit.", hi:"आयोजन लाभ पर भार है (हानि में भी अनिवार्य); संचय केवल लाभ में से किया गया विनियोजन है।"},
    tags:["theory","exam-important"], source:"NCERT Ch 7", status:"published" },
  { id:"ACC-Q039", board:"CBSE", klass:"11", subject:"ACC", chapter:7, topic:"ACC-7-1", type:"tf", diff:"easy",
    q:{en:"Depreciation is a non-cash expense.", hi:"ह्रास एक गैर-नकद व्यय है।"},
    correct:"TRUE", exp:{en:"No cash leaves the business when depreciation is charged — it only allocates the asset's cost over its life.", hi:"ह्रास लगाने पर कोई नकद बाहर नहीं जाता — यह केवल संपत्ति की लागत को जीवन पर बाँटता है।"},
    tags:["theory"], source:"NCERT Ch 7", status:"published" },

  /* ---- Chapter 8 ---- */
  { id:"ACC-Q040", board:"CBSE", klass:"11", subject:"ACC", chapter:8, topic:"ACC-8-1", type:"mcq", diff:"medium",
    q:{en:"Which of the following is a capital expenditure?", hi:"निम्न में से पूंजीगत व्यय कौन-सा है?"},
    opts:{en:["Monthly rent of shop","Purchase of delivery van","Salaries of staff","Electricity bill"],
          hi:["दुकान का मासिक किराया","डिलीवरी वैन का क्रय","कर्मचारियों का वेतन","बिजली बिल"]},
    correct:"B", exp:{en:"A delivery van benefits the business for years — capital expenditure shown in the balance sheet. The rest are revenue expenses.", hi:"डिलीवरी वैन का लाभ वर्षों तक मिलता है — पूंजीगत व्यय, चिट्ठे में। शेष आगम व्यय हैं।"},
    tags:["theory","exam-important"], source:"NCERT Ch 8", status:"published" },
  { id:"ACC-Q041", board:"CBSE", klass:"11", subject:"ACC", chapter:8, topic:"ACC-8-2", type:"mcq", diff:"medium",
    q:{en:"Gross profit equals:", hi:"सकल लाभ बराबर है:"},
    opts:{en:["Net sales − Cost of goods sold","Total income − Total expenses","Sales − All expenses","Capital − Drawings"],
          hi:["शुद्ध विक्रय − बेचे गए माल की लागत","कुल आय − कुल व्यय","विक्रय − सभी व्यय","पूंजी − आहरण"]},
    correct:"A", exp:{en:"Gross profit is the trading result: Net sales minus cost of goods sold. Net profit comes later after indirect items.", hi:"सकल लाभ व्यापारिक परिणाम है: शुद्ध विक्रय − बेचे गए माल की लागत। शुद्ध लाभ अप्रत्यक्ष मदों के बाद आता है।"},
    tags:["theory","exam-important"], source:"NCERT Ch 8", status:"published" },
  { id:"ACC-Q042", board:"CBSE", klass:"11", subject:"ACC", chapter:8, topic:"ACC-8-2", type:"mcq", diff:"hard",
    q:{en:"Opening stock ₹20,000; Purchases ₹1,20,000; Wages ₹10,000; Closing stock ₹30,000; Sales ₹2,00,000. Gross profit = ?", hi:"प्रारंभिक स्टॉक ₹20,000; क्रय ₹1,20,000; मज़दूरी ₹10,000; अंतिम स्टॉक ₹30,000; विक्रय ₹2,00,000। सकल लाभ = ?"},
    opts:{en:["₹80,000","₹70,000","₹90,000","₹60,000"], hi:["₹80,000","₹70,000","₹90,000","₹60,000"]},
    correct:"A", exp:{en:"COGS = 20,000 + 1,20,000 + 10,000 − 30,000 = 1,20,000. GP = 2,00,000 − 1,20,000 = ₹80,000.", hi:"COGS = 20,000 + 1,20,000 + 10,000 − 30,000 = 1,20,000। सकल लाभ = 2,00,000 − 1,20,000 = ₹80,000।"},
    tags:["numerical","exam-important"], source:"NCERT Ch 8", status:"published" },
  { id:"ACC-Q043", board:"CBSE", klass:"11", subject:"ACC", chapter:8, topic:"ACC-8-3", type:"mcq", diff:"easy",
    q:{en:"The balance sheet is:", hi:"चिट्ठा (बैलेंस शीट) है:"},
    opts:{en:["An account","A statement of assets and liabilities on a date","A record of cash only","A summary of sales"],
          hi:["एक खाता","किसी तिथि की संपत्तियों व दायित्वों का विवरण","केवल नकद का अभिलेख","विक्रय का सारांश"]},
    correct:"B", exp:{en:"It is a statement (not an account) showing financial position on a particular date — no debit or credit sides.", hi:"यह खाता नहीं, विवरण है जो किसी तिथि की वित्तीय स्थिति दर्शाता है — इसमें नामे-जमा पक्ष नहीं होते।"},
    tags:["theory"], source:"NCERT Ch 8", status:"published" },
  { id:"ACC-Q044", board:"CBSE", klass:"11", subject:"ACC", chapter:8, topic:"ACC-8-2", type:"short", diff:"medium",
    q:{en:"Carriage paid on goods brought into the business is called carriage ____ (a direct expense).", hi:"व्यवसाय में माल लाने पर चुकाया भाड़ा ____ भाड़ा कहलाता है (प्रत्यक्ष व्यय)।"},
    correct:"inwards|inward|आवक", exp:{en:"Carriage inwards is a direct expense debited to the trading account; carriage outwards is indirect (P&L).", hi:"आवक भाड़ा प्रत्यक्ष व्यय है — व्यापार खाते में नामे; जावक भाड़ा अप्रत्यक्ष (लाभ-हानि खाता)।"},
    tags:["terminology"], source:"NCERT Ch 8", status:"published" },

  /* ---- Chapter 9 ---- */
  { id:"ACC-Q045", board:"CBSE", klass:"11", subject:"ACC", chapter:9, topic:"ACC-9-1", type:"mcq", diff:"medium",
    q:{en:"Outstanding salary at year end is shown as:", hi:"वर्षांत पर बकाया वेतन दर्शाया जाता है:"},
    opts:{en:["Added to salary in P&L and as a liability","Deducted from salary and as an asset","Only in the balance sheet","Ignored till paid"],
          hi:["लाभ-हानि में वेतन में जोड़कर तथा दायित्व के रूप में","वेतन से घटाकर तथा संपत्ति के रूप में","केवल चिट्ठे में","भुगतान तक उपेक्षित"]},
    correct:"A", exp:{en:"Outstanding expenses belong to the current year (accrual), so add to the expense and show as a current liability.", hi:"बकाया व्यय चालू वर्ष के हैं (उपार्जन), इसलिए व्यय में जोड़ें और चालू दायित्व दिखाएँ।"},
    tags:["theory","exam-important"], source:"NCERT Ch 9", status:"published" },
  { id:"ACC-Q046", board:"CBSE", klass:"11", subject:"ACC", chapter:9, topic:"ACC-9-1", type:"mcq", diff:"medium",
    q:{en:"Insurance premium ₹12,000 paid for the year ending 30 June, books closed 31 March. Prepaid amount = ?", hi:"₹12,000 बीमा प्रीमियम 30 जून को समाप्त वर्ष हेतु चुकाया, पुस्तकें 31 मार्च को बंद। पूर्वदत्त राशि = ?"},
    opts:{en:["₹3,000","₹9,000","₹12,000","₹4,000"], hi:["₹3,000","₹9,000","₹12,000","₹4,000"]},
    correct:"A", exp:{en:"April–June (3 months) falls in the next year: 12,000 × 3/12 = ₹3,000 prepaid (asset).", hi:"अप्रैल–जून (3 माह) अगले वर्ष के हैं: 12,000 × 3/12 = ₹3,000 पूर्वदत्त (संपत्ति)।"},
    tags:["numerical","exam-important"], source:"NCERT Ch 9, adapted", status:"published" },
  { id:"ACC-Q047", board:"CBSE", klass:"11", subject:"ACC", chapter:9, topic:"ACC-9-1", type:"tf", diff:"easy",
    q:{en:"Every adjustment appears at two places in the final accounts.", hi:"प्रत्येक समायोजन अंतिम खातों में दो स्थानों पर आता है।"},
    correct:"TRUE", exp:{en:"Because of the dual aspect — e.g. closing stock is credited to trading account AND shown as an asset.", hi:"द्विपक्ष के कारण — जैसे अंतिम स्टॉक व्यापार खाते में जमा और संपत्ति के रूप में भी दर्शाया जाता है।"},
    tags:["theory"], source:"NCERT Ch 9", status:"published" },
  { id:"ACC-Q048", board:"CBSE", klass:"11", subject:"ACC", chapter:9, topic:"ACC-9-2", type:"mcq", diff:"hard",
    q:{en:"Debtors ₹40,000; further bad debts ₹2,000; provision for doubtful debts 5%. Provision amount = ?", hi:"देनदार ₹40,000; अतिरिक्त अशोध्य ऋण ₹2,000; संदिग्ध ऋण आयोजन 5%। आयोजन राशि = ?"},
    opts:{en:["₹2,000","₹1,900","₹2,100","₹1,800"], hi:["₹2,000","₹1,900","₹2,100","₹1,800"]},
    correct:"B", exp:{en:"Provision is on good debtors: (40,000 − 2,000) × 5% = ₹1,900.", hi:"आयोजन शुद्ध देनदारों पर: (40,000 − 2,000) × 5% = ₹1,900।"},
    tags:["numerical","exam-important"], source:"NCERT Ch 9", status:"published" },
  { id:"ACC-Q049", board:"CBSE", klass:"11", subject:"ACC", chapter:9, topic:"ACC-9-2", type:"mcq", diff:"medium",
    q:{en:"Interest on drawings is:", hi:"आहरण पर ब्याज है:"},
    opts:{en:["An expense for the business","An income for the business","A liability","An asset"],
          hi:["व्यवसाय हेतु व्यय","व्यवसाय हेतु आय","एक दायित्व","एक संपत्ति"]},
    correct:"B", exp:{en:"The owner pays interest for withdrawing funds — income for the business (credited to P&L), deducted from capital.", hi:"धन निकालने पर स्वामी ब्याज देता है — व्यवसाय की आय (लाभ-हानि में जमा), पूंजी से घटाया जाता है।"},
    tags:["theory"], source:"NCERT Ch 9", status:"published" }
);
})();

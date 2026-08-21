/* SelfLearn — Class 11 Mathematics
   Rebuilt 2026-08-21: Chapter 1 (Sets) only, from scratch, matched to the
   simple Concept -> Example -> Try shape of the reference tutorial at
   C:\Users\Dell\Downloads\sets-functions-tutorial\index.html. Short
   sentences, one idea at a time, bilingual (English + Hinglish). Chapter 2
   was deleted along with the old Chapter 1 and is not yet rebuilt. */
window.SL_DATA = window.SL_DATA || {subjects:[], questions:[]};
(function(){
  function b(en,hi){ return {en:en,hi:hi}; }
  function worked(problem,steps,answer,note){
    return [{title:b("See it once","एक बार देखिए"),problem:b(problem.en,problem.hi),
      steps:steps.map(function(s){return {do:b(s[0],s[1]),why:b(s[2],s[3])};}),
      answer:b(answer.en,answer.hi), note: note?b(note.en,note.hi):undefined}];
  }
  function topic(code,name,notes,work,diagram){
    return {code:code,name:name,notes:notes,worked:work,diagram:diagram};
  }
  function question(id,ch,code,tier,q,opts,correct,exp){
    return {id:id,board:"CBSE",klass:11,subject:"MATH11",chapter:ch,topic:code,tier:tier,
      diff:tier<=2?"easy":(tier<=4?"medium":"hard"),type:"mcq",status:"published",
      source:"SelfLearn beginner practice",tags:[],q:q,opts:opts,correct:correct,exp:exp};
  }

  var sets=[

    topic("MTH11-1-0",
      b("0. Revise: Groups You Already Know","0. दोहराइए: जो समूह आप पहले से जानते हैं"),
      b(
        "You already sort numbers into groups. 1, 2, 3, 4 … are **natural numbers**. Add 0 and the negatives and you get **integers**. Add fractions like ½ and you get **rational numbers**. Add numbers like √2 and π and you get **real numbers**.\n\nEach group sits inside the next one.\n\n{{diagram:number-families}}\n\nEvery natural number is also an integer. Every integer is also a rational number. Every rational number is also a real number.\n\nIn Class 11, we give any such clearly-described group a name. We call it a **set**. This chapter builds that idea from here.",
        "आप numbers को पहले से groups में बाँटते हैं। 1, 2, 3, 4 … **natural numbers** हैं। इनमें 0 और negative numbers जोड़ने पर **integers** मिलते हैं। इनमें ½ जैसे fractions जोड़ने पर **rational numbers** मिलते हैं। इनमें √2 और π जैसे numbers जोड़ने पर **real numbers** मिलते हैं।\n\nहर group अगले group के अंदर है।\n\n{{diagram:number-families}}\n\nहर natural number एक integer भी है। हर integer एक rational number भी है। हर rational number एक real number भी है।\n\nClass 11 में, ऐसे किसी भी साफ़-साफ़ बताए गए group को एक नाम देते हैं। उसे **set** कहते हैं। यह chapter यहीं से शुरू होता है।"),
      worked(
        b("Which family does −3 belong to?","−3 किस family में है?"),
        [
          ["−3 is not in {1, 2, 3, …}.","−3, {1, 2, 3, …} में नहीं है।","Natural numbers start at 1, with no negatives.","Natural numbers 1 से शुरू होते हैं, negative नहीं होते।"],
          ["−3 is in {…, −2, −1, 0, 1, 2, …}.","−3, {…, −2, −1, 0, 1, 2, …} में है।","This is the integers, which include negatives.","यह integers हैं, जिनमें negatives भी शामिल हैं।"]
        ],
        b("−3 is an integer.","−3 एक integer है।"))),

    topic("MTH11-1-1",
      b("1. What is a Set?","1. Set क्या है?"),
      b(
        "Your teacher picks five students for the school kabaddi team.\n\n$$A=\\{Rahul, Suresh, Meena, Kiran, Asha\\}$$\n\nThis is a **set**. A set is simply a well-defined collection.\n\n‘Well-defined’ means anyone can check membership and get the same answer. For any name, you can say yes or no — is this person in A?\n\nIf Rahul is in A, we write $Rahul\\in A$. This means ‘Rahul belongs to A’.\n\nIf Vikas is not in A, we write $Vikas\\notin A$.\n\n‘Good players’ is not a set. People disagree on ‘good’. ‘Players taller than 150 cm’ is a set. You can measure and check.",
        "आपकी teacher school की kabaddi team के लिए पाँच students चुनती है।\n\n$$A=\\{Rahul, Suresh, Meena, Kiran, Asha\\}$$\n\nयह एक **set** है। Set बस एक well-defined collection है।\n\n‘Well-defined’ का मतलब है — कोई भी check करे तो एक ही जवाब मिले। किसी भी नाम के लिए, आप हाँ या ना बोल सकते हैं — क्या यह person A में है?\n\nअगर Rahul, A में है, तो लिखते हैं $Rahul\\in A$। इसका मतलब है ‘Rahul, A में है’।\n\nअगर Vikas, A में नहीं है, तो लिखते हैं $Vikas\\notin A$।\n\n‘अच्छे players’ set नहीं है। ‘अच्छे’ पर लोगों की राय अलग होती है। ‘150 cm से लम्बे players’ set है। इसे नाप कर check कर सकते हैं।"),
      worked(
        b("Is B = {tasty fruits} a set?","क्या B = {स्वादिष्ट फल} एक set है?"),
        [
          ["Ask: can everyone agree on ‘tasty’?","पूछिए: क्या ‘स्वादिष्ट’ पर सब सहमत होंगे?","Taste is a matter of opinion, not a fixed rule.","Taste opinion है, कोई fixed rule नहीं।"],
          ["No. B is not well-defined.","नहीं। B well-defined नहीं है।","There is no clear yes/no test for membership.","Membership का कोई साफ़ हाँ/ना test नहीं है।"]
        ],
        b("No, it is not a set.","नहीं, यह set नहीं है।"))),

    topic("MTH11-1-2",
      b("2. Representing Sets","2. Sets को लिखना"),
      b(
        "There are two ways to write the same set.\n\n**Roster form** lists every member, separated by commas.\n\n$$A=\\{1,2,3,4,5\\}$$\n\n**Set-builder form** gives a rule instead of a list.\n\n$$A=\\{x:x\\in\\mathbb{N},\\ x<6\\}$$\n\nRead it as: ‘all $x$ such that $x$ is a natural number and $x$ is less than 6’. The symbol $:$ means **such that**.\n\nUse roster form for a short list. Use set-builder form when the list is long or never ends.",
        "एक ही set को लिखने के दो तरीके हैं।\n\n**Roster form** में हर member को comma से अलग करके लिखते हैं।\n\n$$A=\\{1,2,3,4,5\\}$$\n\n**Set-builder form** में list की जगह एक rule देते हैं।\n\n$$A=\\{x:x\\in\\mathbb{N},\\ x<6\\}$$\n\nइसे पढ़िए: ‘वे सभी $x$ ऐसे कि $x$ एक natural number है और 6 से छोटा है।’ Symbol $:$ का मतलब **such that** है।\n\nछोटी list के लिए roster form इस्तेमाल कीजिए। लम्बी या कभी न ख़त्म होने वाली list के लिए set-builder form इस्तेमाल कीजिए।"),
      worked(
        b("Write {2, 4, 6, 8} in set-builder form.","{2, 4, 6, 8} को set-builder form में लिखिए।"),
        [
          ["Look at the pattern: even numbers, less than 10.","Pattern देखिए: even numbers, 10 से छोटे।","Every member fits this one rule.","हर member इस rule में fit होता है।"],
          ["Write $\\{x:x\\in\\mathbb{N},\\ x\\ is\\ even,\\ x<10\\}$.","लिखिए $\\{x:x\\in\\mathbb{N},\\ x\\ is\\ even,\\ x<10\\}$।","This rule produces exactly 2, 4, 6 and 8.","यह rule ठीक 2, 4, 6 और 8 देता है।"]
        ],
        b("{x : x ∈ N, x is even, x < 10}","{x : x ∈ N, x even है, x < 10}"))),

    topic("MTH11-1-3",
      b("3. Types of Sets","3. Sets के प्रकार"),
      b(
        "**Empty set**: no members at all. Example: days of the week that start with the letter Z. Write it as $\\emptyset$ or $\\{\\}$.\n\n**Singleton set**: exactly one member. Example: $\\{your\\ class\\ teacher\\}$.\n\n**Finite set**: you can finish counting it. Example: $\\{a,e,i,o,u\\}$ has 5 members.\n\n**Infinite set**: counting never finishes. Example: $\\{1,2,3,\\ldots\\}$.\n\n**Equal sets**: same members, any order. $\\{2,4,6\\}$ and $\\{6,4,2\\}$ are equal — order does not matter, and each member is written only once.",
        "**Empty set**: इसमें कोई member नहीं होता। उदाहरण: हफ़्ते के वे दिन जो Z अक्षर से शुरू होते हैं। इसे $\\emptyset$ या $\\{\\}$ लिखते हैं।\n\n**Singleton set**: इसमें ठीक एक member होता है। उदाहरण: $\\{your\\ class\\ teacher\\}$।\n\n**Finite set**: इसकी गिनती पूरी हो जाती है। उदाहरण: $\\{a,e,i,o,u\\}$ में 5 members हैं।\n\n**Infinite set**: इसकी गिनती कभी पूरी नहीं होती। उदाहरण: $\\{1,2,3,\\ldots\\}$।\n\n**Equal sets**: same members, चाहे किसी भी order में हों। $\\{2,4,6\\}$ और $\\{6,4,2\\}$ equal हैं — order मायने नहीं रखता, और हर member सिर्फ़ एक बार लिखा जाता है।"),
      worked(
        b("Are A = {5, 5, 6} and B = {6, 5} equal?","क्या A = {5, 5, 6} और B = {6, 5} equal हैं?"),
        [
          ["Repeats do not count twice, so A = {5, 6}.","दोहराव दो बार नहीं गिनते, इसलिए A = {5, 6}।","A set lists each member only once.","Set में हर member सिर्फ़ एक बार लिखा जाता है।"],
          ["{5, 6} and {6, 5} have the same members.","{5, 6} और {6, 5} के members same हैं।","Order does not matter in a set.","Set में order मायने नहीं रखता।"]
        ],
        b("Yes, A and B are equal.","हाँ, A और B equal हैं।"))),

    topic("MTH11-1-4",
      b("4. Subsets and Power Set","4. Subsets और Power Set"),
      b(
        "Your 5 best friends are a smaller group inside your whole class. In the same way, if every member of A is also in B, then A is a **subset** of B.\n\n$$\\{1,2\\}\\subseteq\\{1,2,3\\}$$\n\nThe **power set** of A is the collection of every possible subset of A, including the empty set and A itself.\n\n{{diagram:sets-powerset}}\n\nFor $A=\\{a,b\\}$, each member has two choices — go in, or stay out. Two members, two choices each, so $2\\times2=4$ subsets.\n\n$$P(A)=\\{\\emptyset,\\{a\\},\\{b\\},\\{a,b\\}\\}$$\n\nFor a set with $n$ members, the power set has $2^n$ members.",
        "आपके 5 सबसे अच्छे दोस्त, पूरी class के अंदर एक छोटा group हैं। उसी तरह, अगर A का हर member B में भी है, तो A, B का **subset** है।\n\n$$\\{1,2\\}\\subseteq\\{1,2,3\\}$$\n\nA का **power set**, A के हर possible subset का collection है, जिसमें empty set और A ख़ुद भी शामिल हैं।\n\n{{diagram:sets-powerset}}\n\n$A=\\{a,b\\}$ के लिए, हर member के पास दो choices हैं — अंदर जाना, या बाहर रहना। दो members, हर एक की दो choices, इसलिए $2\\times2=4$ subsets।\n\n$$P(A)=\\{\\emptyset,\\{a\\},\\{b\\},\\{a,b\\}\\}$$\n\n$n$ members वाले set का power set $2^n$ members का होता है।"),
      worked(
        b("How many subsets does {a, b, c} have?","{a, b, c} के कितने subsets हैं?"),
        [
          ["Each of the 3 members has 2 choices: in or out.","तीनों में से हर member की 2 choices हैं: in या out।","This is the same yes/no choice as before, one more time.","यह वही हाँ/ना choice है, एक बार और।"],
          ["Multiply: $2\\times2\\times2=8$.","गुणा कीजिए: $2\\times2\\times2=8$।","Three independent choices multiply together.","तीन independent choices गुणा होती हैं।"]
        ],
        b("8 subsets.","8 subsets।"))),

    topic("MTH11-1-5",
      b("5. Venn Diagrams and the Universal Set","5. Venn Diagram और Universal Set"),
      b(
        "A **Venn diagram** draws sets as circles. It turns a rule into a picture.\n\n{{diagram:sets-regions}}\n\nThe rectangle around the circles is the **universal set** $U$ — everything we are talking about right now. In your class, U could be ‘all students in the class’.\n\nIf A is ‘students in the sports team’, the **complement** of A is everyone in U who is *not* in A.\n\n$$A'=U-A$$\n\n{{diagram:sets-complement}}\n\nAlways decide U first. The complement depends on it.",
        "**Venn diagram** sets को circles की तरह बनाता है। यह एक rule को picture में बदल देता है।\n\n{{diagram:sets-regions}}\n\nCircles के चारों ओर का rectangle **universal set** $U$ है — यानी जिस भी चीज़ की अभी बात हो रही है। आपकी class में, U हो सकता है ‘class के सभी students’।\n\nअगर A ‘sports team में students’ है, तो A का **complement**, U के वे सभी लोग हैं जो A में *नहीं* हैं।\n\n$$A'=U-A$$\n\n{{diagram:sets-complement}}\n\nहमेशा पहले U तय कीजिए। Complement उसी पर निर्भर करता है।"),
      worked(
        b("U = {1,…,10}, A = {2,4,6,8,10}. Find A′.","U = {1,…,10}, A = {2,4,6,8,10}। A′ निकालिए।"),
        [
          ["List everything in U that is not in A.","U की उन सभी चीज़ों को लिखिए जो A में नहीं हैं।","A′ is everything left out of A, inside U.","A′ वह है जो A में नहीं, पर U में है।"],
          ["A′ = {1, 3, 5, 7, 9}.","A′ = {1, 3, 5, 7, 9}।","These are the odd numbers from 1 to 10.","ये 1 से 10 तक के odd numbers हैं।"]
        ],
        b("A′ = {1, 3, 5, 7, 9}","A′ = {1, 3, 5, 7, 9}"))),

    topic("MTH11-1-6",
      b("6. Operations on Sets","6. Sets पर Operations"),
      b(
        "Let A = students who play cricket, and B = students who play football.\n\n$$A=\\{1,2,3\\},\\quad B=\\{3,4,5\\}$$\n\n**Union** ($A\\cup B$): plays cricket **or** football, or both. List everyone once.\n\n{{diagram:sets-union}}\n\n$$A\\cup B=\\{1,2,3,4,5\\}$$\n\n**Intersection** ($A\\cap B$): plays **both** sports.\n\n{{diagram:sets-intersection}}\n\n$$A\\cap B=\\{3\\}$$\n\n**Difference** ($A-B$): plays cricket, **not** football.\n\n{{diagram:sets-difference}}\n\n$$A-B=\\{1,2\\}$$\n\nUnion means OR. Intersection means AND. In a picture, fill the shared middle part first.",
        "मान लीजिए A = cricket खेलने वाले students, और B = football खेलने वाले students।\n\n$$A=\\{1,2,3\\},\\quad B=\\{3,4,5\\}$$\n\n**Union** ($A\\cup B$): cricket **या** football, या दोनों खेलते हैं। हर student को एक बार लिखिए।\n\n{{diagram:sets-union}}\n\n$$A\\cup B=\\{1,2,3,4,5\\}$$\n\n**Intersection** ($A\\cap B$): **दोनों** खेल खेलते हैं।\n\n{{diagram:sets-intersection}}\n\n$$A\\cap B=\\{3\\}$$\n\n**Difference** ($A-B$): cricket खेलते हैं, football **नहीं**।\n\n{{diagram:sets-difference}}\n\n$$A-B=\\{1,2\\}$$\n\nUnion का मतलब OR है। Intersection का मतलब AND है। Picture में पहले बीच का shared part भरिए।"),
      worked(
        b("A = {1,2,3,4}, B = {3,4,5,6}. Find A∪B and A−B.","A = {1,2,3,4}, B = {3,4,5,6}। A∪B और A−B निकालिए।"),
        [
          ["A∪B lists everyone, without repeating 3 and 4.","A∪B में सबको लिखिए, पर 3 और 4 को दोहराइए मत।","3 and 4 are shared, so each is written once.","3 और 4 shared हैं, इसलिए हर एक सिर्फ़ एक बार।"],
          ["A∪B = {1,2,3,4,5,6}. A−B keeps only 1 and 2.","A∪B = {1,2,3,4,5,6}। A−B में सिर्फ़ 1 और 2 रहते हैं।","A−B removes anything A shares with B.","A−B, A और B का shared हिस्सा हटा देता है।"]
        ],
        b("A∪B = {1,2,3,4,5,6}, A−B = {1,2}","A∪B = {1,2,3,4,5,6}, A−B = {1,2}"))),

    topic("MTH11-1-7",
      b("7. Number of Elements in a Set","7. Set में Members की गिनती"),
      b(
        "25 students like cricket. 20 like football. 8 like both.\n\n{{diagram:sets-counting}}\n\nSimply adding 25 + 20 = 45 is wrong. The 8 who like both get counted twice — once in each group.\n\nSubtract the overlap once, to count every student only one time.\n\n$$n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$$\n\n$$25+20-8=37$$\n\n37 students like cricket or football. This formula is just a careful way to avoid counting anyone twice.",
        "25 students को cricket पसन्द है। 20 को football पसन्द है। 8 को दोनों पसन्द हैं।\n\n{{diagram:sets-counting}}\n\nसीधे 25 + 20 = 45 जोड़ना ग़लत है। जिन 8 को दोनों पसन्द हैं, वे दो बार गिने जाते हैं — हर group में एक बार।\n\nOverlap को एक बार घटाइए, ताकि हर student सिर्फ़ एक बार गिना जाए।\n\n$$n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$$\n\n$$25+20-8=37$$\n\n37 students को cricket या football पसन्द है। यह formula बस किसी को दो बार न गिनने का सावधान तरीका है।"),
      worked(
        b("18 like tea, 12 like coffee, 4 like both. How many like tea or coffee?","18 को tea, 12 को coffee, 4 को दोनों पसन्द हैं। Tea या coffee कितनों को पसन्द है?"),
        [
          ["Add 18 and 12 to get 30.","18 और 12 जोड़कर 30 पाइए।","Both totals include the 4 who like both.","दोनों totals में वे 4 लोग शामिल हैं जिन्हें दोनों पसन्द हैं।"],
          ["Subtract the overlap once: 30 − 4 = 26.","Overlap एक बार घटाइए: 30 − 4 = 26।","Now each person is counted exactly once.","अब हर व्यक्ति ठीक एक बार गिना गया है।"]
        ],
        b("26 people like tea or coffee.","26 लोगों को tea या coffee पसन्द है.")))
  ];

  window.SL_DATA.subjects = (window.SL_DATA.subjects||[]).filter(function(s){ return s.code!=="MATH11"; });

  window.SL_DATA.subjects.push({code:"MATH11",board:"CBSE",klass:11,icon:"📐",
    name:b("Mathematics — Class 11","गणित — कक्षा 11"),levelled:true,
    intro:b(
      "### A calm way to learn Class 11 Maths\n\nStart with the idea. Read one short example. Try the quick questions. Then move up only when the easy step feels clear.\n\nYou do not need to memorise a long definition before you understand it.",
      "### Class 11 Maths सीखने का शांत तरीका\n\nपहले विचार समझिए। एक छोटा example पढ़िए। Quick questions कीजिए। आसान step साफ़ लगे, तभी आगे बढ़िए।\n\nसमझने से पहले कोई लम्बी definition याद करने की ज़रूरत नहीं है।"),
    chapters:[
      {no:1,name:b("Sets","Sets — समुच्चय"),
        summary:b(
          "### Sets: what this chapter covers\n\nA set is any clearly-described group. You can list it, or write a rule for it. Learn empty, singleton, finite and infinite sets. Learn subsets and the power set. Use Venn diagrams to see union, intersection, difference and complement. When two groups overlap, subtract the overlap once.",
          "### Sets: इस chapter में क्या सीखेंगे\n\nSet कोई भी साफ़-साफ़ बताया हुआ group है। इसे list कर सकते हैं, या इसके लिए एक rule लिख सकते हैं। Empty, singleton, finite और infinite sets सीखिए। Subsets और power set सीखिए। Union, intersection, difference और complement को Venn diagram में देखिए। दो groups overlap करें, तो overlap एक बार घटाइए।"),
        checkpoint:b(
          "Getting most Warm-up and Standard questions right, across every topic in this chapter, means you are ready to move on. Scoring low? Go back to ‘0. Revise: Groups You Already Know’ and redo its example by hand — that is the fastest way forward, not a setback.",
          "इस chapter के हर topic में ज़्यादातर Warm-up और Standard questions सही होना, मतलब आप आगे बढ़ने के लिए ready हैं। Score कम है? ‘0. Revise: जो समूह आप पहले से जानते हैं’ पर वापस जाइए और उसका example हाथ से दोबारा कीजिए — यही सबसे तेज़ रास्ता है, हार नहीं।"),
        topics:sets}
    ]});

  window.SL_DATA.questions = (window.SL_DATA.questions||[]).filter(function(q){ return q.subject!=="MATH11"; });

  var Q=[];
  function add(id,ch,code,tier,en,hi,oe,oh,correct,ee,eh){
    Q.push(question(id,ch,code,tier,b(en,hi),b(oe,oh),correct,b(ee,eh)));
  }

  /* ---- Topic 0: Revise (5) ---- */
  add("MTH-S01",1,"MTH11-1-0",1,"Which is a natural number?","कौन-सा natural number है?",
    ["0","−4","7","½"],["0","−4","7","½"],"C","Natural numbers are 1, 2, 3, … .","Natural numbers 1, 2, 3, … होते हैं।");
  add("MTH-S02",1,"MTH11-1-0",1,"Which is an integer but not a natural number?","कौन-सा integer है पर natural number नहीं?",
    ["3","−2","½","√2"],["3","−2","½","√2"],"B","−2 is a whole number, negative — an integer, not natural.","−2 negative integer है, natural नहीं।");
  add("MTH-S03",1,"MTH11-1-0",1,"Every natural number is also a:","हर natural number एक क्या भी है?",
    ["rational number","irrational number","negative number","fraction less than 1"],["rational number","irrational number","negative number","1 से छोटा fraction"],"A","Natural numbers sit inside rational numbers.","Natural numbers, rational numbers के अंदर आते हैं।");
  add("MTH-S04",1,"MTH11-1-0",2,"Which number is rational but not an integer?","कौन-सा number rational है पर integer नहीं?",
    ["5","−3","¾","0"],["5","−3","¾","0"],"C","¾ is a fraction, not a whole number.","¾ एक fraction है, whole number नहीं।");
  add("MTH-S05",1,"MTH11-1-0",2,"π (pi) belongs to which family?","π (pi) किस family में है?",
    ["Natural numbers","Integers","Rational numbers","Real numbers"],["Natural numbers","Integers","Rational numbers","Real numbers"],"D","π cannot be written as a simple fraction, but it is still a real number.","π को simple fraction में नहीं लिख सकते, पर यह फिर भी real number है।");

  /* ---- Topic 1: What is a Set? (8) ---- */
  add("MTH-S06",1,"MTH11-1-1",1,"Which collection is a set?","कौन-सा collection set है?",
    ["Tall students in class","Students taller than 150 cm","Interesting books","Nice teachers"],["Class के लम्बे students","150 cm से लम्बे students","रोचक किताबें","अच्छे teachers"],"B","150 cm gives a rule anyone can check with a scale.","150 cm एक rule है जिसे कोई भी scale से check कर सकता है।");
  add("MTH-S07",1,"MTH11-1-1",1,"If A = {2, 4, 6}, which is true?","अगर A = {2, 4, 6}, कौन-सा सही है?",
    ["4 ∈ A","5 ∈ A","2 ∉ A","6 ∉ A"],["4 ∈ A","5 ∈ A","2 ∉ A","6 ∉ A"],"A","4 is one of the listed members of A.","4, A के listed members में से एक है।");
  add("MTH-S08",1,"MTH11-1-1",1,"If B = {1, 3, 5}, which is true?","अगर B = {1, 3, 5}, कौन-सा सही है?",
    ["2 ∈ B","1 ∈ B","3 ∉ B","5 ∉ B"],["2 ∈ B","1 ∈ B","3 ∉ B","5 ∉ B"],"B","1 is listed in B.","1, B में लिखा है।");
  add("MTH-S09",1,"MTH11-1-1",2,"Why is ‘good singers’ not a set?","‘अच्छे गायक’ set क्यों नहीं है?",
    ["Singing is not allowed in maths","There is no clear yes/no rule for ‘good’","It has too many members","It is a finite collection"],["गाना maths में allowed नहीं है","‘अच्छे’ के लिए कोई साफ़ हाँ/ना rule नहीं है","इसमें बहुत members हैं","यह finite collection है"],"B","‘Good’ means different things to different people.","‘अच्छे’ का मतलब हर व्यक्ति के लिए अलग होता है।");
  add("MTH-S10",1,"MTH11-1-1",2,"Which rule makes a well-defined set?","कौन-सा rule एक well-defined set बनाता है?",
    ["Cheap mobile phones","Mobile phones under ₹5000","Popular phones","Old phones"],["सस्ते mobile phones","₹5000 से कम के mobile phones","लोकप्रिय phones","पुराने phones"],"B","₹5000 gives a clear, checkable line.","₹5000 एक साफ़, check करने लायक सीमा देता है।");
  add("MTH-S11",1,"MTH11-1-1",2,"If C = {a, b, c}, which is true?","अगर C = {a, b, c}, कौन-सा सही है?",
    ["a ∉ C","d ∈ C","b ∈ C","c ∉ C"],["a ∉ C","d ∈ C","b ∈ C","c ∉ C"],"C","b is one of the members listed in C.","b, C में लिखे members में से एक है।");
  add("MTH-S12",1,"MTH11-1-1",3,"D = {students who scored 100 in the last test}. Is D a set?","D = {जिन students को last test में 100 मिले}। क्या D एक set है?",
    ["No, marks are opinions","Yes, the test result gives a clear yes/no","No, too few students","Yes, but only if everyone passed"],["नहीं, marks opinion हैं","हाँ, test का result साफ़ हाँ/ना देता है","नहीं, students बहुत कम हैं","हाँ, पर तभी जब सब pass हुए हों"],"B","A test score is a fact, not an opinion — it is well-defined.","Test score एक fact है, opinion नहीं — यह well-defined है।");
  add("MTH-S13",1,"MTH11-1-1",3,"Which of these is well-defined?","इनमें से कौन-सा well-defined है?",
    ["Beautiful paintings","Paintings sold for over ₹1 lakh","Difficult subjects","Easy questions"],["सुन्दर paintings","₹1 lakh से ज़्यादा में बिकी paintings","कठिन subjects","आसान questions"],"B","A sale price is a fact that anyone can check.","बिकने की कीमत एक fact है जिसे कोई भी check कर सकता है।");

  /* ---- Topic 2: Representing Sets (8) ---- */
  add("MTH-S14",1,"MTH11-1-2",1,"Which is roster form?","Roster form कौन-सा है?",
    ["{x : x < 4}","{1, 2, 3}","x is even","x < 4"],["{x : x < 4}","{1, 2, 3}","x even है","x < 4"],"B","Roster form lists the actual members.","Roster form असली members की list देता है।");
  add("MTH-S15",1,"MTH11-1-2",1,"Which is set-builder form?","Set-builder form कौन-सा है?",
    ["{2, 4, 6}","{x : x is even, x < 8}","2, 4, 6","{even}"],["{2, 4, 6}","{x : x even है, x < 8}","2, 4, 6","{even}"],"B","It states a rule, using the ‘:’ for ‘such that’.","यह ‘:’ यानी ‘such that’ के साथ एक rule बताता है।");
  add("MTH-S16",1,"MTH11-1-2",1,"In set-builder form, the symbol ‘:’ means:","Set-builder form में ‘:’ symbol का मतलब है:",
    ["plus","such that","equals","not equal to"],["plus","such that","equals","not equal to"],"B","Read ‘:’ as ‘such that’.","‘:’ को ‘such that’ पढ़िए।");
  add("MTH-S17",1,"MTH11-1-2",2,"Write {1, 4, 9, 16} in set-builder form.","{1, 4, 9, 16} को set-builder form में लिखिए।",
    ["{x : x ∈ N, x < 17}","{x : x = n², n ∈ N, n ≤ 4}","{x : x is even}","{x : x < 5}"],["{x : x ∈ N, x < 17}","{x : x = n², n ∈ N, n ≤ 4}","{x : x even है}","{x : x < 5}"],"B","1, 4, 9, 16 are the squares of 1, 2, 3, 4.","1, 4, 9, 16, 1, 2, 3, 4 के squares हैं।");
  add("MTH-S18",1,"MTH11-1-2",2,"Which roster form matches {x : x ∈ N, x ≤ 4}?","{x : x ∈ N, x ≤ 4} किस roster form से मेल खाता है?",
    ["{1, 2, 3, 4}","{0, 1, 2, 3, 4}","{1, 2, 3}","{4}"],["{1, 2, 3, 4}","{0, 1, 2, 3, 4}","{1, 2, 3}","{4}"],"A","Natural numbers from 1 up to and including 4.","1 से लेकर 4 तक (4 सहित) के natural numbers।");
  add("MTH-S19",1,"MTH11-1-2",2,"Which set is best written in set-builder form, not roster?","कौन-सा set roster की जगह set-builder form में लिखना बेहतर है?",
    ["{1, 2}","{a, b, c}","All even natural numbers","{Monday, Tuesday}"],["{1, 2}","{a, b, c}","सभी even natural numbers","{Monday, Tuesday}"],"C","This list never ends, so a rule is shorter and clearer.","यह list कभी ख़त्म नहीं होती, इसलिए rule छोटा और साफ़ है।");
  add("MTH-S20",1,"MTH11-1-2",3,"{x : x ∈ Z, −2 ≤ x < 3} in roster form is:","{x : x ∈ Z, −2 ≤ x < 3} को roster form में लिखें तो:",
    ["{−2, −1, 0, 1, 2, 3}","{−2, −1, 0, 1, 2}","{−1, 0, 1, 2}","{0, 1, 2}"],["{−2, −1, 0, 1, 2, 3}","{−2, −1, 0, 1, 2}","{−1, 0, 1, 2}","{0, 1, 2}"],"B","−2 is included (≤), but 3 is excluded (<).","−2 शामिल है (≤), पर 3 शामिल नहीं (<)।");
  add("MTH-S21",1,"MTH11-1-2",3,"Which set-builder form matches {5, 10, 15, 20}?","{5, 10, 15, 20} किस set-builder form से मेल खाता है?",
    ["{x : x is a multiple of 5, x ≤ 20}","{x : x < 20}","{x : x is odd}","{x : x is a multiple of 4}"],["{x : x 5 का multiple है, x ≤ 20}","{x : x < 20}","{x : x odd है}","{x : x 4 का multiple है}"],"A","Each member is a multiple of 5, up to 20.","हर member 5 का multiple है, 20 तक।");

  /* ---- Topic 3: Types of Sets (9) ---- */
  add("MTH-S22",1,"MTH11-1-3",1,"Which is the empty set?","Empty set कौन-सा है?",
    ["{0}","{∅}","{x ∈ N : 1 < x < 2}","{1}"],["{0}","{∅}","{x ∈ N : 1 < x < 2}","{1}"],"C","No natural number lies strictly between 1 and 2.","1 और 2 के बीच कोई natural number नहीं है।");
  add("MTH-S23",1,"MTH11-1-3",1,"Which is a singleton set?","Singleton set कौन-सा है?",
    ["{5}","{5, 6}","{}","{1, 2, 3}"],["{5}","{5, 6}","{}","{1, 2, 3}"],"A","It has exactly one member.","इसमें ठीक एक member है।");
  add("MTH-S24",1,"MTH11-1-3",1,"{1, 2, 3, …} is:","{1, 2, 3, …} है:",
    ["a finite set","an infinite set","an empty set","a singleton set"],["एक finite set","एक infinite set","एक empty set","एक singleton set"],"B","The list of natural numbers never ends.","Natural numbers की list कभी ख़त्म नहीं होती।");
  add("MTH-S25",1,"MTH11-1-3",2,"Which pair of sets is equal?","कौन-सा जोड़ा equal sets का है?",
    ["{1, 2} and {1, 2, 3}","{a, b, c} and {c, b, a}","{1} and {1, 1, 2}","{2, 4} and {4}"],["{1, 2} और {1, 2, 3}","{a, b, c} और {c, b, a}","{1} और {1, 1, 2}","{2, 4} और {4}"],"B","Same three members, order does not matter.","तीनों members same हैं, order मायने नहीं रखता।");
  add("MTH-S26",1,"MTH11-1-3",2,"{x : x is a day starting with the letter Q} is:","{x : x वह दिन है जो Q अक्षर से शुरू हो} है:",
    ["a singleton set","an infinite set","the empty set","a finite set with 2 members"],["एक singleton set","एक infinite set","empty set","2 members वाला finite set"],"C","No day of the week starts with Q.","हफ़्ते का कोई दिन Q से शुरू नहीं होता।");
  add("MTH-S27",1,"MTH11-1-3",2,"Which set is finite?","कौन-सा set finite है?",
    ["Natural numbers","{x : x ∈ N, x < 100}","{1, 2, 3, …}","{x : x ∈ Z}"],["Natural numbers","{x : x ∈ N, x < 100}","{1, 2, 3, …}","{x : x ∈ Z}"],"B","This list stops at 99 — it can be fully counted.","यह list 99 पर रुक जाती है — पूरी गिनी जा सकती है।");
  add("MTH-S28",1,"MTH11-1-3",3,"A = {x : x² = 9, x ∈ N}. What kind of set is A?","A = {x : x² = 9, x ∈ N}। A किस तरह का set है?",
    ["Empty set","Singleton set — {3}","Infinite set","Set with 2 members"],["Empty set","Singleton set — {3}","Infinite set","2 members वाला set"],"B","Only 3 is a natural number whose square is 9 (−3 is not natural).","सिर्फ़ 3 natural number है जिसका square 9 है (−3 natural नहीं है)।");
  add("MTH-S29",1,"MTH11-1-3",3,"Are {1, 2, 3} and {x : x ∈ N, 1 ≤ x ≤ 3} equal?","क्या {1, 2, 3} और {x : x ∈ N, 1 ≤ x ≤ 3} equal हैं?",
    ["Yes, same members","No, different forms means different sets","No, one is roster and one is set-builder so they differ","Cannot say"],["हाँ, members same हैं","नहीं, अलग forms का मतलब अलग sets","नहीं, एक roster है और एक set-builder इसलिए अलग","कह नहीं सकते"],"A","Two sets are equal if their members match — the form used does not matter.","अगर members match करें तो दो sets equal होते हैं — form मायने नहीं रखता।");
  add("MTH-S30",1,"MTH11-1-3",4,"Which of these is an empty set?","इनमें से कौन-सा empty set है?",
    ["{x : x ∈ N, x + 1 = x}","{x : x ∈ Z, x = 0}","{x : x ∈ Z, x < 0}","{x : x ∈ N, x ≤ 1}"],["{x : x ∈ N, x + 1 = x}","{x : x ∈ Z, x = 0}","{x : x ∈ Z, x < 0}","{x : x ∈ N, x ≤ 1}"],"A","No number can equal itself plus 1 — this rule matches nothing. The others each keep at least one member (0, the negatives, or {1}).","कोई number ख़ुद के +1 के बराबर नहीं हो सकता — यह rule किसी से match नहीं करता। बाकी सभी में कम-से-कम एक member बचता है (0, negatives, या {1})।");

  /* ---- Topic 4: Subsets and Power Set (10) ---- */
  add("MTH-S31",1,"MTH11-1-4",1,"Which is a subset of {1, 2, 3}?","{1, 2, 3} का subset कौन-सा है?",
    ["{1, 4}","{2, 3}","{0, 3}","{5}"],["{1, 4}","{2, 3}","{0, 3}","{5}"],"B","Both 2 and 3 are members of {1, 2, 3}.","2 और 3 दोनों {1, 2, 3} में हैं।");
  add("MTH-S32",1,"MTH11-1-4",1,"Every set is a subset of:","हर set किसका subset होता है?",
    ["the empty set","itself","its complement","a bigger set only"],["empty set का","ख़ुद का","अपने complement का","हमेशा किसी बड़े set का"],"B","Every member of A is trivially also a member of A.","A का हर member आसानी से A का भी member है।");
  add("MTH-S33",1,"MTH11-1-4",1,"For A = {a, b}, the power set P(A) has how many members?","A = {a, b} के लिए, power set P(A) में कितने members हैं?",
    ["2","3","4","5"],["2","3","4","5"],"C","2² = 4.","2² = 4।");
  add("MTH-S34",1,"MTH11-1-4",2,"Which is NOT a subset of {1, 2, 3}?","इनमें से कौन-सा {1, 2, 3} का subset नहीं है?",
    ["{}","{1, 2, 3}","{1, 2, 4}","{1}"],["{}","{1, 2, 3}","{1, 2, 4}","{1}"],"C","4 is not a member of {1, 2, 3}.","4, {1, 2, 3} का member नहीं है।");
  add("MTH-S35",1,"MTH11-1-4",2,"How many subsets does {x} have (one member)?","{x} (एक member) के कितने subsets हैं?",
    ["1","2","3","0"],["1","2","3","0"],"B","{} and {x} — 2¹ = 2.","{} और {x} — 2¹ = 2।");
  add("MTH-S36",1,"MTH11-1-4",2,"The empty set is a subset of:","Empty set किसका subset है?",
    ["only itself","every set","no set","only finite sets"],["सिर्फ़ ख़ुद का","हर set का","किसी set का नहीं","सिर्फ़ finite sets का"],"B","There is no member of the empty set that fails to be in any set.","Empty set का कोई member किसी भी set से बाहर नहीं है।");
  add("MTH-S37",1,"MTH11-1-4",3,"How many subsets does {1, 2, 3, 4} have?","{1, 2, 3, 4} के कितने subsets हैं?",
    ["8","12","16","4"],["8","12","16","4"],"C","2⁴ = 16.","2⁴ = 16।");
  add("MTH-S38",1,"MTH11-1-4",3,"P(A) has 8 members. How many members does A have?","P(A) में 8 members हैं। A में कितने members हैं?",
    ["2","3","4","8"],["2","3","4","8"],"B","2³ = 8, so n(A) = 3.","2³ = 8, इसलिए n(A) = 3।");
  add("MTH-S39",1,"MTH11-1-4",4,"A = {1, 2}. Which of these is a member of P(A), not a subset written wrongly?","A = {1, 2}। इनमें से कौन-सा P(A) का सही member है?",
    ["1","{1}","2","{3}"],["1","{1}","2","{3}"],"B","P(A) contains sets, not bare numbers — {1} is a subset of A.","P(A) में sets होते हैं, अकेले numbers नहीं — {1}, A का एक subset है।");
  add("MTH-S40",1,"MTH11-1-4",4,"A has 5 members. How many subsets of A have exactly 1 member?","A में 5 members हैं। A के कितने subsets में ठीक 1 member है?",
    ["1","5","10","32"],["1","5","10","32"],"B","Each single member on its own gives one such subset — 5 of them.","हर एक member अकेले एक subset बनाता है — कुल 5।");

  /* ---- Topic 5: Venn Diagrams and Universal Set (10) ---- */
  add("MTH-S41",1,"MTH11-1-5",1,"In a Venn diagram, the outer rectangle usually stands for:","Venn diagram में बाहर वाला rectangle आम तौर पर क्या दिखाता है?",
    ["the empty set","the universal set U","the intersection","the complement"],["empty set","universal set U","intersection","complement"],"B","U is everything under discussion.","U वह सब कुछ है जिसकी बात हो रही है।");
  add("MTH-S42",1,"MTH11-1-5",1,"If U = {1,…,10} and A = {1, 2, 3}, then A′ is:","अगर U = {1,…,10} और A = {1, 2, 3}, तो A′ है:",
    ["{1, 2, 3}","{4, 5, 6, 7, 8, 9, 10}","{}","U"],["{1, 2, 3}","{4, 5, 6, 7, 8, 9, 10}","{}","U"],"B","A′ is everything in U that is not in A.","A′, U में A के बाहर की सभी चीज़ें हैं।");
  add("MTH-S43",1,"MTH11-1-5",1,"The complement of U itself is:","U का ख़ुद का complement क्या है?",
    ["U","the empty set","A","cannot be found"],["U","empty set","A","पता नहीं लगाया जा सकता"],"B","Nothing in U is left outside U.","U में कुछ भी U के बाहर नहीं है।");
  add("MTH-S44",1,"MTH11-1-5",2,"U = {students in class}, A = {students in the sports team}. A′ means:","U = {class के students}, A = {sports team के students}। A′ का मतलब है:",
    ["students in the sports team","students not in the sports team","all students in the class","no students"],["sports team के students","sports team में नहीं वाले students","class के सभी students","कोई student नहीं"],"B","A′ is the students left out of the sports team.","A′, sports team से बाहर वाले students हैं।");
  add("MTH-S45",1,"MTH11-1-5",2,"Two circles inside a Venn diagram that do not touch represent:","Venn diagram में दो circles जो नहीं मिलतीं, वे क्या दिखाती हैं?",
    ["sets that are equal","sets with nothing in common","sets that are subsets of each other","the universal set"],["equal sets","ऐसे sets जिनमें कुछ common नहीं","एक-दूसरे के subset वाले sets","universal set"],"B","No overlap means no shared members.","कोई overlap नहीं मतलब कोई shared member नहीं।");
  add("MTH-S46",1,"MTH11-1-5",2,"Why must U be decided before finding a complement?","Complement निकालने से पहले U क्यों तय करना ज़रूरी है?",
    ["It is just a rule with no reason","A′ = U − A depends directly on U","Complements do not need U","U only matters for finite sets"],["यह बस एक rule है, कोई reason नहीं","A′ = U − A सीधे U पर निर्भर है","Complement के लिए U ज़रूरी नहीं","U सिर्फ़ finite sets के लिए मायने रखता है"],"B","Changing U changes what counts as ‘left out’.","U बदलने से ‘बाहर’ की परिभाषा बदल जाती है।");
  add("MTH-S47",1,"MTH11-1-5",3,"U = {1,…,20}, A = {even numbers in U}. How many members does A′ have?","U = {1,…,20}, A = {U के even numbers}। A′ में कितने members हैं?",
    ["10","20","0","5"],["10","20","0","5"],"A","10 even, so 10 odd numbers are left out.","10 even हैं, इसलिए 10 odd numbers बाहर रह जाते हैं।");
  add("MTH-S48",1,"MTH11-1-5",3,"If A′ = ∅, what does that tell you?","अगर A′ = ∅ है, तो इससे क्या पता चलता है?",
    ["A is empty","A = U","U is empty","A and U are disjoint"],["A empty है","A = U","U empty है","A और U disjoint हैं"],"B","Nothing is left outside A, so A already covers all of U.","A के बाहर कुछ नहीं बचा, यानी A ही पूरा U है।");
  add("MTH-S49",1,"MTH11-1-5",4,"U = {1,…,15}, A = {multiples of 3 in U}, B = {multiples of 5 in U}. Find A′ ∩ B.","U = {1,…,15}, A = {U में 3 के multiples}, B = {U में 5 के multiples}। A′ ∩ B निकालिए।",
    ["{5, 10}","{15}","{3, 6, 9, 12, 15}","{}"],["{5, 10}","{15}","{3, 6, 9, 12, 15}","{}"],"A","B = {5,10,15}; remove 15 since it is also a multiple of 3 (in A).","B = {5,10,15}; 15 को हटाइए क्योंकि वह 3 का भी multiple है (A में है)।");
  add("MTH-S50",1,"MTH11-1-5",5,"For any set A within U, (A′)′ equals:","किसी भी set A के लिए U के अंदर, (A′)′ बराबर है:",
    ["U","∅","A","A′"],["U","∅","A","A′"],"C","The complement of the complement brings you back to A.","Complement का complement वापस A पर ले आता है।");

  /* ---- Topic 6: Operations on Sets (12) ---- */
  add("MTH-S51",1,"MTH11-1-6",1,"A = {1, 2, 3}, B = {3, 4}. A ∩ B is:","A = {1, 2, 3}, B = {3, 4}। A ∩ B क्या है?",
    ["{1, 2}","{3}","{1, 2, 3, 4}","{4}"],["{1, 2}","{3}","{1, 2, 3, 4}","{4}"],"B","Intersection keeps only the shared member.","Intersection केवल shared member रखता है।");
  add("MTH-S52",1,"MTH11-1-6",1,"For the same A and B, A ∪ B is:","उसी A और B के लिए, A ∪ B क्या है?",
    ["{3}","{1, 2}","{1, 2, 3, 4}","{4}"],["{3}","{1, 2}","{1, 2, 3, 4}","{4}"],"C","Union keeps everything, without repeating 3.","Union सब कुछ रखता है, पर 3 को दोहराता नहीं।");
  add("MTH-S53",1,"MTH11-1-6",1,"For the same A and B, A − B is:","उसी A और B के लिए, A − B क्या है?",
    ["{1, 2}","{3}","{4}","{1, 2, 3}"],["{1, 2}","{3}","{4}","{1, 2, 3}"],"A","Keep what is in A but remove what is also in B.","A में जो है वह रखिए, पर जो B में भी है उसे हटाइए।");
  add("MTH-S54",1,"MTH11-1-6",2,"Union means:","Union का मतलब है:",
    ["AND","OR","NOT","only the overlap"],["AND","OR","NOT","सिर्फ़ overlap"],"B","Union collects members in A OR B.","Union में A या B के members आते हैं।");
  add("MTH-S55",1,"MTH11-1-6",2,"Intersection means:","Intersection का मतलब है:",
    ["AND","OR","NOT","everything, combined"],["AND","OR","NOT","सब कुछ, मिलाकर"],"A","Intersection keeps members in A AND B, both.","Intersection में A और B, दोनों के members आते हैं।");
  add("MTH-S56",1,"MTH11-1-6",2,"A = {2, 4, 6, 8}, B = {4, 8, 12}. A ∩ B is:","A = {2, 4, 6, 8}, B = {4, 8, 12}। A ∩ B क्या है?",
    ["{4, 8}","{2, 6}","{2, 4, 6, 8, 12}","{12}"],["{4, 8}","{2, 6}","{2, 4, 6, 8, 12}","{12}"],"A","4 and 8 appear in both lists.","4 और 8 दोनों lists में हैं।");
  add("MTH-S57",1,"MTH11-1-6",3,"A = {students who play cricket}, B = {students who play football}. A − B is:","A = {cricket खेलने वाले students}, B = {football खेलने वाले students}। A − B है:",
    ["Students who play only football","Students who play both","Students who play only cricket","Students who play neither"],["सिर्फ़ football खेलने वाले students","दोनों खेलने वाले students","सिर्फ़ cricket खेलने वाले students","दोनों में से कोई नहीं खेलने वाले students"],"C","A − B removes the football overlap, leaving cricket-only.","A − B, football वाले overlap को हटा देता है, सिर्फ़ cricket वाले बचते हैं।");
  add("MTH-S58",1,"MTH11-1-6",3,"If A ∩ B = ∅, what can you say about A and B?","अगर A ∩ B = ∅ है, तो A और B के बारे में क्या कह सकते हैं?",
    ["They are equal","They share no members","A is a subset of B","A − B is empty"],["वे equal हैं","उनमें कोई common member नहीं","A, B का subset है","A − B empty है"],"B","No overlap means they are disjoint.","कोई overlap नहीं मतलब वे disjoint हैं।");
  add("MTH-S59",1,"MTH11-1-6",3,"A = {1,2,3,4,5}, B = {4,5,6,7}. Find A ∪ B.","A = {1,2,3,4,5}, B = {4,5,6,7}। A ∪ B निकालिए।",
    ["{1,2,3,4,5,6,7}","{4,5}","{1,2,3}","{6,7}"],["{1,2,3,4,5,6,7}","{4,5}","{1,2,3}","{6,7}"],"A","Combine everyone, listing 4 and 5 only once.","सबको मिलाइए, पर 4 और 5 को सिर्फ़ एक बार।");
  add("MTH-S60",1,"MTH11-1-6",4,"A = {1,2,3}, B = {2,3,4}, C = {3,4,5}. Find A ∩ B ∩ C.","A = {1,2,3}, B = {2,3,4}, C = {3,4,5}। A ∩ B ∩ C निकालिए।",
    ["{3}","{2, 3, 4}","{}","{1, 5}"],["{3}","{2, 3, 4}","{}","{1, 5}"],"A","Only 3 is common to all three sets.","सिर्फ़ 3 तीनों sets में common है।");
  add("MTH-S61",1,"MTH11-1-6",4,"For any sets A and B, A − B and B − A are:","किसी भी A और B के लिए, A − B और B − A हैं:",
    ["always equal","always disjoint","always equal to A ∩ B","always empty"],["हमेशा equal","हमेशा disjoint","हमेशा A ∩ B के बराबर","हमेशा empty"],"B","A − B has no B-members; B − A has no A-members, so they cannot overlap.","A − B में B के members नहीं होते; B − A में A के members नहीं होते, इसलिए वे overlap नहीं कर सकते।");
  add("MTH-S62",1,"MTH11-1-6",5,"For any sets A and B, which is always true?","किसी भी A और B के लिए, हमेशा सच क्या है?",
    ["A ∪ B = A ∩ B","A − B = B − A","(A ∪ B) ⊇ (A ∩ B)","A ∩ B = A ∪ B, if A = B"],["A ∪ B = A ∩ B","A − B = B − A","(A ∪ B) ⊇ (A ∩ B)","A ∩ B = A ∪ B, अगर A = B हो"],"C","Union always contains at least everything intersection contains.","Union में हमेशा वह सब होता है जो intersection में होता है, कम-से-कम।");

  /* ---- Topic 7: Number of Elements in a Set (12) ---- */
  add("MTH-S63",1,"MTH11-1-7",1,"If n(A) = 10, n(B) = 8, n(A ∩ B) = 3, then n(A ∪ B) is:","अगर n(A) = 10, n(B) = 8, n(A ∩ B) = 3 है, तो n(A ∪ B) क्या है?",
    ["15","18","21","5"],["15","18","21","5"],"A","10 + 8 − 3 = 15. Subtract the overlap once.","10 + 8 − 3 = 15। Overlap को एक बार घटाएँ।");
  add("MTH-S64",1,"MTH11-1-7",1,"Why do we subtract n(A ∩ B) in the formula?","Formula में n(A ∩ B) क्यों घटाते हैं?",
    ["To make the answer smaller","Because the overlap was counted twice","Because intersection is always wrong","There is no real reason"],["Answer छोटा बनाने के लिए","क्योंकि overlap दो बार गिना गया था","क्योंकि intersection हमेशा ग़लत होता है","कोई असली reason नहीं"],"B","Adding n(A) and n(B) counts shared members twice.","n(A) और n(B) जोड़ने पर shared members दो बार गिने जाते हैं।");
  add("MTH-S65",1,"MTH11-1-7",1,"If A and B are disjoint, n(A ∪ B) equals:","अगर A और B disjoint हैं, तो n(A ∪ B) बराबर है:",
    ["n(A) + n(B)","n(A) − n(B)","n(A) × n(B)","n(A ∩ B)"],["n(A) + n(B)","n(A) − n(B)","n(A) × n(B)","n(A ∩ B)"],"A","No overlap to subtract, since n(A ∩ B) = 0.","कोई overlap घटाना नहीं है, क्योंकि n(A ∩ B) = 0 है।");
  add("MTH-S66",1,"MTH11-1-7",2,"n(A) = 25, n(B) = 18, n(A ∩ B) = 7. Find n(A ∪ B).","n(A) = 25, n(B) = 18, n(A ∩ B) = 7। n(A ∪ B) निकालिए।",
    ["43","36","50","33"],["43","36","50","33"],"B","25 + 18 − 7 = 36.","25 + 18 − 7 = 36।");
  add("MTH-S67",1,"MTH11-1-7",2,"In a class of 40, 22 play cricket, 15 play both cricket and football. If everyone plays at least one, how many play only football?","40 students की class में, 22 cricket खेलते हैं, 15 दोनों खेलते हैं। अगर सब कम-से-कम एक खेल खेलते हैं, तो सिर्फ़ football कितने खेलते हैं?",
    ["18","33","25","15"],["18","33","25","15"],"A","Total football players = 40 − 22 + 15 = 33; only football = 33 − 15 = 18.","कुल football players = 40 − 22 + 15 = 33; सिर्फ़ football = 33 − 15 = 18।");
  add("MTH-S68",1,"MTH11-1-7",2,"n(A ∪ B) = 30, n(A) = 18, n(B) = 20. Find n(A ∩ B).","n(A ∪ B) = 30, n(A) = 18, n(B) = 20। n(A ∩ B) निकालिए।",
    ["8","38","2","12"],["8","38","2","12"],"A","18 + 20 − 30 = 8, rearranging the formula.","Formula को rearrange करने पर 18 + 20 − 30 = 8।");
  add("MTH-S69",1,"MTH11-1-7",3,"n(A) = 12, n(B) = 12, n(A ∩ B) = 12. What does this tell you?","n(A) = 12, n(B) = 12, n(A ∩ B) = 12। इससे क्या पता चलता है?",
    ["A and B are disjoint","A = B","n(A ∪ B) = 24","B is empty"],["A और B disjoint हैं","A = B","n(A ∪ B) = 24","B empty है"],"B","The whole overlap equals both sets — they must be the same set.","पूरा overlap दोनों sets के बराबर है — वे एक ही set होने चाहिए।");
  add("MTH-S70",1,"MTH11-1-7",3,"In a survey of 50 people, 30 like tea, 25 like coffee, and 10 like neither. How many like both?","50 लोगों के survey में, 30 को tea, 25 को coffee पसन्द है, और 10 को कोई नहीं पसन्द। दोनों कितनों को पसन्द है?",
    ["5","15","40","20"],["5","15","40","20"],"B","Tea-or-coffee = 50 − 10 = 40; both = 30 + 25 − 40 = 15.","Tea-या-coffee = 50 − 10 = 40; दोनों = 30 + 25 − 40 = 15।");
  add("MTH-S71",1,"MTH11-1-7",4,"Three groups: 20 in A, 15 in B, 12 in C. n(A∩B)=5, n(B∩C)=4, n(A∩C)=3, n(A∩B∩C)=2. Find n(A∪B∪C).","तीन groups: A में 20, B में 15, C में 12। n(A∩B)=5, n(B∩C)=4, n(A∩C)=3, n(A∩B∩C)=2। n(A∪B∪C) निकालिए।",
    ["37","47","27","41"],["37","47","27","41"],"A","20+15+12−5−4−3+2 = 37, adding back the triple-counted overlap.","20+15+12−5−4−3+2 = 37, तीन बार गिने गए हिस्से को वापस जोड़ते हुए।");
  add("MTH-S72",1,"MTH11-1-7",4,"Why does the three-set formula add back n(A∩B∩C)?","तीन-set वाला formula n(A∩B∩C) को वापस क्यों जोड़ता है?",
    ["It is subtracted three times by the pairwise overlaps, so it must be restored once","It is a typing mistake in the formula","The triple overlap should never be counted","To make the total bigger than reality"],["Pairwise overlaps में यह तीन बार घट जाता है, इसलिए एक बार वापस जोड़ना पड़ता है","यह formula में एक typing mistake है","Triple overlap को कभी नहीं गिनना चाहिए","Total को असली से बड़ा दिखाने के लिए"],"A","Each pairwise subtraction removes the triple-overlap once too many.","हर pairwise subtraction, triple-overlap को एक बार ज़्यादा हटा देता है।");
  add("MTH-S73",1,"MTH11-1-7",5,"n(A) = 40, n(B) = 30, n(A ∪ B) = 55, and U has 70 people. How many are in neither A nor B?","n(A) = 40, n(B) = 30, n(A ∪ B) = 55, और U में 70 लोग हैं। न A में न B में कितने हैं?",
    ["15","55","25","30"],["15","55","25","30"],"A","Neither = n(U) − n(A ∪ B) = 70 − 55 = 15.","न कोई = n(U) − n(A ∪ B) = 70 − 55 = 15।");
  add("MTH-S74",1,"MTH11-1-7",5,"If n(A ∪ B) = n(A) + n(B), what must be true?","अगर n(A ∪ B) = n(A) + n(B) है, तो क्या सच होना चाहिए?",
    ["A and B are equal","A and B are disjoint","A is a subset of B","A and B are both empty"],["A और B equal हैं","A और B disjoint हैं","A, B का subset है","A और B दोनों empty हैं"],"B","This only holds when n(A ∩ B) = 0 — no overlap to subtract.","यह तभी सच होता है जब n(A ∩ B) = 0 हो — घटाने के लिए कोई overlap नहीं।");

  window.SL_DATA.questions = window.SL_DATA.questions.concat(Q);
})();

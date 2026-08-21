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
        "Your teacher picks five students for the school kabaddi team.\n\n$$A=\\{\\text{Rahul}, \\text{Suresh}, \\text{Meena}, \\text{Kiran}, \\text{Asha}\\}$$\n\nThis is a **set**. A set is simply a well-defined collection.\n\n‘Well-defined’ means anyone can check membership and get the same answer. For any name, you can say yes or no — is this person in A?\n\nIf Rahul is in A, we write $\\text{Rahul}\\in A$. This means ‘Rahul belongs to A’.\n\nIf Vikas is not in A, we write $\\text{Vikas}\\notin A$.\n\n‘Good players’ is not a set. People disagree on ‘good’. ‘Players taller than 150 cm’ is a set. You can measure and check.",
        "आपकी teacher school की kabaddi team के लिए पाँच students चुनती है।\n\n$$A=\\{\\text{Rahul}, \\text{Suresh}, \\text{Meena}, \\text{Kiran}, \\text{Asha}\\}$$\n\nयह एक **set** है। Set बस एक well-defined collection है।\n\n‘Well-defined’ का मतलब है — कोई भी check करे तो एक ही जवाब मिले। किसी भी नाम के लिए, आप हाँ या ना बोल सकते हैं — क्या यह person A में है?\n\nअगर Rahul, A में है, तो लिखते हैं $\\text{Rahul}\\in A$। इसका मतलब है ‘Rahul, A में है’।\n\nअगर Vikas, A में नहीं है, तो लिखते हैं $\\text{Vikas}\\notin A$।\n\n‘अच्छे players’ set नहीं है। ‘अच्छे’ पर लोगों की राय अलग होती है। ‘150 cm से लम्बे players’ set है। इसे नाप कर check कर सकते हैं।"),
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
          ["Write $\\{x:x\\in\\mathbb{N},x\\text{ is even},x<10\\}$.","लिखिए $\\{x:x\\in\\mathbb{N},x\\text{ is even},x<10\\}$।","This rule produces exactly 2, 4, 6 and 8.","यह rule ठीक 2, 4, 6 और 8 देता है।"]
        ],
        b("{x : x ∈ N, x is even, x < 10}","{x : x ∈ N, x even है, x < 10}"))),

    topic("MTH11-1-3",
      b("3. Types of Sets","3. Sets के प्रकार"),
      b(
        "**Empty set**: no members at all. Example: days of the week that start with the letter Z. Write it as $\\emptyset$ or $\\{\\}$.\n\n**Singleton set**: exactly one member. Example: $\\{\\text{your class teacher}\\}$.\n\n**Finite set**: you can finish counting it. Example: $\\{a,e,i,o,u\\}$ has 5 members.\n\n**Infinite set**: counting never finishes. Example: $\\{1,2,3,\\ldots\\}$.\n\n**Equal sets**: same members, any order. $\\{2,4,6\\}$ and $\\{6,4,2\\}$ are equal — order does not matter, and each member is written only once.",
        "**Empty set**: इसमें कोई member नहीं होता। उदाहरण: हफ़्ते के वे दिन जो Z अक्षर से शुरू होते हैं। इसे $\\emptyset$ या $\\{\\}$ लिखते हैं।\n\n**Singleton set**: इसमें ठीक एक member होता है। उदाहरण: $\\{\\text{your class teacher}\\}$।\n\n**Finite set**: इसकी गिनती पूरी हो जाती है। उदाहरण: $\\{a,e,i,o,u\\}$ में 5 members हैं।\n\n**Infinite set**: इसकी गिनती कभी पूरी नहीं होती। उदाहरण: $\\{1,2,3,\\ldots\\}$।\n\n**Equal sets**: same members, चाहे किसी भी order में हों। $\\{2,4,6\\}$ और $\\{6,4,2\\}$ equal हैं — order मायने नहीं रखता, और हर member सिर्फ़ एक बार लिखा जाता है।"),
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

  var relations=[

    topic("MTH11-2-0",
      b("0. Revise: Pairs and Sets You Already Know","0. दोहराइए: Pairs और Sets जो आप पहले से जानते हैं"),
      b(
        "A seat number like ‘row 3, seat 5’ is not the same as ‘row 5, seat 3’. **Order matters.**\n\nWe write this as an **ordered pair**: $(3,5)$. The first number is always the row; the second is always the seat.\n\n$$(a,b)=(b,a)\\ \\text{ only when }\\ a=b$$\n\nYou also know a **set** from Chapter 1 — a well-defined collection, written $\\{1,2,3\\}$, where order does *not* matter.\n\nThis chapter uses both ideas together: ordered pairs, built from sets.",
        "‘row 3, seat 5’ जैसी seat number, ‘row 5, seat 3’ जैसी नहीं है। **क्रम मायने रखता है।**\n\nइसे **ordered pair** कहते हैं: $(3,5)$। पहला number हमेशा row है; दूसरा हमेशा seat है।\n\n$$(a,b)=(b,a)\\ \\text{ तभी जब }\\ a=b$$\n\nChapter 1 से आप **set** भी जानते हैं — एक well-defined collection, जिसे $\\{1,2,3\\}$ लिखते हैं, जहाँ क्रम मायने नहीं रखता।\n\nयह chapter दोनों विचारों को साथ इस्तेमाल करता है: sets से बने ordered pairs।"),
      worked(
        b("Is (2, 5) the same as (5, 2)?","क्या (2, 5), (5, 2) जैसा है?"),
        [
          ["Compare the first position: 2 and 5.","पहली position compare कीजिए: 2 और 5।","The first numbers do not match.","पहले numbers match नहीं करते।"],
          ["Since the first positions differ, the pairs are different.","पहली positions अलग हैं, इसलिए pairs अलग हैं।","Order is part of what an ordered pair means.","Order, ordered pair के मतलब का हिस्सा है।"]
        ],
        b("No, they are different ordered pairs.","नहीं, ये अलग ordered pairs हैं।"))),

    topic("MTH11-2-1",
      b("1. Cartesian Product of Sets","1. Sets का Cartesian Product"),
      b(
        "A school has 2 sections, $A=\\{X,Y\\}$, and 3 houses, $B=\\{\\text{Red},\\text{Blue},\\text{Green}\\}$. Every student belongs to one section and one house — a pair like (X, Red).\n\nAll such pairs together are the **Cartesian product** $A\\times B$.\n\n{{diagram:cartesian-grid}}\n\n$$A\\times B=\\{(X,\\text{Red}),(X,\\text{Blue}),(X,\\text{Green}),(Y,\\text{Red}),(Y,\\text{Blue}),(Y,\\text{Green})\\}$$\n\nEach member of A pairs with every member of B.\n\n$$n(A\\times B)=n(A)\\times n(B)$$\n\nHere $2\\times3=6$ pairs — and the grid above shows exactly 6 dots.",
        "एक school में 2 sections हैं, $A=\\{X,Y\\}$, और 3 houses हैं, $B=\\{\\text{Red},\\text{Blue},\\text{Green}\\}$। हर student एक section और एक house में है — जैसे pair (X, Red)।\n\nऐसे सभी pairs मिलकर **Cartesian product** $A\\times B$ बनाते हैं।\n\n{{diagram:cartesian-grid}}\n\n$$A\\times B=\\{(X,\\text{Red}),(X,\\text{Blue}),(X,\\text{Green}),(Y,\\text{Red}),(Y,\\text{Blue}),(Y,\\text{Green})\\}$$\n\nA का हर member, B के हर member से pair करता है।\n\n$$n(A\\times B)=n(A)\\times n(B)$$\n\nयहाँ $2\\times3=6$ pairs हैं — ऊपर की grid में ठीक 6 dots हैं।"),
      worked(
        b("If A has 4 members and B has 5 members, how many pairs are in A×B?","अगर A में 4 और B में 5 members हैं, तो A×B में कितने pairs हैं?"),
        [
          ["Each of A's 4 members can pair with all 5 members of B.","A के 4 members में से हर एक, B के सभी 5 members से pair कर सकता है।","No possible pair is left out.","कोई possible pair नहीं छूटता।"],
          ["Multiply: $4\\times5=20$ pairs.","गुणा कीजिए: $4\\times5=20$ pairs।","n(A×B) is always n(A) times n(B).","n(A×B) हमेशा n(A) गुणा n(B) होता है।"]
        ],
        b("20 pairs.","20 pairs।"))),

    topic("MTH11-2-2",
      b("2. Relations","2. Relations"),
      b(
        "Take $A=\\{R,S\\}$ (initials) and $B=\\{\\text{Rahul},\\text{Sita}\\}$ (names). Connect a letter to a name only when that letter starts the name.\n\nThis chosen collection of pairs is a **relation**.\n\n{{diagram:relation-arrow}}\n\n$$R\\subseteq A\\times B$$\n\nA relation does not have to use every possible pair from $A\\times B$ — it keeps only the ones that fit the rule.\n\nThree words describe a relation:\n\n- **Domain**: first elements that are actually used — here $\\{R,S\\}$.\n- **Range**: second elements that are actually used — here $\\{\\text{Rahul},\\text{Sita}\\}$.\n- **Codomain**: the whole target set $B$, whether used or not.\n\nRange is always inside codomain, but may be smaller.",
        "मानिए $A=\\{R,S\\}$ (initials) और $B=\\{\\text{Rahul},\\text{Sita}\\}$ (names)। किसी letter को किसी name से तभी जोड़िए जब वह letter उस name से शुरू होता हो।\n\nPairs का यह चुना हुआ collection एक **relation** है।\n\n{{diagram:relation-arrow}}\n\n$$R\\subseteq A\\times B$$\n\nRelation में $A\\times B$ के सभी pairs ज़रूरी नहीं — सिर्फ़ वे जो rule पर खरे उतरें।\n\nRelation को बताने के तीन शब्द:\n\n- **Domain**: पहले elements जो सच में इस्तेमाल हुए — यहाँ $\\{R,S\\}$।\n- **Range**: दूसरे elements जो सच में इस्तेमाल हुए — यहाँ $\\{\\text{Rahul},\\text{Sita}\\}$।\n- **Codomain**: पूरा target set $B$, चाहे इस्तेमाल हो या न हो।\n\nRange हमेशा codomain के अंदर होता है, पर उससे छोटा हो सकता है।"),
      worked(
        b("A={1,2,3}, B={2,4,6}. R connects x to y when y=2x. Find the range.","A={1,2,3}, B={2,4,6}। R में x, y से जुड़ता है जब y=2x। Range निकालिए।"),
        [
          ["Apply the rule to each member of A: 1→2, 2→4, 3→6.","A के हर member पर rule लगाइए: 1→2, 2→4, 3→6।","Each domain member gives one matching y=2x.","हर domain member का एक matching y=2x है।"],
          ["The range is every y that was actually reached: {2,4,6}.","Range वे सभी y हैं जो सच में मिले: {2,4,6}।","All three outputs were used, so range equals the codomain here.","तीनों outputs इस्तेमाल हुए, इसलिए यहाँ range, codomain के बराबर है।"]
        ],
        b("Range = {2, 4, 6}.","Range = {2, 4, 6}।"))),

    topic("MTH11-2-3",
      b("3. What is a Function?","3. Function क्या है?"),
      b(
        "Every relation is not a function. A **function** adds one strict rule: **one input must give exactly one output.**\n\n{{diagram:function-vs-not}}\n\nIf $f(x)=2x$, then input 3 always gives $f(3)=6$ — never anything else.\n\nMany inputs may share one output (that is fine). But one input can never point to two different outputs (that breaks the rule).\n\nTest: pick any input. Does exactly one arrow leave it? If yes for every input, it is a function.",
        "हर relation function नहीं होता। **Function** एक सख़्त rule जोड़ता है: **एक input का ठीक एक output होना चाहिए।**\n\n{{diagram:function-vs-not}}\n\nअगर $f(x)=2x$ है, तो input 3 का output हमेशा $f(3)=6$ होगा — कभी कुछ और नहीं।\n\nकई inputs का output एक ही हो सकता है (यह ठीक है)। पर एक input कभी दो अलग outputs की ओर नहीं जा सकता (यह rule तोड़ता है)।\n\nTest: कोई भी input चुनिए। क्या उससे ठीक एक arrow निकलता है? अगर हर input के लिए हाँ, तो यह function है।"),
      worked(
        b("Can (2,4) and (2,5) both belong to the same function?","क्या (2,4) और (2,5) दोनों एक ही function में हो सकते हैं?"),
        [
          ["Look at the first element of both pairs: both are 2.","दोनों pairs का पहला element देखिए: दोनों 2 हैं।","Same input, 2, appears in both pairs.","Same input, 2, दोनों pairs में है।"],
          ["The outputs differ (4 and 5), so this breaks the one-output rule.","Outputs अलग हैं (4 और 5), यह one-output rule तोड़ता है।","One input cannot have two different outputs in a function.","Function में एक input के दो अलग outputs नहीं हो सकते।"]
        ],
        b("No — this cannot be a function.","नहीं — यह function नहीं हो सकता।"))),

    topic("MTH11-2-4",
      b("4. Domain, Codomain and Range of a Function","4. Function का Domain, Codomain और Range"),
      b(
        "For a real-number function, the **domain** is every input the formula is allowed to accept.\n\nTwo things break a formula:\n\n- A fraction whose denominator becomes 0.\n- A real square root of a negative number.\n\n**Example (NCERT):** $f(x)=\\dfrac{x^2+3x+5}{x^2-5x+4}$.\n\nFactor the denominator: $x^2-5x+4=(x-1)(x-4)$. It is 0 when $x=1$ or $x=4$.\n\n{{diagram:domain-restriction}}\n\nSo the domain is every real number except those two:\n\n$$\\text{Domain}=\\mathbb{R}-\\{1,4\\}$$\n\nAlways check the denominator (and any square root) before answering ‘what is the domain?’.",
        "किसी real-number function के लिए, **domain** वे सभी inputs हैं जिन्हें formula स्वीकार कर सकता है।\n\nदो चीज़ें formula को तोड़ देती हैं:\n\n- Fraction, जिसका denominator 0 हो जाए।\n- किसी negative number का real square root।\n\n**उदाहरण (NCERT):** $f(x)=\\dfrac{x^2+3x+5}{x^2-5x+4}$।\n\nDenominator को factor कीजिए: $x^2-5x+4=(x-1)(x-4)$। यह 0 होता है जब $x=1$ या $x=4$।\n\n{{diagram:domain-restriction}}\n\nतो domain हर real number है, बस ये दो छोड़कर:\n\n$$\\text{Domain}=\\mathbb{R}-\\{1,4\\}$$\n\n‘Domain क्या है?’ का जवाब देने से पहले हमेशा denominator (और कोई square root) जाँचिए।"),
      worked(
        b("Find the domain of f(x) = 1 / (x−3).","f(x) = 1 / (x−3) का domain निकालिए।"),
        [
          ["Set the denominator equal to 0: x−3=0, so x=3.","Denominator को 0 के बराबर रखिए: x−3=0, इसलिए x=3।","At x=3 the fraction would divide by 0, which is not allowed.","x=3 पर fraction 0 से divide होगा, जो allowed नहीं।"],
          ["Remove just that one point: domain is ℝ − {3}.","बस वही एक point हटाइए: domain है ℝ − {3}।","Every other real number keeps the denominator nonzero.","बाक़ी हर real number पर denominator nonzero रहता है।"]
        ],
        b("Domain = ℝ − {3}.","Domain = ℝ − {3}।"))),

    topic("MTH11-2-5",
      b("5. Everyday Functions: Identity, Constant, Polynomial and Rational","5. रोज़मर्रा के Functions: Identity, Constant, Polynomial और Rational"),
      b(
        "Four common function types, each with its own domain and range.\n\n{{diagram:graph-panel-lines}}\n\n**Identity function**: $f(x)=x$. Every input comes back unchanged. Domain and range are both $\\mathbb{R}$.\n\n**Constant function**: $f(x)=c$. Every input gives the same fixed output. Domain is $\\mathbb{R}$; range is just $\\{c\\}$.\n\n**Polynomial function**: built from powers of $x$ added together, like $f(x)=x^2+3x+5$. Domain is $\\mathbb{R}$.\n\n**Rational function**: one polynomial divided by another, like the fraction you saw in the last topic. Its domain excludes wherever the denominator is 0 — the same check you just practised.",
        "चार आम function types, हर एक का अपना domain और range है।\n\n{{diagram:graph-panel-lines}}\n\n**Identity function**: $f(x)=x$। हर input बिना बदले वापस आता है। Domain और range दोनों $\\mathbb{R}$ हैं।\n\n**Constant function**: $f(x)=c$। हर input का output एक ही fixed value है। Domain $\\mathbb{R}$ है; range सिर्फ़ $\\{c\\}$ है।\n\n**Polynomial function**: $x$ की powers जोड़कर बनता है, जैसे $f(x)=x^2+3x+5$। Domain $\\mathbb{R}$ है।\n\n**Rational function**: एक polynomial को दूसरे से divide किया हुआ, जैसा fraction पिछले topic में देखा। Domain में वहाँ शामिल नहीं जहाँ denominator 0 हो — वही check जो आपने अभी किया।"),
      worked(
        b("For the constant function f(x)=7, what is f(100)?","Constant function f(x)=7 के लिए, f(100) क्या है?"),
        [
          ["A constant function ignores the input completely.","Constant function input को बिलकुल नज़रअंदाज़ करता है।","The rule says the output is always 7, no matter what x is.","Rule कहता है output हमेशा 7 है, चाहे x कुछ भी हो।"],
          ["So f(100)=7, the same as f(0) or f(−5).","इसलिए f(100)=7, जैसा f(0) या f(−5) है।","Every input maps to the one fixed value.","हर input उसी एक fixed value पर जाता है।"]
        ],
        b("f(100) = 7.","f(100) = 7।"))),

    topic("MTH11-2-6",
      b("6. Modulus, Signum and Greatest Integer Functions","6. Modulus, Signum और Greatest Integer Functions"),
      b(
        "Three special functions, each defined in pieces.\n\n{{diagram:graph-panel-special}}\n\n**Modulus function**: $f(x)=|x|$, the distance of $x$ from 0 — always 0 or positive. $|3|=3$ and $|-3|=3$.\n\n**Signum function**: only cares about the sign. $f(x)=-1$ if $x<0$, $0$ if $x=0$, $+1$ if $x>0$. Range is just $\\{-1,0,1\\}$.\n\n**Greatest integer function**: $f(x)=[x]$, the largest whole number that is still $\\le x$ — round *down*, always, even for negatives.\n\n$$[3.7]=3\\qquad[-1.2]=-2$$\n\n⚠️ $[-1.2]$ is **not** $-1$. Rounding down means moving further left on the number line, not just dropping the decimal part.",
        "तीन special functions, हर एक टुकड़ों में बना है।\n\n{{diagram:graph-panel-special}}\n\n**Modulus function**: $f(x)=|x|$, यह $x$ की 0 से दूरी है — हमेशा 0 या positive। $|3|=3$ और $|-3|=3$।\n\n**Signum function**: सिर्फ़ sign से मतलब रखता है। $f(x)=-1$ अगर $x<0$, $0$ अगर $x=0$, $+1$ अगर $x>0$। Range सिर्फ़ $\\{-1,0,1\\}$ है।\n\n**Greatest integer function**: $f(x)=[x]$, यह सबसे बड़ा whole number है जो फिर भी $\\le x$ हो — हमेशा *नीचे* की ओर round कीजिए, negatives के लिए भी।\n\n$$[3.7]=3\\qquad[-1.2]=-2$$\n\n⚠️ $[-1.2]$, $-1$ **नहीं** है। नीचे round करने का मतलब है number line पर और बाईं ओर जाना, सिर्फ़ decimal भाग हटाना नहीं।"),
      worked(
        b("Find [4.9] and [−2.3].","[4.9] और [−2.3] निकालिए।"),
        [
          ["[4.9]: the largest whole number ≤ 4.9 is 4.","[4.9]: 4.9 से छोटा या बराबर सबसे बड़ा whole number 4 है।","Round down from 4.9, staying above 4.","4.9 से नीचे round कीजिए, 4 से ऊपर रहते हुए।"],
          ["[−2.3]: the largest whole number ≤ −2.3 is −3, not −2.","[−2.3]: −2.3 से छोटा या बराबर सबसे बड़ा whole number −3 है, −2 नहीं।","−3 is further left than −2.3 on the number line; −2 is to the right of −2.3, so it is not ≤ −2.3.","Number line पर −3, −2.3 से बाईं ओर है; −2, −2.3 के दाईं ओर है, इसलिए वह ≤ −2.3 नहीं है।"]
        ],
        b("[4.9] = 4 and [−2.3] = −3.","[4.9] = 4 और [−2.3] = −3।"))),

    topic("MTH11-2-7",
      b("7. Algebra of Real Functions","7. Real Functions का Algebra"),
      b(
        "Two functions can be combined the same way two numbers are.\n\n$$(f+g)(x)=f(x)+g(x)\\qquad(f-g)(x)=f(x)-g(x)$$\n$$(fg)(x)=f(x)\\cdot g(x)\\qquad\\left(\\frac{f}{g}\\right)(x)=\\frac{f(x)}{g(x)},\\ g(x)\\neq0$$\n\nEach combined function's domain is wherever **both** $f$ and $g$ are defined — for division, also remove any point where $g(x)=0$.\n\nExample: $f(x)=x+1$, $g(x)=x^2$. Then $(f+g)(2)=f(2)+g(2)=3+4=7$.",
        "दो functions को उसी तरह combine कर सकते हैं जैसे दो numbers को।\n\n$$(f+g)(x)=f(x)+g(x)\\qquad(f-g)(x)=f(x)-g(x)$$\n$$(fg)(x)=f(x)\\cdot g(x)\\qquad\\left(\\frac{f}{g}\\right)(x)=\\frac{f(x)}{g(x)},\\ g(x)\\neq0$$\n\nCombined function का domain वहाँ है जहाँ $f$ और $g$ **दोनों** defined हों — division के लिए, जहाँ $g(x)=0$ हो वह point भी हटाइए।\n\nउदाहरण: $f(x)=x+1$, $g(x)=x^2$। तो $(f+g)(2)=f(2)+g(2)=3+4=7$।"),
      worked(
        b("f(x)=x+1, g(x)=x². Find (f·g)(2).","f(x)=x+1, g(x)=x²। (f·g)(2) निकालिए।"),
        [
          ["Find f(2) and g(2) separately: f(2)=3, g(2)=4.","f(2) और g(2) अलग-अलग निकालिए: f(2)=3, g(2)=4।","Substitute x=2 into each rule on its own.","हर rule में अलग-अलग x=2 रखिए।"],
          ["Multiply them: (f·g)(2) = 3×4 = 12.","उन्हें गुणा कीजिए: (f·g)(2) = 3×4 = 12।","(fg)(x) is defined as the product f(x)·g(x).","(fg)(x) की परिभाषा है f(x)·g(x) का गुणनफल।"]
        ],
        b("(f·g)(2) = 12.","(f·g)(2) = 12।")))
  ];

  var trig=[

    topic("MTH11-3-0",
      b("0. Revise: Angles and Triangles You Already Know","0. दोहराइए: Angles और Triangles जो आप पहले से जानते हैं"),
      b(
        "In Class 10, you met three ratios inside a right triangle: $\\sin\\theta=\\dfrac{\\text{opposite}}{\\text{hypotenuse}}$, $\\cos\\theta=\\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$, $\\tan\\theta=\\dfrac{\\text{opposite}}{\\text{adjacent}}$.\n\nThose only worked for angles between $0°$ and $90°$ — the angles that actually fit inside a triangle.\n\nA wheel keeps turning past $90°$, past $360°$, even backwards. Class 11 stretches sin, cos and tan to work for **any** angle at all, using a circle instead of a triangle. This chapter builds that.",
        "Class 10 में, आपने right triangle के अंदर तीन ratios देखे: $\\sin\\theta=\\dfrac{\\text{opposite}}{\\text{hypotenuse}}$, $\\cos\\theta=\\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$, $\\tan\\theta=\\dfrac{\\text{opposite}}{\\text{adjacent}}$।\n\nये सिर्फ़ $0°$ से $90°$ के बीच वाले angles के लिए काम करते थे — जो triangle के अंदर सच में fit होते हैं।\n\nएक पहिया $90°$ के बाद भी घूमता रहता है, $360°$ के बाद भी, यहाँ तक कि उल्टा भी। Class 11 में sin, cos और tan को **किसी भी** angle के लिए फैलाते हैं, triangle की जगह circle का इस्तेमाल करके। यह chapter वहीं से शुरू होता है।"),
      worked(
        b("Recall: what is sin 30° from Class 10?","याद कीजिए: Class 10 से sin 30° क्या है?"),
        [
          ["Picture the special 30-60-90 triangle.","Special 30-60-90 triangle सोचिए।","This triangle's side ratios are always the same, memorised once.","इस triangle के side ratios हमेशा same हैं, एक बार याद किए हुए।"],
          ["The side opposite 30° is half the hypotenuse, so sin 30° = 1/2.","30° के सामने वाली side, hypotenuse की आधी है, इसलिए sin 30° = 1/2।","That is exactly the definition: opposite over hypotenuse.","यही तो definition है: opposite भाग hypotenuse।"]
        ],
        b("sin 30° = 1/2.","sin 30° = 1/2।"))),

    topic("MTH11-3-1",
      b("1. Degree and Radian Measure","1. Degree और Radian Measure"),
      b(
        "You already measure a full turn as $360°$. Mathematics has a second, more natural unit: the **radian**.\n\nOne radian is the angle made when the arc length equals the radius. A full turn measures $2\\pi$ radians.\n\n$$2\\pi\\ \\text{radians}=360°\\qquad\\pi\\ \\text{radians}=180°$$\n\nTo convert:\n\n$$\\text{radian measure}=\\dfrac{\\pi}{180}\\times\\text{degree measure}$$\n\nExample: $60°=\\dfrac{\\pi}{180}\\times60=\\dfrac{\\pi}{3}$ radians.\n\nRadians matter because arc length becomes a one-step formula: for a circle of radius $r$, an angle of $\\theta$ radians marks out an arc of length $l=r\\theta$.",
        "आप पूरे turn को $360°$ से नापते हैं। Mathematics में एक दूसरी, ज़्यादा natural unit है: **radian**।\n\nएक radian वह angle है जब arc length, radius के बराबर हो। पूरा turn $2\\pi$ radians का होता है।\n\n$$2\\pi\\ \\text{radians}=360°\\qquad\\pi\\ \\text{radians}=180°$$\n\nConvert करने के लिए:\n\n$$\\text{radian measure}=\\dfrac{\\pi}{180}\\times\\text{degree measure}$$\n\nउदाहरण: $60°=\\dfrac{\\pi}{180}\\times60=\\dfrac{\\pi}{3}$ radians।\n\nRadians इसलिए मायने रखते हैं क्योंकि arc length एक ही step का formula बन जाता है: radius $r$ वाले circle में, $\\theta$ radians का angle $l=r\\theta$ लम्बाई का arc बनाता है।"),
      worked(
        b("A crane arm 2 m long sweeps through an angle of 60°. How far does its tip move?","एक crane की भुजा 2 m लम्बी है और 60° का angle घूमती है। उसकी नोक कितनी दूरी तय करती है?"),
        [
          ["Convert 60° to radians first: 60° = π/3 radians.","पहले 60° को radians में बदलिए: 60° = π/3 radians।","The formula l = rθ needs θ in radians, not degrees.","Formula l = rθ के लिए θ radians में चाहिए, degrees में नहीं।"],
          ["Use l = rθ = 2 × (π/3) = 2π/3 m.","l = rθ = 2 × (π/3) = 2π/3 m इस्तेमाल कीजिए।","Multiply the radius by the angle in radians.","Radius को radians वाले angle से गुणा कीजिए।"]
        ],
        b("The tip moves 2π/3 m (about 2.09 m).","नोक 2π/3 m (लगभग 2.09 m) चलती है।"))),

    topic("MTH11-3-2",
      b("2. The Unit Circle and the Six Trigonometric Functions","2. Unit Circle और छह Trigonometric Functions"),
      b(
        "Draw a circle of radius 1, centred at the origin — the **unit circle**. Let a radius sweep out an angle $\\theta$ from the positive x-axis. It lands on a point $P$.\n\n{{diagram:unit-circle-angle}}\n\n**Definition:** $\\cos\\theta$ is the x-coordinate of $P$; $\\sin\\theta$ is the y-coordinate.\n\n$$P=(\\cos\\theta,\\sin\\theta)$$\n\nThe other four functions are built from these two:\n\n$$\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}\\qquad\\cot\\theta=\\dfrac{\\cos\\theta}{\\sin\\theta}\\qquad\\sec\\theta=\\dfrac{1}{\\cos\\theta}\\qquad\\text{cosec}\\ \\theta=\\dfrac{1}{\\sin\\theta}$$\n\nThis is why the old right-triangle ratios still work for small angles — a right triangle drawn inside the unit circle gives exactly the same numbers.",
        "1 radius का circle बनाइए, origin पर centred — यह **unit circle** है। मानिए एक radius, positive x-axis से $\\theta$ angle घूमता है। यह एक point $P$ पर पहुँचता है।\n\n{{diagram:unit-circle-angle}}\n\n**परिभाषा:** $\\cos\\theta$, $P$ का x-coordinate है; $\\sin\\theta$, y-coordinate है।\n\n$$P=(\\cos\\theta,\\sin\\theta)$$\n\nबाक़ी चार functions इन्हीं दो से बनते हैं:\n\n$$\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}\\qquad\\cot\\theta=\\dfrac{\\cos\\theta}{\\sin\\theta}\\qquad\\sec\\theta=\\dfrac{1}{\\cos\\theta}\\qquad\\text{cosec}\\ \\theta=\\dfrac{1}{\\sin\\theta}$$\n\nइसीलिए पुराने right-triangle ratios छोटे angles के लिए अब भी काम करते हैं — unit circle के अंदर बना right triangle बिल्कुल वही numbers देता है।"),
      worked(
        b("If cos θ = 0.6 and sin θ = 0.8, find tan θ.","अगर cos θ = 0.6 और sin θ = 0.8 हैं, tan θ निकालिए।"),
        [
          ["Use the definition tan θ = sin θ / cos θ.","परिभाषा tan θ = sin θ / cos θ इस्तेमाल कीजिए।","tan is always built from sin and cos this way.","tan हमेशा इसी तरह sin और cos से बनता है।"],
          ["tan θ = 0.8 / 0.6 = 4/3.","tan θ = 0.8 / 0.6 = 4/3।","Simplify the fraction 0.8/0.6, same as 8/6.","0.8/0.6 fraction को simplify कीजिए, 8/6 जैसा।"]
        ],
        b("tan θ = 4/3.","tan θ = 4/3।"))),

    topic("MTH11-3-3",
      b("3. Sign of Trigonometric Functions","3. Trigonometric Functions का Sign"),
      b(
        "On the unit circle, x-coordinates and y-coordinates change sign as $P$ moves around.\n\n{{diagram:trig-signs-astc}}\n\n- **Quadrant I** ($0°$ to $90°$): x and y both positive — every function is positive.\n- **Quadrant II** ($90°$ to $180°$): x negative, y positive — only sin (and cosec) positive.\n- **Quadrant III** ($180°$ to $270°$): x and y both negative — only tan (and cot) positive, since a negative divided by a negative is positive.\n- **Quadrant IV** ($270°$ to $360°$): x positive, y negative — only cos (and sec) positive.\n\nThe old phrase **‘All Students Take Calculus’** names which function is positive, quadrant by quadrant: All, Sin, Tan, Cos.",
        "Unit circle पर, $P$ घूमने के साथ x-coordinates और y-coordinates का sign बदलता है।\n\n{{diagram:trig-signs-astc}}\n\n- **Quadrant I** ($0°$ से $90°$): x और y दोनों positive — हर function positive है।\n- **Quadrant II** ($90°$ से $180°$): x negative, y positive — सिर्फ़ sin (और cosec) positive।\n- **Quadrant III** ($180°$ से $270°$): x और y दोनों negative — सिर्फ़ tan (और cot) positive, क्योंकि negative भाग negative, positive होता है।\n- **Quadrant IV** ($270°$ से $360°$): x positive, y negative — सिर्फ़ cos (और sec) positive।\n\nपुराना जुमला **‘All Students Take Calculus’**, quadrant दर quadrant बताता है कि कौन-सा function positive है: All, Sin, Tan, Cos।"),
      worked(
        b("Is sin 150° positive or negative?","sin 150° positive है या negative?"),
        [
          ["150° is between 90° and 180°, so it is in Quadrant II.","150°, 90° और 180° के बीच है, यानी यह Quadrant II में है।","Quadrant II covers exactly this range.","Quadrant II ठीक यही range है।"],
          ["In Quadrant II, sin is positive.","Quadrant II में, sin positive है।","Only sin (and cosec) stay positive there.","वहाँ सिर्फ़ sin (और cosec) positive रहते हैं।"]
        ],
        b("sin 150° is positive.","sin 150° positive है।"))),

    topic("MTH11-3-4",
      b("4. Domain and Range of Trigonometric Functions","4. Trigonometric Functions का Domain और Range"),
      b(
        "$\\sin\\theta$ and $\\cos\\theta$ are coordinates of a point going around a circle forever — every real number $\\theta$ is allowed.\n\n$$\\text{Domain of sin, cos}=\\mathbb{R}$$\n\nA circle of radius 1 never lets a coordinate go past $1$ or below $-1$.\n\n$$\\text{Range of sin, cos}=[-1,1]$$\n\n$\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}$ breaks wherever $\\cos\\theta=0$ — at $90°,270°,\\ldots$ — so those points are excluded from its domain. Its range is unbounded: all of $\\mathbb{R}$.",
        "$\\sin\\theta$ और $\\cos\\theta$, हमेशा घूमते circle पर एक point के coordinates हैं — हर real $\\theta$ allowed है।\n\n$$\\text{sin, cos का Domain}=\\mathbb{R}$$\n\n1 radius का circle किसी coordinate को $1$ से ऊपर या $-1$ से नीचे कभी नहीं जाने देता।\n\n$$\\text{sin, cos का Range}=[-1,1]$$\n\n$\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}$ वहाँ टूटता है जहाँ $\\cos\\theta=0$ — यानी $90°,270°,\\ldots$ पर — इसलिए ये points इसके domain से बाहर हैं। इसका range unbounded है: पूरा $\\mathbb{R}$।"),
      worked(
        b("Is tan 90° defined?","क्या tan 90° defined है?"),
        [
          ["Check cos 90°: it equals 0.","cos 90° check कीजिए: यह 0 के बराबर है।","tan θ = sin θ / cos θ needs a nonzero denominator.","tan θ = sin θ / cos θ के लिए denominator nonzero चाहिए।"],
          ["Dividing by 0 is not allowed, so tan 90° is undefined.","0 से divide करना allowed नहीं, इसलिए tan 90° undefined है।","90° is exactly one of the excluded points.","90° ठीक उन excluded points में से एक है।"]
        ],
        b("No, tan 90° is undefined.","नहीं, tan 90° undefined है।"))),

    topic("MTH11-3-5",
      b("5. Standard Angles and the Basic Identity","5. Standard Angles और Basic Identity"),
      b(
        "A handful of angles come up constantly. Worth knowing by heart:\n\n| θ | 0° | 30° | 45° | 60° | 90° |\n|---|---|---|---|---|---|\n| sin θ | 0 | 1/2 | √2/2 | √3/2 | 1 |\n| cos θ | 1 | √3/2 | √2/2 | 1/2 | 0 |\n\nAnd one identity ties sin and cos together for **every** angle, not just these five. On the unit circle, $P=(\\cos\\theta,\\sin\\theta)$ always sits at distance 1 from the centre — that is just $x^2+y^2=1$ for the circle.\n\n$$\\sin^2\\theta+\\cos^2\\theta=1$$\n\nKnow one of sin or cos, and this identity finds the other.",
        "कुछ angles बार-बार आते हैं। इन्हें याद रखना फ़ायदेमंद है:\n\n| θ | 0° | 30° | 45° | 60° | 90° |\n|---|---|---|---|---|---|\n| sin θ | 0 | 1/2 | √2/2 | √3/2 | 1 |\n| cos θ | 1 | √3/2 | √2/2 | 1/2 | 0 |\n\nऔर एक identity sin और cos को **हर** angle के लिए जोड़ती है, सिर्फ़ इन पाँच के लिए नहीं। Unit circle पर, $P=(\\cos\\theta,\\sin\\theta)$ हमेशा centre से दूरी 1 पर होता है — यह बस circle का $x^2+y^2=1$ है।\n\n$$\\sin^2\\theta+\\cos^2\\theta=1$$\n\nsin या cos में से एक जानिए, यह identity दूसरा निकाल देती है।"),
      worked(
        b("If sin θ = 3/5 and θ is in Quadrant I, find cos θ.","अगर sin θ = 3/5 और θ, Quadrant I में है, cos θ निकालिए।"),
        [
          ["Use sin²θ + cos²θ = 1: cos²θ = 1 − (3/5)² = 1 − 9/25 = 16/25.","sin²θ + cos²θ = 1 इस्तेमाल कीजिए: cos²θ = 1 − (3/5)² = 1 − 9/25 = 16/25।","Rearrange the identity to isolate cos²θ.","Identity को rearrange करके cos²θ अलग कीजिए।"],
          ["cos θ = 4/5, positive since Quadrant I keeps cos positive.","cos θ = 4/5, positive है क्योंकि Quadrant I में cos positive रहता है।","√(16/25) = 4/5, and the quadrant fixes the sign.","√(16/25) = 4/5, और quadrant sign तय करता है।"]
        ],
        b("cos θ = 4/5.","cos θ = 4/5।"))),

    topic("MTH11-3-6",
      b("6. Sum and Difference Formulas","6. Sum और Difference Formulas"),
      b(
        "Four formulas let you combine two known angles into one:\n\n$$\\cos(x+y)=\\cos x\\cos y-\\sin x\\sin y$$\n$$\\cos(x-y)=\\cos x\\cos y+\\sin x\\sin y$$\n$$\\sin(x+y)=\\sin x\\cos y+\\cos x\\sin y$$\n$$\\sin(x-y)=\\sin x\\cos y-\\cos x\\sin y$$\n\n⚠️ $\\cos(x+y)$ is **not** $\\cos x+\\cos y$ — a very common slip. The angle sum needs the full formula, not a simple split.\n\nThese come from comparing distances between points on the unit circle; your textbook proves it in full. For now, treat them as tools — learn to use them, then meet the proof later.",
        "चार formulas दो जाने-पहचाने angles को एक में मिला देते हैं:\n\n$$\\cos(x+y)=\\cos x\\cos y-\\sin x\\sin y$$\n$$\\cos(x-y)=\\cos x\\cos y+\\sin x\\sin y$$\n$$\\sin(x+y)=\\sin x\\cos y+\\cos x\\sin y$$\n$$\\sin(x-y)=\\sin x\\cos y-\\cos x\\sin y$$\n\n⚠️ $\\cos(x+y)$, $\\cos x+\\cos y$ के **बराबर नहीं** है — यह एक बहुत आम ग़लती है। Angle sum के लिए पूरा formula चाहिए, सीधा split नहीं।\n\nये unit circle पर points के बीच की दूरियाँ compare करने से आते हैं; आपकी textbook इसका पूरा proof देती है। अभी के लिए, इन्हें tool की तरह इस्तेमाल करना सीखिए — proof बाद में मिलेगा।"),
      worked(
        b("Find cos 75° using cos(45° + 30°).","cos(45° + 30°) का इस्तेमाल करके cos 75° निकालिए।"),
        [
          ["Apply cos(x+y) = cos x cos y − sin x sin y with x=45°, y=30°.","x=45°, y=30° लेकर cos(x+y) = cos x cos y − sin x sin y लगाइए।","75° = 45° + 30°, and both are standard angles you know.","75° = 45° + 30°, और दोनों जाने-पहचाने standard angles हैं।"],
          ["= (√2/2)(√3/2) − (√2/2)(1/2) = (√6 − √2)/4.","= (√2/2)(√3/2) − (√2/2)(1/2) = (√6 − √2)/4।","Substitute the known values and simplify the fraction.","जाने-पहचाने values रखकर fraction simplify कीजिए।"]
        ],
        b("cos 75° = (√6 − √2)/4.","cos 75° = (√6 − √2)/4।"))),

    topic("MTH11-3-7",
      b("7. Using the Formulas","7. Formulas का इस्तेमाल"),
      b(
        "Any angle that is a sum or difference of two standard angles can now be found exactly — no calculator needed.\n\n$$15°=45°-30°\\qquad105°=60°+45°\\qquad75°=45°+30°$$\n\nPick the pair of standard angles that add or subtract to your target, then apply the matching formula.\n\nThe same formulas also simplify expressions in exams — spotting $\\sin x\\cos y+\\cos x\\sin y$ hiding inside a longer question and collapsing it back to $\\sin(x+y)$ is a common, useful move.",
        "अब कोई भी ऐसा angle exactly निकाल सकते हैं जो दो standard angles का sum या difference हो — calculator की ज़रूरत नहीं।\n\n$$15°=45°-30°\\qquad105°=60°+45°\\qquad75°=45°+30°$$\n\nवह जोड़ी चुनिए जो जोड़ने या घटाने पर आपका target angle बनाए, फिर matching formula लगाइए।\n\यही formulas exams में expressions को simplify भी करते हैं — किसी लम्बे question के अंदर छुपे $\\sin x\\cos y+\\cos x\\sin y$ को पहचानकर वापस $\\sin(x+y)$ में समेटना एक आम, काम का तरीका है।"),
      worked(
        b("Find sin 15° using sin(45° − 30°).","sin(45° − 30°) का इस्तेमाल करके sin 15° निकालिए।"),
        [
          ["Apply sin(x−y) = sin x cos y − cos x sin y with x=45°, y=30°.","x=45°, y=30° लेकर sin(x−y) = sin x cos y − cos x sin y लगाइए।","15° = 45° − 30°, both standard angles.","15° = 45° − 30°, दोनों standard angles।"],
          ["= (√2/2)(√3/2) − (√2/2)(1/2) = (√6 − √2)/4.","= (√2/2)(√3/2) − (√2/2)(1/2) = (√6 − √2)/4।","Same substitution pattern as before, just with sin's formula.","पहले जैसा ही substitution, बस sin के formula के साथ।"]
        ],
        b("sin 15° = (√6 − √2)/4.","sin 15° = (√6 − √2)/4।")))
  ];

  window.SL_DATA.subjects = (window.SL_DATA.subjects||[]).filter(function(s){ return s.code!=="MATH11"; });

  window.SL_DATA.subjects.push({code:"MATH11",board:"CBSE",klass:11,icon:"📐",
    name:b("Mathematics — Class 11","गणित — कक्षा 11"),levelled:true,
    intro:b(
      "**A calm way to learn Class 11 Maths**\n\nStart with the idea. Read one short example. Try the quick questions. Then move up only when the easy step feels clear.\n\nYou do not need to memorise a long definition before you understand it.",
      "**Class 11 Maths सीखने का शांत तरीका**\n\nपहले विचार समझिए। एक छोटा example पढ़िए। Quick questions कीजिए। आसान step साफ़ लगे, तभी आगे बढ़िए।\n\nसमझने से पहले कोई लम्बी definition याद करने की ज़रूरत नहीं है।"),
    chapters:[
      {no:1,name:b("Sets","Sets — समुच्चय"),
        summary:b(
          "**Sets: what this chapter covers**\n\nA set is any clearly-described group. You can list it, or write a rule for it. Learn empty, singleton, finite and infinite sets. Learn subsets and the power set. Use Venn diagrams to see union, intersection, difference and complement. When two groups overlap, subtract the overlap once.",
          "**Sets: इस chapter में क्या सीखेंगे**\n\nSet कोई भी साफ़-साफ़ बताया हुआ group है। इसे list कर सकते हैं, या इसके लिए एक rule लिख सकते हैं। Empty, singleton, finite और infinite sets सीखिए। Subsets और power set सीखिए। Union, intersection, difference और complement को Venn diagram में देखिए। दो groups overlap करें, तो overlap एक बार घटाइए।"),
        checkpoint:b(
          "Getting most Warm-up and Standard questions right, across every topic in this chapter, means you are ready to move on. Scoring low? Go back to ‘0. Revise: Groups You Already Know’ and redo its example by hand — that is the fastest way forward, not a setback.",
          "इस chapter के हर topic में ज़्यादातर Warm-up और Standard questions सही होना, मतलब आप आगे बढ़ने के लिए ready हैं। Score कम है? ‘0. Revise: जो समूह आप पहले से जानते हैं’ पर वापस जाइए और उसका example हाथ से दोबारा कीजिए — यही सबसे तेज़ रास्ता है, हार नहीं।"),
        assessment:["MTH-S01","MTH-S03","MTH-S05","MTH-S06","MTH-S09","MTH-S12","MTH-S14","MTH-S17","MTH-S20",
          "MTH-S22","MTH-S25","MTH-S28","MTH-S31","MTH-S34","MTH-S37","MTH-S41","MTH-S44","MTH-S47",
          "MTH-S51","MTH-S54","MTH-S57","MTH-S63","MTH-S66","MTH-S70"],
        topics:sets},
      {no:2,name:b("Relations and Functions","Relations और Functions"),
        summary:b(
          "**Relations and Functions: what this chapter covers**\n\nAn ordered pair has a fixed order — (a,b) is not (b,a). The Cartesian product A×B lists every such pair from two sets. A relation is a chosen collection of these pairs, with its own domain, codomain and range. A function is a stricter relation: one input, exactly one output. Learn the everyday functions — identity, constant, polynomial, rational, modulus, signum, greatest integer — and how to combine two functions into one.",
          "**Relations और Functions: इस chapter में क्या सीखेंगे**\n\nOrdered pair का क्रम तय है — (a,b), (b,a) नहीं है। Cartesian product A×B, दो sets के ऐसे हर pair को list करता है। Relation, इन pairs का चुना हुआ collection है, जिसका अपना domain, codomain और range है। Function एक सख़्त relation है: एक input, ठीक एक output। रोज़मर्रा के functions सीखिए — identity, constant, polynomial, rational, modulus, signum, greatest integer — और दो functions को मिलाकर एक बनाना सीखिए।"),
        checkpoint:b(
          "Getting most Warm-up and Standard questions right, across every topic in this chapter, means you are ready to move on. Scoring low? Go back to ‘0. Revise: Pairs and Sets You Already Know’ and redo its example by hand — that is the fastest way forward, not a setback.",
          "इस chapter के हर topic में ज़्यादातर Warm-up और Standard questions सही होना, मतलब आप आगे बढ़ने के लिए ready हैं। Score कम है? ‘0. Revise: Pairs और Sets जो आप पहले से जानते हैं’ पर वापस जाइए और उसका example हाथ से दोबारा कीजिए — यही सबसे तेज़ रास्ता है, हार नहीं।"),
        assessment:["MTH-R01","MTH-R03","MTH-R06","MTH-R09","MTH-R12","MTH-R15","MTH-R18","MTH-R21",
          "MTH-R24","MTH-R27","MTH-R30","MTH-R33","MTH-R36","MTH-R39","MTH-R42","MTH-R45",
          "MTH-R48","MTH-R51","MTH-R54","MTH-R57","MTH-R60","MTH-R63","MTH-R66","MTH-R69"],
        topics:relations},
      {no:3,name:b("Trigonometric Functions","Trigonometric Functions"),
        summary:b(
          "**Trigonometric Functions: what this chapter covers**\n\nDegree and radian are two units for the same angle; radians make the arc-length formula l=rθ a one-liner. The unit circle defines sin θ and cos θ as coordinates for any angle at all, not just angles inside a triangle — tan, cot, sec and cosec are built from those two. Signs flip by quadrant (All, Sin, Tan, Cos). Domain of sin/cos is all real numbers, range is [-1,1]; tan is undefined wherever cos θ=0. The identity sin²θ+cos²θ=1 links them at every angle. Sum and difference formulas combine two known angles to find a third.",
          "**Trigonometric Functions: इस chapter में क्या सीखेंगे**\n\nDegree और radian, एक ही angle की दो units हैं; radians से arc-length formula l=rθ एक ही line का हो जाता है। Unit circle, sin θ और cos θ को किसी भी angle के coordinates की तरह defines करता है, सिर्फ़ triangle के अंदर वाले angles के लिए नहीं — tan, cot, sec और cosec इन्हीं दो से बनते हैं। Quadrant बदलने पर signs बदलते हैं (All, Sin, Tan, Cos)। sin/cos का domain सभी real numbers है, range [-1,1] है; जहाँ cos θ=0 हो वहाँ tan undefined है। Identity sin²θ+cos²θ=1, हर angle पर इन्हें जोड़ती है। Sum और difference formulas दो जाने-पहचाने angles से तीसरा निकालते हैं।"),
        checkpoint:b(
          "Getting most Warm-up and Standard questions right, across every topic in this chapter, means you are ready to move on. Scoring low? Go back to '0. Revise: Angles and Triangles You Already Know' and redo its example by hand — that is the fastest way forward, not a setback.",
          "इस chapter के हर topic में ज़्यादातर Warm-up और Standard questions सही होना, मतलब आप आगे बढ़ने के लिए ready हैं। Score कम है? '0. Revise: Angles और Triangles जो आप पहले से जानते हैं' पर वापस जाइए और उसका example हाथ से दोबारा कीजिए — यही सबसे तेज़ रास्ता है, हार नहीं।"),
        assessment:["MTH-T01","MTH-T03","MTH-T05","MTH-T06","MTH-T09","MTH-T12","MTH-T15","MTH-T18",
          "MTH-T21","MTH-T24","MTH-T27","MTH-T30","MTH-T33","MTH-T36","MTH-T39","MTH-T42",
          "MTH-T46","MTH-T49","MTH-T52","MTH-T55","MTH-T58","MTH-T61","MTH-T64","MTH-T67"],
        topics:trig}
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

  /* ---- Ch2 Topic 0: Revise (5) ---- */
  add("MTH-R01",2,"MTH11-2-0",1,"Is (4, 9) the same as (9, 4)?","क्या (4, 9), (9, 4) जैसा है?",
    ["Yes, always","No, order matters","Yes, if 4 < 9","Only inside a set"],["हाँ, हमेशा","नहीं, order मायने रखता है","हाँ, अगर 4 < 9 हो","सिर्फ़ set के अंदर"],"B","Swapping the positions gives a different ordered pair.","Positions बदलने से अलग ordered pair बनता है।");
  add("MTH-R02",2,"MTH11-2-0",1,"In the ordered pair (a, b), which is written first?","Ordered pair (a, b) में पहले क्या लिखा जाता है?",
    ["a","b","whichever is larger","it does not matter"],["a","b","जो बड़ा हो","मायने नहीं रखता"],"A","By definition, a is the first element.","परिभाषा से, a पहला element है।");
  add("MTH-R03",2,"MTH11-2-0",1,"(a, b) = (b, a) is true only when:","(a, b) = (b, a) तभी सच है जब:",
    ["a = 0","b = 0","a = b","never"],["a = 0","b = 0","a = b","कभी नहीं"],"C","Swapping equal values changes nothing.","बराबर values को बदलने से कुछ नहीं बदलता।");
  add("MTH-R04",2,"MTH11-2-0",2,"Which of these is a set, not an ordered pair?","इनमें से कौन-सा set है, ordered pair नहीं?",
    ["(2, 3)","{2, 3}","(3, 2)","(2, 2)"],["(2, 3)","{2, 3}","(3, 2)","(2, 2)"],"B","Curly braces mean a set; round brackets mean an ordered pair.","Curly braces set दिखाते हैं; round brackets ordered pair।");
  add("MTH-R05",2,"MTH11-2-0",2,"What is different between the set {2,3} and the pair (2,3)?","Set {2,3} और pair (2,3) में क्या अलग है?",
    ["the numbers used","whether order matters","nothing, they are the same","the count of members"],["इस्तेमाल हुए numbers","क्या order मायने रखता है","कुछ नहीं, दोनों same हैं","members की गिनती"],"B","In a set, order is irrelevant; in a pair, order is everything.","Set में order मायने नहीं रखता; pair में order ही सब कुछ है।");

  /* ---- Ch2 Topic 1: Cartesian Product (8) ---- */
  add("MTH-R06",2,"MTH11-2-1",1,"If A={1,2} and B={x,y}, which pair is in A×B?","अगर A={1,2} और B={x,y}, कौन-सा pair A×B में है?",
    ["(1, x)","(x, 1)","(1, 2)","(x, y)"],["(1, x)","(x, 1)","(1, 2)","(x, y)"],"A","The first element must come from A, the second from B.","पहला element A से, दूसरा B से आना चाहिए।");
  add("MTH-R07",2,"MTH11-2-1",1,"n(A)=3, n(B)=2. Find n(A×B).","n(A)=3, n(B)=2। n(A×B) निकालिए।",
    ["5","6","9","2"],["5","6","9","2"],"B","3 × 2 = 6.","3 × 2 = 6।");
  add("MTH-R08",2,"MTH11-2-1",1,"In A×B, the first element of every pair comes from:","A×B में हर pair का पहला element कहाँ से आता है?",
    ["A","B","either A or B","neither"],["A","B","A या B, कोई भी","कोई नहीं"],"A","A×B keeps A's elements first, always.","A×B में A के elements हमेशा पहले होते हैं।");
  add("MTH-R09",2,"MTH11-2-1",2,"A={1,2,3}, B={4,5}. How many pairs are in A×B?","A={1,2,3}, B={4,5}। A×B में कितने pairs हैं?",
    ["5","6","8","9"],["5","6","8","9"],"B","3 × 2 = 6.","3 × 2 = 6।");
  add("MTH-R10",2,"MTH11-2-1",2,"A={1,2}, B={1,2}. Is (2,1) in A×B?","A={1,2}, B={1,2}। क्या (2,1), A×B में है?",
    ["Yes","No","Only if listed in B×A","Cannot tell"],["हाँ","नहीं","सिर्फ़ B×A में लिखा हो तो","कह नहीं सकते"],"A","2 is in A and 1 is in B, so the pair fits.","2, A में है और 1, B में है, इसलिए pair सही है।");
  add("MTH-R11",2,"MTH11-2-1",2,"n(A×B)=12 and n(A)=3. What is n(B)?","n(A×B)=12 और n(A)=3। n(B) क्या है?",
    ["4","9","15","36"],["4","9","15","36"],"A","12 ÷ 3 = 4.","12 ÷ 3 = 4।");
  add("MTH-R12",2,"MTH11-2-1",3,"n(A×B)=15 and n(B)=5. What is n(A)?","n(A×B)=15 और n(B)=5। n(A) क्या है?",
    ["3","10","20","75"],["3","10","20","75"],"A","15 ÷ 5 = 3.","15 ÷ 5 = 3।");
  add("MTH-R13",2,"MTH11-2-1",3,"n(B)=2, n(C)=3. How many pairs are in B×C?","n(B)=2, n(C)=3। B×C में कितने pairs हैं?",
    ["5","6","4","9"],["5","6","4","9"],"B","2 × 3 = 6.","2 × 3 = 6।");

  /* ---- Ch2 Topic 2: Relations (8) ---- */
  add("MTH-R14",2,"MTH11-2-2",1,"A relation from A to B is a subset of:","A से B तक relation किसका subset है?",
    ["A","B","A×B","A∪B"],["A","B","A×B","A∪B"],"C","A relation is a chosen collection of pairs from A×B.","Relation, A×B में से चुने हुए pairs का collection है।");
  add("MTH-R15",2,"MTH11-2-2",1,"In a relation, the codomain is:","Relation में codomain क्या है?",
    ["only the outputs used","the whole target set B","the whole set A","the domain"],["सिर्फ़ इस्तेमाल हुए outputs","पूरा target set B","पूरा set A","domain"],"B","Codomain is the entire target set, whether used or not.","Codomain पूरा target set है, चाहे इस्तेमाल हो या न हो।");
  add("MTH-R16",2,"MTH11-2-2",1,"In a relation, the domain is:","Relation में domain क्या है?",
    ["the whole set A","first elements actually used","second elements actually used","the whole set B"],["पूरा set A","इस्तेमाल हुए पहले elements","इस्तेमाल हुए दूसरे elements","पूरा set B"],"B","Domain is only the first elements that were actually paired.","Domain सिर्फ़ वे पहले elements हैं जो सच में pair हुए।");
  add("MTH-R17",2,"MTH11-2-2",2,"R={(1,2),(2,4),(3,6)}. Find the domain of R.","R={(1,2),(2,4),(3,6)}। R का domain निकालिए।",
    ["{2,4,6}","{1,2,3}","{1,2,3,4,6}","{6}"],["{2,4,6}","{1,2,3}","{1,2,3,4,6}","{6}"],"B","Domain is the set of first elements.","Domain पहले elements का set है।");
  add("MTH-R18",2,"MTH11-2-2",2,"For the same R={(1,2),(2,4),(3,6)}, find the range.","उसी R={(1,2),(2,4),(3,6)} के लिए, range निकालिए।",
    ["{1,2,3}","{2,4,6}","{1,2,3,4,6}","{6}"],["{1,2,3}","{2,4,6}","{1,2,3,4,6}","{6}"],"B","Range is the set of second elements.","Range दूसरे elements का set है।");
  add("MTH-R19",2,"MTH11-2-2",2,"Range is always:","Range हमेशा कैसा होता है?",
    ["bigger than codomain","equal to codomain","inside codomain, possibly smaller","unrelated to codomain"],["codomain से बड़ा","codomain के बराबर","codomain के अंदर, शायद छोटा","codomain से बेमतलब"],"C","Range can never go outside the codomain.","Range कभी codomain से बाहर नहीं जा सकता।");
  add("MTH-R20",2,"MTH11-2-2",3,"A={1,2,3,4}, B={1,4,9,16}. R: y=x². Find the range of R.","A={1,2,3,4}, B={1,4,9,16}। R: y=x²। R का range निकालिए।",
    ["{1,4,9,16}","{1,2,3,4}","{1,4,16}","{9}"],["{1,4,9,16}","{1,2,3,4}","{1,4,16}","{9}"],"A","1²,2²,3²,4² give 1,4,9,16 — every codomain value is reached.","1²,2²,3²,4² से 1,4,9,16 मिलते हैं — codomain की हर value पहुँचती है।");
  add("MTH-R21",2,"MTH11-2-2",3,"A={2,3,5}, B={4,6,10,15,25}. R: x relates to y if y is a multiple of x. Is (3,10) in R?","A={2,3,5}, B={4,6,10,15,25}। R: x, y से जुड़ता है अगर y, x का multiple हो। क्या (3,10), R में है?",
    ["Yes, 10 is a multiple of 3","No, 10 is not a multiple of 3","Yes, always","Cannot tell"],["हाँ, 10, 3 का multiple है","नहीं, 10, 3 का multiple नहीं है","हाँ, हमेशा","कह नहीं सकते"],"B","10 ÷ 3 is not a whole number.","10 ÷ 3 whole number नहीं है।");

  /* ---- Ch2 Topic 3: What is a Function? (8) ---- */
  add("MTH-R22",2,"MTH11-2-3",1,"A function must give each input:","Function हर input को क्या देता है?",
    ["two outputs","exactly one output","no output","only positive outputs"],["दो outputs","ठीक एक output","कोई output नहीं","केवल positive outputs"],"B","One input, one output — the core rule.","एक input, एक output — मुख्य rule।");
  add("MTH-R23",2,"MTH11-2-3",1,"Which is NOT allowed in a function?","Function में कौन-सा allowed नहीं है?",
    ["two inputs sharing one output","one input with two different outputs","every input having an output","one input, one output"],["दो inputs का एक ही output","एक input के दो अलग outputs","हर input का एक output होना","एक input, एक output"],"B","One input cannot point to two different outputs.","एक input दो अलग outputs की ओर नहीं जा सकता।");
  add("MTH-R24",2,"MTH11-2-3",1,"f(x)=3x. Find f(4).","f(x)=3x। f(4) निकालिए।",
    ["7","12","34","43"],["7","12","34","43"],"B","3 × 4 = 12.","3 × 4 = 12।");
  add("MTH-R25",2,"MTH11-2-3",2,"R={(1,5),(2,5),(3,5)}. Is R a function?","R={(1,5),(2,5),(3,5)}। क्या R function है?",
    ["Yes, each input has exactly one output","No, outputs repeat","No, too few inputs","Cannot tell"],["हाँ, हर input का ठीक एक output है","नहीं, outputs दोहराए गए हैं","नहीं, inputs बहुत कम हैं","कह नहीं सकते"],"A","Sharing an output is fine; each input still has just one.","Output साझा होना ठीक है; हर input का फिर भी एक ही है।");
  add("MTH-R26",2,"MTH11-2-3",2,"R={(1,2),(1,3),(2,4)}. Is R a function?","R={(1,2),(1,3),(2,4)}। क्या R function है?",
    ["Yes","No, input 1 has two outputs","No, too many pairs","Yes, if reordered"],["हाँ","नहीं, input 1 के दो outputs हैं","नहीं, pairs बहुत ज़्यादा हैं","हाँ, दोबारा order करने पर"],"B","1 appears with both 2 and 3 as outputs.","1 के साथ 2 और 3 दोनों outputs आए हैं।");
  add("MTH-R27",2,"MTH11-2-3",2,"Many inputs sharing the same output is:","कई inputs का output एक जैसा होना क्या है?",
    ["never allowed in a function","always allowed in a function","only allowed if inputs are equal","a sign of an error"],["function में कभी allowed नहीं","function में हमेशा allowed","सिर्फ़ inputs बराबर हों तो allowed","एक error का संकेत"],"B","Many-one is a normal, allowed pattern.","Many-one एक सामान्य, allowed पैटर्न है।");
  add("MTH-R28",2,"MTH11-2-3",3,"f(x)=x². Can f(2)=4 and f(−2)=4 both hold?","f(x)=x²। क्या f(2)=4 और f(−2)=4 दोनों हो सकते हैं?",
    ["No, contradiction","Yes, different inputs can share an output","No, only positive inputs allowed","Yes, but only for x=0"],["नहीं, contradiction है","हाँ, अलग inputs का output साझा हो सकता है","नहीं, सिर्फ़ positive inputs allowed","हाँ, पर सिर्फ़ x=0 के लिए"],"B","2 and −2 are different inputs; sharing an output is fine.","2 और −2 अलग inputs हैं; output साझा होना ठीक है।");
  add("MTH-R29",2,"MTH11-2-3",4,"A={1,2,3}. Pairs are (1,4),(2,5),(3,4). Is this a function from A?","A={1,2,3}। Pairs हैं (1,4),(2,5),(3,4)। क्या यह A से एक function है?",
    ["Yes, every element of A has exactly one image","No, 4 repeats as an output","No, domain is incomplete","Cannot tell"],["हाँ, A के हर element का ठीक एक image है","नहीं, 4 output के रूप में दोहराया गया है","नहीं, domain अधूरा है","कह नहीं सकते"],"A","Repeating an output is allowed; each input still has one image.","Output दोहराना allowed है; हर input का फिर भी एक image है।");

  /* ---- Ch2 Topic 4: Domain, Codomain, Range (10) ---- */
  add("MTH-R30",2,"MTH11-2-4",1,"The values allowed into a function are its:","Function में डालने वाली allowed values क्या हैं?",
    ["range","codomain","domain","graph"],["range","codomain","domain","graph"],"C","Domain means allowed inputs.","Domain का अर्थ allowed inputs है।");
  add("MTH-R31",2,"MTH11-2-4",1,"The values that actually come out are the function's:","जो values सच में बाहर आती हैं वे function का क्या हैं?",
    ["domain","codomain","range","rule"],["domain","codomain","range","rule"],"C","Range is what actually comes out.","Range वही है जो सच में बाहर आता है।");
  add("MTH-R32",2,"MTH11-2-4",1,"Find the domain of f(x) = 1/(x−5).","f(x) = 1/(x−5) का domain निकालिए।",
    ["ℝ","ℝ − {5}","ℝ − {0}","{5}"],["ℝ","ℝ − {5}","ℝ − {0}","{5}"],"B","x=5 makes the denominator 0.","x=5 पर denominator 0 हो जाता है।");
  add("MTH-R33",2,"MTH11-2-4",2,"Find the domain of f(x) = 1/(x+2).","f(x) = 1/(x+2) का domain निकालिए।",
    ["ℝ − {2}","ℝ − {−2}","ℝ","{−2}"],["ℝ − {2}","ℝ − {−2}","ℝ","{−2}"],"B","x=−2 makes the denominator 0.","x=−2 पर denominator 0 हो जाता है।");
  add("MTH-R34",2,"MTH11-2-4",2,"f(x)=(x+1)/((x−2)(x+3)). Which values are excluded?","f(x)=(x+1)/((x−2)(x+3))। कौन-से values excluded हैं?",
    ["{2,−3}","{−2,3}","{1,−1}","{2,3}"],["{2,−3}","{−2,3}","{1,−1}","{2,3}"],"A","The denominator is 0 at x=2 and x=−3.","Denominator x=2 और x=−3 पर 0 होता है।");
  add("MTH-R35",2,"MTH11-2-4",2,"Why is x=1 excluded from the domain of f(x)=1/(x−1)?","f(x)=1/(x−1) के domain से x=1 को क्यों हटाया गया है?",
    ["The numerator is 0 there","The denominator is 0 there","1 is not a real number","It is not excluded"],["वहाँ numerator 0 है","वहाँ denominator 0 है","1 real number नहीं है","यह excluded नहीं है"],"B","Division by 0 is not allowed.","0 से भाग allowed नहीं है।");
  add("MTH-R36",2,"MTH11-2-4",3,"f(x)=(x²+1)/(x²−9). Find the excluded values.","f(x)=(x²+1)/(x²−9)। Excluded values निकालिए।",
    ["{3,−3}","{9,−9}","{1,−1}","{0}"],["{3,−3}","{9,−9}","{1,−1}","{0}"],"A","x²=9 gives x=3 or x=−3.","x²=9 से x=3 या x=−3 मिलता है।");
  add("MTH-R37",2,"MTH11-2-4",3,"f(x)=(2x+1)/((x−1)(x−6)). What is the domain?","f(x)=(2x+1)/((x−1)(x−6))। Domain क्या है?",
    ["ℝ − {1,6}","ℝ − {−1,−6}","ℝ","ℝ − {2,1}"],["ℝ − {1,6}","ℝ − {−1,−6}","ℝ","ℝ − {2,1}"],"A","The denominator is 0 at x=1 and x=6.","Denominator x=1 और x=6 पर 0 होता है।");
  add("MTH-R38",2,"MTH11-2-4",4,"f(x)=(x²−4)/(x−2). What is the domain?","f(x)=(x²−4)/(x−2)। Domain क्या है?",
    ["ℝ","ℝ − {2}","ℝ − {−2}","ℝ − {2,−2}"],["ℝ","ℝ − {2}","ℝ − {−2}","ℝ − {2,−2}"],"B","At x=2 the formula itself is 0/0, undefined — only that one point is excluded.","x=2 पर formula ख़ुद 0/0 है, undefined — सिर्फ़ वही एक point excluded है।");
  add("MTH-R39",2,"MTH11-2-4",5,"Find the domain of f(x) = 1/√(x−4).","f(x) = 1/√(x−4) का domain निकालिए।",
    ["ℝ − {4}","x ≥ 4","x > 4","x ≤ 4"],["ℝ − {4}","x ≥ 4","x > 4","x ≤ 4"],"C","x−4 must be positive: not negative (square root) and not zero (denominator).","x−4 positive होना चाहिए: negative नहीं (square root) और zero नहीं (denominator)।");

  /* ---- Ch2 Topic 5: Identity, Constant, Polynomial, Rational (10) ---- */
  add("MTH-R40",2,"MTH11-2-5",1,"For the identity function f(x)=x, f(7) is:","Identity function f(x)=x के लिए, f(7) क्या है?",
    ["0","1","7","49"],["0","1","7","49"],"C","The identity function returns its input unchanged.","Identity function अपना input बिना बदले लौटाता है।");
  add("MTH-R41",2,"MTH11-2-5",1,"For the constant function f(x)=9, f(50) is:","Constant function f(x)=9 के लिए, f(50) क्या है?",
    ["50","9","0","59"],["50","9","0","59"],"B","A constant function ignores its input.","Constant function अपने input को नज़रअंदाज़ करता है।");
  add("MTH-R42",2,"MTH11-2-5",1,"Which is a polynomial function?","कौन-सा polynomial function है?",
    ["f(x)=1/x","f(x)=x²+3x+1","f(x)=√x","f(x)=|x|"],["f(x)=1/x","f(x)=x²+3x+1","f(x)=√x","f(x)=|x|"],"B","Built from powers of x, added together.","x की powers से बना, जोड़कर।");
  add("MTH-R43",2,"MTH11-2-5",2,"The domain of any polynomial function is:","किसी भी polynomial function का domain क्या है?",
    ["ℝ minus some points","only positive numbers","ℝ (all real numbers)","only integers"],["ℝ में से कुछ points कम","सिर्फ़ positive numbers","ℝ (सभी real numbers)","सिर्फ़ integers"],"C","No denominator or square root to restrict it.","इसमें कोई denominator या square root restrict नहीं करता।");
  add("MTH-R44",2,"MTH11-2-5",2,"The range of the constant function f(x)=−4 is:","Constant function f(x)=−4 का range क्या है?",
    ["ℝ","{−4}","{0}","{4}"],["ℝ","{−4}","{0}","{4}"],"B","Only −4 is ever produced.","सिर्फ़ −4 ही हमेशा मिलता है।");
  add("MTH-R45",2,"MTH11-2-5",2,"A rational function is a ratio of:","Rational function किसका ratio है?",
    ["two constants","two polynomials","two square roots","two sets"],["दो constants","दो polynomials","दो square roots","दो sets"],"B","One polynomial divided by another.","एक polynomial को दूसरे से divide किया हुआ।");
  add("MTH-R46",2,"MTH11-2-5",3,"For f(x)=x, what does the graph look like?","f(x)=x के लिए, graph कैसा दिखता है?",
    ["a flat horizontal line","a line through the origin at 45°","a U-shaped curve","a V-shape"],["एक सपाट horizontal line","origin से 45° वाली line","एक U-आकार curve","एक V-आकार"],"B","Every point has equal x and y, a 45° line.","हर point पर x और y बराबर हैं, 45° की line।");
  add("MTH-R47",2,"MTH11-2-5",3,"Which function has the SAME output for every input?","कौन-सा function हर input का एक जैसा output देता है?",
    ["identity","constant","polynomial","rational"],["identity","constant","polynomial","rational"],"B","A constant function never changes its output.","Constant function अपना output कभी नहीं बदलता।");
  add("MTH-R48",2,"MTH11-2-5",3,"f(x)=5/(x−1) is best described as:","f(x)=5/(x−1) को सबसे अच्छा क्या कहेंगे?",
    ["identity","constant","polynomial","rational"],["identity","constant","polynomial","rational"],"D","It is one expression divided by another — rational.","यह एक expression को दूसरे से divide किया हुआ है — rational।");
  add("MTH-R49",2,"MTH11-2-5",4,"Is f(x)=x³−2x a polynomial function?","क्या f(x)=x³−2x एक polynomial function है?",
    ["Yes, built from powers of x added together","No, because of the minus sign","No, because x³ is not allowed","Yes, but only for x>0"],["हाँ, x की powers जोड़कर बना है","नहीं, minus sign की वजह से","नहीं, x³ allowed नहीं है","हाँ, पर सिर्फ़ x>0 के लिए"],"A","Subtraction is just adding a negative term — still a polynomial.","Subtraction, negative term जोड़ना ही है — फिर भी polynomial है।");

  /* ---- Ch2 Topic 6: Modulus, Signum, Greatest Integer (10) ---- */
  add("MTH-R50",2,"MTH11-2-6",1,"|−8| equals:","|−8| बराबर है:",
    ["−8","8","0","−1"],["−8","8","0","−1"],"B","Modulus gives the distance from 0, always positive or 0.","Modulus 0 से दूरी देता है, हमेशा positive या 0।");
  add("MTH-R51",2,"MTH11-2-6",1,"The range of the signum function is:","Signum function का range क्या है?",
    ["ℝ","{−1,0,1}","{0,1}","all integers"],["ℝ","{−1,0,1}","{0,1}","सभी integers"],"B","Signum only ever outputs −1, 0 or 1.","Signum हमेशा सिर्फ़ −1, 0 या 1 देता है।");
  add("MTH-R52",2,"MTH11-2-6",1,"[5.9] equals:","[5.9] बराबर है:",
    ["5","6","5.9","0"],["5","6","5.9","0"],"A","The greatest integer ≤ 5.9 is 5.","5.9 से छोटा या बराबर सबसे बड़ा integer 5 है।");
  add("MTH-R53",2,"MTH11-2-6",2,"sgn(−7) equals:","sgn(−7) बराबर है:",
    ["−7","−1","0","1"],["−7","−1","0","1"],"B","Any negative input gives −1.","कोई भी negative input −1 देता है।");
  add("MTH-R54",2,"MTH11-2-6",2,"[−3.1] equals:","[−3.1] बराबर है:",
    ["−3","−4","3","4"],["−3","−4","3","4"],"B","−4 is the greatest integer ≤ −3.1 (round down, not toward zero).","−4, −3.1 से छोटा या बराबर सबसे बड़ा integer है (नीचे round करें, zero की ओर नहीं)।");
  add("MTH-R55",2,"MTH11-2-6",2,"|x| = 0 only when:","|x| = 0 तभी होता है जब:",
    ["x = 1","x = −1","x = 0","never"],["x = 1","x = −1","x = 0","कभी नहीं"],"C","Only 0 is at distance 0 from itself.","सिर्फ़ 0 की ख़ुद से दूरी 0 है।");
  add("MTH-R56",2,"MTH11-2-6",3,"Which value is NOT in the range of the greatest integer function?","कौन-सी value greatest integer function के range में नहीं है?",
    ["5","−2","0","2.5"],["5","−2","0","2.5"],"D","The range is only whole numbers; 2.5 is not one.","Range सिर्फ़ whole numbers हैं; 2.5 उनमें से नहीं है।");
  add("MTH-R57",2,"MTH11-2-6",3,"sgn(0) equals:","sgn(0) बराबर है:",
    ["−1","0","1","undefined"],["−1","0","1","undefined"],"B","The signum function is defined to give 0 exactly at 0.","Signum function ठीक 0 पर 0 देने के लिए defined है।");
  add("MTH-R58",2,"MTH11-2-6",3,"[2.999] equals:","[2.999] बराबर है:",
    ["2","3","2.999","0"],["2","3","2.999","0"],"A","The greatest integer ≤ 2.999 is 2, however close to 3 it looks.","2.999 से छोटा या बराबर सबसे बड़ा integer 2 है, चाहे वह 3 के कितना ही पास दिखे।");
  add("MTH-R59",2,"MTH11-2-6",4,"For which x is |x| = x always true?","किन x के लिए |x| = x हमेशा सच है?",
    ["only x=0","only x<0","x ≥ 0","all real x"],["सिर्फ़ x=0","सिर्फ़ x<0","x ≥ 0","सभी real x"],"C","For non-negative x, the distance from 0 is x itself.","Non-negative x के लिए, 0 से दूरी ख़ुद x ही है।");

  /* ---- Ch2 Topic 7: Algebra of Real Functions (10) ---- */
  add("MTH-R60",2,"MTH11-2-7",1,"(f+g)(x) means:","(f+g)(x) का मतलब है:",
    ["f(x)+g(x)","f(g(x))","f(x)×g(x)","f(x)−g(x)"],["f(x)+g(x)","f(g(x))","f(x)×g(x)","f(x)−g(x)"],"A","Add the two outputs together.","दोनों outputs को जोड़िए।");
  add("MTH-R61",2,"MTH11-2-7",1,"f(x)=2, g(x)=5. Find (f+g)(x).","f(x)=2, g(x)=5। (f+g)(x) निकालिए।",
    ["3","7","10","2"],["3","7","10","2"],"B","2 + 5 = 7.","2 + 5 = 7।");
  add("MTH-R62",2,"MTH11-2-7",1,"f(x)=x, g(x)=3. Find (f·g)(4).","f(x)=x, g(x)=3। (f·g)(4) निकालिए।",
    ["7","12","4","3"],["7","12","4","3"],"B","f(4)=4, g(4)=3, product = 12.","f(4)=4, g(4)=3, गुणनफल = 12।");
  add("MTH-R63",2,"MTH11-2-7",2,"f(x)=x+2, g(x)=x. Find (f−g)(10).","f(x)=x+2, g(x)=x। (f−g)(10) निकालिए।",
    ["12","8","2","10"],["12","8","2","10"],"C","f(10)=12, g(10)=10, difference = 2.","f(10)=12, g(10)=10, अंतर = 2।");
  add("MTH-R64",2,"MTH11-2-7",2,"(f/g)(x) is defined only when:","(f/g)(x) तभी defined है जब:",
    ["f(x)=0","g(x)=0","g(x)≠0","f(x)≠g(x)"],["f(x)=0","g(x)=0","g(x)≠0","f(x)≠g(x)"],"C","Division needs a nonzero denominator.","Division के लिए denominator नonzero होना चाहिए।");
  add("MTH-R65",2,"MTH11-2-7",2,"f(x)=x², g(x)=x+1. Find (f+g)(3).","f(x)=x², g(x)=x+1। (f+g)(3) निकालिए।",
    ["9","4","13","12"],["9","4","13","12"],"C","f(3)=9, g(3)=4, sum = 13.","f(3)=9, g(3)=4, योग = 13।");
  add("MTH-R66",2,"MTH11-2-7",3,"f(x)=x+1, g(x)=x−1. Find (f·g)(5).","f(x)=x+1, g(x)=x−1। (f·g)(5) निकालिए।",
    ["24","10","6","25"],["24","10","6","25"],"A","f(5)=6, g(5)=4, product = 24.","f(5)=6, g(5)=4, गुणनफल = 24।");
  add("MTH-R67",2,"MTH11-2-7",3,"The domain of (f+g) is:","(f+g) का domain क्या है?",
    ["the domain of f only","the domain of g only","where both f and g are defined","always all of ℝ"],["सिर्फ़ f का domain","सिर्फ़ g का domain","जहाँ f और g दोनों defined हों","हमेशा पूरा ℝ"],"C","Both must give a real output for the sum to make sense.","योग के लिए f और g दोनों का real output ज़रूरी है।");
  add("MTH-R68",2,"MTH11-2-7",4,"f(x)=1/x, g(x)=x. Find the domain of (f/g)(x).","f(x)=1/x, g(x)=x। (f/g)(x) का domain निकालिए।",
    ["ℝ","ℝ − {0}","ℝ − {1}","ℝ − {0,1}"],["ℝ","ℝ − {0}","ℝ − {1}","ℝ − {0,1}"],"B","f itself needs x≠0, and g(x)≠0 also needs x≠0 — the same single restriction.","f को ख़ुद x≠0 चाहिए, और g(x)≠0 के लिए भी x≠0 चाहिए — वही एक restriction।");
  add("MTH-R69",2,"MTH11-2-7",5,"f(x)=√x, g(x)=x−4. Find the domain of (f/g)(x).","f(x)=√x, g(x)=x−4। (f/g)(x) का domain निकालिए।",
    ["x ≥ 0, x ≠ 4","x > 0 only","x ≥ 4 only","all real numbers"],["x ≥ 0, x ≠ 4","x > 0 only","x ≥ 4 only","सभी real numbers"],"A","f needs x≥0; g(x)≠0 removes x=4 as well.","f के लिए x≥0 चाहिए; g(x)≠0 से x=4 भी हट जाता है।");

  /* ---- Ch3 Topic 0: Revise (5) ---- */
  add("MTH-T01",3,"MTH11-3-0",1,"In a right triangle, sin θ is:","Right triangle में, sin θ है:",
    ["adjacent/hypotenuse","opposite/hypotenuse","opposite/adjacent","hypotenuse/opposite"],["adjacent/hypotenuse","opposite/hypotenuse","opposite/adjacent","hypotenuse/opposite"],"B","sin is opposite over hypotenuse.","sin, opposite भाग hypotenuse है।");
  add("MTH-T02",3,"MTH11-3-0",1,"In a right triangle, cos θ is:","Right triangle में, cos θ है:",
    ["opposite/hypotenuse","adjacent/hypotenuse","adjacent/opposite","hypotenuse/adjacent"],["opposite/hypotenuse","adjacent/hypotenuse","adjacent/opposite","hypotenuse/adjacent"],"B","cos is adjacent over hypotenuse.","cos, adjacent भाग hypotenuse है।");
  add("MTH-T03",3,"MTH11-3-0",1,"tan θ equals:","tan θ बराबर है:",
    ["opposite/hypotenuse","adjacent/hypotenuse","opposite/adjacent","hypotenuse/adjacent"],["opposite/hypotenuse","adjacent/hypotenuse","opposite/adjacent","hypotenuse/adjacent"],"C","tan is opposite over adjacent.","tan, opposite भाग adjacent है।");
  add("MTH-T04",3,"MTH11-3-0",2,"The old right-triangle ratios work only for angles between:","पुराने right-triangle ratios किन angles के बीच काम करते हैं?",
    ["0° and 45°","0° and 90°","0° and 180°","any angle"],["0° और 45°","0° और 90°","0° और 180°","कोई भी angle"],"B","A right triangle's acute angles are always between 0° and 90°.","Right triangle के acute angles हमेशा 0° और 90° के बीच होते हैं।");
  add("MTH-T05",3,"MTH11-3-0",2,"sin 60° from Class 10 is:","Class 10 से sin 60° है:",
    ["1/2","√2/2","√3/2","1"],["1/2","√2/2","√3/2","1"],"C","A memorised value from the 30-60-90 triangle.","30-60-90 triangle से याद किया हुआ value।");

  /* ---- Ch3 Topic 1: Degree and Radian Measure (9) ---- */
  add("MTH-T06",3,"MTH11-3-1",1,"A full turn measures how many radians?","पूरा turn कितने radians का होता है?",
    ["π","2π","360","180"],["π","2π","360","180"],"B","A complete revolution is 2π radians.","पूरा revolution 2π radians का होता है।");
  add("MTH-T07",3,"MTH11-3-1",1,"180° equals how many radians?","180° कितने radians के बराबर है?",
    ["π/2","π","2π","π/4"],["π/2","π","2π","π/4"],"B","Half a turn is π radians.","आधा turn π radians है।");
  add("MTH-T08",3,"MTH11-3-1",1,"Convert 90° to radians.","90° को radians में बदलिए।",
    ["π/2","π/3","π/4","π"],["π/2","π/3","π/4","π"],"A","A quarter turn is π/2.","चौथाई turn π/2 है।");
  add("MTH-T09",3,"MTH11-3-1",2,"Convert 45° to radians.","45° को radians में बदलिए।",
    ["π/6","π/4","π/3","π/2"],["π/6","π/4","π/3","π/2"],"B","(π/180) × 45 = π/4.","(π/180) × 45 = π/4।");
  add("MTH-T10",3,"MTH11-3-1",2,"Convert 30° to radians.","30° को radians में बदलिए।",
    ["π/2","π/3","π/4","π/6"],["π/2","π/3","π/4","π/6"],"D","(π/180) × 30 = π/6.","(π/180) × 30 = π/6।");
  add("MTH-T11",3,"MTH11-3-1",2,"π/3 radians equals how many degrees?","π/3 radians कितने degrees के बराबर है?",
    ["30°","45°","60°","90°"],["30°","45°","60°","90°"],"C","(180/π) × π/3 = 60°.","(180/π) × π/3 = 60°।");
  add("MTH-T12",3,"MTH11-3-1",3,"A circle of radius 5 cm has an arc subtending π/2 radians at the centre. Find the arc length.","5 cm radius वाले circle में एक arc केंद्र पर π/2 radians का angle बनाता है। Arc length निकालिए।",
    ["5π/2 cm","5π cm","2.5 cm","10π cm"],["5π/2 cm","5π cm","2.5 cm","10π cm"],"A","l = rθ = 5 × π/2 = 5π/2.","l = rθ = 5 × π/2 = 5π/2।");
  add("MTH-T13",3,"MTH11-3-1",3,"An arc of length 6 cm on a circle of radius 4 cm subtends an angle of:","4 cm radius वाले circle पर 6 cm का arc कितना angle बनाता है?",
    ["1.5 radians","2/3 radian","24 radians","10 radians"],["1.5 radians","2/3 radian","24 radians","10 radians"],"A","θ = l/r = 6/4 = 1.5.","θ = l/r = 6/4 = 1.5।");
  add("MTH-T14",3,"MTH11-3-1",3,"Convert 3π/2 radians to degrees.","3π/2 radians को degrees में बदलिए।",
    ["90°","180°","270°","360°"],["90°","180°","270°","360°"],"C","(180/π) × 3π/2 = 270°.","(180/π) × 3π/2 = 270°।");

  /* ---- Ch3 Topic 2: Unit Circle and Six Functions (9) ---- */
  add("MTH-T15",3,"MTH11-3-2",1,"On the unit circle, cos θ is the point's:","Unit circle पर, cos θ point का क्या है?",
    ["y-coordinate","x-coordinate","distance from origin","angle"],["y-coordinate","x-coordinate","origin से दूरी","angle"],"B","cos θ is defined as the x-coordinate.","cos θ को x-coordinate की तरह defined किया गया है।");
  add("MTH-T16",3,"MTH11-3-2",1,"On the unit circle, sin θ is the point's:","Unit circle पर, sin θ point का क्या है?",
    ["x-coordinate","y-coordinate","radius","angle"],["x-coordinate","y-coordinate","radius","angle"],"B","sin θ is defined as the y-coordinate.","sin θ को y-coordinate की तरह defined किया गया है।");
  add("MTH-T17",3,"MTH11-3-2",1,"tan θ is defined as:","tan θ की परिभाषा है:",
    ["cos θ/sin θ","sin θ/cos θ","sin θ × cos θ","sin θ + cos θ"],["cos θ/sin θ","sin θ/cos θ","sin θ × cos θ","sin θ + cos θ"],"B","tan θ = sin θ / cos θ.","tan θ = sin θ / cos θ।");
  add("MTH-T18",3,"MTH11-3-2",2,"sec θ is defined as:","sec θ की परिभाषा है:",
    ["1/sin θ","1/cos θ","1/tan θ","sin θ/cos θ"],["1/sin θ","1/cos θ","1/tan θ","sin θ/cos θ"],"B","sec θ = 1/cos θ.","sec θ = 1/cos θ।");
  add("MTH-T19",3,"MTH11-3-2",2,"cosec θ is defined as:","cosec θ की परिभाषा है:",
    ["1/sin θ","1/cos θ","1/tan θ","cos θ/sin θ"],["1/sin θ","1/cos θ","1/tan θ","cos θ/sin θ"],"A","cosec θ = 1/sin θ.","cosec θ = 1/sin θ।");
  add("MTH-T20",3,"MTH11-3-2",2,"cot θ is defined as:","cot θ की परिभाषा है:",
    ["sin θ/cos θ","cos θ/sin θ","1/sin θ","1/cos θ"],["sin θ/cos θ","cos θ/sin θ","1/sin θ","1/cos θ"],"B","cot θ = cos θ / sin θ.","cot θ = cos θ / sin θ।");
  add("MTH-T21",3,"MTH11-3-2",3,"If sin θ = 0.5 and cos θ = √3/2, find cot θ.","अगर sin θ = 0.5 और cos θ = √3/2 हैं, cot θ निकालिए।",
    ["√3","1/√3","2","√3/2"],["√3","1/√3","2","√3/2"],"A","cot θ = cos θ/sin θ = (√3/2)/(1/2) = √3.","cot θ = cos θ/sin θ = (√3/2)/(1/2) = √3।");
  add("MTH-T22",3,"MTH11-3-2",3,"If cos θ = 0.6, find sec θ.","अगर cos θ = 0.6, sec θ निकालिए।",
    ["0.6","1.2","5/3","3/5"],["0.6","1.2","5/3","3/5"],"C","sec θ = 1/0.6 = 5/3.","sec θ = 1/0.6 = 5/3।");
  add("MTH-T23",3,"MTH11-3-2",3,"If sin θ = 0.5, find cosec θ.","अगर sin θ = 0.5, cosec θ निकालिए।",
    ["0.5","1","2","4"],["0.5","1","2","4"],"C","cosec θ = 1/0.5 = 2.","cosec θ = 1/0.5 = 2।");

  /* ---- Ch3 Topic 3: Sign of Trigonometric Functions (9) ---- */
  add("MTH-T24",3,"MTH11-3-3",1,"In Quadrant I, which functions are positive?","Quadrant I में कौन-से functions positive हैं?",
    ["only sin","only cos","only tan","all"],["सिर्फ़ sin","सिर्फ़ cos","सिर्फ़ tan","सभी"],"D","x and y are both positive there.","वहाँ x और y दोनों positive हैं।");
  add("MTH-T25",3,"MTH11-3-3",1,"In Quadrant II, which function is positive?","Quadrant II में कौन-सा function positive है?",
    ["sin","cos","tan","none"],["sin","cos","tan","कोई नहीं"],"A","y is positive, x is negative there.","वहाँ y positive है, x negative है।");
  add("MTH-T26",3,"MTH11-3-3",1,"In Quadrant III, which function is positive?","Quadrant III में कौन-सा function positive है?",
    ["sin","cos","tan","none"],["sin","cos","tan","कोई नहीं"],"C","x and y are both negative, so tan (their ratio) is positive.","x और y दोनों negative हैं, इसलिए tan (उनका ratio) positive है।");
  add("MTH-T27",3,"MTH11-3-3",2,"In Quadrant IV, which function is positive?","Quadrant IV में कौन-सा function positive है?",
    ["sin","cos","tan","none"],["sin","cos","tan","कोई नहीं"],"B","x is positive, y is negative there.","वहाँ x positive है, y negative है।");
  add("MTH-T28",3,"MTH11-3-3",2,"Is cos 200° positive or negative?","cos 200° positive है या negative?",
    ["positive","negative","zero","cannot tell"],["positive","negative","zero","कह नहीं सकते"],"B","200° is in Quadrant III, where cos is negative.","200°, Quadrant III में है, जहाँ cos negative है।");
  add("MTH-T29",3,"MTH11-3-3",2,"Is tan 300° positive or negative?","tan 300° positive है या negative?",
    ["positive","negative","zero","undefined"],["positive","negative","zero","undefined"],"B","300° is in Quadrant IV, where tan is negative.","300°, Quadrant IV में है, जहाँ tan negative है।");
  add("MTH-T30",3,"MTH11-3-3",3,"Is sin 100° positive or negative?","sin 100° positive है या negative?",
    ["positive","negative","zero","undefined"],["positive","negative","zero","undefined"],"A","100° is in Quadrant II, where sin is positive.","100°, Quadrant II में है, जहाँ sin positive है।");
  add("MTH-T31",3,"MTH11-3-3",3,"‘All Students Take Calculus’ lists the positive function in quadrants I, II, III, IV as:","‘All Students Take Calculus’, quadrants I, II, III, IV में positive function किस क्रम में बताता है?",
    ["All, Sin, Tan, Cos","All, Cos, Tan, Sin","Sin, All, Cos, Tan","All, Tan, Sin, Cos"],["All, Sin, Tan, Cos","All, Cos, Tan, Sin","Sin, All, Cos, Tan","All, Tan, Sin, Cos"],"A","The mnemonic's own letters give this exact order.","इस mnemonic के अक्षर ही यह क्रम देते हैं।");
  add("MTH-T32",3,"MTH11-3-3",4,"θ is in Quadrant III. Which is true?","θ, Quadrant III में है। कौन-सा सही है?",
    ["sin θ>0, cos θ>0","sin θ<0, cos θ<0","sin θ>0, cos θ<0","sin θ<0, cos θ>0"],["sin θ>0, cos θ>0","sin θ<0, cos θ<0","sin θ>0, cos θ<0","sin θ<0, cos θ>0"],"B","Both coordinates are negative in Quadrant III.","Quadrant III में दोनों coordinates negative हैं।");

  /* ---- Ch3 Topic 4: Domain and Range (9) ---- */
  add("MTH-T33",3,"MTH11-3-4",1,"The domain of sin θ is:","sin θ का domain है:",
    ["[-1,1]","all real numbers","only 0° to 360°","only positive numbers"],["[-1,1]","सभी real numbers","सिर्फ़ 0° से 360°","सिर्फ़ positive numbers"],"B","Any real angle is allowed.","कोई भी real angle allowed है।");
  add("MTH-T34",3,"MTH11-3-4",1,"The range of cos θ is:","cos θ का range है:",
    ["all real numbers","[0,1]","[-1,1]","[-1,0]"],["सभी real numbers","[0,1]","[-1,1]","[-1,0]"],"C","A unit-circle coordinate never exceeds 1 or goes below −1.","Unit-circle coordinate कभी 1 से ऊपर या −1 से नीचे नहीं जाता।");
  add("MTH-T35",3,"MTH11-3-4",1,"Can sin θ ever equal 2?","क्या sin θ कभी 2 के बराबर हो सकता है?",
    ["Yes","No, range stops at 1","Only for large θ","Only in Quadrant I"],["हाँ","नहीं, range 1 पर रुकता है","सिर्फ़ बड़े θ के लिए","सिर्फ़ Quadrant I में"],"B","2 is outside the range [-1,1].","2, range [-1,1] के बाहर है।");
  add("MTH-T36",3,"MTH11-3-4",2,"tan θ is undefined whenever:","tan θ कब undefined होता है?",
    ["sin θ = 0","cos θ = 0","sin θ = 1","cos θ = 1"],["sin θ = 0","cos θ = 0","sin θ = 1","cos θ = 1"],"B","Dividing by cos θ = 0 is not allowed.","cos θ = 0 से divide करना allowed नहीं है।");
  add("MTH-T37",3,"MTH11-3-4",2,"Which of these is NOT a possible value of cos θ?","इनमें से कौन-सा cos θ का possible value नहीं है?",
    ["0.5","−0.9","1.2","0"],["0.5","−0.9","1.2","0"],"C","1.2 is outside [-1,1].","1.2, [-1,1] के बाहर है।");
  add("MTH-T38",3,"MTH11-3-4",2,"The range of tan θ is:","tan θ का range है:",
    ["[-1,1]","[0,1]","all real numbers","[-∞,0]"],["[-1,1]","[0,1]","सभी real numbers","[-∞,0]"],"C","tan θ is unbounded, unlike sin and cos.","tan θ unbounded है, sin और cos के उलट।");
  add("MTH-T39",3,"MTH11-3-4",3,"At which angle is tan θ undefined, between 0° and 180°?","0° और 180° के बीच, tan θ किस angle पर undefined है?",
    ["0°","90°","180°","45°"],["0°","90°","180°","45°"],"B","cos 90° = 0.","cos 90° = 0।");
  add("MTH-T40",3,"MTH11-3-4",3,"Which value is impossible for sin θ?","sin θ के लिए कौन-सा value असंभव है?",
    ["-1","0","1","1.5"],["-1","0","1","1.5"],"D","1.5 is outside [-1,1].","1.5, [-1,1] के बाहर है।");
  add("MTH-T41",3,"MTH11-3-4",4,"Why is the domain of tan θ smaller than the domain of sin θ?","tan θ का domain, sin θ के domain से छोटा क्यों है?",
    ["tan needs cos θ ≠ 0 in its denominator","tan is always smaller in value","sin has no domain restriction ever","there is no real difference"],["tan के denominator में cos θ ≠ 0 चाहिए","tan हमेशा value में छोटा है","sin पर कभी domain restriction नहीं","असल में कोई फ़र्क़ नहीं"],"A","tan θ = sin θ/cos θ breaks wherever cos θ = 0.","tan θ = sin θ/cos θ वहाँ टूटता है जहाँ cos θ = 0।");

  /* ---- Ch3 Topic 5: Standard Angles and Basic Identity (10) ---- */
  add("MTH-T42",3,"MTH11-3-5",1,"sin 0° equals:","sin 0° बराबर है:",
    ["0","1","-1","undefined"],["0","1","-1","undefined"],"A","The point starts at (1,0), so y=0.","Point (1,0) से शुरू होता है, इसलिए y=0।");
  add("MTH-T43",3,"MTH11-3-5",1,"cos 0° equals:","cos 0° बराबर है:",
    ["0","1","-1","undefined"],["0","1","-1","undefined"],"B","The point starts at (1,0), so x=1.","Point (1,0) से शुरू होता है, इसलिए x=1।");
  add("MTH-T44",3,"MTH11-3-5",1,"sin 90° equals:","sin 90° बराबर है:",
    ["0","1","-1","1/2"],["0","1","-1","1/2"],"B","At 90° the point is (0,1), so y=1.","90° पर point (0,1) है, इसलिए y=1।");
  add("MTH-T45",3,"MTH11-3-5",2,"cos 90° equals:","cos 90° बराबर है:",
    ["0","1","-1","1/2"],["0","1","-1","1/2"],"A","At 90° the point is (0,1), so x=0.","90° पर point (0,1) है, इसलिए x=0।");
  add("MTH-T46",3,"MTH11-3-5",2,"sin 45° equals:","sin 45° बराबर है:",
    ["1/2","√2/2","√3/2","1"],["1/2","√2/2","√3/2","1"],"B","A standard memorised value.","एक जाना-पहचाना याद किया हुआ value।");
  add("MTH-T47",3,"MTH11-3-5",2,"The identity sin²θ + cos²θ equals:","Identity sin²θ + cos²θ बराबर है:",
    ["0","1","2","θ"],["0","1","2","θ"],"B","This follows from x²+y²=1 on the unit circle.","यह unit circle के x²+y²=1 से आता है।");
  add("MTH-T48",3,"MTH11-3-5",3,"If cos θ = 1/2, find sin²θ.","अगर cos θ = 1/2, sin²θ निकालिए।",
    ["1/4","3/4","1/2","1"],["1/4","3/4","1/2","1"],"B","sin²θ = 1 − (1/2)² = 3/4.","sin²θ = 1 − (1/2)² = 3/4।");
  add("MTH-T49",3,"MTH11-3-5",3,"If sin θ = 4/5 and θ is in Quadrant I, find cos θ.","अगर sin θ = 4/5 और θ, Quadrant I में है, cos θ निकालिए।",
    ["3/5","4/5","1/5","5/4"],["3/5","4/5","1/5","5/4"],"A","cos²θ = 1 − 16/25 = 9/25, so cos θ = 3/5.","cos²θ = 1 − 16/25 = 9/25, इसलिए cos θ = 3/5।");
  add("MTH-T50",3,"MTH11-3-5",4,"If sin θ = −3/5 and θ is in Quadrant III, find cos θ.","अगर sin θ = −3/5 और θ, Quadrant III में है, cos θ निकालिए।",
    ["4/5","−4/5","3/5","−3/5"],["4/5","−4/5","3/5","−3/5"],"B","cos²θ = 16/25; Quadrant III keeps cos negative.","cos²θ = 16/25; Quadrant III में cos negative रहता है।");
  add("MTH-T51",3,"MTH11-3-5",4,"Which pair could NOT both be true for the same θ?","कौन-सी जोड़ी एक ही θ के लिए सच नहीं हो सकती?",
    ["sin θ=0.6, cos θ=0.8","sin θ=0.5, cos θ=0.5","sin θ=1, cos θ=0","sin θ=0, cos θ=1"],["sin θ=0.6, cos θ=0.8","sin θ=0.5, cos θ=0.5","sin θ=1, cos θ=0","sin θ=0, cos θ=1"],"B","0.5²+0.5²=0.5, which does not equal 1.","0.5²+0.5²=0.5, जो 1 के बराबर नहीं है।");

  /* ---- Ch3 Topic 6: Sum and Difference Formulas (9) ---- */
  add("MTH-T52",3,"MTH11-3-6",2,"cos(x+y) equals:","cos(x+y) बराबर है:",
    ["cos x + cos y","cos x cos y − sin x sin y","cos x cos y + sin x sin y","sin x cos y + cos x sin y"],["cos x + cos y","cos x cos y − sin x sin y","cos x cos y + sin x sin y","sin x cos y + cos x sin y"],"B","The standard cos sum formula.","Standard cos sum formula।");
  add("MTH-T53",3,"MTH11-3-6",2,"sin(x+y) equals:","sin(x+y) बराबर है:",
    ["sin x + sin y","cos x cos y − sin x sin y","sin x cos y + cos x sin y","sin x cos y − cos x sin y"],["sin x + sin y","cos x cos y − sin x sin y","sin x cos y + cos x sin y","sin x cos y − cos x sin y"],"C","The standard sin sum formula.","Standard sin sum formula।");
  add("MTH-T54",3,"MTH11-3-6",2,"cos(x−y) equals:","cos(x−y) बराबर है:",
    ["cos x cos y − sin x sin y","cos x cos y + sin x sin y","cos x − cos y","sin x sin y − cos x cos y"],["cos x cos y − sin x sin y","cos x cos y + sin x sin y","cos x − cos y","sin x sin y − cos x cos y"],"B","The sign flips to + for a difference.","Difference के लिए sign + में बदल जाता है।");
  add("MTH-T55",3,"MTH11-3-6",3,"sin(x−y) equals:","sin(x−y) बराबर है:",
    ["sin x cos y + cos x sin y","sin x cos y − cos x sin y","sin x − sin y","cos x sin y − sin x cos y"],["sin x cos y + cos x sin y","sin x cos y − cos x sin y","sin x − sin y","cos x sin y − sin x cos y"],"B","The connecting sign flips to − for a difference.","Difference के लिए जोड़ने वाला sign − में बदल जाता है।");
  add("MTH-T56",3,"MTH11-3-6",3,"Is cos(x+y) equal to cos x + cos y in general?","क्या cos(x+y), आम तौर पर cos x + cos y के बराबर है?",
    ["Yes, always","No, that is a common mistake","Yes, but only for x=y","No, they are never related"],["हाँ, हमेशा","नहीं, यह एक आम ग़लती है","हाँ, पर सिर्फ़ x=y के लिए","नहीं, इनका कोई संबंध नहीं"],"B","The angle sum needs the full formula, not a simple split.","Angle sum के लिए पूरा formula चाहिए, सीधा split नहीं।");
  add("MTH-T57",3,"MTH11-3-6",3,"Find cos 90° using cos(60°+30°).","cos(60°+30°) से cos 90° निकालिए।",
    ["0","1","1/2","√3/2"],["0","1","1/2","√3/2"],"A","(1/2)(√3/2) − (√3/2)(1/2) = 0.","(1/2)(√3/2) − (√3/2)(1/2) = 0।");
  add("MTH-T58",3,"MTH11-3-6",4,"Find sin 90° using sin(60°+30°).","sin(60°+30°) से sin 90° निकालिए।",
    ["0","1/2","√3/2","1"],["0","1/2","√3/2","1"],"D","(√3/2)(√3/2) + (1/2)(1/2) = 3/4 + 1/4 = 1.","(√3/2)(√3/2) + (1/2)(1/2) = 3/4 + 1/4 = 1।");
  add("MTH-T59",3,"MTH11-3-6",4,"Find cos 15° using cos(45°−30°).","cos(45°−30°) से cos 15° निकालिए।",
    ["(√6+√2)/4","(√6−√2)/4","√2/4","√6/4"],["(√6+√2)/4","(√6−√2)/4","√2/4","√6/4"],"A","(√2/2)(√3/2) + (√2/2)(1/2) = (√6+√2)/4.","(√2/2)(√3/2) + (√2/2)(1/2) = (√6+√2)/4।");
  add("MTH-T60",3,"MTH11-3-6",5,"Find sin 105° using sin(60°+45°).","sin(60°+45°) से sin 105° निकालिए।",
    ["(√6+√2)/4","(√6−√2)/4","(√2+√3)/4","1"],["(√6+√2)/4","(√6−√2)/4","(√2+√3)/4","1"],"A","(√3/2)(√2/2) + (1/2)(√2/2) = (√6+√2)/4.","(√3/2)(√2/2) + (1/2)(√2/2) = (√6+√2)/4।");

  /* ---- Ch3 Topic 7: Using the Formulas (9) ---- */
  add("MTH-T61",3,"MTH11-3-7",3,"Which pair of standard angles sums to 105°?","कौन-सी जोड़ी जोड़ने पर 105° बनाती है?",
    ["45°+60°","30°+60°","90°+15°","45°+45°"],["45°+60°","30°+60°","90°+15°","45°+45°"],"A","45° + 60° = 105°, both standard angles.","45° + 60° = 105°, दोनों standard angles।");
  add("MTH-T62",3,"MTH11-3-7",3,"Which pair of standard angles gives a difference of 15°?","कौन-सी जोड़ी घटाने पर 15° का difference देती है?",
    ["45°−30°","60°−30°","90°−45°","30°−0°"],["45°−30°","60°−30°","90°−45°","30°−0°"],"A","45° − 30° = 15°.","45° − 30° = 15°।");
  add("MTH-T63",3,"MTH11-3-7",4,"Find cos 105° using cos(60°+45°).","cos(60°+45°) से cos 105° निकालिए।",
    ["(√2−√6)/4","(√6+√2)/4","(√6−√2)/4","−(√6+√2)/4"],["(√2−√6)/4","(√6+√2)/4","(√6−√2)/4","−(√6+√2)/4"],"A","(1/2)(√2/2) − (√3/2)(√2/2) = (√2−√6)/4.","(1/2)(√2/2) − (√3/2)(√2/2) = (√2−√6)/4।");
  add("MTH-T64",3,"MTH11-3-7",4,"Using sin(x−y), find sin 30° from sin(90°−60°).","sin(x−y) का इस्तेमाल करके sin(90°−60°) से sin 30° निकालिए।",
    ["1/2","√3/2","1","0"],["1/2","√3/2","1","0"],"A","(1)(1/2) − (0)(√3/2) = 1/2.","(1)(1/2) − (0)(√3/2) = 1/2।");
  add("MTH-T65",3,"MTH11-3-7",4,"cos(x−y) − cos(x+y) simplifies to a multiple of:","cos(x−y) − cos(x+y) किसका multiple बन जाता है?",
    ["sin x sin y","cos x cos y","sin x cos y","cos x sin y"],["sin x sin y","cos x cos y","sin x cos y","cos x sin y"],"A","The cos x cos y terms cancel, leaving 2 sin x sin y.","cos x cos y वाले terms cancel हो जाते हैं, 2 sin x sin y बचता है।");
  add("MTH-T66",3,"MTH11-3-7",5,"Simplify sin(x+y) + sin(x−y).","sin(x+y) + sin(x−y) को simplify कीजिए।",
    ["2 sin x cos y","2 cos x sin y","2 sin x sin y","2 cos x cos y"],["2 sin x cos y","2 cos x sin y","2 sin x sin y","2 cos x cos y"],"A","The cos x sin y terms cancel, leaving 2 sin x cos y.","cos x sin y वाले terms cancel हो जाते हैं, 2 sin x cos y बचता है।");
  add("MTH-T67",3,"MTH11-3-7",5,"Going from sin(x+y) to sin(x−y), the connecting sign:","sin(x+y) से sin(x−y) जाने पर, जोड़ने वाला sign:",
    ["stays the same, +","becomes −","becomes ×","becomes ÷"],["वैसा ही रहता है, +","− बन जाता है","× बन जाता है","÷ बन जाता है"],"B","The middle sign flips from + to − for a difference.","Difference के लिए बीच वाला sign + से − में बदल जाता है।");
  add("MTH-T68",3,"MTH11-3-7",5,"How would you find tan(x+y) once you know sin(x+y) and cos(x+y) separately?","अगर sin(x+y) और cos(x+y) अलग-अलग पता हों, tan(x+y) कैसे निकालेंगे?",
    ["divide sin(x+y) by cos(x+y)","add them","multiply them","subtract them"],["sin(x+y) को cos(x+y) से divide कीजिए","उन्हें जोड़िए","उन्हें गुणा कीजिए","उन्हें घटाइए"],"A","tan is always sin divided by cos, even for a combined angle.","tan हमेशा sin भाग cos है, combined angle के लिए भी।");
  add("MTH-T69",3,"MTH11-3-7",5,"Using the sum formula, cos 120° [=cos(90°+30°)] equals:","Sum formula से, cos 120° [=cos(90°+30°)] बराबर है:",
    ["−1/2","1/2","−√3/2","√3/2"],["−1/2","1/2","−√3/2","√3/2"],"A","(0)(√3/2) − (1)(1/2) = −1/2.","(0)(√3/2) − (1)(1/2) = −1/2।");

  window.SL_DATA.questions = window.SL_DATA.questions.concat(Q);
})();

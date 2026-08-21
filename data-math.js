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

  var complex=[

    topic("MTH11-4-0",
      b("0. Revise: Why We Need a New Kind of Number","0. दोहराइए: एक नए तरह के number की ज़रूरत क्यों है"),
      b(
        "Try to solve $x^2+1=0$, so $x^2=-1$. Pick any real number and square it — the answer is never negative. There is **no real solution**.\n\nThis has happened before. Counting numbers alone could not solve $x+5=3$, so negative numbers were invented. Whole numbers could not solve $2x=3$, so fractions were invented. Each time, mathematicians built a new kind of number to fill the gap.\n\nHere, they invented a number called $i$, with one rule:\n\n$$i^2=-1$$\n\nThis chapter is about what you can do once $i$ exists.",
        "$x^2+1=0$ हल करने की कोशिश कीजिए, यानी $x^2=-1$। कोई भी real number लीजिए और उसे square कीजिए — answer कभी negative नहीं होता। **कोई real solution नहीं है।**\n\nऐसा पहले भी हुआ है। सिर्फ़ counting numbers से $x+5=3$ हल नहीं हो पाता था, इसलिए negative numbers बनाए गए। Whole numbers से $2x=3$ हल नहीं हो पाता था, इसलिए fractions बनाए गए। हर बार, mathematicians ने कमी पूरी करने के लिए एक नया number बनाया।\n\nयहाँ, उन्होंने एक number बनाया जिसे $i$ कहते हैं, एक ही rule के साथ:\n\n$$i^2=-1$$\n\nयह chapter इसी बारे में है कि $i$ के होने पर आप क्या कर सकते हैं।"),
      worked(
        b("Solve x² + 1 = 0.","x² + 1 = 0 हल कीजिए।"),
        [
          ["Rearrange: x² = −1.","फिर से लिखिए: x² = −1।","Move the 1 to the other side.","1 को दूसरी तरफ़ ले जाइए।"],
          ["No real x squares to −1, but x = i works, since i² = −1 by definition.","कोई real x का square −1 नहीं होता, पर x = i काम करता है, क्योंकि परिभाषा से i² = −1 है।","This is exactly why i was invented.","इसीलिए तो i बनाया गया था।"]
        ],
        b("x = i or x = −i.","x = i या x = −i।"))),

    topic("MTH11-4-1",
      b("1. What is a Complex Number?","1. Complex Number क्या है?"),
      b(
        "A **complex number** combines an ordinary real number with a multiple of $i$:\n\n$$z=a+bi$$\n\n$a$ is the **real part**; $b$ is the **imaginary part** — just the plain number, not ‘$bi$’.\n\nExample: for $z=3+4i$, the real part is $3$ and the imaginary part is $4$.\n\nIf $b=0$, $z$ is simply a real number — every real number is also a complex number. If $a=0$ and $b\\neq0$, $z$ is called **purely imaginary**, like $5i$.",
        "**Complex number**, एक साधारण real number को $i$ के multiple के साथ जोड़ता है:\n\n$$z=a+bi$$\n\n$a$ **real part** है; $b$ **imaginary part** है — बस साधारण number, ‘$bi$’ नहीं।\n\nउदाहरण: $z=3+4i$ के लिए, real part $3$ है और imaginary part $4$ है।\n\nअगर $b=0$, तो $z$ बस एक real number है — हर real number एक complex number भी है। अगर $a=0$ और $b\\neq0$, तो $z$ को **purely imaginary** कहते हैं, जैसे $5i$।"),
      worked(
        b("Write the real and imaginary parts of z = 5 − 3i.","z = 5 − 3i के real और imaginary parts लिखिए।"),
        [
          ["The real part is the plain number: 5.","Real part साधारण number है: 5।","That is the a in a+bi.","यही a+bi में a है।"],
          ["The imaginary part is the coefficient of i: −3, not −3i.","Imaginary part, i का coefficient है: −3, न कि −3i।","That is the b in a+bi — just the number.","यही a+bi में b है — बस number।"]
        ],
        b("Real part = 5, imaginary part = −3.","Real part = 5, imaginary part = −3।"))),

    topic("MTH11-4-2",
      b("2. Adding, Subtracting and Multiplying","2. जोड़ना, घटाना और गुणा करना"),
      b(
        "Add or subtract complex numbers the way you combine like terms — real parts together, imaginary parts together.\n\n$$(a+bi)+(c+di)=(a+c)+(b+d)i$$\n$$(a+bi)-(c+di)=(a-c)+(b-d)i$$\n\nMultiply exactly like two binomials — then simplify using $i^2=-1$.\n\n$$(a+bi)(c+di)=ac+adi+bci+bdi^2=(ac-bd)+(ad+bc)i$$\n\nThe only new step versus ordinary algebra is remembering that $i^2$ becomes $-1$, not staying as $i^2$.",
        "Complex numbers को जोड़ना या घटाना वैसे ही है जैसे like terms मिलाते हैं — real parts साथ, imaginary parts साथ।\n\n$$(a+bi)+(c+di)=(a+c)+(b+d)i$$\n$$(a+bi)-(c+di)=(a-c)+(b-d)i$$\n\nगुणा बिल्कुल दो binomials जैसे कीजिए — फिर $i^2=-1$ से simplify कीजिए।\n\n$$(a+bi)(c+di)=ac+adi+bci+bdi^2=(ac-bd)+(ad+bc)i$$\n\nसाधारण algebra से बस एक नया step है: याद रखना कि $i^2$, $-1$ बन जाता है, $i^2$ ही नहीं रहता।"),
      worked(
        b("Multiply (2 + 3i)(1 − i).","(2 + 3i)(1 − i) गुणा कीजिए।"),
        [
          ["Expand like two binomials: 2(1) + 2(−i) + 3i(1) + 3i(−i).","दो binomials जैसे expand कीजिए: 2(1) + 2(−i) + 3i(1) + 3i(−i)।","Multiply every term in the first bracket by every term in the second.","पहले bracket के हर term को दूसरे के हर term से गुणा कीजिए।"],
          ["= 2 − 2i + 3i − 3i² = 2 + i − 3(−1) = 5 + i.","= 2 − 2i + 3i − 3i² = 2 + i − 3(−1) = 5 + i।","Combine the i terms, then replace i² with −1.","पहले i वाले terms मिलाइए, फिर i² की जगह −1 रखिए।"]
        ],
        b("5 + i.","5 + i।"))),

    topic("MTH11-4-3",
      b("3. Dividing Complex Numbers","3. Complex Numbers को Divide करना"),
      b(
        "You can never leave $i$ sitting in a denominator. Clear it using the **conjugate**.\n\nThe conjugate of $c+di$ is $c-di$ — just flip the sign of the imaginary part.\n\n$$(c+di)(c-di)=c^2+d^2$$\n\nThat product has **no $i$ left** — multiplying by a conjugate always produces a real number. So to divide, multiply top and bottom by the denominator's conjugate.\n\n$$\\dfrac{a+bi}{c+di}=\\dfrac{(a+bi)(c-di)}{(c+di)(c-di)}=\\dfrac{(a+bi)(c-di)}{c^2+d^2}$$",
        "$i$ को denominator में कभी नहीं छोड़ते। इसे **conjugate** से साफ़ कीजिए।\n\n$c+di$ का conjugate है $c-di$ — बस imaginary part का sign बदल दीजिए।\n\n$$(c+di)(c-di)=c^2+d^2$$\n\nइस गुणनफल में $i$ **बचता ही नहीं** — conjugate से गुणा करने पर हमेशा एक real number मिलता है। तो divide करने के लिए, denominator के conjugate से ऊपर-नीचे दोनों को गुणा कीजिए।\n\n$$\\dfrac{a+bi}{c+di}=\\dfrac{(a+bi)(c-di)}{(c+di)(c-di)}=\\dfrac{(a+bi)(c-di)}{c^2+d^2}$$"),
      worked(
        b("Divide (3 + 2i) / (1 − i).","(3 + 2i) / (1 − i) को divide कीजिए।"),
        [
          ["Multiply top and bottom by the conjugate of the denominator, 1+i.","Denominator के conjugate 1+i से ऊपर-नीचे दोनों को गुणा कीजिए।","1−i and 1+i multiply to a real number.","1−i और 1+i गुणा करने पर एक real number देते हैं।"],
          ["(3+2i)(1+i) = 1+5i, and (1−i)(1+i) = 2, so the answer is (1+5i)/2.","(3+2i)(1+i) = 1+5i, और (1−i)(1+i) = 2, इसलिए answer है (1+5i)/2।","Expand both products, then simplify the fraction.","दोनों products expand कीजिए, फिर fraction simplify कीजिए।"]
        ],
        b("1/2 + 5/2 i.","1/2 + 5/2 i।"))),

    topic("MTH11-4-4",
      b("4. Powers of i and Square Roots of Negative Numbers","4. i की Powers और Negative Numbers के Square Roots"),
      b(
        "Powers of $i$ repeat in a cycle of 4:\n\n$$i^1=i\\quad i^2=-1\\quad i^3=-i\\quad i^4=1\\quad i^5=i\\ldots$$\n\nTo find any power $i^n$, divide $n$ by 4 and use the remainder — the cycle then tells you the answer.\n\nThis also unlocks square roots of negative numbers. Since $i^2=-1$:\n\n$$\\sqrt{-a}=i\\sqrt{a}\\quad(\\text{for }a>0)$$\n\nExample: $\\sqrt{-9}=i\\sqrt{9}=3i$.",
        "$i$ की powers 4 के cycle में दोहराती हैं:\n\n$$i^1=i\\quad i^2=-1\\quad i^3=-i\\quad i^4=1\\quad i^5=i\\ldots$$\n\nकोई भी power $i^n$ निकालने के लिए, $n$ को 4 से भाग दीजिए और remainder इस्तेमाल कीजिए — cycle से answer मिल जाता है।\n\nयह negative numbers के square roots भी खोल देता है। चूँकि $i^2=-1$:\n\n$$\\sqrt{-a}=i\\sqrt{a}\\quad(a>0\\text{ के लिए})$$\n\nउदाहरण: $\\sqrt{-9}=i\\sqrt{9}=3i$।"),
      worked(
        b("Find i to the power 15.","i की power 15 निकालिए।"),
        [
          ["Divide 15 by 4: 15 = 4×3 + 3, remainder 3.","15 को 4 से भाग दीजिए: 15 = 4×3 + 3, remainder 3।","Only the remainder decides the answer — full cycles just bring you back to i¹.","सिर्फ़ remainder answer तय करता है — पूरे cycles वापस i¹ पर ले आते हैं।"],
          ["Remainder 3 means i^15 = i³ = −i.","Remainder 3 का मतलब है i^15 = i³ = −i।","Match the remainder to the cycle: i¹, i², i³, i⁴.","Remainder को cycle से मिलाइए: i¹, i², i³, i⁴।"]
        ],
        b("i^15 = −i.","i^15 = −i।"))),

    topic("MTH11-4-5",
      b("5. Modulus and Conjugate of a Complex Number","5. Complex Number का Modulus और Conjugate"),
      b(
        "The **modulus** $|z|$ measures how far $z=a+bi$ sits from $0$ — like measuring distance with the Pythagoras theorem.\n\n$$|z|=\\sqrt{a^2+b^2}$$\n\nThe **conjugate** $\\bar z$ flips the sign of the imaginary part only.\n\n$$\\bar z=a-bi$$\n\nMultiplying $z$ by its own conjugate always gives a real, non-negative number — you met this trick in the division topic.\n\n$$z\\bar z=a^2+b^2=|z|^2$$",
        "**Modulus** $|z|$ मापता है कि $z=a+bi$, $0$ से कितनी दूर है — जैसे Pythagoras theorem से दूरी नापना।\n\n$$|z|=\\sqrt{a^2+b^2}$$\n\n**Conjugate** $\\bar z$ सिर्फ़ imaginary part का sign बदलता है।\n\n$$\\bar z=a-bi$$\n\n$z$ को अपने ही conjugate से गुणा करने पर हमेशा एक real, non-negative number मिलता है — यह trick आपने division वाले topic में देखी थी।\n\n$$z\\bar z=a^2+b^2=|z|^2$$"),
      worked(
        b("Find |z| and the conjugate of z = 4 − 3i.","z = 4 − 3i का |z| और conjugate निकालिए।"),
        [
          ["|z| = √(4² + (−3)²) = √(16+9) = √25 = 5.","|z| = √(4² + (−3)²) = √(16+9) = √25 = 5।","Square both parts, add, then take the square root.","दोनों parts का square कीजिए, जोड़िए, फिर square root लीजिए।"],
          ["The conjugate flips the sign of −3, giving 4 + 3i.","Conjugate, −3 का sign बदलता है, 4 + 3i मिलता है।","Only the imaginary part's sign changes.","सिर्फ़ imaginary part का sign बदलता है।"]
        ],
        b("|z| = 5, conjugate = 4 + 3i.","|z| = 5, conjugate = 4 + 3i।"))),

    topic("MTH11-4-6",
      b("6. The Argand Plane","6. Argand Plane"),
      b(
        "Plot $z=a+bi$ as the point $(a,b)$: real part along the horizontal axis, imaginary part along the vertical axis. This picture is the **Argand plane**.\n\n{{diagram:argand-plane}}\n\nA real number sits exactly on the horizontal axis (imaginary part $0$). A purely imaginary number sits exactly on the vertical axis (real part $0$).\n\nThe straight-line distance from the origin to this point is exactly $|z|$, the modulus — the same Pythagoras calculation you just practised.",
        "$z=a+bi$ को point $(a,b)$ की तरह plot कीजिए: real part horizontal axis पर, imaginary part vertical axis पर। यह picture **Argand plane** है।\n\n{{diagram:argand-plane}}\n\nEक real number ठीक horizontal axis पर बैठता है (imaginary part $0$)। एक purely imaginary number ठीक vertical axis पर बैठता है (real part $0$)।\n\nOrigin से इस point तक की सीधी दूरी ठीक $|z|$ है, modulus — वही Pythagoras calculation जो आपने अभी की।"),
      worked(
        b("Which quadrant does z = −2 + 3i sit in on the Argand plane?","Argand plane पर z = −2 + 3i किस quadrant में है?"),
        [
          ["Real part is −2 (negative), imaginary part is 3 (positive).","Real part −2 है (negative), imaginary part 3 है (positive)।","These become the x and y coordinates of the point.","ये point के x और y coordinates बन जाते हैं।"],
          ["Negative x, positive y is the upper-left region.","Negative x, positive y ऊपर-बाईं तरफ़ का region है।","Same quadrant layout as any x-y graph.","किसी भी x-y graph जैसा ही quadrant layout है।"]
        ],
        b("The upper-left quadrant (like Quadrant II).","ऊपर-बाईं quadrant (Quadrant II जैसी)।"))),

    topic("MTH11-4-7",
      b("7. Polar Representation","7. Polar Representation"),
      b(
        "Instead of $(a,b)$, you can locate the same point using a distance $r$ and an angle $\\theta$ from the positive real axis.\n\n{{diagram:argand-plane}}\n\n$$z=r(\\cos\\theta+i\\sin\\theta)\\qquad r=|z|,\\ \\theta=\\text{the argument}$$\n\nThis connects straight back to the unit circle: $a=r\\cos\\theta$ and $b=r\\sin\\theta$, exactly like the coordinates you plotted on a circle in the last chapter — except here the radius is $r$, not always $1$.",
        "$(a,b)$ की जगह, आप उसी point को एक दूरी $r$ और positive real axis से एक angle $\\theta$ से भी बता सकते हैं।\n\n{{diagram:argand-plane}}\n\n$$z=r(\\cos\\theta+i\\sin\\theta)\\qquad r=|z|,\\ \\theta=\\text{argument}$$\n\nयह सीधे unit circle से जुड़ता है: $a=r\\cos\\theta$ और $b=r\\sin\\theta$, बिल्कुल वैसे ही जैसे पिछले chapter में circle पर coordinates plot किए थे — बस यहाँ radius $r$ है, हमेशा $1$ नहीं।"),
      worked(
        b("Write z = 2(cos 60° + i sin 60°) in the form a + bi.","z = 2(cos 60° + i sin 60°) को a + bi के रूप में लिखिए।"),
        [
          ["a = r cos θ = 2 × cos 60° = 2 × 1/2 = 1.","a = r cos θ = 2 × cos 60° = 2 × 1/2 = 1।","cos 60° = 1/2 is a standard angle value from the last chapter.","cos 60° = 1/2, पिछले chapter का standard angle value है।"],
          ["b = r sin θ = 2 × sin 60° = 2 × √3/2 = √3.","b = r sin θ = 2 × sin 60° = 2 × √3/2 = √3।","sin 60° = √3/2, another standard value.","sin 60° = √3/2, एक और standard value।"]
        ],
        b("z = 1 + √3 i.","z = 1 + √3 i।")))
  ];

  var inequalities=[

    topic("MTH11-5-0",
      b("0. Revise: Equations and the Balance Scale","0. दोहराइए: Equations और Balance Scale"),
      b(
        "Think of an equation like $2x+3=7$ as a balance scale, perfectly level. Whatever you do to one side, you must do to the other, or the scale tips.\n\nSubtract 3 from both sides: $2x=4$. Divide both sides by 2: $x=2$.\n\nAn equation has exactly **one** balance point. This chapter looks at what happens when the two sides are not equal, but one is bigger — an **inequality**. The same balance-scale idea still applies, with one new twist you will meet soon.",
        "$2x+3=7$ जैसे equation को एक बिल्कुल level balance scale सोचिए। एक तरफ़ जो भी करें, दूसरी तरफ़ भी करना पड़ेगा, नहीं तो scale झुक जाएगा।\n\nदोनों तरफ़ से 3 घटाइए: $2x=4$। दोनों तरफ़ को 2 से divide कीजिए: $x=2$।\n\nEquation का बैलेंस point ठीक **एक** होता है। यह chapter देखता है कि जब दोनों तरफ़ बराबर न हों, बल्कि एक बड़ा हो — तब क्या होता है, यानी **inequality**। वही balance-scale वाला विचार यहाँ भी लागू होता है, बस एक नया मोड़ जल्दी मिलेगा।"),
      worked(
        b("Solve 2x + 3 = 7.","2x + 3 = 7 हल कीजिए।"),
        [
          ["Subtract 3 from both sides: 2x = 4.","दोनों तरफ़ से 3 घटाइए: 2x = 4।","This keeps the scale balanced.","इससे scale balanced रहता है।"],
          ["Divide both sides by 2: x = 2.","दोनों तरफ़ को 2 से divide कीजिए: x = 2।","Dividing both sides equally keeps the balance.","दोनों तरफ़ बराबर divide करने से balance रहता है।"]
        ],
        b("x = 2.","x = 2।"))),

    topic("MTH11-5-1",
      b("1. What is an Inequality?","1. Inequality क्या है?"),
      b(
        "A speed limit sign does not say ‘drive at exactly 80 km/h’ — it says **at most** 80. A voting age rule does not fix one age — it says **at least** 18. These are **inequalities**: statements about a whole range, not one exact value.\n\n$$x<a\\ (\\text{less than})\\qquad x>a\\ (\\text{greater than})$$\n$$x\\leq a\\ (\\text{at most})\\qquad x\\geq a\\ (\\text{at least})$$\n\nAn equation like $x=5$ has exactly one solution. An inequality like $x<5$ has **infinitely many** — every number smaller than 5.",
        "Speed limit का sign यह नहीं कहता ‘ठीक 80 km/h चलाइए’ — वह कहता है **ज़्यादा से ज़्यादा** 80। Voting age किसी एक age पर नहीं रुकती — वह कहती है **कम से कम** 18। ये **inequalities** हैं: एक पूरे range के बारे में statement, एक exact value के बारे में नहीं।\n\n$$x<a\\ (\\text{से छोटा})\\qquad x>a\\ (\\text{से बड़ा})$$\n$$x\\leq a\\ (\\text{ज़्यादा से ज़्यादा})\\qquad x\\geq a\\ (\\text{कम से कम})$$\n\n$x=5$ जैसे equation का ठीक एक solution होता है। $x<5$ जैसी inequality के **अनगिनत** solutions होते हैं — 5 से छोटा हर number।"),
      worked(
        b("A lift can carry at most 300 kg. Write this as an inequality, using w for weight.","एक lift ज़्यादा से ज़्यादा 300 kg उठा सकती है। इसे inequality की तरह लिखिए, weight के लिए w इस्तेमाल करके।"),
        [
          ["‘At most 300’ means 300 is allowed, and so is anything less.","‘ज़्यादा से ज़्यादा 300’ का मतलब है 300 allowed है, और उससे कम भी।","‘At most’ always includes the boundary value itself.","‘ज़्यादा से ज़्यादा’ में boundary value ख़ुद भी शामिल होती है।"],
          ["Write w ≤ 300.","w ≤ 300 लिखिए।","≤ means ‘less than or equal to’, matching ‘at most’.","≤ का मतलब है ‘से छोटा या बराबर’, ‘ज़्यादा से ज़्यादा’ से मेल खाता है।"]
        ],
        b("w ≤ 300.","w ≤ 300।"))),

    topic("MTH11-5-2",
      b("2. Solving with Addition and Subtraction","2. जोड़कर और घटाकर हल करना"),
      b(
        "**Rule 1:** you may add or subtract the same number on both sides of an inequality, and the direction never changes.\n\n$$\\text{if }a<b,\\text{ then }a+c<b+c\\text{ and }a-c<b-c$$\n\nThis works exactly like solving an equation — move terms across by doing the opposite operation on both sides.",
        "**Rule 1:** inequality के दोनों तरफ़ एक ही number जोड़ या घटा सकते हैं, और direction कभी नहीं बदलती।\n\n$$\\text{अगर }a<b,\\text{ तो }a+c<b+c\\text{ और }a-c<b-c$$\n\nयह ठीक equation हल करने जैसा है — दोनों तरफ़ opposite operation करके terms को पार ले जाइए।"),
      worked(
        b("Solve x + 5 < 9.","x + 5 < 9 हल कीजिए।"),
        [
          ["Subtract 5 from both sides.","दोनों तरफ़ से 5 घटाइए।","This isolates x on one side.","इससे x एक तरफ़ अकेला रह जाता है।"],
          ["x < 4.","x < 4।","5−5 cancels on the left; 9−5=4 on the right.","बाईं ओर 5−5 cancel होता है; दाईं ओर 9−5=4।"]
        ],
        b("x < 4.","x < 4।"))),

    topic("MTH11-5-3",
      b("3. Solving with Multiplication and Division — the Sign Flip","3. गुणा और भाग से हल करना — Sign का पलटना"),
      b(
        "$2<5$ is true. Multiply both sides by $-1$: you get $-2$ and $-5$. But $-2$ is **bigger** than $-5$ (it sits to the right on the number line) — so to keep the statement true, the inequality must **flip**.\n\n**Rule 2:** multiplying or dividing both sides by a **positive** number keeps the direction. Multiplying or dividing by a **negative** number **reverses** it.\n\n$$\\text{if }a<b\\text{ and }c>0,\\text{ then }ac<bc$$\n$$\\text{if }a<b\\text{ and }c<0,\\text{ then }ac>bc$$\n\n⚠️ This is the single most common slip in this chapter — forgetting to flip when a negative number is involved.",
        "$2<5$ सच है। दोनों तरफ़ $-1$ से गुणा कीजिए: $-2$ और $-5$ मिलते हैं। पर $-2$, $-5$ से **बड़ा** है (यह number line पर दाईं ओर है) — तो statement सच रखने के लिए, inequality को **पलटना** पड़ता है।\n\n**Rule 2:** दोनों तरफ़ किसी **positive** number से गुणा या भाग करने पर direction वही रहती है। किसी **negative** number से गुणा या भाग करने पर वह **पलट** जाती है।\n\n$$\\text{अगर }a<b\\text{ और }c>0,\\text{ तो }ac<bc$$\n$$\\text{अगर }a<b\\text{ और }c<0,\\text{ तो }ac>bc$$\n\n⚠️ इस chapter की सबसे आम ग़लती यही है — negative number होने पर पलटना भूल जाना।"),
      worked(
        b("Solve −3x < 12.","−3x < 12 हल कीजिए।"),
        [
          ["Divide both sides by −3, and flip the inequality.","दोनों तरफ़ को −3 से divide कीजिए, और inequality पलट दीजिए।","Dividing by a negative number always flips the direction.","Negative number से divide करने पर direction हमेशा पलटती है।"],
          ["x > −4.","x > −4।","12 ÷ (−3) = −4, and < becomes > because of the flip.","12 ÷ (−3) = −4, और पलटने से < अब > बन जाता है।"]
        ],
        b("x > −4.","x > −4।"))),

    topic("MTH11-5-4",
      b("4. Representing Solutions on a Number Line","4. Solutions को Number Line पर दिखाना"),
      b(
        "An inequality's solution is a whole stretch of the number line, not one point. Two small drawing rules make the picture exact.\n\n{{diagram:number-line-inequality}}\n\nA **filled (dark) circle** means the boundary number is included — used for $\\leq$ or $\\geq$.\n\nAn **open circle** means the boundary number is NOT included — used for $<$ or $>$.\n\nThen draw a solid ray in the direction of every number that works.",
        "Inequality का solution number line का पूरा हिस्सा होता है, एक point नहीं। दो छोटे drawing rules picture को exact बना देते हैं।\n\n{{diagram:number-line-inequality}}\n\n**भरा (dark) circle** का मतलब है boundary number शामिल है — यह $\\leq$ या $\\geq$ के लिए इस्तेमाल होता है।\n\n**खुला circle** का मतलब है boundary number शामिल नहीं है — यह $<$ या $>$ के लिए इस्तेमाल होता है।\n\nफिर उस दिशा में एक ठोस ray बनाइए जिधर हर काम करने वाला number है।"),
      worked(
        b("Represent x ≥ 2 on a number line. Is 2 included?","x ≥ 2 को number line पर दिखाइए। क्या 2 शामिल है?"),
        [
          ["≥ includes equality, so 2 counts as a solution.","≥ में equality शामिल है, इसलिए 2 भी एक solution है।","The boundary number itself satisfies x ≥ 2.","खुद boundary number भी x ≥ 2 को पूरा करता है।"],
          ["Draw a filled circle at 2, with a ray extending right through all bigger numbers.","2 पर भरा circle बनाइए, दाईं ओर उन सभी बड़े numbers तक ray बढ़ाइए।","≥ means 2 and everything larger.","≥ का मतलब है 2 और उससे बड़ा सब कुछ।"]
        ],
        b("Filled circle at 2, ray pointing right.","2 पर भरा circle, दाईं ओर ray।"))),

    topic("MTH11-5-5",
      b("5. Word Problems with Inequalities","5. Inequalities वाले Word Problems"),
      b(
        "Word problems with ‘at least’, ‘at most’, ‘minimum’ or ‘maximum’ are inequalities in disguise. The method is the same as any word problem: name the unknown, write one inequality, then solve it.\n\n**Example (NCERT):** A student scored 62 and 48 in two tests. What is the minimum score needed in a third test to average **at least** 60?\n\nLet $x$ be the third score. ‘Average at least 60’ means:\n\n$$\\dfrac{62+48+x}{3}\\geq60$$\n\n$$110+x\\geq180\\qquad x\\geq70$$\n\nThe student needs at least 70.",
        "‘कम से कम’, ‘ज़्यादा से ज़्यादा’, ‘minimum’ या ‘maximum’ वाले word problems असल में inequalities होते हैं। तरीका किसी भी word problem जैसा है: unknown को नाम दीजिए, एक inequality लिखिए, फिर हल कीजिए।\n\n**उदाहरण (NCERT):** एक student ने दो tests में 62 और 48 पाए। तीसरे test में कम से कम कितने marks चाहिए ताकि average **कम से कम** 60 हो?\n\nमानिए तीसरा score $x$ है। ‘Average कम से कम 60’ का मतलब है:\n\n$$\\dfrac{62+48+x}{3}\\geq60$$\n\n$$110+x\\geq180\\qquad x\\geq70$$\n\nStudent को कम से कम 70 चाहिए।"),
      worked(
        b("A shop sells notebooks at ₹15 each. Ravi has ₹200. How many notebooks can he buy at most?","एक दुकान notebooks ₹15 में बेचती है। Ravi के पास ₹200 हैं। वह ज़्यादा से ज़्यादा कितनी notebooks ख़रीद सकता है?"),
        [
          ["Let n be the number of notebooks. The cost must be at most 200: 15n ≤ 200.","मानिए n notebooks हैं। Cost ज़्यादा से ज़्यादा 200 होनी चाहिए: 15n ≤ 200।","‘At most 200’ becomes ≤ 200.","‘ज़्यादा से ज़्यादा 200’, ≤ 200 बन जाता है।"],
          ["Divide by 15: n ≤ 13.33. Since notebooks are whole, n ≤ 13.","15 से divide कीजिए: n ≤ 13.33। Notebooks पूरी होती हैं, इसलिए n ≤ 13।","You cannot buy a fraction of a notebook, so round down.","Notebook का टुकड़ा नहीं ख़रीद सकते, इसलिए नीचे round कीजिए।"]
        ],
        b("Ravi can buy at most 13 notebooks.","Ravi ज़्यादा से ज़्यादा 13 notebooks ख़रीद सकता है।"))),

    topic("MTH11-5-6",
      b("6. Double (Compound) Inequalities","6. Double (Compound) Inequalities"),
      b(
        "Sometimes a variable is squeezed between two boundaries at once, written as one chain:\n\n$$-8\\leq5x-3<7$$\n\nSolve it by doing the **same operation to all three parts** together — left, middle and right.\n\nAdd 3 everywhere: $-5\\leq5x<10$.\n\nDivide everywhere by 5: $-1\\leq x<2$.\n\nThe solution is every $x$ from $-1$ (included) up to $2$ (not included) — one continuous stretch, not two separate problems.",
        "कभी-कभी एक variable दो boundaries के बीच एक साथ दबा होता है, एक chain की तरह लिखा:\n\n$$-8\\leq5x-3<7$$\n\nइसे हल करने के लिए **तीनों हिस्सों पर एक जैसा operation** एक साथ कीजिए — बायाँ, बीच और दायाँ।\n\nहर जगह 3 जोड़िए: $-5\\leq5x<10$।\n\nहर जगह 5 से divide कीजिए: $-1\\leq x<2$।\n\nSolution है $-1$ (शामिल) से लेकर $2$ (शामिल नहीं) तक हर $x$ — एक लगातार हिस्सा, दो अलग-अलग problems नहीं।"),
      worked(
        b("Solve −2 ≤ 3x + 1 ≤ 10.","−2 ≤ 3x + 1 ≤ 10 हल कीजिए।"),
        [
          ["Subtract 1 from all three parts: −3 ≤ 3x ≤ 9.","तीनों हिस्सों से 1 घटाइए: −3 ≤ 3x ≤ 9।","Whatever happens to the middle must happen to both ends too.","बीच में जो होता है, दोनों सिरों पर भी होना चाहिए।"],
          ["Divide all three parts by 3: −1 ≤ x ≤ 3.","तीनों हिस्सों को 3 से divide कीजिए: −1 ≤ x ≤ 3।","3 is positive, so no flip is needed.","3 positive है, इसलिए पलटने की ज़रूरत नहीं।"]
        ],
        b("−1 ≤ x ≤ 3.","−1 ≤ x ≤ 3।"))),

    topic("MTH11-5-7",
      b("7. Systems of Two Inequalities","7. दो Inequalities का System"),
      b(
        "Sometimes two separate conditions must **both** hold. Solve each one on its own, then keep only the values that satisfy **both**.\n\n**Example:** solve $2x+1>5$ and $3x-2<10$ together.\n\nFirst: $2x+1>5\\Rightarrow x>2$.\n\nSecond: $3x-2<10\\Rightarrow x<4$.\n\nBoth must be true, so the answer is where they overlap:\n\n$$2<x<4$$\n\nThis is exactly the compound-inequality shape from the last topic — a system is just two inequalities that happen to overlap.",
        "कभी-कभी दो अलग conditions **दोनों** सच होनी चाहिए। हर एक को अलग हल कीजिए, फिर सिर्फ़ वे values रखिए जो **दोनों** को पूरा करते हैं।\n\n**उदाहरण:** $2x+1>5$ और $3x-2<10$ साथ हल कीजिए।\n\nपहला: $2x+1>5\\Rightarrow x>2$।\n\nदूसरा: $3x-2<10\\Rightarrow x<4$।\n\nदोनों सच होने चाहिए, इसलिए answer वहाँ है जहाँ वे overlap करते हैं:\n\n$$2<x<4$$\n\nयह ठीक पिछले topic वाला compound-inequality shape है — system बस दो inequalities हैं जो overlap कर जाती हैं।"),
      worked(
        b("Solve the system: x + 3 > 5 and 2x < 14.","System हल कीजिए: x + 3 > 5 और 2x < 14।"),
        [
          ["Solve each separately: x > 2, and x < 7.","हर एक को अलग हल कीजिए: x > 2, और x < 7।","Treat them as two independent inequalities first.","पहले इन्हें दो independent inequalities की तरह देखिए।"],
          ["Keep only the overlap: 2 < x < 7.","सिर्फ़ overlap रखिए: 2 < x < 7।","Only values satisfying both conditions survive.","सिर्फ़ वे values बचती हैं जो दोनों conditions पूरी करें।"]
        ],
        b("2 < x < 7.","2 < x < 7।")))
  ];

  var pnc=[

    topic("MTH11-6-0",
      b("0. Revise: Counting Choices You Already Make","0. दोहराइए: Choices गिनना जो आप पहले से करते हैं"),
      b(
        "A café sells 3 drink sizes and 2 flavours. To count every possible order, you don't need to list them all one by one — you can just **multiply**.\n\n$$3\\text{ sizes}\\times2\\text{ flavours}=6\\text{ orders}$$\n\nThis one idea — multiplying the number of choices at each step — is the seed of this entire chapter. Permutations and combinations are just careful, organised ways of counting, built on exactly this.",
        "एक café में 3 drink sizes और 2 flavours मिलते हैं। हर possible order गिनने के लिए, एक-एक करके list करने की ज़रूरत नहीं — बस **गुणा** कर सकते हैं।\n\n$$3\\text{ sizes}\\times2\\text{ flavours}=6\\text{ orders}$$\n\nयही एक विचार — हर step पर choices की संख्या गुणा करना — इस पूरे chapter का बीज है। Permutations और combinations बस इसी पर बने, संगठित तरीके से गिनने के careful तरीके हैं।"),
      worked(
        b("A shop has 4 phone cases and 3 screen guards. How many case+guard combinations are there?","एक दुकान में 4 phone cases और 3 screen guards हैं। कितने case+guard combinations हैं?"),
        [
          ["Each of the 4 cases can be paired with any of the 3 guards.","4 में से हर case, 3 में से किसी भी guard के साथ जोड़ा जा सकता है।","No possible pairing is left out.","कोई possible pairing नहीं छूटती।"],
          ["Multiply: 4 × 3 = 12.","गुणा कीजिए: 4 × 3 = 12।","This is the same multiplication idea as the café example.","यह café वाले उदाहरण जैसा ही गुणा है।"]
        ],
        b("12 combinations.","12 combinations।"))),

    topic("MTH11-6-1",
      b("1. The Fundamental Principle of Counting","1. Counting का Fundamental Principle"),
      b(
        "You already met this exact picture in the Cartesian product chapter — a tailor pairing colours with items.\n\n{{diagram:cartesian-grid}}\n\n**Fundamental Principle of Counting:** if one step can happen in $m$ ways, and a second, independent step can then happen in $n$ ways, the two together can happen in $m\\times n$ ways.\n\nThis stretches to any number of steps — three independent choices multiply three numbers together, and so on. Counting big numbers of arrangements always starts here.",
        "आपने यह ठीक यही picture Cartesian product वाले chapter में देखी थी — एक दर्ज़ी colours को items से जोड़ रहा है।\n\n{{diagram:cartesian-grid}}\n\n**Fundamental Principle of Counting:** अगर एक step $m$ तरीकों से हो सकता है, और एक दूसरा, independent step $n$ तरीकों से हो सकता है, तो दोनों साथ $m\\times n$ तरीकों से हो सकते हैं।\n\nयह किसी भी संख्या के steps तक फैलता है — तीन independent choices, तीन numbers को गुणा कर देती हैं, वग़ैरह। बड़े arrangements गिनने की शुरुआत हमेशा यहीं से होती है।"),
      worked(
        b("A restaurant offers 4 starters and 5 main courses. How many starter+main combinations are possible?","एक restaurant में 4 starters और 5 main courses हैं। कितने starter+main combinations possible हैं?"),
        [
          ["The starter choice (4 ways) and main-course choice (5 ways) are independent.","Starter choice (4 तरीके) और main-course choice (5 तरीके) independent हैं।","Choosing a starter does not affect which main courses are available.","Starter चुनने से main courses पर कोई असर नहीं पड़ता।"],
          ["Multiply: 4 × 5 = 20.","गुणा कीजिए: 4 × 5 = 20।","The fundamental principle turns two steps into one multiplication.","Fundamental principle दो steps को एक गुणा में बदल देता है।"]
        ],
        b("20 combinations.","20 combinations।"))),

    topic("MTH11-6-2",
      b("2. Factorial Notation","2. Factorial Notation"),
      b(
        "Arranging 5 people in a line involves a repeated multiplication: 5 choices for the first spot, 4 left for the second, 3 for the third, and so on.\n\n$$5\\times4\\times3\\times2\\times1$$\n\nThis exact pattern comes up so often that it has its own symbol: $n!$, read ‘$n$ factorial’.\n\n$$n!=n\\times(n-1)\\times(n-2)\\times\\cdots\\times2\\times1$$\n\nOne special rule, defined for convenience rather than derived: $0!=1$.",
        "5 लोगों को एक line में arrange करने में एक दोहराया हुआ गुणा है: पहली जगह के लिए 5 choices, दूसरी के लिए बची 4, तीसरी के लिए 3, वग़ैरह।\n\n$$5\\times4\\times3\\times2\\times1$$\n\nयह पैटर्न इतनी बार आता है कि इसका अपना symbol है: $n!$, इसे ‘$n$ factorial’ पढ़ते हैं।\n\n$$n!=n\\times(n-1)\\times(n-2)\\times\\cdots\\times2\\times1$$\n\nएक special rule, derive नहीं बल्कि सुविधा के लिए defined: $0!=1$।"),
      worked(
        b("Compute 5!","5! निकालिए।"),
        [
          ["Write out the full product: 5 × 4 × 3 × 2 × 1.","पूरा product लिखिए: 5 × 4 × 3 × 2 × 1।","This is exactly what n! means for n=5.","n=5 के लिए n! का यही मतलब है।"],
          ["Multiply step by step: 5×4=20, ×3=60, ×2=120, ×1=120.","एक-एक करके गुणा कीजिए: 5×4=20, ×3=60, ×2=120, ×1=120।","The final multiplication by 1 never changes the value.","आख़िर में 1 से गुणा करने पर value नहीं बदलती।"]
        ],
        b("5! = 120.","5! = 120।"))),

    topic("MTH11-6-3",
      b("3. Permutations of Distinct Objects","3. अलग-अलग Objects के Permutations"),
      b(
        "A **permutation** is an arrangement where **order matters** — first place, second place, and so on are all different outcomes.\n\nThe number of ways to arrange $r$ objects, chosen from $n$ distinct objects, is written $^nP_r$:\n\n$$^nP_r=\\dfrac{n!}{(n-r)!}$$\n\nThink of it as filling $r$ spots one at a time: $n$ choices for the first spot, $n-1$ for the next, and so on for $r$ spots — the factorials package this up neatly.\n\nWhen $r=n$ (arranging everything), $^nP_n=n!$.",
        "**Permutation** एक ऐसा arrangement है जहाँ **order मायने रखता है** — पहली जगह, दूसरी जगह, वग़ैरह सब अलग outcomes हैं।\n\n$n$ अलग-अलग objects में से $r$ को arrange करने के तरीके $^nP_r$ लिखते हैं:\n\n$$^nP_r=\\dfrac{n!}{(n-r)!}$$\n\nइसे $r$ जगहें एक-एक करके भरना सोचिए: पहली जगह के लिए $n$ choices, अगली के लिए $n-1$, वग़ैरह $r$ जगहों तक — factorials इसे साफ़-साफ़ समेट देते हैं।\n\nजब $r=n$ (सब कुछ arrange करना), तो $^nP_n=n!$।"),
      worked(
        b("In how many ways can 3 students, out of 5, be arranged in a line for a photo?","5 में से 3 students को photo के लिए line में कितने तरीकों से arrange कर सकते हैं?"),
        [
          ["This is a permutation: n=5, r=3, since the order in line matters.","यह permutation है: n=5, r=3, क्योंकि line में order मायने रखता है।","Standing first vs second vs third are different outcomes.","पहले, दूसरे, तीसरे खड़े होने अलग outcomes हैं।"],
          ["⁵P₃ = 5!/(5−3)! = 120/2 = 60.","⁵P₃ = 5!/(5−3)! = 120/2 = 60।","Divide 5! by the factorial of the leftover, unused spots.","5! को बची हुई, इस्तेमाल न हुई जगहों के factorial से divide कीजिए।"]
        ],
        b("60 ways.","60 तरीके।"))),

    topic("MTH11-6-4",
      b("4. Repetition Allowed or Not Allowed","4. Repetition Allowed या Not Allowed"),
      b(
        "Read a counting problem carefully — can the same item be reused, or not?\n\nA 3-digit code from digits $0$-$9$, **if a digit can repeat**: each of the 3 positions independently has 10 choices.\n\n$$10\\times10\\times10=10^3=1000$$\n\nThe same code, **if digits cannot repeat**: the first position has 10 choices, but each next position has one fewer option left — this is exactly $^{10}P_3$.\n\n$$^{10}P_3=10\\times9\\times8=720$$\n\nSame-looking question, two very different answers — the repetition rule changes everything.",
        "किसी counting problem को ध्यान से पढ़िए — क्या एक ही item फिर इस्तेमाल हो सकता है, या नहीं?\n\n$0$-$9$ के digits से 3-digit code, **अगर digit दोहरा सकता है**: तीनों positions में से हर एक के अलग-अलग 10 choices हैं।\n\n$$10\\times10\\times10=10^3=1000$$\n\nवही code, **अगर digits नहीं दोहरा सकते**: पहली position के 10 choices हैं, पर हर अगली position में एक option कम बचता है — यह ठीक $^{10}P_3$ है।\n\n$$^{10}P_3=10\\times9\\times8=720$$\n\nदेखने में एक जैसा question, पर दो बिल्कुल अलग answers — repetition का rule सब कुछ बदल देता है।"),
      worked(
        b("A 4-letter password uses the letters A, B, C, D, E. How many passwords are possible if letters CANNOT repeat?","एक 4-letter password A, B, C, D, E letters से बनता है। अगर letters दोहरा नहीं सकते, तो कितने passwords possible हैं?"),
        [
          ["No repetition, order matters — this is ⁵P₄.","कोई repetition नहीं, order मायने रखता है — यह ⁵P₄ है।","5 letters available, arranging 4 of them without reuse.","5 letters उपलब्ध हैं, बिना दोहराए 4 arrange करने हैं।"],
          ["⁵P₄ = 5!/(5−4)! = 120/1 = 120.","⁵P₄ = 5!/(5−4)! = 120/1 = 120।","With only 1 letter left unused, (5−4)! = 1! = 1.","सिर्फ़ 1 letter बचा, (5−4)! = 1! = 1।"]
        ],
        b("120 passwords.","120 passwords।"))),

    topic("MTH11-6-5",
      b("5. Permutations When Objects Are Not All Distinct","5. जब सभी Objects अलग-अलग न हों"),
      b(
        "Arranging the letters of ROSE (4 different letters) gives $4!=24$ arrangements. But arranging the letters of BALL is different — the two L's are identical, so swapping them produces the exact same word.\n\nDivide out the repeats:\n\n$$\\text{arrangements}=\\dfrac{n!}{p_1!\\,p_2!\\,\\cdots}$$\n\nwhere $p_1,p_2,\\ldots$ count how many times each repeated letter appears.\n\nFor BALL: $n=4$ letters total, L repeats twice.\n\n$$\\dfrac{4!}{2!}=\\dfrac{24}{2}=12$$",
        "ROSE (4 अलग-अलग letters) के letters arrange करने पर $4!=24$ arrangements मिलते हैं। पर BALL के letters अलग हैं — दोनों L एक जैसे हैं, इसलिए उन्हें बदलने पर वही शब्द बनता है।\n\nदोहराव को बाहर निकालिए:\n\n$$\\text{arrangements}=\\dfrac{n!}{p_1!\\,p_2!\\,\\cdots}$$\n\nजहाँ $p_1,p_2,\\ldots$ बताते हैं कि हर दोहराया letter कितनी बार आता है।\n\nBALL के लिए: कुल $n=4$ letters, L दो बार आता है।\n\n$$\\dfrac{4!}{2!}=\\dfrac{24}{2}=12$$"),
      worked(
        b("How many arrangements are there of the letters in LEVEL?","LEVEL के letters के कितने arrangements हैं?"),
        [
          ["LEVEL has 5 letters total; L repeats twice and E repeats twice.","LEVEL में कुल 5 letters हैं; L दो बार और E दो बार आता है।","Spot every repeated letter before applying the formula.","Formula लगाने से पहले हर दोहराया letter पहचानिए।"],
          ["Divide: 5!/(2!×2!) = 120/4 = 30.","Divide कीजिए: 5!/(2!×2!) = 120/4 = 30।","Each repeated letter gets its own factorial in the denominator.","हर दोहराए letter का अपना factorial denominator में जाता है।"]
        ],
        b("30 arrangements.","30 arrangements।"))),

    topic("MTH11-6-6",
      b("6. Combinations","6. Combinations"),
      b(
        "A **combination** is a selection where **order does not matter** — picking Priya-then-Rahul for a committee is the same outcome as picking Rahul-then-Priya.\n\nThe number of ways to choose $r$ objects from $n$ distinct objects is written $^nC_r$:\n\n$$^nC_r=\\dfrac{n!}{r!\\,(n-r)!}$$\n\nCompare this to $^nP_r$: a combination is a permutation with the internal ordering removed — divided out by $r!$, the number of ways those $r$ chosen objects could themselves be arranged.",
        "**Combination** एक selection है जहाँ **order मायने नहीं रखता** — committee के लिए पहले Priya फिर Rahul चुनना, पहले Rahul फिर Priya चुनने जैसा ही outcome है।\n\n$n$ अलग-अलग objects में से $r$ चुनने के तरीके $^nC_r$ लिखते हैं:\n\n$$^nC_r=\\dfrac{n!}{r!\\,(n-r)!}$$\n\nइसे $^nP_r$ से compare कीजिए: combination एक permutation है जिसमें अंदर की ordering हटा दी गई है — $r!$ से divide किया हुआ, यानी वे चुने हुए $r$ objects ख़ुद कितने तरीकों से arrange हो सकते थे।"),
      worked(
        b("In how many ways can a committee of 3 be chosen from 5 students?","5 students में से 3 की committee कितने तरीकों से चुन सकते हैं?"),
        [
          ["This is a combination: n=5, r=3, since the order of choosing does not matter.","यह combination है: n=5, r=3, क्योंकि चुनने का order मायने नहीं रखता।","A committee of {A,B,C} is the same regardless of the order chosen.","{A,B,C} की committee, किसी भी order में चुनी जाए, एक ही है।"],
          ["⁵C₃ = 5!/(3!×2!) = 120/(6×2) = 10.","⁵C₃ = 5!/(3!×2!) = 120/(6×2) = 10।","Divide by both the chosen group's factorial and the leftover's.","चुने हुए group के factorial और बचे हुए के factorial, दोनों से divide कीजिए।"]
        ],
        b("10 ways.","10 तरीके।"))),

    topic("MTH11-6-7",
      b("7. Relating Permutations and Combinations","7. Permutations और Combinations का संबंध"),
      b(
        "The two formulas are directly linked:\n\n$$^nP_r={}^nC_r\\times r!$$\n\nChoose the group first ($^nC_r$ ways), then arrange that group internally ($r!$ ways) — multiplying the two gives every ordered arrangement, $^nP_r$.\n\n**The real skill is deciding which one a problem needs.** Ask: does the order of the chosen items change the outcome? If yes, it is a permutation. If the items just need to be picked, with no internal order, it is a combination.",
        "दोनों formulas सीधे जुड़े हैं:\n\n$$^nP_r={}^nC_r\\times r!$$\n\nपहले group चुनिए ($^nC_r$ तरीके), फिर उस group को अंदर arrange कीजिए ($r!$ तरीके) — दोनों गुणा करने पर हर ordered arrangement मिलता है, $^nP_r$।\n\n**असली हुनर यह तय करना है कि problem को किसकी ज़रूरत है।** पूछिए: क्या चुनी हुई चीज़ों का order outcome बदलता है? अगर हाँ, तो यह permutation है। अगर चीज़ें बस चुननी हैं, कोई अंदरूनी order नहीं, तो यह combination है।"),
      worked(
        b("A quiz team of 4 is chosen from 8 students, and then one of the 4 is made captain. In how many ways can this happen?","8 students में से 4 की quiz team चुनी जाती है, फिर उन 4 में से एक को captain बनाया जाता है। यह कितने तरीकों से हो सकता है?"),
        [
          ["First choose the team of 4 — order doesn't matter here: ⁸C₄ = 70.","पहले 4 की team चुनिए — यहाँ order मायने नहीं रखता: ⁸C₄ = 70।","Choosing a team is a combination, not a permutation.","Team चुनना combination है, permutation नहीं।"],
          ["Then choose the captain from those 4: 4 ways. Multiply: 70 × 4 = 280.","फिर उन 4 में से captain चुनिए: 4 तरीके। गुणा कीजिए: 70 × 4 = 280।","This is the fundamental counting principle again — two independent steps.","यह फिर से fundamental counting principle है — दो independent steps।"]
        ],
        b("280 ways.","280 तरीके।")))
  ];

  var binomial=[

    topic("MTH11-7-0",
      b("0. Revise: Multiplying Out (a+b)² and (a+b)³ by Hand","0. दोहराइए: (a+b)² और (a+b)³ को हाथ से गुणा करना"),
      b(
        "You already know $(a+b)^2=a^2+2ab+b^2$ — multiply $(a+b)(a+b)$ term by term and collect the two matching $ab$ pieces.\n\nDo the same for $(a+b)^3=(a+b)(a+b)^2$: multiply out and collect again.\n\n$$(a+b)^3=a^3+3a^2b+3ab^2+b^3$$\n\nNotice the pattern in the coefficients: $1,2,1$ for power 2, then $1,3,3,1$ for power 3. This chapter finds a shortcut for **any** power, without multiplying it all out by hand.",
        "आप पहले से जानते हैं $(a+b)^2=a^2+2ab+b^2$ — $(a+b)(a+b)$ को term-by-term गुणा कीजिए और दो मिलते-जुलते $ab$ हिस्सों को इकट्ठा कीजिए।\n\n$(a+b)^3=(a+b)(a+b)^2$ के लिए भी वही कीजिए: गुणा करके फिर इकट्ठा कीजिए।\n\n$$(a+b)^3=a^3+3a^2b+3ab^2+b^3$$\n\nCoefficients का pattern देखिए: power 2 के लिए $1,2,1$, फिर power 3 के लिए $1,3,3,1$। यह chapter **किसी भी** power के लिए एक shortcut ढूँढता है, बिना हाथ से पूरा गुणा किए।"),
      worked(
        b("Expand (a+b)² by multiplying (a+b)(a+b).","(a+b)(a+b) गुणा करके (a+b)² expand कीजिए।"),
        [
          ["Multiply term by term: a·a + a·b + b·a + b·b.","Term by term गुणा कीजिए: a·a + a·b + b·a + b·b।","Every term in the first bracket meets every term in the second.","पहले bracket का हर term, दूसरे के हर term से मिलता है।"],
          ["a·b and b·a are the same, so combine them: a² + 2ab + b².","a·b और b·a एक जैसे हैं, इसलिए मिलाइए: a² + 2ab + b²।","Two identical middle terms add up.","दो एक जैसे बीच वाले terms जुड़ जाते हैं।"]
        ],
        b("a² + 2ab + b².","a² + 2ab + b²।"))),

    topic("MTH11-7-1",
      b("1. Pascal's Triangle","1. Pascal's Triangle"),
      b(
        "Arrange the coefficients you just found — $1,1$ then $1,2,1$ then $1,3,3,1$ — into rows, and a pattern jumps out.\n\n{{diagram:pascals-triangle}}\n\nEvery number is the sum of the two numbers above it. Row $n$ gives every coefficient needed for $(a+b)^n$, without multiplying anything out.\n\nRow 4 reads $1,4,6,4,1$ — so $(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$, straight off the triangle.",
        "अभी मिले coefficients — $1,1$ फिर $1,2,1$ फिर $1,3,3,1$ — को rows में रखिए, और एक pattern सामने आ जाता है।\n\n{{diagram:pascals-triangle}}\n\nहर number अपने ऊपर वाले दो numbers का योग है। Row $n$, $(a+b)^n$ के लिए ज़रूरी हर coefficient देती है, बिना कुछ गुणा किए।\n\nRow 4 है $1,4,6,4,1$ — तो $(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$, सीधे triangle से।"),
      worked(
        b("Use Pascal's triangle to write the coefficients for (a+b)⁴.","Pascal's triangle से (a+b)⁴ के coefficients लिखिए।"),
        [
          ["Row 3 is 1, 3, 3, 1. Row 4 comes from adding neighbouring pairs, with a 1 at each end.","Row 3 है 1, 3, 3, 1। Row 4, पड़ोसी जोड़ियों को जोड़कर बनती है, हर सिरे पर 1 के साथ।","1+3=4, 3+3=6, 3+1=4 — each new number sums its two neighbours above.","1+3=4, 3+3=6, 3+1=4 — हर नया number अपने ऊपर वाले दो पड़ोसियों का योग है।"],
          ["Row 4 is 1, 4, 6, 4, 1.","Row 4 है 1, 4, 6, 4, 1।","Five numbers for the five terms of (a+b)⁴.","(a+b)⁴ के पाँच terms के लिए पाँच numbers।"]
        ],
        b("1, 4, 6, 4, 1.","1, 4, 6, 4, 1।"))),

    topic("MTH11-7-2",
      b("2. The Binomial Theorem","2. Binomial Theorem"),
      b(
        "Pascal's triangle numbers are exactly the combination values $^nC_r$ you met in the last chapter. Writing the theorem with them:\n\n$$(a+b)^n={}^nC_0a^n+{}^nC_1a^{n-1}b+{}^nC_2a^{n-2}b^2+\\cdots+{}^nC_nb^n$$\n\nThis works for any whole number $n$, without ever multiplying brackets by hand — and it is exactly Pascal's triangle written using the $^nC_r$ formula instead of drawing rows.",
        "Pascal's triangle के numbers ठीक वही combination values $^nC_r$ हैं जो पिछले chapter में मिले थे। Theorem को उनसे लिखें:\n\n$$(a+b)^n={}^nC_0a^n+{}^nC_1a^{n-1}b+{}^nC_2a^{n-2}b^2+\\cdots+{}^nC_nb^n$$\n\nयह किसी भी whole number $n$ के लिए काम करता है, brackets को हाथ से गुणा किए बिना — और यह ठीक Pascal's triangle है, rows बनाने की जगह $^nC_r$ formula से लिखा हुआ।"),
      worked(
        b("Expand (x+2)³ using the binomial theorem.","Binomial theorem से (x+2)³ expand कीजिए।"),
        [
          ["Use ³C₀, ³C₁, ³C₂, ³C₃ = 1, 3, 3, 1 as coefficients, with powers of x decreasing and powers of 2 increasing.","³C₀, ³C₁, ³C₂, ³C₃ = 1, 3, 3, 1 को coefficients की तरह लीजिए, x की powers घटती और 2 की powers बढ़ती हुई।","This is row 3 of Pascal's triangle.","यह Pascal's triangle की row 3 है।"],
          ["x³ + 3x²(2) + 3x(2)² + (2)³ = x³ + 6x² + 12x + 8.","x³ + 3x²(2) + 3x(2)² + (2)³ = x³ + 6x² + 12x + 8।","Simplify each term's numbers carefully.","हर term के numbers ध्यान से simplify कीजिए।"]
        ],
        b("x³ + 6x² + 12x + 8.","x³ + 6x² + 12x + 8।"))),

    topic("MTH11-7-3",
      b("3. Patterns Inside the Expansion","3. Expansion के अंदर के Patterns"),
      b(
        "A few facts hold for every binomial expansion $(a+b)^n$, worth knowing at a glance:\n\n- There are always $n+1$ terms — one more than the power.\n- The power of $a$ starts at $n$ and drops by 1 each term, ending at $0$.\n- The power of $b$ starts at $0$ and rises by 1 each term, ending at $n$.\n- In every single term, the two powers always add up to $n$.\n\nCheck this against $(a+b)^3=a^3+3a^2b+3ab^2+b^3$: 4 terms (since $n+1=4$), and each term's powers ($3{+}0$, $2{+}1$, $1{+}2$, $0{+}3$) all add to 3.",
        "हर binomial expansion $(a+b)^n$ के लिए कुछ बातें हमेशा सच होती हैं, एक नज़र में याद रखने लायक:\n\n- हमेशा $n+1$ terms होती हैं — power से एक ज़्यादा।\n- $a$ की power $n$ से शुरू होकर हर term में 1 घटती है, $0$ पर ख़त्म।\n- $b$ की power $0$ से शुरू होकर हर term में 1 बढ़ती है, $n$ पर ख़त्म।\n- हर एक term में, दोनों powers का योग हमेशा $n$ होता है।\n\nइसे $(a+b)^3=a^3+3a^2b+3ab^2+b^3$ पर जाँचिए: 4 terms (क्योंकि $n+1=4$), और हर term की powers ($3{+}0$, $2{+}1$, $1{+}2$, $0{+}3$) सब 3 पर जोड़ती हैं।"),
      worked(
        b("How many terms are in the expansion of (a+b)⁷, and what do the powers of a and b add up to in each term?","(a+b)⁷ के expansion में कितने terms हैं, और हर term में a और b की powers का योग क्या है?"),
        [
          ["Number of terms = n+1 = 7+1 = 8.","Terms की संख्या = n+1 = 7+1 = 8।","This rule holds for every binomial expansion.","यह rule हर binomial expansion के लिए सच है।"],
          ["The powers in every term add up to n = 7.","हर term में powers का योग n = 7 है।","This is true no matter which term you pick.","चाहे कोई भी term चुनें, यह सच है।"]
        ],
        b("8 terms; powers always add up to 7.","8 terms; powers हमेशा 7 पर जुड़ती हैं।"))),

    topic("MTH11-7-4",
      b("4. Special Cases","4. Special Cases"),
      b(
        "Three substitutions into the theorem are worth memorising, since they come up constantly.\n\n**Subtraction** ($b\\to-b$): the signs simply alternate.\n\n$$(x-y)^n={}^nC_0x^n-{}^nC_1x^{n-1}y+{}^nC_2x^{n-2}y^2-\\cdots$$\n\n**Setting $a=1$:**\n\n$$(1+x)^n={}^nC_0+{}^nC_1x+{}^nC_2x^2+\\cdots+{}^nC_nx^n$$\n\nPutting $x=1$ into this gives a bonus fact: $2^n={}^nC_0+{}^nC_1+\\cdots+{}^nC_n$ — every row of Pascal's triangle adds up to a power of 2.",
        "Theorem में तीन substitutions याद रखने लायक हैं, क्योंकि वे बार-बार आते हैं।\n\n**घटाव** ($b\\to-b$): signs बस बारी-बारी बदलते हैं।\n\n$$(x-y)^n={}^nC_0x^n-{}^nC_1x^{n-1}y+{}^nC_2x^{n-2}y^2-\\cdots$$\n\n**$a=1$ रखने पर:**\n\n$$(1+x)^n={}^nC_0+{}^nC_1x+{}^nC_2x^2+\\cdots+{}^nC_nx^n$$\n\nइसमें $x=1$ रखने पर एक bonus fact मिलता है: $2^n={}^nC_0+{}^nC_1+\\cdots+{}^nC_n$ — Pascal's triangle की हर row जोड़ने पर 2 की एक power मिलती है।"),
      worked(
        b("Expand (x−2y)³ using the subtraction pattern.","घटाव वाले pattern से (x−2y)³ expand कीजिए।"),
        [
          ["Use row 3 (1,3,3,1) with alternating signs: x³ − 3x²(2y) + 3x(2y)² − (2y)³.","Row 3 (1,3,3,1) को बारी-बारी signs के साथ लीजिए: x³ − 3x²(2y) + 3x(2y)² − (2y)³।","Every other term flips sign because b is negative here.","हर दूसरा term sign बदलता है क्योंकि यहाँ b negative है।"],
          ["Simplify: x³ − 6x²y + 12xy² − 8y³.","Simplify कीजिए: x³ − 6x²y + 12xy² − 8y³।","Work out the numbers in each term carefully.","हर term के numbers ध्यान से निकालिए।"]
        ],
        b("x³ − 6x²y + 12xy² − 8y³.","x³ − 6x²y + 12xy² − 8y³।"))),

    topic("MTH11-7-5",
      b("5. Using the Binomial Theorem","5. Binomial Theorem का इस्तेमाल"),
      b(
        "Some hard-looking calculations become easy once you spot a binomial in disguise.\n\n**Example:** compute $(99)^3$ without a calculator. Notice $99=100-1$.\n\n$$(99)^3=(100-1)^3=100^3-3(100)^2(1)+3(100)(1)^2-1^3$$\n$$=1000000-30000+300-1=970299$$\n\nThe same trick estimates enormous powers: for $(1.01)^{1000000}=(1+0.01)^{1000000}$, just the first two terms already beat $10{,}000$ — you don't need the rest of the expansion to answer ‘is it bigger than 10,000?’.",
        "कुछ कठिन दिखने वाली calculations आसान हो जाती हैं, अगर आप उसमें छुपा binomial पहचान लें।\n\n**उदाहरण:** बिना calculator के $(99)^3$ निकालिए। ध्यान दीजिए $99=100-1$।\n\n$$(99)^3=(100-1)^3=100^3-3(100)^2(1)+3(100)(1)^2-1^3$$\n$$=1000000-30000+300-1=970299$$\n\nयही trick बहुत बड़ी powers अंदाज़ा लगाने में भी काम आता है: $(1.01)^{1000000}=(1+0.01)^{1000000}$ के लिए, सिर्फ़ पहले दो terms ही $10{,}000$ से बड़े हो जाते हैं — ‘क्या यह 10,000 से बड़ा है?’ का जवाब देने के लिए बाक़ी expansion की ज़रूरत नहीं।"),
      worked(
        b("Compute (102)³ using the binomial theorem (write 102 = 100 + 2).","Binomial theorem से (102)³ निकालिए (102 = 100 + 2 लिखिए)।"),
        [
          ["(100+2)³ = 100³ + 3(100)²(2) + 3(100)(2)² + 2³.","(100+2)³ = 100³ + 3(100)²(2) + 3(100)(2)² + 2³।","This is the standard (a+b)³ pattern with a=100, b=2.","यह standard (a+b)³ pattern है, a=100, b=2 के साथ।"],
          ["= 1000000 + 60000 + 1200 + 8 = 1061208.","= 1000000 + 60000 + 1200 + 8 = 1061208।","Add all four terms together.","चारों terms को जोड़िए।"]
        ],
        b("(102)³ = 1,061,208.","(102)³ = 1,061,208।")))
  ];

  var sequences=[

    topic("MTH11-8-0",
      b("0. Revise: Arithmetic Progressions You Already Know","0. दोहराइए: Arithmetic Progressions जो आप पहले से जानते हैं"),
      b(
        "From Class 10: an **arithmetic progression (A.P.)** is a list of numbers where the **same amount** is added each time.\n\n$$3,7,11,15,\\ldots\\qquad(\\text{add }4\\text{ each time})$$\n\nCall the first term $a$ and the fixed added amount the **common difference** $d$.\n\n$$n\\text{th term: }a_n=a+(n-1)d\\qquad\\text{Sum of }n\\text{ terms: }S_n=\\dfrac{n}{2}\\big[2a+(n-1)d\\big]$$\n\nThis chapter builds on A.P. and introduces its cousin, where you **multiply** instead of add.",
        "Class 10 से: **arithmetic progression (A.P.)** एक ऐसी numbers की list है जहाँ हर बार **एक जैसी मात्रा** जुड़ती है।\n\n$$3,7,11,15,\\ldots\\qquad(\\text{हर बार }4\\text{ जोड़ें})$$\n\nपहले term को $a$ कहिए और जुड़ने वाली fixed मात्रा को **common difference** $d$।\n\n$$n\\text{वाँ term: }a_n=a+(n-1)d\\qquad n\\text{ terms का Sum: }S_n=\\dfrac{n}{2}\\big[2a+(n-1)d\\big]$$\n\nयह chapter A.P. पर बनता है और उसके चचेरे भाई से मिलवाता है, जहाँ जोड़ने की जगह **गुणा** करते हैं।"),
      worked(
        b("Find the 10th term of the A.P. 3, 7, 11, 15, ...","A.P. 3, 7, 11, 15, ... का 10वाँ term निकालिए।"),
        [
          ["Identify a=3 and d=4 (each term adds 4).","a=3 और d=4 पहचानिए (हर term में 4 जुड़ता है)।","Compare consecutive terms to find the common difference.","Common difference पाने के लिए लगातार terms compare कीजिए।"],
          ["a₁₀ = a + 9d = 3 + 9(4) = 39.","a₁₀ = a + 9d = 3 + 9(4) = 39।","Use n=10 in the nth-term formula.","nth-term formula में n=10 इस्तेमाल कीजिए।"]
        ],
        b("The 10th term is 39.","10वाँ term 39 है।"))),

    topic("MTH11-8-1",
      b("1. What is a Sequence?","1. Sequence क्या है?"),
      b(
        "Assume a 30-year generation gap. The number of your ancestors in each generation — parents, grandparents, great-grandparents — goes $2,4,8,16,32,\\ldots$\n\nThis ordered list is a **sequence**. Each number is called a **term**, written $a_1,a_2,a_3,\\ldots$ The term at position $n$ is $a_n$, also called the **general term**.\n\nA sequence is **finite** if it stops (10 generations over 300 years) or **infinite** if it never ends.\n\nSome sequences follow a clean formula, like $a_n=2n$ for even numbers. Others follow a **recurrence** — each term built from earlier ones, like the Fibonacci sequence $1,1,2,3,5,8,\\ldots$ where $a_n=a_{n-1}+a_{n-2}$.",
        "मान लीजिए हर generation में 30 साल का gap है। हर generation में आपके ancestors की संख्या — parents, grandparents, great-grandparents — है $2,4,8,16,32,\\ldots$\n\nयह क्रम में रखी list एक **sequence** है। हर number एक **term** है, लिखा जाता है $a_1,a_2,a_3,\\ldots$ Position $n$ पर वाला term है $a_n$, इसे **general term** भी कहते हैं।\n\nSequence **finite** है अगर वह रुक जाए (300 सालों में 10 generations), या **infinite** है अगर वह कभी न रुके।\n\nकुछ sequences एक साफ़ formula follow करती हैं, जैसे even numbers के लिए $a_n=2n$। कुछ **recurrence** follow करती हैं — हर term पिछलों से बनता है, जैसे Fibonacci sequence $1,1,2,3,5,8,\\ldots$ जहाँ $a_n=a_{n-1}+a_{n-2}$।"),
      worked(
        b("A sequence is given by aₙ=2ⁿ. Find a₅.","एक sequence aₙ=2ⁿ से दी गई है। a₅ निकालिए।"),
        [
          ["Substitute n=5 into the formula: a₅ = 2⁵.","Formula में n=5 रखिए: a₅ = 2⁵।","The general term formula works for any position n.","General term formula किसी भी position n के लिए काम करता है।"],
          ["2⁵ = 32.","2⁵ = 32।","2×2×2×2×2 = 32.","2×2×2×2×2 = 32।"]
        ],
        b("a₅ = 32.","a₅ = 32।"))),

    topic("MTH11-8-2",
      b("2. Series and Sigma Notation","2. Series और Sigma Notation"),
      b(
        "A **series** is what you get when you add up a sequence's terms instead of just listing them.\n\n$$a_1+a_2+a_3+\\cdots+a_n$$\n\nWriting this out fully gets long, so mathematicians use the Greek letter $\\Sigma$ (sigma) as a shorthand for ‘sum’.\n\n$$\\sum_{k=1}^{n}a_k=a_1+a_2+\\cdots+a_n$$\n\nRead it as: ‘sum $a_k$, as $k$ runs from 1 to $n$’.",
        "**Series** वह है जो sequence के terms को सिर्फ़ list करने की जगह जोड़ने पर मिलता है।\n\n$$a_1+a_2+a_3+\\cdots+a_n$$\n\nइसे पूरा लिखना लम्बा हो जाता है, इसलिए mathematicians ‘sum’ के लिए Greek letter $\\Sigma$ (sigma) का shorthand इस्तेमाल करते हैं।\n\n$$\\sum_{k=1}^{n}a_k=a_1+a_2+\\cdots+a_n$$\n\nइसे पढ़िए: ‘$a_k$ का sum, जैसे $k$, 1 से $n$ तक चलता है’।"),
      worked(
        b("Find the sum of the first 4 terms of the sequence aₙ=2n−1 (odd numbers).","Sequence aₙ=2n−1 (odd numbers) के पहले 4 terms का sum निकालिए।"),
        [
          ["List the terms: a₁=1, a₂=3, a₃=5, a₄=7.","Terms लिखिए: a₁=1, a₂=3, a₃=5, a₄=7।","Substitute n=1,2,3,4 into the formula.","Formula में n=1,2,3,4 रखिए।"],
          ["Add them: 1+3+5+7 = 16.","इन्हें जोड़िए: 1+3+5+7 = 16।","This sum is written Σ(2k−1) for k=1 to 4.","यह sum Σ(2k−1) लिखा जाता है, k=1 से 4 तक।"]
        ],
        b("The sum is 16.","Sum 16 है।"))),

    topic("MTH11-8-3",
      b("3. Geometric Progression: the General Term","3. Geometric Progression: General Term"),
      b(
        "A **geometric progression (G.P.)** is a sequence where you **multiply** by the same fixed number each time, instead of adding.\n\n$$2,6,18,54,\\ldots\\qquad(\\text{multiply by }3\\text{ each time})$$\n\nCall the first term $a$ and the fixed multiplier the **common ratio** $r$ (found by dividing any term by the one before it).\n\n$$a_n=ar^{n-1}$$\n\nCompare this to the A.P. formula $a_n=a+(n-1)d$ — same shape, but multiplication has replaced addition throughout.",
        "**Geometric progression (G.P.)** एक sequence है जहाँ हर बार जोड़ने की जगह एक ही fixed number से **गुणा** करते हैं।\n\n$$2,6,18,54,\\ldots\\qquad(\\text{हर बार }3\\text{ से गुणा})$$\n\nपहले term को $a$ कहिए और fixed multiplier को **common ratio** $r$ (किसी term को उससे पहले वाले से divide करके मिलता है)।\n\n$$a_n=ar^{n-1}$$\n\nइसे A.P. formula $a_n=a+(n-1)d$ से compare कीजिए — same shape, बस जोड़ने की जगह हर जगह गुणा आ गया।"),
      worked(
        b("Find the 5th term of the G.P. 2, 6, 18, 54, ...","G.P. 2, 6, 18, 54, ... का 5वाँ term निकालिए।"),
        [
          ["Identify a=2 and r=3 (each term is 3 times the last).","a=2 और r=3 पहचानिए (हर term पिछले का 3 गुना है)।","Divide any term by the one before it to find r.","r पाने के लिए किसी term को उससे पहले वाले से divide कीजिए।"],
          ["a₅ = ar⁴ = 2×3⁴ = 2×81 = 162.","a₅ = ar⁴ = 2×3⁴ = 2×81 = 162।","Use n=5 in the general-term formula.","General-term formula में n=5 इस्तेमाल कीजिए।"]
        ],
        b("The 5th term is 162.","5वाँ term 162 है।"))),

    topic("MTH11-8-4",
      b("4. Sum of a Geometric Progression","4. Geometric Progression का Sum"),
      b(
        "Adding G.P. terms one by one gets slow. There is a direct formula for the sum of the first $n$ terms, when $r\\neq1$:\n\n$$S_n=\\dfrac{a(r^n-1)}{r-1}$$\n\nThis single formula replaces adding potentially huge lists of numbers by hand — useful the moment $n$ gets large, like the number of ancestors over many generations.",
        "G.P. के terms को एक-एक करके जोड़ना धीमा है। पहले $n$ terms के sum के लिए एक सीधा formula है, जब $r\\neq1$:\n\n$$S_n=\\dfrac{a(r^n-1)}{r-1}$$\n\nयह एक formula, हाथ से बड़ी-बड़ी lists जोड़ने की जगह लेता है — तब काम आता है जब $n$ बड़ा हो जाए, जैसे कई generations में ancestors की संख्या।"),
      worked(
        b("Find the sum of the first 5 terms of the G.P. 1, 2, 4, 8, ...","G.P. 1, 2, 4, 8, ... के पहले 5 terms का sum निकालिए।"),
        [
          ["Identify a=1, r=2, n=5.","a=1, r=2, n=5 पहचानिए।","Each term doubles, so r=2.","हर term दोगुना होता है, इसलिए r=2।"],
          ["S₅ = 1×(2⁵−1)/(2−1) = (32−1)/1 = 31.","S₅ = 1×(2⁵−1)/(2−1) = (32−1)/1 = 31।","Substitute directly into the sum formula.","Sum formula में सीधे रखिए।"]
        ],
        b("The sum is 31.","Sum 31 है।"))),

    topic("MTH11-8-5",
      b("5. Geometric Mean and the A.M.–G.M. Relationship","5. Geometric Mean और A.M.–G.M. का संबंध"),
      b(
        "You already know the **arithmetic mean (A.M.)** of two numbers: $\\dfrac{a+b}{2}$, the ordinary average.\n\nThe **geometric mean (G.M.)** of two positive numbers is $\\sqrt{ab}$ — it makes $a,\\text{G.M.},b$ into a G.P., the same way the A.M. makes $a,\\text{A.M.},b$ into an A.P.\n\nFor 2 and 8: A.M. $=\\dfrac{2+8}{2}=5$, but G.M. $=\\sqrt{16}=4$.\n\nThis is not a coincidence — for any two positive numbers, **A.M. is never smaller than G.M.**\n\n$$\\dfrac{a+b}{2}\\geq\\sqrt{ab}$$",
        "आप दो numbers का **arithmetic mean (A.M.)** पहले से जानते हैं: $\\dfrac{a+b}{2}$, साधारण average।\n\nदो positive numbers का **geometric mean (G.M.)** है $\\sqrt{ab}$ — यह $a,\\text{G.M.},b$ को एक G.P. बना देता है, वैसे ही जैसे A.M., $a,\\text{A.M.},b$ को एक A.P. बनाता है।\n\n2 और 8 के लिए: A.M. $=\\dfrac{2+8}{2}=5$, पर G.M. $=\\sqrt{16}=4$।\n\nयह coincidence नहीं है — किसी भी दो positive numbers के लिए, **A.M. कभी G.M. से छोटा नहीं होता।**\n\n$$\\dfrac{a+b}{2}\\geq\\sqrt{ab}$$"),
      worked(
        b("Find the A.M. and G.M. of 4 and 16, and confirm A.M. ≥ G.M.","4 और 16 का A.M. और G.M. निकालिए, और A.M. ≥ G.M. जाँचिए।"),
        [
          ["A.M. = (4+16)/2 = 10.","A.M. = (4+16)/2 = 10।","The ordinary average of the two numbers.","दोनों numbers का साधारण average।"],
          ["G.M. = √(4×16) = √64 = 8. Since 10 ≥ 8, the relationship holds.","G.M. = √(4×16) = √64 = 8। चूँकि 10 ≥ 8, relationship सही है।","Multiply the two numbers, then take the square root.","दोनों numbers गुणा करके square root लीजिए।"]
        ],
        b("A.M. = 10, G.M. = 8, and 10 ≥ 8.","A.M. = 10, G.M. = 8, और 10 ≥ 8।"))),

    topic("MTH11-8-6",
      b("6. Recognising A.P. vs G.P.","6. A.P. और G.P. में फ़र्क़ पहचानना"),
      b(
        "The two progressions grow completely differently — one steadily, one explosively.\n\n{{diagram:ap-gp-comparison}}\n\n**Test for A.P.:** subtract consecutive terms. If the difference is always the same, it is an A.P.\n\n**Test for G.P.:** divide consecutive terms. If the ratio is always the same, it is a G.P.\n\nFor $5,10,15,20$: differences are $5,5,5$ — an A.P. For $5,10,20,40$: ratios are $2,2,2$ — a G.P. Some sequences are neither.",
        "दोनों progressions बिल्कुल अलग तरह से बढ़ती हैं — एक स्थिर रफ़्तार से, दूसरी विस्फोटक रूप से।\n\n{{diagram:ap-gp-comparison}}\n\n**A.P. का test:** लगातार terms घटाइए। अगर अंतर हमेशा एक जैसा हो, यह A.P. है।\n\n**G.P. का test:** लगातार terms को divide कीजिए। अगर ratio हमेशा एक जैसा हो, यह G.P. है।\n\n$5,10,15,20$ के लिए: अंतर हैं $5,5,5$ — यह A.P. है। $5,10,20,40$ के लिए: ratios हैं $2,2,2$ — यह G.P. है। कुछ sequences न तो A.P. हैं, न G.P.।"),
      worked(
        b("Is the sequence 3, 9, 27, 81 an A.P. or a G.P.?","क्या sequence 3, 9, 27, 81 एक A.P. है या G.P.?"),
        [
          ["Check differences first: 9−3=6, 27−9=18. Not equal, so not an A.P.","पहले अंतर जाँचिए: 9−3=6, 27−9=18। बराबर नहीं, इसलिए A.P. नहीं है।","An A.P. needs the SAME difference every time.","A.P. के लिए हर बार अंतर एक जैसा चाहिए।"],
          ["Check ratios instead: 9÷3=3, 27÷9=3, 81÷27=3. Same ratio — it is a G.P.","इसकी जगह ratios जाँचिए: 9÷3=3, 27÷9=3, 81÷27=3। एक जैसा ratio — यह G.P. है।","A constant ratio is exactly the G.P. test.","स्थिर ratio ही G.P. का test है।"]
        ],
        b("It is a G.P. with common ratio 3.","यह common ratio 3 वाला G.P. है।"))),

    topic("MTH11-8-7",
      b("7. Applying Sequences and Series","7. Sequences और Series का इस्तेमाल"),
      b(
        "Real growth often behaves like a G.P., not an A.P. — because most real change compounds (multiplies), rather than adding a fixed amount.\n\n**Example:** a town's population is 100, and it doubles every year. After $n$ years, the population is:\n\n$$100\\times2^n$$\n\nAfter 5 years: $100\\times2^5=100\\times32=3200$.\n\nMoney in a savings account earning fixed interest, a rumour spreading person-to-person, a virus spreading through contacts — all of these are G.P.-shaped, which is exactly why they can look deceptively slow at first, then rise very fast.",
        "असली growth अक्सर G.P. जैसी होती है, A.P. जैसी नहीं — क्योंकि ज़्यादातर असली बदलाव compound होता है (गुणा होता है), fixed मात्रा नहीं जुड़ती।\n\n**उदाहरण:** एक शहर की population 100 है, और हर साल दोगुनी होती है। $n$ सालों बाद, population है:\n\n$$100\\times2^n$$\n\n5 सालों बाद: $100\\times2^5=100\\times32=3200$।\n\nFixed interest वाले savings account का पैसा, व्यक्ति-से-व्यक्ति फैलती अफ़वाह, contacts से फैलता virus — ये सब G.P.-आकार के हैं, इसीलिए ये शुरू में धीमे दिख सकते हैं, फिर बहुत तेज़ बढ़ते हैं।"),
      worked(
        b("A sheet of paper is folded in half repeatedly. It starts 0.1 mm thick. How thick is it after 6 folds?","एक कागज़ को बार-बार आधा मोड़ा जाता है। यह 0.1 mm मोटा शुरू होता है। 6 folds के बाद यह कितना मोटा है?"),
        [
          ["Each fold doubles the thickness — this is a G.P. with a=0.1, r=2.","हर fold मोटाई दोगुनी करता है — यह a=0.1, r=2 वाला G.P. है।","Folding in half is exactly a ×2 operation, repeated.","आधा मोड़ना ठीक एक ×2 operation है, दोहराया हुआ।"],
          ["After 6 folds: 0.1×2⁶ = 0.1×64 = 6.4 mm.","6 folds के बाद: 0.1×2⁶ = 0.1×64 = 6.4 mm।","6 folds means multiplying by r six times, i.e. r⁶.","6 folds का मतलब है r को छह बार गुणा करना, यानी r⁶।"]
        ],
        b("6.4 mm thick.","6.4 mm मोटा।")))
  ];

  var lines=[

    topic("MTH11-9-0",
      b("0. Revise: The Coordinate Plane, Distance and Midpoint","0. दोहराइए: Coordinate Plane, Distance और Midpoint"),
      b(
        "From Class 10: any point on a flat plane can be named by two numbers, $(x,y)$ — how far right, and how far up.\n\nThe **distance** between two points $(x_1,y_1)$ and $(x_2,y_2)$ comes from Pythagoras' theorem:\n\n$$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$$\n\nThe **midpoint** of the segment joining them is simply the average of the coordinates:\n\n$$\\left(\\dfrac{x_1+x_2}{2},\\dfrac{y_1+y_2}{2}\\right)$$\n\nThis chapter studies straight lines drawn through such points — how steep they are, and how to write their equation.",
        "Class 10 से: किसी भी flat plane पर एक point को दो numbers से नाम दे सकते हैं, $(x,y)$ — कितना दाईं ओर, और कितना ऊपर।\n\nदो points $(x_1,y_1)$ और $(x_2,y_2)$ के बीच की **distance**, Pythagoras' theorem से आती है:\n\n$$d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$$\n\nउन्हें जोड़ने वाले segment का **midpoint** बस coordinates का average है:\n\n$$\\left(\\dfrac{x_1+x_2}{2},\\dfrac{y_1+y_2}{2}\\right)$$\n\nयह chapter ऐसे points से गुज़रती straight lines को पढ़ता है — वे कितनी ढलानदार हैं, और उनका equation कैसे लिखें।"),
      worked(
        b("Find the distance and midpoint between (1,2) and (4,6).","(1,2) और (4,6) के बीच की distance और midpoint निकालिए।"),
        [
          ["Distance: √((4−1)²+(6−2)²) = √(9+16) = √25 = 5.","Distance: √((4−1)²+(6−2)²) = √(9+16) = √25 = 5।","Substitute the coordinates into the distance formula.","Coordinates को distance formula में रखिए।"],
          ["Midpoint: ((1+4)/2, (2+6)/2) = (2.5, 4).","Midpoint: ((1+4)/2, (2+6)/2) = (2.5, 4)।","Average the x's together, and the y's together.","x को अलग average कीजिए, y को अलग।"]
        ],
        b("Distance = 5, Midpoint = (2.5, 4).","Distance = 5, Midpoint = (2.5, 4)।"))),

    topic("MTH11-9-1",
      b("1. Slope of a Line","1. Line का Slope"),
      b(
        "A line's **slope** measures how steep it is — how much it rises for every step across.\n\n{{diagram:slope-rise-run}}\n\nFor two points $(x_1,y_1)$ and $(x_2,y_2)$ on the line:\n\n$$m=\\dfrac{y_2-y_1}{x_2-x_1}$$\n\nA positive slope climbs left to right. A negative slope falls. A horizontal line has slope $0$. A vertical line has **no slope** — the formula would divide by zero.",
        "एक line का **slope** बताता है कि वह कितनी ढलानदार है — हर कदम आगे बढ़ने पर कितनी ऊपर उठती है।\n\n{{diagram:slope-rise-run}}\n\nLine पर दो points $(x_1,y_1)$ और $(x_2,y_2)$ के लिए:\n\n$$m=\\dfrac{y_2-y_1}{x_2-x_1}$$\n\nPositive slope बाएँ से दाएँ चढ़ती है। Negative slope गिरती है। Horizontal line का slope $0$ होता है। Vertical line का **कोई slope नहीं** होता — formula 0 से divide करेगा।"),
      worked(
        b("Find the slope of the line through (1,1) and (4,3).","(1,1) और (4,3) से गुज़रती line का slope निकालिए।"),
        [
          ["m = (3−1)/(4−1).","m = (3−1)/(4−1)।","Subtract y's on top, x's on the bottom, matching points.","ऊपर y घटाइए, नीचे x, मिलते-जुलते points से।"],
          ["m = 2/3.","m = 2/3।","Simplify the fraction.","Fraction simplify कीजिए।"]
        ],
        b("Slope = 2/3.","Slope = 2/3।"))),

    topic("MTH11-9-2",
      b("2. Parallel and Perpendicular Lines","2. Parallel और Perpendicular Lines"),
      b(
        "Slope tells you instantly how two lines relate, without drawing them.\n\n**Parallel lines** never meet — they climb at exactly the same rate.\n\n$$m_1=m_2$$\n\n**Perpendicular lines** cross at a right angle — one's slope is the other's negative reciprocal.\n\n$$m_1\\times m_2=-1$$\n\nExample: slope $2$ and slope $-\\dfrac12$ are perpendicular, since $2\\times\\left(-\\dfrac12\\right)=-1$.",
        "Slope बता देता है कि दो lines कैसे जुड़ी हैं, उन्हें बनाए बिना।\n\n**Parallel lines** कभी नहीं मिलतीं — वे बिल्कुल एक ही रफ़्तार से चढ़ती हैं।\n\n$$m_1=m_2$$\n\n**Perpendicular lines** एक सीधे angle पर काटती हैं — एक का slope दूसरे का negative reciprocal होता है।\n\n$$m_1\\times m_2=-1$$\n\nउदाहरण: slope $2$ और slope $-\\dfrac12$ perpendicular हैं, क्योंकि $2\\times\\left(-\\dfrac12\\right)=-1$।"),
      worked(
        b("A line has slope 4. What slope would a line perpendicular to it have?","एक line का slope 4 है। इसके perpendicular line का slope क्या होगा?"),
        [
          ["Perpendicular slopes multiply to −1: 4 × m₂ = −1.","Perpendicular slopes का गुणनफल −1 होता है: 4 × m₂ = −1।","This is the defining rule for perpendicular lines.","यह perpendicular lines की परिभाषित rule है।"],
          ["m₂ = −1/4.","m₂ = −1/4।","Divide both sides by 4.","दोनों तरफ़ को 4 से divide कीजिए।"]
        ],
        b("The perpendicular slope is −1/4.","Perpendicular slope −1/4 है।"))),

    topic("MTH11-9-3",
      b("3. Angle Between Two Lines","3. दो Lines के बीच का Angle"),
      b(
        "Two intersecting lines with slopes $m_1$ and $m_2$ meet at an angle $\\theta$ found from:\n\n$$\\tan\\theta=\\left|\\dfrac{m_2-m_1}{1+m_1m_2}\\right|$$\n\nThe absolute-value bars keep the answer as the smaller, positive angle between the lines.\n\nCheck it against what you already know: if $m_1m_2=-1$ (perpendicular), the denominator becomes $0$, so $\\tan\\theta$ is undefined — exactly matching $\\theta=90°$.",
        "Slopes $m_1$ और $m_2$ वाली दो काटती हुई lines एक angle $\\theta$ पर मिलती हैं, जो इससे निकलता है:\n\n$$\\tan\\theta=\\left|\\dfrac{m_2-m_1}{1+m_1m_2}\\right|$$\n\nAbsolute-value bars answer को छोटे, positive angle के रूप में रखते हैं।\n\nइसे पहले से जाने हुए के साथ जाँचिए: अगर $m_1m_2=-1$ (perpendicular), denominator $0$ हो जाता है, इसलिए $\\tan\\theta$ undefined है — ठीक $\\theta=90°$ जैसा।"),
      worked(
        b("Find the angle between lines with slopes 1 and 0.","Slopes 1 और 0 वाली lines के बीच का angle निकालिए।"),
        [
          ["tan θ = |(0−1)/(1+1×0)| = |−1/1| = 1.","tan θ = |(0−1)/(1+1×0)| = |−1/1| = 1।","Substitute m₁=1, m₂=0 into the formula.","Formula में m₁=1, m₂=0 रखिए।"],
          ["tan θ = 1 means θ = 45°, a standard angle from Chapter 3.","tan θ = 1 का मतलब है θ = 45°, Chapter 3 का standard angle।","This matches the exact trigonometric values you already know.","यह पहले से जाने trigonometric values से मेल खाता है।"]
        ],
        b("θ = 45°.","θ = 45°।"))),

    topic("MTH11-9-4",
      b("4. Point-Slope and Two-Point Forms","4. Point-Slope और Two-Point Forms"),
      b(
        "**Point-slope form**: if you know one point $(x_1,y_1)$ on a line and its slope $m$, the equation is immediate.\n\n$$y-y_1=m(x-x_1)$$\n\n**Two-point form**: if you know two points instead, first find the slope, then use it in the point-slope form.\n\n$$y-y_1=\\dfrac{y_2-y_1}{x_2-x_1}(x-x_1)$$\n\nThe two-point form is really just ‘find $m$, then use point-slope’ — one extra step, nothing new to memorise.",
        "**Point-slope form**: अगर line पर एक point $(x_1,y_1)$ और उसका slope $m$ पता है, तो equation तुरंत मिल जाता है।\n\n$$y-y_1=m(x-x_1)$$\n\n**Two-point form**: अगर दो points पता हैं, तो पहले slope निकालिए, फिर point-slope form में इस्तेमाल कीजिए।\n\n$$y-y_1=\\dfrac{y_2-y_1}{x_2-x_1}(x-x_1)$$\n\nTwo-point form असल में ‘पहले m निकालो, फिर point-slope इस्तेमाल करो’ है — एक extra step, याद करने को कुछ नया नहीं।"),
      worked(
        b("Find the equation of the line through (1,−1) and (3,5).","(1,−1) और (3,5) से गुज़रती line का equation निकालिए।"),
        [
          ["First find the slope: m = (5−(−1))/(3−1) = 6/2 = 3.","पहले slope निकालिए: m = (5−(−1))/(3−1) = 6/2 = 3।","Two-point form always starts by finding m.","Two-point form हमेशा m निकालने से शुरू होता है।"],
          ["Use point-slope with (1,−1): y−(−1) = 3(x−1), so y = 3x−4.","(1,−1) के साथ point-slope इस्तेमाल कीजिए: y−(−1) = 3(x−1), इसलिए y = 3x−4।","Simplify by distributing and moving terms.","Distribute करके और terms move करके simplify कीजिए।"]
        ],
        b("y = 3x − 4.","y = 3x − 4।"))),

    topic("MTH11-9-5",
      b("5. Slope-Intercept and Intercept Forms","5. Slope-Intercept और Intercept Forms"),
      b(
        "**Slope-intercept form**: the most familiar shape, when you know the slope and where the line crosses the y-axis.\n\n$$y=mx+c$$\n\nHere $m$ is the slope and $c$ is the y-intercept — read straight off the equation, no calculation needed.\n\n**Intercept form**: useful when you know exactly where the line crosses each axis — $a$ on the x-axis, $b$ on the y-axis.\n\n$$\\dfrac{x}{a}+\\dfrac{y}{b}=1$$",
        "**Slope-intercept form**: सबसे जाना-पहचाना shape, जब slope और line का y-axis पर काटने का point पता हो।\n\n$$y=mx+c$$\n\nयहाँ $m$ slope है और $c$ y-intercept है — equation से सीधे पढ़ लीजिए, कोई calculation नहीं चाहिए।\n\n**Intercept form**: तब काम आता है जब पता हो कि line हर axis को ठीक कहाँ काटती है — x-axis पर $a$, y-axis पर $b$।\n\n$$\\dfrac{x}{a}+\\dfrac{y}{b}=1$$"),
      worked(
        b("Find the equation of a line with x-intercept 4 and y-intercept 3.","x-intercept 4 और y-intercept 3 वाली line का equation निकालिए।"),
        [
          ["Use the intercept form with a=4, b=3: x/4 + y/3 = 1.","a=4, b=3 के साथ intercept form इस्तेमाल कीजिए: x/4 + y/3 = 1।","Substitute the two given intercepts directly.","दिए गए दोनों intercepts सीधे रखिए।"],
          ["Multiply through by 12 to clear fractions: 3x + 4y = 12.","Fractions हटाने के लिए 12 से गुणा कीजिए: 3x + 4y = 12।","12 is the smallest number both 4 and 3 divide into evenly.","12 सबसे छोटा number है जिसे 4 और 3 दोनों बराबर बाँटते हैं।"]
        ],
        b("3x + 4y = 12.","3x + 4y = 12।"))),

    topic("MTH11-9-6",
      b("6. General Form and Distance of a Point From a Line","6. General Form और Point से Line की Distance"),
      b(
        "Every line, however it started, can be written in one common shape, the **general form**:\n\n$$Ax+By+C=0$$\n\nFrom this form, the slope is $-\\dfrac{A}{B}$.\n\nTo find how far a point $(x_1,y_1)$ sits from a line in general form:\n\n{{diagram:point-to-line-distance}}\n\n$$d=\\dfrac{|Ax_1+By_1+C|}{\\sqrt{A^2+B^2}}$$\n\nThe distance is always measured along the perpendicular — the shortest path from the point to the line.",
        "हर line को, चाहे वह कहीं से भी शुरू हुई हो, एक साझा shape में लिख सकते हैं, **general form**:\n\n$$Ax+By+C=0$$\n\nइस form से, slope है $-\\dfrac{A}{B}$।\n\nGeneral form वाली line से किसी point $(x_1,y_1)$ की दूरी पाने के लिए:\n\n{{diagram:point-to-line-distance}}\n\n$$d=\\dfrac{|Ax_1+By_1+C|}{\\sqrt{A^2+B^2}}$$\n\nDistance हमेशा perpendicular के साथ नापी जाती है — point से line तक का सबसे छोटा रास्ता।"),
      worked(
        b("Find the distance of the point (1,1) from the line 3x + 4y − 12 = 0.","Point (1,1) की line 3x + 4y − 12 = 0 से दूरी निकालिए।"),
        [
          ["Identify A=3, B=4, C=−12, and substitute (1,1): |3(1)+4(1)−12|.","A=3, B=4, C=−12 पहचानिए, और (1,1) रखिए: |3(1)+4(1)−12|।","Plug the point straight into Ax+By+C.","Point को सीधे Ax+By+C में रखिए।"],
          ["|3+4−12| = |−5| = 5. Divide by √(3²+4²) = 5. So d = 5/5 = 1.","|3+4−12| = |−5| = 5। √(3²+4²) = 5 से divide कीजिए। तो d = 5/5 = 1।","The denominator uses A and B only, not C.","Denominator में सिर्फ़ A और B हैं, C नहीं।"]
        ],
        b("Distance = 1.","Distance = 1।"))),

    topic("MTH11-9-7",
      b("7. Distance Between Two Parallel Lines","7. दो Parallel Lines के बीच की Distance"),
      b(
        "Two parallel lines share the same $A$ and $B$ (the same slope) but differ in $C$:\n\n$$Ax+By+C_1=0\\qquad Ax+By+C_2=0$$\n\nThe gap between them, measured perpendicular to both, is:\n\n$$d=\\dfrac{|C_1-C_2|}{\\sqrt{A^2+B^2}}$$\n\nThis is really the point-to-line distance formula from the last topic, applied to any point on one line, measured against the other — the $A x_1+By_1$ part always cancels out, leaving just the $C$'s.",
        "दो parallel lines का $A$ और $B$ एक जैसा होता है (एक जैसा slope), पर $C$ अलग होता है:\n\n$$Ax+By+C_1=0\\qquad Ax+By+C_2=0$$\n\nदोनों के बीच की दूरी, दोनों के perpendicular नापी हुई, है:\n\n$$d=\\dfrac{|C_1-C_2|}{\\sqrt{A^2+B^2}}$$\n\nयह असल में पिछले topic वाला point-to-line distance formula है, एक line पर किसी point पर लगाया गया, दूसरी line के ख़िलाफ़ नापा हुआ — $A x_1+By_1$ वाला हिस्सा हमेशा cancel हो जाता है, बस $C$ बचते हैं।"),
      worked(
        b("Find the distance between the parallel lines 3x + 4y − 12 = 0 and 3x + 4y + 8 = 0.","Parallel lines 3x + 4y − 12 = 0 और 3x + 4y + 8 = 0 के बीच की distance निकालिए।"),
        [
          ["Identify C₁=−12, C₂=8, and A=3, B=4 (same for both lines).","C₁=−12, C₂=8, और A=3, B=4 पहचानिए (दोनों lines के लिए एक जैसे)।","Both lines must have matching A and B to be parallel.","Parallel होने के लिए दोनों lines का A और B एक जैसा होना चाहिए।"],
          ["d = |−12−8|/√(3²+4²) = 20/5 = 4.","d = |−12−8|/√(3²+4²) = 20/5 = 4।","Subtract the C's, then divide by the same √(A²+B²) as before.","C को घटाइए, फिर पहले जैसे ही √(A²+B²) से divide कीजिए।"]
        ],
        b("Distance = 4.","Distance = 4।")))
  ];

  var conics=[

    topic("MTH11-10-0",
      b("0. Revise: Circles You Already Know","0. दोहराइए: Circles जो आप पहले से जानते हैं"),
      b(
        "A **circle** is every point that sits the same fixed distance — the **radius** — from one fixed point, the **centre**. You have drawn these since primary school with a compass.\n\nUsing the distance formula from Chapter 9, a circle centred at the origin with radius $r$ satisfies:\n\n$$x^2+y^2=r^2$$\n\nEvery point $(x,y)$ on the circle is exactly distance $r$ from $(0,0)$ — this equation is just the distance formula, squared to remove the square root.\n\nThis chapter studies the circle's cousins — shapes made by slicing a cone at different angles.",
        "**Circle** वे सभी points हैं जो एक तय दूरी — **radius** — पर एक तय point, **centre**, से हों। आप ये primary school से compass से बनाते आए हैं।\n\nChapter 9 के distance formula से, origin पर centred radius $r$ वाला circle इसे satisfy करता है:\n\n$$x^2+y^2=r^2$$\n\nCircle पर हर point $(x,y)$, $(0,0)$ से ठीक $r$ दूरी पर है — यह equation बस distance formula है, square root हटाने के लिए square किया हुआ।\n\nयह chapter circle के चचेरे भाइयों को पढ़ता है — cone को अलग-अलग angles पर काटने से बनी shapes।"),
      worked(
        b("Find the equation of a circle centred at (0,0) with radius 5.","(0,0) पर centred, radius 5 वाले circle का equation निकालिए।"),
        [
          ["Use x²+y²=r² with r=5.","r=5 के साथ x²+y²=r² इस्तेमाल कीजिए।","This is the standard circle-at-origin equation.","यह origin पर circle का standard equation है।"],
          ["x²+y² = 25.","x²+y² = 25।","5² = 25.","5² = 25।"]
        ],
        b("x² + y² = 25.","x² + y² = 25।"))),

    topic("MTH11-10-1",
      b("1. What is a Conic Section?","1. Conic Section क्या है?"),
      b(
        "Take a double cone — two ice-cream cones joined tip to tip — and slice through it with a flat plane. Depending on the angle of the cut, four different curves appear.\n\n{{diagram:conic-four-shapes}}\n\nA flat cut gives a **circle**. A tilted cut gives an **ellipse**. A cut parallel to the cone's slanted side gives a **parabola**. A cut through both halves of the double cone gives a **hyperbola**.\n\nAll four are called **conic sections** — sections (slices) of a cone. Each has its own defining property and its own equation, which this chapter builds one at a time.",
        "एक double cone लीजिए — दो ice-cream cones नोक से नोक जुड़े हुए — और उसे एक flat plane से काटिए। काटने के angle के हिसाब से, चार अलग curves बनते हैं।\n\n{{diagram:conic-four-shapes}}\n\nसीधा कट **circle** देता है। तिरछा कट **ellipse** देता है। Cone की ढलानदार साइड के समानांतर कट **parabola** देता है। Double cone के दोनों हिस्सों से गुज़रता कट **hyperbola** देता है।\n\nये चारों **conic sections** कहलाते हैं — cone के sections (टुकड़े)। हर एक की अपनी परिभाषित property और अपना equation है, जिसे यह chapter एक-एक करके बनाता है।"),
      worked(
        b("A plane cuts a double cone through both nappes (halves). Which conic section results?","एक plane double cone के दोनों nappes (हिस्सों) से गुज़रकर काटता है। कौन-सा conic section बनता है?"),
        [
          ["Recall which cut produces which shape from the diagram.","Diagram से याद कीजिए कौन-सा कट कौन-सी shape बनाता है।","Only one of the four shapes needs both halves of the cone.","चारों shapes में से सिर्फ़ एक को cone के दोनों हिस्सों की ज़रूरत है।"],
          ["Cutting through both nappes gives a hyperbola, with two separate branches.","दोनों nappes से गुज़रना hyperbola देता है, दो अलग branches के साथ।","A hyperbola's two branches come from the two halves of the cone.","Hyperbola की दो branches, cone के दोनों हिस्सों से आती हैं।"]
        ],
        b("A hyperbola.","एक hyperbola।"))),

    topic("MTH11-10-2",
      b("2. Circle: Standard Equation","2. Circle: Standard Equation"),
      b(
        "For a circle centred anywhere, not just the origin, use the distance formula from centre $(h,k)$ to any point $(x,y)$ on the circle, and set it equal to the radius $r$.\n\n$$(x-h)^2+(y-k)^2=r^2$$\n\nGiven an equation that does not look like this, **complete the square** on the $x$ terms and the $y$ terms separately to reveal the centre and radius hidden inside.\n\nExample: $x^2+y^2+8x+10y-8=0$ regroups to $(x+4)^2+(y+5)^2=49$ — a circle centred at $(-4,-5)$ with radius $7$.",
        "कहीं भी centred circle के लिए, सिर्फ़ origin पर नहीं, centre $(h,k)$ से circle पर किसी भी point $(x,y)$ तक distance formula इस्तेमाल कीजिए, और उसे radius $r$ के बराबर रखिए।\n\n$$(x-h)^2+(y-k)^2=r^2$$\n\nअगर दिया गया equation इस जैसा न दिखे, तो x terms और y terms पर अलग-अलग **complete the square** करके अंदर छुपा centre और radius निकालिए।\n\nउदाहरण: $x^2+y^2+8x+10y-8=0$ फिर से $(x+4)^2+(y+5)^2=49$ बनता है — centre $(-4,-5)$ और radius $7$ वाला circle।"),
      worked(
        b("Find the centre and radius of the circle x² + y² + 8x + 10y − 8 = 0.","Circle x² + y² + 8x + 10y − 8 = 0 का centre और radius निकालिए।"),
        [
          ["Group and complete the square: (x²+8x+16) + (y²+10y+25) = 8+16+25.","Group करके complete the square कीजिए: (x²+8x+16) + (y²+10y+25) = 8+16+25।","Add the same numbers to both sides to keep the equation balanced.","Equation balanced रखने के लिए दोनों तरफ़ एक जैसे numbers जोड़िए।"],
          ["(x+4)² + (y+5)² = 49, so centre = (−4,−5) and radius = 7.","(x+4)² + (y+5)² = 49, इसलिए centre = (−4,−5) और radius = 7।","√49 = 7, and the signs inside each bracket flip for the centre.","√49 = 7, और हर bracket के अंदर का sign centre के लिए पलट जाता है।"]
        ],
        b("Centre = (−4,−5), radius = 7.","Centre = (−4,−5), radius = 7।"))),

    topic("MTH11-10-3",
      b("3. Parabola: Definition and Standard Equations","3. Parabola: परिभाषा और Standard Equations"),
      b(
        "A **parabola** is every point equally far from one fixed point (the **focus**) and one fixed line (the **directrix**).\n\n{{diagram:parabola-focus-directrix}}\n\nFor a parabola opening rightward, vertex at the origin, focus at $(a,0)$ and directrix $x=-a$:\n\n$$y^2=4ax$$\n\nThree sister equations cover the other directions: $y^2=-4ax$ (opens left), $x^2=4ay$ (opens up), $x^2=-4ay$ (opens down) — always match the sign and which variable is squared to the direction it opens.",
        "**Parabola** वे सभी points हैं जो एक तय point (**focus**) और एक तय line (**directrix**) से बराबर दूर हों।\n\n{{diagram:parabola-focus-directrix}}\n\nदाईं ओर खुलने वाले parabola के लिए, vertex origin पर, focus $(a,0)$ पर और directrix $x=-a$:\n\n$$y^2=4ax$$\n\nतीन बहन equations बाक़ी दिशाएँ देती हैं: $y^2=-4ax$ (बाईं ओर खुलता), $x^2=4ay$ (ऊपर खुलता), $x^2=-4ay$ (नीचे खुलता) — sign और कौन-सा variable square है, हमेशा खुलने की दिशा से मेल खाते हैं।"),
      worked(
        b("Find the focus, directrix and latus rectum length of the parabola y² = 8x.","Parabola y² = 8x का focus, directrix और latus rectum length निकालिए।"),
        [
          ["Compare with y²=4ax: 4a=8, so a=2.","y²=4ax से compare कीजिए: 4a=8, इसलिए a=2।","Match the coefficient of x to find a.","a पाने के लिए x के coefficient से मिलाइए।"],
          ["Focus = (2,0), directrix x = −2, latus rectum = 4a = 8.","Focus = (2,0), directrix x = −2, latus rectum = 4a = 8।","All three values come directly from a, once found.","एक बार a मिलने पर, तीनों values सीधे उसी से आती हैं।"]
        ],
        b("Focus (2,0), directrix x=−2, latus rectum 8.","Focus (2,0), directrix x=−2, latus rectum 8।"))),

    topic("MTH11-10-4",
      b("4. Parabola: Working Backward From Focus and Directrix","4. Parabola: Focus और Directrix से पीछे की ओर काम करना"),
      b(
        "The last topic went from equation to focus/directrix. This one reverses the process — start from a focus and directrix, and build the equation.\n\nThe **latus rectum** is the chord through the focus, perpendicular to the axis, with both ends on the parabola — it measures how ‘wide open’ the curve is at the focus. Its length is always $4a$, same $a$ as in the equation.\n\nGiven a focus, find $a$ as the distance from the vertex to the focus, check which way the parabola opens, then write the matching standard equation directly.",
        "पिछले topic में equation से focus/directrix तक गए। यह topic उल्टा करता है — focus और directrix से शुरू करके, equation बनाता है।\n\n**Latus rectum** वह chord है जो focus से गुज़रती है, axis के perpendicular, दोनों सिरे parabola पर — यह बताती है कि curve focus पर कितनी ‘खुली हुई’ है। इसकी length हमेशा $4a$ होती है, वही $a$ जो equation में है।\n\nFocus दिए जाने पर, vertex से focus तक की दूरी को $a$ मानिए, देखिए parabola किस ओर खुलता है, फिर सीधे matching standard equation लिखिए।"),
      worked(
        b("Find the equation of the parabola with focus (2,0) and directrix x = −2.","Focus (2,0) और directrix x = −2 वाले parabola का equation निकालिए।"),
        [
          ["The focus is on the positive x-axis, and the directrix is x=−a, so a=2.","Focus positive x-axis पर है, और directrix x=−a है, इसलिए a=2।","Compare the given directrix to the standard form x=−a.","दिए गए directrix को standard form x=−a से compare कीजिए।"],
          ["Since it opens toward the positive x-axis, use y²=4ax: y²=8x.","चूँकि यह positive x-axis की ओर खुलता है, y²=4ax इस्तेमाल कीजिए: y²=8x।","The focus on the positive side means the plus version of the equation.","Positive side पर focus होने का मतलब है equation का + वाला version।"]
        ],
        b("y² = 8x.","y² = 8x।"))),

    topic("MTH11-10-5",
      b("5. Ellipse: Definition, Standard Equation and Eccentricity","5. Ellipse: परिभाषा, Standard Equation और Eccentricity"),
      b(
        "An **ellipse** is every point where the distances to two fixed points — the **foci** — always add up to the same total.\n\n{{diagram:ellipse-foci}}\n\nFor an ellipse centred at the origin, wider along the x-axis ($a>b$):\n\n$$\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1$$\n\nThe foci sit at $(\\pm c,0)$, where $c^2=a^2-b^2$. **Eccentricity** measures how stretched the ellipse is:\n\n$$e=\\dfrac{c}{a},\\qquad0<e<1$$\n\n$e$ close to $0$ is nearly circular; $e$ close to $1$ is a long, thin ellipse.",
        "**Ellipse** वे सभी points हैं जहाँ दो तय points — **foci** — से दूरियाँ हमेशा एक ही कुल में जुड़ें।\n\n{{diagram:ellipse-foci}}\n\nOrigin पर centred, x-axis के साथ चौड़े ellipse ($a>b$) के लिए:\n\n$$\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1$$\n\nFoci $(\\pm c,0)$ पर बैठते हैं, जहाँ $c^2=a^2-b^2$। **Eccentricity** बताती है ellipse कितनी खिंची हुई है:\n\n$$e=\\dfrac{c}{a},\\qquad0<e<1$$\n\n$e$ का $0$ के पास होना लगभग circular है; $e$ का $1$ के पास होना एक लम्बा, पतला ellipse है।"),
      worked(
        b("For the ellipse x²/25 + y²/9 = 1, find a, b, c and the eccentricity.","Ellipse x²/25 + y²/9 = 1 के लिए, a, b, c और eccentricity निकालिए।"),
        [
          ["a²=25 so a=5; b²=9 so b=3.","a²=25 इसलिए a=5; b²=9 इसलिए b=3।","Read a² and b² straight off the denominators.","a² और b² को denominators से सीधे पढ़िए।"],
          ["c² = a²−b² = 25−9 = 16, so c=4. Then e = c/a = 4/5 = 0.8.","c² = a²−b² = 25−9 = 16, इसलिए c=4। फिर e = c/a = 4/5 = 0.8।","Use the relationship between a, b and c for an ellipse.","Ellipse के लिए a, b और c के बीच का संबंध इस्तेमाल कीजिए।"]
        ],
        b("a=5, b=3, c=4, e=0.8.","a=5, b=3, c=4, e=0.8।"))),

    topic("MTH11-10-6",
      b("6. Ellipse: Latus Rectum","6. Ellipse: Latus Rectum"),
      b(
        "Just like the parabola, an ellipse has a latus rectum at each focus — the chord through the focus, perpendicular to the major axis, with both ends on the curve.\n\n$$\\text{Length of latus rectum}=\\dfrac{2b^2}{a}$$\n\nThis is worth memorising alongside the eccentricity formula — between the two, you can describe an ellipse's shape and size completely from just $a$ and $b$.",
        "Parabola की तरह, ellipse के हर focus पर एक latus rectum होता है — focus से गुज़रती chord, major axis के perpendicular, दोनों सिरे curve पर।\n\n$$\\text{Latus rectum की Length}=\\dfrac{2b^2}{a}$$\n\nइसे eccentricity formula के साथ याद रखना फ़ायदेमंद है — दोनों मिलकर, सिर्फ़ $a$ और $b$ से ellipse का shape और size पूरी तरह बता देते हैं।"),
      worked(
        b("Find the length of the latus rectum of the ellipse x²/25 + y²/9 = 1.","Ellipse x²/25 + y²/9 = 1 के latus rectum की length निकालिए।"),
        [
          ["Identify a=5, b=3 from the last topic's example.","पिछले topic के example से a=5, b=3 पहचानिए।","Same ellipse, so the same a and b apply.","वही ellipse है, इसलिए वही a और b लागू होते हैं।"],
          ["Length = 2b²/a = 2(9)/5 = 18/5 = 3.6.","Length = 2b²/a = 2(9)/5 = 18/5 = 3.6।","Substitute directly into the latus rectum formula.","Latus rectum formula में सीधे रखिए।"]
        ],
        b("Latus rectum = 18/5 = 3.6.","Latus rectum = 18/5 = 3.6।"))),

    topic("MTH11-10-7",
      b("7. Hyperbola: Standard Equation and Eccentricity","7. Hyperbola: Standard Equation और Eccentricity"),
      b(
        "A **hyperbola** looks almost like an ellipse's rule, with one sign flipped — the *difference* of distances to the two foci stays constant, instead of the sum.\n\n$$\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1$$\n\nThe foci still sit at $(\\pm c,0)$, but now $c^2=a^2+b^2$ — addition, not subtraction, since a hyperbola's branches spread wider than $a$ allows on their own.\n\n$$e=\\dfrac{c}{a},\\qquad e>1$$\n\nEccentricity greater than 1 is exactly what makes a hyperbola open up and never close, unlike the ellipse's bounded loop.",
        "**Hyperbola**, ellipse के rule जैसा ही लगता है, बस एक sign पलटा हुआ — दो foci से दूरियों का *अंतर* स्थिर रहता है, योग नहीं।\n\n$$\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1$$\n\nFoci अब भी $(\\pm c,0)$ पर बैठते हैं, पर अब $c^2=a^2+b^2$ — जोड़, घटाव नहीं, क्योंकि hyperbola की branches, $a$ अकेले जितना allow करता है उससे कहीं ज़्यादा फैलती हैं।\n\n$$e=\\dfrac{c}{a},\\qquad e>1$$\n\nEccentricity का 1 से ज़्यादा होना ही hyperbola को खुला और कभी न बंद होने वाला बनाता है, ellipse के बंद loop के उलट।"),
      worked(
        b("For the hyperbola x²/16 − y²/9 = 1, find a, b, c and the eccentricity.","Hyperbola x²/16 − y²/9 = 1 के लिए, a, b, c और eccentricity निकालिए।"),
        [
          ["a²=16 so a=4; b²=9 so b=3.","a²=16 इसलिए a=4; b²=9 इसलिए b=3।","Read a² and b² straight off the denominators.","a² और b² को denominators से सीधे पढ़िए।"],
          ["c² = a²+b² = 16+9 = 25, so c=5. Then e = c/a = 5/4 = 1.25.","c² = a²+b² = 16+9 = 25, इसलिए c=5। फिर e = c/a = 5/4 = 1.25।","Addition here, unlike the ellipse's subtraction.","यहाँ जोड़, ellipse के घटाव के उलट।"]
        ],
        b("a=4, b=3, c=5, e=1.25.","a=4, b=3, c=5, e=1.25।")))
  ];

  var geo3d=[

    topic("MTH11-11-0",
      b("0. Revise: From 2D to 3D — What Changes","0. दोहराइए: 2D से 3D — क्या बदलता है"),
      b(
        "On a flat page, two perpendicular axes ($x$ and $y$) are enough to name any point — $(x,y)$.\n\nA room is not flat. To name a spot in the room — say, a fly buzzing in mid-air — you also need to know how high it is. One more perpendicular axis, $z$, does that job.\n\n$$\\text{2D: }(x,y)\\qquad\\text{3D: }(x,y,z)$$\n\nEverything you already know about 2D distance carries forward — you will simply add one more squared term for the new axis.",
        "एक flat page पर, दो perpendicular axes ($x$ और $y$) किसी भी point को नाम देने के लिए काफ़ी हैं — $(x,y)$।\n\nएक कमरा flat नहीं होता। कमरे में किसी जगह को नाम देने के लिए — जैसे हवा में भिनभिनाती एक मक्खी — यह भी जानना पड़ता है कि वह कितनी ऊँची है। एक और perpendicular axis, $z$, यही काम करता है।\n\n$$\\text{2D: }(x,y)\\qquad\\text{3D: }(x,y,z)$$\n\n2D distance के बारे में जो कुछ आप पहले से जानते हैं, वह आगे भी काम आता है — बस नए axis के लिए एक और squared term जुड़ जाता है।"),
      worked(
        b("Recall: find the 2D distance between (0,0) and (3,4).","याद कीजिए: (0,0) और (3,4) के बीच 2D distance निकालिए।"),
        [
          ["Use √((x2−x1)² + (y2−y1)²) = √(3² + 4²).","√((x2−x1)² + (y2−y1)²) = √(3² + 4²) इस्तेमाल कीजिए।","This is the Class 10 distance formula, in two dimensions.","यह Class 10 का distance formula है, दो dimensions में।"],
          ["√(9+16) = √25 = 5.","√(9+16) = √25 = 5।","A clean, familiar answer — the classic 3-4-5 triangle.","एक साफ़, जाना-पहचाना answer — classic 3-4-5 triangle।"]
        ],
        b("Distance = 5.","Distance = 5।"))),

    topic("MTH11-11-1",
      b("1. The Three Coordinate Axes and Octants","1. तीन Coordinate Axes और Octants"),
      b(
        "Take three planes, all meeting at one point and all mutually perpendicular — like the corner where two walls meet the floor of a room. These give three axes: $x$, $y$ and $z$, crossing at the **origin** $O=(0,0,0)$.\n\nJust as two perpendicular axes split a flat page into 4 quadrants, three perpendicular planes split all of space into **8 octants**. Each octant is identified by the sign pattern of $(x,y,z)$ — for example, octant I is $(+,+,+)$, and octant VII is $(-,-,-)$.\n\nRead the signs straight off the coordinates to name the octant — no picture needed once you know the pattern.",
        "तीन planes लीजिए, सब एक point पर मिलते हुए और सब आपस में perpendicular — जैसे कमरे का वह कोना जहाँ दो दीवारें फ़र्श से मिलती हैं। ये तीन axes देते हैं: $x$, $y$ और $z$, जो **origin** $O=(0,0,0)$ पर काटते हैं।\n\nजैसे दो perpendicular axes एक flat page को 4 quadrants में बाँटते हैं, वैसे ही तीन perpendicular planes पूरे space को **8 octants** में बाँटते हैं। हर octant, $(x,y,z)$ के sign pattern से पहचाना जाता है — जैसे, octant I है $(+,+,+)$, और octant VII है $(-,-,-)$।\n\nOctant का नाम जानने के लिए coordinates से signs सीधे पढ़िए — एक बार pattern पता होने पर picture की ज़रूरत नहीं।"),
      worked(
        b("Find the octant in which the point (−3,1,2) lies.","Point (−3,1,2) किस octant में है, निकालिए।"),
        [
          ["Read the signs: x is negative, y is positive, z is positive.","Signs पढ़िए: x negative है, y positive है, z positive है।","Just look at each coordinate's sign, one at a time.","हर coordinate का sign एक-एक करके देखिए।"],
          ["The pattern (−,+,+) matches octant II.","Pattern (−,+,+), octant II से मेल खाता है।","Match the sign pattern against the standard octant table.","Sign pattern को standard octant table से मिलाइए।"]
        ],
        b("Octant II.","Octant II।"))),

    topic("MTH11-11-2",
      b("2. Plotting a Point in 3D Space","2. 3D Space में एक Point Plot करना"),
      b(
        "To locate $P(x,y,z)$: start at the origin, walk a distance $x$ along the x-axis, then $y$ parallel to the y-axis, then $z$ parallel to the z-axis (upward if positive, downward if negative).\n\n{{diagram:3d-coordinate-plot}}\n\nA few landmarks are worth knowing by heart: the origin is $(0,0,0)$; any point on the x-axis looks like $(x,0,0)$; any point in the YZ-plane looks like $(0,y,z)$ — the coordinate for whichever axis or plane you are ON becomes zero for what you are NOT on.",
        "$P(x,y,z)$ का पता लगाने के लिए: origin से शुरू कीजिए, x-axis के साथ दूरी $x$ चलिए, फिर y-axis के समानांतर $y$, फिर z-axis के समानांतर $z$ (positive हो तो ऊपर, negative हो तो नीचे)।\n\n{{diagram:3d-coordinate-plot}}\n\nकुछ landmarks याद रखने लायक हैं: origin है $(0,0,0)$; x-axis पर किसी भी point का रूप है $(x,0,0)$; YZ-plane में किसी भी point का रूप है $(0,y,z)$ — जिस axis या plane पर आप हैं, उसके लिए जो नहीं हैं उसका coordinate शून्य हो जाता है।"),
      worked(
        b("A point P(2,4,5) is plotted, and F is directly below P on the XZ-plane (y=0). Find F's coordinates.","Point P(2,4,5) plot किया गया है, और F, P के ठीक नीचे XZ-plane (y=0) पर है। F के coordinates निकालिए।"),
        [
          ["F lies on the XZ-plane, so its y-coordinate must be 0.","F, XZ-plane पर है, इसलिए इसका y-coordinate 0 होना चाहिए।","Any point on the XZ-plane has y=0, by definition.","परिभाषा से, XZ-plane पर किसी भी point का y=0 होता है।"],
          ["Keep P's x and z the same: F = (2,0,5).","P के x और z वही रखिए: F = (2,0,5)।","Only the y-coordinate changes to reach the plane.","Plane तक पहुँचने के लिए सिर्फ़ y-coordinate बदलता है।"]
        ],
        b("F = (2,0,5).","F = (2,0,5)।"))),

    topic("MTH11-11-3",
      b("3. Distance Between Two Points in 3D","3. 3D में दो Points के बीच की Distance"),
      b(
        "The 2D distance formula gains exactly one term — for the new $z$-axis.\n\n$$PQ=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}$$\n\nIf one point is the origin, this simplifies further:\n\n$$OQ=\\sqrt{x_2^2+y_2^2+z_2^2}$$\n\nEverything else works exactly as it did in Chapter 9 — substitute, square, add, take the square root.",
        "2D distance formula में ठीक एक term बढ़ जाता है — नए $z$-axis के लिए।\n\n$$PQ=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}$$\n\nअगर एक point origin है, तो यह और सरल हो जाता है:\n\n$$OQ=\\sqrt{x_2^2+y_2^2+z_2^2}$$\n\nबाक़ी सब कुछ ठीक वैसे ही काम करता है जैसे Chapter 9 में था — रखिए, square कीजिए, जोड़िए, square root लीजिए।"),
      worked(
        b("Find the distance between P(1,−3,4) and Q(−4,1,2).","P(1,−3,4) और Q(−4,1,2) के बीच की distance निकालिए।"),
        [
          ["PQ² = (−4−1)² + (1−(−3))² + (2−4)² = 25 + 16 + 4.","PQ² = (−4−1)² + (1−(−3))² + (2−4)² = 25 + 16 + 4।","Substitute each pair of coordinates carefully, keeping the signs straight.","हर coordinates की जोड़ी ध्यान से रखिए, signs सही रखते हुए।"],
          ["PQ = √45 = 3√5 units.","PQ = √45 = 3√5 units।","45 = 9×5, and √9=3 comes out of the root.","45 = 9×5, और √9=3 root से बाहर आता है।"]
        ],
        b("PQ = 3√5 units.","PQ = 3√5 units।"))),

    topic("MTH11-11-4",
      b("4. Using Distance: Checking Collinearity","4. Distance का इस्तेमाल: Collinearity जाँचना"),
      b(
        "Three points are **collinear** if they all lie on one straight line. The distance formula gives an easy test: find all three pairwise distances, and check whether the two shorter ones add up exactly to the longest.\n\n$$PQ+QR=PR\\ \\Rightarrow\\ P,Q,R\\text{ are collinear}$$\n\nThis works because on a straight line, the middle point splits the total distance into two pieces that add back to the whole — off a straight line, that never happens exactly.",
        "तीन points **collinear** हैं अगर वे सब एक सीधी line पर हों। Distance formula एक आसान test देता है: तीनों जोड़ीदार distances निकालिए, और जाँचिए कि दो छोटी दूरियाँ मिलकर ठीक सबसे लम्बी के बराबर होती हैं या नहीं।\n\n$$PQ+QR=PR\\ \\Rightarrow\\ P,Q,R\\text{ collinear हैं}$$\n\nयह इसलिए काम करता है क्योंकि सीधी line पर, बीच वाला point कुल दूरी को दो हिस्सों में बाँटता है जो वापस जुड़कर पूरी दूरी बनाते हैं — सीधी line से बाहर, यह कभी बिल्कुल सही नहीं बैठता।"),
      worked(
        b("Are the points P(−2,3,5), Q(1,2,3) and R(7,0,−1) collinear?","क्या points P(−2,3,5), Q(1,2,3) और R(7,0,−1) collinear हैं?"),
        [
          ["Find all three distances: PQ=√14, QR=2√14, PR=3√14.","तीनों distances निकालिए: PQ=√14, QR=2√14, PR=3√14।","Apply the distance formula to each pair of points.","Points की हर जोड़ी पर distance formula लगाइए।"],
          ["Check: PQ+QR = √14+2√14 = 3√14 = PR. The test holds.","जाँचिए: PQ+QR = √14+2√14 = 3√14 = PR। Test सही बैठता है।","The two shorter distances add exactly to the longest.","दो छोटी दूरियाँ मिलकर ठीक सबसे लम्बी के बराबर हैं।"]
        ],
        b("Yes, the points are collinear.","हाँ, points collinear हैं।"))),

    topic("MTH11-11-5",
      b("5. Using Distance: Right Triangles and Other Shapes","5. Distance का इस्तेमाल: Right Triangles और बाक़ी Shapes"),
      b(
        "The distance formula also tests the shape of a triangle formed by three points — without drawing anything.\n\nFor a **right-angled triangle**, check whether the Pythagoras relationship holds among the three squared side lengths:\n\n$$\\text{(shortest side)}^2+\\text{(next side)}^2=\\text{(longest side)}^2$$\n\nIf it holds exactly, the triangle has a right angle. If not, it doesn't — no protractor needed, just arithmetic.",
        "Distance formula, तीन points से बने triangle का shape भी जाँचता है — कुछ बनाए बिना।\n\n**Right-angled triangle** के लिए, जाँचिए कि तीनों squared side lengths के बीच Pythagoras वाला संबंध सही बैठता है या नहीं:\n\n$$\\text{(सबसे छोटी side)}^2+\\text{(अगली side)}^2=\\text{(सबसे लम्बी side)}^2$$\n\nअगर यह ठीक-ठीक सही बैठे, triangle में right angle है। अगर नहीं, तो नहीं — किसी protractor की ज़रूरत नहीं, बस arithmetic।"),
      worked(
        b("Are A(3,6,9), B(10,20,30) and C(25,−41,5) the vertices of a right-angled triangle?","क्या A(3,6,9), B(10,20,30) और C(25,−41,5), एक right-angled triangle के vertices हैं?"),
        [
          ["Find all three squared distances: AB²=686, BC²=4571, CA²=2709.","तीनों squared distances निकालिए: AB²=686, BC²=4571, CA²=2709।","Squaring first avoids messy square roots until the very end.","पहले square करने से आख़िर तक गड़बड़ square roots से बचते हैं।"],
          ["Check the largest against the sum of the other two: 686+2709=3395, but BC²=4571. They don't match.","सबसे बड़े को बाक़ी दो के योग से जाँचिए: 686+2709=3395, पर BC²=4571। ये मेल नहीं खाते।","If the Pythagoras relationship fails, there is no right angle.","अगर Pythagoras वाला संबंध सही न बैठे, कोई right angle नहीं है।"]
        ],
        b("No, it is not a right-angled triangle.","नहीं, यह right-angled triangle नहीं है।")))
  ];

  var calculus=[

    topic("MTH11-12-0",
      b("0. Revise: Rate of Change You Already Know","0. दोहराइए: Rate of Change जो आप पहले से जानते हैं"),
      b(
        "A car covers 100 km in 2 hours — its **average speed** is $\\dfrac{100}{2}=50$ km/h. This is a rate: how much one quantity changes for a given change in another.\n\nIn Chapter 9, you met the same idea as **slope**: rise over run, $\\dfrac{y_2-y_1}{x_2-x_1}$.\n\n{{diagram:slope-rise-run}}\n\nAverage speed and slope are the same calculation, wearing different clothes. This chapter asks a sharper question: not the average rate over a whole stretch, but the rate at one single instant. Answering it needs one new idea — the **limit**.",
        "एक car 100 km, 2 घंटों में तय करती है — इसकी **average speed** है $\\dfrac{100}{2}=50$ km/h। यह एक rate है: एक quantity, दूसरे में दिए बदलाव पर कितना बदलती है।\n\nChapter 9 में, आपने यही विचार **slope** की तरह देखा था: rise over run, $\\dfrac{y_2-y_1}{x_2-x_1}$।\n\n{{diagram:slope-rise-run}}\n\nAverage speed और slope, एक ही calculation है, बस अलग कपड़ों में। यह chapter एक ज़्यादा तीखा सवाल पूछता है: पूरे हिस्से का average rate नहीं, बल्कि एक ही पल का rate। इसका जवाब देने के लिए एक नया विचार चाहिए — **limit**।"),
      worked(
        b("A car covers 150 km in 3 hours. Find its average speed.","एक car 150 km, 3 घंटों में तय करती है। इसकी average speed निकालिए।"),
        [
          ["Average speed = total distance ÷ total time.","Average speed = कुल distance ÷ कुल time।","This is the basic definition of a rate.","यही rate की मूल परिभाषा है।"],
          ["150 ÷ 3 = 50 km/h.","150 ÷ 3 = 50 km/h।","Straightforward division.","सीधा division।"]
        ],
        b("50 km/h.","50 km/h।"))),

    topic("MTH11-12-1",
      b("1. The Idea of a Limit","1. Limit का विचार"),
      b(
        "Consider $f(x)=\\dfrac{x^2-4}{x-2}$. Plug in $x=2$ directly and you get $\\dfrac{0}{0}$ — undefined. But look at what happens for $x$ **near** 2, not exactly 2.\n\n{{diagram:limit-approaching-graph}}\n\nSimplify first: for $x\\neq2$, $\\dfrac{x^2-4}{x-2}=\\dfrac{(x-2)(x+2)}{x-2}=x+2$. As $x$ gets closer and closer to 2 — from either side — the value gets closer and closer to $4$.\n\nThis is a **limit**: what a function approaches, not necessarily what it equals.\n\n$$\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}=4$$\n\nThe function has a ‘hole’ at $x=2$, but the limit exists anyway — a limit describes the journey, not the destination.",
        "$f(x)=\\dfrac{x^2-4}{x-2}$ लीजिए। सीधे $x=2$ रखने पर $\\dfrac{0}{0}$ मिलता है — undefined। पर देखिए 2 के **पास** वाले $x$ पर क्या होता है, ठीक 2 पर नहीं।\n\n{{diagram:limit-approaching-graph}}\n\nपहले simplify कीजिए: $x\\neq2$ के लिए, $\\dfrac{x^2-4}{x-2}=\\dfrac{(x-2)(x+2)}{x-2}=x+2$। $x$ जैसे-जैसे 2 के पास आता है — किसी भी तरफ़ से — value भी $4$ के पास आती जाती है।\n\nयही **limit** है: function किस value के पास पहुँचता है, ज़रूरी नहीं कि वह value बराबर हो।\n\n$$\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}=4$$\n\nFunction में $x=2$ पर एक ‘hole’ है, पर limit फिर भी है — limit रास्ते को बताता है, मंज़िल को नहीं।"),
      worked(
        b("Find lim(x→3) (x² − 9)/(x − 3).","lim(x→3) (x² − 9)/(x − 3) निकालिए।"),
        [
          ["Factor the top: x²−9 = (x−3)(x+3), so the expression simplifies to x+3 for x≠3.","ऊपर factor कीजिए: x²−9 = (x−3)(x+3), इसलिए x≠3 के लिए expression x+3 बन जाता है।","Direct substitution gives 0/0, so simplify first.","सीधे रखने पर 0/0 मिलता है, इसलिए पहले simplify कीजिए।"],
          ["Now substitute x=3 into the simplified form: 3+3=6.","अब simplified form में x=3 रखिए: 3+3=6।","Once the (x−3) cancels, direct substitution works fine.","(x−3) cancel होने के बाद, सीधे रखना ठीक काम करता है।"]
        ],
        b("The limit is 6.","Limit 6 है।"))),

    topic("MTH11-12-2",
      b("2. Left-Hand and Right-Hand Limits","2. Left-Hand और Right-Hand Limits"),
      b(
        "‘Approaching from both sides’ hides two separate journeys: approaching from below ($x\\to a^-$, the **left-hand limit**) and from above ($x\\to a^+$, the **right-hand limit**).\n\nA limit exists only when both journeys arrive at the **same** place.\n\n$$\\lim_{x\\to a}f(x)\\text{ exists}\\iff\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)$$\n\nFor $f(x)=\\dfrac{x}{|x|}$ near $x=0$: from the left, $f(x)=-1$ always; from the right, $f(x)=+1$ always. The two sides disagree, so the limit at $0$ simply does not exist — no single number describes both approaches.",
        "‘दोनों तरफ़ से पास आना’ असल में दो अलग यात्राएँ हैं: नीचे से आना ($x\\to a^-$, **left-hand limit**) और ऊपर से आना ($x\\to a^+$, **right-hand limit**)।\n\nLimit तभी होता है जब दोनों यात्राएँ **एक ही** जगह पहुँचें।\n\n$$\\lim_{x\\to a}f(x)\\text{ है}\\iff\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)$$\n\n$f(x)=\\dfrac{x}{|x|}$ के लिए $x=0$ के पास: बाईं ओर से, $f(x)=-1$ हमेशा; दाईं ओर से, $f(x)=+1$ हमेशा। दोनों तरफ़ अलग-अलग हैं, इसलिए $0$ पर limit बिल्कुल नहीं है — कोई एक number दोनों approaches को नहीं बताता।"),
      worked(
        b("For f(x) = x/|x|, find the left-hand and right-hand limits as x→0. Does the limit exist?","f(x) = x/|x| के लिए, x→0 पर left-hand और right-hand limits निकालिए। क्या limit है?"),
        [
          ["For x slightly less than 0 (negative), |x|=−x, so f(x) = x/(−x) = −1.","0 से थोड़ा कम (negative) x के लिए, |x|=−x, इसलिए f(x) = x/(−x) = −1।","Every negative x gives the same value here.","यहाँ हर negative x एक जैसा value देता है।"],
          ["For x slightly more than 0 (positive), |x|=x, so f(x) = x/x = 1. Since −1 ≠ 1, the limit does not exist.","0 से थोड़ा ज़्यादा (positive) x के लिए, |x|=x, इसलिए f(x) = x/x = 1। चूँकि −1 ≠ 1, limit नहीं है।","The two one-sided limits disagree, so there is no single overall limit.","दोनों one-sided limits अलग हैं, इसलिए कोई एक overall limit नहीं है।"]
        ],
        b("LHL = −1, RHL = 1. The limit does not exist.","LHL = −1, RHL = 1। Limit नहीं है।"))),

    topic("MTH11-12-3",
      b("3. Algebra of Limits","3. Limits का Algebra"),
      b(
        "Limits combine exactly the way you would hope — piece by piece.\n\n$$\\lim[f(x)+g(x)]=\\lim f(x)+\\lim g(x)$$\n$$\\lim[f(x)-g(x)]=\\lim f(x)-\\lim g(x)$$\n$$\\lim[f(x)\\cdot g(x)]=\\lim f(x)\\cdot\\lim g(x)$$\n$$\\lim\\left[\\dfrac{f(x)}{g(x)}\\right]=\\dfrac{\\lim f(x)}{\\lim g(x)}\\quad(\\text{if }\\lim g(x)\\neq0)$$\n\nThese rules turn a complicated limit into several simple ones you already know how to find, then recombine.",
        "Limits बिल्कुल वैसे ही जुड़ते हैं जैसा उम्मीद हो — टुकड़ा-टुकड़ा।\n\n$$\\lim[f(x)+g(x)]=\\lim f(x)+\\lim g(x)$$\n$$\\lim[f(x)-g(x)]=\\lim f(x)-\\lim g(x)$$\n$$\\lim[f(x)\\cdot g(x)]=\\lim f(x)\\cdot\\lim g(x)$$\n$$\\lim\\left[\\dfrac{f(x)}{g(x)}\\right]=\\dfrac{\\lim f(x)}{\\lim g(x)}\\quad(\\text{अगर }\\lim g(x)\\neq0)$$\n\nये rules एक कठिन limit को कई साधारण limits में बदल देते हैं जो आप पहले से हल कर सकते हैं, फिर उन्हें वापस जोड़ देते हैं।"),
      worked(
        b("Find lim(x→2) [3x² + 5], using the algebra of limits.","lim(x→2) [3x² + 5] निकालिए, limits के algebra से।"),
        [
          ["Split it: lim(3x²) + lim(5) = 3·lim(x²) + 5.","इसे तोड़िए: lim(3x²) + lim(5) = 3·lim(x²) + 5।","Sum rule and constant-multiple rule, applied together.","Sum rule और constant-multiple rule, साथ लगाए हुए।"],
          ["lim(x²) as x→2 is 2²=4, so the total is 3(4)+5 = 17.","x→2 पर lim(x²) है 2²=4, इसलिए total है 3(4)+5 = 17।","This matches simply substituting x=2 directly — a shortcut for polynomials.","यह सीधे x=2 रखने जैसा ही है — polynomials के लिए एक shortcut।"]
        ],
        b("The limit is 17.","Limit 17 है।"))),

    topic("MTH11-12-4",
      b("4. Limits of Polynomials and Rational Functions","4. Polynomials और Rational Functions की Limits"),
      b(
        "For a **polynomial** $p(x)$, finding a limit is the easiest case of all — direct substitution always works.\n\n$$\\lim_{x\\to a}p(x)=p(a)$$\n\nFor a **rational function** $\\dfrac{f(x)}{g(x)}$, try direct substitution first. If $g(a)\\neq0$, you are done immediately.\n\nIf substitution gives $\\dfrac{0}{0}$, that is not the final answer — it is a signal to **factor and cancel**, exactly as in the first topic, then substitute again into what remains.",
        "**Polynomial** $p(x)$ के लिए, limit निकालना सबसे आसान case है — सीधे substitution हमेशा काम करता है।\n\n$$\\lim_{x\\to a}p(x)=p(a)$$\n\n**Rational function** $\\dfrac{f(x)}{g(x)}$ के लिए, पहले सीधे substitution try कीजिए। अगर $g(a)\\neq0$, तुरंत हो गया।\n\nअगर substitution से $\\dfrac{0}{0}$ मिले, तो यह final answer नहीं है — यह **factor करके cancel करने** का संकेत है, बिल्कुल पहले topic जैसा, फिर बचे हुए में दोबारा substitute कीजिए।"),
      worked(
        b("Find lim(x→1) (x³ − 1)/(x − 1).","lim(x→1) (x³ − 1)/(x − 1) निकालिए।"),
        [
          ["Direct substitution gives 0/0, so factor: x³−1 = (x−1)(x²+x+1).","सीधे substitution से 0/0 मिलता है, इसलिए factor कीजिए: x³−1 = (x−1)(x²+x+1)।","Recognise the difference-of-cubes pattern.","Difference-of-cubes pattern पहचानिए।"],
          ["Cancel (x−1), leaving x²+x+1. Substitute x=1: 1+1+1=3.","(x−1) cancel कीजिए, x²+x+1 बचता है। x=1 रखिए: 1+1+1=3।","Now substitution works cleanly on the simplified form.","अब simplified form पर substitution साफ़-साफ़ काम करता है।"]
        ],
        b("The limit is 3.","Limit 3 है।"))),

    topic("MTH11-12-5",
      b("5. Limits of Trigonometric Functions","5. Trigonometric Functions की Limits"),
      b(
        "One special limit anchors this whole topic, and it is worth memorising:\n\n$$\\lim_{x\\to0}\\dfrac{\\sin x}{x}=1$$\n\n(with $x$ measured in radians). It looks like $\\dfrac{0}{0}$ at first glance, but the ratio genuinely settles at exactly $1$ as $x$ shrinks toward $0$ — you can check this with a calculator for small $x$, like $x=0.01$.\n\nMost trigonometric limits reduce to this one with a little algebra — matching the angle inside $\\sin$ to the denominator.",
        "एक special limit इस पूरे topic का आधार है, और इसे याद रखना फ़ायदेमंद है:\n\n$$\\lim_{x\\to0}\\dfrac{\\sin x}{x}=1$$\n\n($x$ radians में)। पहली नज़र में यह $\\dfrac{0}{0}$ जैसा लगता है, पर $x$ के $0$ की ओर सिकुड़ने पर, यह ratio सच में ठीक $1$ पर टिक जाता है — छोटे $x$ के लिए calculator से जाँच सकते हैं, जैसे $x=0.01$।\n\nज़्यादातर trigonometric limits थोड़े algebra से इसी पर आकर टिकते हैं — $\\sin$ के अंदर वाले angle को denominator से मिलाकर।"),
      worked(
        b("Find lim(x→0) sin(3x)/x, using lim(x→0) sin x/x = 1.","lim(x→0) sin(3x)/x निकालिए, lim(x→0) sin x/x = 1 इस्तेमाल करके।"),
        [
          ["Multiply and divide by 3: sin(3x)/x = 3 × [sin(3x)/(3x)].","3 से गुणा-भाग कीजिए: sin(3x)/x = 3 × [sin(3x)/(3x)]।","This matches the angle inside sin to its own denominator.","यह sin के अंदर वाले angle को अपने denominator से मिलाता है।"],
          ["As x→0, 3x→0 too, so sin(3x)/(3x)→1. The answer is 3×1=3.","x→0 पर, 3x भी →0, इसलिए sin(3x)/(3x)→1। Answer है 3×1=3।","The standard limit applies once the angle and denominator match.","एक बार angle और denominator मिल जाएँ, standard limit लागू होता है।"]
        ],
        b("The limit is 3.","Limit 3 है।"))),

    topic("MTH11-12-6",
      b("6. The Derivative: Instantaneous Rate of Change","6. Derivative: तुरंत का Rate of Change"),
      b(
        "Average speed over a whole trip can hide a lot — a car might speed up and slow down along the way. The speed **at one instant** is what a speedometer shows.\n\nOn a graph, the average rate between two points is the slope of the line joining them — a **secant**. As the second point slides closer and closer to the first, that secant line settles into the **tangent** line.\n\n{{diagram:secant-to-tangent}}\n\nThe **derivative** of $f$ at $x$ is exactly this limiting slope:\n\n$$f'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$$\n\nThis is called finding the derivative **from first principles** — building it directly from the limit definition, before any shortcuts.",
        "पूरी trip की average speed बहुत कुछ छुपा सकती है — car रास्ते में तेज़ और धीमी दोनों हो सकती है। **एक पल** की speed वही है जो speedometer दिखाता है।\n\nGraph पर, दो points के बीच average rate, उन्हें जोड़ने वाली line का slope है — एक **secant**। जैसे-जैसे दूसरा point पहले के पास सरकता है, वह secant line **tangent** line में बदल जाती है।\n\n{{diagram:secant-to-tangent}}\n\n$x$ पर $f$ का **derivative** ठीक यही limiting slope है:\n\n$$f'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$$\n\nइसे derivative **first principles** से निकालना कहते हैं — किसी shortcut से पहले, सीधे limit की परिभाषा से बनाना।"),
      worked(
        b("Find the derivative of f(x) = x² from first principles.","f(x) = x² का derivative first principles से निकालिए।"),
        [
          ["f(x+h) − f(x) = (x+h)² − x² = 2xh + h². Divide by h: 2x + h.","f(x+h) − f(x) = (x+h)² − x² = 2xh + h²। h से divide कीजिए: 2x + h।","Expand (x+h)² fully, then subtract x² — most terms simplify.","(x+h)² पूरा expand कीजिए, फिर x² घटाइए — ज़्यादातर terms simplify होते हैं।"],
          ["As h→0, 2x+h → 2x.","h→0 पर, 2x+h → 2x।","h simply vanishes in the limit, leaving 2x.","Limit में h बस ग़ायब हो जाता है, 2x बचता है।"]
        ],
        b("f'(x) = 2x.","f'(x) = 2x।"))),

    topic("MTH11-12-7",
      b("7. Standard Derivatives and Algebra of Derivatives","7. Standard Derivatives और Derivatives का Algebra"),
      b(
        "Working every derivative from first principles is slow. A handful of standard results, once proven, can be reused forever.\n\n$$\\dfrac{d}{dx}(x^n)=nx^{n-1}\\qquad\\dfrac{d}{dx}(\\text{constant})=0\\qquad\\dfrac{d}{dx}(\\sin x)=\\cos x\\qquad\\dfrac{d}{dx}(\\cos x)=-\\sin x$$\n\nDerivatives combine just like limits did:\n\n$$(f+g)'=f'+g'\\qquad(f-g)'=f'-g'\\qquad(cf)'=cf'$$\n\nWith these rules, differentiating a whole polynomial is just applying the power rule term by term.",
        "हर derivative first principles से निकालना धीमा है। कुछ standard results, एक बार साबित होने पर, हमेशा दोबारा इस्तेमाल हो सकते हैं।\n\n$$\\dfrac{d}{dx}(x^n)=nx^{n-1}\\qquad\\dfrac{d}{dx}(\\text{constant})=0\\qquad\\dfrac{d}{dx}(\\sin x)=\\cos x\\qquad\\dfrac{d}{dx}(\\cos x)=-\\sin x$$\n\nDerivatives भी वैसे ही जुड़ते हैं जैसे limits जुड़ते थे:\n\n$$(f+g)'=f'+g'\\qquad(f-g)'=f'-g'\\qquad(cf)'=cf'$$\n\nइन rules से, पूरे polynomial को differentiate करना बस हर term पर power rule लगाना है।"),
      worked(
        b("Find the derivative of f(x) = 3x² + 5x − 7.","f(x) = 3x² + 5x − 7 का derivative निकालिए।"),
        [
          ["Differentiate each term separately, using the power rule.","हर term को अलग-अलग differentiate कीजिए, power rule इस्तेमाल करके।","d/dx(3x²)=6x, d/dx(5x)=5, d/dx(−7)=0.","d/dx(3x²)=6x, d/dx(5x)=5, d/dx(−7)=0।"],
          ["Add the pieces back together: 6x + 5 + 0.","टुकड़ों को वापस जोड़िए: 6x + 5 + 0।","The sum rule lets you differentiate term by term.","Sum rule से term by term differentiate कर सकते हैं।"]
        ],
        b("f'(x) = 6x + 5.","f'(x) = 6x + 5।")))
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
        topics:trig},
      {no:4,name:b("Complex Numbers","Complex Numbers"),
        summary:b(
          "**Complex Numbers: what this chapter covers**\n\nx²+1=0 has no real solution, so mathematicians invented i, with i²=−1. A complex number z=a+bi has a real part a and imaginary part b. Add, subtract and multiply them like ordinary algebra, remembering i²=−1. To divide, multiply by the denominator's conjugate to clear i from the bottom. Powers of i repeat every 4 steps. The modulus |z|=√(a²+b²) measures distance from 0; the conjugate flips the sign of the imaginary part. The Argand plane plots z as a point; polar form describes the same point using a distance r and angle θ.",
          "**Complex Numbers: इस chapter में क्या सीखेंगे**\n\nx²+1=0 का कोई real solution नहीं है, इसलिए mathematicians ने i बनाया, जिसमें i²=−1 है। Complex number z=a+bi का एक real part a और imaginary part b होता है। इन्हें साधारण algebra जैसे जोड़ें, घटाएँ, गुणा करें, बस i²=−1 याद रखते हुए। Divide करने के लिए, denominator के conjugate से गुणा करके नीचे से i हटाइए। i की powers हर 4 steps में दोहराती हैं। Modulus |z|=√(a²+b²), 0 से दूरी मापता है; conjugate imaginary part का sign बदल देता है। Argand plane, z को एक point की तरह plot करता है; polar form उसी point को दूरी r और angle θ से बताता है।"),
        checkpoint:b(
          "Getting most Warm-up and Standard questions right, across every topic in this chapter, means you are ready to move on. Scoring low? Go back to '0. Revise: Why We Need a New Kind of Number' and redo its example by hand — that is the fastest way forward, not a setback.",
          "इस chapter के हर topic में ज़्यादातर Warm-up और Standard questions सही होना, मतलब आप आगे बढ़ने के लिए ready हैं। Score कम है? '0. Revise: एक नए तरह के number की ज़रूरत क्यों है' पर वापस जाइए और उसका example हाथ से दोबारा कीजिए — यही सबसे तेज़ रास्ता है, हार नहीं।"),
        assessment:["MTH-C01","MTH-C03","MTH-C05","MTH-C06","MTH-C09","MTH-C12","MTH-C14","MTH-C17",
          "MTH-C20","MTH-C23","MTH-C26","MTH-C29","MTH-C32","MTH-C36","MTH-C39","MTH-C41",
          "MTH-C44","MTH-C47","MTH-C50","MTH-C53","MTH-C56","MTH-C58","MTH-C62","MTH-C65"],
        topics:complex},
      {no:5,name:b("Linear Inequalities","Linear Inequalities"),
        summary:b(
          "**Linear Inequalities: what this chapter covers**\n\nAn inequality compares two sides without saying they are equal — using <, >, ≤ or ≥ — and has a whole range of solutions instead of one exact answer. Adding or subtracting the same number keeps the direction unchanged; multiplying or dividing by a negative number flips it. Solutions are drawn on a number line with a filled circle (included) or open circle (not included) plus a ray. Double inequalities squeeze a variable between two boundaries at once; a system keeps only the overlap of two separate inequalities.",
          "**Linear Inequalities: इस chapter में क्या सीखेंगे**\n\nInequality दो तरफ़ को बराबर बताए बिना compare करती है — <, >, ≤ या ≥ इस्तेमाल करके — और इसका जवाब एक exact value नहीं, पूरा range होता है। एक ही number दोनों तरफ़ जोड़ने या घटाने से direction नहीं बदलती; negative number से गुणा या भाग करने पर वह पलट जाती है। Solutions को number line पर भरे circle (शामिल) या खुले circle (शामिल नहीं) और एक ray से दिखाते हैं। Double inequalities एक variable को दो boundaries के बीच एक साथ दबाती हैं; system में सिर्फ़ दो inequalities का overlap रखते हैं।"),
        checkpoint:b(
          "Getting most Warm-up and Standard questions right, across every topic in this chapter, means you are ready to move on. Scoring low? Go back to '0. Revise: Equations and the Balance Scale' and redo its example by hand — that is the fastest way forward, not a setback.",
          "इस chapter के हर topic में ज़्यादातर Warm-up और Standard questions सही होना, मतलब आप आगे बढ़ने के लिए ready हैं। Score कम है? '0. Revise: Equations और Balance Scale' पर वापस जाइए और उसका example हाथ से दोबारा कीजिए — यही सबसे तेज़ रास्ता है, हार नहीं।"),
        assessment:["MTH-I01","MTH-I03","MTH-I06","MTH-I09","MTH-I12","MTH-I15","MTH-I18","MTH-I21",
          "MTH-I24","MTH-I27","MTH-I30","MTH-I33","MTH-I36","MTH-I39","MTH-I42","MTH-I45",
          "MTH-I48","MTH-I51","MTH-I54","MTH-I57","MTH-I60","MTH-I63","MTH-I66","MTH-I69"],
        topics:inequalities},
      {no:6,name:b("Permutations and Combinations","Permutations और Combinations"),
        summary:b(
          "**Permutations and Combinations: what this chapter covers**\n\nThe fundamental principle of counting says independent choices multiply. n! (n factorial) is the repeated multiplication n×(n−1)×...×1, with 0!=1 by convention. A permutation (ⁿPᵣ) arranges r out of n objects where order matters; a combination (ⁿCᵣ) selects r out of n where it doesn't. Repetition allowed vs not changes the formula completely. When some objects repeat, arrangements are divided by each repeat's factorial. ⁿPᵣ = ⁿCᵣ × r! links the two directly.",
          "**Permutations और Combinations: इस chapter में क्या सीखेंगे**\n\nFundamental principle of counting कहता है कि independent choices गुणा होती हैं। n! (n factorial), n×(n−1)×...×1 का दोहराया गुणा है, और परंपरा से 0!=1 है। Permutation (ⁿPᵣ), n में से r objects arrange करता है जहाँ order मायने रखता है; combination (ⁿCᵣ), n में से r चुनता है जहाँ order मायने नहीं रखता। Repetition allowed या नहीं, formula पूरी तरह बदल देता है। जब कुछ objects दोहराते हैं, arrangements को हर दोहराव के factorial से divide करते हैं। ⁿPᵣ = ⁿCᵣ × r! दोनों को सीधे जोड़ता है।"),
        checkpoint:b(
          "Getting most Warm-up and Standard questions right, across every topic in this chapter, means you are ready to move on. Scoring low? Go back to '0. Revise: Counting Choices You Already Make' and redo its example by hand — that is the fastest way forward, not a setback.",
          "इस chapter के हर topic में ज़्यादातर Warm-up और Standard questions सही होना, मतलब आप आगे बढ़ने के लिए ready हैं। Score कम है? '0. Revise: Counting Choices जो आप पहले से करते हैं' पर वापस जाइए और उसका example हाथ से दोबारा कीजिए — यही सबसे तेज़ रास्ता है, हार नहीं।"),
        assessment:["MTH-P01","MTH-P03","MTH-P05","MTH-P06","MTH-P09","MTH-P12","MTH-P14","MTH-P17",
          "MTH-P20","MTH-P22","MTH-P25","MTH-P28","MTH-P31","MTH-P34","MTH-P37","MTH-P40",
          "MTH-P43","MTH-P46","MTH-P49","MTH-P52","MTH-P55","MTH-P58","MTH-P62","MTH-P65"],
        topics:pnc},
      {no:7,name:b("Binomial Theorem","Binomial Theorem"),
        summary:b(
          "**Binomial Theorem: what this chapter covers**\n\n(a+b)² and (a+b)³ hide a coefficient pattern — Pascal's triangle, where every number is the sum of the two above it. The binomial theorem writes (a+b)ⁿ for any n using exactly those numbers, which are the nCr values from the last chapter. Every expansion has n+1 terms, with the powers of a and b always adding to n. Special substitutions handle (x−y)ⁿ (alternating signs), (1+x)ⁿ, and (1−x)ⁿ. The theorem also turns hard arithmetic, like (99)³, into an easy sum by splitting numbers like 99=100−1.",
          "**Binomial Theorem: इस chapter में क्या सीखेंगे**\n\n(a+b)² और (a+b)³ में एक coefficient pattern छुपा है — Pascal's triangle, जहाँ हर number अपने ऊपर वाले दो का योग है। Binomial theorem, किसी भी n के लिए (a+b)ⁿ को ठीक उन्हीं numbers से लिखता है, जो पिछले chapter के nCr values हैं। हर expansion में n+1 terms होती हैं, और a, b की powers हमेशा n पर जुड़ती हैं। Special substitutions से (x−y)ⁿ (बारी-बारी signs), (1+x)ⁿ, और (1−x)ⁿ हल होते हैं। यह theorem कठिन arithmetic को भी आसान बना देता है, जैसे (99)³ को 99=100−1 में तोड़कर।"),
        checkpoint:b(
          "Getting most Warm-up and Standard questions right, across every topic in this chapter, means you are ready to move on. Scoring low? Go back to '0. Revise: Multiplying Out (a+b)² and (a+b)³ by Hand' and redo its example by hand — that is the fastest way forward, not a setback.",
          "इस chapter के हर topic में ज़्यादातर Warm-up और Standard questions सही होना, मतलब आप आगे बढ़ने के लिए ready हैं। Score कम है? '0. Revise: (a+b)² और (a+b)³ को हाथ से गुणा करना' पर वापस जाइए और उसका example हाथ से दोबारा कीजिए — यही सबसे तेज़ रास्ता है, हार नहीं।"),
        assessment:["MTH-B01","MTH-B03","MTH-B05","MTH-B07","MTH-B09","MTH-B11","MTH-B13","MTH-B15",
          "MTH-B17","MTH-B19","MTH-B21","MTH-B23","MTH-B25","MTH-B27","MTH-B29","MTH-B31",
          "MTH-B33","MTH-B35","MTH-B37","MTH-B39","MTH-B41","MTH-B43","MTH-B45","MTH-B47"],
        topics:binomial},
      {no:8,name:b("Sequences and Series","Sequences और Series"),
        summary:b(
          "**Sequences and Series: what this chapter covers**\n\nA sequence is an ordered list of numbers, each called a term; a series is what you get by adding them, written compactly with sigma notation. An A.P. adds a fixed amount each step (recap from Class 10); a G.P. multiplies by a fixed ratio instead — the same shape of formula, addition swapped for multiplication. Both have a formula for the nth term and for the sum of the first n terms. The geometric mean √(ab) always sits at or below the arithmetic mean (a+b)/2. Real growth — population, money, spreading rumours — usually behaves like a G.P., not an A.P.",
          "**Sequences और Series: इस chapter में क्या सीखेंगे**\n\nSequence एक क्रम में रखी numbers की list है, हर एक को term कहते हैं; series उन्हें जोड़ने पर मिलती है, sigma notation से छोटे में लिखी जाती है। A.P. में हर step पर एक fixed मात्रा जुड़ती है (Class 10 से दोहराना); G.P. में इसकी जगह एक fixed ratio से गुणा होता है — वही formula का आकार, बस जोड़ की जगह गुणा। दोनों के nth term और पहले n terms के sum के फ़ॉर्मूले हैं। Geometric mean √(ab), हमेशा arithmetic mean (a+b)/2 के बराबर या उससे कम होता है। असली growth — population, पैसा, फैलती अफ़वाहें — आम तौर पर G.P. जैसी होती है, A.P. जैसी नहीं।"),
        checkpoint:b(
          "Getting most Warm-up and Standard questions right, across every topic in this chapter, means you are ready to move on. Scoring low? Go back to '0. Revise: Arithmetic Progressions You Already Know' and redo its example by hand — that is the fastest way forward, not a setback.",
          "इस chapter के हर topic में ज़्यादातर Warm-up और Standard questions सही होना, मतलब आप आगे बढ़ने के लिए ready हैं। Score कम है? '0. Revise: Arithmetic Progressions जो आप पहले से जानते हैं' पर वापस जाइए और उसका example हाथ से दोबारा कीजिए — यही सबसे तेज़ रास्ता है, हार नहीं।"),
        assessment:["MTH-Q01","MTH-Q03","MTH-Q05","MTH-Q06","MTH-Q09","MTH-Q12","MTH-Q14","MTH-Q17",
          "MTH-Q20","MTH-Q22","MTH-Q25","MTH-Q28","MTH-Q31","MTH-Q34","MTH-Q37","MTH-Q40",
          "MTH-Q43","MTH-Q46","MTH-Q49","MTH-Q52","MTH-Q55","MTH-Q58","MTH-Q62","MTH-Q67"],
        topics:sequences},
      {no:9,name:b("Straight Lines","Straight Lines"),
        summary:b(
          "**Straight Lines: what this chapter covers**\n\nDistance and midpoint recap Class 10. A line's slope m=(y2-y1)/(x2-x1) measures steepness — equal slopes mean parallel lines, slopes multiplying to −1 mean perpendicular lines, and the angle between any two lines follows from tan θ. The same line can be written five ways — point-slope, two-point, slope-intercept, intercept, and the general form Ax+By+C=0 — pick whichever form matches what you're given. The distance from a point to a line, and between two parallel lines, both reduce to one formula involving A, B and C.",
          "**Straight Lines: इस chapter में क्या सीखेंगे**\n\nDistance और midpoint, Class 10 का दोहराव हैं। Line का slope m=(y2-y1)/(x2-x1) ढलान मापता है — बराबर slopes का मतलब parallel lines, −1 पर गुणा होने वाले slopes का मतलब perpendicular lines, और किसी भी दो lines के बीच का angle tan θ से निकलता है। एक ही line को पाँच तरीकों से लिख सकते हैं — point-slope, two-point, slope-intercept, intercept, और general form Ax+By+C=0 — जो भी दिया हो उससे मेल खाता form चुनिए। Point से line की दूरी, और दो parallel lines के बीच की दूरी, दोनों एक ही formula में सिमट जाते हैं, जिसमें A, B और C होते हैं।"),
        checkpoint:b(
          "Getting most Warm-up and Standard questions right, across every topic in this chapter, means you are ready to move on. Scoring low? Go back to '0. Revise: The Coordinate Plane, Distance and Midpoint' and redo its example by hand — that is the fastest way forward, not a setback.",
          "इस chapter के हर topic में ज़्यादातर Warm-up और Standard questions सही होना, मतलब आप आगे बढ़ने के लिए ready हैं। Score कम है? '0. Revise: Coordinate Plane, Distance और Midpoint' पर वापस जाइए और उसका example हाथ से दोबारा कीजिए — यही सबसे तेज़ रास्ता है, हार नहीं।"),
        assessment:["MTH-L01","MTH-L03","MTH-L05","MTH-L06","MTH-L09","MTH-L12","MTH-L14","MTH-L17",
          "MTH-L20","MTH-L22","MTH-L25","MTH-L28","MTH-L30","MTH-L33","MTH-L36","MTH-L39",
          "MTH-L42","MTH-L45","MTH-L48","MTH-L51","MTH-L54","MTH-L58","MTH-L61","MTH-L64"],
        topics:lines},
      {no:10,name:b("Conic Sections","Conic Sections"),
        summary:b(
          "**Conic Sections: what this chapter covers**\n\nSlicing a cone at different angles produces four curves: circle, ellipse, parabola, hyperbola. A circle is every point a fixed radius from a centre — (x−h)²+(y−k)²=r². A parabola is every point equally far from a focus and a directrix — y²=4ax. An ellipse is every point where distances to two foci sum to a constant — x²/a²+y²/b²=1, with eccentricity 0<e<1. A hyperbola swaps that sum for a difference — x²/a²−y²/b²=1, with eccentricity e>1. Each curve has its own latus-rectum formula measuring how wide it opens at the focus.",
          "**Conic Sections: इस chapter में क्या सीखेंगे**\n\nCone को अलग-अलग angles पर काटने से चार curves बनते हैं: circle, ellipse, parabola, hyperbola। Circle वे सभी points हैं जो centre से एक तय radius पर हों — (x−h)²+(y−k)²=r²। Parabola वे सभी points हैं जो एक focus और एक directrix से बराबर दूर हों — y²=4ax। Ellipse वे सभी points हैं जहाँ दो foci से दूरियों का योग स्थिर हो — x²/a²+y²/b²=1, eccentricity 0<e<1 के साथ। Hyperbola उस योग को अंतर से बदल देता है — x²/a²−y²/b²=1, eccentricity e>1 के साथ। हर curve का अपना latus-rectum formula है जो बताता है कि वह focus पर कितना खुला है।"),
        checkpoint:b(
          "Getting most Warm-up and Standard questions right, across every topic in this chapter, means you are ready to move on. Scoring low? Go back to '0. Revise: Circles You Already Know' and redo its example by hand — that is the fastest way forward, not a setback.",
          "इस chapter के हर topic में ज़्यादातर Warm-up और Standard questions सही होना, मतलब आप आगे बढ़ने के लिए ready हैं। Score कम है? '0. Revise: Circles जो आप पहले से जानते हैं' पर वापस जाइए और उसका example हाथ से दोबारा कीजिए — यही सबसे तेज़ रास्ता है, हार नहीं।"),
        assessment:["MTH-K01","MTH-K03","MTH-K05","MTH-K06","MTH-K09","MTH-K12","MTH-K14","MTH-K17",
          "MTH-K20","MTH-K22","MTH-K25","MTH-K28","MTH-K31","MTH-K34","MTH-K37","MTH-K40",
          "MTH-K43","MTH-K46","MTH-K49","MTH-K52","MTH-K55","MTH-K58","MTH-K62","MTH-K65"],
        topics:conics},
      {no:11,name:b("Introduction to Three Dimensional Geometry","3D Geometry का परिचय"),
        summary:b(
          "**Introduction to 3D Geometry: what this chapter covers**\n\nA third perpendicular axis, z, extends 2D coordinates (x,y) into 3D coordinates (x,y,z). Three coordinate planes divide space into 8 octants, identified by the sign pattern of the coordinates. Plotting a point means walking along x, then y, then z from the origin. The distance formula gains one more squared term for z: PQ=√((x2-x1)²+(y2-y1)²+(z2-z1)²). That one formula tests collinearity (do the shorter distances add to the longest?) and right angles (does the Pythagoras relationship hold among the squared sides?) without drawing anything.",
          "**3D Geometry का परिचय: इस chapter में क्या सीखेंगे**\n\nएक तीसरा perpendicular axis, z, 2D coordinates (x,y) को 3D coordinates (x,y,z) में फैलाता है। तीन coordinate planes space को 8 octants में बाँटते हैं, जो coordinates के sign pattern से पहचाने जाते हैं। एक point plot करने का मतलब है origin से x, फिर y, फिर z के साथ चलना। Distance formula में z के लिए एक और squared term जुड़ जाता है: PQ=√((x2-x1)²+(y2-y1)²+(z2-z1)²)। यही एक formula collinearity जाँचता है (क्या छोटी दूरियाँ मिलकर सबसे लम्बी बनती हैं?) और right angles जाँचता है (क्या squared sides के बीच Pythagoras वाला संबंध सही बैठता है?), कुछ बनाए बिना।"),
        checkpoint:b(
          "Getting most Warm-up and Standard questions right, across every topic in this chapter, means you are ready to move on. Scoring low? Go back to '0. Revise: From 2D to 3D — What Changes' and redo its example by hand — that is the fastest way forward, not a setback.",
          "इस chapter के हर topic में ज़्यादातर Warm-up और Standard questions सही होना, मतलब आप आगे बढ़ने के लिए ready हैं। Score कम है? '0. Revise: 2D से 3D — क्या बदलता है' पर वापस जाइए और उसका example हाथ से दोबारा कीजिए — यही सबसे तेज़ रास्ता है, हार नहीं।"),
        assessment:["MTH-D01","MTH-D03","MTH-D05","MTH-D07","MTH-D09","MTH-D11","MTH-D13","MTH-D15",
          "MTH-D17","MTH-D19","MTH-D21","MTH-D23","MTH-D25","MTH-D27","MTH-D29","MTH-D31",
          "MTH-D33","MTH-D35","MTH-D37","MTH-D39","MTH-D41","MTH-D43","MTH-D45","MTH-D47"],
        topics:geo3d},
      {no:12,name:b("Limits and Derivatives","Limits और Derivatives"),
        summary:b(
          "**Limits and Derivatives: what this chapter covers**\n\nAverage speed and slope are the same rate calculation you already know. A limit describes what a function approaches near a point, even if it's undefined right at that point — found via direct substitution for polynomials, or factor-and-cancel when substitution gives 0/0. A limit exists only when the left-hand and right-hand limits agree. Limits combine by adding, subtracting, multiplying and dividing piece by piece, and one special limit, sin x/x → 1, unlocks trigonometric limits. The derivative is the limiting slope of a secant as the second point slides onto the first — the instantaneous rate of change — with standard shortcuts like d/dx(xⁿ)=nxⁿ⁻¹ replacing the slower first-principles definition.",
          "**Limits और Derivatives: इस chapter में क्या सीखेंगे**\n\nAverage speed और slope, वही rate calculation है जो आप पहले से जानते हैं। Limit बताता है कि किसी point के पास function किस value के पास पहुँचता है, भले ही वह ठीक उस point पर undefined हो — polynomials के लिए सीधे substitution से, या substitution से 0/0 मिलने पर factor-and-cancel से। Limit तभी होता है जब left-hand और right-hand limits मिलते हों। Limits जोड़, घटाव, गुणा और भाग से टुकड़ा-टुकड़ा जुड़ते हैं, और एक special limit, sin x/x → 1, trigonometric limits खोल देता है। Derivative, secant का limiting slope है जब दूसरा point पहले पर सरक जाए — तुरंत का rate of change — d/dx(xⁿ)=nxⁿ⁻¹ जैसे standard shortcuts, धीमी first-principles परिभाषा की जगह लेते हैं।"),
        checkpoint:b(
          "Getting most Warm-up and Standard questions right, across every topic in this chapter, means you are ready to move on. Scoring low? Go back to '0. Revise: Rate of Change You Already Know' and redo its example by hand — that is the fastest way forward, not a setback.",
          "इस chapter के हर topic में ज़्यादातर Warm-up और Standard questions सही होना, मतलब आप आगे बढ़ने के लिए ready हैं। Score कम है? '0. Revise: Rate of Change जो आप पहले से जानते हैं' पर वापस जाइए और उसका example हाथ से दोबारा कीजिए — यही सबसे तेज़ रास्ता है, हार नहीं।"),
        assessment:["MTH-M01","MTH-M03","MTH-M05","MTH-M06","MTH-M09","MTH-M12","MTH-M14","MTH-M17",
          "MTH-M20","MTH-M22","MTH-M25","MTH-M28","MTH-M30","MTH-M33","MTH-M36","MTH-M39",
          "MTH-M42","MTH-M45","MTH-M48","MTH-M51","MTH-M54","MTH-M58","MTH-M62","MTH-M66"],
        topics:calculus}
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

  /* ---- Ch4 Topic 0: Revise (5) ---- */
  add("MTH-C01",4,"MTH11-4-0",1,"What is the value of x² for any real number x?","किसी भी real number x के लिए x² का value क्या है?",
    ["always negative","always 0","always ≥ 0","can be any real number"],["हमेशा negative","हमेशा 0","हमेशा ≥ 0","कोई भी real number हो सकता है"],"C","A real number squared can never be negative.","Real number का square कभी negative नहीं होता।");
  add("MTH-C02",4,"MTH11-4-0",1,"Does x² + 1 = 0 have a real solution?","क्या x² + 1 = 0 का कोई real solution है?",
    ["Yes, x=1","Yes, x=−1","No","Yes, x=0"],["हाँ, x=1","हाँ, x=−1","नहीं","हाँ, x=0"],"C","x² would have to be −1, impossible for a real x.","x² को −1 होना पड़ेगा, जो real x के लिए असंभव है।");
  add("MTH-C03",4,"MTH11-4-0",1,"The imaginary unit i is defined by:","Imaginary unit i की परिभाषा है:",
    ["i=1","i²=1","i²=−1","i=−1"],["i=1","i²=1","i²=−1","i=−1"],"C","This one rule is the entire definition.","यही एक rule पूरी परिभाषा है।");
  add("MTH-C04",4,"MTH11-4-0",2,"i is most like which earlier extension of numbers?","i सबसे ज़्यादा किस पुराने number-extension जैसा है?",
    ["Extending numbers to solve an equation with no solution before, like negative numbers or fractions","A trick with no real use","The same as zero","An error in mathematics"],["ऐसे numbers बनाना जो पहले हल न हो सकने वाले equation को हल करें, negative numbers या fractions जैसे","बिना किसी असली इस्तेमाल का trick","शून्य जैसा ही","Mathematics में एक ग़लती"],"A","Each extension filled a genuine gap in what could be solved.","हर extension ने हल न हो सकने की एक असली कमी पूरी की।");
  add("MTH-C05",4,"MTH11-4-0",2,"If i² = −1, what is i × i × i (that is, i³)?","अगर i² = −1, तो i × i × i (यानी i³) क्या है?",
    ["1","−1","i","−i"],["1","−1","i","−i"],"D","i³ = i² × i = (−1) × i = −i.","i³ = i² × i = (−1) × i = −i।");

  /* ---- Ch4 Topic 1: What is a Complex Number? (8) ---- */
  add("MTH-C06",4,"MTH11-4-1",1,"In z=a+bi, a is called the:","z=a+bi में, a को क्या कहते हैं?",
    ["imaginary part","real part","modulus","conjugate"],["imaginary part","real part","modulus","conjugate"],"B","a is the real part.","a real part है।");
  add("MTH-C07",4,"MTH11-4-1",1,"In z=a+bi, b is called the:","z=a+bi में, b को क्या कहते हैं?",
    ["imaginary part","real part","modulus","conjugate"],["imaginary part","real part","modulus","conjugate"],"A","b is the imaginary part.","b imaginary part है।");
  add("MTH-C08",4,"MTH11-4-1",1,"For z=7+2i, the real part is:","z=7+2i के लिए, real part है:",
    ["7","2","2i","9"],["7","2","2i","9"],"A","The plain number without i is the real part.","बिना i वाला साधारण number ही real part है।");
  add("MTH-C09",4,"MTH11-4-1",2,"For z=5−3i, the imaginary part is:","z=5−3i के लिए, imaginary part है:",
    ["5","−3","3","−3i"],["5","−3","3","−3i"],"B","The coefficient of i, keeping its sign, is −3.","i का coefficient, sign के साथ, −3 है।");
  add("MTH-C10",4,"MTH11-4-1",2,"If b=0 in z=a+bi, then z is:","अगर z=a+bi में b=0, तो z है:",
    ["purely imaginary","a real number","undefined","always 0"],["purely imaginary","एक real number","undefined","हमेशा 0"],"B","With no imaginary part, z is just a real number.","बिना imaginary part के, z बस एक real number है।");
  add("MTH-C11",4,"MTH11-4-1",2,"If a=0 and b≠0 in z=a+bi, z is called:","अगर z=a+bi में a=0 और b≠0, तो z को क्या कहते हैं?",
    ["real","purely imaginary","undefined","a conjugate"],["real","purely imaginary","undefined","एक conjugate"],"B","No real part at all — purely imaginary.","कोई real part नहीं — purely imaginary।");
  add("MTH-C12",4,"MTH11-4-1",3,"Which of these is purely imaginary?","इनमें से कौन-सा purely imaginary है?",
    ["3+0i","0+5i","4+2i","0+0i"],["3+0i","0+5i","4+2i","0+0i"],"B","Real part 0, nonzero imaginary part.","Real part 0, imaginary part nonzero।");
  add("MTH-C13",4,"MTH11-4-1",3,"z=−2+0i is best described as:","z=−2+0i को सबसे अच्छा क्या कहेंगे?",
    ["purely imaginary","a real number","undefined","has no real part"],["purely imaginary","एक real number","undefined","इसका कोई real part नहीं"],"B","Imaginary part is 0, so z is a real number.","Imaginary part 0 है, इसलिए z एक real number है।");

  /* ---- Ch4 Topic 2: Add, Subtract, Multiply (9) ---- */
  add("MTH-C14",4,"MTH11-4-2",1,"(2+3i)+(1+4i) equals:","(2+3i)+(1+4i) बराबर है:",
    ["3+7i","3+i","2+7i","3+12i"],["3+7i","3+i","2+7i","3+12i"],"A","Add real parts and imaginary parts separately.","Real parts और imaginary parts अलग-अलग जोड़िए।");
  add("MTH-C15",4,"MTH11-4-2",1,"(5+2i)−(3+i) equals:","(5+2i)−(3+i) बराबर है:",
    ["2+i","8+3i","2+3i","2−i"],["2+i","8+3i","2+3i","2−i"],"A","Subtract real parts and imaginary parts separately.","Real parts और imaginary parts अलग-अलग घटाइए।");
  add("MTH-C16",4,"MTH11-4-2",1,"i² equals:","i² बराबर है:",
    ["1","−1","i","−i"],["1","−1","i","−i"],"B","By definition.","परिभाषा से।");
  add("MTH-C17",4,"MTH11-4-2",2,"(4+i)+(2−3i) equals:","(4+i)+(2−3i) बराबर है:",
    ["6−2i","6+2i","2+4i","6−4i"],["6−2i","6+2i","2+4i","6−4i"],"A","(4+2)+(1−3)i = 6−2i.","(4+2)+(1−3)i = 6−2i।");
  add("MTH-C18",4,"MTH11-4-2",2,"(3−2i)−(1−5i) equals:","(3−2i)−(1−5i) बराबर है:",
    ["2+3i","2−3i","4−7i","2−7i"],["2+3i","2−3i","4−7i","2−7i"],"A","(3−1)+(−2−(−5))i = 2+3i.","(3−1)+(−2−(−5))i = 2+3i।");
  add("MTH-C19",4,"MTH11-4-2",2,"Multiply (1+i)(1−i).","(1+i)(1−i) गुणा कीजिए।",
    ["0","2","1−i²","1+i²"],["0","2","1−i²","1+i²"],"B","1−i² = 1−(−1) = 2.","1−i² = 1−(−1) = 2।");
  add("MTH-C20",4,"MTH11-4-2",3,"Multiply (2+3i)(1−i).","(2+3i)(1−i) गुणा कीजिए।",
    ["5+i","2−3i","5−i","−1+i"],["5+i","2−3i","5−i","−1+i"],"A","Expand and simplify using i²=−1.","i²=−1 से expand और simplify कीजिए।");
  add("MTH-C21",4,"MTH11-4-2",3,"Multiply (1+2i)(3+i).","(1+2i)(3+i) गुणा कीजिए।",
    ["1+7i","3+7i","1+i","3+i"],["1+7i","3+7i","1+i","3+i"],"A","3+i+6i+2i² = 3+7i−2 = 1+7i.","3+i+6i+2i² = 3+7i−2 = 1+7i।");
  add("MTH-C22",4,"MTH11-4-2",3,"(a+bi)+(a−bi) always equals:","(a+bi)+(a−bi) हमेशा बराबर है:",
    ["2a","2bi","0","2a+2bi"],["2a","2bi","0","2a+2bi"],"A","The imaginary parts cancel, leaving 2a.","Imaginary parts cancel हो जाते हैं, 2a बचता है।");

  /* ---- Ch4 Topic 3: Dividing (9) ---- */
  add("MTH-C23",4,"MTH11-4-3",2,"The conjugate of 3+4i is:","3+4i का conjugate है:",
    ["3−4i","−3+4i","−3−4i","4+3i"],["3−4i","−3+4i","−3−4i","4+3i"],"A","Flip the sign of the imaginary part only.","सिर्फ़ imaginary part का sign बदलिए।");
  add("MTH-C24",4,"MTH11-4-3",2,"The conjugate of −2−5i is:","−2−5i का conjugate है:",
    ["2+5i","−2+5i","2−5i","−2−5i"],["2+5i","−2+5i","2−5i","−2−5i"],"B","Only the imaginary part's sign flips.","सिर्फ़ imaginary part का sign बदलता है।");
  add("MTH-C25",4,"MTH11-4-3",2,"(3+4i)(3−4i) equals:","(3+4i)(3−4i) बराबर है:",
    ["−7","25","7","9−16i"],["−7","25","7","9−16i"],"B","9−16i² = 9+16 = 25.","9−16i² = 9+16 = 25।");
  add("MTH-C26",4,"MTH11-4-3",3,"Divide (3+2i)/(1−i).","(3+2i)/(1−i) को divide कीजिए।",
    ["1/2+5/2 i","1+5i","1/2−5/2 i","5+i"],["1/2+5/2 i","1+5i","1/2−5/2 i","5+i"],"A","Multiply top and bottom by the conjugate 1+i.","ऊपर-नीचे दोनों को conjugate 1+i से गुणा कीजिए।");
  add("MTH-C27",4,"MTH11-4-3",3,"Why do we multiply by the conjugate when dividing?","Divide करते समय conjugate से क्यों गुणा करते हैं?",
    ["To make the denominator a real number","To make the numerator zero","It is just a tradition, no reason","To change the sign of i in the answer"],["Denominator को real number बनाने के लिए","Numerator को zero बनाने के लिए","बस एक परंपरा है, कोई reason नहीं","Answer में i का sign बदलने के लिए"],"A","This clears i from the bottom of the fraction.","यह fraction के नीचे से i हटा देता है।");
  add("MTH-C28",4,"MTH11-4-3",3,"Divide (1+i)/(1−i).","(1+i)/(1−i) को divide कीजिए।",
    ["i","−i","1","1+i"],["i","−i","1","1+i"],"A","(1+2i+i²)/2 = 2i/2 = i.","(1+2i+i²)/2 = 2i/2 = i।");
  add("MTH-C29",4,"MTH11-4-3",4,"Divide 2/(1+i).","2/(1+i) को divide कीजिए।",
    ["1−i","1+i","2−2i","(1−i)/2"],["1−i","1+i","2−2i","(1−i)/2"],"A","2(1−i)/2 = 1−i.","2(1−i)/2 = 1−i।");
  add("MTH-C30",4,"MTH11-4-3",4,"The multiplicative inverse of z=a+bi (nonzero) is:","z=a+bi (nonzero) का multiplicative inverse है:",
    ["a+bi","a−bi","(a−bi)/(a²+b²)","(a+bi)/(a²+b²)"],["a+bi","a−bi","(a−bi)/(a²+b²)","(a+bi)/(a²+b²)"],"C","1/z = conjugate divided by |z|².","1/z = conjugate को |z|² से divide किया हुआ।");
  add("MTH-C31",4,"MTH11-4-3",4,"Find the multiplicative inverse of 2−3i.","2−3i का multiplicative inverse निकालिए।",
    ["(2+3i)/13","(2−3i)/13","(2+3i)/5","13/(2−3i)"],["(2+3i)/13","(2−3i)/13","(2+3i)/5","13/(2−3i)"],"A","a²+b²=4+9=13; inverse = (2+3i)/13.","a²+b²=4+9=13; inverse = (2+3i)/13।");

  /* ---- Ch4 Topic 4: Powers of i and Square Roots (9) ---- */
  add("MTH-C32",4,"MTH11-4-4",1,"i¹ equals:","i¹ बराबर है:",
    ["1","−1","i","−i"],["1","−1","i","−i"],"C","The first power is just i itself.","पहली power ख़ुद i ही है।");
  add("MTH-C33",4,"MTH11-4-4",1,"i² equals:","i² बराबर है:",
    ["1","−1","i","−i"],["1","−1","i","−i"],"B","By definition.","परिभाषा से।");
  add("MTH-C34",4,"MTH11-4-4",1,"i³ equals:","i³ बराबर है:",
    ["1","−1","i","−i"],["1","−1","i","−i"],"D","i³ = i² × i = −i.","i³ = i² × i = −i।");
  add("MTH-C35",4,"MTH11-4-4",2,"i⁴ equals:","i⁴ बराबर है:",
    ["1","−1","i","−i"],["1","−1","i","−i"],"A","i⁴ = i² × i² = (−1)(−1) = 1.","i⁴ = i² × i² = (−1)(−1) = 1।");
  add("MTH-C36",4,"MTH11-4-4",2,"The powers of i repeat with a cycle length of:","i की powers कितने के cycle में दोहराती हैं?",
    ["2","3","4","8"],["2","3","4","8"],"C","i⁴=1 brings you back to the start.","i⁴=1 वापस शुरुआत पर ले आता है।");
  add("MTH-C37",4,"MTH11-4-4",2,"√(−4) equals:","√(−4) बराबर है:",
    ["−4","4","2i","−2i"],["−4","4","2i","−2i"],"C","√(−4) = i√4 = 2i.","√(−4) = i√4 = 2i।");
  add("MTH-C38",4,"MTH11-4-4",3,"√(−9) equals:","√(−9) बराबर है:",
    ["3","−3","3i","9i"],["3","−3","3i","9i"],"C","√(−9) = i√9 = 3i.","√(−9) = i√9 = 3i।");
  add("MTH-C39",4,"MTH11-4-4",3,"Find i⁶ (hint: use the remainder when 6 is divided by 4).","i⁶ निकालिए (संकेत: 6 को 4 से भाग देने पर बचा remainder इस्तेमाल कीजिए)।",
    ["i","−1","−i","1"],["i","−1","−i","1"],"B","Remainder 2, so i⁶ = i² = −1.","Remainder 2 है, इसलिए i⁶ = i² = −1।");
  add("MTH-C40",4,"MTH11-4-4",4,"Find i^15.","i^15 निकालिए।",
    ["i","−1","−i","1"],["i","−1","−i","1"],"C","Remainder 3, so i^15 = i³ = −i.","Remainder 3 है, इसलिए i^15 = i³ = −i।");

  /* ---- Ch4 Topic 5: Modulus and Conjugate (9) ---- */
  add("MTH-C41",4,"MTH11-4-5",1,"The modulus of z=a+bi is:","z=a+bi का modulus है:",
    ["a+b","a²+b²","√(a²+b²)","a−b"],["a+b","a²+b²","√(a²+b²)","a−b"],"C","Pythagoras' theorem applied to the coordinates.","Coordinates पर लगाया गया Pythagoras theorem।");
  add("MTH-C42",4,"MTH11-4-5",1,"The conjugate of z=a+bi is:","z=a+bi का conjugate है:",
    ["a+bi","−a−bi","a−bi","−a+bi"],["a+bi","−a−bi","a−bi","−a+bi"],"C","Only the imaginary part's sign flips.","सिर्फ़ imaginary part का sign बदलता है।");
  add("MTH-C43",4,"MTH11-4-5",1,"Find |3+4i|.","|3+4i| निकालिए।",
    ["5","7","25","12"],["5","7","25","12"],"A","√(9+16) = √25 = 5.","√(9+16) = √25 = 5।");
  add("MTH-C44",4,"MTH11-4-5",2,"Find the conjugate of 4−3i.","4−3i का conjugate निकालिए।",
    ["4+3i","−4+3i","−4−3i","4−3i"],["4+3i","−4+3i","−4−3i","4−3i"],"A","Flip the sign of −3 to get +3.","−3 का sign बदलकर +3 पाइए।");
  add("MTH-C45",4,"MTH11-4-5",2,"Find |0+5i|.","|0+5i| निकालिए।",
    ["0","5","25","−5"],["0","5","25","−5"],"B","√(0+25) = 5.","√(0+25) = 5।");
  add("MTH-C46",4,"MTH11-4-5",2,"z × (conjugate of z) always gives:","z × (z का conjugate) हमेशा क्या देता है?",
    ["a real, non-negative number","an imaginary number","zero always","a negative number"],["एक real, non-negative number","एक imaginary number","हमेशा zero","एक negative number"],"A","z×z̄ = a²+b², a sum of squares.","z×z̄ = a²+b², squares का योग।");
  add("MTH-C47",4,"MTH11-4-5",3,"Find |z|² for z=1−i.","z=1−i के लिए |z|² निकालिए।",
    ["0","1","2","4"],["0","1","2","4"],"C","1²+(−1)² = 1+1 = 2.","1²+(−1)² = 1+1 = 2।");
  add("MTH-C48",4,"MTH11-4-5",3,"Find the conjugate of the purely imaginary number 0+7i.","Purely imaginary number 0+7i का conjugate निकालिए।",
    ["0+7i","0−7i","7+0i","−7+0i"],["0+7i","0−7i","7+0i","−7+0i"],"B","Flip the sign of 7 to get −7.","7 का sign बदलकर −7 पाइए।");
  add("MTH-C49",4,"MTH11-4-5",4,"If |z|=0, what must z be?","अगर |z|=0, तो z क्या होना चाहिए?",
    ["z=1","z=i","z=0","z can be anything"],["z=1","z=i","z=0","z कुछ भी हो सकता है"],"C","a²+b²=0 forces both a and b to be 0.","a²+b²=0 होने के लिए a और b दोनों 0 होने चाहिए।");

  /* ---- Ch4 Topic 6: The Argand Plane (8) ---- */
  add("MTH-C50",4,"MTH11-4-6",1,"On the Argand plane, the real part of z is plotted along the:","Argand plane पर, z का real part किस axis पर plot होता है?",
    ["vertical axis","horizontal axis","diagonal","origin"],["vertical axis","horizontal axis","diagonal","origin"],"B","Real part is the horizontal coordinate.","Real part horizontal coordinate है।");
  add("MTH-C51",4,"MTH11-4-6",1,"On the Argand plane, the imaginary part of z is plotted along the:","Argand plane पर, z का imaginary part किस axis पर plot होता है?",
    ["horizontal axis","vertical axis","diagonal","origin"],["horizontal axis","vertical axis","diagonal","origin"],"B","Imaginary part is the vertical coordinate.","Imaginary part vertical coordinate है।");
  add("MTH-C52",4,"MTH11-4-6",1,"z=3+4i is plotted as the point:","z=3+4i को किस point की तरह plot करते हैं?",
    ["(4,3)","(3,4)","(3,−4)","(−3,4)"],["(4,3)","(3,4)","(3,−4)","(−3,4)"],"B","Real part first, imaginary part second.","पहले real part, फिर imaginary part।");
  add("MTH-C53",4,"MTH11-4-6",2,"z=−2+3i is plotted as the point:","z=−2+3i को किस point की तरह plot करते हैं?",
    ["(2,3)","(−2,3)","(−2,−3)","(3,−2)"],["(2,3)","(−2,3)","(−2,−3)","(3,−2)"],"B","(real part, imaginary part) = (−2,3).","(real part, imaginary part) = (−2,3)।");
  add("MTH-C54",4,"MTH11-4-6",2,"The distance from the origin to the point representing z is:","Origin से z वाले point की दूरी क्या है?",
    ["the real part","the imaginary part","the modulus of z","the conjugate of z"],["real part","imaginary part","z का modulus","z का conjugate"],"C","That distance is exactly |z|.","वह दूरी ठीक |z| है।");
  add("MTH-C55",4,"MTH11-4-6",2,"A real number like z=5+0i is plotted:","z=5+0i जैसा real number कहाँ plot होता है?",
    ["on the horizontal axis","on the vertical axis","at the origin always","off both axes"],["horizontal axis पर","vertical axis पर","हमेशा origin पर","दोनों axes से बाहर"],"A","Imaginary part 0 keeps it on the horizontal axis.","Imaginary part 0 होने से यह horizontal axis पर रहता है।");
  add("MTH-C56",4,"MTH11-4-6",3,"A purely imaginary number like z=0+4i is plotted:","z=0+4i जैसा purely imaginary number कहाँ plot होता है?",
    ["on the horizontal axis","on the vertical axis","at the origin always","off both axes"],["horizontal axis पर","vertical axis पर","हमेशा origin पर","दोनों axes से बाहर"],"B","Real part 0 keeps it on the vertical axis.","Real part 0 होने से यह vertical axis पर रहता है।");
  add("MTH-C57",4,"MTH11-4-6",3,"Which point represents z=−1−1i?","z=−1−1i को कौन-सा point दिखाता है?",
    ["(1,1)","(−1,1)","(−1,−1)","(1,−1)"],["(1,1)","(−1,1)","(−1,−1)","(1,−1)"],"C","Both parts are −1.","दोनों parts −1 हैं।");

  /* ---- Ch4 Topic 7: Polar Representation (9) ---- */
  add("MTH-C58",4,"MTH11-4-7",2,"In polar form z=r(cos θ + i sin θ), r represents:","Polar form z=r(cos θ + i sin θ) में, r क्या दिखाता है?",
    ["the real part","the imaginary part","the modulus","the argument"],["real part","imaginary part","modulus","argument"],"C","r is |z|, the modulus.","r ही |z| है, modulus।");
  add("MTH-C59",4,"MTH11-4-7",2,"In polar form, θ is called the:","Polar form में, θ को क्या कहते हैं?",
    ["modulus","argument","conjugate","real part"],["modulus","argument","conjugate","real part"],"B","θ is called the argument.","θ को argument कहते हैं।");
  add("MTH-C60",4,"MTH11-4-7",2,"The real part a relates to r and θ by:","Real part a, r और θ से किस तरह जुड़ा है?",
    ["a=r sin θ","a=r cos θ","a=r tan θ","a=r"],["a=r sin θ","a=r cos θ","a=r tan θ","a=r"],"B","a = r cos θ.","a = r cos θ।");
  add("MTH-C61",4,"MTH11-4-7",3,"The imaginary part b relates to r and θ by:","Imaginary part b, r और θ से किस तरह जुड़ा है?",
    ["b=r cos θ","b=r sin θ","b=r tan θ","b=r"],["b=r cos θ","b=r sin θ","b=r tan θ","b=r"],"B","b = r sin θ.","b = r sin θ।");
  add("MTH-C62",4,"MTH11-4-7",3,"Find the modulus of z=1+i.","z=1+i का modulus निकालिए।",
    ["1","√2","2","0"],["1","√2","2","0"],"B","√(1+1) = √2.","√(1+1) = √2।");
  add("MTH-C63",4,"MTH11-4-7",3,"For z=1+i, since the real and imaginary parts are equal, the argument θ is:","z=1+i के लिए, real और imaginary parts बराबर होने से, argument θ है:",
    ["30°","45°","60°","90°"],["30°","45°","60°","90°"],"B","Equal parts means the standard 45° angle.","बराबर parts का मतलब है standard 45° angle।");
  add("MTH-C64",4,"MTH11-4-7",4,"Find the modulus of z=√3+i.","z=√3+i का modulus निकालिए।",
    ["2","4","√3","1"],["2","4","√3","1"],"A","√(3+1) = √4 = 2.","√(3+1) = √4 = 2।");
  add("MTH-C65",4,"MTH11-4-7",4,"For z=√3+i, using tan θ = b/a = 1/√3, θ is:","z=√3+i के लिए, tan θ = b/a = 1/√3 इस्तेमाल करने पर, θ है:",
    ["30°","45°","60°","90°"],["30°","45°","60°","90°"],"A","tan 30° = 1/√3, a standard value.","tan 30° = 1/√3, एक standard value।");
  add("MTH-C66",4,"MTH11-4-7",5,"Write z=2(cos 60° + i sin 60°) in the form a+bi.","z=2(cos 60° + i sin 60°) को a+bi के रूप में लिखिए।",
    ["1+√3 i","√3+i","2+i","1+i"],["1+√3 i","√3+i","2+i","1+i"],"A","a=2cos60°=1, b=2sin60°=√3.","a=2cos60°=1, b=2sin60°=√3।");

  /* ---- Ch5 Topic 0: Revise (5) ---- */
  add("MTH-I01",5,"MTH11-5-0",1,"Solve x + 4 = 10.","x + 4 = 10 हल कीजिए।",
    ["4","6","14","−6"],["4","6","14","−6"],"B","10 − 4 = 6.","10 − 4 = 6।");
  add("MTH-I02",5,"MTH11-5-0",1,"In 3x = 12, what operation isolates x?","3x = 12 में, x को अलग करने के लिए क्या operation करेंगे?",
    ["add 3","subtract 3","divide by 3","multiply by 3"],["3 जोड़ें","3 घटाएँ","3 से divide करें","3 से गुणा करें"],"C","Divide both sides by 3.","दोनों तरफ़ को 3 से divide कीजिए।");
  add("MTH-I03",5,"MTH11-5-0",1,"An equation has how many solutions, typically?","एक equation में आम तौर पर कितने solutions होते हैं?",
    ["none","exactly one","infinitely many","always two"],["कोई नहीं","ठीक एक","अनगिनत","हमेशा दो"],"B","A linear equation balances at one point.","एक linear equation एक ही point पर balance होता है।");
  add("MTH-I04",5,"MTH11-5-0",2,"Solve 2x − 5 = 9.","2x − 5 = 9 हल कीजिए।",
    ["2","7","14","4"],["2","7","14","4"],"B","2x = 14, so x = 7.","2x = 14, इसलिए x = 7।");
  add("MTH-I05",5,"MTH11-5-0",2,"What must you do to both sides of a balanced equation to keep it balanced?","Balanced equation को balanced रखने के लिए दोनों तरफ़ क्या करना होगा?",
    ["the same operation","different operations","nothing","only add, never subtract"],["एक जैसा operation","अलग-अलग operations","कुछ नहीं","सिर्फ़ जोड़ें, कभी न घटाएँ"],"A","Equal changes on both sides keep the balance.","दोनों तरफ़ बराबर बदलाव से balance रहता है।");

  /* ---- Ch5 Topic 1: What is an Inequality? (8) ---- */
  add("MTH-I06",5,"MTH11-5-1",1,"Which symbol means 'at least'?","'कम से कम' किस symbol से दिखाते हैं?",
    ["<",">","≤","≥"],["<",">","≤","≥"],"D","≥ means greater than or equal to.","≥ का मतलब है बड़ा या बराबर।");
  add("MTH-I07",5,"MTH11-5-1",1,"Which symbol means 'at most'?","'ज़्यादा से ज़्यादा' किस symbol से दिखाते हैं?",
    ["<",">","≤","≥"],["<",">","≤","≥"],"C","≤ means less than or equal to.","≤ का मतलब है छोटा या बराबर।");
  add("MTH-I08",5,"MTH11-5-1",1,"x < 5 means x is:","x < 5 का मतलब है x है:",
    ["equal to 5","greater than 5","less than 5","at most 5"],["5 के बराबर","5 से बड़ा","5 से छोटा","ज़्यादा से ज़्यादा 5"],"C","< means strictly smaller.","< का मतलब है सख़्ती से छोटा।");
  add("MTH-I09",5,"MTH11-5-1",2,"How many solutions does x > 3 have?","x > 3 के कितने solutions हैं?",
    ["0","1","infinitely many","exactly 3"],["0","1","अनगिनत","ठीक 3"],"C","Every number bigger than 3 works.","3 से बड़ा हर number काम करता है।");
  add("MTH-I10",5,"MTH11-5-1",2,"A rule saying 'age ≥ 18' allows:","'age ≥ 18' rule किसे allow करता है?",
    ["only age 18","age 18 and older","only ages under 18","no valid ages"],["सिर्फ़ age 18","age 18 और उससे ज़्यादा","सिर्फ़ 18 से कम ages","कोई valid age नहीं"],"B","≥ includes 18 and everything above.","≥ में 18 और उससे ऊपर सब शामिल है।");
  add("MTH-I11",5,"MTH11-5-1",2,"Which of these is an inequality, not an equation?","इनमें से कौन-सी inequality है, equation नहीं?",
    ["x=5","x+2=7","x<5","2x=10"],["x=5","x+2=7","x<5","2x=10"],"C","It uses < instead of =.","यह = की जगह < इस्तेमाल करता है।");
  add("MTH-I12",5,"MTH11-5-1",3,"Write 'a number n is at most 50' as an inequality.","'एक number n ज़्यादा से ज़्यादा 50 है' को inequality की तरह लिखिए।",
    ["n<50","n≤50","n>50","n≥50"],["n<50","n≤50","n>50","n≥50"],"B","'At most' means ≤.","'ज़्यादा से ज़्यादा' का मतलब है ≤।");
  add("MTH-I13",5,"MTH11-5-1",3,"Write 'the temperature t is greater than 30°C' as an inequality.","'temperature t, 30°C से ज़्यादा है' को inequality की तरह लिखिए।",
    ["t≥30","t≤30","t>30","t<30"],["t≥30","t≤30","t>30","t<30"],"C","'Greater than' means strictly >.","'से ज़्यादा' का मतलब है सख़्ती से >।");

  /* ---- Ch5 Topic 2: Addition and Subtraction (8) ---- */
  add("MTH-I14",5,"MTH11-5-2",1,"Solve x + 3 < 8.","x + 3 < 8 हल कीजिए।",
    ["x<5","x<11","x>5","x<3"],["x<5","x<11","x>5","x<3"],"A","8 − 3 = 5.","8 − 3 = 5।");
  add("MTH-I15",5,"MTH11-5-2",1,"Solve x − 2 > 6.","x − 2 > 6 हल कीजिए।",
    ["x>4","x>8","x<8","x>3"],["x>4","x>8","x<8","x>3"],"B","6 + 2 = 8.","6 + 2 = 8।");
  add("MTH-I16",5,"MTH11-5-2",1,"Adding the same number to both sides of an inequality:","Inequality के दोनों तरफ़ एक जैसा number जोड़ने पर:",
    ["flips the direction","keeps the direction the same","makes it an equation","has no rule"],["direction पलट जाती है","direction वही रहती है","यह equation बन जाता है","कोई rule नहीं"],"B","Rule 1: adding/subtracting never flips the direction.","Rule 1: जोड़ने/घटाने से direction कभी नहीं पलटती।");
  add("MTH-I17",5,"MTH11-5-2",2,"Solve x + 7 ≤ 12.","x + 7 ≤ 12 हल कीजिए।",
    ["x≤5","x≤19","x≥5","x≤7"],["x≤5","x≤19","x≥5","x≤7"],"A","12 − 7 = 5.","12 − 7 = 5।");
  add("MTH-I18",5,"MTH11-5-2",2,"Solve x − 4 ≥ 1.","x − 4 ≥ 1 हल कीजिए।",
    ["x≥5","x≥3","x≤5","x≥−3"],["x≥5","x≥3","x≤5","x≥−3"],"A","1 + 4 = 5.","1 + 4 = 5।");
  add("MTH-I19",5,"MTH11-5-2",2,"Solve 5x < 4x + 3 (subtract 4x from both sides).","5x < 4x + 3 हल कीजिए (दोनों तरफ़ से 4x घटाइए)।",
    ["x<3","x<7","x>3","x<−3"],["x<3","x<7","x>3","x<−3"],"A","5x − 4x < 3 gives x < 3.","5x − 4x < 3 से x < 3।");
  add("MTH-I20",5,"MTH11-5-2",3,"Solve 3x + 2 > 2x + 9.","3x + 2 > 2x + 9 हल कीजिए।",
    ["x>7","x>11","x<7","x>2"],["x>7","x>11","x<7","x>2"],"A","3x−2x > 9−2 gives x > 7.","3x−2x > 9−2 से x > 7।");
  add("MTH-I21",5,"MTH11-5-2",3,"Solve 7x − 1 ≤ 6x + 4.","7x − 1 ≤ 6x + 4 हल कीजिए।",
    ["x≤5","x≤3","x≥5","x≤−5"],["x≤5","x≤3","x≥5","x≤−5"],"A","7x−6x ≤ 4+1 gives x ≤ 5.","7x−6x ≤ 4+1 से x ≤ 5।");

  /* ---- Ch5 Topic 3: Multiplication and Division (8) ---- */
  add("MTH-I22",5,"MTH11-5-3",2,"Multiplying both sides of an inequality by a positive number:","Inequality के दोनों तरफ़ positive number से गुणा करने पर:",
    ["flips the direction","keeps the direction the same","makes it false","turns it into an equation"],["direction पलट जाती है","direction वही रहती है","यह false बन जाता है","यह equation बन जाता है"],"B","Positive multiplication/division never flips.","Positive से गुणा/भाग करने पर कभी नहीं पलटता।");
  add("MTH-I23",5,"MTH11-5-3",2,"Multiplying both sides of an inequality by a negative number:","Inequality के दोनों तरफ़ negative number से गुणा करने पर:",
    ["keeps the direction the same","flips the direction","has no effect","is not allowed"],["direction वही रहती है","direction पलट जाती है","कोई असर नहीं","allowed नहीं है"],"B","Rule 2: negative multiplication/division always flips.","Rule 2: negative से गुणा/भाग करने पर हमेशा पलटता है।");
  add("MTH-I24",5,"MTH11-5-3",2,"Solve 2x < 10.","2x < 10 हल कीजिए।",
    ["x<5","x<20","x>5","x<12"],["x<5","x<20","x>5","x<12"],"A","Divide by 2, positive, no flip.","2 से divide कीजिए, positive है, पलटता नहीं।");
  add("MTH-I25",5,"MTH11-5-3",2,"Solve −x > 4.","−x > 4 हल कीजिए।",
    ["x>−4","x<−4","x>4","x<4"],["x>−4","x<−4","x>4","x<4"],"B","Multiply by −1 and flip: x < −4.","−1 से गुणा करके पलटिए: x < −4।");
  add("MTH-I26",5,"MTH11-5-3",3,"Solve −2x ≤ 8.","−2x ≤ 8 हल कीजिए।",
    ["x≤−4","x≥−4","x≤4","x≥4"],["x≤−4","x≥−4","x≤4","x≥4"],"B","Divide by −2 and flip: x ≥ −4.","−2 से divide करके पलटिए: x ≥ −4।");
  add("MTH-I27",5,"MTH11-5-3",3,"Solve 3x > −12.","3x > −12 हल कीजिए।",
    ["x>−4","x<−4","x>4","x<4"],["x>−4","x<−4","x>4","x<4"],"A","Divide by 3, positive, no flip: x > −4.","3 से divide कीजिए, positive है, पलटता नहीं: x > −4।");
  add("MTH-I28",5,"MTH11-5-3",3,"Solve −5x < −20.","−5x < −20 हल कीजिए।",
    ["x<4","x>4","x<−4","x>−4"],["x<4","x>4","x<−4","x>−4"],"B","Divide by −5 and flip: x > 4.","−5 से divide करके पलटिए: x > 4।");
  add("MTH-I29",5,"MTH11-5-3",4,"Solve −4x + 3 > 11.","−4x + 3 > 11 हल कीजिए।",
    ["x<−2","x>−2","x<2","x>2"],["x<−2","x>−2","x<2","x>2"],"A","−4x>8, divide by −4 and flip: x<−2.","−4x>8, −4 से divide करके पलटिए: x<−2।");

  /* ---- Ch5 Topic 4: Number Line (10) ---- */
  add("MTH-I30",5,"MTH11-5-4",1,"A filled circle on a number line means the boundary is:","Number line पर भरा circle मतलब boundary है:",
    ["included","not included","undefined","always zero"],["शामिल","शामिल नहीं","undefined","हमेशा zero"],"A","Filled = the boundary counts as a solution.","भरा = boundary भी एक solution है।");
  add("MTH-I31",5,"MTH11-5-4",1,"An open circle on a number line means the boundary is:","Number line पर खुला circle मतलब boundary है:",
    ["included","not included","undefined","always zero"],["शामिल","शामिल नहीं","undefined","हमेशा zero"],"B","Open = the boundary does not count.","खुला = boundary नहीं गिनी जाती।");
  add("MTH-I32",5,"MTH11-5-4",1,"Which symbol pairs with a filled circle?","भरे circle के साथ कौन-सा symbol जाता है?",
    ["<",">","≥","none"],["<",">","≥","कोई नहीं"],"C","≥ (and ≤) include the boundary.","≥ (और ≤) में boundary शामिल होता है।");
  add("MTH-I33",5,"MTH11-5-4",2,"Which symbol pairs with an open circle?","खुले circle के साथ कौन-सा symbol जाता है?",
    ["≤","≥","<","neither"],["≤","≥","<","कोई नहीं"],"C","< (and >) exclude the boundary.","< (और >) में boundary शामिल नहीं होता।");
  add("MTH-I34",5,"MTH11-5-4",2,"For x > 3, which circle and direction?","x > 3 के लिए, कौन-सा circle और दिशा?",
    ["open circle at 3, ray right","filled circle at 3, ray right","open circle at 3, ray left","filled circle at 3, ray left"],["3 पर खुला circle, दाईं ओर ray","3 पर भरा circle, दाईं ओर ray","3 पर खुला circle, बाईं ओर ray","3 पर भरा circle, बाईं ओर ray"],"A","> excludes 3, and bigger numbers are to the right.","> में 3 शामिल नहीं, और बड़े numbers दाईं ओर हैं।");
  add("MTH-I35",5,"MTH11-5-4",2,"For x ≤ −2, which circle and direction?","x ≤ −2 के लिए, कौन-सा circle और दिशा?",
    ["open circle at −2, ray right","filled circle at −2, ray left","open circle at −2, ray left","filled circle at −2, ray right"],["−2 पर खुला circle, दाईं ओर ray","−2 पर भरा circle, बाईं ओर ray","−2 पर खुला circle, बाईं ओर ray","−2 पर भरा circle, दाईं ओर ray"],"B","≤ includes −2, and smaller numbers are to the left.","≤ में −2 शामिल है, और छोटे numbers बाईं ओर हैं।");
  add("MTH-I36",5,"MTH11-5-4",3,"Is the boundary number itself ever a valid solution for x < a?","x < a के लिए, क्या boundary number कभी एक valid solution होता है?",
    ["Yes, always","No, never","Only if a=0","Only for positive a"],["हाँ, हमेशा","नहीं, कभी नहीं","सिर्फ़ अगर a=0","सिर्फ़ positive a के लिए"],"B","Strict < always excludes the boundary.","सख़्त < में boundary हमेशा बाहर रहता है।");
  add("MTH-I37",5,"MTH11-5-4",3,"On a number line for x ≥ 0, which numbers are shaded?","x ≥ 0 के number line पर कौन-से numbers shaded हैं?",
    ["only positive numbers","0 and all positive numbers","only 0","all numbers"],["सिर्फ़ positive numbers","0 और सभी positive numbers","सिर्फ़ 0","सभी numbers"],"B","≥ includes 0 itself, plus everything larger.","≥ में 0 ख़ुद, और उससे बड़ा सब शामिल है।");
  add("MTH-I38",5,"MTH11-5-4",3,"A ray on a number line represents:","Number line पर एक ray क्या दिखाता है?",
    ["one single solution","infinitely many solutions in one direction","no solutions","exactly two solutions"],["एक ही solution","एक दिशा में अनगिनत solutions","कोई solution नहीं","ठीक दो solutions"],"B","Every point along the ray is a solution.","Ray पर हर point एक solution है।");
  add("MTH-I39",5,"MTH11-5-4",4,"For −1 ≤ x < 3, how many circles are drawn, and what kind?","−1 ≤ x < 3 के लिए, कितने circles बनते हैं, और कौन-से?",
    ["one filled circle only","one open circle only","one filled and one open circle","two filled circles"],["सिर्फ़ एक भरा circle","सिर्फ़ एक खुला circle","एक भरा और एक खुला circle","दो भरे circles"],"C","−1 is included (filled); 3 is not (open).","−1 शामिल है (भरा); 3 शामिल नहीं (खुला)।");

  /* ---- Ch5 Topic 5: Word Problems (10) ---- */
  add("MTH-I40",5,"MTH11-5-5",1,"'At least 5 apples' as an inequality (a = apples):","'कम से कम 5 apples' को inequality की तरह लिखें (a = apples):",
    ["a<5","a≤5","a>5","a≥5"],["a<5","a≤5","a>5","a≥5"],"D","'At least' means ≥.","'कम से कम' का मतलब है ≥।");
  add("MTH-I41",5,"MTH11-5-5",1,"'No more than 10 tickets' as an inequality (t = tickets):","'10 से ज़्यादा नहीं tickets' को inequality की तरह लिखें (t = tickets):",
    ["t≤10","t≥10","t<10","t>10"],["t≤10","t≥10","t<10","t>10"],"A","'No more than' means ≤.","'ज़्यादा नहीं' का मतलब है ≤।");
  add("MTH-I42",5,"MTH11-5-5",2,"A rope costs ₹8 per metre. With ₹100, at most how many metres m satisfy 8m ≤ 100?","एक rope ₹8 प्रति metre है। ₹100 में, 8m ≤ 100 को कितने metres m पूरा करते हैं?",
    ["m≤12.5","m≤8","m≤800","m≤12"],["m≤12.5","m≤8","m≤800","m≤12"],"A","100 ÷ 8 = 12.5.","100 ÷ 8 = 12.5।");
  add("MTH-I43",5,"MTH11-5-5",2,"Two test scores are 70 and 65. For an average of at least 75 over 3 tests, the inequality for the third score x is:","दो test scores 70 और 65 हैं। 3 tests में कम से कम 75 average के लिए, तीसरे score x की inequality है:",
    ["(70+65+x)/3≥75","(70+65+x)/3≤75","70+65+x≥75","(70+65+x)/3=75"],["(70+65+x)/3≥75","(70+65+x)/3≤75","70+65+x≥75","(70+65+x)/3=75"],"A","Average is the sum divided by 3, at least 75.","Average है योग भाग 3, कम से कम 75।");
  add("MTH-I44",5,"MTH11-5-5",2,"Solving (70+65+x)/3≥75 gives:","(70+65+x)/3≥75 हल करने पर मिलता है:",
    ["x≥90","x≥135","x≥30","x≥45"],["x≥90","x≥135","x≥30","x≥45"],"A","135+x≥225, so x≥90.","135+x≥225, इसलिए x≥90।");
  add("MTH-I45",5,"MTH11-5-5",3,"A box holds at most 25 kg. Each book weighs 2 kg. At most how many books b fit (2b≤25)?","एक box में ज़्यादा से ज़्यादा 25 kg आता है। हर book 2 kg की है। ज़्यादा से ज़्यादा कितनी books b आएँगी (2b≤25)?",
    ["b≤12.5, so 12 books","b≤12.5, so 13 books","b≤50","b≤12.5 exactly"],["b≤12.5, इसलिए 12 books","b≤12.5, इसलिए 13 books","b≤50","ठीक b≤12.5"],"A","Books are whole, so round 12.5 down to 12.","Books पूरी होती हैं, इसलिए 12.5 को नीचे 12 round कीजिए।");
  add("MTH-I46",5,"MTH11-5-5",3,"A student needs more than 40 marks out of 50 for distinction. As an inequality (m=marks):","Distinction के लिए 50 में से 40 से ज़्यादा marks चाहिए। Inequality की तरह (m=marks):",
    ["m>40","m≥40","m<40","m≤40"],["m>40","m≥40","m<40","m≤40"],"A","'More than' means strictly >.","'से ज़्यादा' का मतलब है सख़्ती से >।");
  add("MTH-I47",5,"MTH11-5-5",3,"Ravi has ₹150 and wants pens costing ₹12 each. At most how many pens p can he buy (12p≤150)?","Ravi के पास ₹150 हैं और ₹12 वाले pens चाहिए। ज़्यादा से ज़्यादा कितने pens p ख़रीद सकता है (12p≤150)?",
    ["p≤12.5, so 12 pens","p≤12.5, so 13 pens","p≤18","p≤12 exactly"],["p≤12.5, इसलिए 12 pens","p≤12.5, इसलिए 13 pens","p≤18","ठीक p≤12"],"A","150 ÷ 12 = 12.5; round down since pens are whole.","150 ÷ 12 = 12.5; pens पूरे होते हैं इसलिए नीचे round कीजिए।");
  add("MTH-I48",5,"MTH11-5-5",4,"A car must cover more than 180 km in less than 3 hours. Which inequality describes the speed s (km/h)?","एक car को 3 घंटे से कम में 180 km से ज़्यादा तय करना है। Speed s (km/h) की कौन-सी inequality सही है?",
    ["s>60","s<60","s≥60","s≤60"],["s>60","s<60","s≥60","s≤60"],"A","Distance/time > 180/3 = 60.","दूरी/समय > 180/3 = 60।");
  add("MTH-I49",5,"MTH11-5-5",4,"Sunita needs an average of at least 90 over 5 tests. Her first four scores are 87, 92, 94, 95. Which inequality gives the minimum fifth score x?","Sunita को 5 tests में कम से कम 90 average चाहिए। पहले चार scores 87, 92, 94, 95 हैं। पाँचवें score x की inequality क्या है?",
    ["87+92+94+95+x≥450","(87+92+94+95+x)/5≥90","(87+92+94+95+x)/5≤90","87+92+94+95+x≤450"],["87+92+94+95+x≥450","(87+92+94+95+x)/5≥90","(87+92+94+95+x)/5≤90","87+92+94+95+x≤450"],"B","Average is the sum divided by 5, at least 90.","Average है योग भाग 5, कम से कम 90।");

  /* ---- Ch5 Topic 6: Double Inequalities (10) ---- */
  add("MTH-I50",5,"MTH11-5-6",2,"In a compound inequality like −3 ≤ 2x < 7, an operation must be applied to:","−3 ≤ 2x < 7 जैसी compound inequality में, operation किस पर लगाना होगा?",
    ["only the left part","only the right part","only the middle","all three parts together"],["सिर्फ़ बाएँ हिस्से पर","सिर्फ़ दाएँ हिस्से पर","सिर्फ़ बीच पर","तीनों हिस्सों पर एक साथ"],"D","Every part must get the same treatment.","हर हिस्से पर एक जैसा treatment होना चाहिए।");
  add("MTH-I51",5,"MTH11-5-6",2,"Solve −2 ≤ x + 1 ≤ 5 (subtract 1 from all parts).","−2 ≤ x + 1 ≤ 5 हल कीजिए (सभी हिस्सों से 1 घटाइए)।",
    ["−3≤x≤4","−1≤x≤6","−3≤x≤6","−1≤x≤4"],["−3≤x≤4","−1≤x≤6","−3≤x≤6","−1≤x≤4"],"A","Subtract 1 from −2, x+1, and 5.","−2, x+1, और 5 में से 1 घटाइए।");
  add("MTH-I52",5,"MTH11-5-6",2,"Solve 0 < x − 2 < 6 (add 2 to all parts).","0 < x − 2 < 6 हल कीजिए (सभी हिस्सों में 2 जोड़िए)।",
    ["2<x<8","−2<x<4","2<x<6","0<x<8"],["2<x<8","−2<x<4","2<x<6","0<x<8"],"A","Add 2 to 0, x−2, and 6.","0, x−2, और 6 में 2 जोड़िए।");
  add("MTH-I53",5,"MTH11-5-6",3,"Solve −6 ≤ 3x ≤ 9 (divide all parts by 3).","−6 ≤ 3x ≤ 9 हल कीजिए (सभी हिस्सों को 3 से divide कीजिए)।",
    ["−2≤x≤3","−18≤x≤27","−3≤x≤2","−2≤x≤9"],["−2≤x≤3","−18≤x≤27","−3≤x≤2","−2≤x≤9"],"A","Divide −6, 3x, and 9 by 3.","−6, 3x, और 9 को 3 से divide कीजिए।");
  add("MTH-I54",5,"MTH11-5-6",3,"Solve −8 ≤ 5x − 3 < 7. First step: add 3 to all parts. Result?","−8 ≤ 5x − 3 < 7 हल कीजिए। पहला step: सभी हिस्सों में 3 जोड़िए। Result?",
    ["−5≤5x<10","−11≤5x<4","−5≤5x<4","−11≤5x<10"],["−5≤5x<10","−11≤5x<4","−5≤5x<4","−11≤5x<10"],"A","−8+3=−5, and 7+3=10.","−8+3=−5, और 7+3=10।");
  add("MTH-I55",5,"MTH11-5-6",3,"Continuing −5 ≤ 5x < 10, divide all parts by 5. Result?","−5 ≤ 5x < 10 को जारी रखते हुए, सभी हिस्सों को 5 से divide कीजिए। Result?",
    ["−1≤x<2","−25≤x<50","−1≤x<50","−25≤x<2"],["−1≤x<2","−25≤x<50","−1≤x<50","−25≤x<2"],"A","Divide −5, 5x, and 10 by 5.","−5, 5x, और 10 को 5 से divide कीजिए।");
  add("MTH-I56",5,"MTH11-5-6",4,"Solve −4 < 2x − 6 < 10 (add 6, then divide by 2).","−4 < 2x − 6 < 10 हल कीजिए (6 जोड़िए, फिर 2 से divide कीजिए)।",
    ["1<x<8","−10<x<4","1<x<4","−10<x<8"],["1<x<8","−10<x<4","1<x<4","−10<x<8"],"A","Add 6: 2<2x<16. Divide by 2: 1<x<8.","6 जोड़िए: 2<2x<16। 2 से divide: 1<x<8।");
  add("MTH-I57",5,"MTH11-5-6",4,"Solve −9 ≤ −3x < 6. Careful: dividing by −3 flips both signs and reverses the order.","−9 ≤ −3x < 6 हल कीजिए। ध्यान दें: −3 से divide करने पर दोनों signs पलटते हैं और order भी उलट जाता है।",
    ["−2<x≤3","−2≤x<3","3<x≤−2","−3<x≤2"],["−2<x≤3","−2≤x<3","3<x≤−2","−3<x≤2"],"A","Divide by −3: 3≥x>−2, rewritten as −2<x≤3.","−3 से divide कीजिए: 3≥x>−2, फिर से लिखा −2<x≤3।");
  add("MTH-I58",5,"MTH11-5-6",5,"Solve 1 ≤ (x+2)/3 ≤ 4.","1 ≤ (x+2)/3 ≤ 4 हल कीजिए।",
    ["1≤x≤10","3≤x≤12","−1≤x≤10","1≤x≤12"],["1≤x≤10","3≤x≤12","−1≤x≤10","1≤x≤12"],"A","Multiply by 3: 3≤x+2≤12. Subtract 2: 1≤x≤10.","3 से गुणा: 3≤x+2≤12। 2 घटाइए: 1≤x≤10।");
  add("MTH-I59",5,"MTH11-5-6",5,"In a compound inequality, if you multiply all three parts by a negative number, you must:","Compound inequality में, अगर तीनों हिस्सों को negative number से गुणा करें, तो क्या करना होगा?",
    ["do nothing extra","flip both inequality signs","flip only one sign","add 1 to each part"],["कुछ अतिरिक्त नहीं","दोनों inequality signs पलटें","सिर्फ़ एक sign पलटें","हर हिस्से में 1 जोड़ें"],"B","Both signs flip together, keeping the chain consistent.","दोनों signs साथ पलटते हैं, chain सही बना रहता है।");

  /* ---- Ch5 Topic 7: Systems of Two Inequalities (10) ---- */
  add("MTH-I60",5,"MTH11-5-7",2,"A system of two inequalities is solved by finding:","दो inequalities के system को कैसे हल करते हैं?",
    ["the sum of both solutions","values satisfying only the first","values satisfying only the second","values satisfying both"],["दोनों solutions का योग","सिर्फ़ पहले को पूरा करने वाली values","सिर्फ़ दूसरे को पूरा करने वाली values","दोनों को पूरा करने वाली values"],"D","Only the overlap counts as the system's solution.","सिर्फ़ overlap ही system का solution है।");
  add("MTH-I61",5,"MTH11-5-7",2,"x > 1 and x < 5 together give:","x > 1 और x < 5 साथ में देते हैं:",
    ["1<x<5","x>5","x<1","no solution"],["1<x<5","x>5","x<1","कोई solution नहीं"],"A","Numbers bigger than 1 and smaller than 5.","1 से बड़े और 5 से छोटे numbers।");
  add("MTH-I62",5,"MTH11-5-7",2,"x ≥ 2 and x ≤ 2 together give:","x ≥ 2 और x ≤ 2 साथ में देते हैं:",
    ["no solution","x=2","x>2","x<2"],["कोई solution नहीं","x=2","x>2","x<2"],"B","Only 2 satisfies both at once.","सिर्फ़ 2 ही दोनों को पूरा करता है।");
  add("MTH-I63",5,"MTH11-5-7",3,"x > 4 and x < 2 together give:","x > 4 और x < 2 साथ में देते हैं:",
    ["2<x<4","no solution, since no number is both","x=3","x>4"],["2<x<4","कोई solution नहीं, क्योंकि कोई number दोनों नहीं हो सकता","x=3","x>4"],"B","No number can be both bigger than 4 and smaller than 2.","कोई number 4 से बड़ा और 2 से छोटा दोनों नहीं हो सकता।");
  add("MTH-I64",5,"MTH11-5-7",3,"Solve the system: x − 1 > 2 and x + 3 < 10.","System हल कीजिए: x − 1 > 2 और x + 3 < 10।",
    ["3<x<7","x>3","x<7","no solution"],["3<x<7","x>3","x<7","कोई solution नहीं"],"A","x>3 and x<7 overlap between 3 and 7.","x>3 और x<7, 3 और 7 के बीच overlap करते हैं।");
  add("MTH-I65",5,"MTH11-5-7",3,"Solve the system: 2x > 6 and 3x < 18.","System हल कीजिए: 2x > 6 और 3x < 18।",
    ["3<x<6","x>3","x<6","no solution"],["3<x<6","x>3","x<6","कोई solution नहीं"],"A","x>3 and x<6 overlap between 3 and 6.","x>3 और x<6, 3 और 6 के बीच overlap करते हैं।");
  add("MTH-I66",5,"MTH11-5-7",4,"Solve the system: x + 3 > 5 and 2x < 14.","System हल कीजिए: x + 3 > 5 और 2x < 14।",
    ["2<x<7","x>2","x<7","no solution"],["2<x<7","x>2","x<7","कोई solution नहीं"],"A","x>2 and x<7 overlap between 2 and 7.","x>2 और x<7, 2 और 7 के बीच overlap करते हैं।");
  add("MTH-I67",5,"MTH11-5-7",4,"Solve the system: 3x − 2 ≤ 10 and x + 1 ≥ 0.","System हल कीजिए: 3x − 2 ≤ 10 और x + 1 ≥ 0।",
    ["−1≤x≤4","x≤4","x≥−1","no solution"],["−1≤x≤4","x≤4","x≥−1","कोई solution नहीं"],"A","x≤4 and x≥−1 overlap between −1 and 4.","x≤4 और x≥−1, −1 और 4 के बीच overlap करते हैं।");
  add("MTH-I68",5,"MTH11-5-7",5,"Solve the system: −2x < 8 and 3x − 1 < 11.","System हल कीजिए: −2x < 8 और 3x − 1 < 11।",
    ["−4<x<4","x>−4","x<4","no solution"],["−4<x<4","x>−4","x<4","कोई solution नहीं"],"A","x>−4 (flip for negative divide) and x<4 overlap between −4 and 4.","x>−4 (negative divide पर पलटा) और x<4, −4 और 4 के बीच overlap करते हैं।");
  add("MTH-I69",5,"MTH11-5-7",5,"Two consecutive even numbers are both greater than 10, and their sum is less than 40. If the smaller is x, which system describes this? (next even number is x+2)","दो लगातार even numbers दोनों 10 से बड़े हैं, और उनका योग 40 से कम है। अगर छोटा x है, कौन-सा system इसे बताता है? (अगला even number x+2 है)",
    ["x>10 and 2x+2<40","x>10 and x+2<40","x≥10 and 2x+2≤40","x<10 and 2x+2<40"],["x>10 और 2x+2<40","x>10 और x+2<40","x≥10 और 2x+2≤40","x<10 और 2x+2<40"],"A","The sum x+(x+2)=2x+2 must be under 40, and x itself over 10.","योग x+(x+2)=2x+2, 40 से कम होना चाहिए, और ख़ुद x, 10 से ज़्यादा।");

  /* ---- Ch6 Topic 0: Revise (5) ---- */
  add("MTH-P01",6,"MTH11-6-0",1,"A menu has 2 soups and 3 salads. How many soup+salad combos?","एक menu में 2 soups और 3 salads हैं। कितने soup+salad combos हैं?",
    ["5","6","8","23"],["5","6","8","23"],"B","2 × 3 = 6.","2 × 3 = 6।");
  add("MTH-P02",6,"MTH11-6-0",1,"The fundamental principle of counting uses which operation to combine independent choices?","Fundamental principle of counting, independent choices को जोड़ने के लिए कौन-सा operation इस्तेमाल करता है?",
    ["addition","subtraction","multiplication","division"],["addition","subtraction","multiplication","division"],"C","Independent steps multiply together.","Independent steps साथ गुणा होते हैं।");
  add("MTH-P03",6,"MTH11-6-0",1,"3 shirts and 4 pants give how many outfits?","3 shirts और 4 pants कितने outfits देते हैं?",
    ["7","12","34","43"],["7","12","34","43"],"B","3 × 4 = 12.","3 × 4 = 12।");
  add("MTH-P04",6,"MTH11-6-0",2,"If step 1 has 5 ways and step 2 has 3 ways (independent), the total is:","अगर step 1 के 5 तरीके और step 2 के 3 तरीके हैं (independent), total क्या है?",
    ["8","15","2","53"],["8","15","2","53"],"B","5 × 3 = 15.","5 × 3 = 15।");
  add("MTH-P05",6,"MTH11-6-0",2,"A bike shop has 6 frame colours and 2 seat types. How many bike combinations?","एक bike shop में 6 frame colours और 2 seat types हैं। कितने bike combinations हैं?",
    ["8","12","62","36"],["8","12","62","36"],"B","6 × 2 = 12.","6 × 2 = 12।");

  /* ---- Ch6 Topic 1: Fundamental Principle of Counting (8) ---- */
  add("MTH-P06",6,"MTH11-6-1",1,"4 starters and 5 mains give how many combinations?","4 starters और 5 mains कितने combinations देते हैं?",
    ["9","20","45","54"],["9","20","45","54"],"B","4 × 5 = 20.","4 × 5 = 20।");
  add("MTH-P07",6,"MTH11-6-1",1,"A padlock has 3 dials, each with 10 digits. How many total combinations (repetition allowed)?","एक padlock में 3 dials हैं, हर एक में 10 digits। कुल कितने combinations (repetition allowed)?",
    ["30","100","1000","300"],["30","100","1000","300"],"C","10 × 10 × 10 = 1000.","10 × 10 × 10 = 1000।");
  add("MTH-P08",6,"MTH11-6-1",1,"2 independent choices with m and n ways give a total of:","m और n तरीकों वाले 2 independent choices का total क्या है?",
    ["m+n","m−n","m×n","m/n"],["m+n","m−n","m×n","m/n"],"C","Independent choices multiply.","Independent choices गुणा होती हैं।");
  add("MTH-P09",6,"MTH11-6-1",2,"A café has 3 sizes, 4 flavours, and 2 toppings (all independent). Total orders?","एक café में 3 sizes, 4 flavours, और 2 toppings हैं (सब independent)। Total orders?",
    ["9","24","20","12"],["9","24","20","12"],"B","3 × 4 × 2 = 24.","3 × 4 × 2 = 24।");
  add("MTH-P10",6,"MTH11-6-1",2,"A code has 2 letters (26 choices each) followed by 2 digits (10 choices each). Total codes?","एक code में 2 letters (हर एक के 26 choices) फिर 2 digits (हर एक के 10 choices)। Total codes?",
    ["260","67600","72","676"],["260","67600","72","676"],"B","26 × 26 × 10 × 10 = 67600.","26 × 26 × 10 × 10 = 67600।");
  add("MTH-P11",6,"MTH11-6-1",2,"5 shirts, 3 pants, 2 pairs of shoes. Total outfits?","5 shirts, 3 pants, 2 pairs shoes। Total outfits?",
    ["10","30","15","8"],["10","30","15","8"],"B","5 × 3 × 2 = 30.","5 × 3 × 2 = 30।");
  add("MTH-P12",6,"MTH11-6-1",3,"A restaurant has 3 starters, 4 mains, and 2 desserts. How many complete 3-course meals?","एक restaurant में 3 starters, 4 mains, और 2 desserts हैं। कितने पूरे 3-course meals बनते हैं?",
    ["9","24","20","12"],["9","24","20","12"],"B","3 × 4 × 2 = 24.","3 × 4 × 2 = 24।");
  add("MTH-P13",6,"MTH11-6-1",3,"How many 2-digit numbers can be formed using digits 1-9 if repetition is allowed?","1-9 digits से repetition allowed के साथ कितने 2-digit numbers बन सकते हैं?",
    ["18","81","72","45"],["18","81","72","45"],"B","9 × 9 = 81.","9 × 9 = 81।");

  /* ---- Ch6 Topic 2: Factorial Notation (8) ---- */
  add("MTH-P14",6,"MTH11-6-2",1,"Compute 3!.","3! निकालिए।",
    ["3","6","9","1"],["3","6","9","1"],"B","3×2×1 = 6.","3×2×1 = 6।");
  add("MTH-P15",6,"MTH11-6-2",1,"Compute 4!.","4! निकालिए।",
    ["12","16","24","20"],["12","16","24","20"],"C","4×3×2×1 = 24.","4×3×2×1 = 24।");
  add("MTH-P16",6,"MTH11-6-2",1,"0! equals:","0! बराबर है:",
    ["0","1","undefined","−1"],["0","1","undefined","−1"],"B","Defined as 1 by convention.","परंपरा से 1 defined है।");
  add("MTH-P17",6,"MTH11-6-2",2,"Compute 6!.","6! निकालिए।",
    ["36","120","720","360"],["36","120","720","360"],"C","6×5×4×3×2×1 = 720.","6×5×4×3×2×1 = 720।");
  add("MTH-P18",6,"MTH11-6-2",2,"6!/4! simplifies to:","6!/4! simplify होने पर:",
    ["30","6","2","24"],["30","6","2","24"],"A","6×5 = 30, the rest cancels.","6×5 = 30, बाक़ी cancel हो जाता है।");
  add("MTH-P19",6,"MTH11-6-2",2,"7!/5! simplifies to:","7!/5! simplify होने पर:",
    ["42","2","7","35"],["42","2","7","35"],"A","7×6 = 42.","7×6 = 42।");
  add("MTH-P20",6,"MTH11-6-2",3,"8!/6! simplifies to:","8!/6! simplify होने पर:",
    ["56","2","8","48"],["56","2","8","48"],"A","8×7 = 56.","8×7 = 56।");
  add("MTH-P21",6,"MTH11-6-2",3,"n!/(n−1)! simplifies to:","n!/(n−1)! simplify होने पर:",
    ["n","1","n−1","n!"],["n","1","n−1","n!"],"A","Every term except n cancels.","n के अलावा हर term cancel हो जाता है।");

  /* ---- Ch6 Topic 3: Permutations of Distinct Objects (9) ---- */
  add("MTH-P22",6,"MTH11-6-3",1,"⁵P₂ equals:","⁵P₂ बराबर है:",
    ["10","20","25","7"],["10","20","25","7"],"B","5×4 = 20.","5×4 = 20।");
  add("MTH-P23",6,"MTH11-6-3",1,"⁴P₄ equals:","⁴P₄ बराबर है:",
    ["4","16","24","1"],["4","16","24","1"],"C","⁴P₄ = 4! = 24.","⁴P₄ = 4! = 24।");
  add("MTH-P24",6,"MTH11-6-3",1,"ⁿP₀ always equals:","ⁿP₀ हमेशा बराबर है:",
    ["0","1","n","n!"],["0","1","n","n!"],"B","Arranging zero objects has exactly one way — doing nothing.","शून्य objects arrange करने का ठीक एक तरीका है — कुछ न करना।");
  add("MTH-P25",6,"MTH11-6-3",2,"⁶P₂ equals:","⁶P₂ बराबर है:",
    ["12","30","36","15"],["12","30","36","15"],"B","6×5 = 30.","6×5 = 30।");
  add("MTH-P26",6,"MTH11-6-3",2,"In how many ways can 2 out of 4 books be arranged on a shelf?","4 में से 2 books shelf पर कितने तरीकों से arrange हो सकती हैं?",
    ["6","8","12","4"],["6","8","12","4"],"C","⁴P₂ = 4×3 = 12.","⁴P₂ = 4×3 = 12।");
  add("MTH-P27",6,"MTH11-6-3",2,"⁷P₃ equals:","⁷P₃ बराबर है:",
    ["21","210","35","42"],["21","210","35","42"],"B","7×6×5 = 210.","7×6×5 = 210।");
  add("MTH-P28",6,"MTH11-6-3",3,"In how many ways can first, second and third prizes be given to 3 of 8 contestants?","8 में से 3 contestants को first, second, third prizes कितने तरीकों से दे सकते हैं?",
    ["56","336","24","512"],["56","336","24","512"],"B","⁸P₃ = 8×7×6 = 336.","⁸P₃ = 8×7×6 = 336।");
  add("MTH-P29",6,"MTH11-6-3",3,"⁶P₃ equals:","⁶P₃ बराबर है:",
    ["20","60","120","720"],["20","60","120","720"],"C","6×5×4 = 120.","6×5×4 = 120।");
  add("MTH-P30",6,"MTH11-6-3",4,"How many 4-letter arrangements can be made from 6 distinct letters, using each letter at most once?","6 अलग-अलग letters से, हर letter ज़्यादा से ज़्यादा एक बार इस्तेमाल करके, कितने 4-letter arrangements बन सकते हैं?",
    ["24","360","720","1296"],["24","360","720","1296"],"B","⁶P₄ = 6×5×4×3 = 360.","⁶P₄ = 6×5×4×3 = 360।");

  /* ---- Ch6 Topic 4: Repetition Allowed or Not (9) ---- */
  add("MTH-P31",6,"MTH11-6-4",1,"A 2-digit code from digits 0-9, repetition allowed: total codes?","0-9 digits से 2-digit code, repetition allowed: कुल codes?",
    ["20","90","100","19"],["20","90","100","19"],"C","10 × 10 = 100.","10 × 10 = 100।");
  add("MTH-P32",6,"MTH11-6-4",1,"A 2-digit code from digits 0-9, repetition NOT allowed: total codes?","0-9 digits से 2-digit code, repetition NOT allowed: कुल codes?",
    ["90","100","20","81"],["90","100","20","81"],"A","10 × 9 = 90.","10 × 9 = 90।");
  add("MTH-P33",6,"MTH11-6-4",2,"3-letter passwords from 5 distinct letters, repetition allowed: total?","5 अलग letters से 3-letter passwords, repetition allowed: total?",
    ["15","60","125","243"],["15","60","125","243"],"C","5³ = 125.","5³ = 125।");
  add("MTH-P34",6,"MTH11-6-4",2,"3-letter passwords from 5 distinct letters, repetition NOT allowed: total?","5 अलग letters से 3-letter passwords, repetition NOT allowed: total?",
    ["60","125","15","243"],["60","125","15","243"],"A","⁵P₃ = 5×4×3 = 60.","⁵P₃ = 5×4×3 = 60।");
  add("MTH-P35",6,"MTH11-6-4",2,"Which formula applies when repetition IS allowed, for r positions and n choices each?","हर position में n choices और repetition allowed होने पर कौन-सा formula लगता है?",
    ["nʳ","ⁿPᵣ","ⁿCᵣ","n×r"],["nʳ","ⁿPᵣ","ⁿCᵣ","n×r"],"A","Each of the r positions independently has n choices.","r positions में से हर एक के अलग-अलग n choices हैं।");
  add("MTH-P36",6,"MTH11-6-4",3,"A 4-digit PIN using digits 0-9, repetition allowed: total PINs?","0-9 digits से 4-digit PIN, repetition allowed: total PINs?",
    ["40","5040","10000","6561"],["40","5040","10000","6561"],"C","10⁴ = 10000.","10⁴ = 10000।");
  add("MTH-P37",6,"MTH11-6-4",3,"A 4-digit PIN using digits 0-9, repetition NOT allowed: total PINs?","0-9 digits से 4-digit PIN, repetition NOT allowed: total PINs?",
    ["5040","10000","40","720"],["5040","10000","40","720"],"A","¹⁰P₄ = 10×9×8×7 = 5040.","¹⁰P₄ = 10×9×8×7 = 5040।");
  add("MTH-P38",6,"MTH11-6-4",3,"How many 3-letter words can be formed from A,B,C,D (repetition allowed)?","A,B,C,D से (repetition allowed) कितने 3-letter words बन सकते हैं?",
    ["12","24","64","81"],["12","24","64","81"],"C","4³ = 64.","4³ = 64।");
  add("MTH-P39",6,"MTH11-6-4",4,"How many 3-letter words can be formed from A,B,C,D (repetition NOT allowed)?","A,B,C,D से (repetition NOT allowed) कितने 3-letter words बन सकते हैं?",
    ["24","64","12","4"],["24","64","12","4"],"A","⁴P₃ = 4×3×2 = 24.","⁴P₃ = 4×3×2 = 24।");

  /* ---- Ch6 Topic 5: Not All Distinct (9) ---- */
  add("MTH-P40",6,"MTH11-6-5",1,"How many arrangements does the word ROSE have (4 distinct letters)?","Word ROSE (4 अलग letters) के कितने arrangements हैं?",
    ["4","16","24","12"],["4","16","24","12"],"C","4! = 24.","4! = 24।");
  add("MTH-P41",6,"MTH11-6-5",1,"How many arrangements does the word BALL have (4 letters, L repeats twice)?","Word BALL (4 letters, L दो बार) के कितने arrangements हैं?",
    ["24","12","6","4"],["24","12","6","4"],"B","4!/2! = 12.","4!/2! = 12।");
  add("MTH-P42",6,"MTH11-6-5",2,"For a word with n letters where one letter repeats p times, the arrangement formula is:","n letters वाले word में, अगर एक letter p बार दोहराता है, arrangement formula है:",
    ["n!/p!","n!×p!","n!−p!","n!/p"],["n!/p!","n!×p!","n!−p!","n!/p"],"A","Divide out the repeated letter's internal orderings.","दोहराए letter की अंदरूनी orderings को divide कर दीजिए।");
  add("MTH-P43",6,"MTH11-6-5",2,"How many arrangements does the word LEVEL have (5 letters, L twice, E twice)?","Word LEVEL (5 letters, L दो बार, E दो बार) के कितने arrangements हैं?",
    ["120","60","30","15"],["120","60","30","15"],"C","5!/(2!×2!) = 120/4 = 30.","5!/(2!×2!) = 120/4 = 30।");
  add("MTH-P44",6,"MTH11-6-5",2,"How many arrangements does the word CIVIC have (5 letters, C twice, I twice)?","Word CIVIC (5 letters, C दो बार, I दो बार) के कितने arrangements हैं?",
    ["120","60","30","20"],["120","60","30","20"],"C","5!/(2!×2!) = 30.","5!/(2!×2!) = 30।");
  add("MTH-P45",6,"MTH11-6-5",3,"How many arrangements does the word BANANA have (6 letters, A three times, N twice)?","Word BANANA (6 letters, A तीन बार, N दो बार) के कितने arrangements हैं?",
    ["720","60","120","360"],["720","60","120","360"],"B","6!/(3!×2!) = 720/12 = 60.","6!/(3!×2!) = 720/12 = 60।");
  add("MTH-P46",6,"MTH11-6-5",3,"How many arrangements does the word STATS have (5 letters, S twice, T twice)?","Word STATS (5 letters, S दो बार, T दो बार) के कितने arrangements हैं?",
    ["120","30","60","15"],["120","30","60","15"],"B","5!/(2!×2!) = 120/4 = 30.","5!/(2!×2!) = 120/4 = 30।");
  add("MTH-P47",6,"MTH11-6-5",4,"The word HELLO has 5 letters with L repeating twice. How many arrangements?","Word HELLO में 5 letters हैं और L दो बार आता है। कितने arrangements हैं?",
    ["120","60","30","24"],["120","60","30","24"],"B","5!/2! = 60.","5!/2! = 60।");
  add("MTH-P48",6,"MTH11-6-5",4,"Why must we divide by p! for each repeated letter?","हर दोहराए letter के लिए p! से क्यों divide करते हैं?",
    ["To make the count smaller by mistake","Because swapping identical letters gives the same word, so those swaps were overcounted","Because factorial always divides","There is no real reason"],["ग़लती से count छोटा करने के लिए","क्योंकि identical letters बदलने पर वही word बनता है, इसलिए वे swaps दोहरे गिने गए थे","क्योंकि factorial हमेशा divide करता है","कोई असली reason नहीं"],"B","Identical-letter swaps were counted as different in n!, wrongly.","Identical-letter swaps को n! में ग़लती से अलग गिना गया था।");

  /* ---- Ch6 Topic 6: Combinations (9) ---- */
  add("MTH-P49",6,"MTH11-6-6",1,"⁵C₂ equals:","⁵C₂ बराबर है:",
    ["20","10","5","25"],["20","10","5","25"],"B","5!/(2!×3!) = 10.","5!/(2!×3!) = 10।");
  add("MTH-P50",6,"MTH11-6-6",1,"ⁿC₀ always equals:","ⁿC₀ हमेशा बराबर है:",
    ["0","1","n","n!"],["0","1","n","n!"],"B","There is exactly one way to choose nothing.","कुछ न चुनने का ठीक एक तरीका है।");
  add("MTH-P51",6,"MTH11-6-6",1,"ⁿCₙ always equals:","ⁿCₙ हमेशा बराबर है:",
    ["0","1","n","n!"],["0","1","n","n!"],"B","There is exactly one way to choose everything.","सब कुछ चुनने का ठीक एक तरीका है।");
  add("MTH-P52",6,"MTH11-6-6",2,"In how many ways can a team of 2 be chosen from 4 players?","4 players में से 2 की team कितने तरीकों से चुन सकते हैं?",
    ["4","6","8","12"],["4","6","8","12"],"B","⁴C₂ = 6.","⁴C₂ = 6।");
  add("MTH-P53",6,"MTH11-6-6",2,"⁶C₃ equals:","⁶C₃ बराबर है:",
    ["15","20","120","6"],["15","20","120","6"],"B","6!/(3!×3!) = 20.","6!/(3!×3!) = 20।");
  add("MTH-P54",6,"MTH11-6-6",2,"⁷C₂ equals:","⁷C₂ बराबर है:",
    ["14","21","42","7"],["14","21","42","7"],"B","7×6/2 = 21.","7×6/2 = 21।");
  add("MTH-P55",6,"MTH11-6-6",3,"In how many ways can 3 fruits be chosen from a basket of 6 different fruits?","6 अलग फलों में से 3 फल कितने तरीकों से चुन सकते हैं?",
    ["18","20","120","6"],["18","20","120","6"],"B","⁶C₃ = 20.","⁶C₃ = 20।");
  add("MTH-P56",6,"MTH11-6-6",3,"⁹C₂ equals:","⁹C₂ बराबर है:",
    ["18","36","72","45"],["18","36","72","45"],"B","9×8/2 = 36.","9×8/2 = 36।");
  add("MTH-P57",6,"MTH11-6-6",3,"Does the order of picking matter in a combination?","Combination में चुनने का order मायने रखता है?",
    ["Yes, always","No, never","Only sometimes","Only for large n"],["हाँ, हमेशा","नहीं, कभी नहीं","सिर्फ़ कभी-कभी","सिर्फ़ बड़े n के लिए"],"B","Order never matters in a combination, by definition.","परिभाषा से, combination में order कभी मायने नहीं रखता।");

  /* ---- Ch6 Topic 7: Relating Permutations and Combinations (12) ---- */
  add("MTH-P58",6,"MTH11-6-7",2,"The relationship between permutations and combinations is:","Permutations और combinations के बीच संबंध है:",
    ["ⁿPᵣ = ⁿCᵣ × r!","ⁿPᵣ = ⁿCᵣ + r!","ⁿPᵣ = ⁿCᵣ − r!","ⁿPᵣ = ⁿCᵣ / r!"],["ⁿPᵣ = ⁿCᵣ × r!","ⁿPᵣ = ⁿCᵣ + r!","ⁿPᵣ = ⁿCᵣ − r!","ⁿPᵣ = ⁿCᵣ / r!"],"A","Choose the group, then arrange it internally.","पहले group चुनिए, फिर उसे अंदर arrange कीजिए।");
  add("MTH-P59",6,"MTH11-6-7",2,"Choosing a committee (no roles) is an example of a:","Committee चुनना (कोई roles नहीं) किसका उदाहरण है?",
    ["permutation","combination","factorial","neither"],["permutation","combination","factorial","neither"],"B","Order of selection does not matter.","चुनने का order मायने नहीं रखता।");
  add("MTH-P60",6,"MTH11-6-7",2,"Arranging books on a shelf in a specific order is an example of a:","Books को shelf पर एक ख़ास order में arrange करना किसका उदाहरण है?",
    ["permutation","combination","factorial","neither"],["permutation","combination","factorial","neither"],"A","Order changes the outcome here.","यहाँ order outcome बदलता है।");
  add("MTH-P61",6,"MTH11-6-7",2,"If ⁵C₂=10, what is ⁵P₂?","अगर ⁵C₂=10, ⁵P₂ क्या है?",
    ["10","20","5","2"],["10","20","5","2"],"B","10 × 2! = 20.","10 × 2! = 20।");
  add("MTH-P62",6,"MTH11-6-7",3,"If ⁶C₃=20, what is ⁶P₃?","अगर ⁶C₃=20, ⁶P₃ क्या है?",
    ["20","120","40","60"],["20","120","40","60"],"B","20 × 3! = 20 × 6 = 120.","20 × 3! = 20 × 6 = 120।");
  add("MTH-P63",6,"MTH11-6-7",3,"Selecting a 5-a-side team from 10 players (no positions assigned) needs:","10 players में से 5-a-side team चुनना (कोई position तय नहीं) किसकी ज़रूरत है?",
    ["¹⁰P₅","¹⁰C₅","10⁵","5!"],["¹⁰P₅","¹⁰C₅","10⁵","5!"],"B","Order of selection does not matter here.","यहाँ चुनने का order मायने नहीं रखता।");
  add("MTH-P64",6,"MTH11-6-7",3,"Assigning 3 distinct prizes (1st, 2nd, 3rd) to 3 of 10 contestants needs:","10 में से 3 contestants को 3 अलग prizes (1st, 2nd, 3rd) देना किसकी ज़रूरत है?",
    ["¹⁰C₃","¹⁰P₃","10³","3!"],["¹⁰C₃","¹⁰P₃","10³","3!"],"B","Each prize is a distinct position, so order matters.","हर prize एक अलग position है, इसलिए order मायने रखता है।");
  add("MTH-P65",6,"MTH11-6-7",4,"A 4-person team is chosen from 9 students, then a captain is chosen from those 4. Which expression gives the total ways?","9 students में से 4 की team चुनी जाती है, फिर उन 4 में से captain चुना जाता है। कौन-सी expression total ways देती है?",
    ["⁹C₄ × 4","⁹P₄","⁹C₄","⁹C₄ + 4"],["⁹C₄ × 4","⁹P₄","⁹C₄","⁹C₄ + 4"],"A","Choose the team (combination), then the captain (fundamental principle).","पहले team चुनिए (combination), फिर captain (fundamental principle)।");
  add("MTH-P66",6,"MTH11-6-7",4,"Compute the total ways from the previous question: ⁹C₄ × 4.","पिछले question से total ways निकालिए: ⁹C₄ × 4।",
    ["504","126","36","630"],["504","126","36","630"],"A","⁹C₄ = 126, and 126 × 4 = 504.","⁹C₄ = 126, और 126 × 4 = 504।");
  add("MTH-P67",6,"MTH11-6-7",4,"A password needs exactly 3 different letters from A-E, and their order matters. Which formula applies?","एक password A-E में से ठीक 3 अलग letters चाहता है, और उनका order मायने रखता है। कौन-सा formula लगता है?",
    ["⁵P₃","⁵C₃","5³","3!"],["⁵P₃","⁵C₃","5³","3!"],"A","Order matters and letters do not repeat.","Order मायने रखता है और letters दोहराते नहीं।");
  add("MTH-P68",6,"MTH11-6-7",5,"A quiz selects 5 questions out of 8 to ask, in the order they will be asked. Which formula applies?","एक quiz 8 में से 5 questions चुनता है, उसी order में जिसमें पूछे जाएँगे। कौन-सा formula लगता है?",
    ["⁸C₅","⁸P₅","8⁵","5!"],["⁸C₅","⁸P₅","8⁵","5!"],"B","The order of asking matters, so it's a permutation.","पूछने का order मायने रखता है, इसलिए यह permutation है।");
  add("MTH-P69",6,"MTH11-6-7",5,"A shop selects 5 items out of 8 to put on a sale display, with no particular order. Which formula applies?","एक दुकान 8 में से 5 items बिना किसी ख़ास order के sale display पर रखती है। कौन-सा formula लगता है?",
    ["⁸C₅","⁸P₅","8⁵","5!"],["⁸C₅","⁸P₅","8⁵","5!"],"A","No order needed, so it's a combination.","कोई order नहीं चाहिए, इसलिए यह combination है।");

  /* ---- Ch7 Topic 0: Revise (8) ---- */
  add("MTH-B01",7,"MTH11-7-0",1,"(a+b)² equals:","(a+b)² बराबर है:",
    ["a²+b²","a²+2ab+b²","a²−2ab+b²","a²+ab+b²"],["a²+b²","a²+2ab+b²","a²−2ab+b²","a²+ab+b²"],"B","Multiply out and combine the two ab terms.","गुणा करके दोनों ab terms मिलाइए।");
  add("MTH-B02",7,"MTH11-7-0",1,"The coefficient of ab in (a+b)² is:","(a+b)² में ab का coefficient है:",
    ["1","2","0","−1"],["1","2","0","−1"],"B","ab appears twice: a·b and b·a.","ab दो बार आता है: a·b और b·a।");
  add("MTH-B03",7,"MTH11-7-0",1,"(a+b)³ has how many terms?","(a+b)³ में कितने terms हैं?",
    ["2","3","4","5"],["2","3","4","5"],"C","a³, a²b, ab², b³ — four terms.","a³, a²b, ab², b³ — चार terms।");
  add("MTH-B04",7,"MTH11-7-0",2,"(a+b)³ equals:","(a+b)³ बराबर है:",
    ["a³+b³","a³+3a²b+3ab²+b³","a³−3a²b+3ab²−b³","a³+3ab+b³"],["a³+b³","a³+3a²b+3ab²+b³","a³−3a²b+3ab²−b³","a³+3ab+b³"],"B","Multiply (a+b)(a+b)² out fully.","(a+b)(a+b)² को पूरा गुणा कीजिए।");
  add("MTH-B05",7,"MTH11-7-0",2,"The coefficients of (a+b)³ are:","(a+b)³ के coefficients हैं:",
    ["1,2,1","1,3,3,1","1,1,1,1","1,3,1"],["1,2,1","1,3,3,1","1,1,1,1","1,3,1"],"B","Matches the four terms of the expansion.","Expansion के चारों terms से मेल खाते हैं।");
  add("MTH-B06",7,"MTH11-7-0",2,"In (a+b)(a+b), how many product terms appear before combining?","(a+b)(a+b) में मिलाने से पहले कितने product terms आते हैं?",
    ["2","3","4","1"],["2","3","4","1"],"C","a·a, a·b, b·a, b·b — four products.","a·a, a·b, b·a, b·b — चार products।");
  add("MTH-B07",7,"MTH11-7-0",3,"Why does ab appear with coefficient 2 in (a+b)²?","(a+b)² में ab का coefficient 2 क्यों है?",
    ["Because a·b and b·a are both counted and combined","Because a and b are equal","It is just a convention","There is no reason"],["क्योंकि a·b और b·a दोनों गिने और मिलाए जाते हैं","क्योंकि a और b बराबर हैं","यह बस एक convention है","कोई reason नहीं"],"A","Two identical cross terms add together.","दो एक जैसे cross terms जुड़ जाते हैं।");
  add("MTH-B08",7,"MTH11-7-0",3,"Expand (a−b)² using the same idea as (a+b)².","(a+b)² जैसे idea से (a−b)² expand कीजिए।",
    ["a²−2ab+b²","a²+2ab+b²","a²−b²","a²−ab+b²"],["a²−2ab+b²","a²+2ab+b²","a²−b²","a²−ab+b²"],"A","Multiply (a−b)(a−b) out fully.","(a−b)(a−b) को पूरा गुणा कीजिए।");

  /* ---- Ch7 Topic 1: Pascal's Triangle (8) ---- */
  add("MTH-B09",7,"MTH11-7-1",1,"In Pascal's triangle, row 0 is:","Pascal's triangle में, row 0 है:",
    ["1,1","1","0","1,0"],["1,1","1","0","1,0"],"B","Row 0 has just one number, 1.","Row 0 में बस एक number है, 1।");
  add("MTH-B10",7,"MTH11-7-1",1,"In Pascal's triangle, row 2 is:","Pascal's triangle में, row 2 है:",
    ["1,2,1","1,1,1","1,3,1","2,2"],["1,2,1","1,1,1","1,3,1","2,2"],"A","Matches (a+b)²'s coefficients.","(a+b)² के coefficients से मेल खाता है।");
  add("MTH-B11",7,"MTH11-7-1",1,"Every number in Pascal's triangle (other than the edges) is:","Pascal's triangle में हर number (edges के अलावा) है:",
    ["the product of the two numbers above it","the sum of the two numbers above it","always 1","the row number"],["अपने ऊपर वाले दो का गुणनफल","अपने ऊपर वाले दो का योग","हमेशा 1","row number"],"B","This building rule generates the whole triangle.","यही rule पूरा triangle बनाता है।");
  add("MTH-B12",7,"MTH11-7-1",2,"The numbers at the edges of every row in Pascal's triangle are:","Pascal's triangle की हर row के edges पर numbers हैं:",
    ["always 0","always 1","always n","always changing"],["हमेशा 0","हमेशा 1","हमेशा n","हमेशा बदलते"],"B","Each edge has nothing above but one number, so it stays 1.","हर edge के ऊपर सिर्फ़ एक number होता है, इसलिए वह 1 रहता है।");
  add("MTH-B13",7,"MTH11-7-1",2,"Row 3 of Pascal's triangle is 1,3,3,1. What is row 4?","Pascal's triangle की row 3 है 1,3,3,1। Row 4 क्या है?",
    ["1,4,6,4,1","1,3,4,3,1","1,4,4,1","1,4,5,4,1"],["1,4,6,4,1","1,3,4,3,1","1,4,4,1","1,4,5,4,1"],"A","3+3=6 in the middle, 1 at each edge.","बीच में 3+3=6, हर edge पर 1।");
  add("MTH-B14",7,"MTH11-7-1",2,"How many numbers are in row 5 of Pascal's triangle?","Pascal's triangle की row 5 में कितने numbers हैं?",
    ["5","6","7","4"],["5","6","7","4"],"B","Row n has n+1 numbers.","Row n में n+1 numbers होते हैं।");
  add("MTH-B15",7,"MTH11-7-1",3,"In row 4 (1,4,6,4,1), how was the middle number 6 found?","Row 4 (1,4,6,4,1) में बीच का number 6 कैसे मिला?",
    ["3+3 from row 3","4+4","1+1","6 is given directly"],["Row 3 से 3+3","4+4","1+1","6 सीधे दिया गया"],"A","The two 3's sitting above it in row 3 add together.","Row 3 में इसके ऊपर बैठे दोनों 3 जुड़ते हैं।");
  add("MTH-B16",7,"MTH11-7-1",3,"What is row 6 of Pascal's triangle's second number (index 1)?","Pascal's triangle की row 6 का दूसरा number (index 1) क्या है?",
    ["6","5","1","15"],["6","5","1","15"],"A","Row 6 is 1,6,15,20,15,6,1.","Row 6 है 1,6,15,20,15,6,1।");

  /* ---- Ch7 Topic 2: The Binomial Theorem (8) ---- */
  add("MTH-B17",7,"MTH11-7-2",1,"The binomial theorem writes (a+b)ⁿ using which coefficients?","Binomial theorem, (a+b)ⁿ को किन coefficients से लिखता है?",
    ["ⁿPᵣ","ⁿCᵣ","n!","n"],["ⁿPᵣ","ⁿCᵣ","n!","n"],"B","Exactly the combination values from the last chapter.","ठीक पिछले chapter के combination values।");
  add("MTH-B18",7,"MTH11-7-2",1,"In the binomial theorem, the first term of (a+b)ⁿ is:","Binomial theorem में, (a+b)ⁿ का पहला term है:",
    ["ⁿC₀ aⁿ","ⁿCₙ bⁿ","ⁿC₁ a","aⁿ+bⁿ"],["ⁿC₀ aⁿ","ⁿCₙ bⁿ","ⁿC₁ a","aⁿ+bⁿ"],"A","Full power of a, no b yet.","a की पूरी power, b अभी नहीं।");
  add("MTH-B19",7,"MTH11-7-2",1,"In the binomial theorem, the last term of (a+b)ⁿ is:","Binomial theorem में, (a+b)ⁿ का आख़िरी term है:",
    ["ⁿC₀ aⁿ","ⁿCₙ bⁿ","ⁿC₁ b","a⁰b⁰"],["ⁿC₀ aⁿ","ⁿCₙ bⁿ","ⁿC₁ b","a⁰b⁰"],"B","Full power of b, no a left.","b की पूरी power, a नहीं बचा।");
  add("MTH-B20",7,"MTH11-7-2",2,"Using ⁿC₀,ⁿC₁,ⁿC₂ = 1,2,1, expand (a+b)² via the theorem.","ⁿC₀,ⁿC₁,ⁿC₂ = 1,2,1 इस्तेमाल करके theorem से (a+b)² expand कीजिए।",
    ["a²+2ab+b²","a²+ab+b²","2a²+2b²","a²−2ab+b²"],["a²+2ab+b²","a²+ab+b²","2a²+2b²","a²−2ab+b²"],"A","Matches the familiar expansion.","जाने-पहचाने expansion से मेल खाता है।");
  add("MTH-B21",7,"MTH11-7-2",2,"Expand (x+1)³ using the binomial theorem.","Binomial theorem से (x+1)³ expand कीजिए।",
    ["x³+3x²+3x+1","x³+3x+1","x³+x²+x+1","x³+1"],["x³+3x²+3x+1","x³+3x+1","x³+x²+x+1","x³+1"],"A","Row 3 coefficients (1,3,3,1) with b=1.","Row 3 के coefficients (1,3,3,1), b=1 के साथ।");
  add("MTH-B22",7,"MTH11-7-2",2,"Expand (x+3)² using the binomial theorem.","Binomial theorem से (x+3)² expand कीजिए।",
    ["x²+6x+9","x²+3x+9","x²+9x+6","x²+9"],["x²+6x+9","x²+3x+9","x²+9x+6","x²+9"],"A","x²+2(3)x+9 = x²+6x+9.","x²+2(3)x+9 = x²+6x+9।");
  add("MTH-B23",7,"MTH11-7-2",3,"Expand (2x+1)³ using the binomial theorem.","Binomial theorem से (2x+1)³ expand कीजिए।",
    ["8x³+12x²+6x+1","8x³+6x²+12x+1","2x³+12x²+6x+1","8x³+12x²+1"],["8x³+12x²+6x+1","8x³+6x²+12x+1","2x³+12x²+6x+1","8x³+12x²+1"],"A","(2x)³+3(2x)²(1)+3(2x)(1)²+1³.","(2x)³+3(2x)²(1)+3(2x)(1)²+1³।");
  add("MTH-B24",7,"MTH11-7-2",3,"Expand (x+2)⁴ using row 4 of Pascal's triangle (1,4,6,4,1).","Pascal's triangle की row 4 (1,4,6,4,1) से (x+2)⁴ expand कीजिए।",
    ["x⁴+8x³+24x²+32x+16","x⁴+4x³+6x²+4x+2","x⁴+8x³+16x²+32x+16","x⁴+4x³+24x²+8x+16"],["x⁴+8x³+24x²+32x+16","x⁴+4x³+6x²+4x+2","x⁴+8x³+16x²+32x+16","x⁴+4x³+24x²+8x+16"],"A","x⁴+4x³(2)+6x²(4)+4x(8)+16.","x⁴+4x³(2)+6x²(4)+4x(8)+16।");

  /* ---- Ch7 Topic 3: Patterns Inside the Expansion (8) ---- */
  add("MTH-B25",7,"MTH11-7-3",1,"The expansion of (a+b)⁵ has how many terms?","(a+b)⁵ के expansion में कितने terms हैं?",
    ["5","6","4","10"],["5","6","4","10"],"B","n+1 = 5+1 = 6.","n+1 = 5+1 = 6।");
  add("MTH-B26",7,"MTH11-7-3",1,"In (a+b)ⁿ, the power of a in the first term is:","(a+b)ⁿ में, पहले term में a की power है:",
    ["0","1","n","n−1"],["0","1","n","n−1"],"C","The first term has the full power of a.","पहले term में a की पूरी power है।");
  add("MTH-B27",7,"MTH11-7-3",1,"In (a+b)ⁿ, the power of b in the first term is:","(a+b)ⁿ में, पहले term में b की power है:",
    ["0","1","n","n−1"],["0","1","n","n−1"],"A","b has not entered yet in the first term.","पहले term में b अभी शामिल नहीं हुआ।");
  add("MTH-B28",7,"MTH11-7-3",2,"In every term of (a+b)ⁿ, the powers of a and b add up to:","(a+b)ⁿ के हर term में, a और b की powers का योग है:",
    ["n","n+1","2n","n−1"],["n","n+1","2n","n−1"],"A","As one power drops, the other rises by the same amount.","एक power घटती है, दूसरी उतनी ही बढ़ती है।");
  add("MTH-B29",7,"MTH11-7-3",2,"How many terms are in the expansion of (a+b)¹⁰?","(a+b)¹⁰ के expansion में कितने terms हैं?",
    ["10","11","9","20"],["10","11","9","20"],"B","10+1 = 11.","10+1 = 11।");
  add("MTH-B30",7,"MTH11-7-3",2,"In the expansion of (a+b)⁶, what are the powers of a and b in the term ⁶C₂a⁴b²?","(a+b)⁶ के expansion में, term ⁶C₂a⁴b² में a और b की powers क्या हैं?",
    ["a⁴b²","a²b⁴","a⁵b¹","a³b³"],["a⁴b²","a²b⁴","a⁵b¹","a³b³"],"A","Read the powers directly off the term.","Powers term से सीधे पढ़िए।");
  add("MTH-B31",7,"MTH11-7-3",3,"For (a+b)⁸, the term with a³ must have b to the power:","(a+b)⁸ में, a³ वाले term में b की power होनी चाहिए:",
    ["3","5","8","11"],["3","5","8","11"],"B","3+5 = 8, matching the total power.","3+5 = 8, कुल power से मेल खाता है।");
  add("MTH-B32",7,"MTH11-7-3",3,"Which of these could NOT be a term's powers in the expansion of (a+b)⁶?","(a+b)⁶ के expansion में इनमें से कौन-सी powers किसी term की नहीं हो सकतीं?",
    ["a⁴b²","a²b⁴","a³b³","a²b³"],["a⁴b²","a²b⁴","a³b³","a²b³"],"D","2+3=5, not 6.","2+3=5, 6 नहीं।");

  /* ---- Ch7 Topic 4: Special Cases (8) ---- */
  add("MTH-B33",7,"MTH11-7-4",1,"In (x−y)ⁿ, the signs of successive terms:","(x−y)ⁿ में, लगातार terms के signs:",
    ["are all positive","alternate between positive and negative","are all negative","depend on n only"],["सब positive हैं","positive और negative बारी-बारी हैं","सब negative हैं","सिर्फ़ n पर निर्भर हैं"],"B","Each −y flips the sign of the next term.","हर −y अगले term का sign पलट देता है।");
  add("MTH-B34",7,"MTH11-7-4",1,"(1+x)ⁿ expands to:","(1+x)ⁿ expand होता है:",
    ["ⁿC₀+ⁿC₁x+ⁿC₂x²+...","ⁿC₀x+ⁿC₁x²+...","ⁿC₀−ⁿC₁x+...","just 1+xⁿ"],["ⁿC₀+ⁿC₁x+ⁿC₂x²+...","ⁿC₀x+ⁿC₁x²+...","ⁿC₀−ⁿC₁x+...","बस 1+xⁿ"],"A","Setting a=1 in the theorem.","Theorem में a=1 रखने पर।");
  add("MTH-B35",7,"MTH11-7-4",2,"Setting x=1 in (1+x)ⁿ gives:","(1+x)ⁿ में x=1 रखने पर मिलता है:",
    ["2ⁿ = ⁿC₀+ⁿC₁+...+ⁿCₙ","n²","2n","nⁿ"],["2ⁿ = ⁿC₀+ⁿC₁+...+ⁿCₙ","n²","2n","nⁿ"],"A","Every Pascal's-triangle row sums to a power of 2.","हर Pascal's-triangle row 2 की power पर जुड़ती है।");
  add("MTH-B36",7,"MTH11-7-4",2,"Expand (x−1)³ using the subtraction pattern.","घटाव वाले pattern से (x−1)³ expand कीजिए।",
    ["x³−3x²+3x−1","x³+3x²+3x+1","x³−3x²−3x−1","x³−1"],["x³−3x²+3x−1","x³+3x²+3x+1","x³−3x²−3x−1","x³−1"],"A","Signs alternate starting positive.","Signs positive से शुरू होकर बारी-बारी बदलते हैं।");
  add("MTH-B37",7,"MTH11-7-4",2,"Expand (x−2)² using the subtraction pattern.","घटाव वाले pattern से (x−2)² expand कीजिए।",
    ["x²−4x+4","x²+4x+4","x²−4x−4","x²−2x+4"],["x²−4x+4","x²+4x+4","x²−4x−4","x²−2x+4"],"A","x²−2(2)x+4.","x²−2(2)x+4।");
  add("MTH-B38",7,"MTH11-7-4",3,"What is the sum ⁿC₀+ⁿC₁+ⁿC₂+...+ⁿCₙ for n=4?","n=4 के लिए ⁿC₀+ⁿC₁+ⁿC₂+...+ⁿCₙ का योग क्या है?",
    ["8","16","4","24"],["8","16","4","24"],"B","2⁴ = 16.","2⁴ = 16।");
  add("MTH-B39",7,"MTH11-7-4",3,"Expand (2x−1)³ using the subtraction pattern.","घटाव वाले pattern से (2x−1)³ expand कीजिए।",
    ["8x³−12x²+6x−1","8x³+12x²+6x+1","8x³−6x²+12x−1","2x³−12x²+6x−1"],["8x³−12x²+6x−1","8x³+12x²+6x+1","8x³−6x²+12x−1","2x³−12x²+6x−1"],"A","(2x)³−3(2x)²(1)+3(2x)(1)²−1³.","(2x)³−3(2x)²(1)+3(2x)(1)²−1³।");
  add("MTH-B40",7,"MTH11-7-4",4,"For (1−x)ⁿ, setting x=1 (n≥1) gives:","(1−x)ⁿ में x=1 रखने पर (n≥1), मिलता है:",
    ["0 = ⁿC₀−ⁿC₁+ⁿC₂−...","2ⁿ","1","n"],["0 = ⁿC₀−ⁿC₁+ⁿC₂−...","2ⁿ","1","n"],"A","(1−1)ⁿ=0, giving this alternating-sum identity.","(1−1)ⁿ=0, यही alternating-sum identity देता है।");

  /* ---- Ch7 Topic 5: Using the Binomial Theorem (8) ---- */
  add("MTH-B41",7,"MTH11-7-5",2,"To compute (99)³ easily, write 99 as:","(99)³ आसानी से निकालने के लिए, 99 को लिखिए:",
    ["100−1","90+9","9×11","100+1"],["100−1","90+9","9×11","100+1"],"A","A round number minus a small one.","एक गोल number में से एक छोटा घटा हुआ।");
  add("MTH-B42",7,"MTH11-7-5",2,"(100−1)³ expands to:","(100−1)³ expand होता है:",
    ["100³−3(100)²+3(100)−1","100³+3(100)²+3(100)+1","100³−1","100³−3(100)+1"],["100³−3(100)²+3(100)−1","100³+3(100)²+3(100)+1","100³−1","100³−3(100)+1"],"A","The subtraction pattern with a=100, b=1.","घटाव वाला pattern, a=100, b=1 के साथ।");
  add("MTH-B43",7,"MTH11-7-5",2,"Compute (99)³ using (100−1)³.","(100−1)³ से (99)³ निकालिए।",
    ["970299","990299","999999","900299"],["970299","990299","999999","900299"],"A","1000000−30000+300−1 = 970299.","1000000−30000+300−1 = 970299।");
  add("MTH-B44",7,"MTH11-7-5",3,"To compute (101)² easily, write 101 as:","(101)² आसानी से निकालने के लिए, 101 को लिखिए:",
    ["100+1","100−1","10×10.1","99+2"],["100+1","100−1","10×10.1","99+2"],"A","A round number plus a small one.","एक गोल number में एक छोटा जोड़ा हुआ।");
  add("MTH-B45",7,"MTH11-7-5",3,"Compute (101)² using (100+1)².","(100+1)² से (101)² निकालिए।",
    ["10201","10101","11001","10001"],["10201","10101","11001","10001"],"A","10000+200+1 = 10201.","10000+200+1 = 10201।");
  add("MTH-B46",7,"MTH11-7-5",3,"Compute (102)³ using (100+2)³.","(100+2)³ से (102)³ निकालिए।",
    ["1061208","1060208","1006208","1160208"],["1061208","1060208","1006208","1160208"],"A","1000000+60000+1200+8 = 1061208.","1000000+60000+1200+8 = 1061208।");
  add("MTH-B47",7,"MTH11-7-5",4,"For (1.02)¹⁰⁰, using only the first two terms of (1+0.02)¹⁰⁰ gives an approximate value of:","(1.02)¹⁰⁰ के लिए, (1+0.02)¹⁰⁰ के सिर्फ़ पहले दो terms इस्तेमाल करने पर लगभग value मिलती है:",
    ["1+100×0.02 = 3","1+0.02 = 1.02","100×0.02 = 2","1−100×0.02"],["1+100×0.02 = 3","1+0.02 = 1.02","100×0.02 = 2","1−100×0.02"],"A","¹⁰⁰C₀+¹⁰⁰C₁(0.02) = 1+2 = 3.","¹⁰⁰C₀+¹⁰⁰C₁(0.02) = 1+2 = 3।");
  add("MTH-B48",7,"MTH11-7-5",5,"Which statement about (1.01)^1000000 is true, using just the first two binomial terms?","(1.01)^1000000 के बारे में कौन-सा सच है, सिर्फ़ पहले दो binomial terms से?",
    ["It is greater than 10,000, since 1+1000000×0.01 = 10001","It is less than 10,000","It equals exactly 10,000","It cannot be estimated this way"],["यह 10,000 से बड़ा है, क्योंकि 1+1000000×0.01 = 10001","यह 10,000 से छोटा है","यह ठीक 10,000 के बराबर है","इस तरह अंदाज़ा नहीं लगाया जा सकता"],"A","Just the first two terms already exceed 10,000.","सिर्फ़ पहले दो terms ही 10,000 से ज़्यादा हैं।");

  /* ---- Ch8 Topic 0: Revise (5) ---- */
  add("MTH-Q01",8,"MTH11-8-0",1,"In an A.P., the common difference is:","A.P. में common difference है:",
    ["multiplied each time","added each time","squared each time","divided each time"],["हर बार गुणा होता है","हर बार जुड़ता है","हर बार square होता है","हर बार भाग होता है"],"B","d is added at every step.","हर step पर d जुड़ता है।");
  add("MTH-Q02",8,"MTH11-8-0",1,"For the A.P. 2,5,8,11,..., the common difference is:","A.P. 2,5,8,11,... के लिए, common difference है:",
    ["2","3","5","8"],["2","3","5","8"],"B","5−2=3.","5−2=3।");
  add("MTH-Q03",8,"MTH11-8-0",1,"The nth term formula for an A.P. is:","A.P. का nth term formula है:",
    ["a+(n−1)d","a×(n−1)d","a+nd","a−(n−1)d"],["a+(n−1)d","a×(n−1)d","a+nd","a−(n−1)d"],"A","Add d exactly (n−1) times to the first term.","पहले term में d को ठीक (n−1) बार जोड़िए।");
  add("MTH-Q04",8,"MTH11-8-0",2,"Find the 6th term of the A.P. 4,9,14,19,...","A.P. 4,9,14,19,... का 6वाँ term निकालिए।",
    ["24","29","34","19"],["24","29","34","19"],"B","4+5(5) = 29.","4+5(5) = 29।");
  add("MTH-Q05",8,"MTH11-8-0",2,"Find the sum of the first 5 terms of the A.P. 2,4,6,8,10.","A.P. 2,4,6,8,10 के पहले 5 terms का sum निकालिए।",
    ["20","25","30","15"],["20","25","30","15"],"C","2+4+6+8+10 = 30.","2+4+6+8+10 = 30।");

  /* ---- Ch8 Topic 1: What is a Sequence? (8) ---- */
  add("MTH-Q06",8,"MTH11-8-1",1,"A list of numbers in a definite order is called a:","एक तय क्रम में रखी numbers की list क्या कहलाती है?",
    ["series","sequence","set","sum"],["series","sequence","set","sum"],"B","Order matters in a sequence.","Sequence में order मायने रखता है।");
  add("MTH-Q07",8,"MTH11-8-1",1,"The nth term of a sequence is also called the:","Sequence के nth term को और क्या कहते हैं?",
    ["common term","general term","first term","random term"],["common term","general term","first term","random term"],"B","It gives the rule for every position n.","यह हर position n के लिए rule देता है।");
  add("MTH-Q08",8,"MTH11-8-1",1,"A sequence with a fixed number of terms is called:","एक तय संख्या वाले terms की sequence को क्या कहते हैं?",
    ["infinite","finite","undefined","periodic"],["infinite","finite","undefined","periodic"],"B","It stops after a definite count.","यह एक तय गिनती के बाद रुक जाती है।");
  add("MTH-Q09",8,"MTH11-8-1",2,"A sequence that never ends is called:","कभी न ख़त्म होने वाली sequence को क्या कहते हैं?",
    ["finite","infinite","limited","short"],["finite","infinite","limited","short"],"B","It continues forever.","यह हमेशा चलती रहती है।");
  add("MTH-Q10",8,"MTH11-8-1",2,"For aₙ=3n, find a₄.","aₙ=3n के लिए, a₄ निकालिए।",
    ["7","12","34","9"],["7","12","34","9"],"B","3×4 = 12.","3×4 = 12।");
  add("MTH-Q11",8,"MTH11-8-1",2,"For aₙ=n²+1, find a₃.","aₙ=n²+1 के लिए, a₃ निकालिए।",
    ["4","9","10","7"],["4","9","10","7"],"C","3²+1 = 10.","3²+1 = 10।");
  add("MTH-Q12",8,"MTH11-8-1",3,"In the Fibonacci sequence 1,1,2,3,5,8,..., what is the next term?","Fibonacci sequence 1,1,2,3,5,8,... में अगला term क्या है?",
    ["11","13","10","12"],["11","13","10","12"],"B","5+8 = 13.","5+8 = 13।");
  add("MTH-Q13",8,"MTH11-8-1",3,"The Fibonacci rule aₙ=aₙ₋₁+aₙ₋₂ is an example of a:","Fibonacci rule aₙ=aₙ₋₁+aₙ₋₂ किसका उदाहरण है?",
    ["general term formula","recurrence relation","geometric formula","constant sequence"],["general term formula","recurrence relation","geometric formula","constant sequence"],"B","Each term is built from earlier ones, not a direct formula in n.","हर term पिछलों से बनता है, n का सीधा formula नहीं।");

  /* ---- Ch8 Topic 2: Series and Sigma Notation (8) ---- */
  add("MTH-Q14",8,"MTH11-8-2",1,"A series is formed by:","Series कैसे बनती है?",
    ["listing a sequence's terms","adding a sequence's terms","multiplying a sequence's terms","reversing a sequence"],["Sequence के terms को list करके","Sequence के terms को जोड़कर","Sequence के terms को गुणा करके","Sequence को उलटकर"],"B","A series is the sum of the terms.","Series, terms का sum है।");
  add("MTH-Q15",8,"MTH11-8-2",1,"The symbol Σ means:","Symbol Σ का मतलब है:",
    ["product","sum","difference","limit"],["product","sum","difference","limit"],"B","Sigma is shorthand for a sum.","Sigma, sum का shorthand है।");
  add("MTH-Q16",8,"MTH11-8-2",1,"Σ (k=1 to 3) of k means:","Σ (k=1 से 3) k का मतलब है:",
    ["1+2+3","1×2×3","3","1,2,3"],["1+2+3","1×2×3","3","1,2,3"],"A","Add k for each value from 1 to 3.","1 से 3 तक हर k को जोड़िए।");
  add("MTH-Q17",8,"MTH11-8-2",2,"Evaluate Σ (k=1 to 4) of k.","Σ (k=1 से 4) k निकालिए।",
    ["10","4","24","16"],["10","4","24","16"],"A","1+2+3+4 = 10.","1+2+3+4 = 10।");
  add("MTH-Q18",8,"MTH11-8-2",2,"Evaluate Σ (k=1 to 3) of 2k.","Σ (k=1 से 3) 2k निकालिए।",
    ["6","12","9","24"],["6","12","9","24"],"B","2+4+6 = 12.","2+4+6 = 12।");
  add("MTH-Q19",8,"MTH11-8-2",2,"Find the sum of the first 4 terms of aₙ=3n.","aₙ=3n के पहले 4 terms का sum निकालिए।",
    ["30","12","24","18"],["30","12","24","18"],"A","3+6+9+12 = 30.","3+6+9+12 = 30।");
  add("MTH-Q20",8,"MTH11-8-2",3,"Find the sum of the first 5 terms of aₙ=2n−1 (odd numbers).","aₙ=2n−1 (odd numbers) के पहले 5 terms का sum निकालिए।",
    ["15","25","20","9"],["15","25","20","9"],"B","1+3+5+7+9 = 25.","1+3+5+7+9 = 25।");
  add("MTH-Q21",8,"MTH11-8-2",3,"Evaluate Σ (k=1 to 4) of k².","Σ (k=1 से 4) k² निकालिए।",
    ["30","16","10","20"],["30","16","10","20"],"A","1+4+9+16 = 30.","1+4+9+16 = 30।");

  /* ---- Ch8 Topic 3: G.P. General Term (9) ---- */
  add("MTH-Q22",8,"MTH11-8-3",1,"In a G.P., the common ratio is found by:","G.P. में common ratio कैसे पाते हैं?",
    ["subtracting consecutive terms","dividing a term by the one before it","adding consecutive terms","squaring a term"],["लगातार terms घटाकर","term को उससे पहले वाले से divide करके","लगातार terms जोड़कर","term का square करके"],"B","Divide any term by its predecessor.","किसी term को उसके पहले वाले से divide कीजिए।");
  add("MTH-Q23",8,"MTH11-8-3",1,"For the G.P. 3,6,12,24,..., the common ratio is:","G.P. 3,6,12,24,... के लिए, common ratio है:",
    ["2","3","6","12"],["2","3","6","12"],"A","6÷3 = 2.","6÷3 = 2।");
  add("MTH-Q24",8,"MTH11-8-3",1,"The nth term formula for a G.P. is:","G.P. का nth term formula है:",
    ["a+(n−1)r","ar^(n−1)","a×n×r","a+nr"],["a+(n−1)r","ar^(n−1)","a×n×r","a+nr"],"B","Multiply a by r exactly (n−1) times.","a को r से ठीक (n−1) बार गुणा कीजिए।");
  add("MTH-Q25",8,"MTH11-8-3",2,"Find the 4th term of the G.P. 5,10,20,40,...","G.P. 5,10,20,40,... का 4वाँ term निकालिए।",
    ["20","40","80","160"],["20","40","80","160"],"B","5×2³ = 40.","5×2³ = 40।");
  add("MTH-Q26",8,"MTH11-8-3",2,"Find the 6th term of the G.P. 1,3,9,27,...","G.P. 1,3,9,27,... का 6वाँ term निकालिए।",
    ["81","162","243","729"],["81","162","243","729"],"C","1×3⁵ = 243.","1×3⁵ = 243।");
  add("MTH-Q27",8,"MTH11-8-3",2,"Find the common ratio of the G.P. 100,50,25,...","G.P. 100,50,25,... का common ratio निकालिए।",
    ["2","0.5","1","−0.5"],["2","0.5","1","−0.5"],"B","50÷100 = 0.5.","50÷100 = 0.5।");
  add("MTH-Q28",8,"MTH11-8-3",3,"Find the 5th term of the G.P. 2,−4,8,−16,...","G.P. 2,−4,8,−16,... का 5वाँ term निकालिए।",
    ["−32","32","−16","16"],["−32","32","−16","16"],"B","2×(−2)⁴ = 2×16 = 32.","2×(−2)⁴ = 2×16 = 32।");
  add("MTH-Q29",8,"MTH11-8-3",3,"If a=3 and r=4 in a G.P., find the 3rd term.","G.P. में a=3 और r=4 है, 3rd term निकालिए।",
    ["12","36","48","7"],["12","36","48","7"],"C","3×4² = 48.","3×4² = 48।");
  add("MTH-Q30",8,"MTH11-8-3",4,"The 3rd term of a G.P. is 12 and the common ratio is 2. Find the 1st term.","G.P. का 3rd term 12 है और common ratio 2 है। पहला term निकालिए।",
    ["3","6","24","48"],["3","6","24","48"],"A","a×2² = 12, so a = 3.","a×2² = 12, इसलिए a = 3।");

  /* ---- Ch8 Topic 4: Sum of a G.P. (9) ---- */
  add("MTH-Q31",8,"MTH11-8-4",1,"The formula for the sum of n terms of a G.P. (r≠1) is:","G.P. के n terms के sum का formula (r≠1) है:",
    ["n/2[2a+(n−1)d]","a(rⁿ−1)/(r−1)","a+(n−1)r","narⁿ"],["n/2[2a+(n−1)d]","a(rⁿ−1)/(r−1)","a+(n−1)r","narⁿ"],"B","The standard G.P. sum formula.","Standard G.P. sum formula।");
  add("MTH-Q32",8,"MTH11-8-4",1,"Find the sum of the first 3 terms of the G.P. 1,2,4,...","G.P. 1,2,4,... के पहले 3 terms का sum निकालिए।",
    ["6","7","8","4"],["6","7","8","4"],"B","1+2+4 = 7.","1+2+4 = 7।");
  add("MTH-Q33",8,"MTH11-8-4",2,"Find the sum of the first 4 terms of the G.P. 2,4,8,16.","G.P. 2,4,8,16 के पहले 4 terms का sum निकालिए।",
    ["30","28","32","16"],["30","28","32","16"],"A","2+4+8+16 = 30.","2+4+8+16 = 30।");
  add("MTH-Q34",8,"MTH11-8-4",2,"Using the formula, find S₃ for a=1, r=3.","Formula से, a=1, r=3 के लिए S₃ निकालिए।",
    ["13","9","12","6"],["13","9","12","6"],"A","1×(27−1)/(3−1) = 13.","1×(27−1)/(3−1) = 13।");
  add("MTH-Q35",8,"MTH11-8-4",2,"Using the formula, find S₄ for a=2, r=2.","Formula से, a=2, r=2 के लिए S₄ निकालिए।",
    ["30","28","16","32"],["30","28","16","32"],"A","2×(16−1)/(2−1) = 30.","2×(16−1)/(2−1) = 30।");
  add("MTH-Q36",8,"MTH11-8-4",3,"Using the formula, find S₅ for a=3, r=2.","Formula से, a=3, r=2 के लिए S₅ निकालिए।",
    ["93","96","90","99"],["93","96","90","99"],"A","3×(32−1)/(2−1) = 93.","3×(32−1)/(2−1) = 93।");
  add("MTH-Q37",8,"MTH11-8-4",3,"A G.P. has a=1, r=5. Find the sum of the first 3 terms.","G.P. में a=1, r=5 है। पहले 3 terms का sum निकालिए।",
    ["31","25","30","36"],["31","25","30","36"],"A","1×(125−1)/(5−1) = 31.","1×(125−1)/(5−1) = 31।");
  add("MTH-Q38",8,"MTH11-8-4",3,"Why can't the G.P. sum formula be used when r=1?","r=1 होने पर G.P. sum formula क्यों इस्तेमाल नहीं कर सकते?",
    ["Because the denominator r−1 becomes 0","Because a becomes 0","Because n becomes 0","There is no reason, it works fine"],["क्योंकि denominator r−1, 0 हो जाता है","क्योंकि a, 0 हो जाता है","क्योंकि n, 0 हो जाता है","कोई reason नहीं, यह ठीक काम करता है"],"A","Division by zero is not allowed.","0 से division allowed नहीं है।");
  add("MTH-Q39",8,"MTH11-8-4",4,"If r=1, every term of the G.P. equals a. What is the sum of n such terms?","अगर r=1 है, G.P. का हर term a के बराबर है। ऐसे n terms का sum क्या है?",
    ["na","a/n","aⁿ","n+a"],["na","a/n","aⁿ","n+a"],"A","Adding a to itself n times.","a को अपने आप में n बार जोड़ना।");

  /* ---- Ch8 Topic 5: A.M.-G.M. Relationship (9) ---- */
  add("MTH-Q40",8,"MTH11-8-5",1,"The arithmetic mean of a and b is:","a और b का arithmetic mean है:",
    ["√(ab)","(a+b)/2","ab/2","a+b"],["√(ab)","(a+b)/2","ab/2","a+b"],"B","The ordinary average.","साधारण average।");
  add("MTH-Q41",8,"MTH11-8-5",1,"The geometric mean of a and b (positive) is:","a और b (positive) का geometric mean है:",
    ["(a+b)/2","√(ab)","ab","a−b"],["(a+b)/2","√(ab)","ab","a−b"],"B","The square root of their product.","इनके गुणनफल का square root।");
  add("MTH-Q42",8,"MTH11-8-5",1,"Find the A.M. of 6 and 10.","6 और 10 का A.M. निकालिए।",
    ["8","16","60","4"],["8","16","60","4"],"A","(6+10)/2 = 8.","(6+10)/2 = 8।");
  add("MTH-Q43",8,"MTH11-8-5",2,"Find the G.M. of 4 and 9.","4 और 9 का G.M. निकालिए।",
    ["6","6.5","36","13"],["6","6.5","36","13"],"A","√36 = 6.","√36 = 6।");
  add("MTH-Q44",8,"MTH11-8-5",2,"Find the G.M. of 2 and 18.","2 और 18 का G.M. निकालिए।",
    ["6","10","36","20"],["6","10","36","20"],"A","√36 = 6.","√36 = 6।");
  add("MTH-Q45",8,"MTH11-8-5",2,"For any two positive numbers, which is always true?","किसी भी दो positive numbers के लिए, हमेशा क्या सच है?",
    ["A.M. < G.M.","A.M. ≥ G.M.","A.M. = G.M. always","G.M. > A.M. always"],["A.M. < G.M.","A.M. ≥ G.M.","A.M. = G.M. हमेशा","G.M. > A.M. हमेशा"],"B","A.M. is never smaller than G.M.","A.M. कभी G.M. से छोटा नहीं होता।");
  add("MTH-Q46",8,"MTH11-8-5",3,"Find the A.M. and G.M. of 3 and 27, and state which is bigger.","3 और 27 का A.M. और G.M. निकालिए, और बताइए कौन बड़ा है।",
    ["A.M.=15, G.M.=9, A.M. bigger","A.M.=9, G.M.=15","A.M.=G.M.=12","A.M.=15, G.M.=15"],["A.M.=15, G.M.=9, A.M. बड़ा","A.M.=9, G.M.=15","A.M.=G.M.=12","A.M.=15, G.M.=15"],"A","(3+27)/2=15, √81=9, and 15≥9.","(3+27)/2=15, √81=9, और 15≥9।");
  add("MTH-Q47",8,"MTH11-8-5",3,"When are A.M. and G.M. of two positive numbers equal?","दो positive numbers का A.M. और G.M. कब बराबर होते हैं?",
    ["Never","Only when the two numbers are equal","Only when one number is 0","Always"],["कभी नहीं","सिर्फ़ जब दोनों numbers बराबर हों","सिर्फ़ जब एक number 0 हो","हमेशा"],"B","Equal numbers make both means the same value.","बराबर numbers दोनों means को एक जैसा बना देते हैं।");
  add("MTH-Q48",8,"MTH11-8-5",4,"Find the G.M. of 1 and 100.","1 और 100 का G.M. निकालिए।",
    ["10","50.5","100","1"],["10","50.5","100","1"],"A","√100 = 10.","√100 = 10।");

  /* ---- Ch8 Topic 6: Recognising A.P. vs G.P. (9) ---- */
  add("MTH-Q49",8,"MTH11-8-6",1,"Is 4,8,12,16 an A.P. or G.P.?","क्या 4,8,12,16 एक A.P. है या G.P.?",
    ["A.P.","G.P.","Both","Neither"],["A.P.","G.P.","दोनों","कोई नहीं"],"A","Differences are all 4; ratios are not constant.","अंतर सब 4 हैं; ratios स्थिर नहीं हैं।");
  add("MTH-Q50",8,"MTH11-8-6",1,"Is 4,8,16,32 an A.P. or G.P.?","क्या 4,8,16,32 एक A.P. है या G.P.?",
    ["A.P.","G.P.","Both","Neither"],["A.P.","G.P.","दोनों","कोई नहीं"],"B","Ratios are all 2.","Ratios सब 2 हैं।");
  add("MTH-Q51",8,"MTH11-8-6",1,"To test for an A.P., you check whether consecutive terms have a constant:","A.P. जाँचने के लिए, लगातार terms का स्थिर क्या देखते हैं?",
    ["ratio","difference","product","sum"],["ratio","difference","product","sum"],"B","A constant difference defines an A.P.","स्थिर difference A.P. को defines करता है।");
  add("MTH-Q52",8,"MTH11-8-6",2,"To test for a G.P., you check whether consecutive terms have a constant:","G.P. जाँचने के लिए, लगातार terms का स्थिर क्या देखते हैं?",
    ["difference","ratio","sum","square"],["difference","ratio","sum","square"],"B","A constant ratio defines a G.P.","स्थिर ratio G.P. को defines करता है।");
  add("MTH-Q53",8,"MTH11-8-6",2,"Is 2,4,7,11 an A.P., G.P., or neither?","क्या 2,4,7,11 A.P., G.P., या कोई नहीं है?",
    ["A.P.","G.P.","neither","both"],["A.P.","G.P.","कोई नहीं","दोनों"],"C","Differences (2,3,4) and ratios both vary.","अंतर (2,3,4) और ratios दोनों बदलते हैं।");
  add("MTH-Q54",8,"MTH11-8-6",2,"Is 1,4,9,16 an A.P., G.P., or neither?","क्या 1,4,9,16 A.P., G.P., या कोई नहीं है?",
    ["A.P.","G.P.","neither","both"],["A.P.","G.P.","कोई नहीं","दोनों"],"C","Neither the differences nor the ratios stay constant.","न अंतर स्थिर रहते हैं, न ratios।");
  add("MTH-Q55",8,"MTH11-8-6",3,"Is 100,90,80,70 an A.P. or G.P.?","क्या 100,90,80,70 एक A.P. है या G.P.?",
    ["A.P.","G.P.","neither","both"],["A.P.","G.P.","कोई नहीं","दोनों"],"A","Differences are all −10.","अंतर सब −10 हैं।");
  add("MTH-Q56",8,"MTH11-8-6",3,"Is 81,27,9,3 an A.P. or G.P.?","क्या 81,27,9,3 एक A.P. है या G.P.?",
    ["A.P.","G.P.","neither","both"],["A.P.","G.P.","कोई नहीं","दोनों"],"B","Ratios are all 1/3.","Ratios सब 1/3 हैं।");
  add("MTH-Q57",8,"MTH11-8-6",3,"A sequence has a constant ratio of 1. What can you say about it?","एक sequence का स्थिर ratio 1 है। इसके बारे में क्या कह सकते हैं?",
    ["It must be a G.P. only","It is both an A.P. (d=0) and a G.P. (r=1)","It cannot be an A.P.","It is undefined"],["यह सिर्फ़ G.P. होगी","यह A.P. (d=0) और G.P. (r=1) दोनों है","यह A.P. नहीं हो सकती","यह undefined है"],"B","Every term is equal, so both d=0 and r=1 fit.","हर term बराबर है, इसलिए d=0 और r=1 दोनों फ़िट होते हैं।");

  /* ---- Ch8 Topic 7: Applying Sequences and Series (12) ---- */
  add("MTH-Q58",8,"MTH11-8-7",2,"A town's population is 200 and doubles every year. After n years, the population is:","एक शहर की population 200 है और हर साल दोगुनी होती है। n सालों बाद, population है:",
    ["200+2n","200×2ⁿ","200ⁿ","2×200ⁿ"],["200+2n","200×2ⁿ","200ⁿ","2×200ⁿ"],"B","Doubling n times is ×2ⁿ.","n बार दोगुना होना ×2ⁿ है।");
  add("MTH-Q59",8,"MTH11-8-7",2,"Using the formula, find the population after 3 years, starting at 200 and doubling yearly.","Formula से, 200 से शुरू होकर हर साल दोगुनी होने पर 3 साल बाद population निकालिए।",
    ["800","1600","600","1200"],["800","1600","600","1200"],"B","200×2³ = 1600.","200×2³ = 1600।");
  add("MTH-Q60",8,"MTH11-8-7",2,"A bank account starts with ₹1000 and grows by a fixed percentage each year. This growth is best modelled by a:","एक bank account ₹1000 से शुरू होता है और हर साल एक तय percentage से बढ़ता है। यह growth किससे सबसे अच्छा मॉडल होता है?",
    ["A.P.","G.P.","neither","a constant sequence"],["A.P.","G.P.","कोई नहीं","एक constant sequence"],"B","A fixed percentage growth is a fixed ratio, r.","Fixed percentage growth एक fixed ratio, r है।");
  add("MTH-Q61",8,"MTH11-8-7",3,"Paper starts 0.2 mm thick and doubles in thickness with each fold. How thick after 4 folds?","कागज़ 0.2 mm मोटा शुरू होता है और हर fold पर मोटाई दोगुनी होती है। 4 folds के बाद कितना मोटा है?",
    ["1.6mm","3.2mm","0.8mm","6.4mm"],["1.6mm","3.2mm","0.8mm","6.4mm"],"B","0.2×2⁴ = 3.2mm.","0.2×2⁴ = 3.2mm।");
  add("MTH-Q62",8,"MTH11-8-7",3,"A ball dropped from 100 m bounces back to half its height each time. How high after the 3rd bounce?","100 m से गिरी एक गेंद हर बार आधी ऊँचाई तक उछलती है। तीसरे उछाल के बाद कितनी ऊँची है?",
    ["25m","12.5m","50m","6.25m"],["25m","12.5m","50m","6.25m"],"B","100×0.5³ = 12.5m.","100×0.5³ = 12.5m।");
  add("MTH-Q63",8,"MTH11-8-7",3,"If a rumour is told to 3 new people every hour, starting with 1 person, how many know it after 4 hours (aₙ=3ⁿ)?","अगर एक अफ़वाह हर घंटे 3 नए लोगों को बताई जाती है, 1 व्यक्ति से शुरू होकर, 4 घंटे बाद कितने लोग जानते हैं (aₙ=3ⁿ)?",
    ["12","81","64","27"],["12","81","64","27"],"B","3⁴ = 81.","3⁴ = 81।");
  add("MTH-Q64",8,"MTH11-8-7",4,"A car depreciates to 90% of its value each year, starting at ₹10,00,000. What is its value after 2 years?","एक car हर साल अपनी value का 90% रह जाती है, ₹10,00,000 से शुरू होकर। 2 साल बाद value क्या है?",
    ["₹8,00,000","₹8,10,000","₹9,00,000","₹8,90,000"],["₹8,00,000","₹8,10,000","₹9,00,000","₹8,90,000"],"B","10,00,000×0.9² = 8,10,000.","10,00,000×0.9² = 8,10,000।");
  add("MTH-Q65",8,"MTH11-8-7",4,"Which grows faster in the long run: an A.P. adding 100 each term, or a G.P. multiplying by 1.5 each term?","लम्बे समय में कौन तेज़ बढ़ता है: हर term में 100 जोड़ने वाला A.P., या हर term में 1.5 से गुणा करने वाला G.P.?",
    ["The A.P., always","The G.P., eventually overtakes it","They grow at the same rate","Cannot be determined"],["A.P., हमेशा","G.P., आख़िरकार आगे निकल जाता है","दोनों एक जैसे बढ़ते हैं","तय नहीं किया जा सकता"],"B","Multiplicative growth always eventually overtakes additive growth.","Multiplicative growth हमेशा आख़िरकार additive growth से आगे निकल जाती है।");
  add("MTH-Q66",8,"MTH11-8-7",4,"Every week, a store's sales increase by a factor of 1.1 (10% growth). This pattern is an example of a:","हर हफ़्ते, एक store की sales 1.1 factor से बढ़ती हैं (10% growth)। यह pattern किसका उदाहरण है?",
    ["A.P.","G.P.","neither","a constant sequence"],["A.P.","G.P.","कोई नहीं","एक constant sequence"],"B","A constant growth factor is a G.P.'s common ratio.","स्थिर growth factor, G.P. का common ratio है।");
  add("MTH-Q67",8,"MTH11-8-7",5,"A chess-board legend: 1 grain on square 1, doubling each square, up to square 10. How many grains on square 10?","शतरंज की एक कहानी: चौकोर 1 पर 1 दाना, हर चौकोर पर दोगुना, चौकोर 10 तक। चौकोर 10 पर कितने दाने हैं?",
    ["512","1024","256","2048"],["512","1024","256","2048"],"A","1×2⁹ = 512.","1×2⁹ = 512।");
  add("MTH-Q68",8,"MTH11-8-7",5,"Using the sum formula, find the total grains on the first 10 squares of the chessboard legend (a=1, r=2).","Sum formula से, शतरंज की कहानी के पहले 10 चौकोरों के कुल दाने निकालिए (a=1, r=2)।",
    ["1023","1024","512","2046"],["1023","1024","512","2046"],"A","1×(2¹⁰−1)/(2−1) = 1023.","1×(2¹⁰−1)/(2−1) = 1023।");
  add("MTH-Q69",8,"MTH11-8-7",5,"Bacteria in a dish triple every hour, starting from 50. Using aₙ=50×3ⁿ⁻¹, how many bacteria are there at hour 4 (n=4)?","एक dish में bacteria हर घंटे तीन गुना होते हैं, 50 से शुरू होकर। aₙ=50×3ⁿ⁻¹ से, घंटे 4 (n=4) पर कितने bacteria हैं?",
    ["1350","4050","450","150"],["1350","4050","450","150"],"A","50×3³ = 50×27 = 1350.","50×3³ = 50×27 = 1350।");

  /* ---- Ch9 Topic 0: Revise (5) ---- */
  add("MTH-L01",9,"MTH11-9-0",1,"Distance formula between (x1,y1) and (x2,y2) is:","(x1,y1) और (x2,y2) के बीच distance formula है:",
    ["√((x2−x1)+(y2−y1))","√((x2−x1)²+(y2−y1)²)","(x2−x1)²+(y2−y1)²","(x1+x2)/2"],["√((x2−x1)+(y2−y1))","√((x2−x1)²+(y2−y1)²)","(x2−x1)²+(y2−y1)²","(x1+x2)/2"],"B","Pythagoras' theorem on the coordinate plane.","Coordinate plane पर Pythagoras' theorem।");
  add("MTH-L02",9,"MTH11-9-0",1,"Midpoint formula for (x1,y1) and (x2,y2) is:","(x1,y1) और (x2,y2) का midpoint formula है:",
    ["(x1+x2, y1+y2)","((x1+x2)/2, (y1+y2)/2)","(x2−x1, y2−y1)","(x1×x2, y1×y2)"],["(x1+x2, y1+y2)","((x1+x2)/2, (y1+y2)/2)","(x2−x1, y2−y1)","(x1×x2, y1×y2)"],"B","Average the x's and the y's separately.","x को अलग average कीजिए, y को अलग।");
  add("MTH-L03",9,"MTH11-9-0",1,"Find the distance between (0,0) and (3,4).","(0,0) और (3,4) के बीच की distance निकालिए।",
    ["5","7","3","4"],["5","7","3","4"],"A","√(9+16) = 5.","√(9+16) = 5।");
  add("MTH-L04",9,"MTH11-9-0",2,"Find the midpoint of (2,4) and (6,8).","(2,4) और (6,8) का midpoint निकालिए।",
    ["(4,6)","(8,12)","(2,2)","(3,4)"],["(4,6)","(8,12)","(2,2)","(3,4)"],"A","((2+6)/2, (4+8)/2) = (4,6).","((2+6)/2, (4+8)/2) = (4,6)।");
  add("MTH-L05",9,"MTH11-9-0",2,"Find the distance between (1,1) and (4,5).","(1,1) और (4,5) के बीच की distance निकालिए।",
    ["5","4","3","7"],["5","4","3","7"],"A","√(9+16) = 5.","√(9+16) = 5।");

  /* ---- Ch9 Topic 1: Slope of a Line (8) ---- */
  add("MTH-L06",9,"MTH11-9-1",1,"The slope formula for points (x1,y1) and (x2,y2) is:","(x1,y1) और (x2,y2) points का slope formula है:",
    ["(y2−y1)/(x2−x1)","(x2−x1)/(y2−y1)","(y2+y1)/(x2+x1)","y2−y1"],["(y2−y1)/(x2−x1)","(x2−x1)/(y2−y1)","(y2+y1)/(x2+x1)","y2−y1"],"A","Change in y over change in x.","x में बदलाव पर y में बदलाव।");
  add("MTH-L07",9,"MTH11-9-1",1,"A horizontal line has slope:","Horizontal line का slope है:",
    ["0","1","undefined","negative"],["0","1","undefined","negative"],"A","No rise for any run.","किसी भी run में कोई rise नहीं।");
  add("MTH-L08",9,"MTH11-9-1",1,"A vertical line has slope:","Vertical line का slope है:",
    ["0","1","undefined","negative"],["0","1","undefined","negative"],"C","The formula would divide by zero.","Formula 0 से divide करेगा।");
  add("MTH-L09",9,"MTH11-9-1",2,"Find the slope through (0,0) and (2,6).","(0,0) और (2,6) से गुज़रती line का slope निकालिए।",
    ["2","3","6","12"],["2","3","6","12"],"B","6/2 = 3.","6/2 = 3।");
  add("MTH-L10",9,"MTH11-9-1",2,"Find the slope through (2,3) and (5,3).","(2,3) और (5,3) से गुज़रती line का slope निकालिए।",
    ["0","1","3","undefined"],["0","1","3","undefined"],"A","(3−3)/(5−2) = 0.","(3−3)/(5−2) = 0।");
  add("MTH-L11",9,"MTH11-9-1",2,"Find the slope through (2,1) and (2,7).","(2,1) और (2,7) से गुज़रती line का slope निकालिए।",
    ["0","6","undefined","3"],["0","6","undefined","3"],"C","Dividing by (2−2)=0 is not allowed.","(2−2)=0 से divide करना allowed नहीं।");
  add("MTH-L12",9,"MTH11-9-1",3,"Find the slope through (−1,2) and (3,−6).","(−1,2) और (3,−6) से गुज़रती line का slope निकालिए।",
    ["−2","2","−4","4"],["−2","2","−4","4"],"A","(−6−2)/(3−(−1)) = −8/4 = −2.","(−6−2)/(3−(−1)) = −8/4 = −2।");
  add("MTH-L13",9,"MTH11-9-1",3,"A positive slope means the line:","Positive slope का मतलब है line:",
    ["falls left to right","climbs left to right","is horizontal","is vertical"],["बाएँ से दाएँ गिरती है","बाएँ से दाएँ चढ़ती है","horizontal है","vertical है"],"B","y increases as x increases.","x बढ़ने पर y भी बढ़ता है।");

  /* ---- Ch9 Topic 2: Parallel and Perpendicular Lines (8) ---- */
  add("MTH-L14",9,"MTH11-9-2",1,"Two lines are parallel when their slopes are:","दो lines parallel होती हैं जब उनके slopes:",
    ["equal","negative reciprocals","both zero","both undefined"],["बराबर हों","negative reciprocals हों","दोनों zero हों","दोनों undefined हों"],"A","Same steepness, never meeting.","एक जैसी ढलान, कभी नहीं मिलतीं।");
  add("MTH-L15",9,"MTH11-9-2",1,"Two lines are perpendicular when the product of their slopes is:","दो lines perpendicular होती हैं जब उनके slopes का गुणनफल:",
    ["0","1","−1","undefined"],["0","1","−1","undefined"],"C","The defining perpendicular condition.","Perpendicular की परिभाषित condition।");
  add("MTH-L16",9,"MTH11-9-2",1,"A line with slope 3 is parallel to a line with slope:","Slope 3 वाली line, किस slope वाली line के parallel है?",
    ["3","−3","1/3","−1/3"],["3","−3","1/3","−1/3"],"A","Parallel lines share the same slope.","Parallel lines का slope एक जैसा होता है।");
  add("MTH-L17",9,"MTH11-9-2",2,"A line with slope 2 is perpendicular to a line with slope:","Slope 2 वाली line, किस slope वाली line के perpendicular है?",
    ["2","−2","1/2","−1/2"],["2","−2","1/2","−1/2"],"D","2 × (−1/2) = −1.","2 × (−1/2) = −1।");
  add("MTH-L18",9,"MTH11-9-2",2,"Are lines with slopes 5 and 5 parallel or perpendicular?","Slopes 5 और 5 वाली lines parallel हैं या perpendicular?",
    ["parallel","perpendicular","neither","both"],["parallel","perpendicular","कोई नहीं","दोनों"],"A","Equal slopes.","बराबर slopes।");
  add("MTH-L19",9,"MTH11-9-2",2,"Are lines with slopes 3 and −1/3 parallel or perpendicular?","Slopes 3 और −1/3 वाली lines parallel हैं या perpendicular?",
    ["parallel","perpendicular","neither","both"],["parallel","perpendicular","कोई नहीं","दोनों"],"B","3 × (−1/3) = −1.","3 × (−1/3) = −1।");
  add("MTH-L20",9,"MTH11-9-2",3,"A line has slope −2/5. Find the slope of a perpendicular line.","एक line का slope −2/5 है। Perpendicular line का slope निकालिए।",
    ["5/2","−5/2","2/5","−2/5"],["5/2","−5/2","2/5","−2/5"],"A","Flip and negate: −2/5 → 5/2.","पलटिए और negate कीजिए: −2/5 → 5/2।");
  add("MTH-L21",9,"MTH11-9-2",3,"A line has slope 0 (horizontal). What is the slope of a line perpendicular to it?","एक line का slope 0 है (horizontal)। इसके perpendicular line का slope क्या है?",
    ["0","1","undefined (vertical)","−1"],["0","1","undefined (vertical)","−1"],"C","A vertical line is perpendicular to a horizontal one.","Vertical line, horizontal line के perpendicular होती है।");

  /* ---- Ch9 Topic 3: Angle Between Two Lines (8) ---- */
  add("MTH-L22",9,"MTH11-9-3",1,"The formula for the angle between two lines uses which trig function?","दो lines के बीच angle के formula में कौन-सा trig function इस्तेमाल होता है?",
    ["sin","cos","tan","sec"],["sin","cos","tan","sec"],"C","tan θ = |(m2−m1)/(1+m1m2)|.","tan θ = |(m2−m1)/(1+m1m2)|।");
  add("MTH-L23",9,"MTH11-9-3",1,"In the angle formula, if m1=m2, what is θ?","Angle formula में, अगर m1=m2, θ क्या है?",
    ["90°","0°","45°","undefined"],["90°","0°","45°","undefined"],"B","The numerator becomes 0.","Numerator 0 हो जाता है।");
  add("MTH-L24",9,"MTH11-9-3",2,"Find the angle between lines with slopes 1 and 0.","Slopes 1 और 0 वाली lines के बीच का angle निकालिए।",
    ["30°","45°","60°","90°"],["30°","45°","60°","90°"],"B","tan θ = |(0−1)/(1+0)| = 1.","tan θ = |(0−1)/(1+0)| = 1।");
  add("MTH-L25",9,"MTH11-9-3",2,"Find tan θ for lines with slopes 2 and 3.","Slopes 2 और 3 वाली lines का tan θ निकालिए।",
    ["1/5","1/7","5/7","7"],["1/5","1/7","5/7","7"],"B","|(3−2)/(1+6)| = 1/7.","|(3−2)/(1+6)| = 1/7।");
  add("MTH-L26",9,"MTH11-9-3",2,"If m1×m2=−1, the angle between the lines is:","अगर m1×m2=−1, lines के बीच का angle है:",
    ["0°","45°","90°","180°"],["0°","45°","90°","180°"],"C","The perpendicular condition.","Perpendicular की condition।");
  add("MTH-L27",9,"MTH11-9-3",3,"Find the angle between lines with slopes √3 and 0.","Slopes √3 और 0 वाली lines के बीच का angle निकालिए।",
    ["30°","45°","60°","90°"],["30°","45°","60°","90°"],"C","tan θ = |(0−√3)/(1+0)| = √3, so θ=60°.","tan θ = |(0−√3)/(1+0)| = √3, इसलिए θ=60°।");
  add("MTH-L28",9,"MTH11-9-3",3,"Why do the absolute value bars appear in the angle formula?","Angle formula में absolute value bars क्यों हैं?",
    ["To avoid negative angles","To make the formula longer","They are optional","They change the formula's meaning"],["Negative angles से बचने के लिए","Formula को लम्बा बनाने के लिए","ये optional हैं","ये formula का मतलब बदल देते हैं"],"A","Keeps the smaller, positive angle between the lines.","Lines के बीच का छोटा, positive angle रखता है।");
  add("MTH-L29",9,"MTH11-9-3",4,"Find the angle between lines with slopes −1 and 0.","Slopes −1 और 0 वाली lines के बीच का angle निकालिए।",
    ["45°","90°","135°","60°"],["45°","90°","135°","60°"],"A","tan θ = |(0−(−1))/(1+0)| = 1.","tan θ = |(0−(−1))/(1+0)| = 1।");

  /* ---- Ch9 Topic 4: Point-Slope and Two-Point Forms (9) ---- */
  add("MTH-L30",9,"MTH11-9-4",1,"Point-slope form is:","Point-slope form है:",
    ["y−y1=m(x−x1)","y=mx+c","x/a+y/b=1","Ax+By+C=0"],["y−y1=m(x−x1)","y=mx+c","x/a+y/b=1","Ax+By+C=0"],"A","One point plus slope, directly.","एक point और slope, सीधे।");
  add("MTH-L31",9,"MTH11-9-4",1,"In two-point form, the first step is to find the:","Two-point form में, पहला step क्या पाना है?",
    ["y-intercept","slope","x-intercept","general form"],["y-intercept","slope","x-intercept","general form"],"B","Then apply point-slope with either point.","फिर किसी भी point के साथ point-slope लगाइए।");
  add("MTH-L32",9,"MTH11-9-4",2,"Find the equation of a line through (2,3) with slope 4.","(2,3) से गुज़रती slope 4 वाली line का equation निकालिए।",
    ["y=4x−5","y=4x+5","y=4x−11","y=4x+11"],["y=4x−5","y=4x+5","y=4x−11","y=4x+11"],"A","y−3=4(x−2) simplifies to y=4x−5.","y−3=4(x−2), simplify होने पर y=4x−5।");
  add("MTH-L33",9,"MTH11-9-4",2,"Find the equation of a line through (0,0) with slope 5.","(0,0) से गुज़रती slope 5 वाली line का equation निकालिए।",
    ["y=5x","y=x+5","y=5","y=x−5"],["y=5x","y=x+5","y=5","y=x−5"],"A","y−0=5(x−0).","y−0=5(x−0)।");
  add("MTH-L34",9,"MTH11-9-4",2,"Find the slope of the line through (2,5) and (6,13) before writing its equation.","(2,5) और (6,13) से गुज़रती line का equation लिखने से पहले, slope निकालिए।",
    ["2","4","8","1/2"],["2","4","8","1/2"],"A","(13−5)/(6−2) = 8/4 = 2.","(13−5)/(6−2) = 8/4 = 2।");
  add("MTH-L35",9,"MTH11-9-4",3,"Find the equation of the line through (2,5) and (6,13).","(2,5) और (6,13) से गुज़रती line का equation निकालिए।",
    ["y=2x+1","y=2x−1","y=2x+5","y=2x−5"],["y=2x+1","y=2x−1","y=2x+5","y=2x−5"],"A","y−5=2(x−2) simplifies to y=2x+1.","y−5=2(x−2), simplify होने पर y=2x+1।");
  add("MTH-L36",9,"MTH11-9-4",3,"Find the equation of the line through (−2,0) with slope −3.","(−2,0) से गुज़रती slope −3 वाली line का equation निकालिए।",
    ["y=−3x−6","y=−3x+6","y=−3x−2","y=−3x+2"],["y=−3x−6","y=−3x+6","y=−3x−2","y=−3x+2"],"A","y−0=−3(x−(−2)) = −3x−6.","y−0=−3(x−(−2)) = −3x−6।");
  add("MTH-L37",9,"MTH11-9-4",3,"Find the equation of the line through (1,2) and (4,2).","(1,2) और (4,2) से गुज़रती line का equation निकालिए।",
    ["y=2","x=2","y=2x","y=0"],["y=2","x=2","y=2x","y=0"],"A","Same y-value both points — a horizontal line.","दोनों points का y-value एक जैसा — horizontal line।");
  add("MTH-L38",9,"MTH11-9-4",4,"Find the equation of the line through (3,−1) and (3,5).","(3,−1) और (3,5) से गुज़रती line का equation निकालिए।",
    ["x=3","y=3","x=−1","y=5"],["x=3","y=3","x=−1","y=5"],"A","Same x-value both points — a vertical line.","दोनों points का x-value एक जैसा — vertical line।");

  /* ---- Ch9 Topic 5: Slope-Intercept and Intercept Forms (9) ---- */
  add("MTH-L39",9,"MTH11-9-5",1,"In y=mx+c, c represents the:","y=mx+c में, c क्या है?",
    ["slope","x-intercept","y-intercept","angle"],["slope","x-intercept","y-intercept","angle"],"C","Where the line crosses the y-axis.","Line जहाँ y-axis को काटती है।");
  add("MTH-L40",9,"MTH11-9-5",1,"For y=3x+7, the slope is:","y=3x+7 के लिए, slope है:",
    ["3","7","10","−3"],["3","7","10","−3"],"A","The coefficient of x.","x का coefficient।");
  add("MTH-L41",9,"MTH11-9-5",1,"For y=3x+7, the y-intercept is:","y=3x+7 के लिए, y-intercept है:",
    ["3","7","10","−3"],["3","7","10","−3"],"B","The constant term.","Constant term।");
  add("MTH-L42",9,"MTH11-9-5",2,"The intercept form of a line is:","Line का intercept form है:",
    ["y=mx+c","x/a+y/b=1","y−y1=m(x−x1)","Ax+By+C=0"],["y=mx+c","x/a+y/b=1","y−y1=m(x−x1)","Ax+By+C=0"],"B","a is the x-intercept, b the y-intercept.","a, x-intercept है, b, y-intercept है।");
  add("MTH-L43",9,"MTH11-9-5",2,"For a line with x-intercept 5 and y-intercept 2, the intercept form is:","x-intercept 5 और y-intercept 2 वाली line का intercept form है:",
    ["x/5+y/2=1","x/2+y/5=1","5x+2y=1","x+y=7"],["x/5+y/2=1","x/2+y/5=1","5x+2y=1","x+y=7"],"A","a=5, b=2, substituted directly.","a=5, b=2, सीधे रखे गए।");
  add("MTH-L44",9,"MTH11-9-5",2,"Find the equation of a line with x-intercept 6 and y-intercept 2.","x-intercept 6 और y-intercept 2 वाली line का equation निकालिए।",
    ["x+3y=6","x+3y=12","3x+y=6","x+y=8"],["x+3y=6","x+3y=12","3x+y=6","x+y=8"],"A","x/6+y/2=1, multiply by 6: x+3y=6.","x/6+y/2=1, 6 से गुणा: x+3y=6।");
  add("MTH-L45",9,"MTH11-9-5",3,"A line has equation y=2x−5. What are its slope and y-intercept?","Line का equation y=2x−5 है। इसका slope और y-intercept क्या हैं?",
    ["slope=2, y-intercept=−5","slope=−5, y-intercept=2","slope=2, y-intercept=5","slope=−2, y-intercept=−5"],["slope=2, y-intercept=−5","slope=−5, y-intercept=2","slope=2, y-intercept=5","slope=−2, y-intercept=−5"],"A","Read m and c straight off the equation.","m और c को equation से सीधे पढ़िए।");
  add("MTH-L46",9,"MTH11-9-5",3,"Find the equation of a line with x-intercept −2 and y-intercept 4.","x-intercept −2 और y-intercept 4 वाली line का equation निकालिए।",
    ["2x−y+4=0","2x−y−4=0","2x+y+4=0","x−2y+4=0"],["2x−y+4=0","2x−y−4=0","2x+y+4=0","x−2y+4=0"],"A","x/(−2)+y/4=1 rearranges to 2x−y+4=0.","x/(−2)+y/4=1, फिर से लिखने पर 2x−y+4=0।");
  add("MTH-L47",9,"MTH11-9-5",4,"Convert y=½x+3 into intercept form.","y=½x+3 को intercept form में बदलिए।",
    ["x/(−6)+y/3=1","x/6+y/3=1","x/(−6)+y/(−3)=1","x/3+y/6=1"],["x/(−6)+y/3=1","x/6+y/3=1","x/(−6)+y/(−3)=1","x/3+y/6=1"],"A","Rearranging gives x-intercept −6 and y-intercept 3.","फिर से लिखने पर x-intercept −6 और y-intercept 3 मिलते हैं।");

  /* ---- Ch9 Topic 6: General Form and Point-to-Line Distance (10) ---- */
  add("MTH-L48",9,"MTH11-9-6",1,"The general form of a line's equation is:","Line के equation का general form है:",
    ["y=mx+c","Ax+By+C=0","x/a+y/b=1","y−y1=m(x−x1)"],["y=mx+c","Ax+By+C=0","x/a+y/b=1","y−y1=m(x−x1)"],"B","Every line can be written this way.","हर line को इस तरह लिखा जा सकता है।");
  add("MTH-L49",9,"MTH11-9-6",1,"From Ax+By+C=0, the slope is:","Ax+By+C=0 से, slope है:",
    ["A/B","−A/B","B/A","−B/A"],["A/B","−A/B","B/A","−B/A"],"B","Solve for y to see the slope.","y के लिए हल करके slope देखिए।");
  add("MTH-L50",9,"MTH11-9-6",1,"Find the slope of the line 2x+3y−6=0.","Line 2x+3y−6=0 का slope निकालिए।",
    ["2/3","−2/3","3/2","−3/2"],["2/3","−2/3","3/2","−3/2"],"B","−A/B = −2/3.","−A/B = −2/3।");
  add("MTH-L51",9,"MTH11-9-6",2,"The distance formula from point (x1,y1) to line Ax+By+C=0 is:","Point (x1,y1) से line Ax+By+C=0 तक की distance formula है:",
    ["|Ax1+By1+C|/√(A²+B²)","(Ax1+By1+C)/(A+B)","√(A²+B²)/(Ax1+By1+C)","|A+B+C|"],["|Ax1+By1+C|/√(A²+B²)","(Ax1+By1+C)/(A+B)","√(A²+B²)/(Ax1+By1+C)","|A+B+C|"],"A","Substitute the point, take absolute value, divide by √(A²+B²).","Point रखिए, absolute value लीजिए, √(A²+B²) से divide कीजिए।");
  add("MTH-L52",9,"MTH11-9-6",2,"Find the distance of (0,0) from the line 3x+4y−10=0.","(0,0) की line 3x+4y−10=0 से distance निकालिए।",
    ["2","10","5","1"],["2","10","5","1"],"A","|0+0−10|/5 = 2.","|0+0−10|/5 = 2।");
  add("MTH-L53",9,"MTH11-9-6",2,"Find the distance of (2,1) from the line 4x+3y−11=0.","(2,1) की line 4x+3y−11=0 से distance निकालिए।",
    ["0","1","2","5"],["0","1","2","5"],"A","|8+3−11|/5 = 0/5 = 0 — the point lies on the line.","|8+3−11|/5 = 0/5 = 0 — point line पर है।");
  add("MTH-L54",9,"MTH11-9-6",3,"Find the distance of (1,1) from the line 3x+4y−12=0.","(1,1) की line 3x+4y−12=0 से distance निकालिए।",
    ["1","5","12","0"],["1","5","12","0"],"A","|3+4−12|/5 = 5/5 = 1.","|3+4−12|/5 = 5/5 = 1।");
  add("MTH-L55",9,"MTH11-9-6",3,"Why is the numerator of the distance formula an absolute value?","Distance formula के numerator में absolute value क्यों है?",
    ["To ensure distance is never negative","To make the formula longer","It changes the line's slope","There is no reason"],["ताकि distance कभी negative न हो","Formula को लम्बा बनाने के लिए","यह line का slope बदल देता है","कोई reason नहीं"],"A","A distance should always be 0 or positive.","Distance हमेशा 0 या positive होनी चाहिए।");
  add("MTH-L56",9,"MTH11-9-6",4,"Find the distance of (0,0) from the line 5x+12y−13=0.","(0,0) की line 5x+12y−13=0 से distance निकालिए।",
    ["1","13","5","12"],["1","13","5","12"],"A","|0+0−13|/√(25+144) = 13/13 = 1.","|0+0−13|/√(25+144) = 13/13 = 1।");
  add("MTH-L57",9,"MTH11-9-6",4,"A point lies exactly ON a line if its distance from the line is:","एक point line पर ठीक तभी है जब उसकी line से distance है:",
    ["1","0","undefined","negative"],["1","0","undefined","negative"],"B","Zero distance means no gap at all.","Zero distance का मतलब है कोई gap नहीं।");

  /* ---- Ch9 Topic 7: Distance Between Two Parallel Lines (12) ---- */
  add("MTH-L58",9,"MTH11-9-7",2,"Two parallel lines in general form share the same:","General form में दो parallel lines का एक जैसा क्या होता है?",
    ["C value","A and B values","y-intercept","x-intercept"],["C value","A और B values","y-intercept","x-intercept"],"B","Same slope means matching A and B.","एक जैसा slope मतलब मिलते A और B।");
  add("MTH-L59",9,"MTH11-9-7",2,"The formula for distance between parallel lines Ax+By+C1=0 and Ax+By+C2=0 is:","Parallel lines Ax+By+C1=0 और Ax+By+C2=0 के बीच distance का formula है:",
    ["|C1−C2|/√(A²+B²)","|C1+C2|/√(A²+B²)","(C1−C2)/(A−B)","√(C1²+C2²)"],["|C1−C2|/√(A²+B²)","|C1+C2|/√(A²+B²)","(C1−C2)/(A−B)","√(C1²+C2²)"],"A","Only the C's differ, so only they matter here.","सिर्फ़ C अलग हैं, इसलिए यहाँ सिर्फ़ वही मायने रखते हैं।");
  add("MTH-L60",9,"MTH11-9-7",2,"Find the distance between 2x+3y+1=0 and 2x+3y+11=0.","2x+3y+1=0 और 2x+3y+11=0 के बीच की distance निकालिए।",
    ["10/√13","12/√13","10","2"],["10/√13","12/√13","10","2"],"A","|1−11|/√(4+9) = 10/√13.","|1−11|/√(4+9) = 10/√13।");
  add("MTH-L61",9,"MTH11-9-7",3,"Find the distance between 3x+4y−12=0 and 3x+4y+8=0.","3x+4y−12=0 और 3x+4y+8=0 के बीच की distance निकालिए।",
    ["4","20","5","1"],["4","20","5","1"],"A","|−12−8|/5 = 20/5 = 4.","|−12−8|/5 = 20/5 = 4।");
  add("MTH-L62",9,"MTH11-9-7",3,"Find the distance between x+y−5=0 and x+y−9=0.","x+y−5=0 और x+y−9=0 के बीच की distance निकालिए।",
    ["4/√2","4","2√2","8"],["4/√2","4","2√2","8"],"C","|−5−(−9)|/√2 = 4/√2 = 2√2.","|−5−(−9)|/√2 = 4/√2 = 2√2।");
  add("MTH-L63",9,"MTH11-9-7",3,"Are the lines 2x+5y−3=0 and 2x+5y+7=0 parallel?","क्या lines 2x+5y−3=0 और 2x+5y+7=0 parallel हैं?",
    ["Yes, same A and B","No, different A and B","Cannot tell","Only if C matches"],["हाँ, एक जैसे A और B","नहीं, अलग A और B","कह नहीं सकते","सिर्फ़ C मिले तो"],"A","Matching A and B means matching slope.","मिलते A और B मतलब मिलता slope।");
  add("MTH-L64",9,"MTH11-9-7",4,"Find the distance between 6x+8y−4=0 and 3x+4y+6=0. (Hint: match the coefficients first.)","6x+8y−4=0 और 3x+4y+6=0 के बीच की distance निकालिए। (संकेत: पहले coefficients मिलाइए।)",
    ["Divide the first by 2 to get 3x+4y−2=0, then distance = |−2−6|/5 = 8/5","They cannot be compared","distance = |−4−6|/10","distance = 2"],["पहले को 2 से divide करके 3x+4y−2=0 पाइए, फिर distance = |−2−6|/5 = 8/5","इन्हें compare नहीं कर सकते","distance = |−4−6|/10","distance = 2"],"A","Halving the first equation makes A,B match the second.","पहले equation को आधा करने पर A,B दूसरे से मेल खाते हैं।");
  add("MTH-L65",9,"MTH11-9-7",4,"Using the simplified forms from the previous question, compute the distance.","पिछले question के simplified forms से, distance निकालिए।",
    ["8/5","4/5","10/5","2"],["8/5","4/5","10/5","2"],"A","|−2−6|/5 = 8/5.","|−2−6|/5 = 8/5।");
  add("MTH-L66",9,"MTH11-9-7",4,"If two lines have different A:B ratios, are they parallel?","अगर दो lines के A:B ratios अलग हैं, क्या वे parallel हैं?",
    ["Yes, always","No, they must intersect somewhere","Only sometimes","Cannot tell"],["हाँ, हमेशा","नहीं, वे कहीं न कहीं ज़रूर काटेंगी","सिर्फ़ कभी-कभी","कह नहीं सकते"],"B","Different slopes mean they are not parallel, so they meet.","अलग slopes का मतलब है वे parallel नहीं, इसलिए मिलती हैं।");
  add("MTH-L67",9,"MTH11-9-7",5,"Find the distance between the parallel lines x+2y−3=0 and x+2y+7=0.","Parallel lines x+2y−3=0 और x+2y+7=0 के बीच की distance निकालिए।",
    ["10/√5","2√5","10","5"],["10/√5","2√5","10","5"],"B","|−3−7|/√5 = 10/√5 = 2√5.","|−3−7|/√5 = 10/√5 = 2√5।");
  add("MTH-L68",9,"MTH11-9-7",5,"A road is given by 3x+4y−15=0. Its parallel road is 4 units away, with a more negative C than −15. Find its equation.","एक road 3x+4y−15=0 है। इसकी parallel road 4 units दूर है, जिसका C, −15 से ज़्यादा negative है। इसका equation निकालिए।",
    ["3x+4y+5=0","3x+4y−35=0","3x+4y−15=0","3x+4y+35=0"],["3x+4y+5=0","3x+4y−35=0","3x+4y−15=0","3x+4y+35=0"],"B","|−15−C|=20 gives C=5 or C=−35; the more negative option is −35.","|−15−C|=20 से C=5 या C=−35 मिलता है; ज़्यादा negative option −35 है।");
  add("MTH-L69",9,"MTH11-9-7",5,"Verify: find the distance between 3x+4y−15=0 and 3x+4y−35=0.","जाँचिए: 3x+4y−15=0 और 3x+4y−35=0 के बीच की distance निकालिए।",
    ["4","8","20","1"],["4","8","20","1"],"A","|−15−(−35)|/5 = 20/5 = 4.","|−15−(−35)|/5 = 20/5 = 4।");

  /* ---- Ch10 Topic 0: Revise (5) ---- */
  add("MTH-K01",10,"MTH11-10-0",1,"A circle is the set of all points:","Circle किन सभी points का set है?",
    ["at a fixed distance from a line","at a fixed distance from one point","forming a straight path","equally spaced on a grid"],["एक line से तय दूरी पर","एक point से तय दूरी पर","एक सीधे रास्ते पर","grid पर बराबर फ़ासले पर"],"B","Distance from the centre stays constant.","Centre से दूरी स्थिर रहती है।");
  add("MTH-K02",10,"MTH11-10-0",1,"The fixed point in a circle's definition is called the:","Circle की परिभाषा में तय point को क्या कहते हैं?",
    ["radius","centre","diameter","focus"],["radius","centre","diameter","focus"],"B","Every point on the circle is equidistant from the centre.","Circle पर हर point centre से बराबर दूर है।");
  add("MTH-K03",10,"MTH11-10-0",1,"The equation of a circle centred at the origin with radius r is:","Origin पर centred, radius r वाले circle का equation है:",
    ["x+y=r","x²+y²=r²","x²−y²=r²","xy=r"],["x+y=r","x²+y²=r²","x²−y²=r²","xy=r"],"B","The squared distance formula.","Squared distance formula।");
  add("MTH-K04",10,"MTH11-10-0",2,"Find the equation of a circle centred at (0,0) with radius 3.","(0,0) पर centred, radius 3 वाले circle का equation निकालिए।",
    ["x²+y²=3","x²+y²=9","x²+y²=6","x+y=3"],["x²+y²=3","x²+y²=9","x²+y²=6","x+y=3"],"B","3² = 9.","3² = 9।");
  add("MTH-K05",10,"MTH11-10-0",2,"Find the radius of the circle x²+y²=49.","Circle x²+y²=49 का radius निकालिए।",
    ["49","7","24.5","14"],["49","7","24.5","14"],"B","√49 = 7.","√49 = 7।");

  /* ---- Ch10 Topic 1: What is a Conic Section? (8) ---- */
  add("MTH-K06",10,"MTH11-10-1",1,"Conic sections are formed by:","Conic sections कैसे बनते हैं?",
    ["drawing circles","slicing a cone with a plane","measuring angles","adding two lines"],["circles बनाकर","cone को plane से काटकर","angles नापकर","दो lines जोड़कर"],"B","Different cutting angles give different curves.","अलग-अलग काटने के angles अलग curves देते हैं।");
  add("MTH-K07",10,"MTH11-10-1",1,"A straight, flat cut through a cone gives a:","Cone में सीधा, flat कट क्या देता है?",
    ["parabola","circle","hyperbola","point"],["parabola","circle","hyperbola","point"],"B","A level cut is a circle.","सीधा कट circle है।");
  add("MTH-K08",10,"MTH11-10-1",1,"A tilted cut through a cone gives an:","Cone में तिरछा कट क्या देता है?",
    ["circle","ellipse","hyperbola","line"],["circle","ellipse","hyperbola","line"],"B","A slanted cut stretches the circle into an ellipse.","तिरछा कट circle को ellipse में खींच देता है।");
  add("MTH-K09",10,"MTH11-10-1",2,"A cut parallel to the cone's slanted side gives a:","Cone की ढलानदार साइड के समानांतर कट क्या देता है?",
    ["circle","ellipse","parabola","hyperbola"],["circle","ellipse","parabola","hyperbola"],"C","This special angle gives a parabola.","यह ख़ास angle parabola देता है।");
  add("MTH-K10",10,"MTH11-10-1",2,"A cut through both nappes of a double cone gives a:","Double cone के दोनों nappes से गुज़रता कट क्या देता है?",
    ["circle","ellipse","parabola","hyperbola"],["circle","ellipse","parabola","hyperbola"],"D","Both halves give the two branches of a hyperbola.","दोनों हिस्से hyperbola की दो branches देते हैं।");
  add("MTH-K11",10,"MTH11-10-1",2,"How many conic sections are there in total?","कुल कितने conic sections हैं?",
    ["2","3","4","5"],["2","3","4","5"],"C","Circle, ellipse, parabola, hyperbola.","Circle, ellipse, parabola, hyperbola।");
  add("MTH-K12",10,"MTH11-10-1",3,"Which conic section has two separate branches?","किस conic section की दो अलग branches हैं?",
    ["circle","ellipse","parabola","hyperbola"],["circle","ellipse","parabola","hyperbola"],"D","Only the hyperbola splits into two curves.","सिर्फ़ hyperbola दो curves में बँटता है।");
  add("MTH-K13",10,"MTH11-10-1",3,"Which conic section is like a special case of the ellipse?","किस conic section को ellipse का एक special case कह सकते हैं?",
    ["parabola","hyperbola","circle","point"],["parabola","hyperbola","circle","point"],"C","A circle is an ellipse where both axes are equal.","Circle एक ellipse है जिसकी दोनों axes बराबर हैं।");

  /* ---- Ch10 Topic 2: Circle Standard Equation (8) ---- */
  add("MTH-K14",10,"MTH11-10-2",1,"The standard equation of a circle with centre (h,k) and radius r is:","Centre (h,k) और radius r वाले circle का standard equation है:",
    ["x²+y²=r²","(x−h)²+(y−k)²=r²","(x+h)²+(y+k)²=r²","hx+ky=r"],["x²+y²=r²","(x−h)²+(y−k)²=r²","(x+h)²+(y+k)²=r²","hx+ky=r"],"B","Distance from (h,k) to any point on the circle is r.","(h,k) से circle पर किसी भी point की दूरी r है।");
  add("MTH-K15",10,"MTH11-10-2",1,"Find the centre of the circle (x−3)²+(y+2)²=16.","Circle (x−3)²+(y+2)²=16 का centre निकालिए।",
    ["(3,−2)","(3,2)","(−3,−2)","(−3,2)"],["(3,−2)","(3,2)","(−3,−2)","(−3,2)"],"A","Flip the signs inside each bracket.","हर bracket के अंदर के signs पलटिए।");
  add("MTH-K16",10,"MTH11-10-2",1,"Find the radius of the circle (x−3)²+(y+2)²=16.","Circle (x−3)²+(y+2)²=16 का radius निकालिए।",
    ["16","4","8","2"],["16","4","8","2"],"B","√16 = 4.","√16 = 4।");
  add("MTH-K17",10,"MTH11-10-2",2,"Find the equation of a circle with centre (−3,2) and radius 4.","Centre (−3,2) और radius 4 वाले circle का equation निकालिए।",
    ["(x+3)²+(y−2)²=16","(x−3)²+(y+2)²=16","(x+3)²+(y−2)²=4","(x−3)²+(y−2)²=16"],["(x+3)²+(y−2)²=16","(x−3)²+(y+2)²=16","(x+3)²+(y−2)²=4","(x−3)²+(y−2)²=16"],"A","Flip the centre's signs into the brackets.","Centre के signs को brackets में पलटिए।");
  add("MTH-K18",10,"MTH11-10-2",2,"To find the centre from a general equation like x²+y²+6x−4y+4=0, you must:","x²+y²+6x−4y+4=0 जैसे general equation से centre पाने के लिए, क्या करना होगा?",
    ["factor completely","complete the square","take the square root immediately","divide by x"],["पूरी तरह factor करना","complete the square करना","तुरंत square root लेना","x से divide करना"],"B","This reveals the (x−h)² and (y−k)² shape.","यह (x−h)² और (y−k)² shape सामने लाता है।");
  add("MTH-K19",10,"MTH11-10-2",2,"Complete the square: x²+6x becomes:","Complete the square: x²+6x बन जाता है:",
    ["(x+3)²−9","(x+6)²−36","(x+3)²−6","(x+3)²+9"],["(x+3)²−9","(x+6)²−36","(x+3)²−6","(x+3)²+9"],"A","Half of 6 is 3; subtract 3² to balance.","6 का आधा 3 है; balance के लिए 3² घटाइए।");
  add("MTH-K20",10,"MTH11-10-2",3,"Find the centre and radius of x²+y²−6x−8y=0.","x²+y²−6x−8y=0 का centre और radius निकालिए।",
    ["centre(3,4), radius 5","centre(−3,−4), radius 5","centre(3,4), radius 25","centre(6,8), radius 5"],["centre(3,4), radius 5","centre(−3,−4), radius 5","centre(3,4), radius 25","centre(6,8), radius 5"],"A","(x−3)²+(y−4)²=9+16=25, so radius=5.","(x−3)²+(y−4)²=9+16=25, इसलिए radius=5।");
  add("MTH-K21",10,"MTH11-10-2",4,"Find the centre and radius of x²+y²+4x−6y−12=0.","x²+y²+4x−6y−12=0 का centre और radius निकालिए।",
    ["centre(−2,3), radius 5","centre(2,−3), radius 5","centre(−2,3), radius 25","centre(−4,6), radius 5"],["centre(−2,3), radius 5","centre(2,−3), radius 5","centre(−2,3), radius 25","centre(−4,6), radius 5"],"A","(x+2)²+(y−3)²=12+4+9=25, so radius=5.","(x+2)²+(y−3)²=12+4+9=25, इसलिए radius=5।");

  /* ---- Ch10 Topic 3: Parabola Definition and Standard Equations (9) ---- */
  add("MTH-K22",10,"MTH11-10-3",1,"A parabola is the set of points equally distant from:","Parabola किन points से बराबर दूर सभी points का set है?",
    ["two points","a point and a line","two lines","the origin only"],["दो points","एक point और एक line","दो lines","सिर्फ़ origin"],"B","Focus (point) and directrix (line).","Focus (point) और directrix (line)।");
  add("MTH-K23",10,"MTH11-10-3",1,"The fixed point in a parabola's definition is the:","Parabola की परिभाषा में तय point को क्या कहते हैं?",
    ["vertex","focus","directrix","centre"],["vertex","focus","directrix","centre"],"B","The point every curve-point is measured against.","वह point जिससे curve का हर point मापा जाता है।");
  add("MTH-K24",10,"MTH11-10-3",1,"The fixed line in a parabola's definition is the:","Parabola की परिभाषा में तय line को क्या कहते हैं?",
    ["axis","vertex","directrix","focus"],["axis","vertex","directrix","focus"],"C","The line every curve-point is also measured against.","वह line जिससे curve का हर point भी मापा जाता है।");
  add("MTH-K25",10,"MTH11-10-3",2,"For y²=4ax, the focus is at:","y²=4ax के लिए, focus कहाँ है?",
    ["(0,a)","(a,0)","(−a,0)","(0,−a)"],["(0,a)","(a,0)","(−a,0)","(0,−a)"],"B","On the x-axis, distance a from the vertex.","x-axis पर, vertex से दूरी a।");
  add("MTH-K26",10,"MTH11-10-3",2,"For y²=4ax, the directrix is:","y²=4ax के लिए, directrix है:",
    ["x=a","x=−a","y=a","y=−a"],["x=a","x=−a","y=a","y=−a"],"B","Vertical line on the opposite side of the vertex from the focus.","Vertex के उस पार वाली vertical line, focus के उलट।");
  add("MTH-K27",10,"MTH11-10-3",2,"Which standard form opens downward?","कौन-सा standard form नीचे की ओर खुलता है?",
    ["y²=4ax","y²=−4ax","x²=4ay","x²=−4ay"],["y²=4ax","y²=−4ax","x²=4ay","x²=−4ay"],"D","x² squared, negative sign, opens down.","x² squared, negative sign, नीचे खुलता है।");
  add("MTH-K28",10,"MTH11-10-3",3,"Find a for the parabola y²=12x.","Parabola y²=12x के लिए a निकालिए।",
    ["3","6","12","4"],["3","6","12","4"],"A","4a=12, so a=3.","4a=12, इसलिए a=3।");
  add("MTH-K29",10,"MTH11-10-3",3,"Find the focus of the parabola y²=12x.","Parabola y²=12x का focus निकालिए।",
    ["(3,0)","(0,3)","(−3,0)","(12,0)"],["(3,0)","(0,3)","(−3,0)","(12,0)"],"A","Focus is (a,0) with a=3.","Focus है (a,0), a=3 के साथ।");
  add("MTH-K30",10,"MTH11-10-3",4,"Find the directrix of the parabola x²=16y.","Parabola x²=16y का directrix निकालिए।",
    ["y=−4","x=−4","y=4","x=4"],["y=−4","x=−4","y=4","x=4"],"A","4a=16 so a=4; directrix is y=−a=−4.","4a=16 इसलिए a=4; directrix है y=−a=−4।");

  /* ---- Ch10 Topic 4: Parabola Backward and Latus Rectum (9) ---- */
  add("MTH-K31",10,"MTH11-10-4",1,"The latus rectum of a parabola passes through the:","Parabola का latus rectum किससे गुज़रता है?",
    ["vertex","focus","directrix only","centre"],["vertex","focus","directrix केवल","centre"],"B","It is a chord through the focus.","यह focus से गुज़रती chord है।");
  add("MTH-K32",10,"MTH11-10-4",1,"The latus rectum is always ___ to the axis of the parabola.","Latus rectum, parabola के axis के हमेशा ___ होता है।",
    ["parallel","perpendicular","at 45°","equal"],["parallel","perpendicular","45° पर","equal"],"B","It crosses the axis at a right angle.","यह axis को एक right angle पर काटता है।");
  add("MTH-K33",10,"MTH11-10-4",1,"The length of the latus rectum for y²=4ax is:","y²=4ax के latus rectum की length है:",
    ["a","2a","4a","a²"],["a","2a","4a","a²"],"C","Always 4a for this standard form.","इस standard form के लिए हमेशा 4a।");
  add("MTH-K34",10,"MTH11-10-4",2,"Find the latus rectum length for y²=20x.","y²=20x के लिए latus rectum की length निकालिए।",
    ["5","10","20","40"],["5","10","20","40"],"C","4a=20 directly.","सीधे 4a=20।");
  add("MTH-K35",10,"MTH11-10-4",2,"A parabola has focus (5,0) and vertex (0,0). Find a.","एक parabola का focus (5,0) है और vertex (0,0) है। a निकालिए।",
    ["5","10","2.5","0"],["5","10","2.5","0"],"A","a is the vertex-to-focus distance.","a, vertex से focus तक की दूरी है।");
  add("MTH-K36",10,"MTH11-10-4",2,"A parabola has focus (5,0) and vertex (0,0). Find its equation.","एक parabola का focus (5,0) है और vertex (0,0) है। इसका equation निकालिए।",
    ["y²=20x","y²=10x","y²=5x","x²=20y"],["y²=20x","y²=10x","y²=5x","x²=20y"],"A","4a=20 with a=5.","4a=20, a=5 के साथ।");
  add("MTH-K37",10,"MTH11-10-4",3,"A parabola has focus (0,−3) and vertex (0,0). Find its equation.","एक parabola का focus (0,−3) है और vertex (0,0) है। इसका equation निकालिए।",
    ["x²=−12y","x²=12y","y²=−12x","x²=−6y"],["x²=−12y","x²=12y","y²=−12x","x²=−6y"],"A","Focus below vertex means opening down: x²=−4ay with a=3.","Focus, vertex से नीचे है यानी नीचे खुलता है: x²=−4ay, a=3 के साथ।");
  add("MTH-K38",10,"MTH11-10-4",3,"A parabola has vertex (0,0) and directrix x=6. Find its equation.","एक parabola का vertex (0,0) है और directrix x=6 है। इसका equation निकालिए।",
    ["y²=−24x","y²=24x","x²=24y","y²=−6x"],["y²=−24x","y²=24x","x²=24y","y²=−6x"],"A","Directrix x=a for y²=−4ax; here a=6.","y²=−4ax के लिए directrix x=a; यहाँ a=6।");
  add("MTH-K39",10,"MTH11-10-4",4,"A parabola has vertex (0,0) and directrix y=−5. Find its equation.","एक parabola का vertex (0,0) है और directrix y=−5 है। इसका equation निकालिए।",
    ["x²=20y","x²=−20y","y²=20x","x²=5y"],["x²=20y","x²=−20y","y²=20x","x²=5y"],"A","Directrix y=−a for x²=4ay; here a=5.","x²=4ay के लिए directrix y=−a; यहाँ a=5।");

  /* ---- Ch10 Topic 5: Ellipse Definition, Equation, Eccentricity (9) ---- */
  add("MTH-K40",10,"MTH11-10-5",1,"An ellipse is the set of points where the ___ of distances to two foci is constant.","Ellipse वे points हैं जहाँ दो foci से दूरियों का ___ स्थिर रहता है।",
    ["difference","sum","product","ratio"],["अंतर","योग","गुणनफल","ratio"],"B","This is the defining property.","यही परिभाषित property है।");
  add("MTH-K41",10,"MTH11-10-5",1,"For x²/a²+y²/b²=1 with a>b, the foci lie on the:","x²/a²+y²/b²=1 (a>b) के लिए, foci किस पर होते हैं?",
    ["y-axis","x-axis","origin only","both axes"],["y-axis","x-axis","सिर्फ़ origin","दोनों axes"],"B","Along the longer (major) axis.","लम्बे (major) axis के साथ।");
  add("MTH-K42",10,"MTH11-10-5",1,"The relationship between a, b, c for an ellipse is:","Ellipse के लिए a, b, c का संबंध है:",
    ["c²=a²+b²","c²=a²−b²","c²=b²−a²","c=a+b"],["c²=a²+b²","c²=a²−b²","c²=b²−a²","c=a+b"],"B","Subtraction, since c is smaller than a.","घटाव, क्योंकि c, a से छोटा है।");
  add("MTH-K43",10,"MTH11-10-5",2,"Eccentricity of an ellipse always satisfies:","Ellipse की eccentricity हमेशा किसे satisfy करती है?",
    ["e=0","e=1","0<e<1","e>1"],["e=0","e=1","0<e<1","e>1"],"C","Strictly between 0 and 1.","सख़्ती से 0 और 1 के बीच।");
  add("MTH-K44",10,"MTH11-10-5",2,"For x²/16+y²/4=1, find a and b.","x²/16+y²/4=1 के लिए, a और b निकालिए।",
    ["a=4, b=2","a=2, b=4","a=16, b=4","a=4, b=4"],["a=4, b=2","a=2, b=4","a=16, b=4","a=4, b=4"],"A","√16=4, √4=2.","√16=4, √4=2।");
  add("MTH-K45",10,"MTH11-10-5",2,"For x²/16+y²/4=1, find c.","x²/16+y²/4=1 के लिए, c निकालिए।",
    ["√12","20","12","2"],["√12","20","12","2"],"A","c²=16−4=12, so c=√12.","c²=16−4=12, इसलिए c=√12।");
  add("MTH-K46",10,"MTH11-10-5",3,"Find the eccentricity of the ellipse x²/16+y²/4=1 (using c=√12).","Ellipse x²/16+y²/4=1 की eccentricity निकालिए (c=√12 इस्तेमाल करके)।",
    ["√12/4 ≈ 0.866","4/√12","12/16","0.5"],["√12/4 ≈ 0.866","4/√12","12/16","0.5"],"A","e = c/a = √12/4.","e = c/a = √12/4।");
  add("MTH-K47",10,"MTH11-10-5",3,"An ellipse has a=10 and e=0.6. Find c.","एक ellipse का a=10 और e=0.6 है। c निकालिए।",
    ["6","16.7","0.06","60"],["6","16.7","0.06","60"],"A","c = e×a = 0.6×10 = 6.","c = e×a = 0.6×10 = 6।");
  add("MTH-K48",10,"MTH11-10-5",4,"An ellipse has a=10 and c=6. Find b.","एक ellipse का a=10 और c=6 है। b निकालिए।",
    ["8","4","64","16"],["8","4","64","16"],"A","b²=100−36=64, so b=8.","b²=100−36=64, इसलिए b=8।");

  /* ---- Ch10 Topic 6: Ellipse Latus Rectum (9) ---- */
  add("MTH-K49",10,"MTH11-10-6",1,"The formula for the latus rectum of an ellipse is:","Ellipse के latus rectum का formula है:",
    ["2a²/b","2b²/a","a²/b²","2ab"],["2a²/b","2b²/a","a²/b²","2ab"],"B","Twice b-squared over a.","b का square, दो गुना, a से divide।");
  add("MTH-K50",10,"MTH11-10-6",1,"For an ellipse with a=5 and b=4, find the latus rectum.","a=5 और b=4 वाले ellipse के लिए, latus rectum निकालिए।",
    ["32/5","25/4","16/5","40"],["32/5","25/4","16/5","40"],"A","2(16)/5 = 32/5.","2(16)/5 = 32/5।");
  add("MTH-K51",10,"MTH11-10-6",2,"For the ellipse x²/25+y²/9=1, find the latus rectum.","Ellipse x²/25+y²/9=1 के लिए, latus rectum निकालिए।",
    ["18/5","25/9","50/9","9/5"],["18/5","25/9","50/9","9/5"],"A","2(9)/5 = 18/5.","2(9)/5 = 18/5।");
  add("MTH-K52",10,"MTH11-10-6",2,"For the ellipse x²/36+y²/16=1, find a and b.","Ellipse x²/36+y²/16=1 के लिए, a और b निकालिए।",
    ["a=6, b=4","a=4, b=6","a=36, b=16","a=6, b=6"],["a=6, b=4","a=4, b=6","a=36, b=16","a=6, b=6"],"A","√36=6, √16=4.","√36=6, √16=4।");
  add("MTH-K53",10,"MTH11-10-6",2,"For the ellipse x²/36+y²/16=1, find the latus rectum.","Ellipse x²/36+y²/16=1 के लिए, latus rectum निकालिए।",
    ["16/3","6","36/16","4"],["16/3","6","36/16","4"],"A","2(16)/6 = 16/3.","2(16)/6 = 16/3।");
  add("MTH-K54",10,"MTH11-10-6",3,"As eccentricity increases toward 1, the ellipse becomes:","Eccentricity 1 की ओर बढ़ने पर, ellipse कैसा हो जाता है?",
    ["more circular","more stretched (thinner)","smaller","unchanged"],["ज़्यादा circular","ज़्यादा खिंचा हुआ (पतला)","छोटा","वैसा ही"],"B","Higher e means a flatter, more elongated shape.","ज़्यादा e का मतलब है ज़्यादा चपटा, लम्बा shape।");
  add("MTH-K55",10,"MTH11-10-6",3,"As eccentricity approaches 0, the ellipse becomes:","Eccentricity 0 के पास होने पर, ellipse कैसा हो जाता है?",
    ["a line","nearly circular","a parabola","a hyperbola"],["एक line","लगभग circular","एक parabola","एक hyperbola"],"B","a and b become nearly equal.","a और b लगभग बराबर हो जाते हैं।");
  add("MTH-K56",10,"MTH11-10-6",3,"For an ellipse with a=13, b=12, find c.","a=13, b=12 वाले ellipse के लिए, c निकालिए।",
    ["5","25","1","169"],["5","25","1","169"],"A","c²=169−144=25, so c=5.","c²=169−144=25, इसलिए c=5।");
  add("MTH-K57",10,"MTH11-10-6",4,"For an ellipse with a=13, b=12, find the eccentricity and latus rectum.","a=13, b=12 वाले ellipse के लिए, eccentricity और latus rectum निकालिए।",
    ["e=5/13, latus rectum=288/13","e=13/5, latus rectum=288/13","e=5/13, latus rectum=24/13","e=12/13, latus rectum=288/13"],["e=5/13, latus rectum=288/13","e=13/5, latus rectum=288/13","e=5/13, latus rectum=24/13","e=12/13, latus rectum=288/13"],"A","e=c/a=5/13; latus rectum=2(144)/13=288/13.","e=c/a=5/13; latus rectum=2(144)/13=288/13।");

  /* ---- Ch10 Topic 7: Hyperbola Standard Equation and Eccentricity (12) ---- */
  add("MTH-K58",10,"MTH11-10-7",1,"A hyperbola is the set of points where the ___ of distances to two foci is constant.","Hyperbola वे points हैं जहाँ दो foci से दूरियों का ___ स्थिर रहता है।",
    ["sum","difference","product","ratio"],["योग","अंतर","गुणनफल","ratio"],"B","This flips the ellipse's rule.","यह ellipse के rule को पलट देता है।");
  add("MTH-K59",10,"MTH11-10-7",1,"The relationship between a, b, c for a hyperbola is:","Hyperbola के लिए a, b, c का संबंध है:",
    ["c²=a²−b²","c²=a²+b²","c=a−b","c²=b²−a²"],["c²=a²−b²","c²=a²+b²","c=a−b","c²=b²−a²"],"B","Addition, unlike the ellipse's subtraction.","जोड़, ellipse के घटाव के उलट।");
  add("MTH-K60",10,"MTH11-10-7",1,"Eccentricity of a hyperbola always satisfies:","Hyperbola की eccentricity हमेशा किसे satisfy करती है?",
    ["e=1","0<e<1","e>1","e=0"],["e=1","0<e<1","e>1","e=0"],"C","Always greater than 1.","हमेशा 1 से ज़्यादा।");
  add("MTH-K61",10,"MTH11-10-7",2,"For x²/9−y²/16=1, find a and b.","x²/9−y²/16=1 के लिए, a और b निकालिए।",
    ["a=3, b=4","a=4, b=3","a=9, b=16","a=16, b=9"],["a=3, b=4","a=4, b=3","a=9, b=16","a=16, b=9"],"A","√9=3, √16=4.","√9=3, √16=4।");
  add("MTH-K62",10,"MTH11-10-7",2,"For x²/9−y²/16=1, find c.","x²/9−y²/16=1 के लिए, c निकालिए।",
    ["5","7","25","1"],["5","7","25","1"],"A","c²=9+16=25, so c=5.","c²=9+16=25, इसलिए c=5।");
  add("MTH-K63",10,"MTH11-10-7",2,"For x²/9−y²/16=1, find the eccentricity.","x²/9−y²/16=1 के लिए, eccentricity निकालिए।",
    ["5/3","3/5","5/16","16/5"],["5/3","3/5","5/16","16/5"],"A","e = c/a = 5/3.","e = c/a = 5/3।");
  add("MTH-K64",10,"MTH11-10-7",3,"The transverse axis of a hyperbola is the line through:","Hyperbola का transverse axis किस से गुज़रती line है?",
    ["the two foci","the two vertices only, not foci","the centre and one focus","neither foci nor vertices"],["दोनों foci","सिर्फ़ दोनों vertices, foci नहीं","centre और एक focus","न foci, न vertices"],"A","Both the foci and the vertices sit on this line.","इस line पर foci और vertices दोनों बैठते हैं।");
  add("MTH-K65",10,"MTH11-10-7",3,"For a hyperbola, if a=5 and c=13, find b.","Hyperbola के लिए, अगर a=5 और c=13, b निकालिए।",
    ["12","8","18","144"],["12","8","18","144"],"A","b²=169−25=144, so b=12.","b²=169−25=144, इसलिए b=12।");
  add("MTH-K66",10,"MTH11-10-7",3,"Find the latus rectum of the hyperbola x²/9−y²/16=1 (using 2b²/a).","Hyperbola x²/9−y²/16=1 का latus rectum निकालिए (2b²/a इस्तेमाल करके)।",
    ["32/3","9/16","3/32","128/3"],["32/3","9/16","3/32","128/3"],"A","2(16)/3 = 32/3.","2(16)/3 = 32/3।");
  add("MTH-K67",10,"MTH11-10-7",4,"A hyperbola has a=4, b=3. Find c and eccentricity.","Hyperbola का a=4, b=3 है। c और eccentricity निकालिए।",
    ["c=5, e=5/4","c=5, e=4/5","c=7, e=7/4","c=1, e=1/4"],["c=5, e=5/4","c=5, e=4/5","c=7, e=7/4","c=1, e=1/4"],"A","c²=16+9=25, c=5, e=5/4.","c²=16+9=25, c=5, e=5/4।");
  add("MTH-K68",10,"MTH11-10-7",4,"Which of these is true for both ellipse and hyperbola?","इनमें से क्या ellipse और hyperbola दोनों के लिए सच है?",
    ["e=c/a in both","c²=a²−b² in both","c²=a²+b² in both","both have e<1"],["दोनों में e=c/a","दोनों में c²=a²−b²","दोनों में c²=a²+b²","दोनों में e<1"],"A","Only the eccentricity formula's shape is shared; the c-relation differs.","सिर्फ़ eccentricity formula का shape साझा है; c का संबंध अलग है।");
  add("MTH-K69",10,"MTH11-10-7",5,"A hyperbola has foci (±5,0) and a=3. Find b and the equation.","Hyperbola के foci (±5,0) हैं और a=3 है। b और equation निकालिए।",
    ["b=4, x²/9−y²/16=1","b=4, x²/16−y²/9=1","b=16, x²/9−y²/256=1","b=4, x²/9+y²/16=1"],["b=4, x²/9−y²/16=1","b=4, x²/16−y²/9=1","b=16, x²/9−y²/256=1","b=4, x²/9+y²/16=1"],"A","c=5, a=3, b²=25−9=16, so b=4.","c=5, a=3, b²=25−9=16, इसलिए b=4।");

  /* ---- Ch11 Topic 0: Revise (8) ---- */
  add("MTH-D01",11,"MTH11-11-0",1,"In 2D, a point is named by how many coordinates?","2D में, एक point कितने coordinates से नाम पाता है?",
    ["1","2","3","4"],["1","2","3","4"],"B","x and y.","x और y।");
  add("MTH-D02",11,"MTH11-11-0",1,"In 3D, a point is named by how many coordinates?","3D में, एक point कितने coordinates से नाम पाता है?",
    ["1","2","3","4"],["1","2","3","4"],"C","x, y and z.","x, y और z।");
  add("MTH-D03",11,"MTH11-11-0",1,"The new axis added when moving from 2D to 3D is called the:","2D से 3D जाने पर जो नया axis जुड़ता है उसे क्या कहते हैं?",
    ["x-axis","y-axis","z-axis","w-axis"],["x-axis","y-axis","z-axis","w-axis"],"C","The z-axis captures height.","z-axis ऊँचाई पकड़ता है।");
  add("MTH-D04",11,"MTH11-11-0",2,"Find the 2D distance between (0,0) and (6,8).","(0,0) और (6,8) के बीच 2D distance निकालिए।",
    ["10","14","48","100"],["10","14","48","100"],"A","√(36+64) = 10.","√(36+64) = 10।");
  add("MTH-D05",11,"MTH11-11-0",2,"Find the 2D distance between (1,1) and (4,5).","(1,1) और (4,5) के बीच 2D distance निकालिए।",
    ["5","4","3","7"],["5","4","3","7"],"A","√(9+16) = 5.","√(9+16) = 5।");
  add("MTH-D06",11,"MTH11-11-0",2,"The z-coordinate typically represents:","z-coordinate आम तौर पर क्या दिखाता है?",
    ["left-right position","height above or below a plane","an angle","a colour"],["बाएँ-दाएँ position","किसी plane से ऊपर या नीचे की ऊँचाई","एक angle","एक रंग"],"B","The third, out-of-plane direction.","तीसरी, plane से बाहर वाली दिशा।");
  add("MTH-D07",11,"MTH11-11-0",3,"Find the 2D distance between (2,3) and (2,7).","(2,3) और (2,7) के बीच 2D distance निकालिए।",
    ["4","0","7","3"],["4","0","7","3"],"A","√(0+16) = 4.","√(0+16) = 4।");
  add("MTH-D08",11,"MTH11-11-0",3,"Why does the 3D distance formula have one more term than the 2D formula?","3D distance formula में 2D formula से एक term ज़्यादा क्यों है?",
    ["For no real reason","Because there is one more coordinate axis to account for","Because 3D points are bigger","It doesn't have an extra term"],["कोई असली reason नहीं","क्योंकि एक और coordinate axis का हिसाब रखना है","क्योंकि 3D points बड़े होते हैं","इसमें कोई extra term नहीं है"],"B","One new axis, one new squared term.","एक नया axis, एक नया squared term।");

  /* ---- Ch11 Topic 1: Axes and Octants (8) ---- */
  add("MTH-D09",11,"MTH11-11-1",1,"How many mutually perpendicular axes does 3D space use?","3D space कितने आपस में perpendicular axes इस्तेमाल करता है?",
    ["1","2","3","4"],["1","2","3","4"],"C","x, y and z.","x, y और z।");
  add("MTH-D10",11,"MTH11-11-1",1,"The point where all three axes meet is called the:","जहाँ तीनों axes मिलते हैं उसे क्या कहते हैं?",
    ["vertex","origin","centre","focus"],["vertex","origin","centre","focus"],"B","The starting point of the whole system.","पूरे system का शुरुआती point।");
  add("MTH-D11",11,"MTH11-11-1",1,"The coordinates of the origin are:","Origin के coordinates हैं:",
    ["(1,1,1)","(0,0,0)","(0,0)","undefined"],["(1,1,1)","(0,0,0)","(0,0)","undefined"],"B","All three axes read zero there.","वहाँ तीनों axes पर 0 है।");
  add("MTH-D12",11,"MTH11-11-1",2,"3D space is divided into how many octants?","3D space कितने octants में बँटा है?",
    ["4","6","8","12"],["4","6","8","12"],"C","Three planes create eight regions.","तीन planes आठ regions बनाते हैं।");
  add("MTH-D13",11,"MTH11-11-1",2,"Octant I has which sign pattern?","Octant I का sign pattern क्या है?",
    ["(+,+,+)","(−,−,−)","(+,−,+)","(−,+,−)"],["(+,+,+)","(−,−,−)","(+,−,+)","(−,+,−)"],"A","All three coordinates positive.","तीनों coordinates positive।");
  add("MTH-D14",11,"MTH11-11-1",2,"Octant VII has which sign pattern?","Octant VII का sign pattern क्या है?",
    ["(+,+,+)","(−,−,−)","(+,−,+)","(−,+,−)"],["(+,+,+)","(−,−,−)","(+,−,+)","(−,+,−)"],"B","All three coordinates negative.","तीनों coordinates negative।");
  add("MTH-D15",11,"MTH11-11-1",3,"Find the octant of the point (2,3,4).","Point (2,3,4) का octant निकालिए।",
    ["I","II","III","IV"],["I","II","III","IV"],"A","All positive coordinates.","सभी coordinates positive।");
  add("MTH-D16",11,"MTH11-11-1",3,"Find the octant of the point (−3,1,−2).","Point (−3,1,−2) का octant निकालिए।",
    ["II","VI","IV","VIII"],["II","VI","IV","VIII"],"B","Sign pattern (−,+,−) matches octant VI.","Sign pattern (−,+,−), octant VI से मेल खाता है।");

  /* ---- Ch11 Topic 2: Plotting a Point (8) ---- */
  add("MTH-D17",11,"MTH11-11-2",1,"To plot P(x,y,z), you walk along how many axes in turn?","P(x,y,z) plot करने के लिए, बारी-बारी कितने axes पर चलते हैं?",
    ["1","2","3","4"],["1","2","3","4"],"C","x, then y, then z.","पहले x, फिर y, फिर z।");
  add("MTH-D18",11,"MTH11-11-2",1,"Any point on the x-axis has the form:","x-axis पर किसी भी point का रूप है:",
    ["(x,0,0)","(0,y,0)","(0,0,z)","(x,y,0)"],["(x,0,0)","(0,y,0)","(0,0,z)","(x,y,0)"],"A","Only the x-coordinate is nonzero.","सिर्फ़ x-coordinate nonzero है।");
  add("MTH-D19",11,"MTH11-11-2",1,"Any point in the YZ-plane has the form:","YZ-plane में किसी भी point का रूप है:",
    ["(x,0,0)","(0,y,z)","(x,y,0)","(x,0,z)"],["(x,0,0)","(0,y,z)","(x,y,0)","(x,0,z)"],"B","The x-coordinate is zero on this plane.","इस plane पर x-coordinate 0 है।");
  add("MTH-D20",11,"MTH11-11-2",2,"Any point in the XY-plane has the form:","XY-plane में किसी भी point का रूप है:",
    ["(x,y,0)","(0,y,z)","(x,0,z)","(0,0,z)"],["(x,y,0)","(0,y,z)","(x,0,z)","(0,0,z)"],"A","The z-coordinate is zero on this plane.","इस plane पर z-coordinate 0 है।");
  add("MTH-D21",11,"MTH11-11-2",2,"Any point on the z-axis has the form:","z-axis पर किसी भी point का रूप है:",
    ["(x,0,0)","(0,y,0)","(0,0,z)","(x,y,z)"],["(x,0,0)","(0,y,0)","(0,0,z)","(x,y,z)"],"C","Only the z-coordinate is nonzero.","सिर्फ़ z-coordinate nonzero है।");
  add("MTH-D22",11,"MTH11-11-2",2,"A point P is (5,0,0). Where does it lie?","एक point P (5,0,0) है। यह कहाँ है?",
    ["origin","x-axis","y-axis","XY-plane"],["origin","x-axis","y-axis","XY-plane"],"B","Only x is nonzero.","सिर्फ़ x nonzero है।");
  add("MTH-D23",11,"MTH11-11-2",3,"A point P(4,6,7) has F directly on the XZ-plane. Find F.","Point P(4,6,7) का F, XZ-plane पर सीधे है। F निकालिए।",
    ["(4,0,7)","(0,6,7)","(4,6,0)","(4,0,0)"],["(4,0,7)","(0,6,7)","(4,6,0)","(4,0,0)"],"A","y=0 for the XZ-plane; keep x and z.","XZ-plane के लिए y=0; x और z रखिए।");
  add("MTH-D24",11,"MTH11-11-2",3,"A point P(2,4,5) has G on the YZ-plane. Find G.","Point P(2,4,5) का G, YZ-plane पर है। G निकालिए।",
    ["(0,4,5)","(2,0,5)","(2,4,0)","(2,0,0)"],["(0,4,5)","(2,0,5)","(2,4,0)","(2,0,0)"],"A","x=0 for the YZ-plane; keep y and z.","YZ-plane के लिए x=0; y और z रखिए।");

  /* ---- Ch11 Topic 3: Distance in 3D (8) ---- */
  add("MTH-D25",11,"MTH11-11-3",1,"The 3D distance formula between (x1,y1,z1) and (x2,y2,z2) is:","(x1,y1,z1) और (x2,y2,z2) के बीच 3D distance formula है:",
    ["√((x2−x1)²+(y2−y1)²)","√((x2−x1)²+(y2−y1)²+(z2−z1)²)","(x2−x1)+(y2−y1)+(z2−z1)","x2+y2+z2"],["√((x2−x1)²+(y2−y1)²)","√((x2−x1)²+(y2−y1)²+(z2−z1)²)","(x2−x1)+(y2−y1)+(z2−z1)","x2+y2+z2"],"B","Three squared differences, added, rooted.","तीन squared differences, जोड़े हुए, root लिए हुए।");
  add("MTH-D26",11,"MTH11-11-3",1,"The distance from the origin to (x,y,z) is:","Origin से (x,y,z) तक की distance है:",
    ["x+y+z","√(x²+y²+z²)","xyz","x²+y²+z²"],["x+y+z","√(x²+y²+z²)","xyz","x²+y²+z²"],"B","Origin's coordinates are all 0, simplifying the formula.","Origin के सभी coordinates 0 हैं, formula सरल हो जाता है।");
  add("MTH-D27",11,"MTH11-11-3",1,"Find the distance from the origin to (1,2,2).","Origin से (1,2,2) तक की distance निकालिए।",
    ["3","5","9","√5"],["3","5","9","√5"],"A","√(1+4+4) = √9 = 3.","√(1+4+4) = √9 = 3।");
  add("MTH-D28",11,"MTH11-11-3",2,"Find the distance between (0,0,0) and (2,3,6).","(0,0,0) और (2,3,6) के बीच की distance निकालिए।",
    ["7","11","49","√11"],["7","11","49","√11"],"A","√(4+9+36) = √49 = 7.","√(4+9+36) = √49 = 7।");
  add("MTH-D29",11,"MTH11-11-3",2,"Find the distance between (1,2,3) and (4,6,3).","(1,2,3) और (4,6,3) के बीच की distance निकालिए।",
    ["5","7","25","13"],["5","7","25","13"],"A","√(9+16+0) = √25 = 5.","√(9+16+0) = √25 = 5।");
  add("MTH-D30",11,"MTH11-11-3",2,"Find the distance between (1,−1,2) and (2,1,−1).","(1,−1,2) और (2,1,−1) के बीच की distance निकालिए।",
    ["√14","14","√22","22"],["√14","14","√22","22"],"A","√(1+4+9) = √14.","√(1+4+9) = √14।");
  add("MTH-D31",11,"MTH11-11-3",3,"Find the distance between (3,4,5) and (3,4,9).","(3,4,5) और (3,4,9) के बीच की distance निकालिए।",
    ["4","0","16","8"],["4","0","16","8"],"A","Only z differs: √(0+0+16) = 4.","सिर्फ़ z अलग है: √(0+0+16) = 4।");
  add("MTH-D32",11,"MTH11-11-3",3,"Find the distance between (−1,0,3) and (2,4,3).","(−1,0,3) और (2,4,3) के बीच की distance निकालिए।",
    ["5","25","3","7"],["5","25","3","7"],"A","√(9+16+0) = √25 = 5.","√(9+16+0) = √25 = 5।");

  /* ---- Ch11 Topic 4: Checking Collinearity (8) ---- */
  add("MTH-D33",11,"MTH11-11-4",1,"Three points are collinear if they:","तीन points collinear हैं अगर वे:",
    ["form a triangle","all lie on one straight line","are all equal","form a right angle"],["एक triangle बनाएँ","सब एक सीधी line पर हों","सब बराबर हों","एक right angle बनाएँ"],"B","Same straight path.","एक ही सीधा रास्ता।");
  add("MTH-D34",11,"MTH11-11-4",1,"The collinearity test using distances checks whether:","Distances से collinearity test क्या जाँचता है?",
    ["all three distances are equal","the two shorter distances add to the longest","all distances are zero","the distances form a right triangle"],["तीनों distances बराबर हों","दो छोटी distances मिलकर सबसे लम्बी बनें","सभी distances शून्य हों","distances एक right triangle बनाएँ"],"B","Only true when the middle point sits exactly on the line.","सिर्फ़ तभी सच जब बीच वाला point ठीक line पर हो।");
  add("MTH-D35",11,"MTH11-11-4",2,"If PQ=3, QR=4, PR=7, are P,Q,R collinear?","अगर PQ=3, QR=4, PR=7, क्या P,Q,R collinear हैं?",
    ["Yes, since 3+4=7","No","Cannot tell","Only if PQ=QR"],["हाँ, क्योंकि 3+4=7","नहीं","कह नहीं सकते","सिर्फ़ अगर PQ=QR हो"],"A","The shorter two add exactly to the longest.","दो छोटी मिलकर ठीक सबसे लम्बी बनती हैं।");
  add("MTH-D36",11,"MTH11-11-4",2,"If PQ=5, QR=5, PR=8, are P,Q,R collinear?","अगर PQ=5, QR=5, PR=8, क्या P,Q,R collinear हैं?",
    ["Yes, since 5+5=8","No, since 5+5≠8","Cannot tell","Only if all sides are equal"],["हाँ, क्योंकि 5+5=8","नहीं, क्योंकि 5+5≠8","कह नहीं सकते","सिर्फ़ अगर सभी sides बराबर हों"],"B","5+5=10, which does not equal 8.","5+5=10, जो 8 के बराबर नहीं है।");
  add("MTH-D37",11,"MTH11-11-4",2,"If PQ=2, QR=6, PR=8, are P,Q,R collinear?","अगर PQ=2, QR=6, PR=8, क्या P,Q,R collinear हैं?",
    ["Yes, since 2+6=8","No","Cannot tell","Only sometimes"],["हाँ, क्योंकि 2+6=8","नहीं","कह नहीं सकते","सिर्फ़ कभी-कभी"],"A","2+6=8 exactly.","2+6=8 बिल्कुल सही।");
  add("MTH-D38",11,"MTH11-11-4",3,"For points with PQ=√5, QR=2√5, PR=3√5, are they collinear?","PQ=√5, QR=2√5, PR=3√5 वाले points के लिए, क्या वे collinear हैं?",
    ["Yes, since √5+2√5=3√5","No","Cannot tell","Only if all distances are equal"],["हाँ, क्योंकि √5+2√5=3√5","नहीं","कह नहीं सकते","सिर्फ़ अगर सभी distances बराबर हों"],"A","The shorter two add exactly to the longest.","दो छोटी मिलकर ठीक सबसे लम्बी बनती हैं।");
  add("MTH-D39",11,"MTH11-11-4",3,"Why does PQ+QR=PR indicate collinearity, not just coincidence?","PQ+QR=PR, coincidence नहीं बल्कि collinearity क्यों दिखाता है?",
    ["Because this exact equality only happens when Q lies directly between P and R on a straight line","It doesn't really indicate anything","Because all triangles satisfy this","It only works in 2D"],["क्योंकि यह equality तभी होती है जब Q, P और R के बीच ठीक एक सीधी line पर हो","यह असल में कुछ नहीं दिखाता","क्योंकि सभी triangles यह satisfy करते हैं","यह सिर्फ़ 2D में काम करता है"],"A","Off a straight line, the triangle inequality is always strict.","सीधी line से बाहर, triangle inequality हमेशा सख़्त होती है।");
  add("MTH-D40",11,"MTH11-11-4",4,"For points with PQ=10, QR=15, PR=20, are they collinear?","PQ=10, QR=15, PR=20 वाले points के लिए, क्या वे collinear हैं?",
    ["Yes","No, since 10+15≠20","Cannot tell","Only if PR were 25"],["हाँ","नहीं, क्योंकि 10+15≠20","कह नहीं सकते","सिर्फ़ अगर PR 25 होता"],"B","10+15=25, not 20.","10+15=25, 20 नहीं।");

  /* ---- Ch11 Topic 5: Right Triangles and Other Shapes (8) ---- */
  add("MTH-D41",11,"MTH11-11-5",1,"To test if a triangle has a right angle using distances, you check:","Distances से triangle में right angle जाँचने के लिए, क्या देखते हैं?",
    ["if all sides are equal","if the Pythagoras relationship holds among the squared sides","if any two sides are parallel","if the perimeter is even"],["सभी sides बराबर हों या नहीं","squared sides के बीच Pythagoras वाला संबंध सही बैठे या नहीं","कोई दो sides parallel हों या नहीं","perimeter even हो या नहीं"],"B","The classic converse-of-Pythagoras test.","Classic converse-of-Pythagoras test।");
  add("MTH-D42",11,"MTH11-11-5",1,"In a right triangle, which side has the largest squared length?","Right triangle में, कौन-सी side का squared length सबसे बड़ा है?",
    ["any side","the side opposite the right angle (hypotenuse)","the shortest side","none, they're all equal"],["कोई भी side","right angle के सामने वाली side (hypotenuse)","सबसे छोटी side","कोई नहीं, सब बराबर हैं"],"B","The hypotenuse is always the longest side.","Hypotenuse हमेशा सबसे लम्बी side होती है।");
  add("MTH-D43",11,"MTH11-11-5",2,"Triangle sides squared are 9, 16, 25. Is it right-angled?","Triangle की sides squared 9, 16, 25 हैं। क्या यह right-angled है?",
    ["Yes, since 9+16=25","No","Cannot tell","Only if all sides are equal"],["हाँ, क्योंकि 9+16=25","नहीं","कह नहीं सकते","सिर्फ़ अगर सभी sides बराबर हों"],"A","9+16=25, matching the largest.","9+16=25, सबसे बड़े से मेल खाता है।");
  add("MTH-D44",11,"MTH11-11-5",2,"Triangle sides squared are 4, 9, 25. Is it right-angled?","Triangle की sides squared 4, 9, 25 हैं। क्या यह right-angled है?",
    ["Yes","No, since 4+9≠25","Cannot tell","Only sometimes"],["हाँ","नहीं, क्योंकि 4+9≠25","कह नहीं सकते","सिर्फ़ कभी-कभी"],"B","4+9=13, not 25.","4+9=13, 25 नहीं।");
  add("MTH-D45",11,"MTH11-11-5",2,"Triangle sides squared are 1, 1, 2. Is it right-angled?","Triangle की sides squared 1, 1, 2 हैं। क्या यह right-angled है?",
    ["Yes, since 1+1=2","No","Cannot tell","Only for 3D triangles"],["हाँ, क्योंकि 1+1=2","नहीं","कह नहीं सकते","सिर्फ़ 3D triangles के लिए"],"A","1+1=2 exactly.","1+1=2 बिल्कुल सही।");
  add("MTH-D46",11,"MTH11-11-5",3,"If a triangle's squared distances are 50, 50, 100, is it right-angled?","अगर triangle की squared distances 50, 50, 100 हैं, क्या यह right-angled है?",
    ["Yes, since 50+50=100","No","Cannot tell","Only if it's equilateral"],["हाँ, क्योंकि 50+50=100","नहीं","कह नहीं सकते","सिर्फ़ अगर यह equilateral हो"],"A","50+50=100, matching the largest.","50+50=100, सबसे बड़े से मेल खाता है।");
  add("MTH-D47",11,"MTH11-11-5",3,"A triangle has squared sides 3, 4, 8. Is it right-angled?","एक triangle की squared sides 3, 4, 8 हैं। क्या यह right-angled है?",
    ["Yes","No, since 3+4≠8","Cannot tell","Only if reordered"],["हाँ","नहीं, क्योंकि 3+4≠8","कह नहीं सकते","सिर्फ़ फिर से order करने पर"],"B","3+4=7, not 8.","3+4=7, 8 नहीं।");
  add("MTH-D48",11,"MTH11-11-5",4,"Besides testing for right angles, what else can distances between 3D points confirm?","Right angles जाँचने के अलावा, 3D points के बीच की distances और क्या बता सकती हैं?",
    ["Only right angles, nothing else","Whether points are collinear, and general shape properties","The colour of the points","Nothing useful"],["सिर्फ़ right angles, कुछ नहीं","क्या points collinear हैं, और shape की general properties","Points का रंग","कुछ काम का नहीं"],"B","Distance alone reveals a lot about a shape's structure.","सिर्फ़ distance किसी shape की structure के बारे में बहुत कुछ बता देती है।");

  /* ---- Ch12 Topic 0: Revise (5) ---- */
  add("MTH-M01",12,"MTH11-12-0",1,"Average speed is calculated as:","Average speed कैसे निकालते हैं?",
    ["distance × time","distance ÷ time","time ÷ distance","distance + time"],["distance × time","distance ÷ time","time ÷ distance","distance + time"],"B","Rate is a division.","Rate एक division है।");
  add("MTH-M02",12,"MTH11-12-0",1,"A car covers 200 km in 4 hours. Find its average speed.","एक car 200 km, 4 घंटों में तय करती है। इसकी average speed निकालिए।",
    ["800","50","196","204"],["800","50","196","204"],"B","200 ÷ 4 = 50.","200 ÷ 4 = 50।");
  add("MTH-M03",12,"MTH11-12-0",1,"Slope is calculated as:","Slope कैसे निकालते हैं?",
    ["rise × run","rise ÷ run","run ÷ rise","rise + run"],["rise × run","rise ÷ run","run ÷ rise","rise + run"],"B","Change in y over change in x.","x में बदलाव पर y में बदलाव।");
  add("MTH-M04",12,"MTH11-12-0",2,"A car covers 240 km in 3 hours. Find its average speed.","एक car 240 km, 3 घंटों में तय करती है। इसकी average speed निकालिए।",
    ["720","80","237","243"],["720","80","237","243"],"B","240 ÷ 3 = 80.","240 ÷ 3 = 80।");
  add("MTH-M05",12,"MTH11-12-0",2,"Average rate of change and slope are:","Average rate of change और slope हैं:",
    ["unrelated concepts","the same calculation in different contexts","always different formulas","only used in physics"],["असंबंधित concepts","अलग contexts में एक जैसी calculation","हमेशा अलग formulas","सिर्फ़ physics में इस्तेमाल"],"B","Both are rise over run, in disguise.","दोनों rise over run हैं, बस अलग रूप में।");

  /* ---- Ch12 Topic 1: The Idea of a Limit (8) ---- */
  add("MTH-M06",12,"MTH11-12-1",1,"A limit describes:","Limit क्या बताता है?",
    ["what a function equals exactly","what a function approaches","only whole numbers","the domain of a function"],["function क्या ठीक-ठीक बराबर है","function किस value के पास पहुँचता है","सिर्फ़ whole numbers","function का domain"],"B","The value the function heads toward.","वह value जिस ओर function जाता है।");
  add("MTH-M07",12,"MTH11-12-1",1,"lim(x→a) f(x) asks:","lim(x→a) f(x) क्या पूछता है?",
    ["what f(a) equals","what f(x) approaches as x gets close to a","the derivative of f at a","the domain of f"],["f(a) क्या है","x, a के पास आने पर f(x) किस पास पहुँचता है","a पर f का derivative","f का domain"],"B","Approaching, not necessarily equalling.","पास पहुँचना, ज़रूरी नहीं बराबर होना।");
  add("MTH-M08",12,"MTH11-12-1",1,"For f(x)=(x²−4)/(x−2), direct substitution of x=2 gives:","f(x)=(x²−4)/(x−2) में सीधे x=2 रखने पर मिलता है:",
    ["4","0/0 (undefined)","2","0"],["4","0/0 (undefined)","2","0"],"B","Both top and bottom become 0.","ऊपर और नीचे दोनों 0 हो जाते हैं।");
  add("MTH-M09",12,"MTH11-12-1",2,"Simplify (x²−4)/(x−2) for x≠2.","x≠2 के लिए (x²−4)/(x−2) simplify कीजिए।",
    ["x+2","x−2","x²−2","2x"],["x+2","x−2","x²−2","2x"],"A","Factor and cancel (x−2).","(x−2) को factor करके cancel कीजिए।");
  add("MTH-M10",12,"MTH11-12-1",2,"Find lim(x→2) (x²−4)/(x−2).","lim(x→2) (x²−4)/(x−2) निकालिए।",
    ["0","undefined","4","2"],["0","undefined","4","2"],"C","Simplify to x+2, then substitute x=2.","x+2 में simplify करके x=2 रखिए।");
  add("MTH-M11",12,"MTH11-12-1",2,"A function can have a limit at a point even if:","एक function किसी point पर limit रख सकता है भले ही:",
    ["the function is undefined there","the function is always defined there","the limit never equals the function value","limits never exist"],["वहाँ function undefined हो","वहाँ function हमेशा defined हो","limit कभी function value के बराबर न हो","limits कभी नहीं होते"],"A","The 'hole' example shows this exactly.","'Hole' वाला उदाहरण ठीक यही दिखाता है।");
  add("MTH-M12",12,"MTH11-12-1",3,"Find lim(x→5) (x²−25)/(x−5).","lim(x→5) (x²−25)/(x−5) निकालिए।",
    ["0","10","25","5"],["0","10","25","5"],"B","Simplifies to x+5, then 5+5=10.","x+5 में simplify होकर 5+5=10।");
  add("MTH-M13",12,"MTH11-12-1",3,"Find lim(x→−3) (x²−9)/(x+3).","lim(x→−3) (x²−9)/(x+3) निकालिए।",
    ["−6","6","0","9"],["−6","6","0","9"],"A","Simplifies to x−3, then −3−3=−6.","x−3 में simplify होकर −3−3=−6।");

  /* ---- Ch12 Topic 2: Left-Hand and Right-Hand Limits (8) ---- */
  add("MTH-M14",12,"MTH11-12-2",1,"The left-hand limit is written as:","Left-hand limit कैसे लिखते हैं?",
    ["lim(x→a⁺)","lim(x→a⁻)","lim(x→0)","lim(x→∞)"],["lim(x→a⁺)","lim(x→a⁻)","lim(x→0)","lim(x→∞)"],"B","Approaching from below.","नीचे से पास आना।");
  add("MTH-M15",12,"MTH11-12-2",1,"The right-hand limit is written as:","Right-hand limit कैसे लिखते हैं?",
    ["lim(x→a⁺)","lim(x→a⁻)","lim(x→0)","lim(x→∞)"],["lim(x→a⁺)","lim(x→a⁻)","lim(x→0)","lim(x→∞)"],"A","Approaching from above.","ऊपर से पास आना।");
  add("MTH-M16",12,"MTH11-12-2",1,"A limit exists at x=a only when:","x=a पर limit तभी होता है जब:",
    ["LHL and RHL are both defined","LHL and RHL are equal","LHL is bigger than RHL","f(a) is defined"],["LHL और RHL दोनों defined हों","LHL और RHL बराबर हों","LHL, RHL से बड़ा हो","f(a) defined हो"],"B","Both sides must agree exactly.","दोनों तरफ़ बिल्कुल मिलने चाहिए।");
  add("MTH-M17",12,"MTH11-12-2",2,"For f(x)=x/|x|, the left-hand limit as x→0 is:","f(x)=x/|x| के लिए, x→0 पर left-hand limit है:",
    ["1","−1","0","undefined"],["1","−1","0","undefined"],"B","Negative x gives f(x)=−1.","Negative x पर f(x)=−1।");
  add("MTH-M18",12,"MTH11-12-2",2,"For f(x)=x/|x|, the right-hand limit as x→0 is:","f(x)=x/|x| के लिए, x→0 पर right-hand limit है:",
    ["1","−1","0","undefined"],["1","−1","0","undefined"],"A","Positive x gives f(x)=1.","Positive x पर f(x)=1।");
  add("MTH-M19",12,"MTH11-12-2",2,"Since LHL≠RHL for f(x)=x/|x| at x=0, the limit:","चूँकि f(x)=x/|x| में x=0 पर LHL≠RHL, limit:",
    ["equals 0","equals 1","equals −1","does not exist"],["0 के बराबर है","1 के बराबर है","−1 के बराबर है","नहीं है"],"D","Disagreeing sides mean no single limit.","अलग-अलग तरफ़ों का मतलब है कोई एक limit नहीं।");
  add("MTH-M20",12,"MTH11-12-2",3,"If LHL=5 and RHL=5 at x=a, the limit at a is:","अगर x=a पर LHL=5 और RHL=5, a पर limit है:",
    ["5","undefined","0","10"],["5","undefined","0","10"],"A","Both sides agree, so the limit is that shared value.","दोनों तरफ़ मिलते हैं, इसलिए limit वही साझा value है।");
  add("MTH-M21",12,"MTH11-12-2",3,"If LHL=3 and RHL=7 at x=a, the limit at a:","अगर x=a पर LHL=3 और RHL=7, a पर limit:",
    ["is 3","is 7","is 5 (average)","does not exist"],["3 है","7 है","5 है (average)","नहीं है"],"D","Disagreement means the limit fails to exist.","अलग होने का मतलब है limit नहीं है।");

  /* ---- Ch12 Topic 3: Algebra of Limits (8) ---- */
  add("MTH-M22",12,"MTH11-12-3",1,"lim[f(x)+g(x)] equals:","lim[f(x)+g(x)] बराबर है:",
    ["lim f(x) + lim g(x)","lim f(x) × lim g(x)","lim f(x) − lim g(x)","lim[f(x)×g(x)]"],["lim f(x) + lim g(x)","lim f(x) × lim g(x)","lim f(x) − lim g(x)","lim[f(x)×g(x)]"],"A","The sum rule for limits.","Limits का sum rule।");
  add("MTH-M23",12,"MTH11-12-3",1,"lim[f(x)×g(x)] equals:","lim[f(x)×g(x)] बराबर है:",
    ["lim f(x) + lim g(x)","lim f(x) × lim g(x)","lim f(x) / lim g(x)","lim f(x)"],["lim f(x) + lim g(x)","lim f(x) × lim g(x)","lim f(x) / lim g(x)","lim f(x)"],"B","The product rule for limits.","Limits का product rule।");
  add("MTH-M24",12,"MTH11-12-3",1,"lim[f(x)/g(x)] equals lim f(x)/lim g(x), provided:","lim[f(x)/g(x)], lim f(x)/lim g(x) के बराबर है, बशर्ते:",
    ["lim f(x)≠0","lim g(x)≠0","both are 0","f and g are equal"],["lim f(x)≠0","lim g(x)≠0","दोनों 0 हों","f और g बराबर हों"],"B","Division by zero must be avoided.","0 से division से बचना चाहिए।");
  add("MTH-M25",12,"MTH11-12-3",2,"If lim(x→a) f(x)=6 and lim(x→a) g(x)=2, find lim[f(x)+g(x)].","अगर lim(x→a) f(x)=6 और lim(x→a) g(x)=2, lim[f(x)+g(x)] निकालिए।",
    ["8","4","12","3"],["8","4","12","3"],"A","6+2=8.","6+2=8।");
  add("MTH-M26",12,"MTH11-12-3",2,"If lim(x→a) f(x)=6 and lim(x→a) g(x)=2, find lim[f(x)×g(x)].","अगर lim(x→a) f(x)=6 और lim(x→a) g(x)=2, lim[f(x)×g(x)] निकालिए।",
    ["8","4","12","3"],["8","4","12","3"],"C","6×2=12.","6×2=12।");
  add("MTH-M27",12,"MTH11-12-3",2,"If lim(x→a) f(x)=10 and lim(x→a) g(x)=5, find lim[f(x)/g(x)].","अगर lim(x→a) f(x)=10 और lim(x→a) g(x)=5, lim[f(x)/g(x)] निकालिए।",
    ["2","50","15","5"],["2","50","15","5"],"A","10÷5=2.","10÷5=2।");
  add("MTH-M28",12,"MTH11-12-3",3,"Find lim(x→1) [4x+3] using the algebra of limits.","Limits के algebra से lim(x→1) [4x+3] निकालिए।",
    ["7","3","4","1"],["7","3","4","1"],"A","4(1)+3=7.","4(1)+3=7।");
  add("MTH-M29",12,"MTH11-12-3",3,"Find lim(x→3) [2x²−1] using the algebra of limits.","Limits के algebra से lim(x→3) [2x²−1] निकालिए।",
    ["17","5","18","6"],["17","5","18","6"],"A","2(9)−1=17.","2(9)−1=17।");

  /* ---- Ch12 Topic 4: Polynomial and Rational Limits (9) ---- */
  add("MTH-M30",12,"MTH11-12-4",1,"For a polynomial p(x), lim(x→a) p(x) equals:","Polynomial p(x) के लिए, lim(x→a) p(x) बराबर है:",
    ["0","p(a)","undefined","1"],["0","p(a)","undefined","1"],"B","Direct substitution always works for polynomials.","Polynomials के लिए सीधे substitution हमेशा काम करता है।");
  add("MTH-M31",12,"MTH11-12-4",1,"For a rational function, if the denominator is nonzero at x=a, you find the limit by:","Rational function में, अगर x=a पर denominator nonzero है, limit कैसे निकालते हैं?",
    ["factoring first always","direct substitution","ignoring the numerator","setting x=0"],["हमेशा पहले factor करके","सीधे substitution से","numerator को नज़रअंदाज़ करके","x=0 रखकर"],"B","No 0/0 issue, so substitution works immediately.","0/0 की कोई समस्या नहीं, substitution तुरंत काम करता है।");
  add("MTH-M32",12,"MTH11-12-4",1,"If direct substitution gives 0/0, the correct next step is:","अगर सीधे substitution से 0/0 मिले, सही अगला step क्या है?",
    ["say the limit is 0","say the limit doesn't exist","factor and cancel, then substitute again","give up"],["कहिए limit 0 है","कहिए limit नहीं है","factor करके cancel कीजिए, फिर दोबारा substitute कीजिए","छोड़ दीजिए"],"C","0/0 is a signal to simplify, not a final answer.","0/0 simplify करने का संकेत है, final answer नहीं।");
  add("MTH-M33",12,"MTH11-12-4",2,"Find lim(x→4) (x²−16)/(x−4).","lim(x→4) (x²−16)/(x−4) निकालिए।",
    ["8","0","16","4"],["8","0","16","4"],"A","Simplifies to x+4, then 4+4=8.","x+4 में simplify होकर 4+4=8।");
  add("MTH-M34",12,"MTH11-12-4",2,"Find lim(x→2) (x³−8)/(x−2).","lim(x→2) (x³−8)/(x−2) निकालिए।",
    ["12","8","4","6"],["12","8","4","6"],"A","x³−8=(x−2)(x²+2x+4); at x=2: 4+4+4=12.","x³−8=(x−2)(x²+2x+4); x=2 पर: 4+4+4=12।");
  add("MTH-M35",12,"MTH11-12-4",2,"Find lim(x→1) (x³−1)/(x−1).","lim(x→1) (x³−1)/(x−1) निकालिए।",
    ["3","1","0","9"],["3","1","0","9"],"A","x³−1=(x−1)(x²+x+1); at x=1: 1+1+1=3.","x³−1=(x−1)(x²+x+1); x=1 पर: 1+1+1=3।");
  add("MTH-M36",12,"MTH11-12-4",3,"Find lim(x→5) (x²−7x+10)/(x−5).","lim(x→5) (x²−7x+10)/(x−5) निकालिए।",
    ["3","−3","5","10"],["3","−3","5","10"],"A","x²−7x+10=(x−5)(x−2); at x=5: 5−2=3.","x²−7x+10=(x−5)(x−2); x=5 पर: 5−2=3।");
  add("MTH-M37",12,"MTH11-12-4",3,"Find lim(x→2) (x²−4)/(x²−5x+6).","lim(x→2) (x²−4)/(x²−5x+6) निकालिए।",
    ["−4","4","2","−2"],["−4","4","2","−2"],"A","Simplifies to (x+2)/(x−3); at x=2: 4/(−1)=−4.","(x+2)/(x−3) में simplify होकर; x=2 पर: 4/(−1)=−4।");
  add("MTH-M38",12,"MTH11-12-4",4,"Find lim(x→0) (x²+3x)/x.","lim(x→0) (x²+3x)/x निकालिए।",
    ["3","0","undefined","x"],["3","0","undefined","x"],"A","Factor x(x+3)/x=x+3; at x=0: 3.","x(x+3)/x=x+3 factor करके; x=0 पर: 3।");

  /* ---- Ch12 Topic 5: Limits of Trigonometric Functions (9) ---- */
  add("MTH-M39",12,"MTH11-12-5",1,"lim(x→0) sin x/x equals:","lim(x→0) sin x/x बराबर है:",
    ["0","1","undefined","x"],["0","1","undefined","x"],"B","The single most important trig limit.","सबसे ज़रूरी trig limit।");
  add("MTH-M40",12,"MTH11-12-5",1,"The standard limit sin x/x → 1 requires x to be measured in:","Standard limit sin x/x → 1 के लिए x किसमें मापा जाना चाहिए?",
    ["degrees","radians","either","grades"],["degrees","radians","कोई भी","grades"],"B","Radians are essential for this exact result.","इस exact result के लिए radians ज़रूरी हैं।");
  add("MTH-M41",12,"MTH11-12-5",1,"As x→0, sin x behaves like:","x→0 पर, sin x कैसा व्यवहार करता है?",
    ["0","x itself (approximately)","1","undefined"],["0","लगभग x जैसा","1","undefined"],"B","This is exactly why sin x/x approaches 1.","इसीलिए sin x/x, 1 के पास पहुँचता है।");
  add("MTH-M42",12,"MTH11-12-5",2,"Find lim(x→0) sin(2x)/x.","lim(x→0) sin(2x)/x निकालिए।",
    ["2","1","0","x"],["2","1","0","x"],"A","2 × [sin(2x)/(2x)] → 2×1=2.","2 × [sin(2x)/(2x)] → 2×1=2।");
  add("MTH-M43",12,"MTH11-12-5",2,"Find lim(x→0) sin(5x)/x.","lim(x→0) sin(5x)/x निकालिए।",
    ["5","1","0","x"],["5","1","0","x"],"A","5 × [sin(5x)/(5x)] → 5×1=5.","5 × [sin(5x)/(5x)] → 5×1=5।");
  add("MTH-M44",12,"MTH11-12-5",2,"Find lim(x→0) sin(x)/(3x).","lim(x→0) sin(x)/(3x) निकालिए।",
    ["1/3","3","1","0"],["1/3","3","1","0"],"A","(1/3) × [sin x/x] → 1/3.","(1/3) × [sin x/x] → 1/3।");
  add("MTH-M45",12,"MTH11-12-5",3,"Find lim(x→0) sin(4x)/sin(2x).","lim(x→0) sin(4x)/sin(2x) निकालिए।",
    ["2","4","1","0.5"],["2","4","1","0.5"],"A","Both behave like their angles near 0: 4x/2x=2.","0 के पास दोनों अपने angle जैसे व्यवहार करते हैं: 4x/2x=2।");
  add("MTH-M46",12,"MTH11-12-5",3,"Find lim(x→0) x/sin x.","lim(x→0) x/sin x निकालिए।",
    ["1","0","undefined","x"],["1","0","undefined","x"],"A","The reciprocal of sin x/x, which is also 1.","sin x/x का reciprocal, जो भी 1 है।");
  add("MTH-M47",12,"MTH11-12-5",4,"Find lim(x→0) sin(3x)/sin(5x).","lim(x→0) sin(3x)/sin(5x) निकालिए।",
    ["3/5","5/3","1","0"],["3/5","5/3","1","0"],"A","Both behave like their angles near 0: 3x/5x=3/5.","0 के पास दोनों अपने angle जैसे व्यवहार करते हैं: 3x/5x=3/5।");

  /* ---- Ch12 Topic 6: The Derivative (10) ---- */
  add("MTH-M48",12,"MTH11-12-6",1,"The derivative measures:","Derivative क्या मापता है?",
    ["average rate of change over an interval","instantaneous rate of change at a point","the total distance travelled","the area under a curve"],["एक interval में average rate of change","एक point पर तुरंत का rate of change","कुल तय की गई दूरी","curve के नीचे का area"],"B","The rate at one exact instant.","एक ठीक पल का rate।");
  add("MTH-M49",12,"MTH11-12-6",1,"A secant line connects:","Secant line किसे जोड़ती है?",
    ["one point on a curve to itself","two points on a curve","a curve to the x-axis","two separate curves"],["curve पर एक point को ख़ुद से","curve पर दो points को","curve को x-axis से","दो अलग curves को"],"B","A line through two points on the curve.","Curve पर दो points से गुज़रती line।");
  add("MTH-M50",12,"MTH11-12-6",1,"A tangent line at a point:","किसी point पर tangent line:",
    ["crosses the curve at many points","touches the curve at just that one point (locally)","is always horizontal","is always vertical"],["curve को कई points पर काटती है","सिर्फ़ उस एक point पर curve को छूती है (locally)","हमेशा horizontal होती है","हमेशा vertical होती है"],"B","A local, single-point touch.","Local, एक-point वाला touch।");
  add("MTH-M51",12,"MTH11-12-6",2,"The derivative first-principles formula is:","Derivative का first-principles formula है:",
    ["lim(h→0)[f(x+h)−f(x)]/h","lim(h→0)[f(x+h)+f(x)]/h","lim(h→0)[f(x+h)×f(x)]/h","f(x+h)−f(x)"],["lim(h→0)[f(x+h)−f(x)]/h","lim(h→0)[f(x+h)+f(x)]/h","lim(h→0)[f(x+h)×f(x)]/h","f(x+h)−f(x)"],"A","The limit of the secant's slope, as h→0.","h→0 पर, secant के slope का limit।");
  add("MTH-M52",12,"MTH11-12-6",2,"As Q slides toward P on a curve, the secant line approaches the:","Curve पर Q, P की ओर सरकने पर, secant line किसके पास पहुँचती है?",
    ["x-axis","y-axis","tangent line","origin"],["x-axis","y-axis","tangent line","origin"],"C","The defining picture of a derivative.","Derivative की परिभाषित picture।");
  add("MTH-M53",12,"MTH11-12-6",2,"Find f(x+h)−f(x) for f(x)=x², before dividing by h.","f(x)=x² के लिए, h से divide करने से पहले f(x+h)−f(x) निकालिए।",
    ["2xh+h²","h²","2x","x²+h²"],["2xh+h²","h²","2x","x²+h²"],"A","(x+h)²−x² expands to 2xh+h².","(x+h)²−x², expand होकर 2xh+h² बनता है।");
  add("MTH-M54",12,"MTH11-12-6",3,"Divide 2xh+h² by h.","2xh+h² को h से divide कीजिए।",
    ["2x+h","2x","h","2xh"],["2x+h","2x","h","2xh"],"A","Each term has a common factor of h.","हर term में h common factor है।");
  add("MTH-M55",12,"MTH11-12-6",3,"As h→0, 2x+h approaches:","h→0 पर, 2x+h किसके पास पहुँचता है?",
    ["2x","0","x","h"],["2x","0","x","h"],"A","h simply vanishes in the limit.","Limit में h बस ग़ायब हो जाता है।");
  add("MTH-M56",12,"MTH11-12-6",4,"Find the derivative of f(x)=x² using first principles, in full.","f(x)=x² का derivative first principles से, पूरा निकालिए।",
    ["f'(x)=2x","f'(x)=x²","f'(x)=2","f'(x)=x"],["f'(x)=2x","f'(x)=x²","f'(x)=2","f'(x)=x"],"A","The complete first-principles result.","पूरा first-principles result।");
  add("MTH-M57",12,"MTH11-12-6",4,"Find the derivative of f(x)=x³ using the pattern from x² (do not expand fully — just apply the power rule).","Power rule लगाकर (पूरा expand किए बिना) f(x)=x³ का derivative निकालिए।",
    ["3x²","x²","3x³","2x²"],["3x²","x²","3x³","2x²"],"A","d/dx(xⁿ)=nxⁿ⁻¹, with n=3.","d/dx(xⁿ)=nxⁿ⁻¹, n=3 के साथ।");

  /* ---- Ch12 Topic 7: Standard Derivatives and Algebra (12) ---- */
  add("MTH-M58",12,"MTH11-12-7",1,"d/dx(xⁿ) equals:","d/dx(xⁿ) बराबर है:",
    ["nxⁿ⁻¹","xⁿ⁻¹","nxⁿ","xⁿ"],["nxⁿ⁻¹","xⁿ⁻¹","nxⁿ","xⁿ"],"A","The power rule.","Power rule।");
  add("MTH-M59",12,"MTH11-12-7",1,"d/dx(constant) equals:","d/dx(constant) बराबर है:",
    ["the constant itself","0","1","undefined"],["ख़ुद constant","0","1","undefined"],"B","A constant never changes.","एक constant कभी नहीं बदलता।");
  add("MTH-M60",12,"MTH11-12-7",1,"d/dx(sin x) equals:","d/dx(sin x) बराबर है:",
    ["cos x","−cos x","−sin x","sin x"],["cos x","−cos x","−sin x","sin x"],"A","One of the standard trig derivatives.","Standard trig derivatives में से एक।");
  add("MTH-M61",12,"MTH11-12-7",2,"d/dx(cos x) equals:","d/dx(cos x) बराबर है:",
    ["sin x","cos x","−sin x","−cos x"],["sin x","cos x","−sin x","−cos x"],"C","Note the negative sign here.","यहाँ negative sign ध्यान दीजिए।");
  add("MTH-M62",12,"MTH11-12-7",2,"Find d/dx(x⁵).","d/dx(x⁵) निकालिए।",
    ["5x⁴","x⁴","5x⁵","x⁵"],["5x⁴","x⁴","5x⁵","x⁵"],"A","Power rule with n=5.","n=5 के साथ power rule।");
  add("MTH-M63",12,"MTH11-12-7",2,"Find d/dx(x⁷).","d/dx(x⁷) निकालिए।",
    ["7x⁶","x⁶","7x⁷","6x⁷"],["7x⁶","x⁶","7x⁷","6x⁷"],"A","Power rule with n=7.","n=7 के साथ power rule।");
  add("MTH-M64",12,"MTH11-12-7",2,"(f+g)' equals:","(f+g)' बराबर है:",
    ["f'+g'","f'×g'","f'−g'","f'/g'"],["f'+g'","f'×g'","f'−g'","f'/g'"],"A","Derivatives add just like limits do.","Derivatives, limits जैसे ही जुड़ते हैं।");
  add("MTH-M65",12,"MTH11-12-7",3,"Find the derivative of f(x)=4x³.","f(x)=4x³ का derivative निकालिए।",
    ["12x²","4x²","12x³","3x²"],["12x²","4x²","12x³","3x²"],"A","4×3x²=12x².","4×3x²=12x²।");
  add("MTH-M66",12,"MTH11-12-7",3,"Find the derivative of f(x)=x²+3x.","f(x)=x²+3x का derivative निकालिए।",
    ["2x+3","2x","3","x+3"],["2x+3","2x","3","x+3"],"A","Differentiate each term separately.","हर term को अलग-अलग differentiate कीजिए।");
  add("MTH-M67",12,"MTH11-12-7",3,"Find the derivative of f(x)=5x⁴−2x.","f(x)=5x⁴−2x का derivative निकालिए।",
    ["20x³−2","20x³","5x³−2","4x³−2"],["20x³−2","20x³","5x³−2","4x³−2"],"A","5×4x³−2=20x³−2.","5×4x³−2=20x³−2।");
  add("MTH-M68",12,"MTH11-12-7",4,"Find the derivative of f(x)=x³−6x²+9x.","f(x)=x³−6x²+9x का derivative निकालिए।",
    ["3x²−12x+9","3x²−6x+9","x²−12x+9","3x²−12x"],["3x²−12x+9","3x²−6x+9","x²−12x+9","3x²−12x"],"A","Differentiate term by term: 3x²,−12x,+9.","Term by term differentiate कीजिए: 3x²,−12x,+9।");
  add("MTH-M69",12,"MTH11-12-7",5,"Find the derivative of f(x)=2x³+3x²−5x+1.","f(x)=2x³+3x²−5x+1 का derivative निकालिए।",
    ["6x²+6x−5","6x²+6x","6x²−5","6x+6x−5"],["6x²+6x−5","6x²+6x","6x²−5","6x+6x−5"],"A","6x²,+6x,−5,and 0 for the constant.","6x²,+6x,−5, और constant के लिए 0।");

  window.SL_DATA.questions = window.SL_DATA.questions.concat(Q);
})();

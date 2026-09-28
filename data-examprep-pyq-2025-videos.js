/* Transcribed from the two Class 10 2025 recordings supplied for ExamPrep.
   English Q42 is explicitly missing in the recording; Maths ends at Q27. */
(() => {
 const bank=window.EXAMPREP;
 const source='JAC PYQ 2025';
 const englishPassage='Good health is the most important thing in our life. Wealth or education is of little use to a person suffering from ill health. A sick person feels uncomfortable and may become a liability to family and society. A diseased body makes the mind sick. A person suffering from diseases can become irritable, fearful and timid. Good health calls for nutritious food and exercise.';
 const coorgPassage='The Kaveri obtains its water from the hills and forests of Coorg. Mahaseer fish abound in these waters. Kingfishers dive for their catch, while squirrels and langurs drop partly eaten fruit to enjoy the splash and ripple effect.';
 const teamPassage='Teamwork means working together to reach a common goal. It helps us communicate better, share ideas and find creative solutions. It can also build friendships. Different opinions can be challenging, but working through disagreements teaches respect for other viewpoints and helps us achieve more together.';
 const E=(number,question,options,correct,context='')=>({qid:`EP-JAC-10-E-2025-VIDEO-${String(number).padStart(2,'0')}`,class:'10',subject:'English',topic:number<=6?'Reading Comprehension':number<=12?'Letter Completion':number<=16?'Grammar':number<=19?'Reading Comprehension':number<=30?'Literature':'Reading and Writing',subTopic:`Source paper Q${number}`,question:context?`${context}\n\n${question}`:question,options,correct,type:'mcq',marks:1,difficulty:'PYQ',explanation:`The answer is ${options['ABCD'.indexOf(correct)]}.`,sourceType:source,sourceRef:`2025Class10English.mp4, Q${number}`});
 const W=(number,question,marks,context='')=>({qid:`EP-JAC-10-E-2025-VIDEO-${String(number).padStart(2,'0')}`,class:'10',subject:'English',topic:number<=38?'Reading Comprehension':number<=40?'Grammar and Writing':number<=46?'Literature':'Writing and Literature',subTopic:`Source paper Q${number}`,question:context?`${context}\n\n${question}`:question,type:'short',marks,difficulty:'PYQ',needsTeacherReview:true,explanation:'Compare your response with the source passage or textbook and ask a teacher to review expression and completeness.',sourceType:source,sourceRef:`2025Class10English.mp4, Q${number}`});
 const eng=[
 E(1,'What is the most important thing in life?',['Wealth','Education','Good health','Fame'],'C',englishPassage),
 E(2,'Why is a person suffering from ill health considered to be of little use?',['Unable to enjoy life','Unable to contribute to society','A liability to family','All of these'],'D',englishPassage),
 E(3,'How does a sick person feel?',['Comfortable','Healthy','Happy','None of these'],'D',englishPassage),
 E(4,'How does a diseased body affect the mind?',['No effect','It makes the mind sick','It makes the mind healthy','None of these'],'B',englishPassage),
 E(5,'What are some ways to maintain good health?',['Nutritious food and exercise','Avoiding physical activity','Smoking and drinking alcohol','Eating junk food'],'A',englishPassage),
 E(6,"Which word in the passage means ‘afraid’?",['Timid','Fearful','Irritable','Asset'],'B',englishPassage),
 E(7,'Complete the addressee in a letter to The Indian Express: “The ___, The Indian Express”.',['Principal','Postmaster','Editor','Producer'],'C'),
 E(8,'Complete: “Through the columns of your ___, I want to highlight the nuisance.”',['book','article','library','newspaper'],'D'),
 E(9,'Complete: “the nuisance caused by ___ blaring music and film songs”.',['TV','loudspeakers','radio','none of these'],'B'),
 E(10,'Complete: “Such loud sounds disturb ___ studies and the sleep of all citizens.”',['our','their','there','none of these'],'B'),
 E(11,'Complete: “The municipal authorities ___ take strong action.”',['may','can','could','should'],'D'),
 E(12,'Complete the formal letter closing: “Yours ___, Prakash.”',['loving','affectionately','sincerely','none of these'],'C'),
 E(13,'Choose the passive voice of “He eats a mango.”',['A mango is eaten by him.','A mango is eating by him.','A mango eaten by him.','None of these'],'A'),
 E(14,'Complete: “My mother ___ when I returned home.”',['cooking','cooks','was cooking','were cooking'],'C'),
 E(15,'Complete: “I am fond of ___.”',['to sing','singing','sung','sang'],'B'),
 E(16,'Complete: “The girl ___ came first is my sister.”',['who','whose','whom','which'],'A'),
 E(17,'Which river flows from the hills of Coorg?',['Yamuna','Kaveri','Ganga','Godavari'],'B',coorgPassage),
 E(18,'Why do the squirrels drop partly eaten fruit in the river?',['To feed water animals','To energise the river','To pollute the river','To enjoy the splash and ripple effect'],'D',coorgPassage),
 E(19,'Which word in the passage means “wave”?',['Abound','Dive','Ripple','Splash'],'C',coorgPassage),
 E(20,"What is a country's greatest wealth?",['Its technology','Its people','Its minerals','Its industries'],'B'),
 E(21,'Which seed did Buddha ask to bring?',['Mustard','Cotton','Sunflower','Pumpkin'],'A'),
 E(22,'Who is the author of “The Black Aeroplane”?',['G. L. Fuentes',"Liam O'Flaherty",'Robert Frost','Frederick Forsyth'],'D'),
 E(23,'Pranjal was travelling with his friend named ___ .',['Ranvir','Rajvir','Rishi','Rishabh'],'B'),
 E(24,'Where did the Arabs keep the otter?',['In a box','In a pocket','In a sack','In a bag'],'C'),
 E(25,'Why should Amanda not eat chocolates?',['They cause cancer','They cause acne','They cause toothache','They cause heart disease'],'B'),
 E(26,'Who wrote “A Tiger in the Zoo”?',['John Berryman','Robert Frost','Robin Klein','Leslie Norris'],'D'),
 E(27,'How did Tricki look?',['Very thin','Like a bloated sausage','Very smart','Always ready to run'],'B'),
 E(28,'What was Horace Danby allergic to?',['Smell of flowers','Dust','Pollen','None of these'],'C'),
 E(29,'What did Richard Ebright collect during childhood?',['Coins','Butterflies','Rocks','All of these'],'D'),
 E(30,'What did Max have in his hand?',['A knife','A pistol','A report','None of these'],'B'),
 W(31,'What does teamwork mean?',2,teamPassage),W(32,'Name two benefits of teamwork mentioned in the passage.',2,teamPassage),W(33,'Why might teamwork be challenging?',2,teamPassage),W(34,'How can working through disagreements be helpful?',2,teamPassage),W(35,'What can teamwork help us achieve?',2,teamPassage),W(36,'Complete from the passage: (i) When we work in a team, we ___ . (ii) People may have different ___ .',2,teamPassage),W(37,'Which word in the passage means “innovative”?',2,teamPassage),W(38,'Make sentences with “important” and “respect”.',2),
 W(39,'Fill with may, could or must: (a) She ___ run fast at the age of five. (b) ___ you have a prosperous life! (c) We ___ follow traffic rules.',3),
 W(40,'Transform: (a) The baby is too small to speak. (Remove “too”.) (b) He is a good boy. (Make negative.) (c) She said to me, “Delhi is the capital of India.” (Indirect speech.)',3),
 W(41,'From “The Ball Poem”: name the poem and poet, and state where the boy’s ball went.',3),
 W(43,'Why was the young seagull afraid to fly?',3),W(44,'How is bread an important part of Goan life?',3),W(45,'What is “dust of snow”? What changed the poet’s mood, and how?',3),W(46,'Why is Matilda always unhappy?',3),
 W(47,'Write a letter to your younger brother advising him to study hard and avoid bad company.',5),W(48,'Write a paragraph on “Importance of Games and Sports” OR “Your favourite game”.',5),W(49,'Why does the postmaster send money to Lencho? Why does he sign the letter “God”?',5),W(50,'“Paper has more patience than people.” Justify.',5),W(51,"Why do Bholi's parents accept Bishamber's marriage proposal? Why does the marriage not take place?",5),W(52,'Give a character sketch of Griffin.',5)
 ];
 const M=(number,topic,question,options,correct,hi,imageUrl)=>({qid:`EP-JAC-10-M-2025-VIDEO-${String(number).padStart(2,'0')}`,class:'10',subject:'Maths',topic,subTopic:`Source paper Q${number}`,subTopicHi:`मूल प्रश्नपत्र प्रश्न ${number}`,question,questionHi:hi||question,options,optionsHi:options,correct,type:'mcq',marks:1,difficulty:'PYQ',explanation:`The answer is ${options['ABCD'.indexOf(correct)]}.`,explanationHi:`सही उत्तर ${options['ABCD'.indexOf(correct)]} है।`,imageUrl:imageUrl||'',sourceType:source,sourceRef:`2025Class10Maths.mp4, Q${number}`});
 const math=[
 M(1,'1 — Real Numbers','How many prime factors are there in 120?',['3','5','7','None of these'],'B','120 में अभाज्य गुणनखंडों की संख्या कितनी है?'),
 M(2,'1 — Real Numbers','The HCF of 5 and 0 is',['0','5','1','∞'],'B','5 तथा 0 का महत्तम समापवर्तक क्या है?'),
 M(3,'1 — Real Numbers','Which of the following is not irrational?',['√(64/81)','2√3','√(21/35)','√3 × √2'],'A','निम्न में कौन अपरिमेय नहीं है?'),
 M(4,'2 — Polynomials','Which graph is not the graph of a quadratic polynomial?',['A: downward parabola','B: upward parabola crossing the x-axis twice','C: upward parabola above the x-axis','D: curve with two turning points'],'D','कौन-सा आलेख द्विघात बहुपद का नहीं है?','assets/examprep/pyq-2025/maths-q4.png'),
 M(5,'2 — Polynomials','The product of the zeroes of 2 − x(x − 1) is',['−1','1','−2','2'],'C','2 − x(x − 1) के शून्यकों का गुणनफल क्या है?'),
 M(6,'3 — Pair of Linear Equations in Two Variables','The pair x + 3y − 4 = 0 and 2x − 5y − 1 = 0 is',['Consistent','Inconsistent','Dependent','None of these'],'A','x + 3y − 4 = 0 और 2x − 5y − 1 = 0 का युग्म कैसा है?'),
 M(7,'3 — Pair of Linear Equations in Two Variables','Solve 3x + 4y = 10 and 2x − 2y = 2.',['x=2, y=1','x=2, y=−1','x=−2, y=1','x=−2, y=−1'],'A','3x + 4y = 10 और 2x − 2y = 2 का हल क्या है?'),
 M(8,'4 — Quadratic Equations','Which is a quadratic equation?',['3x + x² = x² + 5','(x + 2)² = 2(x² − 5)','(√(2x) + 3)² = 2x² + 6','(x − 1)² = x² + x − 2'],'B','कौन-सा द्विघात समीकरण है?'),
 M(9,'4 — Quadratic Equations','When does ax² + bx + c = 0 have two real, distinct roots?',['b² − 4ac > 0','b² − 4ac < 0','b² − 4ac = 0','None of these'],'A','ax² + bx + c = 0 के दो भिन्न वास्तविक मूल कब होंगे?'),
 M(10,'5 — Arithmetic Progressions','What is the common difference of the A.P. 1², 5², 7², …?',['2','4','24','42'],'C','1², 5², 7², … का सार्व अंतर क्या है?'),
 M(11,'5 — Arithmetic Progressions','In an A.P., d = −4, n = 7 and aₙ = 4. Find a. (The Hindi line in the source prints d = 4.)',['6','7','28','None of these'],'C','मूल प्रश्न में हिंदी में d = 4 और अंग्रेज़ी में d = −4 छपा है। अंग्रेज़ी मान d = −4, n = 7, aₙ = 4 के लिए a ज्ञात करें।'),
 M(12,'7 — Coordinate Geometry','Find the distance of (36, 15) from the origin.',['19','29','39','None of these'],'C','(36, 15) की मूल बिंदु से दूरी क्या है?'),
 M(13,'7 — Coordinate Geometry','Find the midpoint of (3, 4) and (−3, 8).',['(6, 0)','(0, 12)','(6, −4)','(0, 6)'],'D','(3, 4) तथा (−3, 8) का मध्य बिंदु क्या है?'),
 M(14,'6 — Triangles','Which kind of triangles are always similar to one another?',['Right-angled','Isosceles','Equilateral','None of these'],'C','किस प्रकार के दो त्रिभुज हमेशा समरूप होते हैं?'),
 M(15,'6 — Triangles','In triangle ABC, DE ∥ BC, AD = x, DB = x + 5, AE = 6 and AC = 13. Find x.',['20','25','35','30'],'D','त्रिभुज ABC में DE ∥ BC, AD = x, DB = x + 5, AE = 6, AC = 13 हैं। x ज्ञात करें।','assets/examprep/pyq-2025/maths-q15.png'),
 M(16,'6 — Triangles','If ΔABC ∼ ΔPQR, ∠B = 47° and ∠R = 83°, find ∠A.',['50°','60°','70°','80°'],'A','यदि ΔABC ∼ ΔPQR, ∠B = 47° और ∠R = 83° हैं, तो ∠A ज्ञात करें।'),
 M(17,'10 — Circles','A tangent from Q is 24 cm and Q is 25 cm from the circle centre. Find the radius.',['7 cm','12 cm','15 cm','24.5 cm'],'A','Q से स्पर्श रेखा 24 सेमी और केंद्र से Q की दूरी 25 सेमी है। त्रिज्या ज्ञात करें।'),
 M(18,'10 — Circles','A line intersecting a circle at two points is called a',['tangent','radius','secant','none of these'],'C','वृत्त को दो बिंदुओं पर काटने वाली रेखा क्या कहलाती है?'),
 M(19,'10 — Circles','Two concentric circles have radii 5 cm and 3 cm. Chord AB of the larger circle touches the smaller circle. Find AB.',['4 cm','8 cm','√34 cm','7 cm'],'B','दो समकेंद्रीय वृत्तों की त्रिज्याएँ 5 और 3 सेमी हैं। बड़े वृत्त की जीवा AB छोटे वृत्त को स्पर्श करती है। AB ज्ञात करें।','assets/examprep/pyq-2025/maths-q19.png'),
 M(20,'8 — Introduction to Trigonometry','If sec A = 5/3, find sin A. (The English source line omits “/3”; the Hindi line gives 5/3.)',['4/5','3/5','2/5','1/5'],'A','यदि sec A = 5/3 हो, तो sin A ज्ञात करें।'),
 M(21,'8 — Introduction to Trigonometry','Which has value 0?',['tan 0°','cos 0°','sin 90°','cot 0°'],'A','निम्न में किसका मान 0 है?'),
 M(22,'8 — Introduction to Trigonometry','Find 5tan²A − 5sec²A.',['5','−5','10','None of these'],'B','5tan²A − 5sec²A का मान क्या है?'),
 M(23,'8 — Introduction to Trigonometry','Find the reciprocal of sin θ · cot θ.',['tan θ','cos θ','sec θ','cosec θ'],'C','sin θ · cot θ का व्युत्क्रम क्या है?'),
 M(24,'9 — Some Applications of Trigonometry','The angle of elevation of a tower from a point 100 m away is 60°. Find its height.',['100√3 m','100/√3 m','50√3 m','200/√3 m'],'A','मीनार से 100 मी दूर उन्नयन कोण 60° है। ऊँचाई ज्ञात करें।'),
 M(25,'12 — Areas Related to Circles','Find the length of an arc of radius r and central angle θ (degrees).',['πr/360°','2πr/360°','2θπr/360°','θπr/360°'],'C','त्रिज्या r और केंद्र कोण θ वाले चाप की लंबाई क्या है?'),
 M(26,'12 — Areas Related to Circles','A sector has area 132/7 cm² and angle 60°. Find its radius (use π = 22/7).',['7 cm','6 cm','5 cm','4 cm'],'B','क्षेत्रफल 132/7 सेमी² और कोण 60° वाले त्रिज्यखंड की त्रिज्या ज्ञात करें।'),
 M(27,'13 — Surface Areas and Volumes','A cylindrical solid is 2.4 cm high and 1.4 cm in diameter. A conical cavity with the same height and diameter is hollowed out. Find the curved area of the conical cavity.',['4.5 cm²','5.5 cm²','6.5 cm²','None of these'],'B','2.4 सेमी ऊँचे और 1.4 सेमी व्यास वाले बेलन से समान ऊँचाई और व्यास का शंक्वाकार खोल काटा जाता है। उसका वक्र पृष्ठ क्षेत्रफल ज्ञात करें।')
 ];
 for(const q of [...eng,...math])(q.type==='mcq'?bank.questions:bank.written).push(q);
 bank.pyqVideoSources={English:{year:'2025',lastQuestion:52,missing:[42],questionIds:eng.map(q=>q.qid),notes:['The supplied English video marks Q42 as missing.']},Maths:{year:'2025',lastQuestion:27,questionIds:math.map(q=>q.qid),notes:['The supplied Maths video ends at Q27.','This selection also includes the existing Maths questions from 2025.']}};
})();

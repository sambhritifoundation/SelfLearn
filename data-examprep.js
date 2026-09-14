/* Original questions based on NCERT Class 10, Real Numbers. No PYQ claims. */
window.EXAMPREP = {
  version: 1, board: 'JAC', class: '10', subject: 'Maths', chapter: '1 — Real Numbers',
  source: 'https://ncert.nic.in/textbook/pdf/jemh101.pdf',
  questions: [
    ['Prime factors','Easy','Which is the prime factorisation of 180?',['2² × 3² × 5','2 × 3² × 5','2² × 3 × 5','2³ × 3² × 5'],'A','Divide by primes: 180 = 2 × 90 = 2² × 45 = 2² × 3² × 5.'],
    ['Prime factors','Easy','How many distinct prime factors does 252 have?',['2','3','4','5'],'B','252 = 2² × 3² × 7. The distinct primes are 2, 3 and 7.'],
    ['HCF and LCM','Easy','Find the HCF of 84 and 126.',['21','14','42','252'],'C','84 = 2² × 3 × 7 and 126 = 2 × 3² × 7. Their common prime powers give 2 × 3 × 7 = 42.'],
    ['HCF and LCM','Easy','Find the LCM of 18 and 24.',['6','42','144','72'],'D','18 = 2 × 3² and 24 = 2³ × 3. Take the highest powers: 2³ × 3² = 72.'],
    ['HCF and LCM','Medium','Two positive integers have HCF 12 and LCM 420. One is 60. Find the other.',['84','72','96','120'],'A','For two positive integers, product = HCF × LCM. The other integer is 12 × 420 ÷ 60 = 84.'],
    ['HCF and LCM','Easy','What is the HCF of any two consecutive positive integers?',['0','1','2','Their product'],'B','A common divisor divides their difference, which is 1. Only 1 can divide both.'],
    ['HCF and LCM','Medium','If a = 2³ × 3² and b = 2² × 3 × 5, what is their HCF?',['60','360','12','36'],'C','Use the smaller powers of common primes: 2² × 3 = 12.'],
    ['HCF and LCM','Medium','If a = 2³ × 3² and b = 2² × 3 × 5, what is their LCM?',['12','180','720','360'],'D','Use the largest power of every prime: 2³ × 3² × 5 = 360.'],
    ['Applications','Medium','Bells ring every 12 and 18 minutes. They ring together at 9:00 a.m. When will they next ring together?',['9:36 a.m.','9:30 a.m.','9:06 a.m.','10:00 a.m.'],'A','LCM(12,18) = 36 minutes. Add 36 minutes to 9:00 a.m.'],
    ['Applications','Medium','A teacher packs 48 pencils and 60 erasers into identical kits with nothing left. What is the greatest number of kits?',['6','12','24','240'],'B','The number of kits must divide both quantities. HCF(48,60) = 12, giving 4 pencils and 5 erasers per kit.'],
    ['Prime factors','Medium','For a positive integer n, why can 8ⁿ never end in 0?',['It is always odd','It has a factor 5','Its only prime factor is 2','It has a factor 10'],'C','A number ending in 0 is divisible by 10 and hence by 5. But 8ⁿ = 2³ⁿ has no prime factor 5.'],
    ['Prime factors','Medium','Which factorisation proves that 7 × 11 × 13 + 7 is composite?',['7 × 143','7 × 145','11 × 92','7 × 144'],'D','Take out 7: 7(11 × 13 + 1) = 7 × 144. Both factors exceed 1.'],
    ['Irrational numbers','Easy','Which number is irrational?',['√11','√121','0.125','22/7'],'A','11 is not a perfect square, so √11 is irrational. The other values are rational.'],
    ['Irrational numbers','Easy','Which expression is rational?',['3 + √2','√7 × √7','2√3','√5 − 1'],'B','√7 × √7 = 7, an integer. Each other expression is irrational.'],
    ['Irrational numbers','Medium','If √3 = a/b in lowest terms, a² = 3b² implies 3 divides a. Substitution then implies 3 divides b. What is contradicted?',['a and b are integers','b is nonzero','a and b have no common factor greater than 1','a² is positive'],'C','Both a and b have factor 3, contradicting the assumption that a/b was in lowest terms.'],
    ['Irrational numbers','Medium','If 5 + √7 were rational, subtracting 5 would imply which false conclusion?',['5 is irrational','7 is irrational','√7 is an integer','√7 is rational'],'D','Subtracting a rational number from a rational number gives a rational number. That would make √7 rational, a contradiction.'],
    ['Irrational numbers','Medium','The product of two irrational numbers is:',['Sometimes rational and sometimes irrational','Always rational','Always irrational','Always an integer'],'A','√2 × √2 = 2 is rational, whereas √2 × √3 = √6 is irrational.'],
    ['HCF and LCM','Medium','Find the HCF of 24, 36 and 60.',['6','12','24','360'],'B','24 = 2³ × 3, 36 = 2² × 3² and 60 = 2² × 3 × 5. Common minimum powers give 2² × 3 = 12.'],
    ['HCF and LCM','Medium','Find the LCM of 8, 12 and 15.',['60','180','120','240'],'C','The highest prime powers are 2³, 3 and 5. Their product is 120.'],
    ['Applications','Hard','Two positive integers have HCF 8 and sum 56. Which pair can they be?',['8 and 40','16 and 32','24 and 32','28 and 28'],'C','24 + 32 = 56 and HCF(24,32) = 8. The other pairs fail either the sum or the HCF condition.']
  ].map((r,i)=>({qid:'EP-JAC-10-M-1-'+String(i+1).padStart(3,'0'),subject:'Maths',topic:'1 — Real Numbers',subTopic:r[0],class:'10',question:r[2],options:r[3],correct:r[4],difficulty:r[1],explanation:r[5],imageUrl:'',type:'mcq',marks:1,sourceType:'Original NCERT-based practice',sourceRef:i<12||i>16?'§1.2':'§1.3'})),
  written: [
    {question:'Find the HCF and LCM of 72 and 120 by prime factorisation. Verify their product relationship.',subTopic:'HCF and LCM',type:'short',marks:3,explanation:'72 = 2³ × 3²; 120 = 2³ × 3 × 5. HCF = 24, LCM = 360. Check: 24 × 360 = 8640 = 72 × 120.',rubric:['1 mark: correct prime factorisations.','1 mark: HCF 24 and LCM 360 (½ each).','1 mark: numerical product verification.']},
    {question:'Find the smallest positive integer by which 300 must be multiplied to make a perfect square. Explain your choice.',subTopic:'Prime factors',type:'short',marks:2,explanation:'300 = 2² × 3 × 5². Multiplication by 3 makes every exponent even: 900 = 30². The smallest multiplier is 3.',rubric:['1 mark: factorisation and identification of the odd exponent of 3.','1 mark: multiplier 3 with verification 900 = 30².']},
    {question:'Prove that √7 is irrational.',subTopic:'Irrational numbers',type:'proof',marks:3,explanation:'Assume √7 = a/b for coprime integers a,b with b ≠ 0. Then a² = 7b². Since 7 is prime, 7 divides a. Write a = 7k. Substitution gives b² = 7k², so 7 divides b too. This contradicts coprimality. Therefore √7 is irrational.',rubric:['1 mark: rational assumption in lowest terms and a² = 7b².','1 mark: demonstrate that 7 divides both a and b.','1 mark: contradiction and conclusion.']},
    {question:'Prove that 4 + 3√2 is irrational, given that √2 is irrational.',subTopic:'Irrational numbers',type:'proof',marks:3,explanation:'Assume r = 4 + 3√2 is rational. Then √2 = (r − 4)/3 would be rational because rational numbers are closed under subtraction and division by a nonzero rational number. This contradicts the given fact. Thus 4 + 3√2 is irrational.',rubric:['1 mark: assume the expression is rational.','1 mark: rearrange to √2 = (r − 4)/3 and explain rationality.','1 mark: state contradiction and conclusion.']},
    {question:'A school has 96 notebooks and 144 pens. It wants the greatest possible number of identical gift packs using all items. (a) How many packs? (b) What does each pack contain? (c) Why use HCF rather than LCM?',subTopic:'Applications',type:'case',marks:4,explanation:'HCF(96,144) = 48, from 96 = 2⁵ × 3 and 144 = 2⁴ × 3². Make 48 packs, each with 2 notebooks and 3 pens. The pack count must divide both quantities; the greatest such divisor is the HCF.',rubric:['1 mark: valid HCF method.','1 mark: 48 packs.','1 mark: 2 notebooks and 3 pens per pack.','1 mark: explain greatest common divisor in context.']}
  ].map((q,i)=>({...q,qid:'EP-JAC-10-M-1-W'+(i+1),class:'10',subject:'Maths',topic:'1 — Real Numbers',difficulty:i===1?'Medium':'Hard',sourceType:'Original NCERT-based practice',sourceRef:i===2||i===3?'§1.3':'§1.2'}))
};

/* Hindi companion content for the verification bank.  The stable question IDs keep
   saved attempts independent from the language a learner chooses. */
(() => {
  const q=window.EXAMPREP.questions,w=window.EXAMPREP.written;
  const mcq=[
    ['अभाज्य गुणनखंड','180 का अभाज्य गुणनखंड क्या है?',['2² × 3² × 5','2 × 3² × 5','2² × 3 × 5','2³ × 3² × 5'],'180 = 2² × 3² × 5।'],
    ['अभाज्य गुणनखंड','252 के कितने अलग-अलग अभाज्य गुणनखंड हैं?',['2','3','4','5'],'252 = 2² × 3² × 7; अलग अभाज्य 2, 3 और 7 हैं।'],
    ['HCF और LCM','84 और 126 का HCF ज्ञात कीजिए।',['21','14','42','252'],'सामान्य न्यूनतम घात: 2 × 3 × 7 = 42।'],
    ['HCF और LCM','18 और 24 का LCM ज्ञात कीजिए।',['6','42','144','72'],'सबसे बड़ी घातें: 2³ × 3² = 72।'],
    ['HCF और LCM','दो धनात्मक पूर्णांकों का HCF 12 और LCM 420 है। एक 60 है; दूसरा ज्ञात कीजिए।',['84','72','96','120'],'दो संख्याओं का गुणनफल = HCF × LCM; दूसरी संख्या 84 है।'],
    ['HCF और LCM','किन्हीं दो क्रमागत धनात्मक पूर्णांकों का HCF क्या है?',['0','1','2','उनका गुणनफल'],'सामान्य भाजक उनका अंतर 1 भी विभाजित करेगा; अतः HCF 1 है।'],
    ['HCF और LCM','यदि a = 2³ × 3² और b = 2² × 3 × 5, तो HCF क्या है?',['60','360','12','36'],'सामान्य अभाज्यों की छोटी घात लें: 2² × 3 = 12।'],
    ['HCF और LCM','यदि a = 2³ × 3² और b = 2² × 3 × 5, तो LCM क्या है?',['12','180','720','360'],'हर अभाज्य की सबसे बड़ी घात लें: 2³ × 3² × 5 = 360।'],
    ['अनुप्रयोग','घंटियाँ हर 12 और 18 मिनट पर बजती हैं। वे 9:00 बजे साथ बजीं। अगली बार कब साथ बजेंगी?',['9:36 बजे','9:30 बजे','9:06 बजे','10:00 बजे'],'LCM(12,18) = 36 मिनट; 9:00 में 36 मिनट जोड़ें।'],
    ['अनुप्रयोग','48 पेंसिल और 60 रबर से बिना कुछ बचे समान किट बनाने हैं। अधिकतम किट कितनी होंगी?',['6','12','24','240'],'HCF(48,60) = 12, इसलिए 12 किट बनेंगी।'],
    ['अभाज्य गुणनखंड','धनात्मक पूर्णांक n के लिए 8ⁿ का अंतिम अंक 0 क्यों नहीं हो सकता?',['यह हमेशा विषम है','इसमें 5 गुणनखंड है','इसका एकमात्र अभाज्य गुणनखंड 2 है','इसमें 10 गुणनखंड है'],'0 पर समाप्त संख्या में 5 गुणनखंड होता है, लेकिन 8ⁿ में केवल 2 हैं।'],
    ['अभाज्य गुणनखंड','कौन-सा गुणनखंडन सिद्ध करता है कि 7 × 11 × 13 + 7 भाज्य है?',['7 × 143','7 × 145','11 × 92','7 × 144'],'7 को बाहर निकालें: 7(11 × 13 + 1) = 7 × 144।'],
    ['अपरिमेय संख्याएँ','कौन-सी संख्या अपरिमेय है?',['√11','√121','0.125','22/7'],'11 पूर्ण वर्ग नहीं है, इसलिए √11 अपरिमेय है।'],
    ['अपरिमेय संख्याएँ','कौन-सा व्यंजक परिमेय है?',['3 + √2','√7 × √7','2√3','√5 − 1'],'√7 × √7 = 7, जो पूर्णांक है।'],
    ['अपरिमेय संख्याएँ','यदि √3 = a/b निम्नतम रूप में हो और 3, a तथा b दोनों को विभाजित करे, तो किस बात का विरोधाभास है?',['a और b पूर्णांक हैं','b शून्य नहीं है','a और b का 1 से बड़ा कोई सामान्य गुणनखंड नहीं है','a² धनात्मक है'],'a और b दोनों में 3 आने से निम्नतम रूप की शर्त टूटती है।'],
    ['अपरिमेय संख्याएँ','यदि 5 + √7 परिमेय हो, तो 5 घटाने पर कौन-सा गलत निष्कर्ष निकलेगा?',['5 अपरिमेय है','7 अपरिमेय है','√7 पूर्णांक है','√7 परिमेय है'],'परिमेय में से परिमेय घटाने पर परिमेय मिलता है; इससे √7 परिमेय होता, जो विरोधाभास है।'],
    ['अपरिमेय संख्याएँ','दो अपरिमेय संख्याओं का गुणनफल:', ['कभी परिमेय और कभी अपरिमेय','हमेशा परिमेय','हमेशा अपरिमेय','हमेशा पूर्णांक'],'√2 × √2 = 2 परिमेय है, पर √2 × √3 = √6 अपरिमेय है।'],
    ['HCF और LCM','24, 36 और 60 का HCF ज्ञात कीजिए।',['6','12','24','360'],'सामान्य न्यूनतम घात 2² × 3 = 12 है।'],
    ['HCF और LCM','8, 12 और 15 का LCM ज्ञात कीजिए।',['60','180','120','240'],'उच्चतम घातें 2³, 3 और 5 हैं; गुणनफल 120 है।'],
    ['अनुप्रयोग','दो धनात्मक पूर्णांकों का HCF 8 और योग 56 है। कौन-सा युग्म हो सकता है?',['8 और 40','16 और 32','24 और 32','28 और 28'],'24 + 32 = 56 और HCF(24,32) = 8।']
  ];
  mcq.forEach((x,i)=>Object.assign(q[i],{subTopicHi:x[0],questionHi:x[1],optionsHi:x[2],explanationHi:x[3]}));
  const written=[
    ['अभाज्य गुणनखंडन द्वारा 72 और 120 का HCF तथा LCM ज्ञात करें और गुणनफल संबंध जाँचें।','72 = 2³ × 3² और 120 = 2³ × 3 × 5। HCF = 24, LCM = 360; 24 × 360 = 72 × 120।'],
    ['300 को पूर्ण वर्ग बनाने के लिए किस सबसे छोटे धनात्मक पूर्णांक से गुणा करें? कारण दें।','300 = 2² × 3 × 5²। 3 से गुणा करने पर 900 = 30² मिलता है।'],
    ['सिद्ध करें कि √7 अपरिमेय है।','मानें √7 = a/b निम्नतम रूप में। तब a² = 7b², अतः 7, a और फिर b दोनों को विभाजित करता है; विरोधाभास।'],
    ['दिया है कि √2 अपरिमेय है। सिद्ध करें कि 4 + 3√2 अपरिमेय है।','यदि r = 4 + 3√2 परिमेय हो, तो √2 = (r − 4)/3 परिमेय होगा; विरोधाभास।'],
    ['96 कॉपियों और 144 पेन से समान उपहार पैक की अधिकतम संख्या ज्ञात करें। हर पैक में क्या होगा? HCF क्यों लें?','HCF(96,144) = 48। 48 पैक बनेंगे, प्रत्येक में 2 कॉपियाँ और 3 पेन; पैक संख्या दोनों को विभाजित करनी चाहिए।']
  ];
  written.forEach((x,i)=>Object.assign(w[i],{questionHi:x[0],explanationHi:x[1],subTopicHi:i===1?'अभाज्य गुणनखंड':i>1&&i<4?'अपरिमेय संख्याएँ':i===4?'अनुप्रयोग':'HCF और LCM'}));
})();

/* Verified from the supplied JAC Class 10 Mathematics Annual 2026 paper.
   The scanned file includes Section A, Questions 1-30 only. */
(() => {
  const source='JAC Class 10 Mathematics Annual 2026, Section A';
  const rows=[
    ['1 — Real Numbers','Prime factorisation','Which of the following is the prime factorisation of 5005?',['6 × 7 × 11 × 13','5 × 7 × 11 × 7 × 13','5 × 7 × 11 × 13','None of these'],'C','5005 = 5 × 1001 = 5 × 7 × 11 × 13.'],
    ['1 — Real Numbers','HCF','The HCF of two consecutive positive integers is',['0','1','3','None of these'],'B','Consecutive integers have no common factor other than 1.'],
    ['1 — Real Numbers','Rational numbers','Which of the following is a rational number?',['√1764','0.010010001…','π','None of these'],'A','√1764 = 42, which is rational.'],
    ['2 — Polynomials','Zeroes of a polynomial','From the shown graph of y = p(x), how many zeroes does p(x) have?',['2','3','1','4'],'D','The curve intersects the x-axis at four points, so p(x) has four zeroes.'],
    ['2 — Polynomials','Relationship between zeroes and coefficients','The sum of the zeroes of x² − 7x + 12 is',['6','7','−7','12'],'B','For ax² + bx + c, the sum of zeroes is −b/a. Here it is 7.'],
    ['3 — Pair of Linear Equations in Two Variables','Consistency','If 4x + 3y = 5 and 2x + ky = 1 are inconsistent, k equals',['1','2','4','3/2'],'D','For inconsistent equations, a₁/a₂ = b₁/b₂ ≠ c₁/c₂. Thus 4/2 = 3/k, so k = 3/2.'],
    ['3 — Pair of Linear Equations in Two Variables','Solving a pair','The solution of 2x + y = 6 and 5x − y = 1 is',['x = 4, y = 3','x = 1, y = 4','x = 4, y = 1','x = −1, y = 8'],'B','Adding the equations gives 7x = 7, so x = 1 and y = 4.'],
    ['4 — Quadratic Equations','Identifying a quadratic equation','Which of the following is a quadratic equation?',['(x − 3)² = x² − 7x + 5','(x + 1)² = x² − 5x + 7','(x + 1)² = 2(x − 3)','x² + 4x + 1 = (x + 3)²'],'C','Only option C simplifies to x² + 5 = 0, which has degree 2.'],
    ['4 — Quadratic Equations','Discriminant','The discriminant of 2x² − 8x + 4 = 0 is',['32','64','96','92'],'A','D = b² − 4ac = (−8)² − 4(2)(4) = 32.'],
    ['5 — Arithmetic Progressions','Common difference','The common difference of the A.P. 0.6, 1.7, 2.8, 3.9, … is',['1.1','11','0.6','6'],'A','Subtract consecutive terms: 1.7 − 0.6 = 1.1.'],
    ['5 — Arithmetic Progressions','Nth term','The 10th term of the A.P. 2, 7, 12, … is',['245','47','52','57'],'B','a₁₀ = 2 + 9(5) = 47.'],
    ['7 — Coordinate Geometry','Distance formula','The distance between (2, 3) and (5, 7) is',['4','3','5','None of these'],'C','√[(5−2)² + (7−3)²] = √25 = 5.'],
    ['7 — Coordinate Geometry','Section formula','The midpoint of the line segment joining (2, 5) and (4, 7) is',['(1, 2)','(5/2, 7/2)','(3, 7)','(3, 6)'],'D','The midpoint is ((2+4)/2, (5+7)/2) = (3, 6).'],
    ['6 — Triangles','Similar triangles','Corresponding sides of similar triangles are',['Equal','Proportional','Complementary','Supplementary'],'B','The ratio of each pair of corresponding sides is the same.'],
    ['6 — Triangles','Basic proportionality theorem','In ΔABC, DE ∥ BC. If BD = 7.2 cm, AE = 1.8 cm and EC = 5.4 cm, AD is',['21.6 cm','2.6 cm','2.4 cm','3.6 cm'],'C','AD/BD = AE/EC = 1.8/5.4 = 1/3, so AD = 2.4 cm.'],
    ['6 — Triangles','Similarity criteria','In the given figure, ΔABC ~ ΔPQR by which criterion?',['A-A-A','S-S-S','S-A-S','A-A-S'],'A','The corresponding angles are 40°, 80° and 60°, so AAA similarity applies.'],
    ['10 — Circles','Tangents','Tangents PA and PB from P to a circle with centre O meet at 80°. ∠POA equals',['60°','50°','100°','80°'],'B','OP bisects the angle between equal tangents. In right triangle OAP, ∠APO = 40°, so ∠POA = 50°.'],
    ['10 — Circles','Tangents','How many tangents can a circle have?',['One','Two','Infinite','None of these'],'C','There is one tangent at every point on the circle, so there are infinitely many.'],
    ['10 — Circles','Parallel tangents','The distance between two parallel tangents to a circle is 18 cm. The radius is',['18 cm','28 cm','36 cm','9 cm'],'D','The distance between parallel tangents is the diameter, so the radius is 18/2 = 9 cm.'],
    ['8 — Introduction to Trigonometry','Trigonometric ratios','If tan A = 0.75, sin A is',['0.80','0.60','0.25','None of these'],'B','Use opposite:adjacent = 3:4, giving hypotenuse 5 and sin A = 3/5 = 0.60.'],
    ['8 — Introduction to Trigonometry','Trigonometric ratios','If 2 sin θ = √3, θ is',['0°','60°','45°','30°'],'B','sin θ = √3/2, so θ = 60° for an acute angle.'],
    ['8 — Introduction to Trigonometry','Identities','9 sec² A − 9 tan² A is',['−9','0','9','None of these'],'C','sec² A − tan² A = 1, hence the value is 9.'],
    ['8 — Introduction to Trigonometry','Complementary angles','If sin A = 1/2 and cos B = 1/2, A + B is',['0°','30°','60°','90°'],'D','For acute angles, sin A = 1/2 gives A = 30° and cos B = 1/2 gives B = 60°, so A + B = 90°.'],
    ['9 — Some Applications of Trigonometry','Heights and distances','From a point 30 m from a tower, the angle of elevation of its top is 45°. The tower’s height is',['30 m','15√3 m','10 m','20√3 m'],'A','tan 45° = height/30 = 1, so the height is 30 m.'],
    ['12 — Areas Related to Circles','Arc length','What is the length of the arc of a circle of radius 7 cm subtending 60° at the centre?',['22 cm','22/3 cm','44 cm','44/3 cm'],'B','Arc length = 60/360 × 2π × 7 = 7π/3 = 22/3 cm, using π = 22/7.'],
    ['12 — Areas Related to Circles','Area of a sector','The area of a sector of radius 14 cm and central angle 90° is',['102 cm²','154 cm²','212 cm²','308 cm²'],'B','Area = 90/360 × π × 14² = 154 cm², using π = 22/7.'],
    ['13 — Surface Areas and Volumes','Cone','A cone has height 12 cm and base diameter 10 cm. Its slant height is',['13 cm','17 cm','5 cm','√149 cm'],'A','Radius = 5 cm; l = √(12² + 5²) = 13 cm.'],
    ['13 — Surface Areas and Volumes','Combined solids','Two cubes of volume 27 cm³ are joined face to face. The total surface area of the resulting solid is',['109.4 cm²','126 cm²','150 cm²','90 cm²'],'D','Each cube has side 3 cm. The joined solid is a 6 × 3 × 3 cuboid: TSA = 2(18 + 18 + 9) = 90 cm².'],
    ['14 — Statistics','Empirical relationship','If mean = 60 and median = 50, the mode is',['20','70','30','None of these'],'C','Mode = 3 × median − 2 × mean = 150 − 120 = 30.'],
    ['15 — Probability','Probability of an event','The probability of getting a tail when a fair coin is tossed is',['2/3','1/2','1/5','0'],'B','The equally likely outcomes are head and tail, so P(tail) = 1/2.']
  ];
  rows.forEach((r,i)=>window.EXAMPREP.questions.push({qid:'EP-JAC-10-M-2026-A-'+String(i+1).padStart(2,'0'),class:'10',subject:'Maths',topic:r[0],subTopic:r[1],question:r[2],options:r[3],correct:r[4],difficulty:'PYQ',explanation:r[5],imageUrl:'',type:'mcq',marks:1,sourceType:'JAC PYQ 2026',sourceRef:`${source}, Q${i+1}`}));
})();

/* Extracted from the supplied JAC Class 10 Science Theory Annual 2026 recording.
   The available paper pages contain Section A, Questions 1-29; Question 30 was not present. */
(() => {
  const source='JAC Class 10 Science (Theory) Annual 2026, Section A (recording source)';
  const rows=[
    ['10 — Light - Reflection and Refraction','Spherical mirrors','What is the geometrical centre of a spherical mirror called?',['Pole','Optical centre','Focus','Centre of curvature'],'A','The pole is the midpoint of the reflecting surface of a spherical mirror.'],
    ['10 — Light - Reflection and Refraction','Uses of mirrors','Which mirror is suitable for shaving?',['Plane mirror','Convex mirror','Concave mirror','None of these'],'C','A concave mirror gives an enlarged, upright image when the face is close to it.'],
    ['11 — The Human Eye and the Colourful World','Lenses','What is the S.I. unit of power of a lens?',['Dioptre (D)','Metre','Centimetre','Millimetre'],'A','Lens power is measured in dioptres, where 1 D = 1 m⁻¹.'],
    ['11 — The Human Eye and the Colourful World','Accommodation','Which structure changes the focal length of the eye lens during accommodation?',['Pupil','Retina','Ciliary muscles','Optic nerve'],'C','Ciliary muscles alter the curvature, and therefore the focal length, of the eye lens.'],
    ['11 — The Human Eye and the Colourful World','Defects of vision','Which lens is used to correct nearsightedness?',['Convex lens','Concave lens','Bifocal lens','Cylindrical lens'],'B','A concave lens diverges incoming rays to correct myopia (nearsightedness).'],
    ['11 — The Human Eye and the Colourful World','Dispersion','The main reason for the formation of a rainbow is',['Reflection','Refraction','Dispersion','All of these'],'D','A rainbow involves refraction, dispersion and internal reflection of sunlight in water droplets.'],
    ['12 — Electricity','Resistance','What is the S.I. unit of resistance?',['Ohm','Ampere','Volt','Coulomb'],'A','Electrical resistance is measured in ohms (Ω).'],
    ['12 — Electricity','Electrical energy','1 kilowatt-hour is equal to',['3.6 × 10⁶ J','3.6 × 10⁵ J','0.36 × 10⁴ J','36 × 10⁶ J'],'A','1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J.'],
    ['12 — Electricity','Resistance','The resistance of a conductor depends on',['Its length','Its cross-sectional area','The nature of its material','All of these'],'D','Resistance depends on length, cross-sectional area and the material (resistivity).'],
    ['13 — Magnetic Effects of Electric Current','Electromagnets','What type of rod is usually used to make an electromagnet?',['Steel','Brass','Soft iron','None of these'],'C','Soft iron is easily magnetised and demagnetised, so it is used as an electromagnet core.'],
    ['1 — Chemical Reactions and Equations','Displacement reactions','Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s) is an example of which reaction?',['Combination','Decomposition','Displacement','Double displacement'],'C','More reactive zinc displaces copper from copper sulphate solution.'],
    ['2 — Acids, Bases and Salts','Oxidation prevention','Which gas is filled in a chips packet?',['Oxygen','Nitrogen','Hydrogen','Carbon dioxide'],'B','Nitrogen prevents oxidation of the fats and oils in chips.'],
    ['1 — Chemical Reactions and Equations','Double displacement reactions','Which type of reaction commonly forms a precipitate?',['Displacement','Combination','Double displacement','Decomposition'],'C','A double displacement reaction can produce an insoluble solid called a precipitate.'],
    ['2 — Acids, Bases and Salts','Salts','Which chemical is used to remove permanent hardness of water?',['Washing soda','Baking soda','Bleaching powder','Gypsum'],'A','Washing soda (sodium carbonate) is used to remove permanent hardness of water.'],
    ['2 — Acids, Bases and Salts','pH scale','What is the pH value of acids?',['7','Less than 7','More than 7','None of these'],'B','Acidic solutions have a pH less than 7.'],
    ['2 — Acids, Bases and Salts','Metal oxides','What is the nature of metallic oxides?',['Acidic','Basic','Neutral','None of these'],'B','Most metallic oxides are basic in nature.'],
    ['4 — Carbon and its Compounds','Hydrocarbons','Which of the following is an unsaturated hydrocarbon?',['C₂H₄','C₃H₈','CH₄','C₅H₁₂'],'A','Ethene, C₂H₄, contains a carbon-carbon double bond and is unsaturated.'],
    ['4 — Carbon and its Compounds','Ionic compounds','Which of the following is not an ionic compound?',['NaCl','MgCl₂','CO₂','Na₂O'],'C','Carbon dioxide is a covalent molecular compound.'],
    ['4 — Carbon and its Compounds','Functional groups','What is the functional group of alcohols?',['−CHO','−OH','−COOH','−CO−'],'B','Alcohols contain the hydroxyl functional group, −OH.'],
    ['4 — Carbon and its Compounds','Isomerism','How many isomers does pentane have?',['2','3','4','5'],'B','Pentane has three structural isomers: n-pentane, isopentane and neopentane.'],
    ['6 — Life Processes','Nutrition','What type of nutrition does Amoeba have?',['Autotrophic','Heterotrophic','Saprophytic','Holozoic'],'D','Amoeba ingests food and digests it internally, which is holozoic nutrition.'],
    ['6 — Life Processes','Digestion','Gastric glands are found in which organ?',['Lungs','Stomach','Liver','Small intestine'],'B','Gastric glands are present in the lining of the stomach.'],
    ['6 — Life Processes','Nutrition','Which is the largest gland in the human body?',['Pituitary','Liver','Ovary','Thyroid'],'B','The liver is the largest gland in the human body.'],
    ['6 — Life Processes','Control and coordination','What is the main thinking part of the brain?',['Forebrain','Midbrain','Hindbrain','Spinal cord'],'A','The forebrain, especially the cerebrum, is the main thinking region.'],
    ['7 — Control and Coordination','Plant hormones','The folding of leaves occurs under the influence of which plant hormone?',['Auxin','Gibberellin','Cytokinin','Abscisic acid'],'A','Auxin-driven differential growth can produce movements such as folding of leaves.'],
    ['7 — Control and Coordination','Hormones','Diabetes is caused by the deficiency of which hormone?',['Adrenaline','Thyroxine','Estrogen','Insulin'],'D','Insulin deficiency prevents normal regulation of blood glucose concentration.'],
    ['8 — How do Organisms Reproduce?','Asexual reproduction','By which method does reproduction take place in Planaria?',['Budding','Regeneration','Fission','Spore formation'],'B','Planaria can reproduce by regeneration from body fragments.'],
    ['8 — How do Organisms Reproduce?','Sexual reproduction in plants','What is present in the anther?',['Ovules','Ovary','Egg cells','Pollen grains'],'D','The anther contains pollen grains, which carry the male gametes.'],
    ['9 — Heredity and Evolution','Heredity','What is the number of chromosomes in humans?',['46','42','48','40'],'A','Human somatic cells normally contain 46 chromosomes (23 pairs).']
  ];
  rows.forEach((r,i)=>window.EXAMPREP.questions.push({qid:'EP-JAC-10-S-2026-A-'+String(i+1).padStart(2,'0'),class:'10',subject:'Science',topic:r[0],subTopic:r[1],question:r[2],options:r[3],correct:r[4],difficulty:'PYQ',explanation:r[5],imageUrl:'',type:'mcq',marks:1,sourceType:'JAC PYQ 2026 (recording)',sourceRef:`${source}, Q${i+1}`}));
})();

/* Extracted from the supplied JAC Class 10 Mathematics 2024-25 session paper.
   It is presented in ExamPrep as PYQ 2025, matching the learner-facing exam year. */
(() => {
  const source='JAC Class 10 Mathematics PYQ 2025 (Session 2024-25)';
  const mcq=[
    ['12 — Areas Related to Circles','Perimeter of a semicircle','Which expression gives the perimeter of a semicircle of radius r?',['2πr','πr','2πr + r','πr + 2r'],'D','The perimeter includes the semicircular arc πr and the diameter 2r.'],
    ['12 — Areas Related to Circles','Area of a sector','Which expression gives the area of a sector of radius r and angle θ?',['πrθ/360°','2πrθ/360°','πr²/360°','πr²θ/360°'],'D','A sector is θ/360 of a full circle, so its area is θ/360 × πr².'],
    ['12 — Areas Related to Circles','Arc length','Which expression gives the length of an arc subtending angle θ at the centre of a circle of radius r?',['πrθ/180°','2πrθ/360°','πr/180°','πrθ/360°'],'B','Arc length is θ/360 × 2πr.'],
    ['14 — Statistics','Mean, median and mode','Which is the basic relationship among mean, median and mode?',['Median = Mode + 2 Mean','Mode = 3 Median − 2 Mean','Mean = 2 Median − Mode','Median = Mean + Mode'],'B','The empirical relation is Mode = 3 Median − 2 Mean.'],
    ['14 — Statistics','Measures of central tendency','Which is the most appropriate measure of central tendency?',['Mean','Median','Mode','None of these'],'A','For the general data set intended in this objective question, the mean is the standard measure of central tendency.'],
    ['5 — Arithmetic Progressions','Natural numbers','The sum of the first ten natural numbers is',['20','40','55','0'],'C','1 + 2 + … + 10 = 10×11/2 = 55.'],
    ['14 — Statistics','Cumulative frequency','A cumulative frequency curve is also called a/an',['Ogive','Mean','Mode','Median'],'A','The graph of cumulative frequency is called an ogive.'],
    ['15 — Probability','Complementary events','The value of P(E) + P(not E) for an event E is',['1','1.5','0.5','2'],'A','An event and its complement exhaust all possible outcomes, so their probabilities sum to 1.'],
    ['15 — Probability','Impossible events','The probability of an impossible event is',['1/2','1','0','−1'],'C','An event that cannot occur has probability 0.'],
    ['15 — Probability','Coin toss','The probability of getting a head when tossing a fair coin is',['2/3','1/2','3/2','2'],'B','There are two equally likely outcomes, head and tail.']
  ];
  mcq.forEach((r,i)=>window.EXAMPREP.questions.push({qid:'EP-JAC-10-M-2025-A-'+String(i+1).padStart(2,'0'),class:'10',subject:'Maths',topic:r[0],subTopic:r[1],question:r[2],options:r[3],correct:r[4],difficulty:'PYQ',explanation:r[5],imageUrl:'',type:'mcq',marks:1,sourceType:'JAC PYQ 2025',sourceRef:`${source}, Q${i+1}`}));
  const written=[
    ['13 — Surface Areas and Volumes','Volume of a cylinder','Find the volume of a long circular cylinder of radius 7 cm and height 5 cm.','πr²h = (22/7) × 7² × 5 = 770 cm³.',['1 mark: use V = πr²h.','1 mark: substitute r = 7 cm and h = 5 cm to obtain 770 cm³.'],2],
    ['14 — Statistics','Mean','If the mean of x, 2, 3, 5 and 4 is 4, find x.','(x + 2 + 3 + 5 + 4)/5 = 4, so x + 14 = 20 and x = 6.',['1 mark: form the mean equation.','1 mark: x = 6.'],2],
    ['13 — Surface Areas and Volumes','Curved surface area of a cone','The oblique height of a cone is 16 cm and the radius of its base is 14 cm. Find its curved surface area.','CSA = πrl = (22/7) × 14 × 16 = 704 cm².',['1 mark: use CSA = πrl.','1 mark: substitute correctly.','1 mark: 704 cm².'],3],
    ['14 — Statistics','Mean of grouped data','Find the mean for the following distribution: class intervals 50–52, 52–54, 54–56, 56–58, 58–60 with frequencies 15, 110, 135, 115, 25.','Class marks are 51, 53, 55, 57 and 59. Σf = 400 and Σfx = 22050; mean = 22050/400 = 55.125.',['1 mark: correct class marks.','1 mark: calculate Σf and Σfx.','1 mark: mean = 55.125.'],3],
    ['14 — Statistics','Mode of grouped data','Find the mode for the distribution: class intervals 10–20, 20–30, 30–40, 40–50, 50–60 with frequencies 6, 8, 15, 9, 8.','The modal class is 30–40. Mode = 30 + [(15−8)/(2×15−8−9)]×10 = 30 + 70/13 ≈ 35.38.',['1 mark: identify modal class 30–40.','2 marks: substitute correctly in the mode formula.','2 marks: mode ≈ 35.38.'],5],
    ['15 — Probability','Complement of an event','A die is thrown twice. Find the probability that 5 will come at least once.','P(5 does not occur in either throw) = (5/6)² = 25/36. Therefore P(5 occurs at least once) = 1 − 25/36 = 11/36.',['2 marks: use the complement event.','2 marks: calculate (5/6)² = 25/36.','1 mark: answer 11/36.'],5]
  ];
  written.forEach((r,i)=>window.EXAMPREP.written.push({qid:'EP-JAC-10-M-2025-W'+String(i+11).padStart(2,'0'),class:'10',subject:'Maths',topic:r[0],subTopic:r[1],question:r[2],type:'short',marks:r[5],difficulty:'PYQ',explanation:r[3],rubric:r[4],sourceType:'JAC PYQ 2025',sourceRef:`${source}, Q${i+11}`}));
})();

/* Hindi companion text for the Science PYQs. */
(() => {
  const q=window.EXAMPREP.questions.filter(x=>x.subject==='Science'&&x.sourceType==='JAC PYQ 2026 (recording)');
  const rows=[
    ['गोलाकार दर्पण','गोलाकार दर्पण का ज्यामितीय केंद्र क्या कहलाता है?',['ध्रुव','प्रकाशिक केंद्र','फोकस','वक्रता केंद्र'],'परावर्तक सतह का मध्य बिंदु दर्पण का ध्रुव कहलाता है।'],
    ['दर्पणों के उपयोग','शेविंग के लिए कौन-सा दर्पण उपयुक्त है?',['समतल दर्पण','उत्तल दर्पण','अवतल दर्पण','इनमें से कोई नहीं'],'चेहरा दर्पण के पास होने पर अवतल दर्पण बड़ा और सीधा प्रतिबिंब बनाता है।'],
    ['लेंस','लेंस की क्षमता का SI मात्रक क्या है?',['डायोप्टर (D)','मीटर','सेंटीमीटर','मिलीमीटर'],'लेंस की क्षमता डायोप्टर में मापी जाती है; 1 D = 1 m⁻¹।'],
    ['समंजन','समंजन के समय नेत्र-लेंस की फोकस दूरी को कौन बदलता है?',['पुतली','रेटिना','सिलियरी पेशियाँ','दृष्टि तंत्रिका'],'सिलियरी पेशियाँ नेत्र-लेंस की वक्रता और इसलिए उसकी फोकस दूरी बदलती हैं।'],
    ['दृष्टि दोष','निकट दृष्टिदोष को ठीक करने के लिए कौन-सा लेंस लगाया जाता है?',['उत्तल लेंस','अवतल लेंस','द्विफोकसी लेंस','बेलनाकार लेंस'],'अवतल लेंस प्रकाश किरणों को अपसारित करके मायोपिया को ठीक करता है।'],
    ['वर्ण-विक्षेपण','इंद्रधनुष बनने का मुख्य कारण क्या है?',['परावर्तन','अपवर्तन','वर्ण-विक्षेपण','ये सभी'],'जल की बूंदों में सूर्य के प्रकाश का अपवर्तन, वर्ण-विक्षेपण और आंतरिक परावर्तन होता है।'],
    ['प्रतिरोध','प्रतिरोध का SI मात्रक क्या है?',['ओम','ऐम्पियर','वोल्ट','कूलॉम'],'विद्युत प्रतिरोध ओम (Ω) में मापा जाता है।'],
    ['विद्युत ऊर्जा','1 किलोवाट-घंटा किसके बराबर है?',['3.6 × 10⁶ J','3.6 × 10⁵ J','0.36 × 10⁴ J','36 × 10⁶ J'],'1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J।'],
    ['प्रतिरोध','किसी चालक का प्रतिरोध किन पर निर्भर करता है?',['उसकी लंबाई','उसके अनुप्रस्थ काट का क्षेत्रफल','उसके पदार्थ की प्रकृति','ये सभी'],'प्रतिरोध लंबाई, अनुप्रस्थ काट के क्षेत्रफल और पदार्थ की प्रतिरोधकता पर निर्भर करता है।'],
    ['विद्युतचुंबक','विद्युतचुंबक बनाने के लिए सामान्यतः किस छड़ का उपयोग होता है?',['इस्पात','पीतल','नरम लोहा','इनमें से कोई नहीं'],'नरम लोहा आसानी से चुंबकित और विचुंबकित हो जाता है, इसलिए इसका उपयोग होता है।'],
    ['विस्थापन अभिक्रियाएँ','Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s) किस प्रकार की अभिक्रिया है?',['संयोजन','अपघटन','विस्थापन','द्विविस्थापन'],'अधिक क्रियाशील जस्ता, कॉपर सल्फेट से तांबे को विस्थापित करता है।'],
    ['ऑक्सीकरण से बचाव','चिप्स के पैकेट में कौन-सी गैस भरी जाती है?',['ऑक्सीजन','नाइट्रोजन','हाइड्रोजन','कार्बन डाइऑक्साइड'],'नाइट्रोजन चिप्स के तेल और वसा का ऑक्सीकरण रोकती है।'],
    ['द्विविस्थापन अभिक्रियाएँ','किस प्रकार की अभिक्रिया में सामान्यतः अवक्षेप बनता है?',['विस्थापन','संयोजन','द्विविस्थापन','अपघटन'],'द्विविस्थापन अभिक्रिया में अघुलनशील ठोस, जिसे अवक्षेप कहते हैं, बन सकता है।'],
    ['लवण','स्थायी कठोर जल को हटाने के लिए किस रसायन का प्रयोग होता है?',['धोने का सोडा','बेकिंग सोडा','विरंजक चूर्ण','जिप्सम'],'धोने का सोडा (सोडियम कार्बोनेट) स्थायी कठोरता हटाने में प्रयुक्त होता है।'],
    ['pH स्केल','अम्लों का pH मान कैसा होता है?',['7','7 से कम','7 से अधिक','इनमें से कोई नहीं'],'अम्लीय विलयनों का pH मान 7 से कम होता है।'],
    ['धातु ऑक्साइड','धात्विक ऑक्साइडों की प्रकृति कैसी होती है?',['अम्लीय','क्षारीय','उदासीन','इनमें से कोई नहीं'],'अधिकांश धात्विक ऑक्साइड क्षारीय प्रकृति के होते हैं।'],
    ['हाइड्रोकार्बन','निम्नलिखित में कौन-सा असंतृप्त हाइड्रोकार्बन है?',['C₂H₄','C₃H₈','CH₄','C₅H₁₂'],'एथीन C₂H₄ में कार्बन-कार्बन द्विबंध होता है, इसलिए यह असंतृप्त है।'],
    ['आयनिक यौगिक','निम्नलिखित में कौन-सा आयनिक यौगिक नहीं है?',['NaCl','MgCl₂','CO₂','Na₂O'],'कार्बन डाइऑक्साइड एक सहसंयोजक आणविक यौगिक है।'],
    ['क्रियात्मक समूह','एल्कोहल का क्रियात्मक समूह क्या है?',['−CHO','−OH','−COOH','−CO−'],'एल्कोहल में हाइड्रॉक्सिल क्रियात्मक समूह −OH होता है।'],
    ['समावयवता','पेंटेन के कितने समावयव होते हैं?',['2','3','4','5'],'पेंटेन के तीन संरचनात्मक समावयव होते हैं: n-पेंटेन, आइसोपेंटेन और नियोपेंटेन।'],
    ['पोषण','अमीबा में किस प्रकार का पोषण होता है?',['स्वपोषी','परपोषी','मृतोपजीवी','प्राणिसम पोषण'],'अमीबा भोजन को निगलकर शरीर के भीतर पचाता है; इसे प्राणिसम पोषण कहते हैं।'],
    ['पाचन','जठर ग्रंथियाँ किस अंग में पाई जाती हैं?',['फेफड़े','आमाशय','यकृत','छोटी आंत'],'जठर ग्रंथियाँ आमाशय की भीतरी परत में पाई जाती हैं।'],
    ['पोषण','मानव शरीर की सबसे बड़ी ग्रंथि कौन-सी है?',['पीयूष ग्रंथि','यकृत','अंडाशय','थायरॉइड'],'यकृत मानव शरीर की सबसे बड़ी ग्रंथि है।'],
    ['नियंत्रण और समन्वय','मस्तिष्क का मुख्य सोचने वाला भाग कौन-सा है?',['अग्र मस्तिष्क','मध्य मस्तिष्क','पश्च मस्तिष्क','मेरुरज्जु'],'अग्र मस्तिष्क, विशेषकर प्रमस्तिष्क, सोचने का मुख्य भाग है।'],
    ['पादप हार्मोन','पत्तियों का मुड़ना किस पादप हार्मोन के प्रभाव से होता है?',['ऑक्सिन','जिबरेलिन','साइटोकाइनिन','एब्सिसिक अम्ल'],'ऑक्सिन के कारण असमान वृद्धि से पत्तियों के मुड़ने जैसी गतियाँ हो सकती हैं।'],
    ['हार्मोन','किस हार्मोन की कमी से मधुमेह होता है?',['एड्रेनालिन','थायरॉक्सिन','एस्ट्रोजन','इंसुलिन'],'इंसुलिन की कमी से रक्त में ग्लूकोज का सामान्य नियंत्रण नहीं हो पाता।'],
    ['अलैंगिक प्रजनन','प्लैनारिया में प्रजनन किस विधि से होता है?',['कलिकायन','पुनर्जनन','विखंडन','बीजाणु निर्माण'],'प्लैनारिया शरीर के टुकड़ों से पुनर्जनन द्वारा प्रजनन कर सकता है।'],
    ['पौधों में लैंगिक प्रजनन','परागकोष में क्या उपस्थित होता है?',['बीजांड','अंडाशय','अंड कोशिकाएँ','परागकण'],'परागकोष में परागकण होते हैं, जो नर युग्मक ले जाते हैं।'],
    ['आनुवंशिकता','मनुष्यों में गुणसूत्रों की संख्या कितनी होती है?',['46','42','48','40'],'मनुष्य की देह कोशिकाओं में सामान्यतः 46 गुणसूत्र (23 जोड़े) होते हैं।']
  ];
  rows.forEach((x,i)=>Object.assign(q[i],{subTopicHi:x[0],questionHi:x[1],optionsHi:x[2],explanationHi:x[3]}));
})();

/* Hindi companion text for the Mathematics PYQ 2025 questions. */
(() => {
  const all=[...window.EXAMPREP.questions,...window.EXAMPREP.written];
  const q=all.filter(x=>x.sourceType==='JAC PYQ 2025');
  const rows=[
    ['अर्धवृत्त का परिमाप','त्रिज्या r वाले अर्धवृत्त का परिमाप कौन-सा व्यंजक देता है?',['2πr','πr','2πr + r','πr + 2r'],'परिमाप में अर्धवृत्ताकार चाप πr और व्यास 2r दोनों शामिल होते हैं।'],
    ['त्रिज्यखंड का क्षेत्रफल','त्रिज्या r और कोण θ वाले त्रिज्यखंड का क्षेत्रफल कौन-सा व्यंजक देता है?',['πrθ/360°','2πrθ/360°','πr²/360°','πr²θ/360°'],'त्रिज्यखंड पूरे वृत्त का θ/360 भाग होता है, इसलिए क्षेत्रफल θ/360 × πr² है।'],
    ['चाप की लंबाई','त्रिज्या r वाले वृत्त के केंद्र पर θ कोण बनाने वाले चाप की लंबाई कौन-सा व्यंजक देता है?',['πrθ/180°','2πrθ/360°','πr/180°','πrθ/360°'],'चाप की लंबाई θ/360 × 2πr होती है।'],
    ['माध्य, माध्यिका और बहुलक','माध्य, माध्यिका और बहुलक के बीच मूल संबंध क्या है?',['माध्यिका = बहुलक + 2 माध्य','बहुलक = 3 माध्यिका − 2 माध्य','माध्य = 2 माध्यिका − बहुलक','माध्यिका = माध्य + बहुलक'],'अनुभवजन्य संबंध है: बहुलक = 3 माध्यिका − 2 माध्य।'],
    ['केंद्रीय प्रवृत्ति के माप','केंद्रीय प्रवृत्ति का सबसे उपयुक्त माप कौन-सा है?',['माध्य','माध्यिका','बहुलक','इनमें से कोई नहीं'],'इस सामान्य आँकड़ा-समूह के लिए माध्य केंद्रीय प्रवृत्ति का मानक माप है।'],
    ['प्राकृतिक संख्याएँ','प्रथम दस प्राकृतिक संख्याओं का योग कितना है?',['20','40','55','0'],'1 + 2 + … + 10 = 10×11/2 = 55।'],
    ['संचयी बारंबारता','संचयी बारंबारता वक्र को क्या कहते हैं?',['ओजाइव','माध्य','बहुलक','माध्यिका'],'संचयी बारंबारता के ग्राफ को ओजाइव कहते हैं।'],
    ['पूरक घटनाएँ','घटना E के लिए P(E) + P(not E) का मान क्या है?',['1','1.5','0.5','2'],'किसी घटना और उसकी पूरक घटना की प्रायिकताओं का योग 1 होता है।'],
    ['असंभव घटनाएँ','एक असंभव घटना की प्रायिकता क्या है?',['1/2','1','0','−1'],'जो घटना हो ही नहीं सकती, उसकी प्रायिकता 0 होती है।'],
    ['सिक्का उछालना','एक निष्पक्ष सिक्का उछालने पर चित आने की प्रायिकता क्या है?',['2/3','1/2','3/2','2'],'चित और पट दो समान रूप से संभावित परिणाम हैं।'],
    ['बेलन का आयतन','त्रिज्या 7 सेमी और ऊँचाई 5 सेमी वाले वृत्तीय बेलन का आयतन ज्ञात कीजिए.','πr²h = (22/7) × 7² × 5 = 770 सेमी³।'],
    ['माध्य','यदि x, 2, 3, 5 और 4 का माध्य 4 है, तो x ज्ञात कीजिए.','(x + 2 + 3 + 5 + 4)/5 = 4, अतः x + 14 = 20 और x = 6।'],
    ['शंकु का वक्र पृष्ठीय क्षेत्रफल','एक शंकु की तिर्यक ऊँचाई 16 सेमी और आधार की त्रिज्या 14 सेमी है। उसका वक्र पृष्ठीय क्षेत्रफल ज्ञात कीजिए.','वक्र पृष्ठीय क्षेत्रफल = πrl = (22/7) × 14 × 16 = 704 सेमी²।'],
    ['वर्गीकृत आँकड़ों का माध्य','वर्गांतर 50–52, 52–54, 54–56, 56–58, 58–60 और बारंबारताएँ 15, 110, 135, 115, 25 के लिए माध्य ज्ञात कीजिए.','वर्ग-चिह्न 51, 53, 55, 57, 59 हैं। Σf = 400, Σfx = 22050; माध्य = 22050/400 = 55.125।'],
    ['वर्गीकृत आँकड़ों का बहुलक','वर्गांतर 10–20, 20–30, 30–40, 40–50, 50–60 और बारंबारताएँ 6, 8, 15, 9, 8 के लिए बहुलक ज्ञात कीजिए.','बहुलक वर्ग 30–40 है। बहुलक = 30 + [(15−8)/(2×15−8−9)]×10 ≈ 35.38।'],
    ['घटना की पूरक प्रायिकता','एक पासे को दो बार फेंका जाता है। कम-से-कम एक बार 5 आने की प्रायिकता ज्ञात कीजिए.','दोनों बार 5 न आने की प्रायिकता (5/6)² = 25/36 है। अतः कम-से-कम एक बार 5 आने की प्रायिकता 1 − 25/36 = 11/36 है।']
  ];
  rows.forEach((x,i)=>Object.assign(q[i],{subTopicHi:x[0],questionHi:x[1],optionsHi:Array.isArray(x[2])?x[2]:undefined,explanationHi:x[3]??x[2]}));
})();


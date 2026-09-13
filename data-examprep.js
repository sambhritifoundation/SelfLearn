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


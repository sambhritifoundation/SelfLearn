/* Complete the six earlier Class 10 Maths 2025 written rubrics. */
(()=>{
 const by=new Map(window.EXAMPREP.written.map(q=>[q.qid,q]));
 const c=(label,labelHi,...patterns)=>({marks:1,label,labelHi,patterns});
 const rules={
 11:[c('Uses cylinder volume formula πr²h','बेलन के आयतन का सूत्र πr²h','πr²h','pi r2 h','pi r squared h','π × 7','π×7'),c('Obtains 770 cm³','770 सेमी³ प्राप्त करता है','770','770 cm','770 सेमी')],
 12:[c('Sets the mean equation with five values','पाँच मानों का माध्य समीकरण बनाता है','x + 14','x+14','/5 = 4','/5=4'),c('Finds x = 6','x = 6 प्राप्त करता है','x = 6','x=6','x is 6')],
 13:[c('Uses curved surface area formula πrl','वक्र पृष्ठ क्षेत्रफल का सूत्र πrl','πrl','pi r l','π × 14','π×14'),c('Substitutes r = 14 and l = 16','r = 14 और l = 16 रखता है','14 × 16','14×16','14 * 16','22/7'),c('Obtains 704 cm²','704 सेमी² प्राप्त करता है','704')],
 14:[c('Finds class marks 51, 53, 55, 57, 59','वर्ग-चिह्न 51, 53, 55, 57, 59','51 53 55 57 59','class marks','वर्ग चिह्न'),c('Finds Σf = 400 and Σfx = 22050','Σf = 400 और Σfx = 22050 प्राप्त करता है','22050','400'),c('Finds mean 55.125','माध्य 55.125 प्राप्त करता है','55.125')],
 15:[c('Identifies modal class 30–40','बहुलक वर्ग 30–40 पहचानता है','30 40','30–40','30-40'),c('Uses grouped-data mode formula','समूहित आँकड़ों का बहुलक सूत्र लगाता है','mode =','बहुलक =','l +','f1'),c('Uses f₁ = 15','f₁ = 15 का प्रयोग','15'),c('Uses neighbouring frequencies 8 and 9','आसपास की बारंबारताएँ 8 और 9','8','9'),c('Obtains approximately 35.38','लगभग 35.38 प्राप्त करता है','35.38','35.384')],
 16:[c('Recognises two independent die throws','पासे के दो स्वतंत्र फेंक पहचानता है','two throws','twice','दो बार','36'),c('Finds probability of no 5 in one throw = 5/6','एक बार 5 न आने की प्रायिकता 5/6','5/6'),c('Squares for no 5 in both throws','दोनों बार 5 न आने के लिए वर्ग करता है','25/36','(5/6)²','(5/6)^2'),c('Uses complement for at least one 5','कम-से-कम एक 5 के लिए पूरक घटना लगाता है','1 - 25/36','1−25/36','complement','पूरक'),c('Obtains 11/36','11/36 प्राप्त करता है','11/36')]
 };
 for(const [n,grading] of Object.entries(rules)){const q=by.get(`EP-JAC-10-M-2025-W${n}`);if(!q)throw Error(`Maths 2025 W${n} missing`);q.grading=grading;q.needsTeacherReview=true;}
})();

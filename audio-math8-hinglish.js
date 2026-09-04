/* Spoken Roman Hinglish: follows the conversational, titled-segment approach
   of MTH11-7-1 (Pascal's Triangle). Not an automatic transliteration.
   English math terms and number words avoid Devanagari/notation being skipped
   by English-only devices. Written notes remain Hindi/Hinglish. */
(function(){
  'use strict';
  var course=window.SL_DATA.subjects.find(function(s){return s.code==='MATH8';});
  var scripts=[
    [
      ['Chaliye, saath banate hain','Chaliye, ek kaagaz aur pencil le lijiye. Rani ke school ke aangan mein tiles lagani hain. Ek line mein four tiles banaiye. Ab aisi hi four lines banaiye. Jaldi nahi hai. Pehle apna chhota sa drawing poora kar lijiye.'],
      ['Pehle giniye, phir naam dijiye','Ab tiles giniye. Four, eight, twelve, sixteen. Total sixteen tiles hain. Kya aapne notice kiya? Har line mein four, aur lines bhi four. Dono taraf ginti same hai. Isi liye yeh square hai. Four times four ko hum four squared kehte hain.'],
      ['Yeh chhoti si galti mat kariye','Four ke upar chhota two dekh kar four times two mat kariye. Yahan two ka matlab hai, four ko do baar factor banana. Four times four. Double karna aur square karna alag baat hai. Four ka double eight hai. Four ka square sixteen hai.'],
      ['Slider se apna andaaza jaanchiye','Ab slider ko three par rakhiye. Nine tiles mili? Ab six par le jaane se pehle sochiye. Kya tiles sirf double hongi? Nahi. Thirty-six hongi. Side dono taraf double hui, isliye andar ki jagah four times ho gayi. Aap chahein to kaagaz par four chhote squares jod kar bhi dekh sakte hain.'],
      ['Ab aap teacher baniye','Ek last baat. Andar ki jagah area hai. Bahar ki poori boundary perimeter hai. Five metre side par area twenty-five square metres, lekin perimeter twenty metres hoga. Ab kisi ghar wale ko apna drawing dikha kar dono ka farq samjhaiye. Phir practice kariye.']
    ],
    [
      ['Purana square mat mitaiye','Apna four by four square rakhiye. Rani ab ise five by five banana chahti hai. Purani tiles hatani hain kya? Nahi. Bas kinare par nayi tiles jodni hain. Pehle andaaza lagaiye, kitni?'],
      ['Kone ki tile ko mat bhooliye','Ek taraf four tiles lagaiye. Dusri taraf bhi four. Ab kone ko dekhiye. Wahan ek jagah khaali hai. One tile aur chahiye. Four plus four plus one, total nine. Isi liye twenty-five aur sixteen ka difference nine hai.'],
      ['Pattern apne aap dikhega','Ab two by two se three by three banaiye. Two plus two plus one, yani five nayi tiles. Ek tile se shuru karke three, phir five, phir seven jodte jaiye. Total one, four, nine, sixteen milta hai. Yeh squares hain. Aapne rule ratta nahi maara. Border gina hai.'],
      ['Aakhri digit sirf ek clue hai','Ab number twenty-six dekhiye. Last digit six hai. Kya isliye yeh square hoga? Nahi. Sixteen square hai, lekin twenty-six nahi. Last digit two, three, seven ya eight ho, to square nahi ho sakta. Baaki endings par humein aur check karna padega.'],
      ['Aapki baari','Sixteen aur twenty-five ke beech numbers likhiye. Seventeen se twenty-four tak eight numbers hain. Difference nine hai, beech mein eight numbers hain. End wale numbers nahi ginne. Ab six by six square ka agla border khud predict kariye, phir slider se jaanchiye.']
    ],
    [
      ['Is baar ulta sawaal hai','Is baar Rani ke paas forty-nine tiles hain. Use square banana hai. Humein total pata hai, side nahi. Sochiye, ek line mein kitni tiles rakhein ki lines ki ginti bhi utni hi ho? Thoda ruk kar try kariye.'],
      ['Square ko wapas kholiye','Seven lines, har line mein seven tiles. Seven times seven, forty-nine. Isliye square root of forty-nine, seven hai. Square mein side se area milta hai. Square root mein area se side milti hai. Total ko two se divide nahi karna hai.'],
      ['Root sign ka matlab','Aap keh sakte hain, minus seven times minus seven bhi forty-nine hai. Bilkul sahi. Lekin root sign humein non-negative answer deta hai, yani zero ya usse bada. Isliye root of forty-nine sirf seven hai. Agar sawaal x squared equals forty-nine ho, tab seven aur minus seven, dono solutions hain.'],
      ['Chhota square bhi bana sakte hain','Half metre side ki square chatai sochiye. Half times half, one quarter. Yani zero point five ka square, zero point two five hai. To zero point two five ka root, zero point five. Decimal dekh kar darne ki zaroorat nahi. Multiply karke check kar sakte hain.'],
      ['Ab khud jaanchiye','Slider mein area eighty-one chuniye. Side padhne se pehle apna answer boliye. Nine kaha? Nine times nine karke jaanchiye. Jab bhi root nikaalein, uska square karke original number wapas aana chahiye. Bas yahi aapki pakki jaanch hai.']
    ],
    [
      ['Badi ginti, chhote hisse','School mein one hundred forty-four tiles aayi hain. Har possible side try karna lamba hoga. Chaliye number ko chhote prime factors mein todte hain. Prime number, jaise two ya three, ke positive factors sirf one aur woh khud hote hain.'],
      ['Same factors ki jodi banaiye','One hundred forty-four mein four twos aur two threes milte hain. Kaagaz par likhiye: two, two, two, two, three, three. Ab same numbers ki jodi banaiye. Two ki two pairs, aur three ki one pair.'],
      ['Har jodi se ek','Har pair se ek number lijiye. Two, two aur three. Inhe add nahi, multiply kariye. Two times two times three, twelve. Kyon? Twelve ka square karenge, to har chuna hua factor do baar wapas aa jayega. Twelve times twelve, one hundred forty-four.'],
      ['Akela factor kya batata hai','Ab seventy-two chuniye. Two ka ek pair, three ka ek pair, aur ek two akela bach gaya. Isliye seventy-two perfect square nahi hai. Ek aur two dene ke liye two se multiply kariye. Ya akela two hatane ke liye two se divide kariye. Dono se square milega, lekin alag square.'],
      ['Aap detective baniye','Lab mein one hundred eighty chuniye. Kaun akela bach raha hai? Five. Use ek partner chahiye, isliye five se multiply karenge. Sirf missing partner dena hai, saare factors dobara nahi. Ab apna reason kisi ko samjhaiye, phir practice shuru kariye.']
    ],
    [
      ['Pehle andaaza kaam aata hai','Bagiya ke liye fifty square metres ki jagah chahiye. Seven metre side try kariye. Seven times seven, forty-nine. Thoda kam hai. Eight times eight, sixty-four. Yeh zyada hai. To exact side seven aur eight ke beech hogi.'],
      ['Answer ko do taraf se pakdiye','Humein abhi exact root nahi mila, phir bhi important baat pata chal gayi. Seven se bada, eight se chhota. Koi twenty-five ko root bata de, to aap turant keh sakte hain, nahi, yeh fit nahi hota. Isi liye lamba hisaab karne se pehle estimate useful hai.'],
      ['Thoda aur paas jaiye','Seven point one ko khud se multiply kariye. Fifty point four one aata hai. To root of fifty, seven point one se bhi thoda kam hai. Lekin seven se zyada. Humne root ko aur chhoti range mein pakad liya.'],
      ['Lagbhag aur exact alag hain','Nearest tenth ke liye beech ka seven point zero five check karte hain. Uska square fifty se kam hai. Isliye nearest tenth seven point one hoga. Lekin ise exact answer mat kahiye. Lagbhag, yani approximately, boliye. Screen ka decimal bhi rounded hai.'],
      ['Aapki baari','Ab area eighty kariye. Pehle uske aas-paas ke squares bataiye. Eight squared sixty-four, nine squared eighty-one. To root eight aur nine ke beech. Agar poore metre mein side leni ho aur kam-se-kam eighty square metres chahiye, to nine metres lena padega.']
    ],
    [
      ['Chhote steps mein bada root','Chaliye two thousand twenty-five ka root saath nikaalte hain. Kaagaz le lijiye. Pehle estimate. Forty squared sixteen hundred, fifty squared twenty-five hundred. Answer forty aur fifty ke beech hoga.'],
      ['Digits ki jodi se shuru','Right side se digits ki pairs banaiye. Twenty, phir twenty-five. Pehle twenty ko dekhiye. Four squared sixteen usmein fit hota hai. Five squared twenty-five zyada hai. Isliye root ka pehla digit four likhiye.'],
      ['Agli pair neeche laiye','Twenty mein se sixteen minus kariye. Four bacha. Ab next pair, twenty-five, neeche laiye. Working number four hundred twenty-five bana. Yahan four mein twenty-five add nahi karna hai. Digits neeche laakar four hundred twenty-five banana hai.'],
      ['Agla digit sochiye','Root ka four double karke eight mila. Ab one place shift karke eighty lijiye. Naya digit five try karte hain. Eighty plus five, yani eighty-five. Eighty-five times five, four hundred twenty-five. Bilkul fit! Four ke saath five likhiye. Answer forty-five.'],
      ['Eighty kahan se aaya','Pehla digit yahan forty ka hissa tha. Forty by forty square ko bada karne par forty wali two strips lagti hain. Isliye eighty aata hai. Kone ka chhota square bhi jodna hota hai. Ab forty-five times forty-five se check kariye. Two thousand twenty-five wapas milna chahiye. Phir lab mein next example khud kariye.']
    ],
    [
      ['Ek layer se shuru kariye','Kabir school ka model bana raha hai. Uske paas chhote cubes hain, yani chhote blocks jinki length, width aur height same hai. Ek layer mein three rows banaiye, har row mein three blocks. Total nine blocks hue.'],
      ['Ab oonchai bhi giniye','Abhi sirf floor bana hai. Bada cube banane ke liye aisi three layers chahiye. Har layer mein nine, aur layers three. Nine times three, twenty-seven. Isi ko three cubed kehte hain. Three times three times three.'],
      ['Square aur cube mein farq','Square mein two directions gin rahe the. Cube mein third direction, height, bhi aa gayi. Sirf front side dekh kar mat rukiye. Peechhe ya neeche ki layers bhi hain. Screen par har picture ek alag layer hai. Sabko ek-ek baar giniye.'],
      ['Double side, kitna volume','Slider ko two par rakhiye. Total eight. Ab four par le jaane se pehle sochiye. Total sixty-four hoga. Eight times zyada. Kyon? Length double, width double, height double. Two times two times two, eight.'],
      ['Units aur sign ko samjhiye','Area square units mein tha. Volume cubic units mein hai. Five centimetre edge ka volume one hundred twenty-five cubic centimetres hoga. Number ke hisaab mein minus two ka cube minus eight hai, kyunki three negative factors hain. Lekin asli box ki length negative nahi hoti. Ab layers bana kar kisi ko samjhaiye.']
    ],
    [
      ['Total se edge tak','Kabir ke paas two hundred sixteen chhote cubes hain. Inhe ek poora cube banana hai, bina khaali jagah ke. Har edge par kitne cubes aayenge? Six times six times six, two hundred sixteen. Isliye cube root six hai.'],
      ['Teen-teen ka group','Yaad hai square root mein pairs banaye the? Cube root mein triples banenge, yani same prime ke three factors ka group. Two hundred sixteen mein three twos aur three threes hain. Kaagaz par dono groups banaiye.'],
      ['Har triple se ek','Two ke triple se one two lijiye. Three ke triple se one three. Multiply kariye: two times three, six. Six ko cube karenge to saare factors wapas aa jayenge. Total ko three se divide karna cube root nahi hai.'],
      ['Ek number, do alag roots','Sixty-four ko dekhiye. Usmein six twos hain. Square root ke liye three pairs bante hain, answer eight. Cube root ke liye two triples bante hain, answer four. Dono sahi hain, lekin sawaal alag hain. Root sign ke paas small three ko dhyan se dekhiye.'],
      ['Check karke bharosa banaiye','Minus one hundred twenty-five ka cube root minus five hai. Minus five times minus five times minus five karke dekhiye. Ab lab mein one thousand chuniye. Edge ten aayi? Ten times ten times ten se jaanchiye. Check se answer par bharosa banta hai, sirf yaad karne se nahi.']
    ],
    [
      ['Group mein kya kami hai','Seventy-two cubes se poora cube nahi ban raha. Is baar sawaal hai, kis sabse chhoti positive whole number se multiply karein? Prime factors dekhiye. Three twos aur two threes hain.'],
      ['Sirf missing partner dijiye','Twos ka triple poora hai. Threes ke group mein ek three kam hai. Bas three se multiply kariye. Seventy-two times three, two hundred sixteen. Six cubed bhi two hundred sixteen hai. Extra two dene ki zaroorat nahi thi.'],
      ['Divide wala sawaal alag hai','Ab sawaal badalte hain. Sabse chhoti kis number se divide karein? Adhoore group ke dono threes hatane hain. Three times three, nine. Seventy-two divided by nine, eight. Eight, two cubed hai. Sirf three se divide karenge to twenty-four bachega, cube nahi.'],
      ['Multiply aur add ko mat milaiye','Three se multiply karna, three blocks jodna nahi hai. Seventy-two se two hundred sixteen tak add karke pahunchna ho, to difference nikaaliye. Two hundred sixteen minus seventy-two, one hundred forty-four naye blocks. Operation badla, answer bhi badla.'],
      ['Ab aap missing factor khojiye','Lab mein two hundred chuniye. Factors mein twos ka triple poora hai. Fives ka group ek five maang raha hai. Five se multiply karke one thousand banega. Ab five ko answer likhne se pehle apne shabdon mein reason boliye. Phir practice mein naye numbers try kariye.']
    ],
    [
      ['School ke do kaam','Ab aap planning team mein hain. Ek square bagiyaa ka area one hundred forty-four square metres hai. Ek alag chhote cube model ka volume one hundred twenty-five cubic centimetres hai. Dono mein same root lenge kya? Pehle khud sochiye.'],
      ['Bagiya ki side aur baad','Bagiya ki two directions equal hain, to square root lenge. Root of one hundred forty-four, twelve. Side twelve metres hui. Fence chaaron taraf lagegi. Four times twelve, forty-eight metres. Area ko fencing ki length mat samajhiye.'],
      ['Chhote box mein cube root','Model box mein length, width aur height, teeno same hain. Isliye cube root. Five times five times five, one hundred twenty-five. Edge five centimetres hui. Garden aur model alag cheezein hain. Unki units mix nahi karni hain.'],
      ['Kharcha, lekin shart ke saath','Fence thirty rupees per metre hai. Forty-eight times thirty, one thousand four hundred forty rupees. Yeh tab, jab poori boundary band karni hai. Gate, waste aur labour charges is hisaab mein nahi hain. Achhi planning mein yeh shartein bolna bhi zaroori hai.'],
      ['Apni baat samjha paana hi seekhna hai','Ab kaagaz par garden aur model alag banaiye. Side aur units likhiye. Garden ko square karke, box ko cube karke check kariye. Phir ghar mein kisi ko bina notes padhe samjhaiye ki ek mein square root aur dusre mein cube root kyon liya. Agar samjha pa rahe hain, to aap sirf answer yaad nahi kar rahe. Aap samajh rahe hain.']
    ]
  ];
  course.chapters[0].topics.forEach(function(tp,i){
    tp.audio.hi=scripts[i].map(function(s){return {t:s[0],s:s[1]};});
    tp.audioVoiceLang={en:'en',hi:'en'};
    tp.audioRate=0.88;
  });
  course.intro.en=course.intro.en.replace('Audio is generated by your browser’s installed voices, not a human recording. Voice availability and quality vary by device.', 'English and natural Roman-Hinglish audio use your browser’s installed English voices, preferring Indian English. This is not a human recording. Choose Gentle or Extra slow; pronunciation still varies by device.');
  course.intro.hi=course.intro.hi.replace('Audio आपके browser की आवाज़ों से बनता है, human recording नहीं है। Device के अनुसार आवाज़ मिलना और उसकी गुणवत्ता बदल सकती है।', 'English और आसान Roman-Hinglish audio में browser की English आवाज़ लगती है; Indian English को प्राथमिकता है। यह human recording नहीं है। आराम से या बहुत आराम से वाली गति चुनिए। Device के अनुसार उच्चारण फिर भी बदल सकता है।');
}());

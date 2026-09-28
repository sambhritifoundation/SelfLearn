/* Provisional marking points for the written questions in the supplied 2025 English video.
   Phrase matches help learners review their work; a teacher decides final marks. */
(()=>{
 const questions=new Map(window.EXAMPREP.written.map(q=>[q.qid,q]));
 const c=(label,...patterns)=>({marks:1,label,labelHi:label,patterns});
 const rules={
  31:[c('Working with other people','working together','work together','working with others','work with others'),c('A shared goal','common goal','shared goal','same goal','common aim')],
  32:[c('Better communication or sharing ideas','communicate better','better communication','sharing ideas','share ideas','listen to others'),c('Friendship, support or creative solutions','friendships','friendship','support one another','support each other','creative solutions','new ideas')],
  33:[c('People have different opinions','different opinions','disagree','differences of opinion','different ideas'),c('They have different ways of doing things','different ways','ways of doing','different approaches','ways to work')],
  34:[c('Disagreements teach respect','respect others','respect each other','respect different','respectful'),c('They help people understand or reach agreement','understand different viewpoints','understand others','find a way to agree','reach agreement','listen to other views')],
  35:[c('Teamwork helps people achieve more','achieve more','accomplish more','do more together','greater results'),c('The result exceeds working alone','working alone','could alone','than alone','individual effort','on our own')],
  36:[c('First blank: communicate better','communicate better','communicate well','better communication','learn to communicate'),c('Second blank: opinions or ways of doing things','different opinions','opinions','ways of doing things')],
  37:[{marks:2,label:'The passage word is “creative”',labelHi:'The passage word is “creative”',patterns:['creative']}],
  38:[c('A sentence using “important”','it is important','important to','important for','is important','are important'),c('A sentence using “respect”','respect others','respect our','respect each','we respect','show respect','with respect')],
  39:[c('She could run fast','could run','a could','she could'),c('May you have a prosperous life','may you','b may'),c('We must follow traffic rules','must follow','c must','we must')],
  40:[c('Too removed while preserving meaning','so small that','not big enough','not old enough'),c('Meaningful negative form','not a bad boy','isn t a bad boy'),c('Indirect speech with the universal fact','told me that delhi is','said to me that delhi is','told me delhi is')],
  41:[c('Poem: The Ball Poem','the ball poem'),c('Poet: John Berryman','john berryman','berryman'),c('The ball went into the water','in the water','into the water','fell into water','went into water')],
  43:[c('The seagull lacked confidence','afraid','scared','fearful','nervous'),c('He feared his wings would not support him','wings would not support','wings could not support','wings would not carry','wings too weak','would fall'),c('He hesitated to fly from the ledge','leave the ledge','jump off','take the plunge','take off','fly from the ledge')],
  44:[c('The Goan baker or pader made bread','baker','pader'),c('Bread is part of daily Goan life','daily life','everyday life','daily meal','every meal','morning bread'),c('Bread is important at celebrations','marriage','wedding','festival','party','feast')],
  45:[c('Dust of snow means tiny snowflakes','tiny snowflakes','small snowflakes','fine snow','snowflakes'),c('A crow shook snow from a hemlock tree','crow','hemlock'),c('The incident improved the poet’s mood','changed his mood','cheered him','made him happy','saved part of his day','regretted day','gloomy mood')],
  46:[c('Matilda disliked her modest circumstances','modest life','middle class','poor life','simple life','humble life'),c('She longed for wealth or luxury','rich','wealth','luxury','jewels','fine clothes','elegant life'),c('Dissatisfaction or envy made her unhappy','dissatisfied','unhappy with','not content','envy','discontent','dreamed of')],
  47:[c('An appropriate greeting','dear brother','dear younger brother','my dear brother'),c('Advice to study regularly or hard','study hard','study regularly','work hard','focus on studies','make a timetable'),c('Advice to avoid bad company','avoid bad company','stay away from bad','keep away from bad','choose good friends'),c('Reason or encouragement','future','success','exams','good habits','education'),c('Suitable closing and signature','your brother','yours lovingly','yours affectionately','with love','loving brother')],
  49:[c('Lencho believed God would help him','faith in god','believed in god','believed god','trust in god'),c('The postmaster wanted to preserve that faith','keep his faith','protect his faith','not shake his faith','preserve his faith'),c('The postmaster collected or contributed money','collected money','gave money','contributed money','raised money','pooled money'),c('The money helped after the destroyed crop','crop destroyed','lost his crop','hailstorm','ruined crops','needed money'),c('He signed as God so Lencho would trust the gift','signed god','signed as god','from god','believe it came from god')],
  50:[c('Anne Frank was writing in a diary','anne frank','diary','kitty'),c('She lacked a close confidant','no close friend','no true friend','lonely','confide in'),c('Paper lets her express private feelings','express her feelings','share her feelings','write her thoughts','pour out her heart'),c('Paper listens patiently without interruption','does not interrupt','patient listener','never interrupts','more patience'),c('Paper does not judge or tire of her','does not judge','without judgment','never gets tired','not criticize','keeps her secrets')],
  51:[c('Parents worried about Bholi’s marriage prospects','pockmark','stammer','difficult to marry','marriage prospects','unattractive'),c('Bishamber was considered a suitable or wealthy match','wealthy','rich','well off','prosperous','suitable match'),c('He initially demanded no dowry','no dowry','without dowry','did not ask for dowry'),c('He later demanded money on seeing her face','demanded dowry','demanded five thousand','demanded 5000','asked for money','saw her pockmarks'),c('Bholi refused the marriage and defended her dignity','bholi refused','she refused','refused to marry','rejected him','stood up for herself')],
  52:[c('Griffin was an intelligent scientist who became invisible','brilliant scientist','clever scientist','intelligent scientist','invented invisibility','discovered invisibility','became invisible'),c('He misused his discovery or broke the law','misused','irresponsibly','break the law','broke the law','lawless','abused his power'),c('He set fire to his landlord’s house','sets fire','set fire','burned the house','burnt the house','arson'),c('He stole or robbed others','steals','stole','robs','robbed','theft','thief'),c('His behaviour was selfish, cruel or lacked responsibility','selfish','cruel','lack of concern','without empathy','no responsibility','honesty and responsibility')]
 };
 const games=[c('Games improve fitness or health','fitness','healthy','health','exercise','strong body'),c('They teach teamwork or discipline','teamwork','discipline','cooperation','team spirit'),c('They build character or confidence','confidence','character','sportsmanship','fair play'),c('They offer recreation or stress relief','recreation','relax','stress','enjoyment','fun'),c('The paragraph has a concluding point','important in life','essential','should play','balanced life','all students')];
 const favourite=[c('Names a favourite game','my favourite game is','my favorite game is','i like playing','i love playing','my favourite sport'),c('Explains how or where it is played','played with','played on','two teams','players','rules'),c('Describes personal participation','i play','we play','i practise','i practice','my team'),c('States why the game is enjoyable','enjoy','exciting','fun','love the game','like this game'),c('Mentions a benefit or closing thought','fitness','healthy','teamwork','discipline','confidence','favourite game')];
 const models={
  31:'Teamwork means working together with others to reach a common goal.',
  32:'Two benefits are better communication and stronger friendships. Sharing ideas can also lead to creative solutions.',
  33:'Teamwork can be challenging because people may have different opinions or ways of doing things.',
  34:'Working through disagreements teaches us to respect others and understand different viewpoints.',
  35:'By working together, we can achieve more than we could achieve alone.',
  36:'(i) We learn to communicate better. (ii) People may have different opinions or ways of doing things.',
  37:'Creative.',
  38:'Education is important for everyone. We should respect other people.',
  39:'(a) could  (b) May  (c) must',
  40:'(a) The baby is so small that it cannot speak. (b) He is not a bad boy. (c) She told me that Delhi is the capital of India.',
  41:'The extract is from “The Ball Poem” by John Berryman. The ball bounced into the water.',
  43:'The young seagull was afraid that his wings would not support him, so he hesitated to leave the ledge and fly.',
  44:'The village baker, or pader, supplied bread in Goa. Bread was part of daily life and was especially important at marriages, festivals and other celebrations.',
  45:'“Dust of snow” means fine snowflakes. A crow shook snow from a hemlock tree onto the poet. The small incident lifted his gloomy mood and saved part of his day.',
  46:'Matilda was unhappy because she was dissatisfied with her modest life and longed for wealth, fine clothes and luxury.',
  47:'Dear Brother, Please study regularly and work hard for your exams. Choose friends who encourage good habits, and stay away from bad company. Your education and character will help you build a good future. With love, Your brother.',
  48:'Either paragraph is valid. For “Importance of Games and Sports”, explain fitness, teamwork, discipline and enjoyment, then conclude. For “Your favourite game”, name the game, describe how you play it, why you enjoy it and what you learn from it.',
  49:'The postmaster was moved by Lencho’s faith in God. After the hailstorm destroyed Lencho’s crop, he gathered money to help him and signed the letter “God” so that Lencho’s faith would remain unshaken.',
  50:'Anne Frank wrote this because she felt she had no close friend in whom she could confide. Her diary let her express private thoughts freely. Paper would listen patiently without interrupting or judging her.',
  51:'Bholi’s parents accepted Bishamber because they feared that her pockmarks and stammer would make marriage difficult, and he initially asked for no dowry. When he later demanded money after seeing her face, Bholi refused to marry him.',
  52:'Griffin is a brilliant scientist who discovers invisibility but uses it irresponsibly. He sets fire to his landlord’s house, steals and robs others. His selfish and lawless behaviour shows that intelligence without honesty or responsibility can harm people.'
 };
 for(const [number,criteria] of Object.entries(rules)){
  const q=questions.get(`EP-JAC-10-E-2025-VIDEO-${number}`);
  if(!q)throw Error(`Missing 2025 English PYQ ${number}`);
  q.grading=criteria;q.explanation=models[number];q.needsTeacherReview=true;
 }
 const paragraph=questions.get('EP-JAC-10-E-2025-VIDEO-48');
 paragraph.gradingAlternatives=[games,favourite];
 paragraph.explanation=models[48];
 delete paragraph.grading;
 if(Object.keys(models).length!==21)throw Error('Incomplete 2025 English model answers');
})();

/* Language corrections for source papers that originally supplied only Hindi text. */
(()=>{
  const b=window.EXAMPREP,all=[...b.questions,...b.written],byId=new Map(all.map(q=>[q.qid,q]));
  const scienceMcq=[
    ['01','A highly polished glass surface is called',['glass slab','lens','mirror','none of these']],
    ['02','An object is placed at the focus of a concave mirror of focal length 30 cm. Its image is formed at',['30 cm','60 cm','infinity','none of these']],
    ['03','A concave lens has a focal length of 20 cm. What is its power?',['2 dioptres','−2 dioptres','5 dioptres','−5 dioptres']],
    ['04','The magnification produced by a concave lens is equal to',['u/v','v/u','−u/v','−v/u']],
    ['05','Which defect of vision is caused when the eyeball becomes elongated?',['myopia','hypermetropia','presbyopia','none of these']],
    ['06','In bright light, the pupil becomes',['smaller','larger','unchanged','none of these']],
    ['07','Which of the following units is equivalent to an ampere (A)?',['coulomb/second','joule/coulomb','joule/second','none of these']],
    ['08','Ten resistors of 1 Ω each are connected in parallel. Their equivalent resistance is',['100 Ω','12 Ω','10 Ω','1/10 Ω']],
    ['09','Current in a straight horizontal wire flows from east to west. The magnetic field at a point directly below the wire is directed from',['north to south','south to north','east to west','none of these']],
    ['10','What is the main source of energy for Earth?',['coal','water','wood','the Sun']],
    ['12','The formation of a black coating on silver is an example of',['corrosion','rancidity','oxidation by an oxidising agent','reduction by a reducing agent']],
    ['13','Which ion is produced in an aqueous solution of an acid?',['OH⁻ ion','H⁺ ion','H₃O⁻ ion','none of these']],
    ['14','The chemical formula of bleaching powder is',['CaCO₃','CaCl₂O','CaOCl₂','Ca(HCO₃)₂']],
    ['15','Which of the following metals is the most ductile?',['gold','iron','copper','zinc']],
    ['16','The correct order of reactivity of the metals is',['Na > Zn > Mg > Cu','Na > Mg > Cu > Zn','Mg > Na > Zn > Cu','Na > Mg > Zn > Cu']],
    ['17','The valency of carbon is',['1','2','4','6']],
    ['18','Sodium salts of long-chain carboxylic acids are called',['esters','soaps','detergents','none of these']],
    ['19','Silicon belongs to which group of the modern periodic table?',['13','12','14','2']],
    ['20','How many elements are present in Period 2 of the modern periodic table?',['4','5','8','10']],
    ['21','Heterotrophic organisms depend directly or indirectly for their survival on',['algae','fungi','soil','green autotrophic plants']],
    ['22','The loss of water as vapour from the aerial parts of a plant is called',['excretion','osmosis','diffusion','transpiration']],
    ['23','The gap between two nerve cells is called a',['axon','cyton','synapse','medulla']],
    ['24','The centre of intelligence and reasoning in humans is the',['cerebrum','cerebellum','spinal cord','hypothalamus']],
    ['25','The ovum is fertilised in the',['vagina','uterus','ovary','fallopian tube']],
    ['26','The fusion of a male gamete and a female gamete forms a',['zygote','ovum','sperm','seed']],
    ['27','Which is an example of a vestigial organ?',['muscles of the ear pinna','coccygeal vertebrae','nictitating membrane','all of these']],
    ['28','A trait of an organism is influenced by',['paternal DNA only','maternal DNA only','both paternal and maternal DNA','neither of these']],
    ['29','The ozone layer is depleted by',['CFCs','DDT','ATP','NADT']],
    ['30','Which natural resource is declining most rapidly worldwide?',['water','forests','wind','sunlight']]
  ];
  for(const [n,question,options] of scienceMcq){const q=byId.get(`EP-JAC-10-S-2024-A-${n}`);if(!q)continue;q.question=question;q.options=options;q.subTopic='Objective question';q.explanation=`Correct answer: ${options['ABCD'.indexOf(q.correct)]}`;}
  const scienceWritten={
    31:'What is nationalism?',32:'What is meant by the power of accommodation of the eye?',33:'What do you understand by a precipitation reaction?',34:'Why does an aqueous solution of an acid conduct electricity?',35:'Write any two functions of the human testes.',36:'How is the brain protected from external shocks?',37:'How are forests biodiversity hotspots?',38:'What harmful effects can result from depletion of the ozone layer?',39:'An object 5 cm high is placed 25 cm from a converging lens of focal length 10 cm. Find the position, nature and size of the image.',40:'Write three important uses of a concave mirror.',41:'Why do stars twinkle but planets do not?',42:'Balance the following equations:\n(a) N₂ + H₂ → NH₃\n(b) K + H₂O → KOH + H₂\n(c) Pb(NO₃)₂ → PbO + NO₂ + O₂',43:'How is bleaching powder prepared? Write two of its uses.',44:'Differentiate between Mendeleev’s periodic table and the modern periodic table.',45:'Differentiate between a reflex action and a reflex arc.',46:'What is vegetative propagation? What are its limitations?',47:'State Ohm’s law and describe how it can be verified experimentally.',48:'What is an electric motor? Explain its working with a labelled diagram.',49:'In forming a compound AB, each atom of A loses one electron while each atom of B gains one electron. State the nature of the bond in AB and write four properties of the compound.',50:'Write the structural formulae of:\n(a) bromopentane\n(b) methanal\n(c) propyne\n(d) benzene\n(e) propanoic acid',51:'Define photosynthesis and briefly explain the process.',52:'What is sex determination? Explain the role of the environment in sex determination.'
  };
  for(const [n,question] of Object.entries(scienceWritten)){const q=byId.get(`EP-JAC-10-S-2024-W-${n}`);if(q){q.question=question;q.subTopic='Written question';}}
  const mathsWritten=[
    'Using prime factorisation, find the HCF and LCM of 510 and 92.',
    'Divide the polynomial p(x) = 3x² + 7x − 6 by g(x) = x + 3, and write the quotient and remainder.',
    'ABC is an isosceles triangle in which AC = BC. If AB² = 2AC², prove that ABC is a right triangle.',
    'If Q(0, 1) is equidistant from P(5, −3) and R(x, 6), find the value of x.',
    'Evaluate: sin 60° × cos 30° + sin 30° × cos 60°.',
    'Prove that the lengths of tangents drawn from an external point to a circle are equal.',
    'Kajal tosses a coin once. Find the probability of obtaining: (a) a head, (b) a tail.',
    'Find the HCF of 124 and 148 using Euclid’s division algorithm.',
    'Solve graphically: 2x + y − 6 = 0 and 2x − y − 2 = 0.',
    'In an A.P., a = 7 and a₁₃ = 35. Find d and S₁₃.',
    'Find the area of triangle ABC whose vertices are (−5, −1), (3, −5) and (5, 2).',
    'Prove: cos A/(1 + sin A) + (1 + sin A)/cos A = 2 sec A.',
    'Construct two tangents to a circle of radius 5 cm that are inclined at 60° to each other.',
    'Find the area of the shaded region in the figure, where ABCD is a square of side 14 cm. The figure contains four equal circles in a 2 × 2 arrangement, and the part of the square outside the circles is shaded.',
    'For the quadratic equation 3x² − 5x + 2 = 0, find the discriminant, state the nature of its roots, and find the roots using the quadratic formula.',
    'Prove that in a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.',
    'From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60°, and the angle of depression of its foot is 45°. Find the height of the cable tower.'
  ];
  mathsWritten.forEach((question,i)=>{const q=byId.get(`EP-JAC-10-M-2023-W-${String(i+1).padStart(2,'0')}`);if(q){q.question=question;q.subTopic='Written question';}});
  const subtopicHi={'Indicators of chemical reactions':'रासायनिक अभिक्रिया के संकेत','Types of reactions':'अभिक्रियाओं के प्रकार','Decomposition reactions':'वियोजन अभिक्रियाएँ','Balancing equations':'समीकरण संतुलन','Redox reactions':'रेडॉक्स अभिक्रियाएँ','Displacement reactions':'विस्थापन अभिक्रियाएँ','Assertion and reason':'कथन और कारण','Energy and reaction type':'ऊर्जा और अभिक्रिया का प्रकार','Thermal decomposition':'ऊष्मीय वियोजन','Precipitation reactions':'अवक्षेपण अभिक्रियाएँ','Combination reactions':'संयोजन अभिक्रियाएँ','Exothermic reactions':'ऊष्माक्षेपी अभिक्रियाएँ','Photochemical decomposition':'प्रकाश-रासायनिक वियोजन','Writing equations':'समीकरण लेखन','Corrosion case study':'संक्षारण आधारित अध्ययन','Exothermic and endothermic reactions':'ऊष्माक्षेपी और ऊष्माशोषी अभिक्रियाएँ','Observations':'प्रेक्षण','Decomposition case study':'वियोजन आधारित अध्ययन','Corrosion and rancidity':'संक्षारण और विकृतगंधिता','Oxidation and reduction':'ऑक्सीकरण और अपचयन','Electrolytic decomposition':'विद्युत अपघटनी वियोजन','Displacement case study':'विस्थापन आधारित अध्ययन'};
  for(const q of all)if(q.sourceType==='Practice Paper 2026-27')q.subTopicHi=subtopicHi[q.subTopic]||q.subTopicHi;
})();

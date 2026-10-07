/* Guard future ExamPrep additions against missing or incomplete scoring rubrics. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..'),context={window:{}};
for(const file of ['data-examprep.js','data-examprep-pyq.js','data-examprep-qb.js','data-examprep-i18n-fixes.js','data-examprep-grading.js','data-examprep-iitm-es-2023.js','data-examprep-pyq-2025-videos.js','data-examprep-pyq-2025-rubrics.js','data-examprep-pyq-2025-science-video.js','data-examprep-pyq-2025-hindi-video.js','data-examprep-pyq-2025-hindi-rubrics.js','data-examprep-pyq-2025-maths-rubrics.js','data-examprep-computer-basics.js','data-examprep-inside-computer.js','data-examprep-foundation-3-10.js','data-examprep-practice-tutorials.js','data-examprep-topics-11-50.js','data-examprep-jac-class8-ch1.js'])vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const bank=context.window.EXAMPREP,all=[...bank.questions,...bank.written],legacy=new Set(JSON.parse(fs.readFileSync(path.join(__dirname,'examprep-rubric-legacy.json'),'utf8')));
for(const code of ['MATH','SCI','ENG']){
 const prefix=`EP-JAC-C8-${code}-CH1-`,items=all.filter(q=>q.qid.startsWith(prefix)),set=bank.practiceSets.find(x=>x.id===`SL-PRACTICE-JAC-C8-${code}-CH1-20261007`);
 assert.equal(items.length,16,`${code}: Class 8 Chapter 1 must have 16 questions`);
 assert.deepEqual([1,2,3,5].map(mark=>items.filter(q=>q.marks===mark).length),[8,4,3,1],`${code}: board-style mark distribution changed`);
 assert.equal(items.reduce((sum,q)=>sum+q.marks,0),30,`${code}: set must total 30 marks`);
 assert(set&&set.class==='8'&&set.questionIds.length===16&&set.questionIds.every(id=>items.some(q=>q.qid===id)),`${code}: practice set is missing questions`);
 assert(context.window.EXAMPREP_PRACTICE_TUTORIALS[set.id]?.steps.length===3,`${code}: illustrated tutorial is missing`);
 assert(items.every(q=>q.questionHi&&q.explanationHi&&q.sourceType==='Original JAC-aligned chapter practice'),`${code}: bilingual question or provenance missing`);
}
const inside=bank.questions.filter(q=>q.qid.startsWith('EP-VOC-CA-INSIDE-'));
assert.equal(inside.length,20,'Topic 2 needs the same 20 questions as Topic 1');
assert.deepEqual(['mcq','msq','fill','match'].map(type=>inside.filter(q=>q.type===type).length),[10,4,3,3],'Topic 2 must retain the Topic 1 question mix');
assert(inside.every(q=>q.sourceVerifiedFromHandbook&&q.sourceRef.includes('p. 1')&&q.sourceRef.includes('topic 2')&&q.sourceRef.includes('intel.com')&&q.questionHi&&q.explanationHi), 'Topic 2 source, primary verification or Hindi content is missing');
for(let topic=3;topic<=10;topic++){
 const prefix=`EP-VOC-CA-T${String(topic).padStart(2,'0')}-`,questions=bank.questions.filter(q=>q.qid.startsWith(prefix));
 assert.equal(questions.length,20,`Topic ${topic} needs 20 questions`);
 assert.deepEqual(['mcq','msq','fill','match'].map(type=>questions.filter(q=>q.type===type).length),[10,4,3,3],`Topic ${topic} question mix changed`);
 assert.equal(questions.reduce((sum,q)=>sum+q.marks,0),33,`Topic ${topic} marks changed`);
 assert(questions.every(q=>q.sourceVerifiedFromHandbook&&q.sourceVerifiedFromPrimary&&q.sourceRef.includes('p. 1')&&q.sourceRef.includes(`topic ${topic}`)&&q.sourceRef.includes('https://')&&q.questionHi&&q.explanationHi),`Topic ${topic} provenance or Hindi text missing`);
 assert(questions.filter(q=>q.type==='match').every(q=>new Set(q.options).size===4&&new Set(q.correct).size===4),`Topic ${topic} matching key must be one-to-one`);
 assert(questions.filter(q=>q.type==='mcq').every(q=>new Set(q.options).size===4),`Topic ${topic} MCQ distractors repeat`);
 const set=bank.practiceSets.find(x=>x.topic===questions[0].topic);
 assert(set&&set.questionIds.length===20&&!set.introMedia,`Topic ${topic} must open as a media-free practice set`);
}
for(let topic=11;topic<=50;topic++){
 const prefix=`EP-VOC-CA-T${String(topic).padStart(2,'0')}-`,questions=bank.questions.filter(q=>q.qid.startsWith(prefix)),set=bank.practiceSets.find(s=>s.id===`SL-PRACTICE-VOC-CA-T${String(topic).padStart(2,'0')}-20261002`),page=topic<=13?1:topic<=34?2:3;
 assert.equal(questions.length,20,`Topic ${topic} needs 20 questions`);
 assert.deepEqual(['mcq','msq','fill','match'].map(type=>questions.filter(q=>q.type===type).length),[10,4,3,3],`Topic ${topic} question mix changed`);
 assert.equal(questions.reduce((sum,q)=>sum+q.marks,0),33,`Topic ${topic} marks changed`);
 assert(questions.every(q=>q.sourceVerifiedFromHandbook&&q.sourceVerifiedFromPrimary&&q.sourceRef.includes(`p. ${page}`)&&q.sourceRef.includes(`topic ${topic}`)&&q.sourceRef.includes('https://')&&q.questionHi&&q.explanationHi),`Topic ${topic} provenance or Hindi text missing`);
 assert(questions.filter(q=>q.type==='mcq').every(q=>new Set(q.options).size===4&&new Set(q.optionsHi).size===4),`Topic ${topic} MCQ distractors repeat`);
 assert(questions.filter(q=>q.type==='match').every(q=>new Set(q.options).size===4&&new Set(q.correct).size===4),`Topic ${topic} matching key must be one-to-one`);
 assert(set&&set.questionIds.length===20&&set.questionIds.every(id=>questions.some(q=>q.qid===id)),`Topic ${topic} practice set missing`);
 assert(context.window.EXAMPREP_PRACTICE_TUTORIALS[set.id]?.steps.length===3,`Topic ${topic} tutorial missing`);
}
assert.equal(new Set(all.map(q=>q.qid)).size,all.length,'Question IDs must be unique');
for(const q of all){
 assert(q.sourceRef&&q.sourceType,`${q.qid}: source provenance is required`);
 if(q.type==='mcq'||q.type==='msq'||q.type==='fill'||q.type==='match'){
  if(q.type==='fill'){assert(typeof q.correct==='string'&&q.correct.trim()&&Array.isArray(q.acceptedAnswers)&&q.acceptedAnswers.includes(q.correct),`${q.qid}: fill answer key missing`);assert(q.explanation?.length>12,`${q.qid}: fill explanation missing`);continue}
  if(q.type==='match'){assert(Array.isArray(q.leftItems)&&q.leftItems.length===q.marks&&Array.isArray(q.options)&&q.options.length===q.leftItems.length,`${q.qid}: matching items must match marks`);assert(Array.isArray(q.correct)&&q.correct.length===q.leftItems.length&&q.correct.every(letter=>'ABCDE'.includes(letter)&&'ABCDE'.indexOf(letter)<q.options.length),`${q.qid}: matching answer key missing`);assert(q.explanation?.length>12,`${q.qid}: matching explanation missing`);continue}
  assert(Array.isArray(q.options)&&q.options.length>=2,`${q.qid}: MCQ options missing`);
  if(q.type==='msq')assert(Array.isArray(q.correct)&&q.correct.length>=2&&q.correct.every(letter=>'ABCDE'.includes(letter)),`${q.qid}: MSQ answer key missing`);
  else assert('ABCDE'.includes(q.correct)&&'ABCDE'.indexOf(q.correct)<q.options.length,`${q.qid}: valid answer key missing`);
  assert(q.explanation&&q.explanation.length>12,`${q.qid}: MCQ explanation missing`);
  continue;
 }
 if(q.type==='numeric'&&q.expectedAnswer!==undefined)continue;
 const choices=q.gradingAlternatives||[q.grading];
 if(!choices[0]){assert(legacy.has(q.qid),`${q.qid}: new written questions require a scoring rubric`);continue;}
 assert(!legacy.has(q.qid),`${q.qid}: remove this question from the legacy list now that it has a rubric`);
 for(const criteria of choices){
  assert(Array.isArray(criteria)&&criteria.length,`${q.qid}: empty rubric`);
  const max=criteria.reduce((total,point)=>{
   assert(Number.isFinite(point.marks)&&point.marks>0,`${q.qid}: criterion needs positive marks`);
   assert(point.label&&point.labelHi,`${q.qid}: criterion needs display labels`);
   assert(Array.isArray(point.patterns)&&point.patterns.every(x=>typeof x==='string'&&x.trim()),`${q.qid}: criterion needs answer patterns`);
   return total+point.marks;
  },0);
  assert(Math.abs(max-q.marks)<.001,`${q.qid}: rubric totals ${max}, question is ${q.marks} marks`);
 }
 assert(q.explanation?.trim()&&!/^(Compare your response|Answer using the relevant textbook)/i.test(q.explanation),`${q.qid}: sample answer missing`);
 if(q.subject==='Science'||q.subject==='Maths')assert(q.explanationHi?.trim(),`${q.qid}: Hindi sample answer missing`);
 assert(q.needsTeacherReview===true,`${q.qid}: free response must remain provisional`);
}
for(const id of legacy)assert(all.some(q=>q.qid===id&&!q.grading&&!q.gradingAlternatives&&q.expectedAnswer===undefined),`${id}: stale legacy rubric exception`);
const pyq2025=all.filter(q=>q.sourceType==='JAC PYQ 2025');
assert(pyq2025.filter(q=>q.type!=='mcq').every(q=>q.grading?.length||q.gradingAlternatives?.length),'Every 2025 PYQ written answer needs a scoring rubric');
const norm=value=>String(value||'').normalize('NFKC').toLowerCase().replace(/[^a-z0-9\u0900-\u097f]+/g,' ').trim();
for(const q of pyq2025.filter(q=>q.type!=='mcq')){const answer=norm(q.explanationHi||q.explanation),scores=(q.gradingAlternatives||[q.grading]).map(criteria=>criteria.reduce((sum,criterion)=>sum+(criterion.patterns.some(pattern=>answer.includes(norm(pattern)))?criterion.marks:0),0));assert.equal(Math.max(...scores),q.marks,`${q.qid}: its own model answer must meet the full rubric`);}
const hindi=pyq2025.filter(q=>q.subject==='Hindi');
assert.equal(hindi.length,52,'The supplied Hindi (A) video contains Q1–Q52');
assert(hindi.every(q=>q.sourceVerifiedFromVideo&&q.sourceRef.includes('X/25/2431')),'Hindi source provenance or verification missing');
assert(hindi.filter(q=>q.type!=='mcq').every(q=>q.needsTeacherReview),'Hindi written scores require teacher review');
const science=all.filter(q=>q.subject==='Science'&&q.sourceType==='JAC PYQ 2025');
assert.equal(science.length,52,'Video-verified 2025 Science paper must contain Q1–Q52');
assert(science.every(q=>q.sourceVerifiedFromVideo),`Science 2025 source verification flag missing`);
assert(science.filter(q=>q.type!=='mcq').every(q=>q.grading),'All Science 2025 written questions need rubrics');
const q7=science.find(q=>q.sourceRef.includes('Q7 ·')),q15=science.find(q=>q.sourceRef.includes('Q15 ·'));
assert(q7&&q7.correct==='C'&&q7.options[2]==='resistance','Video Q7 must be present');
assert(q15&&q15.options[0]==='Acid'&&q15.question.includes('Editorial correction'),'Video Q15 source typo must be disclosed');
console.log(`PASS: ${all.length} ExamPrep questions; all new written questions have complete rubrics (${legacy.size} documented legacy exceptions).`);

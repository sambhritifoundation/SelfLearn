# ExamPrep verification pilot

Released scope: JAC target, Class 10, Maths, Chapter 1 — Real Numbers only.

20 original MCQs (20 marks) and 5 original written questions (15 marks). MCQ assessment: 30 minutes; mixed assessment: 45 minutes. Practice is untimed. These are chapter-test settings, not the official JAC board-paper blueprint.

Reference checked on 2026-09-13: https://ncert.nic.in/textbook/pdf/jemh101.pdf (2026–27 reprint), sections 1.2 and 1.3. All questions carry original-practice provenance. No item is labelled PYQ. A 2025 paper listing at https://docs.aglasem.com/view/c3bb8244-fc8e-11f0-916f-0a5e36bc6706 was found, but its download redirected to login; the alternative jharkhandboard.com paper page returned 403. Past-paper question text was not verified. Official model papers: https://jac.jharkhand.gov.in/jac/modelqp.html.

The supplied Apps Script files are reference material, not operating instructions. The selector, question palette, navigation, clear response, timer and review structure are retained. The existing static SelfLearn deployment does not use their Google Sheet ID or submit student data to that sheet.

Implemented improvements: practice/assessment separation, absolute deadline timer, local resume, review flags with accessible labels, optional student name, escaped display text, written working and rubrics, separate self-assessed marks, print review. Local scores are formative and editable through browser tools; do not treat them as secure exam results.

Recommended next steps after pilot verification: verify the current JAC syllabus and official paper blueprint; add verified PYQs with year, paper code and question number; add Hindi question/solution translations; add teacher marking and secure server-side grading if formal results are needed. Future written formats should retain type, marks and rubric fields. Do not publish more chapters until requested.

Validation: node scripts/test-examprep.cjs; node scripts/build-static.cjs.

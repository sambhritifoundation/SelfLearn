# General Studies & Aptitude

New segment: `knowledge.html`, added to the main SelfLearn navigation and linked from ExamPrep, PlayLab, Career Compass, External and AI. The digital-skills course remains a single Computer Application course under Vocational.

## Completed release

48 original English/Hindi foundation cards, six in each category:

1. Polity, History & Citizenship.
2. Geography & Environment.
3. Science, Economy & GK.
4. Quantitative Aptitude.
5. Logical & Analytical Reasoning.
6. Data Interpretation.
7. Verbal & Critical Thinking.
8. Psychometric-style Self-Reflection.

Each card includes a concept, teaching visual, example, common trap, two quick Q&A explanations, interactive concept checks, practical challenge and source/further-reading reference. There are 96 objective concept questions and six informal reflection prompts with four action choices each. The questions are authored for this foundation segment, not copied official PYQs.

Native visuals include flow diagrams, timelines, hierarchies, labelled tables, zero-based bars, a 50/30/20 pie, compass/direction summaries and an actual nested-set diagram for syllogisms. They use browser text and vector/CSS geometry, not rasterized text.

Learners can search concepts, filter by category and exam, bookmark cards, review mistakes and complete a five-question rotating practice set. It is not a full exam mock, timed paper or score predictor. Practice rotates by the date in Asia/Kolkata; it does not create an automation or imply an automatically maintained news feed.

## Exam map and verification

Checked 12 October 2026. Exam tags indicate topic/section relevance at a foundation level; they do not certify complete syllabus coverage, exact difficulty or current exam pattern.

| Label | Primary basis | Limits |
| --- | --- | --- |
| UPSC Prelims GS-I / CSAT | [2026 official notice](https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf), printed p.31, syllabus for Prelims Papers I/II | Explicitly Prelims: no incorrect implication that polity/economy belong to Mains GS-I. |
| SSC CGL GA / Reasoning / Quant / English | [Official CGL notice](https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2025.pdf), indexed syllabus sections 13.11.1–13.11.4 | Official indexed text was available; direct PDF download was unavailable. Filename contains 2025 while indexed text is dated 2026. No current-year rule/date/marking claims are based on that ambiguity. |
| CAT VARC / DILR / QA | [IIM Nagpur official 2026–28 admission policy](https://www.iimnagpur.ac.in/admissions/mba/admissions-policy/), identifying the CAT 2025 sections | Only section names are verified here. Topic-level mapping is editorial. The CAT portal/archived mock PDF were inaccessible; no invented official exhaustive topic syllabus is presented. |
| NTSE legacy MAT / SAT | [NCERT 2019 brochure](https://ncert.nic.in/pdf/programmes/NTSE/Information_Brochure_2019.pdf), pp.7–10; [official NTSE page](https://ncert.nic.in/national-talent-examination.php) | Historical practice only. NCERT notices include 2021–22 postponement; do not assume a current active exam or registration date. |
| Self-development | [IES study-practice guide](https://ies.ed.gov/ncee/wwc/PracticeGuide/1) | Informal study/teamwork reflection. Not an official UPSC/SSC/CAT/NTSE section or a standardized psychometric assessment. |

Content/further-reading references include the Legislative Department Constitution page, NCERT textbooks, NASA Earth resources and RBI currency FAQ. Numerical examples are explicitly fictional or mathematical; calculations and keys are tested independently. No live prices, current office holders, eligibility advice or undated news claims are inserted.

Psychometric-style cards explain their limits and record chosen next actions locally. They do not diagnose personality, anxiety or intelligence; no IQ, percentile, employability or selection score is generated. Their objective Q&A checks understanding of concepts only and does not contribute to the 42 learning-card mastery count.

## Portal research and adopted features

The user's request to study similar portals was completed using their own public pages:

- [IndiaBIX aptitude](https://www.indiabix.com/aptitude/): topic-organized question practice and explanations → topic filters and immediate explanations.
- [Testbook free quizzes](https://testbook.com/free-online-quizzes): short subject quizzes → a five-question practice mode and exam filters.
- [Drishti daily current-affairs quiz listing](https://www.drishtiias.com/quiz/quizlist/daily-current-affairs): dated practice → visible source-check date and a date-based rotating practice set, without pretending to run a news editorial service.

SelfLearn adds bilingual concept visuals, explicit category/card-level exam relevance, bookmarks, latest-error review, accessible native controls, portable local progress and original examples. No competitor questions, article passages, visual assets or proprietary ranking claims are copied.

## Data and preservation

`knowledge-data.js`, `knowledge-foundations.js`, `knowledge-practice.js` hold the authored data. `knowledge.js` owns the UI and persistence; `knowledge.css` styles only the new segment. Shared teaching/page utilities and the existing main SelfLearn footer retain the site's visual and legal branding.

Progress uses a separate `selflearn.knowledge.v1` key with the selected SelfLearn `__profile` suffix. Saved data is validated, wrong/latest answers drive review, bookmarks persist, and reflections remain separate from scores. Export/import requires the same segment and profile, merges bookmarks/correct answers and preserves existing records. Clearing site data still removes unexported progress. Unavailable storage falls back to the current visit with a warning.

No existing course data bank, student progress key or question ID is altered. No new written ExamPrep question is inserted into the ExamPrep engine; the new segment owns its original objective practice bank.

## Tests

- `node scripts/test-knowledge.cjs`: 48 cards, 8 categories, 96 explained keys, 144 visual labels, bilingual coverage, tag safeguards, independent numeric calculations, source references and navigation/footer integration.
- `node scripts/audit-knowledge.cjs`: 1280px and 390px, all 48 cards in both languages, category/exam/search filtering, 96 Q&A panels, keyboard bookmarks, feedback, mistake review, short practice, reflections, reload, export/import, profile isolation, denied storage and one-course Vocational preservation. An optional live base URL repeats the checks against publication.
- Existing full static build and relevant workshop/share-link regressions must pass before publishing. The build packages all six new runtime files and executes the new content audit.

Limitations: foundation collection rather than comprehensive exam coaching; informal self-reflection rather than validated psychometrics; no live current-affairs feed; browser-local progress; Chrome desktop/mobile emulation rather than a physical device or dedicated screen-reader audit.

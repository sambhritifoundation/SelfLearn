# JAC Class 10 Science 2025 video check

Source supplied by the user: `2025Class10Science.mp4` (SHA-256 `425e12282dc25ea3115d016b4f2ca5e80749bbed60a34a42135901bc9646aec1`). The recording displays the bilingual Science (Theory) question paper, Q1–Q52. The video is not part of the published site.

The earlier bank contained 51 of the 52 questions. Comparing the paper in the recording against the bank led to these changes:

| Paper question | Finding | App change |
| --- | --- | --- |
| Q7 | Entire question omitted | Added the Ohm/resistance MCQ with the source's four options. |
| Q15 | The paper prints option A as `Red` / `लाल`, although an acidic solution turns blue litmus red. | Corrected option A to `Acid` / `अम्ल` and disclosed the editorial correction in the question and explanation. |
| Q21 | Existing English wording paraphrased the paper. | Restored the paper's “life process found in living organisms” wording. |

The other Q1–Q52 prompts were located in the recording and retained. The paper does not show an answer key. Objective answers are educational answer keys, not an official marking scheme. All 22 written questions now have provisional point rubrics and English/Hindi sample answers. Each sample answer was checked against its rubric in both languages. Q31, Q48 and Q51 request diagrams; a teacher must check the drawings and final marks.

The source paper asks students to answer any six of eight questions in Sections B and C, and any four of six in Section D. The current digital PYQ collection presents and scores all 52 questions (100 possible marks); it is a study collection, not an 80-mark recreation of the paper. This distinction is shown in the test details.

The static ExamPrep build runs `scripts/check-examprep-rubrics.cjs` to require source references, keys for objective questions and complete rubrics for every newly added written question. The 84 older written questions without rubrics are listed explicitly in `scripts/examprep-rubric-legacy.json`, as requested for a forward-looking rule.

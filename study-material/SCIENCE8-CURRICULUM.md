# Class 8 Science curriculum and review record

SelfLearn Class 8 Science is original supplementary teaching for rural Indian
learners. It is not a reproduction of a textbook.

## Coverage decision

- Units 1–13 follow the chapter order of NCERT *Curiosity — Textbook of Science
  for Grade 8*, reprint 2026–27 (`hecu101.pdf` through `hecu113.pdf`).
- Units 14–18 are explicitly labelled JAC bridge units. Together they cover the
  JAC sequence topics that do not have a direct chapter in the current NCERT
  book: crop production; fossil fuels and combustion; animal reproduction and
  adolescence; friction and sound; chemical effects, lightning, and earthquakes.
- A “partial” chapter mapping means the two books share related concepts but do
  not have identical scope.

## Lesson contract

Every micro-topic contains:

1. one central idea in plain language;
2. one original, labelled, interactive concept diagram;
3. three everyday or locally relatable examples;
4. three precisely defined terms;
5. one misconception, limitation, or safety warning;
6. one worked explanation with a limitation check;
7. eight questions: three single-answer, one multiple-answer, two fill, one
   match, and one self-reviewed written response;
8. a statement of what the concept prepares the learner to study next.

## Correctness checks

- Chapter scope was compared with every numbered section heading in the 13
  official NCERT chapter PDFs.
- Objective answer records, option uniqueness, bilingual fields, matching pairs,
  question references, JSON spreadsheet round trips, and diagram placeholders
  are checked by `scripts/test-science8.cjs`.
- `scripts/audit-science8-browser.cjs` renders every topic in English and Hindi at
  desktop and mobile widths, moves every diagram control, checks for overflow,
  and fails on application console errors.
- Safety-critical language explicitly covers electricity, medicines and
  antibiotics, storms and lightning, fire, pesticides, adolescence, lenses and
  sunlight, and earthquakes.

## Primary references

- NCERT textbook catalogue: <https://ncert.nic.in/textbook.php?hecu1=10-13>
- NCERT Grade 8 learning outcomes: <https://ncert.nic.in/pdf/publication/otherpublications/tilops101.pdf>
- JAC official portal and e-book entry point: <https://jac.jharkhand.gov.in/jac/>

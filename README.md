# SelfLearn

A bilingual (Hindi–English), practice-first learning portal by Sambhriti Foundation.

**Live site:** https://sambhritifoundation.github.io/SelfLearn/

## What's inside

- **Accountancy — CBSE Class 11** (full rationalised syllabus): 9 chapters, 27 micro-topic lessons, 49 practice questions with instant bilingual explanations.
- **English Communication** (all age groups): Foundation (4–10), Intermediate (11–15) and Advanced/Adult levels — 9 chapters, 25 questions.
- Working quiz engine (MCQ, true/false, short answer), progress tracking, streaks, weak-topic revision queue — all stored in the learner's browser.
- Admin portal with question editor and spreadsheet **import/export** (`selflearn-question-template.xlsx` is the authoring format).

## Files

| File | Purpose |
|---|---|
| `index.html` | The app (also `selflearn-app.html`, identical copy) |
| `data-accountancy.js` | Accountancy content pack |
| `data-english.js` | English Communication content pack |
| `selflearn-question-template.xlsx` | Question authoring/import template |
| `selflearn-screen-mockup.html` | Original clickable screen designs |

## Run locally

Open `index.html` in any browser — no build step, no server needed. Keep the `data-*.js` files alongside it.

## Adding content

1. Fill rows in `selflearn-question-template.xlsx` (see its Instructions sheet).
2. Open the app → Admin → Import / Export → upload the file.
3. To make content permanent for all users, add it to a `data-*.js` pack and commit.

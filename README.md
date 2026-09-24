# SelfLearn

A bilingual (Hindi–English), practice-first learning portal by Sambhriti Foundation.

**Live site:** https://sambhritifoundation.github.io/SelfLearn/

## What's inside

- **Accountancy — CBSE Class 11** (full rationalised syllabus): 9 chapters, 43 micro-topic lessons, 94 practice questions with instant bilingual explanations. Chapters 1–2 carry full micro-topic notes with a running story (Meena didi's kirana shop → partnership → company), rich formatting, story-based case questions, and hands-on spreadsheet assignments at the end of each chapter (see `study-material/`).
- **English Communication** (all age groups): Foundation (4–10), Intermediate (11–15) and Advanced/Adult levels — 9 chapters, 25 questions.
- **Computer Application — Satbarwa Bazar web project**: six bilingual Advanced Diploma lessons guide learners through planning, vibe coding, testing and improving a local market website. The [working sample storefront](examples/satbarwa-bazar/index.html) uses fictional products and a demo cart; no orders or payments are taken.
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

### Class 8 Mathematics pilot

The app contains the complete 14-unit **NCERT Ganita Prakash Class 8**
sequence plus a JAC Rational Numbers foundation unit: 66 bilingual
micro-topics, interactive diagrams and 528 questions across five formats.
Every unit carries its closest verified JAC chapter mapping.

New content is in `data-math8.js`, with scoped support in `math8-pilot.js` and
`math8-pilot.css`. Run `node scripts/test-math8.cjs` for regression checks.

### Class 8 Science

The science course covers all 13 chapters of **NCERT Curiosity Grade 8
(2026–27)** and adds 5 labelled bridge units for the remaining topics in the
verified JAC sequence: 72 bilingual micro-topics, 72 original interactive
concept diagrams, and 576 questions across five formats. Each lesson includes
three familiar examples, a misconception or safety limit, a worked explanation,
and an explicit link to the next concept.

Content is in `data-science8.js`; diagrams are in `science8-pilot.js`. Run
`node scripts/test-science8.cjs` for the data/render audit and, while serving
`dist` on port 8765, run `scripts/audit-science8-browser.cjs` for desktop and
mobile browser QA.

Open `index.html` in any browser — no build step, no server needed. Keep the `data-*.js` files alongside it.

## English listening and speaking tracks

English Communication includes two separately selectable sections: **Listening Lessons & Practice** and **Speaking Practice**. Each offers 12 progressive lessons, from first greetings to interpreting nuanced discussions and negotiating decisions. Everyday scenarios combine grammar and tenses with meaning, model responses and repeated practice.

Listening includes device-generated English speech, slow replay, optional transcripts and 36 comprehension checks with evidence-based feedback. Speaking includes sentence frames, follow-up turns, model answers, self-reflection and optional local microphone recording. Recordings are never uploaded and are discarded when leaving the page. Completion and optional planning notes are saved per learner profile in the current browser; these tracks do not award automatic pronunciation scores or fluency certification.

Content: `english-practice-data.js`; interface: `english-practice.js` and `english-practice.css`. Run `scripts/test-english-practice.cjs` with `SL_NODE_MODULES` pointing to the installed Playwright package parent. The audit covers both languages, desktop/mobile, audio and recording controls, completion, profile isolation and existing course routes.

## Adding content

1. Fill rows in `selflearn-question-template.xlsx` (see its Instructions sheet).
2. Open the app → Admin → Import / Export → upload the file.
3. To make content permanent for all users, add it to a `data-*.js` pack and commit.

## Copyright & License

© 2025 **Sambhriti Foundation for Education**. All Rights Reserved. — https://sambhriti.in

Educational content, instructional design, assessments, and supporting materials are the
intellectual property of Sambhriti Foundation for Education. Unauthorized copying,
redistribution, or commercial use is prohibited unless expressly permitted by the copyright
holder. See [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md).

The displayed copyright year is configurable via the `SL_CONFIG` object in `index.html`.

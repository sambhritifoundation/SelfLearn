# Class 8 Mathematics baseline — audit edition

## Scope and provenance

Original supplementary teaching for **A Square and a Cube**: ten micro-topics,
80 questions, bilingual written notes, ten interactive teaching visuals,
ten worked examples, a 20-question chapter assignment, ten-question revision,
and a paper-based school-design activity.

Checked 4 September 2026 against the official [NCERT Grade 8 Ganita Prakash Part I,
Chapter 1, 2026–27 reprint](https://ncert.nic.in/textbook/pdf/hegp101.pdf).
Used for conceptual alignment, not copied stories or exercises. Extra square-root
estimation and digit-pair practice is included. This is not exhaustive
exercise-by-exercise textbook coverage.

The cross-board chapter numbering and overlap are recorded in
`MATH8-NCERT-JAC-MAP.md`. This pilot is **NCERT Chapter 1** and spans
**JAC Chapters 5–6**.

## Replicable lesson contract

1. A relatable question before the definition.
2. A prediction and an interactive mathematical representation.
3. Short, natural English and Hindi/Hinglish teaching blocks.
4. Readable explanations in both languages, without an audio requirement.
5. Why the method works, a misconception, and a check or reflection.
6. A worked example with a reason for every revealed step.
7. Eight questions: 3 single-answer MCQs, 1 multiple-answer MCQ, 2 numerical
   blanks, 1 three-pair match, and 1 subjective explanation.
8. A model answer and three self-review criteria for written work.

Plan roughly 10–15 minutes per micro-topic, with more time for written work.
Understanding, not speed, is the goal.

## Implementation and authoring

- `data-math8.js`: subject `MATH8`, topics `M8-1-1` through `M8-1-10`, questions
  `M8-Q001` through `M8-Q080`. Author original lessons and rich questions here.
- `math8-pilot.js`: scoped adapter for diagrams, new response types and export.
- `math8-pilot.css`: scoped `.m8-*` styling using the existing theme.
- The two HTML app entry points must remain byte-identical. `#math8` opens the pilot.
- Before extensive replication, consider moving accepted generic assessment
  additions into a shared engine module. The pilot avoids expanding the monolith.

## Scoring contract

- MCQ: original answer letters and shuffled display positions.
- Multiple answer: `correct` is an array of original option letters. Exact set,
  order-independent, no partial marks; all correct and no incorrect options needed.
- Fill: numerical answers, fractions and Devanagari digits accepted. Equivalent
  alternatives use `|`. Tolerance 1e-9; no expressions, units or zero denominators.
- Match: existing bilingual `pairs` contract; all-or-nothing scoring. Every right
  label must be unique within the question.
- Subjective: a bilingual `model` and `rubric` array. The learner writes first,
  then compares and checks their own criteria. Stored as `reviewed`, never as
  an automatic correct/incorrect judgement. Excluded from accuracy, weak-topic
  counters and scored sessions. Responses are profile-local in `sl_m8_written`.
- The chapter assignment uses only objective questions. Written work is available
  through every lesson's format selector. Topic practice exposes all eight items.

No backend, cross-device sync or automatic uploads are introduced.

## Audio

Audio explainers and transcript panels have been removed from the Class 8 pilot
at the user’s request. Other courses retain their existing audio. Earlier
narration drafts remain in source history; they are not lesson audio data.

## Spreadsheet compatibility

The legacy three-type editor is read-only for pilot questions to avoid losing rich
fields. Exported CSV/XLSX appends `question_json`, preserving the full record.
Imports validate and use that JSON as authoritative; changes only to old columns
do not change a rich record. Start from an app export for rich-question round trips.
The existing blank authoring workbook is unchanged and does not define rich types.

## Repeatable checks

`node scripts/test-math8.cjs` checks:

- Both HTML copies; every pack and inline script in a mocked browser environment.
- Unique IDs, counts, bilingual fields, audio, examples and registered diagrams.
- Objective answer keys and unambiguous matching labels.
- Exact-set grading, numeric normalisation and duplicate-submit guards.
- 998 prime-group cases, including minimum multiplier/divisor checks.
- Subjective score separation and all 80 spreadsheet round trips.
- Existing subject and first-topic render smoke tests.

`node scripts/build-static.cjs` tests and assembles public assets into `dist/`.
It does not publish to the GitHub Pages origin.

## Joint acceptance checklist

- [ ] Confirm the intended JAC textbook and chapter mapping.
- [ ] Learner can explain and apply a concept after one micro-topic.
- [ ] Hindi is natural aloud; unfamiliar terms are explained.
- [ ] Both voices are audible and comfortably paced on the target phone.
- [ ] Every diagram supports a prediction, not just decoration.
- [ ] Keyboard/touch controls and narrow-screen layout are usable.
- [ ] Correct/incorrect feedback is useful in both languages.
- [ ] Incomplete multiple-answer selections do not pass.
- [ ] Written answers accept different wording without false automatic grading.
- [ ] Progress and saved written work survive refresh in the same profile.
- [ ] Practical task units, assumptions and answer guide are sound.
- [ ] Existing courses continue to work.

Replicate further chapters only after joint acceptance of this baseline.

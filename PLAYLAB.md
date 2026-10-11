# Sambhriti PlayLab

PlayLab is a static bilingual page for Classes 6–12, available at `playlab.html`. No runtime dependencies, login, network requests or deployment setting changes are introduced. All internal URLs are relative, including the links back to ExamPrep and SelfLearn, so root hosting and `/SelfLearn/` both work.

## Structure and adding activities

- `playlab-data.js`: category and activity registry, bilingual component explanations, five progressive assembly levels.
- `playlab-game.js`: assembly rules and versioned browser progress state.
- `playlab.js`: accessible landing page, route handling, language selection and assembly interface.
- `playlab.css`: responsive styles following SelfLearn's indigo/amber palette.

To list an upcoming activity, add an entry to `PlayLabData.activities` with a unique `id`, category ID, English/Hindi `title` and `description`, and `status: 'upcoming'`. Upcoming activities render as text, without launch links. Design Lab intentionally has no launchable activity yet.

To make an activity playable, implement a rendering function and its separate state engine, add the engine function to `engines` in `playlab.js`, and set `engine` and `status: 'ready'` in its registry entry. Add its scripts to `playlab.html` and to the copy list in `scripts/build-static.cjs`. Use a separate versioned storage key per game; validate restored state and handle denied storage. Provide bilingual explanations, conceptual checks, hints, keyboard and tap controls, visible focus, live feedback and responsive layouts. Extend the automated audits with the new learning flow.

## Learning and progress

Each component bench card also has a **Look closely** button, available before and after placement. It opens an enlarged drawing with three numbered identifying details and explanations in the selected language. Close or Escape dismisses the dialog and returns focus to its button; inspection does not select, place or score a component. Drawings are illustrative: CPU contact types, SSD formats and other physical details vary between real devices.

Levels 3–5 add cable lessons: motherboard power, CPU power, cooler fan, SATA storage power and data. Levels 4–5 also add display and keyboard USB connections. Students choose a cable and its destination socket; drawn cable paths turn solid green when connected. Feedback explains each path and distinguishes data from power. The display lesson explicitly assumes integrated graphics and a compatible board output; monitor power is assumed connected.

Every level now requires a model check before its concept question. The first two levels are introductory component models, not complete powered PCs. From Level 3 the **Power on virtual PC** check reports missing parts and cable paths; it represents a simplified hardware check, not an installed operating system or a guarantee that real hardware will boot. Incorrect cable destinations count as mistakes; diagnostic checks do not.

Later levels hide unfilled target names visually until requested, while preserving accessible names. Revealing labels costs one hint for an unfinished level. Component and answer orders are shuffled independently and remain stable during interactions. Feedback stays visible while scrolling and announces through a persistent live region.

Completing five levels opens a recap, a real-world compatibility question, and three evidence-based repair cases: unsaved edits, memory pressure and a missing display path. These bonus cases do not increase the five-level score; solved cases and the transfer answer persist locally.

The storage key remains unchanged. Version 1 progress migrates to version 2: completed levels retain scores and badges and receive completed connection/check states; unfinished levels retain their placements and attempts and learn the new connection steps. Reset clears assembly, cable, repair and transfer progress. Existing progress is not erased by the update.

Each level requires component placement and a conceptual explanation check before the next unlocks. The virtual slots model connections rather than actual physical locations. Feedback explains roles and prerequisite connections. Level 5 starts with a missing cooler and teaches that overheating can have multiple causes. Real assembly requires compatible parts and trained adult guidance.

Each completed level awards one badge and `max(40, 100 − 10 × mistakes − 5 × hints)` points. Wrong placement and wrong concept choices count as mistakes; prerequisite reminders do not. Scores are awarded once, so repeats cannot farm points. Completed levels remain available for review. Reset requires confirmation and clears this game's progress only. Progress is stored under `selflearn.playlab.computer.v1` in the current browser, independent of SelfLearn learner profiles. Clearing site data removes it; unavailable storage falls back to memory for the current visit.

## Verification and deployment

Run `node scripts/test-playlab.cjs` for registry, progression, scoring and persistence checks. Run `node scripts/audit-playlab-browser.cjs` for Chrome desktop/mobile and `/SelfLearn/` navigation checks (uses the existing bundled Playwright path, writes screenshots to ignored `qa/`). Run `node scripts/build-static.cjs` for the existing regressions and static output. No dependency installation is required.

After review and approval, publish using the repository's existing GitHub Pages procedure. If publishing from the repository root, the five root PlayLab files are already included. If publishing a built artifact, use `dist/`; the static build explicitly includes all five PlayLab assets. Verify `/SelfLearn/playlab.html` and `/SelfLearn/playlab.html#build-computer` after publishing. No push or deployment is part of this change.

## Implementation review — 11 October 2026

The selected workspace contained spreadsheet outputs and no Git checkout. The existing GitHub repository was cloned into `portal/`, leaving those outputs intact. Work is on `feat/sambhriti-playlab`. The inspected repository uses static HTML/CSS/JavaScript, paired `index.html` / `selflearn-app.html` entry points, separate ExamPrep content packs and a dependency-free static assembly script. No Pages workflow file was present; remote Pages settings were not changed.

Changed files: five new root PlayLab assets; navigation in `index.html`, `selflearn-app.html`, `examprep.html`, `ai.html` and `external.html`; the static build copy list and PlayLab logic check; two new test scripts; README, this guide and screenshot-output ignores. Existing question banks and learning engines are unchanged. Build-generated unrelated changes were restored.

Verification passed:

- PlayLab logic audit: five-level unlock rules, prerequisites, concept checks, scoring, badges, save/reload/reset, malformed storage, denied storage, bilingual content and entry-point parity.
- Chrome browser audit at 1280px and 390px: desktop drag-and-drop, keyboard selection/placement, mobile tap controls, five-level completion, Hindi and English, reload persistence, denied storage, no horizontal overflow, `/SelfLearn/` navigation and ExamPrep opening. Mobile Hindi screenshot visually reviewed.
- Full existing static build: ExamPrep, JAC practice sets, computer topics, certificates, External, AI, Hindi papers, sharing/vocational routes, rubric validation, exam delivery, IITM, Maths, Science and Friction regressions; static output created with all five PlayLab assets.
- Additional existing regressions: English listening/speaking desktop/mobile and profile isolation; speaking flow; Snake; project prompt guides; web developer Python/SQLite and browser simulation; Git publishing exercises; Satbarwa shop.
- JavaScript syntax checks and Git whitespace check.

Initial browser checks required access to local test servers outside the network sandbox. Additional tests used the existing bundled Playwright and installed Python paths; no project dependencies were added. Touch was tested through browser emulation, not a physical phone. Keyboard and responsive layout were checked; no dedicated screen-reader or real-device audit was performed.

# 50 Days, 50 Digital Skills

Authoritative sequence: the user's consolidated 50-day syllabus supplied on 12 October 2026. Earlier infographic numbering and the existing 50-topic handbook are legacy sequences, not the new numbering.

## Course and teaching

Open `digital-skills.html`. Fifty authored English/Hindi lessons span the five approved phases. Each has an explanation, everyday example, computer example, three-step practical, three conceptual teaching points, a topic-specific visual model, a fact, mentor question, three explained quiz questions, linked experiment or practical alternative and a next-topic hook. Technical identifiers such as CPU, RAM, shortcuts and formulas are retained in Hindi. No AI image text is used.

The teaching panels use a 4:5 preferred aspect ratio with responsive expansion to prevent clipped Hindi text. The original SFE logo is downloaded from `https://sambhriti.in/sambhriti-logo.png`, placed in the panel footer and page footer alongside “Supported by Sambhriti Foundation for Education”. The header identifies Sambhriti Academy as the learning centre.

Practical evidence stays with the learner: show local files or paper work to a mentor. The capstone includes a fictional admission form, marks/attendance sheet and chart, presentation/poster, and reflection, with a mentor review checklist. No remote file submission, student-data collection or automatic assessment of practical artifacts is introduced.

## Preservation and inventory

Baseline: `bc14c95ba21d4bb207cabd8d2dd05864377e0742` (main, Color Pop Studio).
Before editing, a verified complete Git bundle was saved outside the checkout as `../SelfLearn-before-digital-skills.bundle`.

All original content packs, images, audio/video, chapter IDs, question IDs and SelfLearn entry points remain. The original Computer Application overview and chapter list are retained, with the new course entry above them. The original handbook's 50 topic sets stay in ExamPrep, and `digital-skills.html#archive` supplies fifty new-to-old mappings with direct practice-set links. Mapping means related content, not equivalence or migrated achievement.

Existing PlayLab: Build a Computer (five assembly levels, power/data cables, hardware inspection, repairs and transfer question), My First Business (seven-day owner journey), My First Shop/Shop Basics (five missions), and Color Pop Studio. Four upcoming activities remain upcoming. Existing storage keys and migrations are unchanged.

Reused in this course: Build a Computer and Color Pop Studio. The existing web foundations browser/API/server lab is also reused as a linked practical resource. Business games remain available.

New Digital Skills Lab at `playlab-skills.html`, listed in the PlayLab Computer Lab registry:

1. Input and Output Detective: device-role choices and explanations.
2. Processing Machine: add, multiply and compare with numeric validation.
3. RAM and Storage Bench: edit, save, simulated power loss and recovery.
4. Typing and Keyboard Practice: exact target comparison and first-mismatch feedback.
5. Mouse Mission: single/double click, menu, scrolling and movement, with keyboard/touch alternatives.
6. Safe File Sandbox: folder creation, file creation, copy, move, rename, delete and restore; fictional in-memory entries only.
7. Window Controls: minimize, maximize, restore and close model.
8. Safety Decisions: four fictional cases with evidence-based feedback.
9. Marks and Formula Lab: valid 0–100 marks, SUM, AVERAGE and labelled zero-based bars.
10. Command Robot: sequences, repeat counts, boundary conditions and debugging feedback.

## Progress contract

Original progress keys (`sl_progress`, profile suffixes, last visits, quizzes, badges, streaks and all PlayLab keys) are never changed by the new course. The new key is `selflearn.digitalSkills.v1` with the same `__<profile>` suffix convention. Lessons remain self-paced and open.

A day is complete when the practical checkbox is checked and all three recorded quiz answers are correct. Wrong answers and missing choices show explanations; retries are allowed. Saved records are validated and completion is recomputed from evidence. Export/import backs up only this course's progress. Import requires the same profile, merges correct answers and preserves existing achievements. It does not import or modify the older progress keys.

Denied storage falls back to memory and warns the learner. New activity experiments intentionally last for the current visit; their instructional completion is recorded in the course, not as duplicate game badges. Existing learner-browser data cannot be centrally inspected or backed up from this development machine.

## Editorial references

Stable hardware concepts reuse the repository's cited primary-source content; new explanations distinguish CPU from system unit, RAM from storage, connector shape from capabilities, and decimal from binary capacity units. Instructions explicitly allow app/version differences.

Primary references for checks and teacher follow-up:

- Microsoft: [Windows shortcuts](https://support.microsoft.com/en-us/accessibility/windows/keyboard-shortcuts-in-windows), [File Explorer](https://support.microsoft.com/en-gb/windows/experience/fileexplorer/file-explorer-in-windows), [Excel formulas](https://support.microsoft.com/en-us/excel/create-a-simple-formula-in-excel).
- FTC: [Recognize and avoid phishing](https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams). Advice is generalized; country-specific reporting numbers are not inserted.
- MDN: [What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript), [Algorithm](https://developer.mozilla.org/en-US/docs/Glossary/Algorithm).
- W3C: [Designing accessible content](https://www.w3.org/WAI/tips/designing/).
- Existing hardware pack references include Intel CPU guidance, Dell port documentation and USB-IF specifications.

AI teaching avoids live product promises: use approved tools, fictional data, source checks, classroom disclosure and independent learner thinking. It does not assert that AI output is verified merely because it sounds fluent.

## Tests and publication

### Additional hands-on workshops

Navigation is consolidated under **Vocational → Computer Application**, with one course card. No standalone Digital Skills or Hands-on segment tab is added to site navigation. The course page links back to Vocational; workshop and archive links are in the course content. Direct lesson/workshop URLs remain valid.

Twenty-four supplementary project topics are available at `digital-skills.html#workshops`, with links from the course home and matching lessons. The fifty authoritative days stay unchanged. Each workshop has eight numbered actions, three result checks, supplies, estimated time, common-error guidance, an extension challenge, offline alternative and a mentor-review instruction. Projects are grouped into Beginner, Intermediate, Advanced and Expert Practice with recommended earlier projects. Existing workshop IDs and progress records 1–12 are retained.

Topics: school notice, project-file rescue, paper admission form, weekly timetable, marks/attendance register, event budget/chart, shop bill, three-slide local story, accessible event poster, research evidence sheet, email/sharing draft, and first HTML webpage. Downloadable starter CSVs accompany marks/attendance and budget projects; the webpage has a downloadable HTML starter and an editable preview. Step instructions can be downloaded as text or printed. The HTML preview is sandboxed and blocks scripts/network requests; its editor contents must be downloaded separately.

Workshop checkmarks use a separate `selflearn.digitalWorkshops.v1` profile-suffixed key. They are learner-attested and require all eight steps and three checks for completion. Existing day scores and older course progress remain independent. Workshops have their own export/import, and full course exports now also include optional workshop progress. Older course backups remain importable. Denied storage falls back to the current visit with a visible warning.

Additional projects cover professional document templates, data cleaning/validation, inventory/reorder logic, filters/summaries, dashboards, responsive accessible pages, form validation, Git history/release preparation, browser/API/database persistence, troubleshooting reports, AI evidence audits and an independent community-project showcase. Advanced tasks reuse the existing Git and web foundations resources; actual Python/database work is optional, local and mentor-guided. Expert Practice emphasizes independent work, evidence, testing and review rather than an automatic expertise certificate.

The course and new skills-lab page use the main SelfLearn footer copyright, attribution, website, External/AI and policy links, with matching layout and English/Hindi visibility. Main entry points now support direct legal-document URLs for those footer links. Teaching-panel SFE logo/support branding is preserved.

`node scripts/test-digital-workshops.cjs` checks bilingual coverage, all 192 steps/72 checks, levels/prerequisites, starter calculations, safe preview configuration and progress contracts. `node scripts/audit-digital-workshops.cjs` checks both languages at 1280px/390px, keyboard operation, reload, completion, downloads, imports/exports, HTML rendering/script isolation, related links, footer/policy links and unavailable storage. Pass the live base URL as its optional first argument to verify publication.

`node scripts/test-digital-skills.cjs`: exact syllabus, bilingual required fields, all 150 question records, integration, processing/memory/file/formula/robot logic.

`node scripts/audit-digital-skills.cjs`: desktop (1280px) and mobile (390px), all fifty lessons in both languages, poster clipping/overflow, linked resources, quizzes, practical completion gate, reload, old-progress preservation, profile isolation, unavailable storage, ten experiment flows and screenshots.

`node scripts/build-static.cjs`: existing full regression suite and packaging, including the new course logic check. Browser checks need local-network access in the execution sandbox. Build-generated unrelated legacy artifacts should not be committed.

GitHub Pages settings verified using the existing authenticated GitHub account: legacy branch build from `main`, root `/`. Push to main triggers existing Pages publication; no settings or hosting audience changes are needed. `.openai/hosting.json` is preserved but is not used for this GitHub Pages release.

## Limitations and rollback

Chrome desktop/mobile emulation is tested; no physical phone, dedicated screen-reader or teacher-supervised classroom trial has been performed. Windows exercises are version-dependent. Offline paper alternatives are offered; external software, accounts and internet access are not provisioned by this course. Practical completion is learner-attested and mentor-reviewed, not machine-verified. Progress remains browser-local unless exported. PDF output uses the browser's Print / Save as PDF capability.

Rollback: revert the course release commit on main and push through the same Pages branch deployment. Reversion removes the new course entry and new assets, restoring baseline presentation. Old course data remains unchanged; the new progress key is left intact in browsers for a later re-release. The Git bundle provides a complete additional code-history backup.

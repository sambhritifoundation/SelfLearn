# Snake Lab: complete AI prompts

Save a working backup. For an edit, attach your CURRENT index.html, styles.css, engine.js, game.js with their names. Copy ONE complete prompt. Read the proposed code, save the complete files, then check the expected results. For a new build, use an empty folder and the complete build prompt; reply NEXT plus the next filename until all files are saved. Never treat an unrun test as a pass.

पहले backup रखें। बदलाव के लिए current files और उनके नाम दें। एक पूरा prompt भेजें, code देखें, पूरी files save करें, फिर जाँचें। नए project के build prompt में NEXT से एक-एक file लें। Explanation हिंदी में माँग सकते हैं।

Choose a build prompt for a new project or a specific change prompt for an existing one. Prompts include context and exact expected results; they help reduce guessing but you still need to test the result.

## Build the complete Snake website / पूरी Snake website बनाएँ

Copy the whole block:

```text
You are helping a beginner produce a complete, polished website. Follow this specification literally; do not add unrequested features.

PROJECT CONTEXT
An original single-player Snake website for beginners, usable by keyboard and phone buttons. Plain HTML/CSS/JavaScript; opening index.html from a folder must work without installation or internet. No npm, libraries, modules, fetch, CDN, external fonts, accounts or server.
index.html links styles.css, then loads engine.js before game.js with defer. engine.js exposes window.SnakeEngine with create(size=20,random=Math.random), turn(game,name), step(game,random=Math.random), placeFood(game,random=Math.random). It owns rules only. game.js owns canvas, DOM, the timer and local best score.
State contract: {size,snake:[{x,y}],direction,queued,food:{x,y}|null,score,over,won}. snake[0] is the head. Directions are up/down/left/right. DOM IDs: board, score, best, stateLabel, status, start, pause, restart, speed. Four real buttons use data-direction. Inspect actual supplied files before editing.
Visual direction: navy #101b28 page, #172638 panels, mint #bcf476 snake/buttons, coral #ff8c78 food, white text and muted #b7c6d5 instructions. System font. Header, short hero, scoreboard, square game board, status, action buttons, speed selector, touch arrows, three short learning tips. Food and snake must remain distinguishable.

INPUT AND WORKFLOW
Build a new project in an empty folder. No existing files are required. Use the requirements below as the complete specification; a screenshot is optional visual reference only.
First reply: a short file/ID checklist and the COMPLETE index.html only. Then wait for me to say NEXT plus the next filename. Produce one complete file per reply in this order: index.html, styles.css, engine.js, game.js. Keep this specification and the same IDs throughout. If earlier files are no longer in context, ask me to paste them before continuing. Do not test the whole app until every file is saved.

TASK
Build four complete files in order, preserving the project contract.
1. index.html: the listed IDs; a canvas with intrinsic width/height 400, tabindex=0 and descriptive aria-label; score/best/state label; status role=status; Start, Pause/Resume, Restart; speed select values 180/120/80 milliseconds (Easy/Normal/Fast); four labelled direction buttons. Explain controls and +10 points in short English and Hindi text. Pause begins disabled. Show a static ready board before Start.
2. styles.css: max-width 1140px, 18–24px gutters, rounded panel, high contrast palette above. Desktop game panel plus tips sidebar; below 740px one column. Canvas width:100%, max-width:460px, height:auto, square aspect ratio. Four large touch arrows in a directional grid, wrapping action controls, visible focus ring. Keep the entire board and controls within a 350px page.
3. engine.js: create a 20×20 game with head (10,10), body (9,10),(8,10), direction right, score 0. Place food by choosing from empty cells, not an unbounded retry loop. turn rejects opposite direction and accepts at most one queued direction per tick. step applies the queued turn then moves head by one cell. Check walls and body before moving. When not eating, exclude the tail cell that will move away from collision checks. On eating, keep tail, add 10 and place food on an empty cell. If no empty cells remain set won=true and over=true; never loop forever. On collision set over=true and stop updates. Expose the functions and state listed above without DOM references.
4. game.js: draw grid, food and snake; handle inputs and a SINGLE interval timer. Start/Restart clears an existing interval, creates a new game and focuses board. Pause stops interval without resetting state; Resume creates one interval; changing speed restarts only the timer if running. Ignore movement while paused/over. Support arrows and W A S D, plus touch button clicks. Prevent arrow-key page scroll only while controlling the running game; leave select/input keyboard use intact. Space pauses when board focused; R restarts. Pause automatically when document.hidden. Collision stops timer and displays score and Play again. Save valid nonnegative finite best score under selflearn_snake_best with try/catch; best is local, not an online leaderboard.

QUALITY RULES
Use semantic headings, visible labels, real buttons, visible keyboard focus and touch targets at least 44px. Fit 350px, 768px and 1280px viewports without horizontal page scrolling. Use readable 16px body text, consistent spacing and clear empty/paused/error states. Do not hide controls to make the layout fit. Render user-facing text with textContent where appropriate. Handle unavailable localStorage with try/catch so the page still works.

ACCEPTANCE CHECKS
Initial view: ready board, score 0, disabled Pause. Start moves exactly one cell per tick.
Test setup: initial head (10,10), food (11,10), one right step → length 4, score 10, new food outside snake.
Moving right then requesting left → ignored. Up then left before the same tick → only first turn accepted.
Pause for several ticks → same positions/score; Resume continues. Restart → length 3, score 0, only one active timer.
Wall/body collision → game over and no further movement. Entering a vacating tail cell without food is allowed. Full board → win without hanging.
Keyboard, touch, speed and hidden-tab pause work. At 350px and 1280px no overflow. Blocked storage still permits a full round.

OUTPUT
Return complete contents of each changed file in its own code block labelled with the exact filename. No ellipses, TODOs, missing functions, pseudo-code or “rest unchanged”. Respect the one-file-per-reply order above.
After the last file, give exact save/open instructions, a short change summary and a table: action | expected result | actually tested or not run. Check that every referenced ID, function and file exists. Only say a test passed if you actually ran it. If you cannot run a browser, state that clearly and give manual steps. Explain in simple English; use Hindi if I ask.
```

## Understand the four files / चारों files समझें

Copy the whole block:

```text
You are helping a beginner produce a complete, polished website. Follow this specification literally; do not add unrequested features.

PROJECT CONTEXT
An original single-player Snake website for beginners, usable by keyboard and phone buttons. Plain HTML/CSS/JavaScript; opening index.html from a folder must work without installation or internet. No npm, libraries, modules, fetch, CDN, external fonts, accounts or server.
index.html links styles.css, then loads engine.js before game.js with defer. engine.js exposes window.SnakeEngine with create(size=20,random=Math.random), turn(game,name), step(game,random=Math.random), placeFood(game,random=Math.random). It owns rules only. game.js owns canvas, DOM, the timer and local best score.
State contract: {size,snake:[{x,y}],direction,queued,food:{x,y}|null,score,over,won}. snake[0] is the head. Directions are up/down/left/right. DOM IDs: board, score, best, stateLabel, status, start, pause, restart, speed. Four real buttons use data-direction. Inspect actual supplied files before editing.
Visual direction: navy #101b28 page, #172638 panels, mint #bcf476 snake/buttons, coral #ff8c78 food, white text and muted #b7c6d5 instructions. System font. Header, short hero, scoreboard, square game board, status, action buttons, speed selector, touch arrows, three short learning tips. Food and snake must remain distinguishable.

INPUT AND WORKFLOW
I will attach or paste the CURRENT index.html, styles.css, engine.js, game.js, each labelled with its filename. If a needed file is missing or truncated, request it before proposing edits; do not invent its contents. Read the supplied version first. Summarise the requested change and the files involved in three bullets. This task is inspection only; do not rewrite any files.

TASK
Inspect the attached four files without editing. Make a four-row file map and describe the flow button → turn → timer step → draw. Locate engine script order and actual DOM IDs. Give three beginner actions: start/steer, pause/resume, restart. Explain local best score versus current score and why the game works offline.

QUALITY RULES
Use semantic headings, visible labels, real buttons, visible keyboard focus and touch targets at least 44px. Fit 350px, 768px and 1280px viewports without horizontal page scrolling. Use readable 16px body text, consistent spacing and clear empty/paused/error states. Do not hide controls to make the layout fit. Render user-facing text with textContent where appropriate. Handle unavailable localStorage with try/catch so the page still works.

ACCEPTANCE CHECKS
Reference actual functions, not imagined ones. Explain which file changes colour and which changes collision rules. Include keyboard and touch instructions.

OUTPUT
Use short numbered explanations tied to actual functions or IDs. Include a concrete before/after example and manual checks. Clearly say which facts you inferred and which code you inspected.
```

## Review the AI-generated files / AI की files जाँचें

Copy the whole block:

```text
You are helping a beginner produce a complete, polished website. Follow this specification literally; do not add unrequested features.

PROJECT CONTEXT
An original single-player Snake website for beginners, usable by keyboard and phone buttons. Plain HTML/CSS/JavaScript; opening index.html from a folder must work without installation or internet. No npm, libraries, modules, fetch, CDN, external fonts, accounts or server.
index.html links styles.css, then loads engine.js before game.js with defer. engine.js exposes window.SnakeEngine with create(size=20,random=Math.random), turn(game,name), step(game,random=Math.random), placeFood(game,random=Math.random). It owns rules only. game.js owns canvas, DOM, the timer and local best score.
State contract: {size,snake:[{x,y}],direction,queued,food:{x,y}|null,score,over,won}. snake[0] is the head. Directions are up/down/left/right. DOM IDs: board, score, best, stateLabel, status, start, pause, restart, speed. Four real buttons use data-direction. Inspect actual supplied files before editing.
Visual direction: navy #101b28 page, #172638 panels, mint #bcf476 snake/buttons, coral #ff8c78 food, white text and muted #b7c6d5 instructions. System font. Header, short hero, scoreboard, square game board, status, action buttons, speed selector, touch arrows, three short learning tips. Food and snake must remain distinguishable.

INPUT AND WORKFLOW
I will attach or paste the CURRENT index.html, styles.css, engine.js, game.js, each labelled with its filename. If a needed file is missing or truncated, request it before proposing edits; do not invent its contents. Read the supplied version first. Summarise the requested change and the files involved in three bullets. This task is inspection only; do not rewrite any files.

TASK
Inspect the complete generated or starter files. Verify every DOM ID in game.js exists in index.html, engine loads before game.js, and each called function is defined. Check no module/fetch/network dependency is needed for file opening. Report a table of requirement, file evidence and missing item. If a file is missing, ask for it instead of guessing. Do not edit in this step.

QUALITY RULES
Use semantic headings, visible labels, real buttons, visible keyboard focus and touch targets at least 44px. Fit 350px, 768px and 1280px viewports without horizontal page scrolling. Use readable 16px body text, consistent spacing and clear empty/paused/error states. Do not hide controls to make the layout fit. Render user-facing text with textContent where appropriate. Handle unavailable localStorage with try/catch so the page still works.

ACCEPTANCE CHECKS
Account for start, pause/resume, restart, food growth, collision, one timer, touch and keyboard controls. Separate inspected facts from play tests not run. Suggest one smallest next fix if required.

OUTPUT
Use short numbered explanations tied to actual functions or IDs. Include a concrete before/after example and manual checks. Clearly say which facts you inferred and which code you inspected.
```

## Trace a tick with exact examples / सटीक उदाहरण से tick समझें

Copy the whole block:

```text
You are helping a beginner produce a complete, polished website. Follow this specification literally; do not add unrequested features.

PROJECT CONTEXT
An original single-player Snake website for beginners, usable by keyboard and phone buttons. Plain HTML/CSS/JavaScript; opening index.html from a folder must work without installation or internet. No npm, libraries, modules, fetch, CDN, external fonts, accounts or server.
index.html links styles.css, then loads engine.js before game.js with defer. engine.js exposes window.SnakeEngine with create(size=20,random=Math.random), turn(game,name), step(game,random=Math.random), placeFood(game,random=Math.random). It owns rules only. game.js owns canvas, DOM, the timer and local best score.
State contract: {size,snake:[{x,y}],direction,queued,food:{x,y}|null,score,over,won}. snake[0] is the head. Directions are up/down/left/right. DOM IDs: board, score, best, stateLabel, status, start, pause, restart, speed. Four real buttons use data-direction. Inspect actual supplied files before editing.
Visual direction: navy #101b28 page, #172638 panels, mint #bcf476 snake/buttons, coral #ff8c78 food, white text and muted #b7c6d5 instructions. System font. Header, short hero, scoreboard, square game board, status, action buttons, speed selector, touch arrows, three short learning tips. Food and snake must remain distinguishable.

INPUT AND WORKFLOW
I will attach or paste the CURRENT index.html, styles.css, engine.js, game.js, each labelled with its filename. If a needed file is missing or truncated, request it before proposing edits; do not invent its contents. Read the supplied version first. Summarise the requested change and the files involved in three bullets. This task is inspection only; do not rewrite any files.

TASK
Read engine.js only for this inspection. Trace rightward movement with head (10,10) and food (11,10): show before/after snake, score and food placement. Explain queued-turn restriction. Explain why a normal move can enter the vacating tail square but cannot enter another body square. Explain how a full board terminates food placement. Do not edit.

QUALITY RULES
Use semantic headings, visible labels, real buttons, visible keyboard focus and touch targets at least 44px. Fit 350px, 768px and 1280px viewports without horizontal page scrolling. Use readable 16px body text, consistent spacing and clear empty/paused/error states. Do not hide controls to make the layout fit. Render user-facing text with textContent where appropriate. Handle unavailable localStorage with try/catch so the page still works.

ACCEPTANCE CHECKS
Example eating result: length 3→4, score 0→10. Right→Left rejected. Up then Left before tick accepts only Up. Show a wall collision at x=19 moving right in a size-20 grid.

OUTPUT
Use short numbered explanations tied to actual functions or IDs. Include a concrete before/after example and manual checks. Clearly say which facts you inferred and which code you inspected.
```

## Improve control instructions / Controls की instructions सुधारें

Copy the whole block:

```text
You are helping a beginner produce a complete, polished website. Follow this specification literally; do not add unrequested features.

PROJECT CONTEXT
An original single-player Snake website for beginners, usable by keyboard and phone buttons. Plain HTML/CSS/JavaScript; opening index.html from a folder must work without installation or internet. No npm, libraries, modules, fetch, CDN, external fonts, accounts or server.
index.html links styles.css, then loads engine.js before game.js with defer. engine.js exposes window.SnakeEngine with create(size=20,random=Math.random), turn(game,name), step(game,random=Math.random), placeFood(game,random=Math.random). It owns rules only. game.js owns canvas, DOM, the timer and local best score.
State contract: {size,snake:[{x,y}],direction,queued,food:{x,y}|null,score,over,won}. snake[0] is the head. Directions are up/down/left/right. DOM IDs: board, score, best, stateLabel, status, start, pause, restart, speed. Four real buttons use data-direction. Inspect actual supplied files before editing.
Visual direction: navy #101b28 page, #172638 panels, mint #bcf476 snake/buttons, coral #ff8c78 food, white text and muted #b7c6d5 instructions. System font. Header, short hero, scoreboard, square game board, status, action buttons, speed selector, touch arrows, three short learning tips. Food and snake must remain distinguishable.

INPUT AND WORKFLOW
I will attach or paste the CURRENT index.html, styles.css, engine.js, game.js, each labelled with its filename. If a needed file is missing or truncated, request it before proposing edits; do not invent its contents. Read the supplied version first. Summarise the requested change and the files involved in three bullets. Make only this task. Keep a backup of the working files. Preserve unrelated behaviour and existing IDs. If another file must change, explain the dependency first.

TASK
Edit instructional text in index.html only. Give short English and Hindi instructions for Arrow keys/W A S D, on-screen arrow buttons, +10 per food, wall/body game over, Start, Pause/Resume, Restart. Explain Space and R work when the board has focus; Start focuses it. Preserve all element IDs, button labels used by handlers, aria-labels, script order and controls. Do not overwrite dynamic score/status text with static instructions.

QUALITY RULES
Use semantic headings, visible labels, real buttons, visible keyboard focus and touch targets at least 44px. Fit 350px, 768px and 1280px viewports without horizontal page scrolling. Use readable 16px body text, consistent spacing and clear empty/paused/error states. Do not hide controls to make the layout fit. Render user-facing text with textContent where appropriate. Handle unavailable localStorage with try/catch so the page still works.

ACCEPTANCE CHECKS
Keyboard Tab/Enter reaches Start; after Start Space pauses and resumes on focused board; touch arrows work. Restart resets current score, keeps best. All instruction text wraps at 350px without hiding controls.

OUTPUT
Return complete contents of each changed file in its own code block labelled with the exact filename. No ellipses, TODOs, missing functions, pseudo-code or “rest unchanged”. If the answer will be too long, return one complete file and wait for NEXT before the next file; never cut a file halfway.
After the last file, give exact save/open instructions, a short change summary and a table: action | expected result | actually tested or not run. Check that every referenced ID, function and file exists. Only say a test passed if you actually ran it. If you cannot run a browser, state that clearly and give manual steps. Explain in simple English; use Hindi if I ask.
```

## Add a complete theme switch / पूरा theme switch जोड़ें

Copy the whole block:

```text
You are helping a beginner produce a complete, polished website. Follow this specification literally; do not add unrequested features.

PROJECT CONTEXT
An original single-player Snake website for beginners, usable by keyboard and phone buttons. Plain HTML/CSS/JavaScript; opening index.html from a folder must work without installation or internet. No npm, libraries, modules, fetch, CDN, external fonts, accounts or server.
index.html links styles.css, then loads engine.js before game.js with defer. engine.js exposes window.SnakeEngine with create(size=20,random=Math.random), turn(game,name), step(game,random=Math.random), placeFood(game,random=Math.random). It owns rules only. game.js owns canvas, DOM, the timer and local best score.
State contract: {size,snake:[{x,y}],direction,queued,food:{x,y}|null,score,over,won}. snake[0] is the head. Directions are up/down/left/right. DOM IDs: board, score, best, stateLabel, status, start, pause, restart, speed. Four real buttons use data-direction. Inspect actual supplied files before editing.
Visual direction: navy #101b28 page, #172638 panels, mint #bcf476 snake/buttons, coral #ff8c78 food, white text and muted #b7c6d5 instructions. System font. Header, short hero, scoreboard, square game board, status, action buttons, speed selector, touch arrows, three short learning tips. Food and snake must remain distinguishable.

INPUT AND WORKFLOW
I will attach or paste the CURRENT index.html, styles.css, engine.js, game.js, each labelled with its filename. If a needed file is missing or truncated, request it before proposing edits; do not invent its contents. Read the supplied version first. Summarise the requested change and the files involved in three bullets. Make only this task. Keep a backup of the working files. Preserve unrelated behaviour and existing IDs. If another file must change, explain the dependency first.

TASK
Edit index.html, styles.css and game.js only; engine.js rules unchanged. Add labelled theme button id=themeToggle. Use a body data-theme attribute and CSS variables. Keep dark palette; light palette: page #f4f7ed, panel #ffffff, text #17372b, board #e9f0e4, grid #cbd8c7, snake #246b3c, head #124d2a, food #b83b22. Canvas must also change: have draw() read theme-specific colour values, not just CSS around the canvas. Store theme under selflearn_snake_theme with validated values and try/catch. Toggle updates accessible name/pressed state and calls draw only, never start/step/clock.

QUALITY RULES
Use semantic headings, visible labels, real buttons, visible keyboard focus and touch targets at least 44px. Fit 350px, 768px and 1280px viewports without horizontal page scrolling. Use readable 16px body text, consistent spacing and clear empty/paused/error states. Do not hide controls to make the layout fit. Render user-facing text with textContent where appropriate. Handle unavailable localStorage with try/catch so the page still works.

ACCEPTANCE CHECKS
Toggle during running and paused rounds: positions, score, speed and paused state preserved; no extra timer. Food and snake visible in both themes. Keyboard and touch work; reload restores theme if storage available; invalid stored value defaults dark.

OUTPUT
Return complete contents of each changed file in its own code block labelled with the exact filename. No ellipses, TODOs, missing functions, pseudo-code or “rest unchanged”. If the answer will be too long, return one complete file and wait for NEXT before the next file; never cut a file halfway.
After the last file, give exact save/open instructions, a short change summary and a table: action | expected result | actually tested or not run. Check that every referenced ID, function and file exists. Only say a test passed if you actually ran it. If you cannot run a browser, state that clearly and give manual steps. Explain in simple English; use Hindi if I ask.
```

## Build an arcade home page / Arcade home page बनाएँ

Copy the whole block:

```text
You are helping a beginner produce a complete, polished website. Follow this specification literally; do not add unrequested features.

PROJECT CONTEXT
An original single-player Snake website for beginners, usable by keyboard and phone buttons. Plain HTML/CSS/JavaScript; opening index.html from a folder must work without installation or internet. No npm, libraries, modules, fetch, CDN, external fonts, accounts or server.
index.html links styles.css, then loads engine.js before game.js with defer. engine.js exposes window.SnakeEngine with create(size=20,random=Math.random), turn(game,name), step(game,random=Math.random), placeFood(game,random=Math.random). It owns rules only. game.js owns canvas, DOM, the timer and local best score.
State contract: {size,snake:[{x,y}],direction,queued,food:{x,y}|null,score,over,won}. snake[0] is the head. Directions are up/down/left/right. DOM IDs: board, score, best, stateLabel, status, start, pause, restart, speed. Four real buttons use data-direction. Inspect actual supplied files before editing.
Visual direction: navy #101b28 page, #172638 panels, mint #bcf476 snake/buttons, coral #ff8c78 food, white text and muted #b7c6d5 instructions. System font. Header, short hero, scoreboard, square game board, status, action buttons, speed selector, touch arrows, three short learning tips. Food and snake must remain distinguishable.

INPUT AND WORKFLOW
I will attach or paste the CURRENT index.html, styles.css, engine.js, game.js, each labelled with its filename. If a needed file is missing or truncated, request it before proposing edits; do not invent its contents. Read the supplied version first. Summarise the requested change and the files involved in three bullets. Make only this task. Keep a backup of the working files. Preserve unrelated behaviour and existing IDs. If another file must change, explain the dependency first.

TASK
Add arcade.html and append scoped .arcade-home styles to styles.css. Keep the four existing game files working. Use shared dark/mint identity, a short h1, one Snake game card linking ./index.html, and a Memory game card clearly labelled “Coming soon” with no fake playable link. Cards show an original emoji illustration, description and status. At 350px stack cards; at desktop use two columns. Include keyboard focus styles and a visible return link from the home page to Snake. Keep relative paths.

QUALITY RULES
Use semantic headings, visible labels, real buttons, visible keyboard focus and touch targets at least 44px. Fit 350px, 768px and 1280px viewports without horizontal page scrolling. Use readable 16px body text, consistent spacing and clear empty/paused/error states. Do not hide controls to make the layout fit. Render user-facing text with textContent where appropriate. Handle unavailable localStorage with try/catch so the page still works.

ACCEPTANCE CHECKS
Open arcade.html directly: stylesheet loads, Snake link opens the game, Coming soon does not imply a working game. Keyboard activates Snake. After publication verify both URLs and relative asset paths on another device; label unrun publishing checks honestly.

OUTPUT
Return complete contents of each changed file in its own code block labelled with the exact filename. No ellipses, TODOs, missing functions, pseudo-code or “rest unchanged”. If the answer will be too long, return one complete file and wait for NEXT before the next file; never cut a file halfway.
After the last file, give exact save/open instructions, a short change summary and a table: action | expected result | actually tested or not run. Check that every referenced ID, function and file exists. Only say a test passed if you actually ran it. If you cannot run a browser, state that clearly and give manual steps. Explain in simple English; use Hindi if I ask.
```

## Make a safe first colour change / पहला रंग बदलाव करें

Copy the whole block:

```text
You are helping a beginner produce a complete, polished website. Follow this specification literally; do not add unrequested features.

PROJECT CONTEXT
An original single-player Snake website for beginners, usable by keyboard and phone buttons. Plain HTML/CSS/JavaScript; opening index.html from a folder must work without installation or internet. No npm, libraries, modules, fetch, CDN, external fonts, accounts or server.
index.html links styles.css, then loads engine.js before game.js with defer. engine.js exposes window.SnakeEngine with create(size=20,random=Math.random), turn(game,name), step(game,random=Math.random), placeFood(game,random=Math.random). It owns rules only. game.js owns canvas, DOM, the timer and local best score.
State contract: {size,snake:[{x,y}],direction,queued,food:{x,y}|null,score,over,won}. snake[0] is the head. Directions are up/down/left/right. DOM IDs: board, score, best, stateLabel, status, start, pause, restart, speed. Four real buttons use data-direction. Inspect actual supplied files before editing.
Visual direction: navy #101b28 page, #172638 panels, mint #bcf476 snake/buttons, coral #ff8c78 food, white text and muted #b7c6d5 instructions. System font. Header, short hero, scoreboard, square game board, status, action buttons, speed selector, touch arrows, three short learning tips. Food and snake must remain distinguishable.

INPUT AND WORKFLOW
I will attach or paste the CURRENT index.html, styles.css, engine.js, game.js, each labelled with its filename. If a needed file is missing or truncated, request it before proposing edits; do not invent its contents. Read the supplied version first. Summarise the requested change and the files involved in three bullets. Make only this task. Keep a backup of the working files. Preserve unrelated behaviour and existing IDs. If another file must change, explain the dependency first.

TASK
Edit game.js only. Find the food drawing block in draw() and change food from #ff8c78 to #ffd166. Keep snake, background, geometry, scoring and timers unchanged. If the current project already has a theme abstraction, change the corresponding food palette value instead of adding a conflicting hardcoded colour. Explain the exact change.

QUALITY RULES
Use semantic headings, visible labels, real buttons, visible keyboard focus and touch targets at least 44px. Fit 350px, 768px and 1280px viewports without horizontal page scrolling. Use readable 16px body text, consistent spacing and clear empty/paused/error states. Do not hide controls to make the layout fit. Render user-facing text with textContent where appropriate. Handle unavailable localStorage with try/catch so the page still works.

ACCEPTANCE CHECKS
Food remains visible and distinguishable from mint snake on navy board. Eating still adds 10 and grows one segment. Pause/Resume and Restart behave as before.

OUTPUT
Return complete contents of each changed file in its own code block labelled with the exact filename. No ellipses, TODOs, missing functions, pseudo-code or “rest unchanged”. If the answer will be too long, return one complete file and wait for NEXT before the next file; never cut a file halfway.
After the last file, give exact save/open instructions, a short change summary and a table: action | expected result | actually tested or not run. Check that every referenced ID, function and file exists. Only say a test passed if you actually ran it. If you cannot run a browser, state that clearly and give manual steps. Explain in simple English; use Hindi if I ask.
```

## Add a second playable game / दूसरा playable game जोड़ें

Copy the whole block:

```text
You are helping a beginner produce a complete, polished website. Follow this specification literally; do not add unrequested features.

PROJECT CONTEXT
An original single-player Snake website for beginners, usable by keyboard and phone buttons. Plain HTML/CSS/JavaScript; opening index.html from a folder must work without installation or internet. No npm, libraries, modules, fetch, CDN, external fonts, accounts or server.
index.html links styles.css, then loads engine.js before game.js with defer. engine.js exposes window.SnakeEngine with create(size=20,random=Math.random), turn(game,name), step(game,random=Math.random), placeFood(game,random=Math.random). It owns rules only. game.js owns canvas, DOM, the timer and local best score.
State contract: {size,snake:[{x,y}],direction,queued,food:{x,y}|null,score,over,won}. snake[0] is the head. Directions are up/down/left/right. DOM IDs: board, score, best, stateLabel, status, start, pause, restart, speed. Four real buttons use data-direction. Inspect actual supplied files before editing.
Visual direction: navy #101b28 page, #172638 panels, mint #bcf476 snake/buttons, coral #ff8c78 food, white text and muted #b7c6d5 instructions. System font. Header, short hero, scoreboard, square game board, status, action buttons, speed selector, touch arrows, three short learning tips. Food and snake must remain distinguishable.

INPUT AND WORKFLOW
I will attach or paste the CURRENT index.html, styles.css, engine.js, game.js, each labelled with its filename. If a needed file is missing or truncated, request it before proposing edits; do not invent its contents. Read the supplied version first. Summarise the requested change and the files involved in three bullets. Make only this task. Keep a backup of the working files. Preserve unrelated behaviour and existing IDs. If another file must change, explain the dependency first.

TASK
Prerequisite: attach arcade.html too; if missing, request it. Create memory/index.html, memory/styles.css, memory/game.js without editing Snake. Build 8 pairs from 8 distinct emoji, shuffle with Fisher–Yates, use 16 real buttons with accessible labels. Grid has 4 columns at 350px and desktop, buttons >=44px. State: deck, first, second, locked, matchedPairs, moves, pendingTimeout. Clicking same card, matched card or while locked does nothing. A second valid flip adds one move. Matched pair stays face up; unmatched pair locks input for 800ms, then flips back. Win at 8 pairs. Restart cancels pending timeout, resets state/moves, reshuffles and redraws. Add a ../arcade.html return link. Only after all three files are supplied, replace the Coming soon card with a real ./memory/index.html link.

QUALITY RULES
Use semantic headings, visible labels, real buttons, visible keyboard focus and touch targets at least 44px. Fit 350px, 768px and 1280px viewports without horizontal page scrolling. Use readable 16px body text, consistent spacing and clear empty/paused/error states. Do not hide controls to make the layout fit. Render user-facing text with textContent where appropriate. Handle unavailable localStorage with try/catch so the page still works.

ACCEPTANCE CHECKS
Double click same card does not form a pair; third click during 800ms delay ignored; restart during delay cannot mutate the new board; matching all 8 pairs shows win; keyboard activation works. Snake still opens/plays and links work locally and online.

OUTPUT
Return complete contents of each changed file in its own code block labelled with the exact filename. No ellipses, TODOs, missing functions, pseudo-code or “rest unchanged”. If the answer will be too long, return one complete file and wait for NEXT before the next file; never cut a file halfway.
After the last file, give exact save/open instructions, a short change summary and a table: action | expected result | actually tested or not run. Check that every referenced ID, function and file exists. Only say a test passed if you actually ran it. If you cannot run a browser, state that clearly and give manual steps. Explain in simple English; use Hindi if I ask.
```

## Repair one observed problem / एक देखी समस्या सुधारें

Copy the whole block:

```text
You are helping a beginner produce a complete, polished website. Follow this specification literally; do not add unrequested features.

PROJECT CONTEXT
An original single-player Snake website for beginners, usable by keyboard and phone buttons. Plain HTML/CSS/JavaScript; opening index.html from a folder must work without installation or internet. No npm, libraries, modules, fetch, CDN, external fonts, accounts or server.
index.html links styles.css, then loads engine.js before game.js with defer. engine.js exposes window.SnakeEngine with create(size=20,random=Math.random), turn(game,name), step(game,random=Math.random), placeFood(game,random=Math.random). It owns rules only. game.js owns canvas, DOM, the timer and local best score.
State contract: {size,snake:[{x,y}],direction,queued,food:{x,y}|null,score,over,won}. snake[0] is the head. Directions are up/down/left/right. DOM IDs: board, score, best, stateLabel, status, start, pause, restart, speed. Four real buttons use data-direction. Inspect actual supplied files before editing.
Visual direction: navy #101b28 page, #172638 panels, mint #bcf476 snake/buttons, coral #ff8c78 food, white text and muted #b7c6d5 instructions. System font. Header, short hero, scoreboard, square game board, status, action buttons, speed selector, touch arrows, three short learning tips. Food and snake must remain distinguishable.

INPUT AND WORKFLOW
I will attach or paste the CURRENT index.html, styles.css, engine.js, game.js, each labelled with its filename. If a needed file is missing or truncated, request it before proposing edits; do not invent its contents. Read the supplied version first. Summarise the requested change and the files involved in three bullets. Make only this task. Keep a backup of the working files. Preserve unrelated behaviour and existing IDs. If another file must change, explain the dependency first.

TASK
First ask me for: exact steps to reproduce, expected result, actual result, browser/device width and any console error text. Ask for a screenshot only if layout evidence is needed. Read all supplied current files. Identify the smallest likely cause with file/function evidence; do not rewrite the site. Fix only that cause. Preserve the working features. If evidence is insufficient, ask one focused question rather than guessing.

QUALITY RULES
Use semantic headings, visible labels, real buttons, visible keyboard focus and touch targets at least 44px. Fit 350px, 768px and 1280px viewports without horizontal page scrolling. Use readable 16px body text, consistent spacing and clear empty/paused/error states. Do not hide controls to make the layout fit. Render user-facing text with textContent where appropriate. Handle unavailable localStorage with try/catch so the page still works.

ACCEPTANCE CHECKS
Repeat the exact failing steps and show expected versus observed result. Retest the adjacent controls affected by the edit. State “not run” for anything you cannot execute. Explain how to restore the prior file if the fix fails.

OUTPUT
Return complete contents of each changed file in its own code block labelled with the exact filename. No ellipses, TODOs, missing functions, pseudo-code or “rest unchanged”. If the answer will be too long, return one complete file and wait for NEXT before the next file; never cut a file halfway.
After the last file, give exact save/open instructions, a short change summary and a table: action | expected result | actually tested or not run. Check that every referenced ID, function and file exists. Only say a test passed if you actually ran it. If you cannot run a browser, state that clearly and give manual steps. Explain in simple English; use Hindi if I ask.
```

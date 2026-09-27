/* Shared prompt source for the course and generated offline prompt handbooks. */
(function(root){
  'use strict';
  const projects={
    market:{name:'Satbarwa Bazar',chapter:25,folder:'satbarwa-bazar',files:'index.html, styles.css, app.js',context:`PROJECT CONTEXT
An original, bilingual English/Hindi local-market catalog for Satbarwa Bazar. All products, prices and stock are fictional. This is a learning storefront with a local demo cart, not a payment or order system.
Plain HTML/CSS/JavaScript. Open index.html directly from an extracted folder. Relative file paths; no npm, framework, modules, fetch, server, CDN or external font/image dependency.
Existing app.js has products, copy.en/copy.hi, state {lang,category,query,sort,cart}, renderStatic, renderCategories, visibleProducts, renderProducts, renderCart and renderAll. Inspect their actual code before editing; these names describe the supplied starter.
Product contract: {id, name:{en,hi}, category, unit:{en,hi}, price:number, inStock:boolean, icon, color}. category is grocery, vegetables or household. Cart maps product id to integer quantity 1–99; price comes from products, never from displayed text.
HTML IDs: enBtn, hiBtn, cartCount, search, sort, categories, products, resultCount, empty, clear, cartItems, total. Preserve matching IDs and handlers. Existing translations use data-i18n attributes and the copy objects.
Visual direction: original green/cream market design; system font; light background #f7f8f2, dark green #146c4a, dark readable text. Header with brand/language/cart; hero; visible sample-data notice; search/sort; categories; product cards; cart; short improvement tips. Product icons are emoji on soft colour blocks, not remote images.`},
    snake:{name:'Snake Lab',chapter:28,folder:'snake-arcade',files:'index.html, styles.css, engine.js, game.js',context:`PROJECT CONTEXT
An original single-player Snake website for beginners, usable by keyboard and phone buttons. Plain HTML/CSS/JavaScript; opening index.html from a folder must work without installation or internet. No npm, libraries, modules, fetch, CDN, external fonts, accounts or server.
index.html links styles.css, then loads engine.js before game.js with defer. engine.js exposes window.SnakeEngine with create(size=20,random=Math.random), turn(game,name), step(game,random=Math.random), placeFood(game,random=Math.random). It owns rules only. game.js owns canvas, DOM, the timer and local best score.
State contract: {size,snake:[{x,y}],direction,queued,food:{x,y}|null,score,over,won}. snake[0] is the head. Directions are up/down/left/right. DOM IDs: board, score, best, stateLabel, status, start, pause, restart, speed. Four real buttons use data-direction. Inspect actual supplied files before editing.
Visual direction: navy #101b28 page, #172638 panels, mint #bcf476 snake/buttons, coral #ff8c78 food, white text and muted #b7c6d5 instructions. System font. Header, short hero, scoreboard, square game board, status, action buttons, speed selector, touch arrows, three short learning tips. Food and snake must remain distinguishable.`}
  };
  const prompts=[];
  function add(project,id,title,hi,lesson,task,checks,mode='edit'){
    const p=projects[project];
    const input=mode==='build'?`INPUT AND WORKFLOW
Build a new project in an empty folder. No existing files are required. Use the requirements below as the complete specification; a screenshot is optional visual reference only.
First reply: a short file/ID checklist and the COMPLETE index.html only. Then wait for me to say NEXT plus the next filename. Produce one complete file per reply in this order: ${p.files}. Keep this specification and the same IDs throughout. If earlier files are no longer in context, ask me to paste them before continuing. Do not test the whole app until every file is saved.`:`INPUT AND WORKFLOW
I will attach or paste the CURRENT ${p.files}, each labelled with its filename. If a needed file is missing or truncated, request it before proposing edits; do not invent its contents. Read the supplied version first. Summarise the requested change and the files involved in three bullets. ${mode==='read'?'This task is inspection only; do not rewrite any files.':'Make only this task. Keep a backup of the working files. Preserve unrelated behaviour and existing IDs. If another file must change, explain the dependency first.'}`;
    const output=mode==='read'?`OUTPUT
Use short numbered explanations tied to actual functions or IDs. Include a concrete before/after example and manual checks. Clearly say which facts you inferred and which code you inspected.`:`OUTPUT
Return complete contents of each changed file in its own code block labelled with the exact filename. No ellipses, TODOs, missing functions, pseudo-code or “rest unchanged”. ${mode==='build'?'Respect the one-file-per-reply order above.':'If the answer will be too long, return one complete file and wait for NEXT before the next file; never cut a file halfway.'}
After the last file, give exact save/open instructions, a short change summary and a table: action | expected result | actually tested or not run. Check that every referenced ID, function and file exists. Only say a test passed if you actually ran it. If you cannot run a browser, state that clearly and give manual steps. Explain in simple English; use Hindi if I ask.`;
    const body=`You are helping a beginner produce a complete, polished website. Follow this specification literally; do not add unrequested features.

${p.context}

${input}

TASK
${task}

QUALITY RULES
Use semantic headings, visible labels, real buttons, visible keyboard focus and touch targets at least 44px. Fit 350px, 768px and 1280px viewports without horizontal page scrolling. Use readable 16px body text, consistent spacing and clear empty/paused/error states. Do not hide controls to make the layout fit. Render user-facing text with textContent where appropriate. Handle unavailable localStorage with try/catch so the page still works.

ACCEPTANCE CHECKS
${checks}

${output}`;
    prompts.push({project,id,title,hi,lesson,mode,body});
  }
  add('market','market-build','Build the complete storefront','पूरी storefront बनाएँ',1,
`Build three complete files in the specified order.
1. index.html: semantic header/main/footer; EN/Hindi buttons; cart-count link; hero titled “Everyday finds, one local view.”; sample-data notice; labelled search input; select with featured/low/high sort values; category-button container; result count; product-grid container; hidden empty-result panel with Clear filters; cart items and total; no checkout. Use every ID listed above. The app.js script uses defer. A skip link goes to the catalog.
2. styles.css: max-width 1140px centred layout, 16–24px padding/gaps, 16px rounded cards, visible focus outlines. At 350px use one product column and cart below; at 768px use two product columns; at 1280px use three product columns with a roughly 300px cart beside them. Allow category buttons to wrap. Inputs and cards never exceed their container. Include colour-block emoji artwork and clear price/unit hierarchy.
3. app.js: one products array; copy.en/copy.hi for ALL controls, notices, empty states and cart text; default English, switching language keeps search/category/cart state. Use the product schema above with these exact six records:
rice / Rice / चावल / grocery / 1 kg / 1 किलो / 60 / true / 🍚
dal / Dal / दाल / grocery / 1 kg / 1 किलो / 110 / true / 🫘
tomato / Tomatoes / टमाटर / vegetables / 1 kg / 1 किलो / 30 / true / 🍅
potato / Potatoes / आलू / vegetables / 1 kg / 1 किलो / 25 / true / 🥔
soap / Soap / साबुन / household / 1 bar / 1 टिकिया / 35 / true / 🧼
detergent / Detergent / डिटर्जेंट / household / 1 pack / 1 पैक / 80 / false / 🫧
Choose a pale colour for each record. Display rupees and units; unavailable detergent has a disabled Add button. Search trims spaces and matches either language case-insensitively. Search AND category apply together; sort a filtered copy without mutating products. No match shows a useful message and Clear. Clear resets search/category to all, retains the chosen sort, and focuses search. All is a category button, not a product category.
Cart: add available products by id, increase/decrease 1–99, remove, count total units, sum price × quantity. Disable minus at 1 and plus at 99. Persist only validated known ids and integer quantities in localStorage key satbarwa_demo_cart; ignore invalid JSON, unavailable/unknown items and invalid quantities. Storage failure must not stop in-memory play. Empty cart total is ₹0. Never claim an order was placed.`,
`Fresh load: 6 cards, 1 disabled Add, ₹0 empty cart.
Search “ DAL ” → one Dal card; choose Vegetables with that search → no matches; Clear → six cards.
Price low to high → Potatoes ₹25 first. Switching Hindi translates labels and names without clearing the cart.
From empty cart: 2 rice + 1 dal → ₹230; reduce rice to 1 → ₹170; remove dal → ₹60; reload → validated cart restores, when storage is available.
At 350px and 1280px: every control visible, no sideways scroll; Tab/Enter operates buttons. No missing assets or console errors.`,'build');
  add('snake','snake-build','Build the complete Snake website','पूरी Snake website बनाएँ',2,
`Build four complete files in order, preserving the project contract.
1. index.html: the listed IDs; a canvas with intrinsic width/height 400, tabindex=0 and descriptive aria-label; score/best/state label; status role=status; Start, Pause/Resume, Restart; speed select values 180/120/80 milliseconds (Easy/Normal/Fast); four labelled direction buttons. Explain controls and +10 points in short English and Hindi text. Pause begins disabled. Show a static ready board before Start.
2. styles.css: max-width 1140px, 18–24px gutters, rounded panel, high contrast palette above. Desktop game panel plus tips sidebar; below 740px one column. Canvas width:100%, max-width:460px, height:auto, square aspect ratio. Four large touch arrows in a directional grid, wrapping action controls, visible focus ring. Keep the entire board and controls within a 350px page.
3. engine.js: create a 20×20 game with head (10,10), body (9,10),(8,10), direction right, score 0. Place food by choosing from empty cells, not an unbounded retry loop. turn rejects opposite direction and accepts at most one queued direction per tick. step applies the queued turn then moves head by one cell. Check walls and body before moving. When not eating, exclude the tail cell that will move away from collision checks. On eating, keep tail, add 10 and place food on an empty cell. If no empty cells remain set won=true and over=true; never loop forever. On collision set over=true and stop updates. Expose the functions and state listed above without DOM references.
4. game.js: draw grid, food and snake; handle inputs and a SINGLE interval timer. Start/Restart clears an existing interval, creates a new game and focuses board. Pause stops interval without resetting state; Resume creates one interval; changing speed restarts only the timer if running. Ignore movement while paused/over. Support arrows and W A S D, plus touch button clicks. Prevent arrow-key page scroll only while controlling the running game; leave select/input keyboard use intact. Space pauses when board focused; R restarts. Pause automatically when document.hidden. Collision stops timer and displays score and Play again. Save valid nonnegative finite best score under selflearn_snake_best with try/catch; best is local, not an online leaderboard.`,
`Initial view: ready board, score 0, disabled Pause. Start moves exactly one cell per tick.
Test setup: initial head (10,10), food (11,10), one right step → length 4, score 10, new food outside snake.
Moving right then requesting left → ignored. Up then left before the same tick → only first turn accepted.
Pause for several ticks → same positions/score; Resume continues. Restart → length 3, score 0, only one active timer.
Wall/body collision → game over and no further movement. Entering a vacating tail cell without food is allowed. Full board → win without hanging.
Keyboard, touch, speed and hidden-tab pause work. At 350px and 1280px no overflow. Blocked storage still permits a full round.`,'build');
  add('market','market-plan','Inspect and plan before editing','बदलाव से पहले समझें',1,
`Inspect the three attached files. Identify header, hero, search/sort, categories, cards and cart by their actual IDs/functions. Give a six-box phone wireframe in text: header → hero → controls → cards → cart → footer. Explain the shopper goal in two sentences and point to where a new product belongs. Do not edit or add features.`,
`Locate products, visibleProducts and renderCart in the real files. Explain “dal + Vegetables = no match” and “2×60 +110 =230”. List which files I must open to change content versus layout.`,'read');
  add('market','market-layout','Improve the phone layout','Phone layout सुधारें',2,
`Edit styles.css only. At 350px keep a single product column and cart below; wrap category buttons, keep labels visible and all tap controls at least 44px. At tablet width allow two cards where they fit; at 1280px three cards and a cart beside the catalog. Use existing selectors, inspect current breakpoints and change only necessary rules. Do not use a fixed body width or hide overflowing content. Preserve the green/cream palette, product order, language buttons and all behaviour.`,
`At 350/768/1280px no horizontal page scroll; long Hindi labels wrap; each card shows name/unit/price/Add; search and language controls remain visible. Keyboard focus is visible. Explain exact selectors changed.`);
  add('market','market-price','Change one price consistently','एक price सही बदलें',3,
`Edit only the products record whose id is rice in app.js: change numeric price 60 to 62. Do not change its id, unit, stock, currency formatter, cart arithmetic or other products. Explain how cards and cart read the same record. This is a temporary practice edit; tell me how to restore 60 before the lesson's ₹230 exercise.`,
`Rice card ₹62 per 1 kg; search rice and चावल finds it; two rice + one dal costs ₹234. Existing saved rice quantities use the new price after reload. Restore rice to 60 → the same basket is ₹230.`);
  add('market','market-empty','Improve empty-result guidance','खाली result की मदद सुधारें',4,
`Edit only copy.en and copy.hi strings in app.js. Set emptyTitle to “No matching items” / “कोई सामान नहीं मिला” and emptyText to “Try another word, or clear search and category filters.” / “दूसरा शब्द खोजें या search और category filters हटाएँ।” Keep clear labelled “Clear filters” / “Filters हटाएँ”. Preserve keys, filter logic, data and cart.`,
`DAL + Grocery → Dal; DAL + Vegetables → translated empty message and visible Clear; Clear → all 6 items and focus on search. No product data is deleted. Switching language changes the message.`);
  add('market','market-cart','Clarify quantity buttons','Quantity buttons साफ करें',5,
`Edit only the quantity-control aria-label construction in renderCart in app.js. Read current code first. Replace ambiguous product-name-plus-symbol labels with “Decrease Rice quantity” / “Increase Rice quantity” and equivalent dynamic Hindi labels such as “चावल की मात्रा घटाएँ” / “चावल की मात्रा बढ़ाएँ”. Preserve visible +/−, event handlers and 1–99 limits. Labels must use current language/product name.`,
`From empty cart, 2 rice + 1 dal = ₹230; minus rice = ₹170; remove dal = ₹60. Tab to quantity buttons and inspect accessible names in both languages. Minus disabled at 1, plus disabled at 99; unavailable detergent cannot be added.`);
  add('market','market-daily','Make and record one daily change','रोज का एक बदलाव दर्ज करें',6,
`Change only tomato's numeric sample price from 30 to 32 in app.js. Do not claim a seller verified it. Keep its id and all other records. After showing the file, provide a changes.md entry: need, exact prompt, file/record changed, expected checks, actual checks or “not run”, next improvement.`,
`Tomatoes card ₹32 per 1 kg in both languages; tomatoes search works; two tomatoes from empty cart = ₹64. Rice stays ₹60 and dal ₹110. Restore tomato to 30 to return to the original starter.`);
  add('market','market-product','Add a complete product record','पूरा product record जोड़ें',7,
`Edit only products in app.js. Add exactly one record: {id:'mustard-oil',name:{en:'Mustard oil',hi:'सरसों तेल'},category:'grocery',unit:{en:'1 litre',hi:'1 लीटर'},price:150,inStock:true,icon:'🫙',color:'#fff1d9'}. Check whether this id already exists; update it instead of adding a duplicate. Keep the six original records. Explain comma placement when adding an array entry.`,
`Fresh original starter plus this edit → 7 cards, Grocery → 3, search “mustard” or “सरसों” → one. One oil = ₹150, two = ₹300; one oil + one rice = ₹210. Hindi switch keeps cart quantities. Original unavailable detergent stays disabled.`);
  add('market','market-filter','Add a price ceiling filter','अधिकतम price filter जोड़ें',7,
`Edit index.html, styles.css and app.js. Add a labelled number input id=maxPrice, min=0, step=1; blank means no price limit. Add state.maxPrice initially null. Use input.valueAsNumber; accept finite values >=0; handle blank/invalid/negative input with a clear bilingual message, never silently coerce blank to 0. Filter by price <= limit AND existing search/category; then apply existing sorting to a copy. Add EN/Hindi labels to copy and bind through existing renderStatic. Clear resets search/category/maxPrice and the field/message, keeps sort, restores focus to search. Changes to filters never remove items already in cart.`,
`Original six-item starter: blank →6; maximum 30 → potatoes and tomatoes; maximum 0 →no matches; search dal + maximum 30 →none; Clear →6. If mustard oil was previously added, blank/Clear →7. Rice already in cart remains when filtered out. Both languages and phone layout work.`);
  add('market','market-category','Add stationery content','Stationery content जोड़ें',7,
`Edit app.js only: add category key stationery with copy.en.stationery='Stationery' and copy.hi.stationery='स्टेशनरी'; add the id once in renderCategories. Add one unique notebook record: id notebook, name Notebook/कॉपी, unit 1 book/1 कॉपी, price 40, inStock true, icon 📓, pale colour. Keep existing entries, category IDs and render/filter functions. Check for duplicate ids before insertion.`,
`With original six products: All=7, Stationery=1 notebook, search कॉपी=1. Stationery + dal=no matches; Clear restores all. Two notebooks from empty cart=₹80. Category label translates correctly.`);
  add('market','market-faq','Add a bilingual FAQ','दो भाषाओं में FAQ जोड़ें',7,
`Edit index.html, styles.css and copy.en/copy.hi in app.js. Add a semantic FAQ section below catalog/cart using h2 and two native details/summary items. Q1 “Are these real prices?” answer “These are fictional practice prices; confirm real prices with sellers.” Q2 “Has my order been sent?” answer “No. This demo cart does not send orders or take payments.” Supply clear Hindi translations for each. Use data-i18n on text spans, not on a details parent that contains child elements. Reuse colours/spacing; do not change cart logic.`,
`Tab/Enter opens and closes both answers. Hindi translates questions/answers while preserving disclosure elements and cart state. Section wraps at 350px, and no layout or game-like placeholder is added.`);
  add('market','market-favourites','Add local favourites','Local favourites जोड़ें',7,
`Edit app.js and styles.css; index.html only if needed for instructions. Add one Favourite toggle button per product card, separate from Add. Store a set of product ids under satbarwa_demo_favourites; parse/validate known ids with try/catch and fall back to memory. Update button text, aria-pressed and English/Hindi accessible name when toggled. Keep favourites on unavailable products possible; never add a favourite automatically to cart. Preserve state through search/category/language rerenders and page reload when storage works.`,
`Favourite Rice → pressed; search dal then clear →Rice still favourited; Hindi label updates; reload restores; toggle off removes. Cart remains unchanged. Invalid saved JSON/blocked storage does not crash the page.`);
  add('snake','snake-inspect','Understand the four files','चारों files समझें',1,
`Inspect the attached four files without editing. Make a four-row file map and describe the flow button → turn → timer step → draw. Locate engine script order and actual DOM IDs. Give three beginner actions: start/steer, pause/resume, restart. Explain local best score versus current score and why the game works offline.`,
`Reference actual functions, not imagined ones. Explain which file changes colour and which changes collision rules. Include keyboard and touch instructions.`,'read');
  add('snake','snake-plan','Review the AI-generated files','AI की files जाँचें',2,
`Inspect the complete generated or starter files. Verify every DOM ID in game.js exists in index.html, engine loads before game.js, and each called function is defined. Check no module/fetch/network dependency is needed for file opening. Report a table of requirement, file evidence and missing item. If a file is missing, ask for it instead of guessing. Do not edit in this step.`,
`Account for start, pause/resume, restart, food growth, collision, one timer, touch and keyboard controls. Separate inspected facts from play tests not run. Suggest one smallest next fix if required.`,'read');
  add('snake','snake-rules','Trace a tick with exact examples','सटीक उदाहरण से tick समझें',3,
`Read engine.js only for this inspection. Trace rightward movement with head (10,10) and food (11,10): show before/after snake, score and food placement. Explain queued-turn restriction. Explain why a normal move can enter the vacating tail square but cannot enter another body square. Explain how a full board terminates food placement. Do not edit.`,
`Example eating result: length 3→4, score 0→10. Right→Left rejected. Up then Left before tick accepts only Up. Show a wall collision at x=19 moving right in a size-20 grid.`,'read');
  add('snake','snake-controls','Improve control instructions','Controls की instructions सुधारें',4,
`Edit instructional text in index.html only. Give short English and Hindi instructions for Arrow keys/W A S D, on-screen arrow buttons, +10 per food, wall/body game over, Start, Pause/Resume, Restart. Explain Space and R work when the board has focus; Start focuses it. Preserve all element IDs, button labels used by handlers, aria-labels, script order and controls. Do not overwrite dynamic score/status text with static instructions.`,
`Keyboard Tab/Enter reaches Start; after Start Space pauses and resumes on focused board; touch arrows work. Restart resets current score, keeps best. All instruction text wraps at 350px without hiding controls.`);
  add('snake','snake-theme','Add a complete theme switch','पूरा theme switch जोड़ें',5,
`Edit index.html, styles.css and game.js only; engine.js rules unchanged. Add labelled theme button id=themeToggle. Use a body data-theme attribute and CSS variables. Keep dark palette; light palette: page #f4f7ed, panel #ffffff, text #17372b, board #e9f0e4, grid #cbd8c7, snake #246b3c, head #124d2a, food #b83b22. Canvas must also change: have draw() read theme-specific colour values, not just CSS around the canvas. Store theme under selflearn_snake_theme with validated values and try/catch. Toggle updates accessible name/pressed state and calls draw only, never start/step/clock.`,
`Toggle during running and paused rounds: positions, score, speed and paused state preserved; no extra timer. Food and snake visible in both themes. Keyboard and touch work; reload restores theme if storage available; invalid stored value defaults dark.`);
  add('snake','snake-arcade','Build an arcade home page','Arcade home page बनाएँ',6,
`Add arcade.html and append scoped .arcade-home styles to styles.css. Keep the four existing game files working. Use shared dark/mint identity, a short h1, one Snake game card linking ./index.html, and a Memory game card clearly labelled “Coming soon” with no fake playable link. Cards show an original emoji illustration, description and status. At 350px stack cards; at desktop use two columns. Include keyboard focus styles and a visible return link from the home page to Snake. Keep relative paths.`,
`Open arcade.html directly: stylesheet loads, Snake link opens the game, Coming soon does not imply a working game. Keyboard activates Snake. After publication verify both URLs and relative asset paths on another device; label unrun publishing checks honestly.`);
  add('snake','snake-colour','Make a safe first colour change','पहला रंग बदलाव करें',5,
`Edit game.js only. Find the food drawing block in draw() and change food from #ff8c78 to #ffd166. Keep snake, background, geometry, scoring and timers unchanged. If the current project already has a theme abstraction, change the corresponding food palette value instead of adding a conflicting hardcoded colour. Explain the exact change.`,
`Food remains visible and distinguishable from mint snake on navy board. Eating still adds 10 and grows one segment. Pause/Resume and Restart behave as before.`);
  add('snake','snake-memory','Add a second playable game','दूसरा playable game जोड़ें',6,
`Prerequisite: attach arcade.html too; if missing, request it. Create memory/index.html, memory/styles.css, memory/game.js without editing Snake. Build 8 pairs from 8 distinct emoji, shuffle with Fisher–Yates, use 16 real buttons with accessible labels. Grid has 4 columns at 350px and desktop, buttons >=44px. State: deck, first, second, locked, matchedPairs, moves, pendingTimeout. Clicking same card, matched card or while locked does nothing. A second valid flip adds one move. Matched pair stays face up; unmatched pair locks input for 800ms, then flips back. Win at 8 pairs. Restart cancels pending timeout, resets state/moves, reshuffles and redraws. Add a ../arcade.html return link. Only after all three files are supplied, replace the Coming soon card with a real ./memory/index.html link.`,
`Double click same card does not form a pair; third click during 800ms delay ignored; restart during delay cannot mutate the new board; matching all 8 pairs shows win; keyboard activation works. Snake still opens/plays and links work locally and online.`);
  for(const project of ['market','snake'])add(project,project+'-repair','Repair one observed problem','एक देखी समस्या सुधारें',0,
`First ask me for: exact steps to reproduce, expected result, actual result, browser/device width and any console error text. Ask for a screenshot only if layout evidence is needed. Read all supplied current files. Identify the smallest likely cause with file/function evidence; do not rewrite the site. Fix only that cause. Preserve the working features. If evidence is insufficient, ask one focused question rather than guessing.`,
`Repeat the exact failing steps and show expected versus observed result. Retest the adjacent controls affected by the edit. State “not run” for anything you cannot execute. Explain how to restore the prior file if the fix fails.`);
  const pack={projects,prompts};
  if(typeof module!=='undefined'&&module.exports){module.exports=pack;return;}
  root.SL_PROJECT_PROMPTS=pack;
  const subject=root.SL_DATA&&root.SL_DATA.subjects.find(s=>s.code==='COMPAPP');if(!subject)return;
  for(const project of Object.keys(projects)){
    const chapter=subject.chapters.find(c=>c.no===projects[project].chapter);if(!chapter)continue;
    chapter.topics.forEach((topic,i)=>{
      topic.aiPromptIds=prompts.filter(p=>p.project===project&&(p.lesson===i+1||p.lesson===0)).map(p=>p.id);
      for(const lang of ['en','hi'])topic.notes[lang]=topic.notes[lang].replace(/\*\*(?:Ask the coding assistant|AI से यह request करें|AI prompt — copy and try|AI prompt — copy करके आज़माएँ)\*\*[\s\S]*?(?=\n\n\*\*)/,lang==='hi'?'**पूरा AI prompt**\n\nनीचे “पूरा prompt खोलें” में इस lesson का prompt copy करें। पहले अपनी current files दें। Prompt English में है; हिंदी में समझाने को कह सकते हैं।':'**Complete AI prompt**\n\nOpen this lesson’s complete prompt below. Copy it and provide your current files before requesting an edit.');
    });
  }
  const E=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  root.renderComputerProjectPrompts=function(topic){
    if(!topic.aiPromptIds)return'';const hi=root.LANG==='hi';
    return '<section class="project-prompts"><h2>'+(hi?'पूरा prompt खोलें, copy करें, फिर जाँचें':'Open a complete prompt, copy, then test')+'</h2><p>'+(hi?'① Current files दें → ② एक task का prompt भेजें → ③ पूरी file save करें → ④ अपेक्षित result जाँचें। नए project के लिए build prompt में NEXT से एक-एक file लें।':'① Provide current files → ② Send one task prompt → ③ Save complete files → ④ Check the expected results. For a new build, request each next file with NEXT.')+'</p><p class="sub">'+(hi?'Technical prompts English में हैं; copy करने पर हिंदी में explanation की request जुड़ती है। Copy न हो तो box से पूरा text चुनें।':'Each prompt includes project context, exact requirements and acceptance checks. If copying is unavailable, select the complete text in the box.')+'</p>'+topic.aiPromptIds.map(id=>{const p=prompts.find(p=>p.id===id);const body=p.body+(hi?'\n\nExplain the instructions and results in Hindi; keep code identifiers unchanged.':'');return '<details class="project-prompt"><summary>'+E(hi?p.hi:p.title)+'</summary><label for="prompt-'+id+'">'+(hi?'पूरा prompt (English)':'Complete prompt')+'</label><textarea id="prompt-'+id+'" readonly rows="13" spellcheck="false">'+E(body)+'</textarea><button class="btn sm" type="button" onclick="copyComputerProjectPrompt(this,\''+id+'\')">'+(hi?'Prompt copy करें':'Copy prompt')+'</button><span role="status" class="prompt-copy-status"></span></details>';}).join('')+'</section>';
  };
  root.copyComputerProjectPrompt=async function(button,id){const box=document.getElementById('prompt-'+id),status=button.nextElementSibling;try{if(!navigator.clipboard)throw Error('Clipboard unavailable');await navigator.clipboard.writeText(box.value);status.textContent=root.LANG==='hi'?'Copy हो गया':'Copied';}catch(_){box.focus();box.select();status.textContent=root.LANG==='hi'?'Text चुना है। Copy करें (Ctrl+C / long press)।':'Text selected. Copy it with Ctrl+C or a long press.';}};
})(typeof window!=='undefined'?window:globalThis);

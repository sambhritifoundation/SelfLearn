# Build your first game website

1. Extract this ZIP. Keep `index.html`, `styles.css`, `engine.js` and `game.js` together.
2. Open `index.html` in a browser. No installation or internet is needed to play locally.
3. Press Start. Use arrow keys, W A S D, or the on-screen arrows. Collect food for 10 points; avoid walls and your own body.
4. Pause/Resume keeps the same round. Restart begins a new round. The best score belongs to this browser, not an online leaderboard.

**हिंदी:** ZIP निकालें। चारों files साथ रखें और `index.html` browser में खोलें। Start दबाएँ। Keyboard या screen के arrows से चलाएँ। खाना खाने पर 10 अंक मिलते हैं। Pause से round रुकता है; Restart से नया round शुरू होता है।

## File map

| File | What to change |
| --- | --- |
| index.html | Headings, instructions, buttons and game layout |
| styles.css | Colours, spacing and phone layout |
| engine.js | Movement, food, score and collision rules |
| game.js | Canvas drawing, controls, timer and saved best score |

Make a backup folder before changing anything. Give your coding assistant the files, ask for one small change, read the edits, reload the page and play it yourself.

## Prompt to build it from scratch

> Build an original Snake game website in plain HTML, CSS and JavaScript. Use index.html, styles.css, engine.js for rules and game.js for drawing and controls. Use a 20 × 20 grid. Eating food adds 10 points and one body segment. Food must appear on empty squares. Wall or body collision ends the round. Block direct reverse moves and prevent multiple turns between ticks. Add Start, Pause/Resume, Restart, score, speed choices, arrow keys/W A S D and touch buttons. Make it work by opening index.html with no server or libraries. Explain each file and list manual tests.

Try this in a separate folder so you can compare it with the working starter.

## Small improvement prompts

**First change — appearance**

> Change only the food colour in game.js. Keep strong contrast against the board and make food different from the snake. Explain the edit. Keep the rules and controls unchanged.

**New feature — theme**

> Add a light/dark theme button using index.html, styles.css and game.js. Keep food and snake easy to distinguish in both themes. Preserve score, pause, restart and keyboard/touch controls. Show the exact changes and phone/desktop tests.

**New content — instructions**

> Add concise English and Hindi instructions to index.html explaining movement, food, wall/body collisions, pause and restart. Keep the controls visible on a 350px phone screen. Change only the instructions and necessary CSS.

**Extend the website — more game cards**

> Add arcade.html as an arcade home page. Add a Snake card linking to index.html and a clearly labelled Coming soon memory-game card. Use original visuals and relative links. Add responsive styles to styles.css. Preserve the existing game. Show how to open and test both pages.

**Then add another playable game**

> Create a simple single-player memory matching game in a new memory folder with its own HTML, CSS and JavaScript. Use original emoji cards, a moves count and Restart. Ensure two unmatched cards turn back after a short delay and prevent extra selections during that delay. Link it from arcade.html only after it works. Show manual tests; keep Snake unchanged.

**हिंदी में prompt ढाँचा:** “इन files में केवल [एक बदलाव] करो। मौजूदा [rules/controls] सही रखो। बदला code समझाओ और phone/desktop पर जाँचने के कदम दो।”

## Check each change

- Start moves the snake. Food adds one segment and 10 points.
- A direct reverse is ignored; food never appears inside the snake.
- Wall/body collision stops the round. Restart clears the current score.
- Pause freezes the round; Resume continues it. A hidden tab pauses it.
- Arrow keys and touch controls work; buttons can be reached with Tab.
- The page fits a phone and a desktop. New features preserve existing controls.

## Put it online

This is a static, single-player website. Upload the complete folder to a static website host such as GitHub Pages. Keep names and relative paths intact. Open the published address on another device and repeat the checks above. If you add arcade.html, share that page's address for the game menu. Shared multiplayer would need a separate server and synchronisation design.

## Daily change log

Copy this block into `changes.md` for every improvement:

```
Date:
Player need:
Exact prompt:
Files changed:
What I checked:
Result / what I restored:
Next improvement:
```

# My First Business — connected Business Lab journey

Launch: `playlab.html#first-shop`. The earlier five-mission shop remains at `playlab.html#shop-practice` with its original progress and badges. Computer Lab progress is untouched.

## Play as the business owner

Players choose a locally stored name and avatar, then act as the owner. During each trading day they visit an interactive neighbourhood: supplier depot, price board, staff room, today's conversation and bank/bills desk. Each visit opens a character conversation and the relevant action controls. Confirming an action reserves the day's plan; the checklist must be complete before opening. Bank/bills review is mandatory on Days 6–7 and optional earlier. Visits do not create cash or award repeatable XP.

Opening switches to a shop and customer queue. Stock, price, demand and service capacity determine the sales available. The player accepts the customer's payment, calculates change and hands over the item. An incorrect change calculation leaves the current sale incomplete. A hint shows the arithmetic. After handling the first sale, a paid helper can handle the remaining queue. Working alone saves wages but does not unlock delegation.

When no sales are possible, the player closes the shop and investigates the outcome instead of receiving invented sales. Once every available sale is handled, closing posts the entire day's transactions exactly once and advances the calendar. The register and planning draft persist, allowing reload during an unfinished shift. The dashboard deliberately shows the previous closing cash; the register shows current sales collected separately until the accounts are posted.

Learning XP is derived from completed opening decisions (20 each), closed days (50 each) and final reflections (25 each), maximum 485. Rank is a game learning level, not a claim of real professional status or financial success. Changing an action or revisiting a station cannot farm XP.

The two gameplay files are `business-owner-game.js` and `business-owner-game.css`. The original model and transaction journal remain authoritative. Optional owner/draft fields extend the same storage version; older saved decisions and reviews remain valid. Correct-change records are checked before game-mode day closure. Earlier model-only records remain valid for backward compatibility. Restart clears the journey and daily draft while retaining the chosen owner profile; the player can change it when opening a new journey.

## Review and changes

The earlier activity taught sound basic cash/profit arithmetic, but each experiment reset the budget. It had no continuing business commitments or stakeholder relationships. This extension adds three opening decisions and seven trading days in one persistent business. Decisions cannot be replayed to create extra cash.

Students choose a product and location, compare funding offers, and decide how to prepare. They then deal with suppliers, customers, an employee, a bank officer and a community mentor. Daily stock orders, prices, staffing and story responses change cash, stock, bills, service capacity, trust and morale. School orders, rain, faulty goods, team pressure, cash shortages and repayment create both opportunities and setbacks.

The daily outcome comes before the next plan. An invoice/delivery schedule shows obligations and stock on the way. The diary separates cash changes from profit changes. A trend panel shows cumulative profit across days. The final review includes a profit-and-loss statement, assets, liabilities, reconciliation and three conceptual reflections. Learning milestones do not claim that maximum wealth is the objective.

## Classroom model

- Starting founder savings: ₹600. Shelf and sign cost ₹120 and remain equipment assets at cost. No depreciation, tax or licensing is modelled.
- One product per campaign: pens, notebooks or erasers. School and market locations have different stall costs and visitor numbers.
- Own savings, a bank loan, investor equity, or a restricted equipment grant are available. All amounts and terms are fictional. The grant directly provides equipment; it is not unrestricted cash. Investor ownership is 25%, with a distribution of one-quarter of positive final profit only if cash covers it; undistributed profit remains in the business.
- Bank finance costs are fixed model charges recorded when accepting the loan, not real annual interest rates. Principal receipts/payments do not change profit. Finance charges do. A Day 6 bridge loan increases both cash and obligations due on Day 7.
- Local supply is immediate and paid now. Wholesale supply costs ₹2 less per unit, requires at least ten items and is prepaid for next-day delivery. Cooperative stock arrives today with an invoice due tomorrow and a ₹400 outstanding-bill limit. A Day 6 agreed extension postpones only a cooperative invoice due that day.
- Stock carries forward, valued using FIFO purchase costs. Prepaid deliveries are assets in transit until delivery. Unsold stock is not expensed merely because it is bought.
- Each customer wants one item if its price is within their budget. Location, posters, events and low trust change visitors. Stock and staff capacity limit fulfilled sales. The school discount is shown to all that day's buyers.
- Rain without protection writes off one item if stock exists. A complaint after an actual sale can refund the previous sale price or consume a good replacement. Faulty returned goods have no resale value. If there was no prior sale, the conversation concerns the policy and incurs no fictional refund.
- Staff are hired a day at a time with agreed wages. Training can raise capacity; pressure lowers morale. If cash cannot cover wages, refunds or operating costs, the unpaid amount remains a bill. Obligations are not erased or called savings.
- Bills due are settled from available cash before new purchases. Day 7 also settles bank charges and principal after trading. Remaining supplier bills, loans, wages or refunds remain liabilities in the final report. Goods arriving after Day 7 remain prepaid assets rather than disappearing.

Reconciliation:

`cash + inventory + prepaid deliveries + equipment − bills − bank principal − finance charges owed = capital contributions + cumulative profit − equity distributions`

Profit is gross sales less refunds, sold-goods cost, operating expenses, wages, stock losses and finance cost. Payments of previously recorded liabilities do not deduct the expense a second time. A campaign can finish with losses or unpaid obligations; the report identifies the need for recovery instead of claiming a debt-free success.

## Architecture and persistence

- `business-journey-data.js`: bilingual products, terms, actors, events and reflections.
- `business-journey-engine.js`: pure projection of a validated decision log, stock lots, deliveries, bills, financing and reconciliation.
- `business-journey.js`: opening decisions, conversations, planning, outcomes, diary and review.
- `business-journey.css`: responsive controls and layouts.

The activity uses the shared PlayLab `journey` renderer. Data is stored separately under `selflearn.playlab.business-journey.v1`. Restored decisions are replayed and validated; invalid data starts a new journey, and blocked storage falls back to memory. Restart requires confirmation and resets only this journey. Shop Basics and Computer Lab storage keys are neither migrated nor overwritten.

## Verification

`node scripts/test-business-journey.cjs` checks all product/funding/location combinations; delayed delivery, credit invoices, wages, stock losses, all seven days, reflection gates, persistence, duplicate-day rejection, and 150 varied campaigns whose books reconcile.

`node scripts/audit-business-journey-browser.cjs` checks desktop/mobile navigation, opening steps, bank terms, delivery timing, employees, bridge financing, seven-day carryover, reload, bilingual reports, final reflections, reset confirmation, blocked storage, overflow and prior-game isolation. Set `JOURNEY_BASE` to the public `/SelfLearn/` URL for live verification. Screenshots use ignored `qa/`.

The existing Computer Lab and Shop Basics audits remain in place. The static build runs the new engine check and copies all four journey files into `dist/`. No runtime dependencies or GitHub Pages settings change.

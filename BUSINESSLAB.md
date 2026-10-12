# Business Lab — My First Shop

The five-mission **Shop Basics** practice launches at `playlab.html#shop-practice`. Its progress and badges are preserved. The expanded connected journey, **My First Business**, launches at `playlab.html#first-shop`; see [journey model and guide](BUSINESS-JOURNEY.md).

This is an original Hindi/English classroom simulation for Classes 6–12. It takes no real orders or payments and uses fictional prices and customer budgets.

## Five missions

1. **Stock your shelf:** cash becomes inventory when goods are purchased.
2. **Set a thoughtful price:** compare unit margin with the number of customers willing to buy.
3. **Read customer demand:** balance available stock and missed sales.
4. **Cover daily costs:** distinguish revenue, gross margin and profit after daily expenses.
5. **Run your first shop:** choose a product, quantity and displayed price; reflect on clear pricing and customer trust.

Each mission and replay starts with a fresh ₹300 budget. Pen, notebook and eraser unit costs are ₹10, ₹25 and ₹5; these are teaching values, not current market prices. The first four missions specify the product; the final mission allows product choice. Each customer wants one item and buys when the price fits their fixed budget and stock remains. Identical plans yield identical outcomes, so learners can compare experiments fairly. Real demand is uncertain.

The game records up to three recent plans per mission for comparison. A mission completes after opening the shop and answering its concept check. Scores reward explanation, not profit: `max(40, 100 − 10 × incorrect concept attempts − 5 × hints)`. A loss-making experiment can still teach the concept and earn a badge. Replaying an unfinished mission does not reset its mistakes or hints; completed missions can be reviewed but cannot farm scores.

## Model accounting

- Revenue = sold quantity × selling price.
- Cost of goods sold = sold quantity × unit purchase cost.
- Profit = revenue − cost of goods sold − daily expense.
- Cash left = starting cash − purchase cost of **all** stock + revenue − daily expense.
- Remaining inventory value = unsold quantity × purchase cost.
- Check: cash left + inventory value = starting capital + profit.

Stock purchase plus daily expense must fit the budget; quantities are whole numbers 1–12 and prices are whole rupees 1–80. No loans or negative starting cash are allowed. Unsold goods remain at purchase cost in this simplified model, with no depreciation, expiry, tax, discounts or returns. The lesson explains that real unsold goods can lose value. The shelf shows planned stock before opening and remaining stock after sales; the ledger and customer outcomes show the consequences.

## Architecture and progress

- `playlab-shop-data.js`: products, customer budgets, bilingual missions and concept checks.
- `playlab-shop-engine.js`: budget validation, demand/sales arithmetic, history, scoring and state.
- `playlab-shop.js`: shop scene, planning form, customer outcomes, ledger, explanations and badges.
- `playlab-shop.css`: responsive shop appearance.

The shop is registered under `engine: 'shop'` in the PlayLab activity registry. The shared shell handles language and routing. Shop state uses `selflearn.playlab.shop.v1`, validates restored data and falls back to memory when storage is unavailable. Reset requires confirmation and clears only shop progress. Computer Lab uses a separate key and retains its placements, scores and badges.

## Checks and deployment

Run `node scripts/test-playlab-shop.cjs` for arithmetic, budgeting, stock/demand limits, reconciliation, losses, inventory, progression, scoring, history and storage. Run `node scripts/audit-playlab-shop-browser.cjs` for desktop/mobile navigation, five missions, comparison, budget rejection, losses, Hindi, reload, reset confirmation, storage fallback and Computer Lab isolation. The browser audit uses the existing bundled Playwright and installed Chrome. `SHOP_BASE` can point to the public `/SelfLearn/` URL for live verification. Screenshots go to ignored `qa/`.

`node scripts/build-static.cjs` runs the shop engine checks alongside the existing regressions and copies all four shop assets into `dist/`. No dependencies or Pages settings are changed. GitHub Pages publishes the repository root from `main`.

# Satbarwa Bazar: start, change, test

This folder is a working website starter. Its products, prices and availability are fictional. It takes no order or payment.

## 1. See it in your browser

1. Extract the ZIP. Keep `index.html`, `styles.css` and `app.js` together in the `satbarwa-bazar` folder.
2. Double-click `index.html` or use **Open File** in your browser. Internet and installation are not needed.
3. Search for `dal`, choose **Grocery**, switch to **हिंदी**, and add items to the practice cart.
4. If the page has no styling or cards, check that all three files are in the same folder. Reload after edits.

**हिंदी:** ZIP निकालें। तीनों files एक ही folder में रखें। `index.html` browser में खोलें। `dal` खोजें, Grocery चुनें, हिंदी पर जाएँ और practice cart जाँचें। बदलाव के बाद page reload करें।

## 2. Know the files

| File | Change here |
| --- | --- |
| `index.html` | Sections, labels and controls |
| `styles.css` | Colours, spacing and phone/desktop layout |
| `app.js` | Sample products, language text, search, filters and cart |
| `changes-template.md` | Copy to `changes.md` and record each daily change |

Make a copy of the whole folder before your first edit. Give the coding assistant one change at a time. Read the proposed edits before saving them.

## 3. Add a product

At the top of `app.js`, each entry in `products` has an `id`, English and Hindi `name`, `category`, English and Hindi `unit`, numeric `price`, `inStock`, `icon` and `color`. The page builds cards, search and the cart from this array. Choose a unique `id`; use sample information until a seller approves real information.

Copy this prompt:

> In `app.js`, add one fictional mustard-oil product to the `products` array. Give it a unique id, English and Hindi names, the `grocery` category, a 1 litre unit in both languages, sample price 150, `inStock: true`, an emoji icon and a suitable colour. Change only that array. Show the exact edit and a short manual test for its card, search and cart.

After the edit, reload. Search for the new item in English and Hindi. Check its category, unit and ₹150 card price. Add one to the cart and check ₹150. Add two and check ₹300. Switch languages and check again. If an item is unavailable, its Add button must be disabled.

**हिंदी prompt:** `app.js` के `products` array में एक काल्पनिक सरसों तेल item जोड़ो। अलग id, English और हिंदी नाम, `grocery` category, दोनों भाषाओं में 1 litre unit, sample price 150, `inStock: true`, emoji और रंग दो। केवल array बदलो। बदला code और card, search, cart की छोटी जाँच दिखाओ।

## 4. Add a category or page content

For a new category, add the same category id to the product records, to both language objects in `copy`, and to the category list in `renderCategories()`. Test **All**, the new category, search combined with that category and **Clear filters**. A new information section, such as a market FAQ, usually needs HTML in `index.html`, styling in `styles.css` and any language strings in `app.js`.

> Add a fictional `stationery` category for sample products. Update only the product data, English/Hindi category labels and category buttons in `app.js`. Preserve search, sorting and cart. Show me how to test All, Stationery, an empty search and Clear filters. Do not claim any real seller stocks these items.

> Add a short bilingual FAQ below the catalog explaining that prices are samples and no order is placed. Edit `index.html`, `styles.css` and the two language objects in `app.js` only. Use a heading and readable phone layout. Show the changed files and keyboard checks.

## 5. Extend one feature

Pick one feature after the new content works. Ask for one bounded change, then retest the complete shopper path.

> Add a price ceiling control to the existing catalog. It must combine with current text search and category selection. Keep sorting, cart and the sample-data notice working. Edit only `index.html`, `styles.css` and `app.js`. Show the changes and checks for phone, keyboard, no-match state and Clear filters. Do not add checkout.

> Add a local favourites toggle to each product card, saved in this browser only. Keep product data, search, categories, sorting and cart behaviour. Make buttons usable by keyboard and label their pressed state. Edit only `index.html`, `styles.css` and `app.js`. Show how to test a favourite after reload and how to remove it.

> Improve the phone layout so the search, categories and cart are easy to use at 350px width. Change only `styles.css`. Explain each CSS change and give a phone and desktop visual checklist. Do not hide existing controls.

## 6. Repeat each day

1. Write one need from feedback, without collecting a person's private details.
2. Save a working copy; write a prompt naming the exact files and behaviour.
3. Inspect the proposed change, preview on phone and desktop, and test search, categories, sorting, cart totals and keyboard access.
4. Keep or undo the change. Record the prompt, result and next idea in `changes.md` using `changes-template.md`.

Use fictional data in this practice project. Real seller names, photos, stock and prices require their approval before publishing. Payments, fulfilment and customer data need a separate production design; they are outside this starter.

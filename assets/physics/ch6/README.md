# Chapter 6 image slots

Drop a file here, then reference it from `data-physics.js` on the matching topic:

```js
images: [{
  src: "assets/physics/ch6/cross-product-bottle-cap.png",
  alt: { en: "Three photos: fingers turning a bottle cap in a flat circle, and the cap rising straight up.",
         hi: "तीन फ़ोटो: उँगलियाँ बोतल का ढक्कन सपाट गोले में घुमाती हैं, और ढक्कन सीधे ऊपर उठता है।" },
  caption: { en: "…", hi: "…" }
}]
```

Rules:
- **Filename**: lowercase, hyphens, describes the content. No spaces.
- **Width**: 1600 px is plenty; the page never renders wider than ~860 px.
- **Format**: PNG for diagrams/text, JPG for pure photos, WebP if you have it.
- **Size**: keep under ~400 KB so the page stays fast on mobile data.
- **alt text is required** — it is what a screen-reader user hears, and what
  shows if the image fails to load. Describe the physics, not the styling.

Expected files (not yet supplied):
- `cross-product-bottle-cap.png` — for topic PHY-6-4

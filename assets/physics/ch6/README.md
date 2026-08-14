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

---

## Generation prompt: `cross-product-bottle-cap.png`

Paste into any image generator (see tool notes below). Aspect **16:9**.

> Photorealistic 3-panel educational infographic, clean white studio background,
> soft even lighting, shot from a low 3/4 angle. A hand unscrewing the blue plastic
> cap of a clear water bottle standing upright on a white table.
> Panel 1 "TURN": fingers gripping the cap, a curved blue arrow showing the fingers
> sweeping counter-clockwise in the flat horizontal plane of the cap.
> Panel 2 "LIFT": the same cap now risen a few millimetres above the bottle neck,
> a straight red arrow pointing vertically upward, perpendicular to that flat plane.
> Panel 3 "RULE": an open right hand, fingers curling counter-clockwise, thumb
> extended straight up beside the bottle, matching the red arrow.
> Thin sans-serif labels: "a" and "b" on the curved blue arrow, "a x b" on the red
> arrow. Textbook illustration style, high detail, no clutter, no watermark.

**Physics check before you accept the image** — reject and regenerate if wrong:
- The curved arrow and the straight arrow must be **perpendicular**: turning is
  flat/horizontal, the cap moves straight up.
- Counter-clockwise turn (seen from above) must pair with the cap moving **up**.
  Clockwise-with-up is backwards and teaches the wrong rule.
- The thumb in panel 3 points the **same** way as the red arrow in panel 2.

Then: save as `cross-product-bottle-cap.png` in this folder, and hand it back —
the `images:` block for PHY-6-4 gets filled in from the snippet at the top.

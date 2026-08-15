# Chapter 6 image slots

Drop a file here, then reference it from `data-physics.js` on the matching topic:

```js
images: [{
  src:  "assets/physics/ch6/cross-product-bottle-cap.jpg",   // fallback, always present
  webp: "assets/physics/ch6/cross-product-bottle-cap.webp",  // optional, preferred when supported
  w: 1600, h: 900,                                           // intrinsic size, stops layout shift
  alt: { en: "Three photos: fingers turning a bottle cap in a flat circle, and the cap rising straight up.",
         hi: "तीन फ़ोटो: उँगलियाँ बोतल का ढक्कन सपाट गोले में घुमाती हैं, और ढक्कन सीधे ऊपर उठता है।" },
  caption: { en: "…", hi: "…" }
}]
```

Rules:
- **Filename**: lowercase, hyphens, describes the content. No spaces.
- **Width**: resize to 1600 px. The page never renders wider than ~860 CSS px,
  so 1600 covers a 2x retina display and anything beyond that is wasted bytes.
- **Format**: ship **both** a WebP and a JPG. `<picture>` hands modern browsers
  the small WebP; iOS 13 and older fall back to the JPG on their own.
- **Size**: keep the fallback under ~400 KB — students are on mobile data.
- **alt text is required** — it is what a screen-reader user hears, and what
  shows if the image fails to load. Describe the physics, not the styling.

Recipe used for the files here (Pillow):

```py
src = Image.open(original).convert("RGB")
im  = src.resize((1600, round(src.height*1600/src.width)), Image.LANCZOS)
im.save(name + ".webp", quality=88, method=6)
im.save(name + ".jpg",  quality=90, optimize=True, subsampling=0, progressive=True)
```

`subsampling=0` matters — these panels carry small coloured text, and the default
4:2:0 chroma subsampling smears it. Check a 2x crop of the smallest text before
shipping.

Files present:
- `cross-product-bottle-cap.webp` (124 KB) + `.jpg` (272 KB), 1600x900 — topic PHY-6-4.

## Where the full-resolution masters live

Masters are **not committed** — they run 1–3 MB each and git would keep every
version forever. They are archived outside the repo, on OneDrive:

```
C:\Users\Dell\OneDrive\SambhritiNGO\asset-masters\selflearn\<subject>\<chapter>\
```

That path mirrors this one, so a master matches its derivatives by name. See
`asset-masters/README.md` for the full convention. Go there first when an image
needs re-cropping, re-exporting at another size, or reuse in print or slides —
re-deriving from the master beats upscaling the 1600 px web copy.

The master for this chapter's image is
`asset-masters/selflearn/physics/ch6/cross-product-bottle-cap.png`
(1.7 MB, 1672x941).

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

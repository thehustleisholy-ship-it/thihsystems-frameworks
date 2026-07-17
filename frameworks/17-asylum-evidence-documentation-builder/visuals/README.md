# Framework 17 visual inventory

## Production instructions

The controlling dimensions, copy, composition, alt text, attribution, contrast, and non-stereotyping rules remain in `publication/VISUAL-ASSET-MANIFEST.md`.

## Editable sources

`sources/*.svg` are the editable typography and composition files. They reference the shared visual master at `master/framework-17-editorial-master.png`. Regenerate exports with:

```powershell
node scripts/generate-framework17-visuals.cjs
```

The original AI-generated, text-free raster master is retained as a compositional reference, not represented as an editable vector illustration.

## Finished exports

`exports/*.png` contains the platform-ready sRGB files. The eight Instagram carousel cards are individual exports. The two interactive-demo screenshots remain under `verification/` because their editable source is the live application route rather than a design file.

`visual-assets.json` is the authoritative machine-readable inventory tying every final export to its dimensions, source, alt text, and attribution record.

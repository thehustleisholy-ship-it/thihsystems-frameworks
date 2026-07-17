# Framework 17 visual publication verification

Verified 2026-07-17.

## Inventory distinction

- **Production instructions:** `publication/VISUAL-ASSET-MANIFEST.md` controls dimensions, copy, composition, alt text, attribution, contrast, and prohibited imagery.
- **Editable sources:** `visuals/sources/*.svg` contains 19 editable layouts. Each references the shared text-free editorial master in `visuals/master/`.
- **Finished exports:** `visuals/exports/*.png` contains 19 platform-ready sRGB layouts: 11 single assets and eight carousel cards. The two exact-viewport demo screenshots are stored in `verification/`.

## Automated asset gate

The visual inventory contains 21 required final exports. Tests verify every path, PNG signature, exact width and height, file-type declaration, size bounds, editable source, alt-text record, attribution record, and Open Graph byte binding. Removing any required export or source causes the release suite to fail.

## Open Graph and social sharing

- Finished Open Graph export: 1200×630 PNG.
- Public route asset: `/framework-17/open-graph.png`.
- Route metadata declares title, description, image URL, 1200×630 dimensions, and alt text.
- Twitter metadata uses `summary_large_image` and the same approved export.
- `social-sharing-preview.png` is an exact 1200×630 browser capture of the public asset route.

## Visual safety review

The system leads with fragmented records becoming organized while preserving an open unknown node and unresolved branch. It contains no border or detention imagery, cages, crowds, distressed children, flags, passports as identity shorthand, handcuffs, surveillance aesthetics, government seals, or sensational red-alert treatment.

## Local route verification

The dedicated Framework 17 demo route displays all three synthetic scenarios, readiness controls, orientation-only outputs, qualified-review questions, privacy limitations, reduced-motion behavior, visible focus, preset output changes, and preset reset behavior. It produces no fetch/XHR traffic and no captured browser errors. The prohibited generic-preview phrases are absent.

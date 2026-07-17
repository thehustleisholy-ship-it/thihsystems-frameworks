# Verification evidence — 2026-07-17

## Automated

- ESLint: pass.
- Next.js 16.2.10 production build: pass; 66 static pages generated. The first sandboxed build failed only because `next/font` could not reach Google Fonts; the authorized network-enabled rerun passed.
- Vitest release gate: intentionally failed before screenshots existed, proving missing assets fail the release. Final result recorded after rerun.

## Browser

Route: `http://localhost:3000/frameworks/asylum-evidence-documentation-builder/demo`

- Desktop viewport: 1440×1024; meaningful content present; no Next.js error overlay; interactive controls exposed in accessibility snapshot; no horizontal overflow.
- Mobile viewport: 390×844; meaningful content present; no horizontal overflow.
- Synthetic preset: “Counsel review packet” updated the deterministic output to 89%.
- Console: React development informational messages only; no captured page errors.
- Home route: meaningful content present; no Next.js error overlay.
- Checkbox: covered by rendered accessible-label inspection and component/engine test suite; browser CLI locator retries did not resolve the checkbox after session recreation, so no claim of a separate automated browser click is made.

## Screenshots

- `framework-17-desktop.png` — full-page desktop capture.
- `framework-17-mobile-390.png` — full-page 390px capture.

The images contain only synthetic educational interface content and no personal data.

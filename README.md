# THIHsystems Framework Fridays

**A public operating-layer library for hidden infrastructure failures.**

This repository contains one active portfolio of exactly 30 frameworks across
health, housing, justice, workforce, water, food, energy, mobility, ecological
risk, and future governance. The frameworks map the research, economics,
procurement, workflows, pilot design, policy, risk, and evidence gaps behind
systems that are often noticed only after they fail.

## Canonical catalog

`src/lib/framework-master-matrix.ts` is the sole authority for every active
framework number, title, slug, public route, preview route, maturity stage,
evidence status, and related-framework reference.

Other modules may contain richer editorial or artifact-planning copy, but they
must derive or validate identity against the canonical registry. Generated JSON,
CSV, and Markdown files in `public/data/` are exports, not independent sources.

The current catalog includes:

- 30 active catalog entries and structured framework records
- 2 meaningful, deterministic **Interactive Prototypes**:
  - Framework 01, Women's Health Longitudinal Dashboard
  - Framework 10, Managed Aquifer Recharge & Underground Water Banking
- 28 **Concept Previews** with no claim of completed interaction
- 1 expanded research/procurement package for Framework 02
- 0 documented expert-reviewed, pilot-ready, or field-validated frameworks

Synthetic and modeled outputs are illustrative and assumptions-based. They are
not measured outcomes and do not replace qualified medical, legal, financial,
engineering, policy, or other professional review.

## What the labels mean

- **Catalog entry:** an active identity in the canonical 30-framework registry.
- **Structured Framework:** the operating problem, stakeholders, workflow,
  implementation, procurement, ROI logic, pilot path, policy path, risk, and
  disclaimer have been structured.
- **Research package:** research notes or source records exist; this does not
  automatically mean the sources were reviewed.
- **Source-Reviewed:** attached, reviewable citations have an accountable
  reviewer, review date, limitations, and public-use approval.
- **Interactive Prototype:** meaningful working interaction produces visible,
  illustrative outputs.
- **Expert-Reviewed:** a qualified reviewer and review date are recorded.
- **Pilot-Ready:** safety review, measures, ownership, exit criteria, and pilot
  guide are recorded.
- **Field-Validated:** actual field evidence and measured results are recorded.

See [the evidence and maturity standard](docs/EVIDENCE_AND_MATURITY_STANDARD.md).

## How the frameworks connect

The portfolio treats each framework as an operating layer: inputs become a
workflow; the workflow serves affected people and institutions; implementation
requires procurement, governance, evidence, and measurable safeguards.
Related-framework links are stored as canonical slugs and are validated before
publication.

## Legacy archive material

`frameworks/02-service-trade-intake-stewardship/` and
`frameworks/03-real-estate-client-clarity-framework/` predate the active
catalog. They are preserved as legacy archive material, not active Frameworks
02 and 03. The active identities are Job-Loss & Income-Shock Stabilizer and
Returning Citizen Reentry Roadmap.

The original interactive artifact matrix also describes an earlier portfolio.
Its historically useful records remain explicitly archived in code. See
[the reconciliation record](docs/FRAMEWORK_IDENTITY_RECONCILIATION.md).

## Repository structure

- `src/lib/framework-master-matrix.ts` — canonical active registry
- `src/lib/framework-content.ts` — derived identity plus editorial copy
- `src/lib/evidence-record.ts` — reusable claim/evidence schema
- `src/lib/interactive-artifact-matrix.ts` — canonical active plans plus
  explicitly archived historical records
- `frameworks/` — detailed framework and legacy archive packages
- `public/data/` — generated registry exports
- `docs/` — standards, source queue, and reconciliation decisions

## Local development and verification

```powershell
npm install
npm run dev
```

```powershell
npm test
npm run lint
npm run build
npm run export:matrix
npm run check:matrix
```

No environment variables are required. CI runs tests, lint, build, portfolio
integrity, and export-freshness checks. CI does not deploy.

## Public endpoints

- Website: https://frameworks.thihsystems.com
- Vercel preview: https://thihsystems-frameworks.vercel.app
- Substack: https://substack.com/@michaelmartinthih

## Publishing principle

A framework is not a shortcut around discernment. Status labels describe
repository evidence, not ambition. Missing evidence remains visible, and no
simulation, public page, planned pilot, or source queue is represented as a
validated outcome.
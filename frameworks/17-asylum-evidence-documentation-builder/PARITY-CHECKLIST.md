# Framework 01 parity inventory and Framework 17 gate

Inventory performed 2026-07-17 before parity expansion. Framework 01 contains 16 repository assets and 6 app assets.

| Framework 01 asset | Purpose | Framework 17 equivalent | Gate |
|---|---|---|---|
| `README.md`, `framework.md` | thesis, burden, model, boundaries, invitation | `README.md`, `FRAMEWORK.md` | Required |
| `roadmap.md` | ready/next/later/not-yet | `roadmap.md` | Required |
| `docs/privacy-architecture.md` | minimization and demo rules | `docs/PRIVACY-ARCHITECTURE.md` | Required |
| `docs/mvp-test-plan.md` | scenarios and pass criteria | `docs/TEST-PLAN.md` | Required; no field pilot implied |
| `docs/open-questions.md` | unresolved issues | `research/CLAIMS-LEDGER.md` | Required |
| six JSON schemas | machine-readable data contracts | six schemas for chronology, evidence, translation, conflict, legal question, export gate | Required |
| synthetic six-cycle JSON | deterministic synthetic fixture | `demo-data/synthetic-readiness-scenarios.json` | Required |
| sample + generated summaries | output examples | `outputs/sample-counsel-conversation-summary.md`, generated equivalent | Required |
| Python summary generator | reproducible output | TypeScript engine + export script | Equivalent; Python specifically inapplicable |
| dedicated detail page | framework-specific website explanation | dynamic detail plus dedicated interactive route | Applicable; dedicated article exists in repository publication file |
| demo page, engine, component | deterministic public illustration | Framework 17 demo page, engine, component | Required |
| engine + component tests | logic and interaction coverage | both test types | Required |
| specs/plans under `docs/superpowers` | historic implementation planning | `PARITY-CHECKLIST.md`, `BUILD-RECORD.md`, release manifest | Equivalent; `.superpowers/` intentionally untouched |

## Additive Framework 17 requirements

- authoritative source register and claims ledger;
- native assets for 13 named social placements;
- production-ready manifest for 13 named visuals;
- machine-readable release manifest and failing completeness test;
- verified 390px and desktop screenshots;
- exact publication sequence.

Nothing is intentionally omitted except Python implementation language and a field pilot; the deterministic TypeScript engine replaces the script, and no pilot is required or proposed.

# Logical data model and deterministic rules

All examples are synthetic and educational.

| Entity | Minimum fields | Safety rule |
|---|---|---|
| Chronology event | synthetic ID, user-entered description, date precision, source links | Unknown dates remain unknown; conflicts are additive flags |
| Evidence item | category, source/custodian, obtained date, original language, unchanged-original location | No relevance or credibility score |
| Translation task | evidence ID, language, status, human reviewer/certification status | Illustration does not translate or certify |
| Conflict | linked item IDs, conflict type, person-authored note, review status | Never auto-resolved or hidden |
| Missing-evidence explanation | category, availability status, person-authored explanation | Never generated from a factual gap |
| Legal-review question | question, linked items, status | No automated legal answer |
| Export gate | consent, recipient, minimization review, security review | No government submission connector |

`completenessPercent = round((chronology + identity categories + supporting categories + provenance + missing-evidence explanations) / 28 × 100)`.

The number is an interface orientation signal with no legal meaning. It cannot compare people, determine filing readiness, assess credibility, or predict an outcome. Flags depend only on visible thresholds in the open-source engine.

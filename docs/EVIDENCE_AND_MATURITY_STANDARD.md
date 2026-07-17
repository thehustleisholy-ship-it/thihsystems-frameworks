# Evidence and Maturity Standard

The canonical framework registry is
`src/lib/framework-master-matrix.ts`. A public page, source queue, planned
pilot, or deterministic simulation does not prove an outcome.

## Maturity stages

1. **Concept** — a defined problem or design hypothesis.
2. **Structured Framework** — the canonical registry contains the operating
   problem, stakeholders, workflow, implementation, procurement, ROI, pilot,
   policy, risk, and disclaimer fields.
3. **Source-Reviewed** — attached, reviewable claim records identify the source,
   reviewer, review date, limitations, and public-use approval.
4. **Interactive Prototype** — meaningful working interaction transforms user
   controls into visible outputs. Synthetic outputs remain illustrative.
5. **Expert-Reviewed** — a qualified reviewer and review date are recorded.
6. **Pilot-Ready** — a pilot guide, safety review, measures, accountable owner,
   and exit criteria are recorded.
7. **Field-Validated** — actual field evidence and measured results are recorded.

Stages are evidence labels, not marketing milestones. A framework cannot be
promoted merely because a higher-stage activity is planned.

## Claim classes

- **A:** Verified fact
- **B:** Research interpretation
- **C:** Founder observation
- **D:** Design hypothesis
- **E:** Modeled result
- **F:** Measured result

The reusable schema in `src/lib/evidence-record.ts` records claim identity,
source metadata, dates, population, geography, measurement, value, limitations,
review, and public-use approval. Unknown data stays `null`.

Framework pages will consume approved records for citations. Source registers
will store the review trail. Social content must link back to the same claim ID.
Periodic review uses `next_review_date`; expired records must be reviewed
before continued public use.

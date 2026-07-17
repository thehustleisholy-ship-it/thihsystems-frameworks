# Publication Data Pipeline

Public pages consume the typed, build-time data in
`src/lib/framework-publication.ts`. The canonical master matrix supplies
identity, routes, maturity, evidence status, safety language, and relationships.
Framework-specific overrides may reference existing repository documents.

Markdown is not parsed during client requests. A maintainer reviews a repository
document, adds only supported structured fields and repository paths, then the
test suite verifies identity, evidence labels, missing-data behavior, and route
integrity.

Missing fields remain `null`, empty, or `not-documented`. A source register
is not converted into Source-Reviewed evidence until claim-level review records
meet `docs/EVIDENCE_AND_MATURITY_STANDARD.md`.

# MVP Test Plan

## Goal

Test whether structured, patient-owned longitudinal data can produce a visit-ready summary that is understandable, useful, and appropriately cautious.

## Test group

Use synthetic data first. Later testing should include consenting reviewers and avoid collecting unnecessary personal health information.

## Scenarios

1. Patient reviews the summary before a visit.
2. Patient identifies whether the summary reflects their intended concern.
3. Clinician or clinician-adjacent reviewer reads the summary in under five minutes.
4. Reviewer marks unclear, unsafe, excessive, or missing language.
5. Builder revises schemas and export format.

## Pass criteria

- Summary avoids diagnosis and treatment claims.
- Patient can see the source pattern behind each insight.
- Export can be read quickly.
- Data ownership and consent boundary are visible.
- The framework produces better questions, not false certainty.

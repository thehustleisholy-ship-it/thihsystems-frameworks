# Privacy Architecture

This framework should be treated as sensitive by default. Even synthetic demos should model privacy-preserving habits.

## Principles

- Patient-owned source data
- Explicit consent before export
- Summary-first sharing, not raw-data dumping
- Minimum necessary fields
- Local-first prototypes where possible
- Clear distinction between observation and diagnosis
- No secondary data use without affirmative permission

## Suggested boundaries

Source records can include detailed daily check-ins. Visit exports should include only the relevant pattern, timeline, and questions needed for the appointment.

A production implementation should separate:

- identity profile
- longitudinal source data
- generated summaries
- sharing events
- audit history

## Public demo rule

Public demos use synthetic data only. Never seed public repositories with real patient stories, identifying details, or copied clinical records.

# Women's Health Longitudinal Dashboard Framework

## Public thesis

The data model is medicine. The export format is the appointment.

This framework starts from a pattern many people recognize: symptoms tracked at home, dismissed or compressed in the clinic, and lost because the data never becomes clinically usable.

The framework does not diagnose. It organizes patient-owned information into a structure that can support better questions, clearer timelines, and more focused clinical conversations.

## Core burden

A person may know that something has changed in their body, but the evidence is scattered across memory, screenshots, notes, calendar entries, labs, medications, and incomplete symptom logs. The appointment becomes a high-stakes compression event.

The practical question is: how can the patient bring enough structured context into the visit without becoming their own data analyst?

## Data model

The first version models seven record types:

1. Patient profile
2. Cycle record
3. Daily symptom check-in
4. Life event
5. Clinical record
6. Medication
7. Visit summary

The model favors simple, inspectable fields over opaque scoring. Builders can extend it for specific conditions, populations, or care settings.

## Pattern engine

The pattern engine should begin with rule-based observations:

- symptom clusters by cycle phase
- repeated intensity spikes
- medication and side-effect timing
- life events near symptom changes
- gaps in data collection
- questions worth raising with a clinician

The output should use careful language: "observed," "clustered," "changed," "worth discussing," and "requires clinical review." Avoid diagnostic claims.

## Export format

The export is the appointment-facing artifact. It should be short enough to use in a real visit and structured enough to support conversation.

Recommended sections:

- visit focus
- top observed patterns
- timeline of changes
- current medications and relevant changes
- recent clinical records or labs
- patient questions
- source-data note and consent boundary

## Privacy posture

A production system should treat this as sensitive health-adjacent data even before formal medical integration exists. The patient owns the source data and decides what to share.

Default posture:

- synthetic data in public demos
- no hidden data sale
- explicit consent before export
- minimum necessary fields
- clear separation between source records and appointment summary
- no diagnostic positioning

## MVP path

1. Define schemas.
2. Create synthetic six-cycle data.
3. Generate a markdown visit summary locally.
4. Add a static web preview.
5. Test whether a patient or clinician can understand the summary in under five minutes.
6. Improve schema and export language based on feedback.

## Builder invitation

Fork the framework, but do not worship the template. Change the assumptions, fields, language, and export format to serve the person and community in front of you.

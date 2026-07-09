# Women’s Health Interactive Framework Preview

## Objective

Turn Framework 01’s static synthetic dashboard into a functional, client-side
framework sandbox that makes the relationship between inputs, evidence depth,
and derived insights immediately understandable.

The preview must demonstrate an enterprise data architecture, not imitate a
medical device. It uses synthetic values, accepts no free text, stores nothing,
and produces non-diagnostic framework outputs only.

## Experience

The demo opens with a two-column command workspace directly below its header.
On desktop, controls remain visible beside their consequences. On mobile,
controls stack above outputs so the interaction reads in causal order.

The left column contains:

- Three presets that combine symptom pattern and history depth
- Tracked cycles
- Pain intensity
- Fatigue level
- Sleep disruption
- The active preset name and a contextual reset action

The right column contains:

- Evidence coverage status
- A cycle-phase symptom heatmap
- Dominant symptom cluster
- Strongest currently supportable insight

The existing timeline and visit-summary regions sit below the workspace and
consume the same derived output as the heatmap and insights.

## Presets and Controls

The presets provide an immediate starting point and remain fully editable:

1. Pain-dominant with a longitudinal history
2. Fatigue and sleep disruption with a developing history
3. Mixed symptoms with a sparse history

Each preset seeds all four controls. Editing a control does not change the
selected preset identifier; it marks the state as modified. Reset restores the
exact seed values for the active preset.

Control values are bounded:

- Tracked cycles: 1–24
- Pain intensity: 1–10
- Fatigue level: 1–10
- Sleep disruption: 1–10

All controls use native range inputs with visible values, programmatic labels,
keyboard support, and focus states.

## Evidence Confidence Ladder

Tracked cycles determine which language the engine is allowed to emit:

| Tracked cycles | Status | Signal language | Insight behavior |
| --- | --- | --- | --- |
| Fewer than 6 | Sparse evidence | Emerging signal | Dimmed and locked |
| 6–11 | Developing evidence | Moderate signal | Conditional insights |
| 12 or more | Sufficient evidence | Longitudinal base / recurring pattern | Longitudinal trend language |

Sparse evidence displays:

> At least 6 tracked cycles are needed before recurring-pattern insights unlock.

Developing evidence appends:

> Patterns establishing. Data variance stabilizing.

The engine must never emit “recurring pattern” or equivalent high-confidence
language when fewer than 12 cycles are selected.

## Deterministic Engine

`framework-preview-engine.ts` is a pure TypeScript module with no React, DOM,
storage, network, or framework dependencies.

It defines:

- `ControlsState`
- `PresetId` and `PresetConfig`
- `EvidenceStatus`
- `HeatmapRow`
- `TimelineItem`
- `DerivedFrameworkData`

`compileFrameworkData(controls)` performs one deterministic pass that:

1. Clamps input values to supported bounds.
2. Evaluates evidence confidence from tracked cycles.
3. Maps pain, fatigue, and sleep disruption into stable phase-weighted heatmap
   values.
4. Calculates phase totals and identifies the dominant cluster.
5. Selects only the insight language allowed by the evidence tier.
6. Compiles timeline inflection points from the same calculated values.
7. Compiles concise visit-summary language from the same calculated values.

The calculations must be transparent and intentionally illustrative. They
demonstrate how an operating layer transforms structured longitudinal inputs;
they do not estimate disease, diagnosis, treatment, risk, or prognosis.

## Component Architecture

The route directory contains:

```text
src/app/frameworks/womens-health-longitudinal-dashboard/demo/
├── page.tsx
├── framework-preview-engine.ts
└── InteractiveFrameworkPreview.tsx
```

`page.tsx` remains a Server Component. It owns metadata, navigation, the
synthetic-data notice, and route-level composition.

`InteractiveFrameworkPreview.tsx` is the only Client Component. It owns the
active preset identifier and the four-control state. It calls the engine during
render and passes derived fragments to focused internal presentation
components. The engine is inexpensive and synchronous; memoization may be used
for clarity but is not required for correctness.

The current Framework 01 heatmap, insights, and timeline arrays in
`src/lib/framework-content.ts` are retired from this route after all visible
outputs use the engine.

## Visual and Interaction Rules

The preview uses the approved THIHsystems palette only:

- Obsidian Night `#050607`: canvas
- Frosted Slate `#1A202B`: surfaces and structural boundaries
- Quantum Mint `#42F5B3`: active controls and sufficient/developing evidence
- Electric Amber `#FFB84D`: sparse evidence and cautions

Text uses the existing derived opacity tokens. Legacy gold and silver classes,
hex values, and gradients are not used.

Transitions are limited to short color, opacity, and numeric-state changes.
`prefers-reduced-motion: reduce` removes transition duration. No animation may
delay the calculation or obscure the current value.

## Privacy and Medical-Integrity Guardrails

The interface:

- Runs entirely in browser memory
- Makes no fetch requests
- Uses no local or session storage
- Adds no analytics or third-party telemetry
- Provides no text inputs
- Cannot accept names, dates, notes, or other personal health information
- Labels all data as synthetic
- Frames all language as a framework demonstration, never clinical feedback

The workspace ends with a high-contrast notice:

> Privacy & architecture notice: This synthetic simulation runs entirely in
> your browser. Inputs are not stored, tracked, or transmitted. It demonstrates
> a patient-owned longitudinal data architecture and is not medical advice or a
> diagnostic tool.

## Verification

### Engine tests

- 5 cycles resolves to sparse evidence and the exact sparse lock message.
- 6 cycles resolves to developing evidence and unlocks conditional insights.
- 12 cycles resolves to sufficient evidence and permits recurring-pattern
  language.
- Sparse and developing states never emit longitudinal confidence language.
- Each symptom control changes its corresponding heatmap row and dependent
  summary language.
- Changing history depth changes confidence language without unpredictably
  rewriting symptom values.
- Repeated calls with equal controls return deeply equal outputs.
- Out-of-range values are clamped.
- Each reset target equals its preset seed exactly.

### Interface checks

- Presets, sliders, value readouts, status, heatmap, dominant cluster, insights,
  timeline, and visit summary update from one state object.
- Native arrow keys update focused sliders.
- Focus indicators and labels are visible.
- Controls stack above outputs at mobile width.
- The sparse insight region is visibly restricted but remains understandable.
- Reduced-motion preferences remove transition duration.
- The privacy and non-diagnostic notice is visible beneath the workspace.

### Project gates

- Engine tests pass.
- `npm run lint` passes.
- `npm run build` passes.
- Desktop and mobile browser checks cover all presets, one manual adjustment,
  reset, threshold boundaries, and console errors.

## Out of Scope

- Real patient data
- Persistence, authentication, APIs, uploads, or exports
- Medical recommendations or risk scoring
- Changes to the approved 30-framework master matrix
- Interactive artifacts for other frameworks
- Production deployment or domain changes without separate authorization

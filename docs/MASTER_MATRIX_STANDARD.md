# Framework Master Matrix Standard

## What is the Master Matrix?

The Master Matrix is the institutional source of truth for all 30 Framework Fridays. It is a TypeScript data structure (`frameworkMasterMatrix`) that ensures every framework has the exact same fields, enabling:

- **Institutional readability**: Consistent field naming across all frameworks
- **Operational transparency**: Every framework declares its research, statistics, economics, and readiness
- **Public legibility**: Clear status indicators for maturity, evidence confidence, and risk levels
- **Builder enablement**: Standardized implementation roadmaps and procurement checklists
- **Measurability**: Structured readiness fields for procurement, pilot, and policy phases

## Operating Rule: No Framework Launches as Inspiration Alone

Every framework must make visible:

1. **Research** — what investigation has been done
2. **Numbers** — what statistics or data exist (with transparency about unverified claims)
3. **Economics** — what the financial case or cost/benefit looks like
4. **Implementation path** — how to build or deploy this
5. **Procurement path** — how to buy, fund, or contract this
6. **ROI logic** — how to measure value or return
7. **Pilot path** — how to test this at scale
8. **Policy path** — what policy or governance is needed

Without all eight, a framework remains conceptual only.

## Field Structure

### Identification Fields
- `framework_number`: String (01–30)
- `framework_title`: Full framework name
- `slug`: URL-safe identifier
- `category`: Problem domain or vertical

### Infrastructure Positioning
- `enterprise_layer`: What institution-level problem this solves
- `hidden_foundation`: The underlying system failure or opportunity

### Research and Evidence
- `documented_research`: What has been researched and where
- `statistics`: Key data points (with source transparency)
- `economic_impact`: Estimated costs, savings, or returns
- `evidence_confidence`: Level 1 (conceptual) to Level 5 (repeated implementation evidence)

### Implementation Pathways
- `implementation_roadmap`: Sequence to build or deploy
- `procurement_checklist`: What must be in place to acquire this
- `roi_calculator_logic`: How to measure success
- `pilot_guide`: How to run a pilot
- `policy_brief`: What governance or policy is needed

### Stakeholder Mapping
- `primary_buyer`: Who purchases or funds this
- `secondary_stakeholders`: Who else is impacted or involved
- `affected_public`: Who benefits or is affected

### Operations
- `core_data_inputs`: What data is needed to operate
- `key_workflow`: How this system operates day-to-day
- `demo_type`: What kind of demo exists (interactive, calculator, tracker, etc.)

### Maturity and Readiness

#### Maturity Status
Describes the current state of the framework itself:
- "Concept Structured" — idea is coherent but not yet validated
- "Demo Preview" — working demo exists but not production-ready
- "Repo Ready" — code and documentation are forkable and production-capable

#### Readiness Levels (Procurement, Pilot, Policy)
Describes readiness for real-world deployment:
- `Not Ready` — not ready to begin this phase
- `Drafted` — draft outline or plan exists
- `Needs Review` — complete but requires expert review
- `Ready for Internal Review` — reviewed and ready for institutional feedback
- `Ready for Public Preview` — ready to pilot or test publicly

### Risk and Transparency

- `risk_level`: Very Low, Low, Moderate, High, Critical
- `primary_disclaimer`: What this framework is not and should not be used for
- `source_status`: Tracks whether claims have been sourced

### Source Tracking

**source_status** — Allowed values:
- `Needs verification` — Claim exists but has no source yet
- `Source identified` — Source found but not yet verified
- `Source verified` — Source confirmed accurate
- `Official source preferred` — Sourced but needs official/government data
- `Not yet sourced` — No research done yet

**public_claim_status** — Allowed values:
- `Safe to publish` — Claim is well-sourced and ready for public
- `Needs citation` — Claim is true but needs a citation
- `Needs softening` — Claim is too strong; needs language adjustment
- `Do not publish yet` — Claim is unsourced or speculative; should not be public

### Public Endpoints

- `github_repo_url`: GitHub repository link
- `demo_url`: Demo access point
- `framework_url`: Framework detail page URL
- `substack_url` (optional): Substack article link
- `linkedin_launch_url` (optional): LinkedIn launch announcement

## Evidence Confidence Levels

| Level | Description | Example |
|-------|-------------|---------|
| **Level 1** | Conceptual, based on observed system failure | "Mothers are dismissed in ERs; we've seen this pattern" |
| **Level 2** | Supported by credible secondary research | "Academic studies show X; reports document Y" |
| **Level 3** | Supported by official data or institutional reports | "CDC data; government audits; agency reports" |
| **Level 4** | Supported by pilot evidence or field validation | "We tested this with 50 users and saw X outcome" |
| **Level 5** | Supported by repeated implementation evidence | "Deployed across 10 organizations; consistent results" |

Most Framework Fridays should begin at Level 1 or Level 2 unless the repository already contains stronger evidence.

## Why Standardization Matters

### For Institutions
A consistent matrix enables institutions to:
- Evaluate frameworks using the same rubric
- Identify which ones are procurement-ready vs. pilot-ready vs. policy-ready
- Understand the evidence behind claims
- Make decisions based on readiness levels, not inspiration

### For Builders
A consistent matrix enables builders to:
- Fork and customize using the same data structure
- Know what procurement checklist to complete
- Understand pilot requirements
- See where evidence gaps exist

### For the Public
A consistent matrix enables the public to:
- Understand what claims are sourced vs. unsourced
- See maturity levels clearly
- Know who the framework is designed for
- Access implementation guides without hype

### For Policy Makers
A consistent matrix enables policy makers to:
- Identify policy-ready frameworks
- Understand governance requirements
- Track stakeholder impacts
- Align with existing policy frameworks

## Transparency About Unverified Claims

If a field value is "Needs source verification" or "Needs citation," that is not a failing grade—it is honest reporting.

The Master Matrix does not fabricate statistics. When evidence is missing:
- We say so explicitly
- We note what kind of source is needed
- We place the framework in the appropriate readiness state
- We invite contributors to source the claim

This is what differentiates Framework Fridays from aspirational content.

## Using the Master Matrix

### As a Framework Author
Use the matrix to ensure your framework meets the "eight must-haves" before launch:

```typescript
const myFramework: FrameworkMatrixEntry = {
  framework_number: "02",
  framework_title: "...",
  documented_research: "...", // Are you claiming research? Where is it?
  statistics: "...", // Are numbers real or placeholders?
  economic_impact: "...", // Can you calculate this?
  implementation_roadmap: "...", // Do you have a path?
  procurement_checklist: "...", // What does buying this look like?
  roi_calculator_logic: "...", // How do you measure success?
  pilot_guide: "...", // Can someone run a real pilot?
  policy_brief: "...", // What governance is needed?
  source_status: SourceStatus.NeedsVerification, // Be honest about what you don't know yet
  public_claim_status: PublicClaimStatus.NeedsCitation, // Mark what needs sourcing
};
```

### As a Stakeholder Evaluating a Framework
Use the readiness levels to understand what stage this framework is in:

- Is it **Procurement Ready**? Can we contract to build or deploy this?
- Is it **Pilot Ready**? Can we test this in a real environment?
- Is it **Policy Ready**? Is there a governance or policy path we need to follow?

### As a Policy Maker
Use the policy brief and stakeholder mapping to understand:

- What policy or governance is required?
- Who is affected?
- What trade-offs or conflicts might exist?

## Updating the Matrix

When you update a framework in the matrix:

1. Check that all eight "must-haves" are addressed
2. Update `source_status` honestly—if you sourced something new, change it from "Needs verification" to "Source identified" or "Source verified"
3. Update `public_claim_status`—if a claim is now cited, change it from "Needs citation" to "Safe to publish"
4. Update `evidence_confidence` if pilots or field results are new
5. Update readiness levels (`procurement_readiness`, `pilot_readiness`, `policy_readiness`) as frameworks progress
6. Document why you changed the readiness level in commit messages

## The Philosophy

Framework Fridays is not a collection of inspiration.

It is a public portfolio of enterprise infrastructure—designed to be:
- **Readable** by institutions
- **Legible** to operators
- **Forkable** by builders
- **Testable** by pilots
- **Supportable** by policy makers
- **Measurable** by funders

The Master Matrix makes that legibility possible.

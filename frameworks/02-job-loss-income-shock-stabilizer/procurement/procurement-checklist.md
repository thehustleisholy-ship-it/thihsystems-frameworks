# Framework 02: Procurement Checklist

**Framework:** Job-Loss & Income-Shock Stabilizer  
**Status:** Ready for Internal Review (subject to pilot validation)  
**Procurement Model:** Workforce development services contract or government program implementation

---

## Pre-Procurement Requirements

### Governance & Authority
- [ ] Identify lead agency or contractor sponsor (state DOL, local workforce board, nonprofit)
- [ ] Clarify budget authority (UI administration, WIOA funds, state discretionary)
- [ ] Establish governance structure (steering committee, program director)
- [ ] Define legal authority for benefits cliff guidance (coordinate with UI & benefits agencies)

### Stakeholder Alignment
- [ ] Brief state DOL on program design
- [ ] Coordinate with state UI administrator
- [ ] Engage local workforce development boards
- [ ] Consult employers and business associations
- [ ] Brief nonprofits working in job-loss support (United Way, nonprofits)

### Funding Structure (Choose Primary Model)

**Option A: State DOL Workforce Program**
- [ ] Secure DOL budget allocation (internal reallocation or new appropriation)
- [ ] Align with WIOA funding if applicable
- [ ] Estimated cost: $1,200/worker; ~$100,000-500,000/year depending on scale

**Option B: Philanthropic/Pilot Funding**
- [ ] Identify foundation interest (workforce development, economic security)
- [ ] Develop 2-3 year pilot proposal with rigorous evaluation plan
- [ ] Budget: $100K pilot → $300K scale-up

**Option C: Public-Private Partnership**
- [ ] Recruit employers to co-fund transition support
- [ ] Model: Employer/government cost-share for displaced workers
- [ ] Estimated employer contribution: $500-800 per worker

**Option D: Insurance/Workforce Development Board Model**
- [ ] Layer with existing unemployment insurance system
- [ ] Fund via employer UI taxes (small increase)
- [ ] Coordinate with workforce board's existing services

---

## Technology & Platform Requirements

### Digital Assessment Tool
- [ ] Define assessment scope:
  - [ ] Financial situation mapping
  - [ ] Skills and employment history
  - [ ] Benefits eligibility screening
  - [ ] Barriers to employment
- [ ] Existing systems to integrate with:
  - [ ] State UI system (authentication, data linkage)
  - [ ] Workforce development databases
  - [ ] State benefits systems (optional: read-only access for simulation)
- [ ] Development options:
  - [ ] Build custom (8-12 weeks, $50-100K)
  - [ ] Adapt existing workforce platform ($20-30K)
  - [ ] License SaaS solution ($10-15/user/month)
- [ ] Procurement note: Must allow state data linkage; API requirements

### Benefits Calculator Module
- [ ] Develop for each state (benefits vary significantly):
  - [ ] TANF/welfare calculations
  - [ ] SNAP benefits and work incentives
  - [ ] Childcare assistance cliffs
  - [ ] Housing assistance phase-outs
  - [ ] Healthcare subsidy implications
- [ ] Maintenance: Budget $500-1,000/state/year for policy updates
- [ ] Vendor considerations:
  - [ ] Must track ongoing policy changes
  - [ ] Accuracy critical for participant trust

### Participant Tracking System
- [ ] Outcomes tracking (employment, earnings, benefits receipt)
- [ ] Attendance and engagement tracking
- [ ] Staff activity logging
- [ ] Integration with UI wage record data (if available)
- [ ] FERPA/privacy compliant data handling
- [ ] 3-5 year retention for program evaluation

---

## Staffing Model

### Role 1: Program Manager (1 FTE for every 75-100 workers)
- [ ] Qualifications: Master's degree or 5+ years workforce program experience
- [ ] Responsibilities: Program operations, data quality, stakeholder coordination
- [ ] Salary: $70,000-85,000 + benefits (~$95K blended)
- [ ] Procurement: Hire directly or contract through workforce board

### Role 2: Career Advisors (1 per 15-20 workers)
- [ ] Qualifications: Bachelor's degree or 3+ years career counseling
- [ ] Responsibilities: 1:1 counseling, job search support, benefits guidance
- [ ] Salary: $45,000-60,000 + benefits (~$65K blended)
- [ ] Procurement: Hire directly, contract with nonprofit, or workforce board staff

### Role 3: Financial Coach/Benefits Specialist (1 per 30-40 workers)
- [ ] Qualifications: Experience with financial counseling or benefits administration
- [ ] Responsibilities: Financial triage, benefits navigation, emergency assistance
- [ ] Salary: $40,000-55,000 + benefits (~$60K blended)
- [ ] Procurement: Partner with community action agencies or nonprofits

### Role 4: Data/Evaluation Coordinator (1 per 200+ workers)
- [ ] Qualifications: Experience with program evaluation, data analysis
- [ ] Responsibilities: Outcome tracking, quality assurance, evaluation support
- [ ] Salary: $50,000-65,000 + benefits (~$75K blended)
- [ ] Procurement: Hire directly or contract with university evaluator

---

## Partners & Vendors to Procure

### Core Service Delivery Partners

**1. Lead Implementation Organization**
- [ ] Type: State workforce board, nonprofit, or contractor
- [ ] Scope: Overall program delivery, staff management, participant intake
- [ ] Selection criteria:
  - [ ] Experience with job-loss populations (dislocated worker programs)
  - [ ] Proven outcomes tracking
  - [ ] Financial stability and capacity
- [ ] Estimated cost: $500-800/worker/year (pass-through + overhead)

**2. Benefits Expertise Partner**
- [ ] Type: Nonprofit with benefits counseling expertise, or university
- [ ] Scope: Customize benefits calculator per state, provide staff training, QA
- [ ] Selection criteria:
  - [ ] Deep knowledge of TANF, SNAP, housing assistance, childcare subsidy policies
  - [ ] Track record of benefits navigation programs
  - [ ] Ability to adapt to state policy changes
- [ ] Estimated cost: $30,000-50,000/year (setup) + $5-10K per state/year (maintenance)

**3. Employer Engagement Partner (if applicable)**
- [ ] Type: Chamber of commerce, SHRM chapter, or business service organization
- [ ] Scope: Recruit employers, facilitate rapid response to major layoffs
- [ ] Selection criteria:
  - [ ] Local business relationships
  - [ ] Experience with employer transition support
- [ ] Estimated cost: $20,000-40,000/year

**4. Emergency Assistance Coordination Partner**
- [ ] Type: United Way 211, community action agency, or nonprofit
- [ ] Scope: Facilitate access to emergency loans, rental assistance, utility support
- [ ] Selection criteria:
  - [ ] Comprehensive knowledge of local emergency resources
  - [ ] Quick turnaround on assistance applications
- [ ] Estimated cost: Built into program management (no additional cost, typically)

### Technology & Data Vendors

**5. Assessment Platform Vendor**
- [ ] Options: (Examples; customize to your region)
  - [ ] Galileo platform (workforce assessment)
  - [ ] CareerOneStop tools (DOL-provided, free)
  - [ ] Custom development via RFP
- [ ] Procurement: License agreement or service contract
- [ ] Cost: $10-30/user/month or $50-100K development cost

**6. Benefits Calculator Vendor**
- [ ] Options:
  - [ ] PolicyEngine (benefits modeling software)
  - [ ] Custom development via state consulting RFP
  - [ ] Academic partnership (university doing research)
- [ ] Procurement: Software license or research agreement
- [ ] Cost: $5,000-20,000/year setup + $500-1,000/year per state maintenance

**7. Data Integration/Hosting**
- [ ] Requirements:
  - [ ] Secure HIPAA/FERPA-compliant hosting
  - [ ] State UI system API integration (read-only if possible)
  - [ ] Participant portal for outcome tracking
- [ ] Vendor options:
  - [ ] Amazon (AWS GovCloud), Microsoft (Azure Government), Google (not as robust for government)
  - [ ] State IT infrastructure (if available)
- [ ] Cost: $1,000-3,000/month for hosted environment

---

## Program Implementation Schedule

### Phase 1: Planning & Setup (Months 1-3)
- [ ] Procure lead implementation partner
- [ ] Hire/assign program manager
- [ ] Conduct stakeholder briefings
- [ ] Select benefits expertise partner
- [ ] Draft participant agreements and consent forms
- [ ] Cost: $30-50K (planning, contracting, startup)

### Phase 2: Build & Train (Months 3-6)
- [ ] Configure assessment platform
- [ ] Develop state-specific benefits calculator
- [ ] Build participant tracking system
- [ ] Recruit and train staff
- [ ] Set up data security and privacy protocols
- [ ] Pilot intake process with small cohort (5-10 people)
- [ ] Cost: $100-150K (platform setup, training, early staffing)

### Phase 3: Pilot Launch (Months 6-12)
- [ ] Enroll 50-75 workers in pilot
- [ ] Refine processes based on experience
- [ ] Track outcomes weekly
- [ ] Generate monthly reports
- [ ] Cost: $100-150K (staffing for pilot cohort + evaluation)

### Phase 4: Evaluation & Scale Decision (Month 12)
- [ ] Analyze pilot outcomes
- [ ] Cost-benefit analysis
- [ ] Stakeholder review
- [ ] Decide: Scale, modify, or discontinue
- [ ] Cost: $20-30K (external evaluation)

### Phase 5: Scale (If Green-Lit)
- [ ] Expand to additional sites or increase capacity
- [ ] Hire additional staff
- [ ] Refine operations based on pilot learning
- [ ] Cost: Scales with enrollment

---

## Procurement Timeline by Component

| Component | Timeline | Responsibility |
|-----------|----------|-----------------|
| Lead partner contract | Months 1-2 | Funding agency |
| Assessment platform | Months 2-4 | Program manager + tech vendor |
| Benefits calculator (per state) | Months 2-6 | Benefits specialist + vendor |
| Staff hiring/onboarding | Months 3-5 | Program manager |
| Data systems setup | Months 3-5 | Program manager + IT vendor |
| Stakeholder briefings | Month 1-2 (ongoing) | Program director |
| Participant communications | Month 5-6 | Program manager |
| Pilot launch | Month 6 | All teams |

---

## Financial Commitments

### Year 1 Pilot Budget (50-75 workers)

| Item | Cost |
|------|------|
| Lead partner (pass-through + overhead) | $75,000 |
| Staff (1 PM, 2-3 advisors, 1 coach, 0.5 evaluator) | $220,000 |
| Platform & technology setup | $60,000 |
| Benefits expert partner | $40,000 |
| Evaluation (external) | $25,000 |
| Contingency (10%) | $42,000 |
| **Total Year 1** | **$462,000** |
| **Cost per worker** | **$6,160** |

**Note:** High per-worker cost in Year 1 due to fixed platform, setup costs. Year 2+ cost per worker drops to $1,200-1,500 as system matures.

### Year 2+ Full Implementation (300-400 workers)

| Item | Cost |
|------|------|
| Lead partner | $300,000 |
| Staff (1 PM, 5-6 advisors, 2-3 coaches, 1 evaluator) | $600,000 |
| Platform & technology maintenance | $40,000 |
| Benefits expert partner | $20,000 |
| Evaluation | $30,000 |
| Contingency (5%) | $49,000 |
| **Total Year 2+** | **$1,039,000** |
| **Cost per worker** | **$2,600-3,500** |

---

## Vendor Evaluation Criteria

### For Lead Implementation Partner

**Must-Have:**
- [ ] Prior experience with dislocated worker programs or job-loss support
- [ ] Capacity to serve minimum pilot cohort (50+ workers)
- [ ] Financial stability (2+ years operating, clean audit)
- [ ] Outcome tracking infrastructure
- [ ] Available to start within 3 months

**Scoring Criteria:**
- [ ] Experience with similar populations (40%)
- [ ] Outcomes track record (30%)
- [ ] Price (20%)
- [ ] Local presence & relationships (10%)

### For Technology Platform Vendor

**Must-Have:**
- [ ] FERPA/HIPAA compliance capability
- [ ] State UI data integration capability (or willingness to develop)
- [ ] 99.5% uptime SLA
- [ ] Mobile-accessible participant portal

**Scoring Criteria:**
- [ ] Ease of use (30%)
- [ ] Integration capability (30%)
- [ ] Security/compliance track record (25%)
- [ ] Cost (15%)

---

## Contract Management

### Key Contract Terms

- [ ] Performance metrics tied to outcomes (% engaged, % employed, timeline)
- [ ] Clawback provisions if outcomes fall below 50% of pilot targets
- [ ] Data ownership and privacy clauses (participant data stays with lead agency)
- [ ] Sustainability clause (vendor commits to state policy updates)
- [ ] Evaluation cooperation (vendors must participate in evaluation)

### Ongoing Oversight

- [ ] Monthly budget reports from lead partner
- [ ] Weekly activity reports (enrollment, completion, outcomes)
- [ ] Monthly stakeholder calls
- [ ] Quarterly program reviews
- [ ] Annual independent audit

---

## Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| Budget cuts mid-year | Secure multi-year commitment; build contingency |
| Low enrollment | Start outreach early; partner with employers |
| Staff turnover | Competitive salary; career pathway within organization |
| Technology delays | Select established platforms; budget extra timeline |
| Data integration fails | Fallback to manual tracking; hybrid approach possible |
| Low outcomes | Use control group to adjust expectations; iterate on design |

---

## Ready-to-Procure Status

### Green Light For:
- [x] Lead implementation partner RFP
- [x] Benefits expertise consulting contract
- [x] Assessment platform licensing
- [x] Data hosting services

### Requires Additional Development:
- [ ] Benefits calculator scope (state-specific customization)
- [ ] Employer engagement strategy (optional for phase 1)
- [ ] Outcome tracking metrics (align with WIOA, if applicable)

---

**Procurement Checklist Status:** Ready for Internal Review  
**Next Step:** Issue RFP for lead implementation partner  
**Target Pilot Start:** 6 months from procurement approval

---

**Prepared by:** Framework Implementation Team  
**Date:** 2026-07-09  
**Version:** 1.0 (Pre-Pilot)

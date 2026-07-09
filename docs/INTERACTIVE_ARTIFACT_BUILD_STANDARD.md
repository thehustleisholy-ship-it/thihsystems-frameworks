# Interactive Artifact Build Standard

**Purpose:** Technical and UX standards for building interactive artifact tools across all frameworks.

**Scope:** Guides development, QA, and deployment of calculators, simulators, assessors, navigators, and other interactive tools.

---

## Architecture & Technology

### Framework Integration

- **Route Pattern:** `/frameworks/[slug]/tool` (calculator), `/frameworks/[slug]/tool/[type]` (multi-tool)
- **Hosting:** Next.js 16.2.10 with Turbopack; static-optimized or ISR as appropriate
- **Components:** React with 'use client' directive; minimal client-side bundling
- **State Management:** React.useState for UI state; URL params for persistence where user-shareable
- **Data Storage:** User-local (localStorage) or session-based; no server persistence without explicit agreement
- **Performance:** Lazy-load interactive artifacts only when tool route accessed; build-time framework data bundles

### Design System

**Color System:**
- **Primary Action:** Quantum Mint (#42F5B3) for primary CTAs, success states, active indicators
- **Warning/Caution:** Electric Amber (#FFB84D) for alerts, pending states, confirmations
- **Neutral Surface:** Frosted Slate (#1A202B) at 12-18% opacity with backdrop blur
- **Text:** White text at 96% opacity for primary, 72% for secondary, 52% for muted

**Components:**
- Use `.glass-plane` or `.glass-plane-strong` for data display containers
- Use `.status-pill` variants (`.status-pill-mint`, `.status-pill-amber`) for state badges
- Use `.btn-primary` for primary actions (Quantum Mint), `.btn-secondary` for secondary
- Use `.framework-card` for result/recommendation cards
- Use `.matrix-card` for dense data presentations

**Typography:**
- Geist Sans for body; Geist Mono for technical/numeric data
- Heading hierarchy: h1 (page title), h2 (section), h3 (subsection), h4 (labels)
- `.uppercase-label` for small caps labels (0.75rem, 700wt, 0.12em letter-spacing)

**Responsive:**
- Mobile-first approach
- Breakpoints: `md:` (768px), `lg:` (1024px)
- Touch-friendly: minimum 44px tap targets
- Landscape/portrait orientation handling on mobile

---

## User Experience Standards

### Interaction Patterns

**Input Handling:**
- Label every input field clearly
- Provide context/help text for non-obvious fields
- Use appropriate input types (number, date, email, etc.)
- Show input validation errors inline, not after form submission
- Provide reasonable defaults or examples
- Use sliders for numeric ranges; text inputs for precise values

**Results & Outputs:**
- Display results clearly with units and assumptions visible
- Show calculation/logic transparency (optional: expose assumption overrides)
- Provide exportable summary (JSON, CSV, or PDF export button)
- Show confidence levels or sensitivity ranges where applicable
- Explain what the output means in plain language

**Navigation & Clarity:**
- Single-purpose tools (calculator, assessor, navigator) with clear entry flow
- Multi-step tools use progress indicator and allow step navigation
- "Back to framework" link at top or bottom to return to framework detail page
- Explain what question the tool helps answer (in hero section)
- Explain any limitations, assumptions, or disclaimer requirements

**Mobile Considerations:**
- Stack inputs vertically on mobile
- Collapse secondary options/tabs on small screens
- Full-width interactive areas (no horizontal scroll)
- Use modals sparingly; prefer full-screen forms on mobile
- Test all tools at 375px, 768px, and 1440px width

### Accessibility

**Required:**
- WCAG 2.1 AA conformance minimum
- Semantic HTML: use `<button>`, `<input>`, `<label>`, `<fieldset>` correctly
- Form labels linked to inputs via `<label for="id">`
- Color not the only indicator of state (use text labels + color)
- Focus indicators visible (.focus-ring class available)
- Alt text for all images; descriptive alt for charts/visualizations
- Keyboard navigation: Tab, Shift+Tab, Enter to submit
- Screen reader testing: test with NVDA or Narrator

**Optional But Recommended:**
- ARIA labels for complex interactive regions
- Skip links if multi-section tool
- High-contrast mode support (test with Windows high-contrast setting)

---

## Data & Calculation Standards

### Input Validation

- **Type Validation:** Ensure numeric inputs are numbers, dates are valid dates, etc.
- **Range Validation:** Enforce sensible min/max (e.g., age 0-150, income $0+)
- **Dependency Validation:** If Field B depends on Field A, validate order and consistency
- **User Feedback:** Show validation errors immediately; don't require form resubmit
- **Graceful Degradation:** If calculation fails, explain why in plain language

### Calculation Transparency

- **Show Assumptions:** List key assumptions (inflation rate, discount rate, etc.) above or below results
- **Source Citation:** If calculation uses published data (actuarial tables, economic models), cite source
- **Sensitivity Analysis:** For high-stakes calculations, show range of outputs under different assumptions
- **Precision:** Report outputs at appropriate precision (e.g., financial to $1 not $0.001)
- **Units:** Always show units (dollars, percentage, years, etc.) with every number

### Model Accuracy & Testing

- **Unit Tests:** Test calculation functions with known inputs/outputs
- **Edge Cases:** Test boundary conditions (zero, negative, extreme high values)
- **Regressions:** Document any known limitations or special cases
- **User Validation:** Pilot with target users; collect feedback on accuracy/usefulness

---

## Content & Messaging Standards

### Disclaimers & Safety

**Required Disclaimer Types:**
- **Conceptual:** "This tool is conceptual and does not represent a finished solution"
- **Pending Research:** "This tool is based on preliminary research; findings may change"
- **Source Needs Verification:** "This tool references sources that require independent verification"
- **Not Medical/Legal Advice:** For health/legal tools, explicitly state tool is not a substitute for professional consultation
- **Not Financial Advice:** For financial tools, state outputs are hypothetical scenarios
- **Not Guaranteed Outcomes:** "This model is a scenario tool, not a guarantee of actual outcomes"

**Disclaimer Placement:**
- Prominent (hero or above-fold) for high-risk tools (health, legal, financial)
- In footer for low-risk tools (educational, informational)
- In modal on first load (optional: allow "don't show again" for known users)

### Plain Language

- Write explanations as if for a college-educated audience with no domain expertise
- Define jargon on first use or use glossary
- Use active voice; avoid passive constructions
- Keep sentences under 20 words
- Use bullet points for lists

### Feature Documentation

- Include a "How This Tool Works" section (1-3 paragraphs)
- List "What This Tool Can Tell You" (2-4 use cases)
- List "What This Tool Cannot Tell You" (2-3 limitations)
- Provide "Glossary" link if tool uses specialized terminology

---

## Pilot & Validation Workflow

### Before Launch

1. **Internal QA:**
   - Smoke test all input combinations (happy path, edge cases, invalid inputs)
   - Test on mobile (375px), tablet (768px), desktop (1440px)
   - Test keyboard navigation (Tab, Shift+Tab, Enter, Escape)
   - Verify all links and CTAs work
   - Check performance: Lighthouse score ≥85 for Performance and Accessibility

2. **Expert Review:**
   - Domain expert review (e.g., clinician for health tool, economist for financial tool)
   - Review calculation accuracy and assumption credibility
   - Review disclaimer appropriateness
   - Review plain-language clarity

3. **User Pilot:**
   - Recruit 5-10 target users
   - Observe them using the tool without guidance
   - Collect feedback on clarity, usefulness, calculation accuracy
   - Document edge cases or confusion points
   - Iterate based on feedback

### Post-Launch Monitoring

- **Usage Analytics:** Track page views, input completion rate, export rate
- **User Feedback:** Collect comments/questions; respond within 24-48 hours
- **Bug Reports:** Monitor for calculation errors or broken interactions
- **Quarterly Review:** Assess tool usage and plan improvements

---

## Code Quality Standards

### Framework Integration

**Location & Structure:**
```
/frameworks/[slug]/
  /tool/
    page.tsx (main tool page, 'use client')
    layout.tsx (optional: tool-specific layout)
    /lib/
      calculations.ts (pure calculation functions)
      types.ts (TypeScript interfaces for input/output)
      utils.ts (helper functions)
  /demo/
    page.tsx (framework demo preview)
```

**Imports & Dependencies:**
- Use Next.js Link for internal navigation
- Use dynamic() imports for heavy libraries
- Minimize external dependencies; prefer stdlib where possible
- Bundle framework data at build time, not fetch at runtime

**Code Reusability:**
- Separate calculation logic from UI (test calculations independently)
- Export calculation functions for reuse in other tools
- Create shared input components for common patterns (number range, date picker, select list)
- Use TypeScript interfaces to document data structures

### Testing & Validation

- **Calculations:** Unit test all complex calculations (use Jest or similar)
- **Components:** Component test form validation and state changes (optional: React Testing Library)
- **E2E:** Manual test full user flows on multiple devices
- **Accessibility:** Run axe or similar on all pages; fix Level A/AA issues

### Performance

- **Bundle Size:** Keep tool JS bundle under 100KB
- **Time to Interactive:** Aim for <2s TTI on 4G network
- **Build Time:** Artifacts should not increase main build time >10%
- **Lazy Loading:** Load tool JavaScript only when user navigates to /tool route

### Code Style

- Follow Next.js naming conventions (PascalCase components, camelCase functions)
- Use TypeScript for type safety; avoid `any` type
- Add JSDoc comments for exported functions
- Run `npm run lint` before committing; fix all warnings
- Use `.env.example` for environment variable templates

---

## Deployment & Operations

### Vercel Deployment

- Deploy to Vercel staging on every commit
- Manual promote to production
- Use environment variables for API keys, calculation parameters
- Monitor build logs; fix warnings before production deploy
- Set up automatic redeploys on source changes

### Monitoring & Observability

- **Error Tracking:** Log calculation errors; monitor for patterns
- **Performance:** Monitor Core Web Vitals (LCP, FID, CLS)
- **Usage:** Track page views, feature usage, export frequency
- **Feedback:** Monitor user comments and questions

### Maintenance

- **Quarterly Content Review:** Update assumptions, recalibrate models
- **Annual Accessibility Audit:** Retest WCAG 2.1 AA conformance
- **Annual Security Review:** Check for known vulnerabilities in dependencies
- **User Requests:** Log and prioritize feature requests from user feedback

---

## Procurement & Governance

### Build Decision Framework

| Factor | Low Priority | Medium Priority | High Priority |
|--------|---|---|---|
| **User Need** | Nice-to-have | Addresses gap | Solves critical need |
| **Build Difficulty** | High | Medium | Low or owned expertise |
| **Available Expertise** | Needs external hire | Team can learn | In-house ready |
| **Timeline** | No deadline | 6+ months | <3 months |
| **Partner Readiness** | No partner agreement | MOU in progress | Partner committed |
| **Risk Level** | High (mitigates) | Medium | Low or mitigatable |

**Decision Rule:** Prioritize High + Low Difficulty + In-House + Partner Ready.

### Partnership Model

- **Validation Partners:** Domain experts who review tool accuracy and disclaimer appropriateness
- **Pilot Partners:** Institutions who test tool with real users; provide feedback
- **Vendor Partners:** Technology vendors (SaaS, APIs) integrated into tool workflows
- **Policy Partners:** Government/nonprofit collaborators on governance frameworks
- **Research Partners:** Academic institutions conducting outcomes evaluation

### Outcome Tracking

- **Adoption Metrics:** Tool page views, user sessions, unique users over time
- **Engagement Metrics:** Input completion rate, result export rate, feature usage
- **Effectiveness Metrics:** User feedback (satisfaction, usefulness), pilot outcomes, behavior change
- **Business Metrics:** Cost per impact (if applicable), ROI, partnership value

---

## Examples & Reference Implementations

### Simple Calculator Example
- **Tool:** Job-Loss Income Shock Stabilizer (Framework 02)
- **Inputs:** Prior income, state, family size, UI eligibility
- **Calculation:** Sum available income sources; identify cliff dates
- **Output:** 30-day income roadmap, cliff analysis
- **Estimated Build Effort:** 60-80 hours (data collection + design + testing)

### Complex Simulator Example
- **Tool:** Water-Stressed Agricultural Financing (Framework 04)
- **Inputs:** Farm data, climate scenario, financial parameters
- **Calculation:** Scenario modeling; financial ROI; environmental impact
- **Output:** Multi-scenario comparison chart, recommendation
- **Estimated Build Effort:** 120-160 hours (climate data integration + modeling + validation)

### Assessment Tool Example
- **Tool:** Workplace-Injury Prevention Hazard Assessment (Framework 08)
- **Inputs:** Industry, employee count, injury history, current protocols
- **Calculation:** Risk scoring; comparison to industry benchmarks
- **Output:** Prioritized hazard list, mitigation roadmap
- **Estimated Build Effort:** 40-60 hours (domain expertise + assessment logic)

---

## Rollout Sequence

### Phase 1 (Concept Validation)
- Frameworks 1, 7, 20, 25
- Low complexity, proven demand
- **Timeline:** 12-16 weeks
- **Success Criteria:** 100+ unique users per tool, 60%+ completion rate

### Phase 2 (Medium Complexity)
- Frameworks 8, 11, 16, 28
- Medium complexity, domain partnership available
- **Timeline:** 16-24 weeks
- **Success Criteria:** 500+ unique users, 50%+ completion rate, pilot partnerships

### Phase 3 (High Complexity)
- Frameworks 2, 5, 10, 14, 19
- High complexity, major build effort
- **Timeline:** 24-40 weeks per tool
- **Success Criteria:** 1000+ unique users, 40%+ completion rate, measurable outcomes

### Phase 4 (Research & Policy)
- Frameworks 21, 22, 29, 30
- Highest complexity, policy/research focus
- **Timeline:** 40+ weeks per tool
- **Success Criteria:** Expert adoption, policy influence, research publication

---

## Deprecation & Iteration

### When to Update a Tool
- Material change in underlying data (e.g., new eligibility rules)
- User feedback reveals systematic misunderstanding
- Calculation error identified and confirmed
- New feature would materially improve user outcomes
- Performance issues or accessibility failures

### When to Deprecate a Tool
- Framework matured to finished product; tool no longer needed
- Underlying data/policy changed irreversibly; tool no longer accurate
- No measurable usage for 12+ months
- High maintenance burden; low user value

### Versioning
- Include version in URL if major changes: `/frameworks/[slug]/tool/v2`
- Archive previous version for reference
- Document changelog clearly
- Communicate deprecation 3 months in advance

---

## Summary Checklist

**Before Coding:**
- [ ] Framework data bundled and available at build time
- [ ] Calculation logic defined and validated with domain expert
- [ ] Assumptions and disclaimer requirements documented
- [ ] User flow and wireframe created
- [ ] Accessibility requirements reviewed
- [ ] Build difficulty and risk level assessed

**During Development:**
- [ ] Separate calculation logic from UI
- [ ] Add TypeScript interfaces for all data structures
- [ ] Test calculations with edge cases
- [ ] Test responsive design on 375px, 768px, 1440px
- [ ] Test keyboard navigation
- [ ] Implement proper error handling
- [ ] Add loading states for async operations
- [ ] Document assumptions and limitations

**Before Launch:**
- [ ] Pass Lighthouse audit (Performance ≥85, Accessibility ≥85)
- [ ] Domain expert review completed
- [ ] User pilot completed (5+ users)
- [ ] All links and CTAs functional
- [ ] Disclaimer placement reviewed
- [ ] Plain-language review completed
- [ ] 404 handling and error states tested

**Post-Launch:**
- [ ] Set up analytics tracking
- [ ] Set up error logging/monitoring
- [ ] Monitor user feedback channels
- [ ] Quarterly review and iteration

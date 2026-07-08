/**
 * Framework Master Matrix
 *
 * The institutional source of truth for all 30 frameworks.
 * Every framework must have the exact same fields.
 * No framework launches as inspiration alone.
 *
 * Operating rule: Every framework must make visible:
 * 1. Research
 * 2. Numbers
 * 3. Economics
 * 4. Implementation path
 * 5. Procurement path
 * 6. ROI logic
 * 7. Pilot path
 * 8. Policy path
 */

export enum SourceStatus {
  NeedsVerification = "Needs verification",
  SourceIdentified = "Source identified",
  SourceVerified = "Source verified",
  OfficialSourcePreferred = "Official source preferred",
  NotYetSourced = "Not yet sourced",
}

export enum PublicClaimStatus {
  SafeToPublish = "Safe to publish",
  NeedsCitation = "Needs citation",
  NeedsSoftening = "Needs softening",
  DoNotPublishYet = "Do not publish yet",
}

export enum EvidenceConfidenceLevel {
  Level1 = "Level 1: Conceptual, based on observed system failure",
  Level2 = "Level 2: Supported by credible secondary research",
  Level3 = "Level 3: Supported by official data or institutional reports",
  Level4 = "Level 4: Supported by pilot evidence or field validation",
  Level5 = "Level 5: Supported by repeated implementation evidence",
}

export enum ReadinessStatus {
  NotReady = "Not Ready",
  Drafted = "Drafted",
  NeedsReview = "Needs Review",
  ReadyForInternalReview = "Ready for Internal Review",
  ReadyForPublicPreview = "Ready for Public Preview",
}

export enum RiskLevel {
  VeryLow = "Very Low",
  Low = "Low",
  Moderate = "Moderate",
  High = "High",
  Critical = "Critical",
}

export type FrameworkMatrixEntry = {
  // Identification
  framework_number: string;
  framework_title: string;
  slug: string;
  category: string;

  // Infrastructure positioning
  enterprise_layer: string;
  hidden_foundation: string;

  // Research and evidence
  documented_research: string;
  statistics: string;
  economic_impact: string;
  evidence_confidence: EvidenceConfidenceLevel;

  // Implementation pathways
  implementation_roadmap: string;
  procurement_checklist: string;
  roi_calculator_logic: string;
  pilot_guide: string;
  policy_brief: string;

  // Stakeholder mapping
  primary_buyer: string;
  secondary_stakeholders: string;
  affected_public: string;

  // Operations
  core_data_inputs: string;
  key_workflow: string;
  demo_type: string;

  // Maturity and readiness
  maturity_status: string;
  procurement_readiness: ReadinessStatus;
  pilot_readiness: ReadinessStatus;
  policy_readiness: ReadinessStatus;

  // Risk and transparency
  risk_level: RiskLevel;
  primary_disclaimer: string;

  // Source tracking
  source_status: SourceStatus;
  public_claim_status: PublicClaimStatus;

  // Public endpoints
  github_repo_url: string;
  demo_url: string;
  framework_url: string;
  substack_url?: string;
  linkedin_launch_url?: string;
};

export const frameworkMasterMatrix: FrameworkMatrixEntry[] = [
  {
    framework_number: "01",
    framework_title: "Women's Health Longitudinal Dashboard",
    slug: "womens-health-longitudinal-dashboard",
    category: "HealthTech / Patient Data",
    enterprise_layer: "Patient-owned clinical context infrastructure",
    hidden_foundation:
      "Longitudinal symptom tracking, cycle context, clinical readiness. Patients organize data; clinicians receive structured context.",
    documented_research: "Source: Needs verification",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level1,
    implementation_roadmap: "Demo live. Repo structure ready. Needs: MVP user testing, clinical validation.",
    procurement_checklist: "HIPAA compliance. Patient consent flows. EHR interop readiness.",
    roi_calculator_logic: "Patient prep time saved x visit efficiency gain x clinical accuracy improvement.",
    pilot_guide: "Start: single clinic, 20 patients, 12-week cycle.",
    policy_brief: "Patient data ownership. Clinical context integration. Privacy standards.",
    primary_buyer: "Clinics, health systems, patient advocacy organizations",
    secondary_stakeholders:
      "EHR vendors, health tech platforms, patient data networks",
    affected_public:
      "Women with chronic symptoms, cycling-dependent conditions (PCOS, endometriosis, etc.)",
    core_data_inputs:
      "Symptoms, cycle phase, labs, medications, life events, clinical questions",
    key_workflow:
      "Track symptoms → add cycle context → export visit-ready report → clinical review",
    demo_type: "Live interactive dashboard",
    maturity_status: "Spec Ready, Demo Live, Repo Live",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.NeedsReview,
    risk_level: RiskLevel.Low,
    primary_disclaimer:
      "Not a diagnostic tool. Not medical advice. Designed to help patients organize their own data.",
    source_status: SourceStatus.NeedsVerification,
    public_claim_status: PublicClaimStatus.SafeToPublish,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/thihsystems-frameworks",
    demo_url: "/frameworks/womens-health-longitudinal-dashboard/demo",
    framework_url: "/frameworks/womens-health-longitudinal-dashboard",
    substack_url: "https://substack.com/@michaelmartinthih",
    linkedin_launch_url: "https://www.linkedin.com/company/124453928/",
  },

  {
    framework_number: "02",
    framework_title: "Job-Loss & Income-Shock Stabilizer",
    slug: "job-loss-income-shock-stabilizer",
    category: "Workforce Transition Infrastructure",
    enterprise_layer: "Workforce transition continuity",
    hidden_foundation:
      "The first 30 days after job loss determine the next 3 years. Operating system for income-loss stabilization.",
    documented_research:
      "Secondary research compiled. BLS job displacement data, Federal Reserve household fragility, NBER job-loss effects, state UI administrative data, workforce program evaluations, benefits cliff research.",
    statistics:
      "Job displacement causes 20-40% earnings loss; 40% of households lack $400 emergency fund; UI replacement rate 40-50% of prior wage; ~50% never return to pre-loss wage level.",
    economic_impact:
      "Assumptions-based ROI model: $1,178 cost vs. $22,782 modeled benefit (18.3x return under assumptions). Modeled break-even at 0.2 weeks accelerated employment. Requires pilot validation for actual outcomes.",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap:
      "Concept structured (complete). Demo preview (30-day workflow designed). Pilot ready (workforce partner identified, participant recruitment plan drafted). Scale decision after 12-month pilot (month 12 of 2026).",
    procurement_checklist:
      "Lead implementation partner RFP. Benefits calculator development per state. Assessment platform procurement/build. Staff hiring (1 PM, 2-3 advisors, 1 coach, 0.5 evaluator). Data integration setup. Interagency MOU (UI, WIOA, emergency assistance). Participant communications. Pilot launch infrastructure.",
    roi_calculator_logic:
      "Modeled ROI scenario (not validated): $1,178 cost × (modeled accelerated reemployment $5,400 + wage improvement $11,232 + avoided instability $1,750 + government savings $4,400) = 18.3x modeled ROI. Conservative scenario (30% realization) = 4.8x. Actual ROI requires pilot data.",
    pilot_guide:
      "50-75 job-loss cases over 6 months, with matched comparison group. Intensive 30-day service delivery (intake, benefits analysis, job search, offer support). Outcomes tracking at 30-day, 90-day, 6-month, 12-month. Evaluation by external evaluator.",
    policy_brief:
      "Rapid coordination framework linking UI, workforce development, emergency assistance. Model state statute for automatic referral and rapid response. Interagency MOU template provided. Benefits calculator standardization. Emergency assistance fast-track.",
    primary_buyer:
      "State Departments of Labor, state workforce development boards, employers with transition budgets, nonprofit workforce providers",
    secondary_stakeholders:
      "Unemployment insurance administrators, emergency assistance coordinators, community action agencies, workforce development partners",
    affected_public:
      "Displaced workers (~2M/year U.S.); families dependent on displaced worker income; communities experiencing job-loss economic impact",
    core_data_inputs:
      "Participant financial situation (income, expenses, debt, savings); employment history & skills; benefits eligibility (UI, SNAP, childcare, housing); state benefits rules; job market data; wage records (for outcome validation)",
    key_workflow:
      "Day 1-3: Intake & assessment (financial, career, benefits). Day 4-7: Benefits cliff analysis & financial triage. Day 8-21: Job search acceleration. Day 22-30: Offer evaluation & decision support. Follow-up: 30-day, 90-day, 6-month, 1-year outcomes.",
    demo_type:
      "Interactive 30-day workflow tracker, state benefits calculator, job search bootcamp checklist, offer evaluation tool, outcomes dashboard",
    maturity_status: "Concept Structured, Implementation Roadmap Complete, Pilot-Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.ReadyForInternalReview,
    risk_level: RiskLevel.Low,
    primary_disclaimer:
      "Framework supports but does not replace professional financial, legal, or career counseling. Benefits information varies by state and is subject to policy changes. Results depend on labor market conditions and individual circumstances.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-02-job-loss-income-shock-stabilizer",
    demo_url: "/frameworks/job-loss-income-shock-stabilizer/demo",
    framework_url: "/frameworks/job-loss-income-shock-stabilizer",
  },

  {
    framework_number: "03",
    framework_title: "Returning Citizen Reentry Roadmap",
    slug: "returning-citizen-reentry-roadmap",
    category: "Justice-to-Stability Infrastructure",
    enterprise_layer: "Reentry service coordination",
    hidden_foundation: "Freedom without infrastructure becomes another trap. Reentry coordination system.",
    documented_research: "Research queue required",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Needs: reentry partner testing.",
    procurement_checklist:
      "Housing coordination. Employment pathways. Legal requirement tracking. Support service mapping.",
    roi_calculator_logic:
      "Recidivism reduction x employment placement x housing stability x family reunification.",
    pilot_guide: "Partner: reentry center. Participants: 30 returners, 12-month tracking.",
    policy_brief:
      "Coordinated reentry as public infrastructure. System integration across justice, housing, employment.",
    primary_buyer: "Reentry centers, criminal justice agencies, community supervision",
    secondary_stakeholders:
      "Public housing, workforce development, social services, faith-based organizations",
    affected_public: "Returning citizens, post-incarceration, reentry phase",
    core_data_inputs:
      "Release requirements, documentation needs, housing leads, employment opportunities, legal compliance dates",
    key_workflow:
      "Intake → documentation audit → pathway plan → requirement tracker → support coordination",
    demo_type: "Integrated reentry checklist and service mapper",
    maturity_status: "Concept Structured, Demo Preview, Repo Pending",
    procurement_readiness: ReadinessStatus.NeedsReview,
    pilot_readiness: ReadinessStatus.Drafted,
    policy_readiness: ReadinessStatus.NeedsReview,
    risk_level: RiskLevel.Moderate,
    primary_disclaimer: "Supports but does not replace professional reentry services.",
    source_status: SourceStatus.NotYetSourced,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-03-returning-citizen-reentry-roadmap",
    demo_url: "/frameworks/returning-citizen-reentry-roadmap/demo",
    framework_url: "/frameworks/returning-citizen-reentry-roadmap",
  },

  {
    framework_number: "04",
    framework_title: "Black Maternal Health Emergency Response System",
    slug: "black-maternal-health-emergency-response-system",
    category: "Maternal Risk Escalation Infrastructure",
    enterprise_layer: "Maternal red-flag escalation and advocacy",
    hidden_foundation: "Being dismissed can become deadly. Escalation system for maternal safety.",
    documented_research: "Research queue required - CDC maternal mortality data",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Needs: clinical partnership testing.",
    procurement_checklist:
      "Clinical escalation protocols. Patient advocacy coordination. Hospital policy integration.",
    roi_calculator_logic: "Maternal adverse events prevented x escalation speed x outcome improvement.",
    pilot_guide: "Partner: maternal health clinic. Track: risk escalations, response time, outcomes.",
    policy_brief: "Maternal safety escalation as clinical standard. Institutional accountability.",
    primary_buyer: "Maternal health programs, OB/GYN departments, maternal mortality review boards",
    secondary_stakeholders: "Hospitals, patient advocacy groups, public health departments",
    affected_public: "Pregnant and postpartum women, especially Black women and communities of color",
    core_data_inputs:
      "Maternal health symptoms, risk factors, clinical dismissal patterns, escalation triggers",
    key_workflow:
      "Symptom tracking → risk assessment → escalation flag → advocacy coordination → clinical review",
    demo_type: "Risk escalation protocol and advocacy coordination tool",
    maturity_status: "Concept Structured, Demo Preview, Repo Pending",
    procurement_readiness: ReadinessStatus.NeedsReview,
    pilot_readiness: ReadinessStatus.Drafted,
    policy_readiness: ReadinessStatus.NeedsReview,
    risk_level: RiskLevel.High,
    primary_disclaimer: "Not clinical guidance. Supports but does not replace clinical care.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-04-black-maternal-health-emergency-response-system",
    demo_url: "/frameworks/black-maternal-health-emergency-response-system/demo",
    framework_url: "/frameworks/black-maternal-health-emergency-response-system",
  },

  {
    framework_number: "05",
    framework_title: "Hospital Grid-Independence & Resilience Framework",
    slug: "hospital-grid-independence-resilience",
    category: "Critical Facility Continuity",
    enterprise_layer: "Critical facility continuity infrastructure",
    hidden_foundation: "A hospital that cannot survive grid failure is not resilient care.",
    documented_research: "Research queue required - critical infrastructure resilience standards",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Needs: hospital resilience testing.",
    procurement_checklist:
      "Power systems. Fuel supply. Water resilience. Oxygen continuity. Staffing plans. Pharmacy resilience.",
    roi_calculator_logic:
      "Grid-failure duration x patient safety x operational continuity x regulatory compliance.",
    pilot_guide: "Partner: regional hospital. Audit: 72-hour continuity across all systems.",
    policy_brief:
      "Critical facility resilience as infrastructure standard. Continuity testing requirements.",
    primary_buyer: "Hospitals, health systems, emergency management agencies",
    secondary_stakeholders: "Utility companies, fuel suppliers, medical equipment vendors",
    affected_public: "Patients dependent on hospital services, emergency medicine, critical care",
    core_data_inputs:
      "Power capacity, backup fuel, water supply, oxygen generation, staffing rosters, pharmacy stock",
    key_workflow:
      "Resilience audit → system mapping → 72-hour scenario test → continuity plan → implementation",
    demo_type: "Resilience audit checklist and continuity scenario planner",
    maturity_status: "Concept Structured, Demo Preview, Repo Pending",
    procurement_readiness: ReadinessStatus.NeedsReview,
    pilot_readiness: ReadinessStatus.Drafted,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.High,
    primary_disclaimer: "Framework supports but does not replace clinical resilience standards.",
    source_status: SourceStatus.NotYetSourced,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-05-hospital-grid-independence-resilience",
    demo_url: "/frameworks/hospital-grid-independence-resilience/demo",
    framework_url: "/frameworks/hospital-grid-independence-resilience",
  },

  {
    framework_number: "06",
    framework_title: "Eviction Defense Documentation System",
    slug: "eviction-defense-documentation-system",
    category: "Housing Stability Infrastructure",
    enterprise_layer: "Housing stability documentation infrastructure",
    hidden_foundation:
      "Most people do not lose housing because they had no case. They lose because they had no system.",
    documented_research: "Research queue required - eviction defense data",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level1,
    implementation_roadmap: "Concept structured. Demo preview. Needs: legal aid partner testing.",
    procurement_checklist:
      "Evidence organization. Court preparation. Legal coordination. Timeline documentation.",
    roi_calculator_logic: "Housing retained x legal success rate x court preparation time saved.",
    pilot_guide: "Partner: legal aid. Track: evidence organization speed, case outcomes.",
    policy_brief: "Evidence vault access as housing justice infrastructure.",
    primary_buyer: "Legal aid organizations, tenant rights groups, housing counselors",
    secondary_stakeholders: "Courts, judicial officers, landlord-tenant mediation services",
    affected_public: "Tenants facing eviction, low-income housing residents",
    core_data_inputs: "Lease terms, payment history, communications, repair issues, legal notices",
    key_workflow:
      "Evidence collection → organization → court-prep package → legal review → defense filing",
    demo_type: "Evidence vault and court-prep document organizer",
    maturity_status: "Concept Structured, Demo Preview, Repo Pending",
    procurement_readiness: ReadinessStatus.NeedsReview,
    pilot_readiness: ReadinessStatus.Drafted,
    policy_readiness: ReadinessStatus.NeedsReview,
    risk_level: RiskLevel.Moderate,
    primary_disclaimer: "Supports but does not replace legal representation.",
    source_status: SourceStatus.NotYetSourced,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-06-eviction-defense-documentation-system",
    demo_url: "/frameworks/eviction-defense-documentation-system/demo",
    framework_url: "/frameworks/eviction-defense-documentation-system",
  },

  {
    framework_number: "07",
    framework_title: "Phosphorus Recovery & Circular Fertilizer Framework",
    slug: "phosphorus-recovery-circular-fertilizer",
    category: "Nutrient Security Infrastructure",
    enterprise_layer: "Strategic nutrient recovery infrastructure",
    hidden_foundation: "We are flushing food security into the ocean.",
    documented_research: "Research queue required - nutrient cycle, phosphorus geology",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Needs: recovery facility partnership.",
    procurement_checklist:
      "Wastewater infrastructure. Recovery technology. Fertilizer production. Regulatory compliance.",
    roi_calculator_logic: "Phosphorus recovered x fertilizer production cost x agricultural value.",
    pilot_guide: "Partner: wastewater treatment facility. Measure: recovery rate, fertilizer production.",
    policy_brief:
      "Nutrient recovery as food security infrastructure. Circular economy standards.",
    primary_buyer: "Wastewater treatment agencies, agricultural producers, fertilizer companies",
    secondary_stakeholders: "Environmental agencies, farming cooperatives, nutrient research",
    affected_public: "Agricultural communities, food consumers, ecosystems dependent on nutrient cycles",
    core_data_inputs:
      "Wastewater volume and composition, phosphorus content, recovery capacity, agricultural demand",
    key_workflow:
      "Nutrient audit → recovery opportunity → technology selection → facility deployment → monitoring",
    demo_type: "Nutrient recovery opportunity and ROI calculator",
    maturity_status: "Concept Structured, Demo Preview, Repo Pending",
    procurement_readiness: ReadinessStatus.NeedsReview,
    pilot_readiness: ReadinessStatus.Drafted,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Moderate,
    primary_disclaimer: "Framework supports but does not replace environmental compliance requirements.",
    source_status: SourceStatus.NotYetSourced,
    public_claim_status: PublicClaimStatus.NeedsSoftening,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-07-phosphorus-recovery-circular-fertilizer",
    demo_url: "/frameworks/phosphorus-recovery-circular-fertilizer/demo",
    framework_url: "/frameworks/phosphorus-recovery-circular-fertilizer",
  },

  {
    framework_number: "08",
    framework_title: "Sand Crisis & Alternative Aggregate Supply Chain",
    slug: "sand-crisis-alternative-aggregate",
    category: "Construction Material Resilience",
    enterprise_layer: "Construction aggregate risk and substitution infrastructure",
    hidden_foundation: "The world is running out of the sand modern life is built on.",
    documented_research: "Research queue required - aggregate market, sand mining impacts",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Needs: construction industry testing.",
    procurement_checklist:
      "Aggregate supply mapping. Alternative materials. Material substitution. Recycled content.",
    roi_calculator_logic: "Aggregate supply risk mitigated x construction continuity x cost optimization.",
    pilot_guide: "Partner: construction project. Track: aggregate sourcing, substitution feasibility.",
    policy_brief: "Aggregate security as construction infrastructure. Material substitution standards.",
    primary_buyer: "Construction companies, building departments, infrastructure agencies",
    secondary_stakeholders: "Aggregate suppliers, recycled material producers, material science",
    affected_public: "Construction workers, building communities, infrastructure users",
    core_data_inputs:
      "Aggregate demand, supply sources, transportation distance, recycled material availability, cost data",
    key_workflow:
      "Supply audit → risk assessment → alternative sourcing → material testing → substitution plan",
    demo_type: "Aggregate supply risk mapper and substitution planner",
    maturity_status: "Concept Structured, Demo Preview, Repo Pending",
    procurement_readiness: ReadinessStatus.NeedsReview,
    pilot_readiness: ReadinessStatus.Drafted,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Moderate,
    primary_disclaimer:
      "Framework supports material planning but does not replace engineering validation.",
    source_status: SourceStatus.NotYetSourced,
    public_claim_status: PublicClaimStatus.NeedsSoftening,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-08-sand-crisis-alternative-aggregate",
    demo_url: "/frameworks/sand-crisis-alternative-aggregate/demo",
    framework_url: "/frameworks/sand-crisis-alternative-aggregate",
  },

  {
    framework_number: "09",
    framework_title: "Topsoil Regeneration & No-Till Transition Accelerator",
    slug: "topsoil-regeneration-no-till-transition",
    category: "Soil-Capital Preservation",
    enterprise_layer: "Soil-health transition infrastructure",
    hidden_foundation: "Soil is not dirt. It is civilization's savings account.",
    documented_research: "Research queue required - soil science, regenerative agriculture",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Needs: agricultural partner testing.",
    procurement_checklist:
      "Soil assessment. Transition planning. No-till equipment. Cover crop sourcing. Financial support.",
    roi_calculator_logic:
      "Soil health improvement x crop yield recovery x input cost reduction x carbon credit value.",
    pilot_guide:
      "Partner: regional farm. Track: soil metrics, transition timeline, yield outcomes.",
    policy_brief:
      "Soil transition as agricultural infrastructure. Regeneration investment frameworks.",
    primary_buyer: "Agricultural producers, farm bureaus, soil conservation districts",
    secondary_stakeholders: "Equipment vendors, seed suppliers, carbon credit markets, agricultural research",
    affected_public: "Farming communities, food consumers, ecosystems dependent on soil health",
    core_data_inputs:
      "Current soil metrics, farm size, crop type, existing equipment, financing capacity, regional conditions",
    key_workflow:
      "Soil audit → transition planning → equipment and input sourcing → implementation → monitoring",
    demo_type: "Soil transition planner and ROI calculator",
    maturity_status: "Concept Structured, Demo Preview, Repo Pending",
    procurement_readiness: ReadinessStatus.NeedsReview,
    pilot_readiness: ReadinessStatus.Drafted,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Low,
    primary_disclaimer:
      "Framework supports transition planning but does not replace agronomic consultation.",
    source_status: SourceStatus.NotYetSourced,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-09-topsoil-regeneration-no-till-transition",
    demo_url: "/frameworks/topsoil-regeneration-no-till-transition/demo",
    framework_url: "/frameworks/topsoil-regeneration-no-till-transition",
  },

  {
    framework_number: "10",
    framework_title: "Managed Aquifer Recharge & Underground Water Banking",
    slug: "managed-aquifer-recharge-water-banking",
    category: "Water Security Infrastructure",
    enterprise_layer: "Aquifer recharge, drought resilience, and underground water banking",
    hidden_foundation: "Groundwater collapse is invisible until the wells run dry.",
    documented_research: "Research queue required - hydrogeology, aquifer science",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Needs: water authority testing.",
    procurement_checklist:
      "Hydrologic assessment. Recharge site identification. Water quality standards. Regulatory approval.",
    roi_calculator_logic:
      "Water supply secured x drought resilience value x agricultural continuity x emergency reserves.",
    pilot_guide:
      "Partner: water authority. Measure: recharge volume, aquifer impact, drought buffer created.",
    policy_brief:
      "Managed recharge as water security infrastructure. Aquifer banking as regional resilience.",
    primary_buyer: "Water agencies, agricultural irrigation districts, municipalities",
    secondary_stakeholders: "Hydrogeology consultants, environmental agencies, climate adaptation planning",
    affected_public: "Communities dependent on groundwater, agricultural regions, drought-vulnerable areas",
    core_data_inputs:
      "Aquifer characteristics, recharge potential, seasonal water availability, demand profiles, quality standards",
    key_workflow:
      "Hydrogeologic survey → recharge potential assessment → site selection → regulatory approval → operation",
    demo_type: "Aquifer and water banking opportunity assessor",
    maturity_status: "Concept Structured, Demo Preview, Repo Pending",
    procurement_readiness: ReadinessStatus.NeedsReview,
    pilot_readiness: ReadinessStatus.Drafted,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Moderate,
    primary_disclaimer:
      "Framework supports planning but does not replace hydrogeological expertise.",
    source_status: SourceStatus.NotYetSourced,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-10-managed-aquifer-recharge-water-banking",
    demo_url: "/frameworks/managed-aquifer-recharge-water-banking/demo",
    framework_url: "/frameworks/managed-aquifer-recharge-water-banking",
  },

  {
    framework_number: "11",
    framework_title: "GPS Failure Contingency & Backup Navigation Infrastructure",
    slug: "gps-failure-contingency-backup-navigation",
    category: "Fragile Systems",
    enterprise_layer: "Positioning, navigation, and timing resilience",
    hidden_foundation: "Modern civilization forgot how dependent it is on invisible signals.",
    documented_research: "Research queue required - GPS dependency analysis, backup systems",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap:
      "Concept structured. Demo preview. Repo ready. Implementation partners: critical infrastructure sectors.",
    procurement_checklist:
      "Backup positioning systems. Timing redundancy. Navigation contingency. Critical infrastructure priority.",
    roi_calculator_logic:
      "GPS outage duration x critical system impact x contingency cost x resilience value.",
    pilot_guide: "Sector-specific testing with transportation, power, finance, emergency services.",
    policy_brief: "GPS dependency as critical infrastructure vulnerability. Backup resilience standards.",
    primary_buyer: "Critical infrastructure agencies, transportation systems, emergency management",
    secondary_stakeholders: "Financial markets, communications providers, military and defense",
    affected_public: "All sectors dependent on GPS: transportation, commerce, emergency services, utilities",
    core_data_inputs:
      "GPS dependency mapping, critical system list, backup system capacity, timing requirements",
    key_workflow:
      "Dependency audit → risk assessment → backup system selection → integration testing → activation protocol",
    demo_type: "GPS dependency mapper and backup contingency planner",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Critical,
    primary_disclaimer:
      "Framework supports contingency planning but does not replace critical infrastructure standards.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-11-gps-failure-contingency-backup-navigation",
    demo_url: "/frameworks/gps-failure-contingency-backup-navigation/demo",
    framework_url: "/frameworks/gps-failure-contingency-backup-navigation",
  },

  {
    framework_number: "12",
    framework_title: "Pediatric Neurodevelopmental Journey Map",
    slug: "pediatric-neurodevelopmental-journey-map",
    category: "Children & Development",
    enterprise_layer: "Early intervention evidence and care coordination",
    hidden_foundation:
      "Early intervention depends on evidence parents are rarely equipped to organize.",
    documented_research: "Research queue required - pediatric developmental milestones",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: pediatric clinics.",
    procurement_checklist:
      "Developmental screening integration. Referral coordination. Clinical data standards.",
    roi_calculator_logic:
      "Early identification rate x intervention speed x developmental outcome improvement x long-term cost savings.",
    pilot_guide: "Partner: pediatric clinic network. Track: screening rates, referral timeliness, outcomes.",
    policy_brief: "Developmental coordination as pediatric infrastructure standard.",
    primary_buyer: "Pediatric practices, school systems, early intervention programs",
    secondary_stakeholders:
      "Speech/occupational therapists, developmental specialists, school psychologists",
    affected_public: "Young children, parents navigating early development concerns, educational support systems",
    core_data_inputs:
      "Developmental milestones, screening results, specialist referrals, therapy history, school services",
    key_workflow:
      "Milestone tracking → screening coordination → specialist referral → therapy integration → school coordination",
    demo_type: "Developmental journey tracker and referral coordinator",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Low,
    primary_disclaimer:
      "Framework supports coordination but does not replace clinical or educational expertise.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-12-pediatric-neurodevelopmental-journey-map",
    demo_url: "/frameworks/pediatric-neurodevelopmental-journey-map/demo",
    framework_url: "/frameworks/pediatric-neurodevelopmental-journey-map",
  },

  {
    framework_number: "13",
    framework_title: "Strategic Grain Reserve & Local Food Security Buffer",
    slug: "strategic-grain-reserve-local-food-security",
    category: "Food Security",
    enterprise_layer: "Regional food continuity infrastructure",
    hidden_foundation: "A city with three days of food is not secure.",
    documented_research: "Research queue required - food supply chains, strategic reserves",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: municipalities.",
    procurement_checklist:
      "Grain storage. Local production capacity. Supply chain resilience. Distribution planning.",
    roi_calculator_logic:
      "Food security buffer maintained x supply disruption resilience x local production activated.",
    pilot_guide: "Partner: regional planning authority. Map: food supply days, reserve capacity, production gaps.",
    policy_brief:
      "Strategic grain reserves as regional food security infrastructure. Local production planning.",
    primary_buyer: "Municipalities, emergency management, regional planning authorities",
    secondary_stakeholders:
      "Agricultural producers, grain distributors, food logistics, public health",
    affected_public: "Urban and rural communities, vulnerable populations, emergency-dependent groups",
    core_data_inputs:
      "Population size, current food supply days, local production capacity, storage availability, supply chain data",
    key_workflow:
      "Food supply audit → reserve capacity assessment → local production planning → buffer construction → monitoring",
    demo_type: "Food security vulnerability assessor and strategic reserve planner",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.ReadyForPublicPreview,
    risk_level: RiskLevel.High,
    primary_disclaimer:
      "Framework supports planning but does not replace food safety and logistics expertise.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-13-strategic-grain-reserve-local-food-security",
    demo_url: "/frameworks/strategic-grain-reserve-local-food-security/demo",
    framework_url: "/frameworks/strategic-grain-reserve-local-food-security",
  },

  {
    framework_number: "14",
    framework_title: "Parole & Probation Compliance Tracker",
    slug: "parole-probation-compliance-tracker",
    category: "Justice & Reentry",
    enterprise_layer: "Supervision compliance and technical-violation prevention",
    hidden_foundation: "Technical violations should not become revolving doors.",
    documented_research: "Research queue required - supervision compliance data",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: supervision agencies.",
    procurement_checklist:
      "Compliance calendar. Requirement tracking. Escalation protocols. Supervisor coordination.",
    roi_calculator_logic:
      "Technical violations prevented x supervision efficiency x reentry success x incarceration reduction.",
    pilot_guide: "Partner: probation department. Track: violation rates, compliance trends, outcomes.",
    policy_brief: "Compliance support as supervision infrastructure. Technical violation prevention.",
    primary_buyer: "Probation departments, parole boards, criminal justice agencies",
    secondary_stakeholders: "Supervisors, support service providers, legal advocates",
    affected_public: "People on parole/probation, reentry success, communities",
    core_data_inputs:
      "Supervision requirements, compliance deadlines, schedule, support resources, violation history",
    key_workflow:
      "Requirements intake → calendar creation → reminder system → escalation protocol → reporting",
    demo_type: "Compliance calendar and requirement tracker",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Moderate,
    primary_disclaimer: "Supports but does not replace official supervision authority.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-14-parole-probation-compliance-tracker",
    demo_url: "/frameworks/parole-probation-compliance-tracker/demo",
    framework_url: "/frameworks/parole-probation-compliance-tracker",
  },

  {
    framework_number: "15",
    framework_title: "Chronic Pain Evidence Journal",
    slug: "chronic-pain-evidence-journal",
    category: "Patient-Owned Health",
    enterprise_layer: "Longitudinal symptom evidence and clinical preparation",
    hidden_foundation: "Pain should not have to become performance art to be believed.",
    documented_research: "Research queue required - chronic pain validation research",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: patient advocacy.",
    procurement_checklist:
      "Evidence collection system. Visit preparation tools. Clinical communication templates.",
    roi_calculator_logic:
      "Clinical validation rate x diagnosis speed x treatment optimization x patient outcomes improved.",
    pilot_guide:
      "Partner: chronic pain support group. Track: evidence collection, clinical interactions, outcomes.",
    policy_brief:
      "Patient evidence ownership as pain management infrastructure. Validation and clinical preparation.",
    primary_buyer: "Chronic pain clinics, pain management programs, patient advocacy organizations",
    secondary_stakeholders: "Rheumatologists, neurologists, pain specialists, behavioral health",
    affected_public: "People with chronic pain, especially overlooked or contested pain conditions",
    core_data_inputs:
      "Pain symptoms, triggers, impacts, treatments tried, lab results, clinical interactions",
    key_workflow:
      "Symptom tracking → evidence collection → visit preparation → clinical dialogue → outcome tracking",
    demo_type: "Chronic pain evidence journal and visit preparation tool",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Low,
    primary_disclaimer:
      "Tool for patient documentation and visit preparation. Not a diagnostic or treatment device.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-15-chronic-pain-evidence-journal",
    demo_url: "/frameworks/chronic-pain-evidence-journal/demo",
    framework_url: "/frameworks/chronic-pain-evidence-journal",
  },

  {
    framework_number: "16",
    framework_title: "Trades Workforce Pipeline & Apprenticeship Rebuild",
    slug: "trades-workforce-pipeline-apprenticeship",
    category: "Work & Production",
    enterprise_layer: "Skilled labor infrastructure",
    hidden_foundation: "The infrastructure boom cannot happen without the hands to build it.",
    documented_research: "Research queue required - skilled trades shortage data",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: workforce boards.",
    procurement_checklist:
      "Apprenticeship coordination. Employer partnerships. Training program mapping. Career pathway clarity.",
    roi_calculator_logic:
      "Apprentices placed x wage premiums x infrastructure labor availability x regional economic impact.",
    pilot_guide:
      "Partner: regional workforce board. Map: talent gaps, apprenticeship programs, employer demand.",
    policy_brief: "Trades workforce as infrastructure investment. Regional capacity planning.",
    primary_buyer: "Workforce development boards, apprenticeship programs, construction industry",
    secondary_stakeholders:
      "Construction employers, trade unions, community colleges, vocational programs",
    affected_public: "Young workers, career-changers, infrastructure-dependent communities",
    core_data_inputs:
      "Regional trade demand, apprenticeship capacity, training quality, wage outcomes, employer commitments",
    key_workflow:
      "Labor market analysis → gap identification → apprenticeship program audit → capacity building → placement",
    demo_type: "Trades workforce gap analyzer and pipeline builder",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Low,
    primary_disclaimer:
      "Framework supports workforce planning but does not replace training or labor standards.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-16-trades-workforce-pipeline-apprenticeship",
    demo_url: "/frameworks/trades-workforce-pipeline-apprenticeship/demo",
    framework_url: "/frameworks/trades-workforce-pipeline-apprenticeship",
  },

  {
    framework_number: "17",
    framework_title: "Asylum Evidence & Documentation Builder",
    slug: "asylum-evidence-documentation-builder",
    category: "Immigration & Displacement",
    enterprise_layer: "Protection evidence organization and case-prep infrastructure",
    hidden_foundation:
      "A person fleeing danger should not lose protection because their evidence was scattered.",
    documented_research: "Research queue required - asylum case documentation practices",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level1,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: legal aid.",
    procurement_checklist:
      "Evidence organization. Timeline documentation. Legal case preparation. Testimony support.",
    roi_calculator_logic: "Asylum grants approved x case success rate x evidence organization speed.",
    pilot_guide: "Partner: asylum legal aid. Track: case preparation speed, documentation quality.",
    policy_brief: "Evidence organization as immigration protection infrastructure. Case-prep support.",
    primary_buyer: "Asylum legal aid organizations, immigration courts, protection agencies",
    secondary_stakeholders: "Immigration attorneys, human rights organizations, documentation services",
    affected_public: "Asylum seekers, protection applicants, displaced persons",
    core_data_inputs:
      "Evidence collection, persecutor information, country conditions, personal history, legal documentation",
    key_workflow:
      "Evidence intake → organization → timeline building → legal case prep → court presentation support",
    demo_type: "Asylum evidence organizer and case preparation tool",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Moderate,
    primary_disclaimer: "Supports case preparation but does not replace legal representation.",
    source_status: SourceStatus.NotYetSourced,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-17-asylum-evidence-documentation-builder",
    demo_url: "/frameworks/asylum-evidence-documentation-builder/demo",
    framework_url: "/frameworks/asylum-evidence-documentation-builder",
  },

  {
    framework_number: "18",
    framework_title: "Pollinator Collapse Buffer & Alternative Pollination Framework",
    slug: "pollinator-collapse-buffer-alternative-pollination",
    category: "Ecological Tipping Points",
    enterprise_layer: "Crop pollination risk and food-system resilience",
    hidden_foundation: "The smallest workers hold up the food system.",
    documented_research: "Research queue required - pollinator science, crop pollination dependency",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: agricultural regions.",
    procurement_checklist:
      "Pollinator habitat mapping. Crop pollination dependency assessment. Alternative pollination planning.",
    roi_calculator_logic:
      "Crop pollination secured x habitat resilience x agricultural continuity x food security value.",
    pilot_guide: "Partner: agricultural region. Map: pollinator habitat, crop dependencies, risk areas.",
    policy_brief:
      "Pollinator protection as food security infrastructure. Regional resilience planning.",
    primary_buyer: "Agricultural extension agencies, farming organizations, conservation districts",
    secondary_stakeholders:
      "Crop producers, environmental agencies, pollinator research, ecological restoration",
    affected_public: "Farmers, food consumers, ecosystems dependent on pollination",
    core_data_inputs:
      "Crop types and pollination needs, pollinator habitat, risk factors, habitat restoration opportunities",
    key_workflow:
      "Pollinator audit → crop dependency mapping → habitat assessment → restoration planning → monitoring",
    demo_type: "Pollinator risk mapper and habitat restoration planner",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.High,
    primary_disclaimer:
      "Framework supports planning but does not replace ecological or agricultural expertise.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-18-pollinator-collapse-buffer-alternative-pollination",
    demo_url: "/frameworks/pollinator-collapse-buffer-alternative-pollination/demo",
    framework_url: "/frameworks/pollinator-collapse-buffer-alternative-pollination",
  },

  {
    framework_number: "19",
    framework_title: "Copper Constraint & Electrification Material Flow Framework",
    slug: "copper-constraint-electrification-material-flow",
    category: "Energy Transition Materials",
    enterprise_layer: "Electrification material intelligence",
    hidden_foundation: "You cannot electrify the future without accounting for the metal.",
    documented_research: "Research queue required - copper supply, electrification demand projections",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: energy planners.",
    procurement_checklist:
      "Copper demand analysis. Supply chain mapping. Material substitution. Recycling infrastructure.",
    roi_calculator_logic:
      "Electrification material supply secured x substitution pathways x cost optimization.",
    pilot_guide: "Partner: energy planning agency. Map: copper demand, supply gaps, substitution options.",
    policy_brief:
      "Material flow planning as electrification infrastructure. Supply risk and substitution strategy.",
    primary_buyer: "Energy planning agencies, utilities, infrastructure planners",
    secondary_stakeholders:
      "Mining companies, material science, recycling infrastructure, equipment manufacturers",
    affected_public: "Communities dependent on electricity, energy transition implementation",
    core_data_inputs:
      "Electrification targets, copper demand projections, supply sources, recycling capacity, substitution options",
    key_workflow:
      "Demand forecasting → supply analysis → substitution assessment → procurement planning → recycling integration",
    demo_type: "Material flow planner for electrification",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Moderate,
    primary_disclaimer:
      "Framework supports material planning but does not replace engineering or supply-chain expertise.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-19-copper-constraint-electrification-material-flow",
    demo_url: "/frameworks/copper-constraint-electrification-material-flow/demo",
    framework_url: "/frameworks/copper-constraint-electrification-material-flow",
  },

  {
    framework_number: "20",
    framework_title: "Distributed Manufacturing & Local Production Network",
    slug: "distributed-manufacturing-local-production-network",
    category: "Supply Chain Resilience",
    enterprise_layer: "Regional production capacity and critical goods resilience",
    hidden_foundation: "Efficiency without resilience is just fragility with better branding.",
    documented_research: "Research queue required - supply chain vulnerability, local production capacity",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: regional planners.",
    procurement_checklist:
      "Local production mapping. Critical goods assessment. Manufacturing capacity. Network coordination.",
    roi_calculator_logic:
      "Supply disruption resilience x critical goods availability x regional economic strength.",
    pilot_guide: "Partner: regional planning authority. Map: critical goods gaps, local capacity.",
    policy_brief:
      "Local production capacity as supply chain infrastructure. Regional manufacturing resilience.",
    primary_buyer: "Regional economic development, municipal planning, emergency management",
    secondary_stakeholders:
      "Manufacturing businesses, supply chain logistics, economic development agencies",
    affected_public: "Communities dependent on supply chains, workers, essential goods consumers",
    core_data_inputs:
      "Critical goods list, supply chain vulnerabilities, local production capacity, manufacturing capability",
    key_workflow:
      "Critical goods mapping → supply vulnerability audit → local production assessment → network building → coordination",
    demo_type: "Critical goods mapper and production network planner",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Moderate,
    primary_disclaimer:
      "Framework supports planning but does not replace supply-chain or economic expertise.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-20-distributed-manufacturing-local-production-network",
    demo_url: "/frameworks/distributed-manufacturing-local-production-network/demo",
    framework_url: "/frameworks/distributed-manufacturing-local-production-network",
  },

  {
    framework_number: "21",
    framework_title: "Kinship Care Grandfamily Support Infrastructure",
    slug: "kinship-care-grandfamily-support-infrastructure",
    category: "Family & Care Burdens",
    enterprise_layer: "Informal caregiver support and benefits navigation",
    hidden_foundation: "Grandparents are raising children inside systems that do not see them as parents.",
    documented_research: "Research queue required - kinship care statistics and support systems",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: social services.",
    procurement_checklist:
      "Benefits eligibility navigation. Legal documentation. Support service coordination. Financial assistance.",
    roi_calculator_logic:
      "Child welfare outcomes improved x caregiver support x kinship stability x system efficiency.",
    pilot_guide:
      "Partner: family services agency. Track: kinship caregiver support, benefits access, family outcomes.",
    policy_brief:
      "Kinship care as family support infrastructure. Formal recognition and system integration.",
    primary_buyer: "Child welfare agencies, family services, social services",
    secondary_stakeholders:
      "Kinship navigator programs, legal aid, benefits agencies, support organizations",
    affected_public: "Grandparents raising grandchildren, informal kinship caregivers, children",
    core_data_inputs:
      "Family situation, child information, legal status, benefits eligibility, support needs",
    key_workflow:
      "Intake → eligibility assessment → benefits navigation → legal documentation → support coordination",
    demo_type: "Kinship care support and benefits navigator",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Low,
    primary_disclaimer: "Supports but does not replace official child welfare or legal services.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-21-kinship-care-grandfamily-support-infrastructure",
    demo_url: "/frameworks/kinship-care-grandfamily-support-infrastructure/demo",
    framework_url: "/frameworks/kinship-care-grandfamily-support-infrastructure",
  },

  {
    framework_number: "22",
    framework_title: "Ocean Dead Zone Reversal & Hypoxia Recovery Framework",
    slug: "ocean-dead-zone-reversal-hypoxia-recovery",
    category: "Ecological Recovery",
    enterprise_layer: "Watershed-to-coast nutrient reduction and fisheries recovery",
    hidden_foundation: "The runoff upstream becomes the silence underwater.",
    documented_research: "Research queue required - dead zone science, watershed nutrient management",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: coastal regions.",
    procurement_checklist:
      "Watershed nutrient audit. Agricultural runoff reduction. Coastal habitat restoration. Fisheries recovery.",
    roi_calculator_logic:
      "Dead zone reduction x fisheries recovery x coastal ecosystem health x economic resilience.",
    pilot_guide:
      "Partner: coastal region. Map: nutrient sources, watershed impacts, recovery opportunities.",
    policy_brief: "Hypoxia reversal as watershed and coastal infrastructure. Ecosystem recovery.",
    primary_buyer: "Coastal management, fisheries agencies, environmental protection",
    secondary_stakeholders:
      "Agricultural agencies, watershed management, marine science, fisheries communities",
    affected_public: "Coastal communities, fisheries workers, marine ecosystems",
    core_data_inputs:
      "Nutrient sources, agricultural practices, coastal conditions, fisheries data, recovery potential",
    key_workflow:
      "Dead zone assessment → source tracking → intervention planning → agricultural partnership → monitoring",
    demo_type: "Dead zone mapper and recovery planner",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.High,
    primary_disclaimer:
      "Framework supports planning but does not replace ecological or agricultural expertise.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-22-ocean-dead-zone-reversal-hypoxia-recovery",
    demo_url: "/frameworks/ocean-dead-zone-reversal-hypoxia-recovery/demo",
    framework_url: "/frameworks/ocean-dead-zone-reversal-hypoxia-recovery",
  },

  {
    framework_number: "23",
    framework_title: "Elder Financial Abuse Detection & Response System",
    slug: "elder-financial-abuse-detection-response",
    category: "Aging & Protection",
    enterprise_layer: "Financial exploitation detection and response coordination",
    hidden_foundation: "Exploitation often wears the face of someone trusted.",
    documented_research: "Research queue required - elder abuse statistics, detection research",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: aging services.",
    procurement_checklist:
      "Risk detection. Response coordination. Legal options. Protective documentation. Financial recovery.",
    roi_calculator_logic: "Abuse cases identified x elder protection x financial recovery x prevention.",
    pilot_guide: "Partner: elder services. Track: detection rates, response speed, protective outcomes.",
    policy_brief:
      "Financial abuse detection as aging protection infrastructure. Coordinated response systems.",
    primary_buyer: "Adult protective services, aging agencies, financial institutions",
    secondary_stakeholders: "Law enforcement, legal aid, financial recovery services, elder advocacy",
    affected_public: "Older adults, family members, caregivers",
    core_data_inputs:
      "Financial activity, relationship changes, cognitive status, spending patterns, trusted contact information",
    key_workflow:
      "Risk assessment → detection → protective intervention → legal options → financial recovery planning",
    demo_type: "Elder financial risk detector and response coordinator",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Moderate,
    primary_disclaimer: "Supports but does not replace protective services or legal intervention.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-23-elder-financial-abuse-detection-response",
    demo_url: "/frameworks/elder-financial-abuse-detection-response/demo",
    framework_url: "/frameworks/elder-financial-abuse-detection-response",
  },

  {
    framework_number: "24",
    framework_title: "Domestic Violence Exit & Safety Documentation System",
    slug: "domestic-violence-exit-safety-documentation",
    category: "Safety & Abuse Response",
    enterprise_layer: "Survivor safety planning and evidence documentation",
    hidden_foundation: "Leaving safely is not one decision; it is an infrastructure problem.",
    documented_research: "Research queue required - safety planning and survivor research",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: DV organizations.",
    procurement_checklist:
      "Safety planning. Evidence documentation. Legal coordination. Shelter access. Protective orders.",
    roi_calculator_logic:
      "Successful exits achieved x safety maintained x legal protection secured x long-term stability.",
    pilot_guide:
      "Partner: DV service provider. Track: safety plan completeness, exit success, survivor outcomes.",
    policy_brief: "Survivor safety as infrastructure. Coordinated exit support systems.",
    primary_buyer: "Domestic violence organizations, shelters, legal services",
    secondary_stakeholders:
      "Law enforcement, courts, housing providers, employment assistance, counseling services",
    affected_public: "Survivors of domestic violence, children, family support systems",
    core_data_inputs:
      "Safety concerns, protective orders, financial needs, housing options, employment barriers, children",
    key_workflow:
      "Safety assessment → planning → documentation → legal coordination → exit support → stabilization",
    demo_type: "Safety planner and evidence documentation tool",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.High,
    primary_disclaimer:
      "Supports safety planning but does not replace DV services or legal representation.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-24-domestic-violence-exit-safety-documentation",
    demo_url: "/frameworks/domestic-violence-exit-safety-documentation/demo",
    framework_url: "/frameworks/domestic-violence-exit-safety-documentation",
  },

  {
    framework_number: "25",
    framework_title: "Solar Panel & Wind Turbine End-of-Life Recovery Framework",
    slug: "solar-wind-end-of-life-recovery-framework",
    category: "Circular Economy",
    enterprise_layer: "Renewable asset recovery and material circularity",
    hidden_foundation: "Solving one crisis should not create the next waste crisis.",
    documented_research: "Research queue required - renewable waste and recycling science",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: renewable operators.",
    procurement_checklist:
      "Asset tracking. Lifecycle planning. Recycling partnerships. Material recovery. Regulatory compliance.",
    roi_calculator_logic:
      "Asset lifecycle optimized x material recovery value x waste diversion x circular economy return.",
    pilot_guide:
      "Partner: renewable energy operator. Map: asset ages, end-of-life timelines, recovery options.",
    policy_brief:
      "Renewable asset circularity as sustainability infrastructure. End-of-life responsibility.",
    primary_buyer: "Renewable energy companies, waste management, circular economy programs",
    secondary_stakeholders:
      "Material recovery companies, recyclers, environmental agencies, technology manufacturers",
    affected_public: "Energy consumers, waste communities, environmental health",
    core_data_inputs:
      "Solar/wind asset information, installation dates, degradation rates, end-of-life timelines, material composition",
    key_workflow:
      "Asset inventory → lifecycle forecasting → recovery planning → recycler partnership → material tracking",
    demo_type: "Renewable asset lifecycle and recovery planner",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.Drafted,
    risk_level: RiskLevel.Low,
    primary_disclaimer:
      "Framework supports planning but does not replace recycling or environmental compliance expertise.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-25-solar-wind-end-of-life-recovery-framework",
    demo_url: "/frameworks/solar-wind-end-of-life-recovery-framework/demo",
    framework_url: "/frameworks/solar-wind-end-of-life-recovery-framework",
  },

  {
    framework_number: "26",
    framework_title: "School-to-Prison Pipeline Disruption Framework",
    slug: "school-to-prison-pipeline-disruption",
    category: "Youth & Justice",
    enterprise_layer: "School discipline escalation prevention and youth protection",
    hidden_foundation: "Some children are disciplined into systems they should have been protected from.",
    documented_research: "Research queue required - school discipline and pipeline data",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: school systems.",
    procurement_checklist:
      "Discipline data systems. Alternative discipline tracking. Intervention pathways. Youth advocacy.",
    roi_calculator_logic:
      "Youth diversions from justice system x educational outcomes x opportunity creation x long-term cost savings.",
    pilot_guide: "Partner: school system. Map: discipline patterns, escalation points, alternatives.",
    policy_brief:
      "Discipline-to-justice prevention as education infrastructure. Alternative accountability systems.",
    primary_buyer: "School districts, youth justice systems, education policy makers",
    secondary_stakeholders:
      "Youth advocacy organizations, law enforcement, probation departments, social services",
    affected_public: "Students, especially young people of color and those with disabilities",
    core_data_inputs:
      "School discipline data, suspension/expulsion patterns, justice referrals, demographic trends, alternative program availability",
    key_workflow:
      "Data analysis → pipeline identification → intervention design → accountability shifts → outcomes measurement",
    demo_type: "School discipline analyzer and intervention mapper",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.ReadyForPublicPreview,
    risk_level: RiskLevel.Moderate,
    primary_disclaimer:
      "Framework supports data analysis but does not replace educational or legal expertise.",
    source_status: SourceStatus.SourceVerified,
    public_claim_status: PublicClaimStatus.SafeToPublish,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-26-school-to-prison-pipeline-disruption",
    demo_url: "/frameworks/school-to-prison-pipeline-disruption/demo",
    framework_url: "/frameworks/school-to-prison-pipeline-disruption",
  },

  {
    framework_number: "27",
    framework_title: "Intercity Rail Revival & Sleeper Train Network",
    slug: "intercity-rail-revival-sleeper-train-network",
    category: "Mobility & Public Infrastructure",
    enterprise_layer: "Regional passenger mobility and corridor planning",
    hidden_foundation: "A serious country should move people without making every trip a punishment.",
    documented_research: "Research queue required - rail viability and corridor planning",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: transit planners.",
    procurement_checklist:
      "Corridor viability. Infrastructure assessment. Operating model. Service design. Investment planning.",
    roi_calculator_logic: "Passenger demand served x corridor economic activation x environmental impact.",
    pilot_guide: "Partner: transit authority. Assess: corridor viability, demand, infrastructure needs.",
    policy_brief: "Rail infrastructure as regional mobility and economic development strategy.",
    primary_buyer: "Department of Transportation, transit authorities, regional planning",
    secondary_stakeholders:
      "Rail operators, infrastructure investors, environmental agencies, economic development",
    affected_public: "Travelers, especially regional and long-distance commuters",
    core_data_inputs:
      "Corridor demand, population centers, existing infrastructure, environmental impacts, economic opportunity",
    key_workflow:
      "Market analysis → corridor selection → feasibility study → operating model → financing planning",
    demo_type: "Rail corridor analyzer and network planner",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.ReadyForInternalReview,
    pilot_readiness: ReadinessStatus.ReadyForPublicPreview,
    policy_readiness: ReadinessStatus.ReadyForPublicPreview,
    risk_level: RiskLevel.High,
    primary_disclaimer:
      "Framework supports planning but does not replace transportation engineering or economic analysis.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-27-intercity-rail-revival-sleeper-train-network",
    demo_url: "/frameworks/intercity-rail-revival-sleeper-train-network/demo",
    framework_url: "/frameworks/intercity-rail-revival-sleeper-train-network",
  },

  {
    framework_number: "28",
    framework_title: "Human Lifespan Extension & Longevity Society Framework",
    slug: "human-lifespan-extension-longevity-society",
    category: "Future Governance",
    enterprise_layer: "Institutional planning for longer lives",
    hidden_foundation:
      "If longer life is coming, society must prepare before only the wealthy inherit time.",
    documented_research: "Research queue required - longevity science and societal impact projections",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level1,
    implementation_roadmap: "Concept structured. Demo preview. Repo ready. Testing: policy institutions.",
    procurement_checklist:
      "Longevity impact mapping. Institutional readiness assessment. Equity planning. Policy development.",
    roi_calculator_logic: "Societal resilience to longevity transitions x equity maintained x opportunity.",
    pilot_guide: "Partner: policy institution. Map: longevity scenarios, institutional readiness gaps.",
    policy_brief: "Longevity governance as institutional planning infrastructure. Equitable transition.",
    primary_buyer: "Policy institutions, government planning, educational institutions",
    secondary_stakeholders:
      "Health systems, pension authorities, labor agencies, social policy research",
    affected_public: "All populations affected by potential lifespan extension",
    core_data_inputs:
      "Longevity scenarios, institutional capacity, equity frameworks, policy gaps, transition risks",
    key_workflow:
      "Scenario building → institutional impact assessment → readiness mapping → policy planning → transition strategy",
    demo_type: "Longevity scenario planner and institutional readiness assessor",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.Drafted,
    pilot_readiness: ReadinessStatus.Drafted,
    policy_readiness: ReadinessStatus.ReadyForPublicPreview,
    risk_level: RiskLevel.Moderate,
    primary_disclaimer:
      "Framework supports scenario planning but does not replace specialized longevity expertise.",
    source_status: SourceStatus.NotYetSourced,
    public_claim_status: PublicClaimStatus.NeedsSoftening,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-28-human-lifespan-extension-longevity-society",
    demo_url: "/frameworks/human-lifespan-extension-longevity-society/demo",
    framework_url: "/frameworks/human-lifespan-extension-longevity-society",
  },

  {
    framework_number: "29",
    framework_title: "Solar Geoengineering Governance Framework",
    slug: "solar-geoengineering-governance-framework",
    category: "Planetary Risk Governance",
    enterprise_layer: "Pre-deployment governance, moratorium, and public consent infrastructure",
    hidden_foundation: "Governance must precede deployment.",
    documented_research: "Research queue required - geoengineering governance literature",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap:
      "Concept structured. Demo preview. Repo ready. Testing: international policy institutions.",
    procurement_checklist:
      "Governance frameworks. Consent infrastructure. Moratorium support. Risk assessment. International coordination.",
    roi_calculator_logic: "Responsible governance frameworks established x dangerous deployment prevented.",
    pilot_guide: "Partner: policy institution. Map: governance gaps, consent frameworks, risk assessments.",
    policy_brief: "Pre-deployment geoengineering governance as planetary risk infrastructure.",
    primary_buyer: "International policy institutions, environmental agencies, UN frameworks",
    secondary_stakeholders:
      "Climate research, risk assessment experts, indigenous groups, public advocacy",
    affected_public: "Global population affected by potential geoengineering deployment",
    core_data_inputs:
      "Geoengineering proposals, governance gaps, consent frameworks, risk assessments, international law",
    key_workflow:
      "Governance gap analysis → consent framework design → moratorium support → risk assessment → international coordination",
    demo_type: "Geoengineering governance framework and pre-deployment checklist",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.Drafted,
    pilot_readiness: ReadinessStatus.Drafted,
    policy_readiness: ReadinessStatus.ReadyForPublicPreview,
    risk_level: RiskLevel.Critical,
    primary_disclaimer:
      "Framework supports governance planning but does not replace climate or policy expertise.",
    source_status: SourceStatus.NotYetSourced,
    public_claim_status: PublicClaimStatus.NeedsSoftening,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-29-solar-geoengineering-governance-framework",
    demo_url: "/frameworks/solar-geoengineering-governance-framework/demo",
    framework_url: "/frameworks/solar-geoengineering-governance-framework",
  },

  {
    framework_number: "30",
    framework_title: "Orbital Debris Tracking & Collision Governance Framework",
    slug: "orbital-debris-tracking-collision-governance",
    category: "Space Infrastructure Continuity",
    enterprise_layer: "Orbital commons risk management and collision accountability",
    hidden_foundation: "One collision can turn orbit into a minefield.",
    documented_research: "Research queue required - orbital debris tracking and collision science",
    statistics: "Needs source verification",
    economic_impact: "Needs source verification",
    evidence_confidence: EvidenceConfidenceLevel.Level2,
    implementation_roadmap:
      "Concept structured. Demo preview. Repo ready. Testing: space agencies and operators.",
    procurement_checklist:
      "Debris tracking. Collision prevention. Governance frameworks. Operator accountability. Commons management.",
    roi_calculator_logic: "Orbital safety maintained x space infrastructure continuity x economic value protected.",
    pilot_guide: "Partner: space agency. Map: debris tracking capability, collision risks, governance gaps.",
    policy_brief: "Orbital commons management as space infrastructure governance.",
    primary_buyer: "Space agencies, satellite operators, international coordination bodies",
    secondary_stakeholders:
      "Space debris research, collision modeling, insurance, international law",
    affected_public: "Global users dependent on orbital infrastructure: communications, GPS, earth observation",
    core_data_inputs:
      "Debris catalog, operational satellites, collision risk assessments, governance frameworks, operator data",
    key_workflow:
      "Debris tracking → collision risk analysis → governance framework design → operator coordination → accountability",
    demo_type: "Orbital debris tracker and collision governance framework",
    maturity_status: "Concept Structured, Demo Preview, Repo Ready",
    procurement_readiness: ReadinessStatus.Drafted,
    pilot_readiness: ReadinessStatus.Drafted,
    policy_readiness: ReadinessStatus.ReadyForPublicPreview,
    risk_level: RiskLevel.Critical,
    primary_disclaimer:
      "Framework supports governance planning but does not replace orbital mechanics or space-law expertise.",
    source_status: SourceStatus.SourceIdentified,
    public_claim_status: PublicClaimStatus.NeedsCitation,
    github_repo_url: "https://github.com/thehustleisholy-ship-it/framework-30-orbital-debris-tracking-collision-governance",
    demo_url: "/frameworks/orbital-debris-tracking-collision-governance/demo",
    framework_url: "/frameworks/orbital-debris-tracking-collision-governance",
  },
];

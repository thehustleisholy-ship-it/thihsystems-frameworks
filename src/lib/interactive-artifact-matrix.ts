/**
 * Interactive Artifact Matrix
 * Defines interactive tools, calculators, simulators, and dashboards for all 30 frameworks.
 * Used for planning, build sequencing, and development guidance.
 */

export type ArtifactType =
  | "calculator"
  | "assessor"
  | "simulator"
  | "navigator"
  | "mapper"
  | "dashboard"
  | "planner"
  | "explorer"
  | "matcher"
  | "auditor";

export type PrimaryUser =
  | "institutions"
  | "operators"
  | "policymakers"
  | "funders"
  | "builders"
  | "public"
  | "patients"
  | "workers"
  | "refugees"
  | "communities"
  | "facility-managers"
  | "administrators"
  | "advocates"
  | "providers";

export type BuildDifficulty = "low" | "medium" | "high";
export type RiskLevel = "low" | "medium" | "high";
export type DisclaimerType =
  | "conceptual"
  | "pending-research"
  | "source-needs-verification"
  | "not-medical-advice"
  | "not-legal-advice"
  | "not-financial-advice"
  | "not-guaranteed-outcomes"
  | "simulation-only";
export type DevelopmentStatus = "planned" | "high-priority" | "medium-priority" | "deferred";

export interface InteractiveArtifact {
  framework_number: string;
  framework_title: string;
  framework_slug: string;
  artifact_type: ArtifactType;
  primary_user: PrimaryUser[];
  core_question: string;
  required_inputs: string[];
  generated_outputs: string[];
  learning_opportunity: string;
  build_difficulty: BuildDifficulty;
  risk_level: RiskLevel;
  disclaimer_type: DisclaimerType[];
  growth_hook: string;
  proposed_route: string;
  dev_status: DevelopmentStatus;
  estimated_hours?: number;
  domain_expertise_required: string[];
  partner_model?: "validation" | "pilot" | "vendor" | "policy" | "research";
}

export const interactiveArtifactMatrix: InteractiveArtifact[] = [
  {
    framework_number: "01",
    framework_title: "Women's Health Longitudinal Dashboard",
    framework_slug: "womens-health-longitudinal-dashboard",
    artifact_type: "dashboard",
    primary_user: ["patients", "providers"],
    core_question:
      "How do my symptoms correlate with my cycle, and what context should I bring to my clinician?",
    required_inputs: ["Symptom logs", "Cycle date", "Medications", "Life events", "Clinical questions"],
    generated_outputs: ["Exportable visit-ready report", "Symptom correlation graph", "Readiness assessment"],
    learning_opportunity:
      "Identify most-reported symptom patterns, tracking behaviors, clinical integration points",
    build_difficulty: "medium",
    risk_level: "low",
    disclaimer_type: ["not-medical-advice"],
    growth_hook: "EHR vendor integration roadmap, clinical research partnership potential",
    proposed_route: "/frameworks/womens-health-longitudinal-dashboard/tool",
    dev_status: "planned",
    estimated_hours: 80,
    domain_expertise_required: ["gynecology", "data visualization", "privacy-first architecture"],
    partner_model: "validation",
  },
  {
    framework_number: "02",
    framework_title: "Job-Loss & Income-Shock Stabilizer",
    framework_slug: "job-loss-income-shock-stabilizer",
    artifact_type: "calculator",
    primary_user: ["workers", "public"],
    core_question:
      "What is my total available income replacement, in what sequence, and when do I hit the benefits cliff?",
    required_inputs: [
      "Prior income",
      "State",
      "Family size",
      "UI eligibility",
      "Existing assets",
      "Debt",
    ],
    generated_outputs: ["Personalized 30-day income roadmap", "Cliff analysis", "Next-action checklist"],
    learning_opportunity:
      "Actual benefits-cliff gaps, state-by-state variation, decision barriers, reemployment pathways",
    build_difficulty: "high",
    risk_level: "medium",
    disclaimer_type: ["not-legal-advice"],
    growth_hook: "State workforce board partnership, employer transition program integration",
    proposed_route: "/frameworks/job-loss-income-shock-stabilizer/calculator",
    dev_status: "high-priority",
    estimated_hours: 120,
    domain_expertise_required: ["state-benefits-law", "financial-modeling", "UX-design"],
    partner_model: "policy",
  },
  {
    framework_number: "03",
    framework_title: "Returning Citizen Reentry Roadmap",
    framework_slug: "returning-citizen-reentry-roadmap",
    artifact_type: "planner",
    primary_user: ["advocates", "public"],
    core_question:
      "What are my reentry barriers by life domain, and what's my mitigation sequence?",
    required_inputs: [
      "Custody status",
      "Employment barriers",
      "Housing history",
      "Debt",
      "Family status",
      "County/state",
    ],
    generated_outputs: [
      "Prioritized barrier-mitigation roadmap",
      "Community resource links",
      "Timeline projection",
    ],
    learning_opportunity:
      "Most-severe barrier patterns, regional variation, program effectiveness data points",
    build_difficulty: "high",
    risk_level: "high",
    disclaimer_type: ["not-legal-advice"],
    growth_hook: "Criminal justice partnership, reentry nonprofit integration, outcomes tracking consortium",
    proposed_route: "/frameworks/returning-citizen-reentry-roadmap/planner",
    dev_status: "planned",
    estimated_hours: 140,
    domain_expertise_required: ["criminal-justice", "social-services", "data-privacy"],
    partner_model: "research",
  },
  {
    framework_number: "04",
    framework_title: "Water-Stressed Agricultural Financing",
    framework_slug: "water-stressed-agricultural-financing",
    artifact_type: "simulator",
    primary_user: ["operators", "institutions"],
    core_question:
      "Which water-adaptation investment has best ROI under drought scenarios?",
    required_inputs: [
      "Farm acreage",
      "Current water source",
      "Climate data",
      "Crop mix",
      "Debt load",
      "Available capital",
    ],
    generated_outputs: [
      "Multi-scenario ROI comparison",
      "Water-sustainability projection",
      "Financing pathway",
    ],
    learning_opportunity:
      "Farmer financing behavior, technology adoption barriers, regional climate/economics mismatch",
    build_difficulty: "high",
    risk_level: "medium",
    disclaimer_type: ["not-financial-advice", "source-needs-verification"],
    growth_hook: "USDA partnership, agricultural lending consortium integration",
    proposed_route: "/frameworks/water-stressed-agricultural-financing/modeler",
    dev_status: "medium-priority",
    estimated_hours: 160,
    domain_expertise_required: ["agricultural-economics", "hydrology", "climate-science"],
    partner_model: "policy",
  },
  {
    framework_number: "05",
    framework_title: "Hospital Grid-Independence & Resilience",
    framework_slug: "hospital-grid-independence-resilience",
    artifact_type: "calculator",
    primary_user: ["facility-managers", "institutions"],
    core_question:
      "What backup power capacity do I need to maintain critical care during grid outage?",
    required_inputs: [
      "Current load profile",
      "Patient census",
      "Backup system type",
      "Failure history",
      "Capital budget",
    ],
    generated_outputs: [
      "Required microgrid capacity",
      "ROI projection",
      "Phased implementation roadmap",
    ],
    learning_opportunity:
      "Critical-load patterns, outage impacts on patient outcomes, technology cost trends",
    build_difficulty: "high",
    risk_level: "high",
    disclaimer_type: ["conceptual"],
    growth_hook: "Hospital association partnership, microgrid vendor collaboration, resilience certification",
    proposed_route: "/frameworks/hospital-grid-independence-resilience/calculator",
    dev_status: "high-priority",
    estimated_hours: 140,
    domain_expertise_required: ["electrical-engineering", "healthcare-operations", "modeling"],
    partner_model: "validation",
  },
  {
    framework_number: "06",
    framework_title: "Critical-Coordination Emergency Response",
    framework_slug: "critical-coordination-emergency-response",
    artifact_type: "simulator",
    primary_user: ["policymakers", "institutions"],
    core_question: "How do we sequence agency responses to minimize civilian harm?",
    required_inputs: [
      "Local agency rosters",
      "Resource inventory",
      "Infrastructure interdependencies",
      "Scenario type",
    ],
    generated_outputs: [
      "Optimized dispatch sequence",
      "Resource allocation",
      "Inter-agency communication protocol",
    ],
    learning_opportunity:
      "Real coordination bottlenecks, resource gaps, agency-to-agency friction points",
    build_difficulty: "high",
    risk_level: "high",
    disclaimer_type: ["simulation-only"],
    growth_hook: "FEMA partnership, emergency management training integration, after-action data collection",
    proposed_route: "/frameworks/critical-coordination-emergency-response/simulator",
    dev_status: "deferred",
    estimated_hours: 200,
    domain_expertise_required: ["emergency-management", "operations-research", "simulation"],
    partner_model: "policy",
  },
  {
    framework_number: "07",
    framework_title: "Institutional Stabilization & Ecosystem Recovery",
    framework_slug: "institutional-stabilization-ecosystem-recovery",
    artifact_type: "assessor",
    primary_user: ["institutions", "policymakers"],
    core_question: "What are my institutional vulnerabilities, and what's my recovery sequencing?",
    required_inputs: [
      "Financial state",
      "Staff retention",
      "Stakeholder trust signals",
      "Debt",
      "Governance health",
    ],
    generated_outputs: [
      "Vulnerability audit",
      "Recovery priority roadmap",
      "Stakeholder communication strategy",
    ],
    learning_opportunity:
      "Institutional fragility patterns, recovery time windows, stakeholder confidence signals",
    build_difficulty: "medium",
    risk_level: "medium",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Board governance training, institutional development consulting, crisis-response protocol library",
    proposed_route: "/frameworks/institutional-stabilization-ecosystem-recovery/assessment",
    dev_status: "planned",
    estimated_hours: 80,
    domain_expertise_required: ["organizational-development", "governance", "business-strategy"],
    partner_model: "pilot",
  },
  {
    framework_number: "08",
    framework_title: "Workplace-Injury Prevention & Claims Management",
    framework_slug: "workplace-injury-prevention-claims-management",
    artifact_type: "assessor",
    primary_user: ["operators", "institutions"],
    core_question:
      "Which workplace hazards pose the highest injury/claims risk?",
    required_inputs: [
      "Industry",
      "Employee count",
      "Equipment inventory",
      "Injury history",
      "Current safety protocols",
    ],
    generated_outputs: [
      "Hazard risk ranking",
      "Specific mitigation actions",
      "Implementation roadmap",
      "Cost/benefit",
    ],
    learning_opportunity:
      "Industry-specific hazard patterns, effectiveness of mitigation strategies, ROI data",
    build_difficulty: "medium",
    risk_level: "medium",
    disclaimer_type: ["not-legal-advice"],
    growth_hook: "OSHA partnership, workers'-comp insurer collaboration, safety-training vendor integration",
    proposed_route: "/frameworks/workplace-injury-prevention-claims-management/assessor",
    dev_status: "high-priority",
    estimated_hours: 100,
    domain_expertise_required: ["occupational-safety", "risk-assessment", "UX-design"],
    partner_model: "validation",
  },
  {
    framework_number: "09",
    framework_title: "Reproductive-Justice Infrastructure",
    framework_slug: "reproductive-justice-infrastructure",
    artifact_type: "navigator",
    primary_user: ["public", "advocates"],
    core_question:
      "Where can I access the care I need, what does it cost, how do I get there safely?",
    required_inputs: [
      "Current location",
      "Type of care needed",
      "Financial constraints",
      "Accessibility needs",
    ],
    generated_outputs: [
      "Accessible providers within reachable distance",
      "Cost estimate",
      "Travel/logistics plan",
      "Funding options",
    ],
    learning_opportunity:
      "Real geographic/financial access barriers, provider networks, funding gap patterns",
    build_difficulty: "high",
    risk_level: "high",
    disclaimer_type: ["not-medical-advice"],
    growth_hook: "Reproductive justice nonprofit partnership, provider network integration, funding-program aggregation",
    proposed_route: "/frameworks/reproductive-justice-infrastructure/navigator",
    dev_status: "planned",
    estimated_hours: 120,
    domain_expertise_required: ["data-privacy", "legal-variation", "healthcare-access"],
    partner_model: "pilot",
  },
  {
    framework_number: "10",
    framework_title: "Managed Aquifer Recharge & Underground Water Banking",
    framework_slug: "managed-aquifer-recharge-water-banking",
    artifact_type: "simulator",
    primary_user: ["operators", "institutions", "policymakers"],
    core_question:
      "Is my aquifer recharge-viable, and what's the yield/cost under drought scenarios?",
    required_inputs: [
      "Geology data",
      "Water source",
      "Recharge location",
      "Climate scenario",
      "Current extraction rate",
    ],
    generated_outputs: [
      "Feasibility assessment",
      "20-year yield projection",
      "Cost model",
      "Implementation roadmap",
    ],
    learning_opportunity:
      "Regional aquifer viability, recharge-efficiency by geology, climate-impact variations",
    build_difficulty: "high",
    risk_level: "medium",
    disclaimer_type: ["source-needs-verification"],
    growth_hook: "USGS partnership, water-utility consortium collaboration, hydrogeology research",
    proposed_route: "/frameworks/managed-aquifer-recharge-water-banking/simulator",
    dev_status: "high-priority",
    estimated_hours: 150,
    domain_expertise_required: ["hydrogeology", "water-modeling", "climate-science"],
    partner_model: "research",
  },
  {
    framework_number: "11",
    framework_title: "Climate-Displacement Migration Planning",
    framework_slug: "climate-displacement-migration-planning",
    artifact_type: "assessor",
    primary_user: ["policymakers", "communities"],
    core_question: "How will climate migration reshape our demographics?",
    required_inputs: [
      "Current demographics",
      "Climate projections for region",
      "Available housing/jobs",
      "Policy environment",
    ],
    generated_outputs: [
      "Projected migration flows",
      "Demographic shift scenarios",
      "Infrastructure/housing readiness assessment",
    ],
    learning_opportunity:
      "Actual migration patterns, community-absorption capacity, policy impacts on migration",
    build_difficulty: "high",
    risk_level: "medium",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Climate-adaptation planning networks, community resilience partnerships, policy research",
    proposed_route: "/frameworks/climate-displacement-migration-planning/assessor",
    dev_status: "medium-priority",
    estimated_hours: 130,
    domain_expertise_required: ["climate-science", "demography", "migration-studies"],
    partner_model: "research",
  },
  {
    framework_number: "12",
    framework_title: "Education-Equity Accessibility Framework",
    framework_slug: "education-equity-accessibility-framework",
    artifact_type: "auditor",
    primary_user: ["institutions", "policymakers"],
    core_question: "Which accessibility barriers most impede learning for disabled students?",
    required_inputs: [
      "Current student population",
      "Documented disabilities",
      "Facility inventory",
      "Budget constraints",
    ],
    generated_outputs: [
      "Barrier-severity ranking",
      "Specific remediation actions",
      "Cost/benefit",
      "Implementation timeline",
    ],
    learning_opportunity:
      "Most-impactful accessibility interventions, student outcome improvements, district-by-district variation",
    build_difficulty: "medium",
    risk_level: "low",
    disclaimer_type: ["not-legal-advice"],
    growth_hook: "School district partnership, disability-rights nonprofit integration, accessibility vendor network",
    proposed_route: "/frameworks/education-equity-accessibility-framework/auditor",
    dev_status: "planned",
    estimated_hours: 100,
    domain_expertise_required: ["special-education", "accessibility", "school-administration"],
    partner_model: "pilot",
  },
  {
    framework_number: "13",
    framework_title: "Refugee-Integration Employment Pathway",
    framework_slug: "refugee-integration-employment-pathway",
    artifact_type: "matcher",
    primary_user: ["institutions", "refugees"],
    core_question: "Which employment pathway leverages the refugee's existing skills fastest?",
    required_inputs: [
      "Prior employment",
      "Credentials/education",
      "Language proficiency",
      "Local job market",
      "Transportation",
    ],
    generated_outputs: [
      "Best-fit job matches",
      "Credentialing roadmap",
      "Training-program recommendations",
      "Wage projection",
    ],
    learning_opportunity:
      "Credential portability barriers, wage-progression patterns, labor-market demand",
    build_difficulty: "high",
    risk_level: "medium",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Refugee resettlement agency partnership, employer network collaboration, outcomes tracking",
    proposed_route: "/frameworks/refugee-integration-employment-pathway/matcher",
    dev_status: "planned",
    estimated_hours: 130,
    domain_expertise_required: ["employment-services", "credential-databases", "labor-market-data"],
    partner_model: "pilot",
  },
  {
    framework_number: "14",
    framework_title: "Energy-Equity Community Power",
    framework_slug: "energy-equity-community-power",
    artifact_type: "calculator",
    primary_user: ["communities", "institutions"],
    core_question: "How do we structure community solar to maximize benefits for low-income households?",
    required_inputs: [
      "Neighborhood income distribution",
      "Roof capacity/conditions",
      "Energy costs",
      "Utility rates",
      "Financing terms",
    ],
    generated_outputs: [
      "Community solar sizing",
      "Financing structure options",
      "Low-income benefit guarantee",
      "ROI projection",
    ],
    learning_opportunity:
      "Energy-cost savings by income level, community solar adoption barriers, energy-justice outcomes",
    build_difficulty: "high",
    risk_level: "medium",
    disclaimer_type: ["not-financial-advice"],
    growth_hook: "Community solar provider partnership, energy-justice nonprofit collaboration, municipal policy integration",
    proposed_route: "/frameworks/energy-equity-community-power/calculator",
    dev_status: "high-priority",
    estimated_hours: 140,
    domain_expertise_required: ["solar-financing", "energy-economics", "environmental-justice"],
    partner_model: "pilot",
  },
  {
    framework_number: "15",
    framework_title: "Youth-Opportunity Criminal-Justice Diversion",
    framework_slug: "youth-opportunity-criminal-justice-diversion",
    artifact_type: "assessor",
    primary_user: ["policymakers", "institutions"],
    core_question: "Which youth are diversion-eligible, and which programs best fit their profile?",
    required_inputs: [
      "Offense history",
      "Risk factors (home, education, substance)",
      "Available programs",
      "Past outcomes",
    ],
    generated_outputs: [
      "Diversion eligibility assessment",
      "Program recommendations",
      "Risk/recidivism projection",
      "Impact estimate",
    ],
    learning_opportunity:
      "Diversion effectiveness by program + youth profile, recidivism reduction, racial equity in recommendations",
    build_difficulty: "high",
    risk_level: "high",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Juvenile justice agency partnership, program provider network, outcomes evaluation consortium",
    proposed_route: "/frameworks/youth-opportunity-criminal-justice-diversion/assessor",
    dev_status: "deferred",
    estimated_hours: 140,
    domain_expertise_required: ["juvenile-justice", "risk-modeling", "outcomes-evaluation"],
    partner_model: "research",
  },
  {
    framework_number: "16",
    framework_title: "Homelessness-Prevention Rapid Housing",
    framework_slug: "homelessness-prevention-rapid-housing",
    artifact_type: "assessor",
    primary_user: ["institutions", "operators"],
    core_question: "What's the cheapest intervention that prevents housing loss?",
    required_inputs: [
      "Current housing stability",
      "Income/debt",
      "Employment trajectory",
      "Family status",
      "Health barriers",
    ],
    generated_outputs: [
      "Intervention recommendation (eviction prevention, rapid re-housing, rapid housing)",
      "Cost",
      "Success probability",
    ],
    learning_opportunity:
      "Prevention-vs-housing cost trade-offs, intervention effectiveness, rapid-housing outcomes",
    build_difficulty: "medium",
    risk_level: "medium",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Homeless services partnership, housing provider collaboration, rapid-housing innovation tracking",
    proposed_route: "/frameworks/homelessness-prevention-rapid-housing/assessor",
    dev_status: "planned",
    estimated_hours: 100,
    domain_expertise_required: ["homeless-services", "housing-economics", "social-work"],
    partner_model: "pilot",
  },
  {
    framework_number: "17",
    framework_title: "Substance-Use Disorder Treatment Continuum",
    framework_slug: "substance-use-disorder-treatment-continuum",
    artifact_type: "assessor",
    primary_user: ["providers", "institutions"],
    core_question: "What treatment level and modality are most likely to lead to sustained recovery?",
    required_inputs: [
      "Substance history",
      "Addiction severity",
      "Comorbidities",
      "Social support",
      "Employment status",
      "Past attempts",
    ],
    generated_outputs: [
      "Treatment-level recommendation (outpatient/intensive/inpatient)",
      "Modality match",
      "Program options",
      "Outcomes projection",
    ],
    learning_opportunity:
      "Treatment effectiveness by profile, recovery pathway patterns, relapse risk factors",
    build_difficulty: "high",
    risk_level: "high",
    disclaimer_type: ["not-medical-advice"],
    growth_hook: "Addiction medicine partnership, treatment provider networks, recovery outcomes research",
    proposed_route: "/frameworks/substance-use-disorder-treatment-continuum/assessor",
    dev_status: "deferred",
    estimated_hours: 140,
    domain_expertise_required: ["addiction-medicine", "outcomes-modeling", "behavioral-health"],
    partner_model: "research",
  },
  {
    framework_number: "18",
    framework_title: "Mental-Health Crisis Response System",
    framework_slug: "mental-health-crisis-response-system",
    artifact_type: "assessor",
    primary_user: ["institutions", "providers"],
    core_question: "What's the appropriate response level and where should this person go?",
    required_inputs: [
      "Caller description",
      "Behavior/language",
      "Psychiatric history",
      "Current location",
      "Risk factors",
    ],
    generated_outputs: [
      "Crisis assessment",
      "Response type recommendation (mobile team/transport/hospital)",
      "Risk factors",
      "De-escalation suggestions",
    ],
    learning_opportunity: "Crisis patterns, response effectiveness, outcomes by dispatch decision",
    build_difficulty: "high",
    risk_level: "high",
    disclaimer_type: ["not-medical-advice"],
    growth_hook: "Crisis response agency partnership, mobile teams integration, outcomes tracking",
    proposed_route: "/frameworks/mental-health-crisis-response-system/triage",
    dev_status: "deferred",
    estimated_hours: 140,
    domain_expertise_required: ["crisis-intervention", "mental-health", "emergency-response"],
    partner_model: "validation",
  },
  {
    framework_number: "19",
    framework_title: "Food-Security Local-Supply Chain",
    framework_slug: "food-security-local-supply-chain",
    artifact_type: "assessor",
    primary_user: ["communities", "policymakers"],
    core_question:
      "How vulnerable is our food supply to disruption, and what local investments would reduce vulnerability most?",
    required_inputs: [
      "Regional food production",
      "Import dependency",
      "Storage capacity",
      "Distribution infrastructure",
      "Population needs",
    ],
    generated_outputs: [
      "Supply-chain vulnerability assessment",
      "Local production gap analysis",
      "Investment priorities",
      "Resilience roadmap",
    ],
    learning_opportunity:
      "Local food system viability, production/distribution gaps, investment effectiveness",
    build_difficulty: "high",
    risk_level: "medium",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Food system nonprofit partnership, farm networks, municipal food policy integration",
    proposed_route: "/frameworks/food-security-local-supply-chain/assessor",
    dev_status: "medium-priority",
    estimated_hours: 130,
    domain_expertise_required: ["food-systems", "supply-chain", "resilience-planning"],
    partner_model: "research",
  },
  {
    framework_number: "20",
    framework_title: "Disability-Rights Workplace Accessibility",
    framework_slug: "disability-rights-workplace-accessibility",
    artifact_type: "auditor",
    primary_user: ["institutions", "policymakers"],
    core_question:
      "Which workplace barriers most impede employment and advancement for people with disabilities?",
    required_inputs: [
      "Workforce demographics",
      "Disability disclosures",
      "Current accommodations",
      "Facility layout",
      "Job descriptions",
    ],
    generated_outputs: [
      "Barrier-severity ranking",
      "Specific accommodations/modifications",
      "Cost estimate",
      "Implementation roadmap",
    ],
    learning_opportunity:
      "Most-impactful accommodations, employment outcomes by intervention, cost-effectiveness",
    build_difficulty: "medium",
    risk_level: "low",
    disclaimer_type: ["not-legal-advice"],
    growth_hook: "Employer partnerships, disability-rights nonprofit collaboration, accommodation vendor networks",
    proposed_route: "/frameworks/disability-rights-workplace-accessibility/auditor",
    dev_status: "planned",
    estimated_hours: 100,
    domain_expertise_required: ["accessibility", "HR-practices", "disability-inclusion"],
    partner_model: "pilot",
  },
  {
    framework_number: "21",
    framework_title: "Maternal-Mortality Reduction Infrastructure",
    framework_slug: "maternal-mortality-reduction-infrastructure",
    artifact_type: "assessor",
    primary_user: ["providers", "institutions"],
    core_question: "What is this pregnancy's mortality risk, and what care intensity is indicated?",
    required_inputs: [
      "Age",
      "Health history",
      "Current pregnancy metrics",
      "Access to care",
      "Comorbidities",
    ],
    generated_outputs: [
      "Risk stratification",
      "Recommended care pathway",
      "Specialist referral indications",
      "Mortality-reduction strategy",
    ],
    learning_opportunity:
      "Risk factors by population, care pathway effectiveness, maternal outcomes by provider",
    build_difficulty: "high",
    risk_level: "high",
    disclaimer_type: ["not-medical-advice"],
    growth_hook: "Maternal health partnership, OB provider networks, outcomes research consortiums",
    proposed_route: "/frameworks/maternal-mortality-reduction-infrastructure/assessor",
    dev_status: "deferred",
    estimated_hours: 140,
    domain_expertise_required: ["maternal-medicine", "outcomes-modeling", "public-health"],
    partner_model: "research",
  },
  {
    framework_number: "22",
    framework_title: "Vaccine-Hesitancy Overcome Trust-Building",
    framework_slug: "vaccine-hesitancy-overcome-trust-building",
    artifact_type: "navigator",
    primary_user: ["policymakers", "institutions"],
    core_question:
      "What messaging and trust-building approach is most likely to increase vaccine acceptance?",
    required_inputs: [
      "Community demographics",
      "Primary hesitancy drivers (misinformation, access, trust)",
      "Trusted messengers",
    ],
    generated_outputs: [
      "Personalized messaging recommendations",
      "Provider talking-point framework",
      "Community-trust-building roadmap",
    ],
    learning_opportunity:
      "Most-effective messaging by hesitancy driver, messaging effectiveness over time, trust-building outcomes",
    build_difficulty: "high",
    risk_level: "high",
    disclaimer_type: ["not-medical-advice"],
    growth_hook: "Public health agency partnership, community health worker networks, vaccine confidence research",
    proposed_route: "/frameworks/vaccine-hesitancy-overcome-trust-building/messenger",
    dev_status: "deferred",
    estimated_hours: 130,
    domain_expertise_required: ["public-health", "behavioral-science", "communications"],
    partner_model: "research",
  },
  {
    framework_number: "23",
    framework_title: "Transportation-Equity Mobility Access",
    framework_slug: "transportation-equity-mobility-access",
    artifact_type: "planner",
    primary_user: ["policymakers", "communities"],
    core_question:
      "Which neighborhoods lack adequate mobility for work/healthcare/education?",
    required_inputs: [
      "Population density",
      "Job/school/healthcare locations",
      "Current transit",
      "Accessibility needs",
      "Budget",
    ],
    generated_outputs: [
      "Mobility-gap analysis",
      "Solution recommendation (fixed route/on-demand/other)",
      "Ridership projection",
      "Cost estimate",
    ],
    learning_opportunity:
      "Actual mobility gaps by community, transportation solution effectiveness, equity outcomes",
    build_difficulty: "high",
    risk_level: "medium",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Transit agency partnership, smart-mobility vendor collaboration, municipal transportation integration",
    proposed_route: "/frameworks/transportation-equity-mobility-access/planner",
    dev_status: "medium-priority",
    estimated_hours: 140,
    domain_expertise_required: ["transportation-planning", "mobility-modeling", "urban-planning"],
    partner_model: "pilot",
  },
  {
    framework_number: "24",
    framework_title: "Pandemic-Readiness Hospital Resilience",
    framework_slug: "pandemic-readiness-hospital-resilience",
    artifact_type: "assessor",
    primary_user: ["facility-managers", "institutions"],
    core_question: "Are we pandemic-ready, and what are our gaps?",
    required_inputs: [
      "Current bed count",
      "ICU capacity",
      "PPE stockpile",
      "Staff training",
      "Surge protocols",
      "Past pandemic response",
    ],
    generated_outputs: [
      "Readiness assessment",
      "Surge-capacity gap analysis",
      "Prioritized remediation roadmap",
      "Cost estimate",
    ],
    learning_opportunity:
      "Actual pandemic-readiness variation, surge-capacity effectiveness, staff confidence/training",
    build_difficulty: "high",
    risk_level: "high",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Hospital association partnership, health system collaboration, pandemic-response research",
    proposed_route: "/frameworks/pandemic-readiness-hospital-resilience/assessor",
    dev_status: "deferred",
    estimated_hours: 130,
    domain_expertise_required: ["hospital-operations", "emergency-response", "public-health"],
    partner_model: "validation",
  },
  {
    framework_number: "25",
    framework_title: "Nursing-Home Elder Care Quality Standard",
    framework_slug: "nursing-home-elder-care-quality-standard",
    artifact_type: "auditor",
    primary_user: ["institutions", "policymakers"],
    core_question:
      "How does our care quality compare, and which interventions would most improve resident outcomes?",
    required_inputs: [
      "Staff ratios",
      "Resident demographics",
      "Current care protocols",
      "Incident history",
      "Quality-metric performance",
    ],
    generated_outputs: [
      "Quality-gap assessment",
      "Best-practice recommendations",
      "Implementation roadmap",
      "Expected outcome improvement",
    ],
    learning_opportunity:
      "Care-quality drivers, staff-to-resident ratio impacts, quality-improvement effectiveness",
    build_difficulty: "medium",
    risk_level: "medium",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Nursing home association partnership, care-quality research, regulatory collaboration",
    proposed_route: "/frameworks/nursing-home-elder-care-quality-standard/auditor",
    dev_status: "planned",
    estimated_hours: 110,
    domain_expertise_required: ["elder-care", "quality-standards", "compliance"],
    partner_model: "pilot",
  },
  {
    framework_number: "26",
    framework_title: "Firearm-Injury Reduction Safe Storage",
    framework_slug: "firearm-injury-reduction-safe-storage",
    artifact_type: "planner",
    primary_user: ["policymakers", "communities"],
    core_question:
      "What safe-storage interventions would most reduce unintentional and intentional firearm injuries?",
    required_inputs: [
      "Firearm prevalence",
      "Injury patterns (suicide/homicide/accidental)",
      "Storage practices",
      "Community readiness",
    ],
    generated_outputs: [
      "Injury-reduction recommendation",
      "Storage program design",
      "Community-partnership roadmap",
      "Effectiveness projection",
    ],
    learning_opportunity:
      "Storage-intervention effectiveness, community adoption barriers, injury reduction outcomes",
    build_difficulty: "high",
    risk_level: "high",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Public health partnership, firearm-safety nonprofit collaboration, violence-prevention research",
    proposed_route: "/frameworks/firearm-injury-reduction-safe-storage/planner",
    dev_status: "deferred",
    estimated_hours: 130,
    domain_expertise_required: ["public-health", "violence-prevention", "community-engagement"],
    partner_model: "research",
  },
  {
    framework_number: "27",
    framework_title: "Air-Quality Health Vulnerability Mapping",
    framework_slug: "air-quality-health-vulnerability-mapping",
    artifact_type: "mapper",
    primary_user: ["policymakers", "advocates"],
    core_question:
      "Which communities are most vulnerable to air-quality health impacts?",
    required_inputs: [
      "Air-quality data",
      "Population vulnerability (age, health, economic)",
      "Existing pollution sources",
      "Advocacy targets",
    ],
    generated_outputs: [
      "Vulnerability mapping",
      "Health-impact projection",
      "Advocacy-target ranking",
      "Community-resilience roadmap",
    ],
    learning_opportunity:
      "Environmental justice patterns, health-impact effectiveness of interventions, community resilience factors",
    build_difficulty: "high",
    risk_level: "medium",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Environmental health nonprofit partnership, EPA collaboration, environmental justice research",
    proposed_route: "/frameworks/air-quality-health-vulnerability-mapping/mapper",
    dev_status: "medium-priority",
    estimated_hours: 130,
    domain_expertise_required: ["air-quality", "epidemiology", "GIS-mapping"],
    partner_model: "research",
  },
  {
    framework_number: "28",
    framework_title: "Extreme-Weather Community Preparedness",
    framework_slug: "extreme-weather-community-preparedness",
    artifact_type: "assessor",
    primary_user: ["communities", "policymakers"],
    core_question:
      "How prepared is our community for extreme-weather disasters?",
    required_inputs: [
      "Community demographics",
      "Hazard exposure (flooding/wind/heat)",
      "Current preparedness",
      "Vulnerable populations",
      "Budget",
    ],
    generated_outputs: [
      "Readiness assessment",
      "Disaster-resilience gap analysis",
      "Prioritized investment roadmap",
      "Cost-benefit",
    ],
    learning_opportunity:
      "Community resilience factors, preparedness investment effectiveness, vulnerable-population outcomes",
    build_difficulty: "medium",
    risk_level: "low",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Emergency management partnership, community resilience networks, disaster research",
    proposed_route: "/frameworks/extreme-weather-community-preparedness/assessor",
    dev_status: "planned",
    estimated_hours: 100,
    domain_expertise_required: ["emergency-management", "resilience-planning", "climate-adaptation"],
    partner_model: "pilot",
  },
  {
    framework_number: "29",
    framework_title: "Solar-Geoengineering Governance Framework",
    framework_slug: "solar-geoengineering-governance",
    artifact_type: "explorer",
    primary_user: ["policymakers", "institutions"],
    core_question:
      "What governance structure is most appropriate for solar geoengineering?",
    required_inputs: [
      "Climate scenario",
      "Deployment options (stratospheric/cloud brightening)",
      "Governance models",
      "Stakeholder interests",
    ],
    generated_outputs: [
      "Governance-scenario comparison",
      "Policy-framework recommendation",
      "Risk assessment",
      "International-coordination roadmap",
    ],
    learning_opportunity:
      "Governance model effectiveness, international coordination barriers, unintended-consequence patterns",
    build_difficulty: "high",
    risk_level: "high",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Climate policy research partnerships, international relations collaboration, governance research",
    proposed_route: "/frameworks/solar-geoengineering-governance-framework/scenario-explorer",
    dev_status: "deferred",
    estimated_hours: 150,
    domain_expertise_required: ["climate-science", "policy", "international-relations"],
    partner_model: "research",
  },
  {
    framework_number: "30",
    framework_title: "Orbital-Space Debris Mitigation Governance",
    framework_slug: "orbital-space-debris-mitigation-governance",
    artifact_type: "explorer",
    primary_user: ["policymakers", "institutions"],
    core_question:
      "What governance and operational standards minimize orbital debris?",
    required_inputs: [
      "Current debris inventory",
      "Launch projections",
      "Collision-risk models",
      "Operator incentives",
      "Policy options",
    ],
    generated_outputs: [
      "Debris-risk assessment",
      "Policy-framework recommendation",
      "Operator-adoption incentives",
      "Governance-coordination roadmap",
    ],
    learning_opportunity:
      "Debris-mitigation policy effectiveness, operator compliance patterns, international-coordination barriers",
    build_difficulty: "high",
    risk_level: "high",
    disclaimer_type: ["not-guaranteed-outcomes"],
    growth_hook: "Space policy research partnerships, satellite-operator collaboration, space-sustainability research",
    proposed_route: "/frameworks/orbital-space-debris-mitigation-governance/scenario-explorer",
    dev_status: "deferred",
    estimated_hours: 150,
    domain_expertise_required: ["orbital-mechanics", "space-policy", "governance"],
    partner_model: "research",
  },
];

/**
 * Helper: Get artifact by framework number
 */
export function getArtifactByFrameworkNumber(
  frameworkNumber: string
): InteractiveArtifact | undefined {
  return interactiveArtifactMatrix.find((a) => a.framework_number === frameworkNumber);
}

/**
 * Helper: Get artifacts by development status
 */
export function getArtifactsByStatus(status: DevelopmentStatus): InteractiveArtifact[] {
  return interactiveArtifactMatrix.filter((a) => a.dev_status === status);
}

/**
 * Helper: Get artifacts by build difficulty
 */
export function getArtifactsByDifficulty(difficulty: BuildDifficulty): InteractiveArtifact[] {
  return interactiveArtifactMatrix.filter((a) => a.build_difficulty === difficulty);
}

/**
 * Helper: Get artifacts by build sequencing phase
 */
export function getArtifactsByPhase(phase: 1 | 2 | 3 | 4): InteractiveArtifact[] {
  const phaseMap: Record<number, string[]> = {
    1: ["01", "07", "20", "25"],
    2: ["08", "11", "16", "28"],
    3: ["02", "05", "10", "14", "19"],
    4: ["21", "22", "29", "30"],
  };

  return interactiveArtifactMatrix.filter((a) =>
    phaseMap[phase].includes(a.framework_number)
  );
}

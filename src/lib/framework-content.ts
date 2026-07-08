export type Framework = {
  number: string;
  slug: string;
  title: string;
  category: string;
  enterpriseLayer: string;
  theme: string;
  tagline: string;
  thesis: string;
  statuses: string[];
  links: {
    detail: string;
    demo: string;
    github: string;
    substack?: string;
    linkedin?: string;
  };
};

export const frameworks: Framework[] = [
  {
    number: "Framework 01",
    slug: "womens-health-longitudinal-dashboard",
    title: "Women's Health Longitudinal Dashboard",
    category: "HealthTech / Patient Data",
    enterpriseLayer: "Patient-owned clinical context infrastructure",
    theme: "The data model is medicine. The export format is the appointment.",
    tagline: "Patient-owned. Longitudinal. Clinical-conversation-ready.",
    thesis: "The data model is medicine. The export format is the appointment.",
    statuses: ["Spec Ready", "Demo Live", "Repo Live"],
    links: {
      detail: "/frameworks/womens-health-longitudinal-dashboard",
      demo: "/frameworks/womens-health-longitudinal-dashboard/demo",
      github: "https://github.com/thehustleisholy-ship-it/thihsystems-frameworks",
      substack: "https://substack.com/@michaelmartinthih",
      linkedin: "https://www.linkedin.com/company/124453928/admin/dashboard/",
    },
  },
  {
    number: "Framework 02",
    slug: "job-loss-income-shock-stabilizer",
    title: "Job-Loss & Income-Shock Stabilizer",
    category: "Workforce Transition Infrastructure",
    enterpriseLayer: "Workforce transition continuity",
    theme: "The first 30 days after income loss determine the next 3 years.",
    tagline: "30-day stabilization operating system for income loss.",
    thesis: "The first 30 days after job loss determine the next 3 years. The difference between stabilization and spiral is often whether someone receives a structured Day 1 operating plan.",
    statuses: ["Concept Structured", "Demo Preview", "Repo Pending"],
    links: {
      detail: "/frameworks/job-loss-income-shock-stabilizer",
      demo: "/frameworks/job-loss-income-shock-stabilizer/demo",
      github: "https://github.com/thehustleisholy-ship-it/framework-02-job-loss-income-shock-stabilizer",
    },
  },
  {
    number: "Framework 03",
    slug: "returning-citizen-reentry-roadmap",
    title: "Returning Citizen Reentry Roadmap",
    category: "Justice-to-Stability Infrastructure",
    enterpriseLayer: "Reentry service coordination",
    theme: "Freedom without infrastructure becomes another trap.",
    tagline: "Reentry stability coordination and documentation system.",
    thesis: "Freedom without infrastructure becomes another trap. Reentry fails when documentation, housing, employment, transportation, compliance, and support are treated as separate problems.",
    statuses: ["Concept Structured", "Demo Preview", "Repo Pending"],
    links: {
      detail: "/frameworks/returning-citizen-reentry-roadmap",
      demo: "/frameworks/returning-citizen-reentry-roadmap/demo",
      github: "https://github.com/thehustleisholy-ship-it/framework-03-returning-citizen-reentry-roadmap",
    },
  },
  {
    number: "Framework 04",
    slug: "black-maternal-health-emergency-response-system",
    title: "Black Maternal Health Emergency Response System",
    category: "Maternal Risk Escalation Infrastructure",
    enterpriseLayer: "Maternal red-flag escalation and advocacy",
    theme: "Being dismissed can become deadly.",
    tagline: "Red-flag escalation system for maternal safety.",
    thesis: "Being dismissed can become deadly. Maternal risk needs an escalation system before symptoms are minimized, delayed, or normalized.",
    statuses: ["Concept Structured", "Demo Preview", "Repo Pending"],
    links: {
      detail: "/frameworks/black-maternal-health-emergency-response-system",
      demo: "/frameworks/black-maternal-health-emergency-response-system/demo",
      github: "https://github.com/thehustleisholy-ship-it/framework-04-black-maternal-health-emergency-response-system",
    },
  },
  {
    number: "Framework 05",
    slug: "hospital-grid-independence-resilience",
    title: "Hospital Grid-Independence & Resilience Framework",
    category: "Critical Facility Continuity",
    enterpriseLayer: "Critical facility continuity infrastructure",
    theme: "A hospital that cannot survive grid failure is not resilient care.",
    tagline: "72-hour hospital continuity and grid-independence planning.",
    thesis: "A hospital that cannot survive grid failure is not resilient care. Continuity must be tested across power, fuel, water, oxygen, staffing, pharmacy, communications, and access routes.",
    statuses: ["Concept Structured", "Demo Preview", "Repo Pending"],
    links: {
      detail: "/frameworks/hospital-grid-independence-resilience",
      demo: "/frameworks/hospital-grid-independence-resilience/demo",
      github: "https://github.com/thehustleisholy-ship-it/framework-05-hospital-grid-independence-resilience",
    },
  },
  {
    number: "Framework 06",
    slug: "eviction-defense-documentation-system",
    title: "Eviction Defense Documentation System",
    category: "Housing Stability Infrastructure",
    enterpriseLayer: "Housing stability documentation infrastructure",
    theme: "Most people do not lose housing because they had no case; they lose because they had no system.",
    tagline: "Evidence vault and court-prep system for housing defense.",
    thesis: "Most people do not lose housing because they had no case. They lose because they had no system.",
    statuses: ["Concept Structured", "Demo Preview", "Repo Pending"],
    links: {
      detail: "/frameworks/eviction-defense-documentation-system",
      demo: "/frameworks/eviction-defense-documentation-system/demo",
      github: "https://github.com/thehustleisholy-ship-it/framework-06-eviction-defense-documentation-system",
    },
  },
  {
    number: "Framework 07",
    slug: "phosphorus-recovery-circular-fertilizer",
    title: "Phosphorus Recovery & Circular Fertilizer Framework",
    category: "Nutrient Security Infrastructure",
    enterpriseLayer: "Strategic nutrient recovery infrastructure",
    theme: "We are flushing food security into the ocean.",
    tagline: "Nutrient recovery and circular fertilizer production system.",
    thesis: "We are flushing food security into the ocean. Phosphorus is essential to agriculture, geographically concentrated, and routinely wasted through wastewater and runoff.",
    statuses: ["Concept Structured", "Demo Preview", "Repo Pending"],
    links: {
      detail: "/frameworks/phosphorus-recovery-circular-fertilizer",
      demo: "/frameworks/phosphorus-recovery-circular-fertilizer/demo",
      github: "https://github.com/thehustleisholy-ship-it/framework-07-phosphorus-recovery-circular-fertilizer",
    },
  },
  {
    number: "Framework 08",
    slug: "sand-crisis-alternative-aggregate",
    title: "Sand Crisis & Alternative Aggregate Supply Chain",
    category: "Construction Material Resilience",
    enterpriseLayer: "Construction aggregate risk and substitution infrastructure",
    theme: "The world is running out of the sand modern life is built on.",
    tagline: "Aggregate supply risk and material substitution framework.",
    thesis: "The world is running out of the sand modern life is built on. Construction resilience requires aggregate visibility, substitution pathways, and recycled material planning.",
    statuses: ["Concept Structured", "Demo Preview", "Repo Pending"],
    links: {
      detail: "/frameworks/sand-crisis-alternative-aggregate",
      demo: "/frameworks/sand-crisis-alternative-aggregate/demo",
      github: "https://github.com/thehustleisholy-ship-it/framework-08-sand-crisis-alternative-aggregate",
    },
  },
  {
    number: "Framework 09",
    slug: "topsoil-regeneration-no-till-transition",
    title: "Topsoil Regeneration & No-Till Transition Accelerator",
    category: "Soil-Capital Preservation",
    enterpriseLayer: "Soil-health transition infrastructure",
    theme: "Soil is not dirt. It is civilization's savings account.",
    tagline: "Soil transition planning and regeneration accelerator.",
    thesis: "Soil is not dirt. It is civilization's savings account. Regeneration requires transition planning, not slogans.",
    statuses: ["Concept Structured", "Demo Preview", "Repo Pending"],
    links: {
      detail: "/frameworks/topsoil-regeneration-no-till-transition",
      demo: "/frameworks/topsoil-regeneration-no-till-transition/demo",
      github: "https://github.com/thehustleisholy-ship-it/framework-09-topsoil-regeneration-no-till-transition",
    },
  },
  {
    number: "Framework 10",
    slug: "managed-aquifer-recharge-water-banking",
    title: "Managed Aquifer Recharge & Underground Water Banking",
    category: "Water Security Infrastructure",
    enterpriseLayer: "Aquifer recharge, drought resilience, and underground water banking",
    theme: "Groundwater collapse is invisible until the wells run dry.",
    tagline: "Underground water banking and drought resilience system.",
    thesis: "Groundwater collapse is invisible until the wells run dry. Managed recharge turns water abundance in one season into stored resilience for another.",
    statuses: ["Concept Structured", "Demo Preview", "Repo Pending"],
    links: {
      detail: "/frameworks/managed-aquifer-recharge-water-banking",
      demo: "/frameworks/managed-aquifer-recharge-water-banking/demo",
      github: "https://github.com/thehustleisholy-ship-it/framework-10-managed-aquifer-recharge-water-banking",
    },
  },
];

// Backward compatibility: export Framework 01 data for existing routes
export const framework = frameworks[0];
export const links = frameworks[0].links;

// Framework 01 demo data
export const phaseHeatmap = [
  { symptom: "Pain", menstrual: 8, follicular: 3, ovulation: 4, luteal: 7 },
  { symptom: "Fatigue", menstrual: 7, follicular: 3, ovulation: 4, luteal: 8 },
  { symptom: "Mood shift", menstrual: 5, follicular: 2, ovulation: 3, luteal: 7 },
  { symptom: "Sleep disruption", menstrual: 6, follicular: 2, ovulation: 3, luteal: 6 },
  { symptom: "Digestive", menstrual: 5, follicular: 2, ovulation: 2, luteal: 5 },
];

export const timeline = [
  {
    date: "Cycle 18, day 23",
    title: "Luteal fatigue spike",
    note: "Energy dropped below baseline for four consecutive evenings.",
  },
  {
    date: "Cycle 19, day 2",
    title: "Pain intensity changed",
    note: "Pain moved from intermittent to sustained during first 36 hours.",
  },
  {
    date: "Cycle 20, day 14",
    title: "Mid-cycle sleep shift",
    note: "Sleep interruptions clustered near ovulation window.",
  },
];

export const insights = [
  "Symptoms cluster most reliably in the late luteal and early menstrual phases.",
  "Fatigue and pain rise together in two of the last three cycles.",
  "Sleep disruption appears before the highest symptom days, making it useful for visit prep.",
];


import type { EvidenceRecord } from "./evidence-record";
import { framework04Claims } from "./framework-04-evidence";
import {
  frameworkMasterMatrix,
  type FrameworkMatrixEntry,
} from "./framework-master-matrix";

export type DocumentationStatus = "documented" | "partial" | "not-documented";
export type BuildUpdateType =
  | "Verified Win"
  | "Research Win"
  | "Correction"
  | "Failed Attempt"
  | "Open Question"
  | "Next Attempt";

export const BUILD_UPDATE_TYPES: BuildUpdateType[] = [
  "Verified Win",
  "Research Win",
  "Correction",
  "Failed Attempt",
  "Open Question",
  "Next Attempt",
];

export type PublicationSection = {
  status: DocumentationStatus;
  text: string | null;
  repository_paths: string[];
};

export type PublicationSource = {
  title: string;
  repository_path: string;
  external_url: string | null;
  verification_status: "unverified" | "source-identified" | "source-reviewed";
  last_reviewed: string | null;
};

export type BuildUpdate = {
  type: BuildUpdateType;
  summary: string;
  evidence_path: string;
  date: string | null;
};

export type FrameworkPublication = {
  framework_number: string;
  slug: string;
  founders_why: PublicationSection;
  human_pain: PublicationSection;
  hidden_infrastructure_failure: PublicationSection;
  proposed_intervention: PublicationSection;
  evidence_summary: PublicationSection;
  claims: EvidenceRecord[];
  assumptions: string[];
  safety_boundaries: string[];
  open_questions: string[];
  sources: PublicationSource[];
  build_record: BuildUpdate[];
  corrections: BuildUpdate[];
  failed_attempts: BuildUpdate[];
  next_attempts: BuildUpdate[];
  pilot_status: string;
  related_framework_slugs: string[];
  last_reviewed_date: string | null;
  documentation_completeness: DocumentationStatus;
  next_action: string;
};

const notDocumented = (): PublicationSection => ({
  status: "not-documented",
  text: null,
  repository_paths: [],
});

const documented = (text: string, repositoryPaths: string[] = []): PublicationSection => ({
  status: "documented",
  text,
  repository_paths: repositoryPaths,
});

const repositoryOverrides: Record<string, Partial<FrameworkPublication>> = {
  "womens-health-longitudinal-dashboard": {
    founders_why: documented(
      "Help patients organize longitudinal context for a clinical conversation without presenting a diagnosis.",
      ["frameworks/01-womens-health-longitudinal-dashboard/framework.md"],
    ),
    assumptions: [
      "The prototype uses synthetic values only.",
      "Evidence-depth language is determined by tracked-cycle count.",
    ],
    open_questions: [
      "What fields are necessary for usefulness without creating unnecessary surveillance?",
      "How should export language avoid diagnostic overreach?",
      "What should a patient be able to hide from a visit summary?",
      "How should data gaps be shown without shaming the patient?",
    ],
    sources: [
      {
        title: "Framework 01 privacy architecture",
        repository_path:
          "frameworks/01-womens-health-longitudinal-dashboard/docs/privacy-architecture.md",
        external_url: null,
        verification_status: "unverified",
        last_reviewed: null,
      },
    ],
    build_record: [
      {
        type: "Verified Win",
        summary: "Deterministic synthetic interaction is covered by engine and interface tests.",
        evidence_path:
          "src/app/frameworks/womens-health-longitudinal-dashboard/demo/framework-preview-engine.test.ts",
        date: "2026-07-09",
      },
    ],
    next_attempts: [
      {
        type: "Next Attempt",
        summary: "Complete safety-language review and user testing before handling real data.",
        evidence_path: "frameworks/01-womens-health-longitudinal-dashboard/roadmap.md",
        date: null,
      },
    ],
    documentation_completeness: "partial",
    next_action: "Attach and review claim-level medical sources before any evidence promotion.",
  },
  "job-loss-income-shock-stabilizer": {
    founders_why: documented(
      "Structure the first 30 days after job loss as a coordinated stabilization period.",
      ["frameworks/02-job-loss-income-shock-stabilizer/FRAMEWORK_02_FLAGSHIP_BRIEF.md"],
    ),
    assumptions: [
      "The 30-day intervention window is a design hypothesis, not a verified causal threshold.",
      "ROI figures in the package are modeled scenarios, not measured outcomes.",
    ],
    open_questions: [
      "Does intervention within 30 days change outcomes relative to later support?",
      "Can technology-enabled guidance reduce delivery cost without reducing safety?",
      "What state-specific benefits rules are required?",
    ],
    sources: [
      {
        title: "Framework 02 source register",
        repository_path:
          "frameworks/02-job-loss-income-shock-stabilizer/research/source-register.md",
        external_url: null,
        verification_status: "source-identified",
        last_reviewed: "2026-07-09",
      },
    ],
    build_record: [
      {
        type: "Research Win",
        summary: "A source register and research-gap map are present; citations remain unreviewed.",
        evidence_path:
          "frameworks/02-job-loss-income-shock-stabilizer/research/source-register.md",
        date: "2026-07-09",
      },
    ],
    next_attempts: [
      {
        type: "Next Attempt",
        summary: "Compile claim-level citations and reconcile the proposed pilot guide with Phase 1 maturity rules.",
        evidence_path:
          "frameworks/02-job-loss-income-shock-stabilizer/research/research-notes.md",
        date: null,
      },
    ],
    documentation_completeness: "partial",
    next_action: "Convert the source register into reviewed claim records; do not launch the proposed pilot.",
  },
  "managed-aquifer-recharge-water-banking": {
    assumptions: [
      "All basin values are illustrative and do not represent site-specific hydrology.",
      "The deterministic engine is not a feasibility or engineering model.",
    ],
    build_record: [
      {
        type: "Verified Win",
        summary: "The deterministic water-banking interaction is covered by engine and interface tests.",
        evidence_path:
          "src/app/frameworks/managed-aquifer-recharge-water-banking/demo/water-banking-preview-engine.test.ts",
        date: "2026-07-10",
      },
    ],
    documentation_completeness: "partial",
    next_action: "Create a hydrogeology source package before adding real-world assumptions.",
  },
  "black-maternal-health-emergency-response-system": {
    founders_why: documented(
      "Michael's personal motivation is not yet documented. A dated interview scaffold is available; the current public purpose is limited to safer documentation and escalation infrastructure design.",
      ["frameworks/04-black-maternal-health-emergency-response-system/FOUNDERS-WHY.md"],
    ),
    human_pain: documented(
      "In 2024, NVSS recorded 17.9 maternal deaths per 100,000 live births; the rate for non-Hispanic Black women was 44.8 compared with 14.2 for non-Hispanic White women. These 42-day maternal-mortality measures are distinct from one-year pregnancy-related mortality.",
      ["frameworks/04-black-maternal-health-emergency-response-system/research/RESEARCH-DOSSIER.md"],
    ),
    hidden_infrastructure_failure: documented(
      "The design hypothesis is that concerns, warning-sign education, escalation attempts, and responses are not consistently organized into a patient-controlled, reviewable chronology. No causal effect has been established.",
      ["frameworks/04-black-maternal-health-emergency-response-system/research/CLAIMS-LEDGER.md"],
    ),
    proposed_intervention: documented(
      "A non-diagnostic concept for symptom documentation, generic source-linked warning-sign education, patient or advocate escalation logging, explicit user-initiated emergency calling, and provenance-aware export.",
      ["frameworks/04-black-maternal-health-emergency-response-system/design/INTERACTIVE-SPEC.md"],
    ),
    evidence_summary: documented(
      "Nine primary-source claims received a dated metadata review: five verified public-health statements and four qualified federal legal or regulatory boundaries. Five research-queue claims remain unapproved. This is not clinical, legal, privacy, or expert review.",
      ["frameworks/04-black-maternal-health-emergency-response-system/research/SOURCE-REGISTER.csv"],
    ),
    claims: framework04Claims,
    assumptions: [
      "Documentation and generic education may be useful without providing diagnosis or treatment direction; this remains a design hypothesis.",
      "A real escalation feature would require a named and continuously accountable responder; no operator exists.",
      "NVSS, PMSS, pregnancy-associated death, severe maternal morbidity, and MMRC preventability are distinct measures.",
    ],
    safety_boundaries: [
      "Not diagnosis, triage, treatment, or a substitute for emergency or clinical care.",
      "Never delay emergency care to complete documentation and never imply that absence of a listed sign means safety.",
      "No real health data until clinical, privacy, security, FDA, accessibility, and jurisdiction-specific legal reviews are complete.",
      "Evidence-preservation features cannot promise admissibility or clinical truth.",
    ],
    open_questions: [
      "What exact user, operator, jurisdiction, and care setting are in scope?",
      "Who owns and responds to an escalation, including nights, downtime, and failed delivery?",
      "What evidence supports a patient-activated workflow without false reassurance or alarm fatigue?",
      "What is Michael's personal Founder's Why in his own approved words?",
    ],
    sources: [
      { title: "NCHS 2024 maternal mortality report", repository_path: "frameworks/04-black-maternal-health-emergency-response-system/research/SOURCE-REGISTER.csv", external_url: "https://blogs.cdc.gov/nchs/2026/03/04/7885/", verification_status: "source-reviewed", last_reviewed: "2026-07-16" },
      { title: "CDC MMRC 2017–2019 report", repository_path: "frameworks/04-black-maternal-health-emergency-response-system/research/SOURCE-REGISTER.csv", external_url: "https://www.cdc.gov/maternal-mortality/media/pdfs/Pregnancy-Related-Deaths-Data-MMRCs-2017-2019-H_1.pdf", verification_status: "source-reviewed", last_reviewed: "2026-07-16" },
      { title: "CDC PMSS definitions FAQ", repository_path: "frameworks/04-black-maternal-health-emergency-response-system/research/SOURCE-REGISTER.csv", external_url: "https://www.cdc.gov/maternal-mortality/php/pregnancy-mortality-surveillance-data/faqs.html", verification_status: "source-reviewed", last_reviewed: "2026-07-16" },
      { title: "CDC Hear Her warning signs", repository_path: "frameworks/04-black-maternal-health-emergency-response-system/research/SOURCE-REGISTER.csv", external_url: "https://www.cdc.gov/hearher/maternal-warning-signs/index.html", verification_status: "source-reviewed", last_reviewed: "2026-07-16" },
      { title: "HHS OCR health-app guidance", repository_path: "frameworks/04-black-maternal-health-emergency-response-system/research/SOURCE-REGISTER.csv", external_url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access-right-health-apps-apis/index.html", verification_status: "source-reviewed", last_reviewed: "2026-07-16" },
      { title: "FTC Health Breach Notification Rule", repository_path: "frameworks/04-black-maternal-health-emergency-response-system/research/SOURCE-REGISTER.csv", external_url: "https://www.ftc.gov/legal-library/browse/rules/health-breach-notification-rule", verification_status: "source-reviewed", last_reviewed: "2026-07-16" },
      { title: "FDA device software policy", repository_path: "frameworks/04-black-maternal-health-emergency-response-system/research/SOURCE-REGISTER.csv", external_url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/policy-device-software-functions-and-mobile-medical-applications", verification_status: "source-reviewed", last_reviewed: "2026-07-16" },
      { title: "Federal Rule of Evidence 901", repository_path: "frameworks/04-black-maternal-health-emergency-response-system/research/SOURCE-REGISTER.csv", external_url: "https://www.law.cornell.edu/rules/fre/rule_901", verification_status: "source-reviewed", last_reviewed: "2026-07-16" },
    ],
    build_record: [
      { type: "Research Win", summary: "Created a dated claim ledger separating 42-day maternal mortality, one-year pregnancy-related mortality, and MMRC preventability.", evidence_path: "frameworks/04-black-maternal-health-emergency-response-system/research/CLAIMS-LEDGER.md", date: "2026-07-16" },
      { type: "Correction", summary: "Reclassified the dismissal statement as a design thesis rather than a measured causal finding.", evidence_path: "frameworks/04-black-maternal-health-emergency-response-system/social/PUBLIC-BUILD-RECORD.md", date: "2026-07-16" },
    ],
    next_attempts: [
      { type: "Next Attempt", summary: "Commission independent clinical, privacy, FDA, evidence-law, accessibility, and patient-governance review before prototyping with real data.", evidence_path: "frameworks/04-black-maternal-health-emergency-response-system/social/PUBLIC-BUILD-RECORD.md", date: null },
    ],
    pilot_status: "Not pilot-ready. No partner, clinical owner, expert approval, real-data workflow, or measured outcome is recorded.",
    last_reviewed_date: "2026-07-16",
    documentation_completeness: "partial",
    next_action: "Obtain independent clinical and legal review, then test only a synthetic non-diagnostic interaction specification.",
  },
};

function designClaim(framework: FrameworkMatrixEntry): EvidenceRecord {
  return {
    claim_id: `FW-${framework.framework_number}-D-001`,
    framework_number: framework.framework_number,
    exact_public_claim: framework.hidden_foundation,
    claim_class: "D",
    source_title: null,
    publisher: null,
    url_or_doi: null,
    publication_date: null,
    data_year: null,
    access_date: null,
    geography: null,
    population: null,
    measurement_definition: null,
    value: null,
    unit: null,
    limitations: ["This is a design hypothesis from the canonical framework registry."],
    verification_status: "unverified",
    reviewer: null,
    review_date: null,
    next_review_date: null,
    public_use_approval: false,
  };
}

function createPublication(framework: FrameworkMatrixEntry): FrameworkPublication {
  const base: FrameworkPublication = {
    framework_number: framework.framework_number,
    slug: framework.slug,
    founders_why: notDocumented(),
    human_pain: documented(framework.affected_public),
    hidden_infrastructure_failure: documented(framework.hidden_foundation),
    proposed_intervention: documented(framework.key_workflow),
    evidence_summary: documented(
      `Registry evidence status: ${framework.source_status}. Claim-level review is not complete.`,
    ),
    claims: [designClaim(framework)],
    assumptions: [],
    safety_boundaries: [framework.primary_disclaimer],
    open_questions: [],
    sources: [],
    build_record: [],
    corrections: [],
    failed_attempts: [],
    next_attempts: [],
    pilot_status: "No completed pilot evidence is recorded.",
    related_framework_slugs: framework.related_framework_slugs,
    last_reviewed_date: null,
    documentation_completeness: "not-documented",
    next_action: "Document the framework-specific evidence and open questions.",
  };
  return { ...base, ...repositoryOverrides[framework.slug] };
}

export const frameworkPublications = frameworkMasterMatrix.map(createPublication);

export function getFrameworkPublication(slug: string): FrameworkPublication | undefined {
  return frameworkPublications.find((publication) => publication.slug === slug);
}

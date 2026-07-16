import type { EvidenceRecord } from "./evidence-record";
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
    open_questions: [
      "Which claims can be supported by government statistics versus peer-reviewed research?",
      "What medical, legal, privacy, and escalation boundaries require expert review?",
    ],
    build_record: [
      {
        type: "Open Question",
        summary: "No Framework 04 research or publication package is present on this branch.",
        evidence_path: "docs/SOURCE_REVIEW_QUEUE.md",
        date: null,
      },
    ],
    documentation_completeness: "not-documented",
    next_action: "Merge or author the missing research package before publishing claim-level content.",
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

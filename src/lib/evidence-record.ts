export const CLAIM_CLASSES = {
  A: "Verified fact",
  B: "Research interpretation",
  C: "Founder observation",
  D: "Design hypothesis",
  E: "Modeled result",
  F: "Measured result",
} as const;

export type ClaimClass = keyof typeof CLAIM_CLASSES;

export type VerificationStatus =
  | "unverified"
  | "source-identified"
  | "source-reviewed"
  | "rejected";

/**
 * Reusable evidence record for public claims. Unknown values remain null;
 * absence must never be replaced by invented metadata.
 */
export type EvidenceRecord = {
  claim_id: string;
  framework_number: string;
  exact_public_claim: string;
  claim_class: ClaimClass;
  source_title: string | null;
  publisher: string | null;
  url_or_doi: string | null;
  publication_date: string | null;
  data_year: string | null;
  access_date: string | null;
  geography: string | null;
  population: string | null;
  measurement_definition: string | null;
  value: number | string | null;
  unit: string | null;
  limitations: string[];
  verification_status: VerificationStatus;
  reviewer: string | null;
  review_date: string | null;
  next_review_date: string | null;
  public_use_approval: boolean;
};

export function isReviewableEvidence(record: EvidenceRecord): boolean {
  return Boolean(
    record.source_title &&
      record.publisher &&
      record.url_or_doi &&
      record.access_date &&
      record.reviewer &&
      record.review_date &&
      record.verification_status === "source-reviewed",
  );
}

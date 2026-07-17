export type ReadinessControls = {
  chronology: number;
  identityDocuments: number;
  supportingCategories: number;
  translationQueue: number;
  unresolvedConflicts: number;
  provenance: number;
  missingEvidenceExplanations: number;
  legalReview: number;
  secureExport: boolean;
};

export type ScenarioId = "early-assembly" | "translation-heavy" | "review-ready";

export const SYNTHETIC_SCENARIOS: Record<ScenarioId, { name: string; note: string; controls: ReadinessControls }> = {
  "early-assembly": {
    name: "Early assembly",
    note: "Synthetic: records are scattered and several dates remain approximate.",
    controls: { chronology: 2, identityDocuments: 1, supportingCategories: 2, translationQueue: 5, unresolvedConflicts: 4, provenance: 1, missingEvidenceExplanations: 1, legalReview: 0, secureExport: false },
  },
  "translation-heavy": {
    name: "Translation queue",
    note: "Synthetic: source records are inventoried, but language review is unfinished.",
    controls: { chronology: 4, identityDocuments: 3, supportingCategories: 5, translationQueue: 7, unresolvedConflicts: 2, provenance: 4, missingEvidenceExplanations: 3, legalReview: 1, secureExport: false },
  },
  "review-ready": {
    name: "Counsel review packet",
    note: "Synthetic: materials are organized for discussion, not filing.",
    controls: { chronology: 5, identityDocuments: 4, supportingCategories: 7, translationQueue: 1, unresolvedConflicts: 1, provenance: 5, missingEvidenceExplanations: 4, legalReview: 2, secureExport: true },
  },
};

const clamp = (value: number, max: number) => Math.max(0, Math.min(max, Math.round(Number.isFinite(value) ? value : 0)));

export function compileReadiness(input: ReadinessControls) {
  const controls = {
    chronology: clamp(input.chronology, 5), identityDocuments: clamp(input.identityDocuments, 5),
    supportingCategories: clamp(input.supportingCategories, 8), translationQueue: clamp(input.translationQueue, 10),
    unresolvedConflicts: clamp(input.unresolvedConflicts, 10), provenance: clamp(input.provenance, 5),
    missingEvidenceExplanations: clamp(input.missingEvidenceExplanations, 5), legalReview: clamp(input.legalReview, 2),
    secureExport: Boolean(input.secureExport),
  };
  const flags: string[] = [];
  if (controls.chronology < 4) flags.push("Chronology has unplaced or approximate events; preserve uncertainty instead of guessing.");
  if (controls.unresolvedConflicts > 0) flags.push(`${controls.unresolvedConflicts} chronology conflict${controls.unresolvedConflicts === 1 ? "" : "s"} should be surfaced for qualified legal review, not erased.`);
  if (controls.translationQueue > 0) flags.push(`${controls.translationQueue} item${controls.translationQueue === 1 ? "" : "s"} remain in the translation queue; filing requirements must be confirmed by counsel.`);
  if (controls.missingEvidenceExplanations < 3) flags.push("Record why unavailable evidence could not reasonably be obtained, using the person's own facts.");
  if (controls.provenance < 4) flags.push("Add source, date obtained, language, custodian, and unchanged-original location to the inventory.");
  if (controls.legalReview < 2) flags.push("Qualified attorney or accredited-representative review is incomplete.");
  if (!controls.secureExport) flags.push("Secure export is off; do not package or transmit sensitive records from this illustration.");

  const documented = controls.chronology + controls.identityDocuments + controls.supportingCategories + controls.provenance + controls.missingEvidenceExplanations;
  const possible = 28;
  return {
    controls,
    completenessPercent: Math.round((documented / possible) * 100),
    flags,
    translationQueue: controls.translationQueue,
    sourceInventory: controls.supportingCategories + controls.identityDocuments,
    status: flags.length <= 2 ? "Organized for counsel conversation" : flags.length <= 5 ? "Assembly in progress" : "Foundational gaps visible",
    questions: [
      "Which dates, names, or transliterations need legal review before any filing?",
      "Which corroborating records are reasonably available, and how should unavailable evidence be explained?",
      "Which translations and certifications are required for the actual forum and filing method?",
      "What should be excluded from an export because disclosure could endanger the person or others?",
    ],
  };
}

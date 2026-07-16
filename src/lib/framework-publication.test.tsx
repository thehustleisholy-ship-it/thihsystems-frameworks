import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { CLAIM_CLASSES } from "./evidence-record";
import { frameworkMasterMatrix, MaturityStage } from "./framework-master-matrix";
import { BUILD_UPDATE_TYPES, frameworkPublications, getFrameworkPublication } from "./framework-publication";
import FrameworkEvidence from "../app/frameworks/[slug]/FrameworkEvidence";
import SystemMapPage from "../app/system-map/page";

describe("public framework evidence", () => {
  it("gives all 30 frameworks an evidence status and honest missing-data behavior", () => {
    expect(frameworkPublications).toHaveLength(30);
    for (const publication of frameworkPublications) {
      expect(publication.evidence_summary.text).toContain("Registry evidence status:");
      expect(publication.claims.length).toBeGreaterThan(0);
      expect(publication.pilot_status).toBe("No completed pilot evidence is recorded.");
    }
    expect(getFrameworkPublication("returning-citizen-reentry-roadmap")?.founders_why.text).toBeNull();
  });

  it("exposes all claim-class labels without styling unverified claims as verified", () => {
    expect(Object.entries(CLAIM_CLASSES)).toEqual([
      ["A", "Verified fact"],
      ["B", "Research interpretation"],
      ["C", "Founder observation"],
      ["D", "Design hypothesis"],
      ["E", "Modeled result"],
      ["F", "Measured result"],
    ]);
    for (const publication of frameworkPublications) {
      for (const claim of publication.claims) {
        if (claim.verification_status !== "source-reviewed") {
          expect(claim.public_use_approval).toBe(false);
        }
      }
    }
  });

  it("renders source status, dates, build labels, and missing fields", () => {
    render(<FrameworkEvidence publication={getFrameworkPublication("job-loss-income-shock-stabilizer")!} />);
    expect(screen.getByText("D: Design hypothesis")).toBeVisible();
    expect(screen.getAllByText(/Not yet/).length).toBeGreaterThan(0);
    expect(screen.getByText("Research Win")).toBeInTheDocument();
    expect(screen.getByText("source-identified")).toBeInTheDocument();
    expect(screen.getByText(/Last reviewed: 2026-07-09/)).toBeInTheDocument();
    expect(BUILD_UPDATE_TYPES).toEqual(["Verified Win", "Research Win", "Correction", "Failed Attempt", "Open Question", "Next Attempt"]);
  });

  it("renders Framework 04 as a missing-package vertical slice", () => {
    const publication = getFrameworkPublication("black-maternal-health-emergency-response-system")!;
    expect(publication.documentation_completeness).toBe("not-documented");
    expect(publication.build_record[0]).toMatchObject({
      type: "Open Question",
      evidence_path: "docs/SOURCE_REVIEW_QUEUE.md",
    });
    render(<FrameworkEvidence publication={publication} />);
    expect(screen.getByText(/No Framework 04 research or publication package/)).toBeInTheDocument();
    expect(screen.getByText(/Merge or author the missing research package/)).toBeVisible();
  });

  it("keeps field-validation unavailable without measured evidence", () => {
    expect(frameworkMasterMatrix.some((item) => item.maturity_stage === MaturityStage.FieldValidated)).toBe(false);
    expect(frameworkPublications.flatMap((item) => item.claims).some((claim) => claim.claim_class === "F")).toBe(false);
  });

  it("renders the 01–13 system map in keyboard-accessible linear order", async () => {
    const user = userEvent.setup();
    render(<SystemMapPage />);
    const links = screen.getAllByRole("link", { name: /Framework|Open framework/i });
    expect(screen.getByRole("heading", { name: /Enterprise-layer infrastructure system map/i })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Text alternative" })).toBeVisible();
    expect(links.length).toBeGreaterThanOrEqual(26);
    document.body.focus();
    await user.tab();
    expect(document.activeElement?.tagName).toBe("A");
    expect(document.querySelectorAll('a[href^="/frameworks/"]').length).toBeGreaterThanOrEqual(26);
  });
});

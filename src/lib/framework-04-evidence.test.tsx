import { readFileSync } from "node:fs";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FrameworkEvidence from "../app/frameworks/[slug]/FrameworkEvidence";
import { framework04Claims } from "./framework-04-evidence";
import { getFrameworkBySlug, MaturityStage } from "./framework-master-matrix";
import { getFrameworkPublication } from "./framework-publication";

const slug = "black-maternal-health-emergency-response-system";
const publication = getFrameworkPublication(slug)!;

describe("Framework 04 evidence integrity", () => {
  it("maps every approved public statistic to a dated claim record", () => {
    const contentMap = readFileSync("frameworks/04-black-maternal-health-emergency-response-system/social/CONTENT-SOURCE-MAP.md", "utf8");
    const statisticalClaims = framework04Claims.filter((claim) => claim.value !== null);
    expect(statisticalClaims).toHaveLength(3);
    for (const claim of statisticalClaims) {
      expect(contentMap).toContain(claim.claim_id);
      expect(claim.public_use_approval).toBe(true);
      expect(claim.data_year).toBeTruthy();
      expect(claim.measurement_window).toBeTruthy();
      expect(claim.denominator).toBeTruthy();
    }
  });

  it("requires complete metadata for approved factual claims", () => {
    for (const claim of framework04Claims.filter((item) => item.public_use_approval)) {
      expect(claim.source_title).toBeTruthy();
      expect(claim.publisher).toBeTruthy();
      expect(claim.url_or_doi).toMatch(/^https:\/\//);
      expect(claim.access_date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(claim.reviewer).toBeTruthy();
      expect(claim.review_date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(claim.limitations.length).toBeGreaterThan(0);
      expect(["primary", "secondary"]).toContain(claim.source_type);
    }
  });

  it("keeps unresolved claims visibly unapproved", () => {
    const unresolved = framework04Claims.filter((claim) => !claim.public_use_approval);
    expect(unresolved).toHaveLength(5);
    expect(unresolved.every((claim) => claim.verification_status !== "source-reviewed")).toBe(true);
    expect(unresolved.every((claim) => ["awaiting-review", "unsuitable-for-public-use"].includes(claim.review_disposition!))).toBe(true);
  });

  it("shows data windows and external source links", () => {
    render(<FrameworkEvidence publication={publication} />);
    expect(screen.getAllByText("Measurement window")).toHaveLength(framework04Claims.length);
    expect(screen.getAllByText("During pregnancy or within 42 days after pregnancy ends")).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: /Maternal Mortality Rates in the United States, 2024/ }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Open primary source" })).toHaveLength(publication.sources.length);
  });

  it("has no measured result or unsupported expert status", () => {
    expect(framework04Claims.some((claim) => claim.claim_class === "F")).toBe(false);
    const framework = getFrameworkBySlug(slug)!;
    expect(framework.maturity_stage).toBe(MaturityStage.StructuredFramework);
    expect(framework.expert_review).toBeFalsy();
    expect(publication.pilot_status).toContain("Not pilot-ready");
  });

  it("preserves the canonical related-framework relationship", () => {
    expect(publication.related_framework_slugs).toEqual(["womens-health-longitudinal-dashboard"]);
    render(<FrameworkEvidence publication={publication} />);
    expect(screen.getAllByRole("link", { name: /Framework 01: Women's Health Longitudinal Dashboard/ }).at(-1)).toHaveAttribute("href", "/frameworks/womens-health-longitudinal-dashboard");
  });
});
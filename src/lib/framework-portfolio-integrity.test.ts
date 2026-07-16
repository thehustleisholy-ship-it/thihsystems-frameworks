import fs from "fs";
import path from "path";
import { describe, expect, it } from "vitest";
import FrameworkDetailPage from "../app/frameworks/[slug]/page";
import {
  frameworkMasterMatrix,
  MaturityStage,
} from "./framework-master-matrix";
import { frameworks } from "./framework-content";
import {
  archivedInteractiveArtifactRecords,
  interactiveArtifactMatrix,
} from "./interactive-artifact-matrix";
import {
  matrixExportPaths,
  renderMatrixCSV,
  renderMatrixJSON,
  renderMatrixMarkdown,
} from "../../scripts/export-framework-master-matrix";

const slugs = new Set(frameworkMasterMatrix.map((framework) => framework.slug));

describe("canonical framework portfolio", () => {
  it("contains exactly 30 unique, titled active frameworks", () => {
    expect(frameworkMasterMatrix).toHaveLength(30);
    expect(new Set(frameworkMasterMatrix.map((item) => item.framework_number)).size).toBe(30);
    expect(slugs.size).toBe(30);
    expect(frameworkMasterMatrix.every((item) => item.framework_title.trim().length > 0)).toBe(true);
  });

  it("owns every detail and preview route", () => {
    for (const framework of frameworkMasterMatrix) {
      expect(framework.framework_url).toBe(`/frameworks/${framework.slug}`);
      expect(framework.demo_url).toBe(`/frameworks/${framework.slug}/demo`);
    }
  });

  it("keeps relationships valid and reciprocal", () => {
    for (const framework of frameworkMasterMatrix) {
      for (const relatedSlug of framework.related_framework_slugs) {
        expect(slugs.has(relatedSlug)).toBe(true);
        const related = frameworkMasterMatrix.find((item) => item.slug === relatedSlug);
        expect(related?.related_framework_slugs).toContain(framework.slug);
      }
    }
  });

  it("derives public presentation identity from the canonical registry", () => {
    expect(frameworks).toHaveLength(30);
    for (const canonical of frameworkMasterMatrix) {
      const derived = frameworks.find((framework) => framework.slug === canonical.slug);
      expect(derived).toMatchObject({
        number: `Framework ${canonical.framework_number}`,
        title: canonical.framework_title,
        category: canonical.category,
        enterpriseLayer: canonical.enterprise_layer,
      });
      expect(derived?.links.detail).toBe(canonical.framework_url);
      expect(derived?.links.demo).toBe(canonical.demo_url);
    }
  });

  it("prevents archived artifact identities from entering the active catalog", () => {
    expect(interactiveArtifactMatrix).toHaveLength(30);
    for (const artifact of interactiveArtifactMatrix) {
      const canonical = frameworkMasterMatrix.find(
        (framework) => framework.framework_number === artifact.framework_number,
      );
      expect(artifact.framework_title).toBe(canonical?.framework_title);
      expect(artifact.framework_slug).toBe(canonical?.slug);
      expect(artifact.proposed_route).toBe(canonical?.demo_url);
    }

    expect(
      archivedInteractiveArtifactRecords.some(
        (record) =>
          record.framework_number === "04" &&
          record.framework_slug === "water-stressed-agricultural-financing",
      ),
    ).toBe(true);
  });

  it("marks legacy numbered directories as archived", () => {
    for (const directory of [
      "02-service-trade-intake-stewardship",
      "03-real-estate-client-clarity-framework",
    ]) {
      expect(fs.existsSync(path.join(process.cwd(), "frameworks", directory, "ARCHIVED.md"))).toBe(true);
      expect(slugs.has(directory.replace(/^\d+-/, ""))).toBe(false);
    }
  });

  it("does not assign maturity beyond repository evidence", () => {
    const interactiveSlugs = new Set([
      "womens-health-longitudinal-dashboard",
      "managed-aquifer-recharge-water-banking",
    ]);

    for (const framework of frameworkMasterMatrix) {
      if (framework.maturity_stage === MaturityStage.InteractivePrototype) {
        expect(interactiveSlugs.has(framework.slug)).toBe(true);
        expect(framework.preview_type).toBe("interactive-prototype");
      }
      if (framework.maturity_stage === MaturityStage.SourceReviewed) {
        expect(framework.research_citations.length).toBeGreaterThan(0);
      }
      if (framework.maturity_stage === MaturityStage.ExpertReviewed) {
        expect(framework.expert_review?.reviewer).toBeTruthy();
        expect(framework.expert_review?.reviewed_on).toBeTruthy();
      }
      expect([
        MaturityStage.PilotReady,
        MaturityStage.FieldValidated,
      ]).not.toContain(framework.maturity_stage);
    }
  });

  it("throws a real Next.js 404 for an unknown framework slug", async () => {
    await expect(
      FrameworkDetailPage({
        params: Promise.resolve({ slug: "not-a-real-framework" }),
      }),
    ).rejects.toThrow(/NEXT_HTTP_ERROR_FALLBACK;404/);
  });
  it("keeps every generated export byte-for-byte fresh", () => {
    const expected = {
      json: renderMatrixJSON(frameworkMasterMatrix),
      csv: renderMatrixCSV(frameworkMasterMatrix),
      markdown: renderMatrixMarkdown(frameworkMasterMatrix),
    };
    for (const format of Object.keys(expected) as Array<keyof typeof expected>) {
      expect(fs.readFileSync(matrixExportPaths[format], "utf8")).toBe(expected[format]);
    }
  });
});

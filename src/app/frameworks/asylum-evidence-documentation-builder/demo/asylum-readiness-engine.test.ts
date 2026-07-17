import { describe, expect, it } from "vitest";
import { compileReadiness, SYNTHETIC_SCENARIOS } from "./asylum-readiness-engine";

describe("compileReadiness", () => {
  it("preserves conflicts as visible legal-review flags", () => {
    const result = compileReadiness(SYNTHETIC_SCENARIOS["early-assembly"].controls);
    expect(result.flags.join(" ")).toContain("4 chronology conflicts");
    expect(result.flags.join(" ")).toContain("not erased");
  });
  it("never returns eligibility, credibility, testimony, or outcome fields", () => {
    const result = compileReadiness(SYNTHETIC_SCENARIOS["review-ready"].controls);
    expect(Object.keys(result)).not.toEqual(expect.arrayContaining(["eligibility", "credibility", "testimony", "approvalPrediction"]));
  });
  it("clamps malformed input deterministically", () => {
    const result = compileReadiness({ ...SYNTHETIC_SCENARIOS["early-assembly"].controls, chronology: 99, translationQueue: -2 });
    expect(result.controls.chronology).toBe(5);
    expect(result.controls.translationQueue).toBe(0);
  });
});

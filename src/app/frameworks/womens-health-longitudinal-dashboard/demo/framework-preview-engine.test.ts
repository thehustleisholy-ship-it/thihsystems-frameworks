import { describe, expect, it } from "vitest";

import { PRESETS, compileFrameworkData } from "./framework-preview-engine";

describe("compileFrameworkData", () => {
  it.each([
    [5, "sparse", true],
    [6, "developing", false],
    [11, "developing", false],
    [12, "longitudinal", false],
  ] as const)("maps %i cycles to %s evidence", (cycles, status, locked) => {
    const result = compileFrameworkData({ cycles, pain: 5, fatigue: 5, sleep: 5 });

    expect(result.evidenceStatus).toBe(status);
    expect(result.isInsightLocked).toBe(locked);
  });

  it("uses the exact sparse lock message", () => {
    const result = compileFrameworkData({ cycles: 5, pain: 5, fatigue: 5, sleep: 5 });

    expect(result.insightText).toBe(
      "At least 6 tracked cycles are needed before recurring-pattern insights unlock.",
    );
    expect(result.insightText).not.toMatch(/clear recurring|longitudinal pattern/i);
  });

  it("is deterministic and does not mutate preset seeds", () => {
    const seed = { ...PRESETS["pain-longitudinal"].controls };

    expect(compileFrameworkData(seed)).toEqual(compileFrameworkData(seed));
    expect(PRESETS["pain-longitudinal"].controls).toEqual(seed);
  });

  it("updates the fatigue heatmap row without altering the pain row", () => {
    const base = compileFrameworkData({ cycles: 12, pain: 4, fatigue: 4, sleep: 4 });
    const changed = compileFrameworkData({
      cycles: 12,
      pain: 4,
      fatigue: 9,
      sleep: 4,
    });

    expect(changed.heatmap.find((row) => row.symptom === "Fatigue")).not.toEqual(
      base.heatmap.find((row) => row.symptom === "Fatigue"),
    );
    expect(changed.heatmap.find((row) => row.symptom === "Pain")).toEqual(
      base.heatmap.find((row) => row.symptom === "Pain"),
    );
  });

  it("clamps controls before deriving outputs", () => {
    const result = compileFrameworkData({
      cycles: 100,
      pain: 0,
      fatigue: 99,
      sleep: -3,
    });

    expect(result.controls).toEqual({
      cycles: 24,
      pain: 1,
      fatigue: 10,
      sleep: 1,
    });
    expect(result.visitSummary).toContain("24 tracked cycles");
    expect(result.visitSummary).toContain("Pain 1/10");
    expect(result.visitSummary).toContain("Fatigue 10/10");
    expect(result.visitSummary).toContain("Sleep disruption 1/10");
  });

  it("compiles timeline and summary from the evidence tier", () => {
    const sparse = compileFrameworkData({ cycles: 5, pain: 7, fatigue: 3, sleep: 2 });
    const developing = compileFrameworkData({
      cycles: 6,
      pain: 3,
      fatigue: 8,
      sleep: 7,
    });
    const longitudinal = compileFrameworkData({
      cycles: 12,
      pain: 8,
      fatigue: 3,
      sleep: 2,
    });

    expect(sparse.timeline).toHaveLength(3);
    expect(developing.timeline[0].description).toContain("6 tracked cycles");
    expect(longitudinal.visitSummary).toMatch(/recurring pattern/i);
    expect(sparse.visitSummary).not.toMatch(/recurring pattern/i);
    expect(developing.visitSummary).not.toMatch(/recurring pattern/i);
  });

  it("returns deeply serializable data", () => {
    const result = compileFrameworkData(PRESETS["fatigue-developing"].controls);

    expect(JSON.parse(JSON.stringify(result))).toEqual(result);
  });
});

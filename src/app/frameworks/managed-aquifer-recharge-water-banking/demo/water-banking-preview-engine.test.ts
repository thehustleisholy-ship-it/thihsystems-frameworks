import { describe, expect, it } from "vitest";

import {
  WATER_BANKING_PRESETS,
  compileWaterBankingPreview,
} from "./water-banking-preview-engine";

describe("compileWaterBankingPreview", () => {
  it("returns unmapped readiness with limited-confidence language", () => {
    const result = compileWaterBankingPreview({
      basinStress: 9,
      extractionPressure: 9,
      rechargeReadiness: 2,
      surplusWater: 3,
      monitoringQuality: 2,
      droughtDuration: 18,
      qualityRisk: 8,
      governanceReadiness: 2,
    });

    expect(result.readinessStatus).toBe("unmapped");
    expect(result.readinessLabel).toBe("Unmapped basin visibility");
    expect(result.readinessMessage).toMatch(/not enough monitored/i);
    expect(result.readinessMessage).not.toMatch(/operational confidence/i);
    expect(result.waterBankBalanceEstimate).toMatch(/conceptual/i);
  });

  it("returns developing readiness with partial monitoring and site readiness", () => {
    const result = compileWaterBankingPreview({
      basinStress: 7,
      extractionPressure: 6,
      rechargeReadiness: 6,
      surplusWater: 6,
      monitoringQuality: 6,
      droughtDuration: 12,
      qualityRisk: 5,
      governanceReadiness: 5,
    });

    expect(result.readinessStatus).toBe("developing");
    expect(result.readinessLabel).toBe("Developing recharge pathway");
    expect(result.readinessMessage).toMatch(/partial/i);
    expect(result.governanceGapSummary).toMatch(/governance/i);
  });

  it("returns operational readiness only when monitoring, recharge, surplus water, and governance are strong", () => {
    const almostOperational = compileWaterBankingPreview({
      basinStress: 6,
      extractionPressure: 5,
      rechargeReadiness: 8,
      surplusWater: 8,
      monitoringQuality: 8,
      droughtDuration: 10,
      qualityRisk: 3,
      governanceReadiness: 6,
    });
    const operational = compileWaterBankingPreview({
      basinStress: 6,
      extractionPressure: 5,
      rechargeReadiness: 8,
      surplusWater: 8,
      monitoringQuality: 8,
      droughtDuration: 10,
      qualityRisk: 3,
      governanceReadiness: 8,
    });

    expect(almostOperational.readinessStatus).toBe("developing");
    expect(operational.readinessStatus).toBe("operational");
    expect(operational.readinessLabel).toBe("Operational water-bank readiness");
    expect(operational.readinessMessage).not.toMatch(/predict/i);
  });

  it("clamps controls before deriving outputs", () => {
    const result = compileWaterBankingPreview({
      basinStress: 0,
      extractionPressure: 99,
      rechargeReadiness: -3,
      surplusWater: 14,
      monitoringQuality: Number.NaN,
      droughtDuration: 99,
      qualityRisk: 0,
      governanceReadiness: 12,
    });

    expect(result.controls).toEqual({
      basinStress: 1,
      extractionPressure: 10,
      rechargeReadiness: 1,
      surplusWater: 10,
      monitoringQuality: 1,
      droughtDuration: 24,
      qualityRisk: 1,
      governanceReadiness: 10,
    });
    expect(result.droughtReserveStatus).toContain("24-month");
  });

  it("is deterministic for identical inputs", () => {
    const input = WATER_BANKING_PRESETS["recharge-developing"].controls;

    expect(compileWaterBankingPreview(input)).toEqual(
      compileWaterBankingPreview(input),
    );
  });

  it("does not mutate preset controls", () => {
    const seed = {
      ...WATER_BANKING_PRESETS["operational-water-bank"].controls,
    };

    compileWaterBankingPreview(seed);

    expect(WATER_BANKING_PRESETS["operational-water-bank"].controls).toEqual(seed);
  });

  it("returns JSON-serializable output", () => {
    const result = compileWaterBankingPreview(
      WATER_BANKING_PRESETS["stressed-unmapped"].controls,
    );

    expect(JSON.parse(JSON.stringify(result))).toEqual(result);
  });

  it("lets quality risk change the quality alert without unnecessarily changing basin stress language", () => {
    const base = compileWaterBankingPreview({
      basinStress: 7,
      extractionPressure: 7,
      rechargeReadiness: 7,
      surplusWater: 7,
      monitoringQuality: 7,
      droughtDuration: 9,
      qualityRisk: 2,
      governanceReadiness: 7,
    });
    const changed = compileWaterBankingPreview({
      basinStress: 7,
      extractionPressure: 7,
      rechargeReadiness: 7,
      surplusWater: 7,
      monitoringQuality: 7,
      droughtDuration: 9,
      qualityRisk: 9,
      governanceReadiness: 7,
    });

    expect(changed.qualityAlertLevel).not.toBe(base.qualityAlertLevel);
    expect(changed.basinStressSignal).toBe(base.basinStressSignal);
    expect(changed.crossSectionBands.find((band) => band.id === "quality")).not.toEqual(
      base.crossSectionBands.find((band) => band.id === "quality"),
    );
  });

  it("uses drought duration in reserve status and action pathway language", () => {
    const shortDrought = compileWaterBankingPreview({
      basinStress: 5,
      extractionPressure: 5,
      rechargeReadiness: 7,
      surplusWater: 7,
      monitoringQuality: 7,
      droughtDuration: 4,
      qualityRisk: 3,
      governanceReadiness: 7,
    });
    const longDrought = compileWaterBankingPreview({
      basinStress: 5,
      extractionPressure: 5,
      rechargeReadiness: 7,
      surplusWater: 7,
      monitoringQuality: 7,
      droughtDuration: 20,
      qualityRisk: 3,
      governanceReadiness: 7,
    });

    expect(shortDrought.droughtReserveStatus).toContain("4-month");
    expect(longDrought.droughtReserveStatus).toContain("20-month");
    expect(longDrought.actionPathway24Month.join(" ")).toMatch(/reserve/i);
    expect(longDrought.actionPathway24Month).not.toEqual(
      shortDrought.actionPathway24Month,
    );
  });
});

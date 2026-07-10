export type WaterBankingPresetId =
  | "stressed-unmapped"
  | "recharge-developing"
  | "operational-water-bank";

export type WaterBankingReadinessStatus =
  | "unmapped"
  | "developing"
  | "operational";

export type WaterBankingSignalToken = "mint" | "amber" | "red";

export type WaterBankingControls = {
  basinStress: number;
  extractionPressure: number;
  rechargeReadiness: number;
  surplusWater: number;
  monitoringQuality: number;
  droughtDuration: number;
  qualityRisk: number;
  governanceReadiness: number;
};

export type WaterBankingPreset = {
  id: WaterBankingPresetId;
  name: string;
  description: string;
  controls: WaterBankingControls;
};

export type CrossSectionBand = {
  id: string;
  label: string;
  signal: WaterBankingSignalToken;
  value: number;
  explanation: string;
};

export type WaterBankingPreviewOutput = {
  controls: WaterBankingControls;
  readinessStatus: WaterBankingReadinessStatus;
  readinessLabel: string;
  readinessMessage: string;
  basinStressSignal: string;
  waterBankBalanceEstimate: string;
  rechargeOpportunityWindow: string;
  droughtReserveStatus: string;
  qualityAlertLevel: string;
  governanceGapSummary: string;
  actionPathway24Month: string[];
  procurementPolicyNotes: string[];
  crossSectionBands: CrossSectionBand[];
};

export const WATER_BANKING_PRESETS: Record<
  WaterBankingPresetId,
  WaterBankingPreset
> = {
  "stressed-unmapped": {
    id: "stressed-unmapped",
    name: "Stressed / unmapped",
    description: "High depletion pressure with weak monitoring and governance.",
    controls: {
      basinStress: 9,
      extractionPressure: 9,
      rechargeReadiness: 2,
      surplusWater: 3,
      monitoringQuality: 2,
      droughtDuration: 18,
      qualityRisk: 8,
      governanceReadiness: 2,
    },
  },
  "recharge-developing": {
    id: "recharge-developing",
    name: "Recharge developing",
    description: "Some recharge capacity with incomplete governance structure.",
    controls: {
      basinStress: 7,
      extractionPressure: 6,
      rechargeReadiness: 6,
      surplusWater: 6,
      monitoringQuality: 6,
      droughtDuration: 12,
      qualityRisk: 5,
      governanceReadiness: 5,
    },
  },
  "operational-water-bank": {
    id: "operational-water-bank",
    name: "Operational water bank",
    description: "Stronger monitoring, recharge pathway, surplus water, and governance.",
    controls: {
      basinStress: 5,
      extractionPressure: 5,
      rechargeReadiness: 8,
      surplusWater: 8,
      monitoringQuality: 8,
      droughtDuration: 9,
      qualityRisk: 3,
      governanceReadiness: 8,
    },
  },
};

function clampInteger(value: number, minimum: number, maximum: number) {
  if (!Number.isFinite(value)) {
    return minimum;
  }

  return Math.min(maximum, Math.max(minimum, Math.round(value)));
}

function normalizeControls(
  controls: WaterBankingControls,
): WaterBankingControls {
  return {
    basinStress: clampInteger(controls.basinStress, 1, 10),
    extractionPressure: clampInteger(controls.extractionPressure, 1, 10),
    rechargeReadiness: clampInteger(controls.rechargeReadiness, 1, 10),
    surplusWater: clampInteger(controls.surplusWater, 1, 10),
    monitoringQuality: clampInteger(controls.monitoringQuality, 1, 10),
    droughtDuration: clampInteger(controls.droughtDuration, 1, 24),
    qualityRisk: clampInteger(controls.qualityRisk, 1, 10),
    governanceReadiness: clampInteger(controls.governanceReadiness, 1, 10),
  };
}

function getReadinessStatus(
  controls: WaterBankingControls,
): WaterBankingReadinessStatus {
  const visibilityGate =
    controls.monitoringQuality >= 4 &&
    controls.rechargeReadiness >= 4 &&
    controls.governanceReadiness >= 4;
  const operationalGate =
    controls.monitoringQuality >= 8 &&
    controls.rechargeReadiness >= 8 &&
    controls.surplusWater >= 7 &&
    controls.governanceReadiness >= 8;

  if (!visibilityGate) {
    return "unmapped";
  }

  if (operationalGate) {
    return "operational";
  }

  return "developing";
}

function readinessLabel(status: WaterBankingReadinessStatus) {
  if (status === "unmapped") {
    return "Unmapped basin visibility";
  }

  if (status === "developing") {
    return "Developing recharge pathway";
  }

  return "Operational water-bank readiness";
}

function readinessMessage(
  status: WaterBankingReadinessStatus,
  controls: WaterBankingControls,
) {
  if (status === "unmapped") {
    return "There is not enough monitored basin visibility, recharge readiness, or governance structure to frame this as more than an educational continuity map.";
  }

  if (status === "developing") {
    return `Partial monitoring and site readiness are present, but operational confidence is withheld until monitoring, surplus-water access, and governance controls are stronger. Drought planning window: ${controls.droughtDuration} months.`;
  }

  return "Monitoring, recharge pathway, surplus-water access, and governance structure are strong enough for operational readiness language, while still avoiding claims about actual basin outcomes.";
}

function signalFromValue(value: number, inverted = false): WaterBankingSignalToken {
  if (inverted) {
    if (value >= 8) {
      return "red";
    }

    if (value >= 5) {
      return "amber";
    }

    return "mint";
  }

  if (value >= 8) {
    return "mint";
  }

  if (value >= 5) {
    return "amber";
  }

  return "red";
}

function basinStressSignal(controls: WaterBankingControls) {
  const pressureIndex = Math.round(
    (controls.basinStress + controls.extractionPressure) / 2,
  );

  if (pressureIndex >= 8) {
    return `High basin stress signal: extraction pressure and depletion indicators are elevated at ${pressureIndex}/10. This is a visibility flag, not a hydrological forecast.`;
  }

  if (pressureIndex >= 5) {
    return `Moderate basin stress signal: pressure is visible at ${pressureIndex}/10 and should be paired with monitoring before any project claim is made.`;
  }

  return `Lower basin stress signal: pressure is currently framed at ${pressureIndex}/10, with continued monitoring required before resilience claims.`;
}

function waterBankBalanceEstimate(controls: WaterBankingControls) {
  const balanceScore = clampInteger(
    controls.surplusWater +
      controls.rechargeReadiness -
      Math.round((controls.basinStress + controls.extractionPressure) / 2),
    1,
    10,
  );

  if (balanceScore >= 7) {
    return `Conceptual positive water-bank balance: recharge capacity and surplus-water access score ${balanceScore}/10 against current pressure. This is not a volume estimate.`;
  }

  if (balanceScore >= 4) {
    return `Conceptual constrained water-bank balance: recharge inputs score ${balanceScore}/10 and need field validation before being treated as a reserve.`;
  }

  return `Conceptual deficit water-bank balance: current pressure outruns visible recharge inputs at ${balanceScore}/10. No actual basin storage outcome is predicted.`;
}

function rechargeOpportunityWindow(controls: WaterBankingControls) {
  const opportunityScore = Math.round(
    (controls.rechargeReadiness + controls.surplusWater) / 2,
  );

  if (opportunityScore >= 8) {
    return `Strong recharge opportunity window: site readiness and surplus-water access combine at ${opportunityScore}/10 for structured feasibility review.`;
  }

  if (opportunityScore >= 5) {
    return `Conditional recharge opportunity window: inputs combine at ${opportunityScore}/10, enough to organize screening but not enough for implementation claims.`;
  }

  return `Narrow recharge opportunity window: inputs combine at ${opportunityScore}/10, so the next step is mapping candidate recharge pathways.`;
}

function droughtReserveStatus(controls: WaterBankingControls) {
  if (controls.droughtDuration >= 18) {
    return `${controls.droughtDuration}-month drought reserve stress: continuity planning should prioritize reserve rules, demand triggers, and emergency allocation governance.`;
  }

  if (controls.droughtDuration >= 9) {
    return `${controls.droughtDuration}-month drought reserve watch: the preview should connect recharge timing to seasonal demand and stored-water governance.`;
  }

  return `${controls.droughtDuration}-month drought reserve watch: shorter drought duration still requires baseline storage and monitoring assumptions before reserve value is claimed.`;
}

function qualityAlertLevel(controls: WaterBankingControls) {
  if (controls.qualityRisk >= 8) {
    return "High quality watchpoint: water-quality risk is elevated and must be reviewed before any recharge pathway is treated as viable.";
  }

  if (controls.qualityRisk >= 5) {
    return "Moderate quality watchpoint: quality review remains a gating workstream for recharge screening.";
  }

  return "Lower quality watchpoint: quality risk is not the leading constraint, but monitoring and permitting review still apply.";
}

function governanceGapSummary(
  status: WaterBankingReadinessStatus,
  controls: WaterBankingControls,
) {
  if (controls.governanceReadiness < 4) {
    return "Governance gap: ownership, recharge rights, operating rules, and public-accountability structures are not yet mapped.";
  }

  if (status === "operational") {
    return "Governance readiness is strong enough to frame operating rules, procurement roles, and policy review in parallel.";
  }

  return "Governance is partially visible, but procurement authority, water-rights review, and public reporting rules still need tightening.";
}

function actionPathway24Month(
  status: WaterBankingReadinessStatus,
  controls: WaterBankingControls,
) {
  if (status === "unmapped") {
    return [
      "Months 0-6: map monitoring gaps, basin stress indicators, recharge candidates, and water-quality watchpoints.",
      "Months 6-12: define governance owners, water-rights questions, public reporting duties, and feasibility review scope.",
      `Months 12-24: convert the ${controls.droughtDuration}-month drought scenario into reserve objectives without claiming predicted storage outcomes.`,
    ];
  }

  if (status === "developing") {
    return [
      "Months 0-6: validate candidate recharge pathways, monitoring coverage, and surplus-water timing.",
      "Months 6-12: build procurement language for feasibility, hydrogeology, engineering, permitting, and public reporting.",
      controls.droughtDuration >= 18
        ? `Months 12-24: stress-test reserve governance against a ${controls.droughtDuration}-month drought continuity window.`
        : `Months 12-24: connect recharge operations to the ${controls.droughtDuration}-month drought reserve planning window.`,
    ];
  }

  return [
    "Months 0-6: prepare operational feasibility review, monitoring protocols, and recharge-source validation.",
    "Months 6-12: align procurement, permitting, water-quality review, and governance authority.",
    controls.droughtDuration >= 18
      ? `Months 12-24: formalize reserve operating rules for the ${controls.droughtDuration}-month drought continuity case.`
      : `Months 12-24: document water-bank reserve rules for the ${controls.droughtDuration}-month drought planning case.`,
  ];
}

function procurementPolicyNotes(
  status: WaterBankingReadinessStatus,
  controls: WaterBankingControls,
) {
  const notes = [
    "Procure qualified hydrogeology, engineering, water-quality, legal, and permitting review before site-specific decisions.",
    "Separate conceptual dashboard signals from measured recharge volumes, basin response, and legal water-bank accounting.",
  ];

  if (status === "unmapped") {
    return [
      ...notes,
      "Policy next step: fund basin visibility, monitoring coverage, and public-interest governance before project claims.",
    ];
  }

  if (status === "developing") {
    return [
      ...notes,
      "Policy next step: define pilot criteria, operating authority, reporting cadence, and drought-reserve triggers.",
    ];
  }

  return [
    ...notes,
    `Policy next step: convert the ${controls.droughtDuration}-month reserve case into procurement language, permitting review, and public-accountability thresholds.`,
  ];
}

function crossSectionBands(controls: WaterBankingControls): CrossSectionBand[] {
  const pressureIndex = Math.round(
    (controls.basinStress + controls.extractionPressure) / 2,
  );
  const rechargeIndex = Math.round(
    (controls.rechargeReadiness + controls.surplusWater) / 2,
  );
  const reserveIndex = clampInteger(25 - controls.droughtDuration, 1, 24);

  return [
    {
      id: "pressure",
      label: "Basin pressure",
      signal: signalFromValue(pressureIndex, true),
      value: pressureIndex,
      explanation: "Combines basin stress and extraction pressure as an educational visibility signal.",
    },
    {
      id: "recharge",
      label: "Recharge pathway",
      signal: signalFromValue(rechargeIndex),
      value: rechargeIndex,
      explanation: "Combines recharge readiness and surplus-water availability for planning visibility.",
    },
    {
      id: "monitoring",
      label: "Monitoring visibility",
      signal: signalFromValue(controls.monitoringQuality),
      value: controls.monitoringQuality,
      explanation: "Represents whether the basin can be observed before confidence language is used.",
    },
    {
      id: "quality",
      label: "Quality watchpoint",
      signal: signalFromValue(controls.qualityRisk, true),
      value: controls.qualityRisk,
      explanation: "Flags water-quality review as a gate, not a clinical or regulatory determination.",
    },
    {
      id: "governance",
      label: "Governance readiness",
      signal: signalFromValue(controls.governanceReadiness),
      value: controls.governanceReadiness,
      explanation: "Represents operating authority, accountability, water-rights review, and policy readiness.",
    },
    {
      id: "reserve",
      label: "Drought reserve runway",
      signal:
        controls.droughtDuration >= 18
          ? "red"
          : controls.droughtDuration >= 9
            ? "amber"
            : "mint",
      value: reserveIndex,
      explanation: "Translates drought duration into continuity-planning pressure without predicting storage.",
    },
  ];
}

export function compileWaterBankingPreview(
  input: WaterBankingControls,
): WaterBankingPreviewOutput {
  const controls = normalizeControls(input);
  const readinessStatus = getReadinessStatus(controls);

  return {
    controls,
    readinessStatus,
    readinessLabel: readinessLabel(readinessStatus),
    readinessMessage: readinessMessage(readinessStatus, controls),
    basinStressSignal: basinStressSignal(controls),
    waterBankBalanceEstimate: waterBankBalanceEstimate(controls),
    rechargeOpportunityWindow: rechargeOpportunityWindow(controls),
    droughtReserveStatus: droughtReserveStatus(controls),
    qualityAlertLevel: qualityAlertLevel(controls),
    governanceGapSummary: governanceGapSummary(readinessStatus, controls),
    actionPathway24Month: actionPathway24Month(readinessStatus, controls),
    procurementPolicyNotes: procurementPolicyNotes(readinessStatus, controls),
    crossSectionBands: crossSectionBands(controls),
  };
}

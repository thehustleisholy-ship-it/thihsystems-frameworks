export type PresetId =
  | "pain-longitudinal"
  | "fatigue-developing"
  | "mixed-sparse";

export type EvidenceStatus = "sparse" | "developing" | "longitudinal";
export type ToneToken = "mint" | "amber";
export type CyclePhase = "menstrual" | "follicular" | "ovulation" | "luteal";
export type SymptomName = "Pain" | "Fatigue" | "Sleep disruption";

export type ControlsState = {
  cycles: number;
  pain: number;
  fatigue: number;
  sleep: number;
};

export type PresetConfig = {
  id: PresetId;
  name: string;
  description: string;
  controls: ControlsState;
};

export type HeatmapRow = {
  symptom: SymptomName;
  menstrual: number;
  follicular: number;
  ovulation: number;
  luteal: number;
};

export type TimelineItem = {
  id: string;
  marker: string;
  title: string;
  description: string;
};

export type DerivedFrameworkData = {
  controls: ControlsState;
  evidenceStatus: EvidenceStatus;
  evidenceLabel: string;
  tone: ToneToken;
  isInsightLocked: boolean;
  signalLabel: string;
  insightText: string;
  heatmap: HeatmapRow[];
  dominantCluster: string;
  strongestInsight: string;
  timeline: TimelineItem[];
  visitSummary: string;
};

export const SPARSE_LOCK_MESSAGE =
  "At least 6 tracked cycles are needed before recurring-pattern insights unlock.";

export const PRESETS: Record<PresetId, PresetConfig> = {
  "pain-longitudinal": {
    id: "pain-longitudinal",
    name: "Pain-dominant",
    description: "Longitudinal history",
    controls: { cycles: 14, pain: 8, fatigue: 3, sleep: 2 },
  },
  "fatigue-developing": {
    id: "fatigue-developing",
    name: "Fatigue + sleep",
    description: "Developing history",
    controls: { cycles: 8, pain: 2, fatigue: 7, sleep: 8 },
  },
  "mixed-sparse": {
    id: "mixed-sparse",
    name: "Mixed symptoms",
    description: "Sparse history",
    controls: { cycles: 3, pain: 5, fatigue: 6, sleep: 5 },
  },
};

const PHASES: CyclePhase[] = ["menstrual", "follicular", "ovulation", "luteal"];

const PHASE_LABELS: Record<CyclePhase, string> = {
  menstrual: "Menstrual phase",
  follicular: "Follicular phase",
  ovulation: "Ovulation window",
  luteal: "Luteal phase",
};

const HEATMAP_WEIGHTS: Record<SymptomName, Record<CyclePhase, number>> = {
  Pain: {
    menstrual: 1,
    follicular: 0.45,
    ovulation: 0.55,
    luteal: 0.85,
  },
  Fatigue: {
    menstrual: 0.65,
    follicular: 0.5,
    ovulation: 0.55,
    luteal: 1,
  },
  "Sleep disruption": {
    menstrual: 0.55,
    follicular: 0.45,
    ovulation: 0.6,
    luteal: 1,
  },
};

function clampInteger(value: number, minimum: number, maximum: number) {
  if (!Number.isFinite(value)) {
    return minimum;
  }

  return Math.min(maximum, Math.max(minimum, Math.round(value)));
}

function normalizeControls(controls: ControlsState): ControlsState {
  return {
    cycles: clampInteger(controls.cycles, 1, 24),
    pain: clampInteger(controls.pain, 1, 10),
    fatigue: clampInteger(controls.fatigue, 1, 10),
    sleep: clampInteger(controls.sleep, 1, 10),
  };
}

function getEvidenceStatus(cycles: number): EvidenceStatus {
  if (cycles < 6) {
    return "sparse";
  }

  if (cycles < 12) {
    return "developing";
  }

  return "longitudinal";
}

function getEvidenceLabel(evidenceStatus: EvidenceStatus) {
  if (evidenceStatus === "sparse") {
    return "Sparse evidence";
  }

  if (evidenceStatus === "developing") {
    return "Developing evidence";
  }

  return "Longitudinal evidence";
}

function getSignalLabel(evidenceStatus: EvidenceStatus) {
  if (evidenceStatus === "sparse") {
    return "Emerging signal";
  }

  if (evidenceStatus === "developing") {
    return "Patterns establishing";
  }

  return "Recurring pattern base";
}

function buildHeatmap(controls: ControlsState): HeatmapRow[] {
  const symptomValues: Record<SymptomName, number> = {
    Pain: controls.pain,
    Fatigue: controls.fatigue,
    "Sleep disruption": controls.sleep,
  };

  return (["Pain", "Fatigue", "Sleep disruption"] as const).map((symptom) => ({
    symptom,
    menstrual: clampInteger(
      symptomValues[symptom] * HEATMAP_WEIGHTS[symptom].menstrual,
      1,
      10,
    ),
    follicular: clampInteger(
      symptomValues[symptom] * HEATMAP_WEIGHTS[symptom].follicular,
      1,
      10,
    ),
    ovulation: clampInteger(
      symptomValues[symptom] * HEATMAP_WEIGHTS[symptom].ovulation,
      1,
      10,
    ),
    luteal: clampInteger(
      symptomValues[symptom] * HEATMAP_WEIGHTS[symptom].luteal,
      1,
      10,
    ),
  }));
}

function getDominantPhase(heatmap: HeatmapRow[]) {
  const totals = PHASES.map((phase) => ({
    phase,
    total: heatmap.reduce((sum, row) => sum + row[phase], 0),
  }));

  return totals.reduce((dominant, current) =>
    current.total >= dominant.total ? current : dominant,
  ).phase;
}

function getHighestSymptom(controls: ControlsState): SymptomName {
  const symptoms = [
    { symptom: "Pain" as const, value: controls.pain },
    { symptom: "Fatigue" as const, value: controls.fatigue },
    { symptom: "Sleep disruption" as const, value: controls.sleep },
  ];

  return symptoms.reduce((highest, current) =>
    current.value >= highest.value ? current : highest,
  ).symptom;
}

function compileInsightText(
  evidenceStatus: EvidenceStatus,
  controls: ControlsState,
  dominantCluster: string,
  highestSymptom: SymptomName,
) {
  if (evidenceStatus === "sparse") {
    return SPARSE_LOCK_MESSAGE;
  }

  if (evidenceStatus === "developing") {
    return `${highestSymptom} is forming a conditional ${dominantCluster.toLowerCase()} signal across ${controls.cycles} tracked cycles. Patterns establishing. Data variance stabilizing.`;
  }

  return `Recurring pattern detected across ${controls.cycles} tracked cycles, with ${highestSymptom.toLowerCase()} clustering most strongly in the ${dominantCluster.toLowerCase()}.`;
}

function compileStrongestInsight(
  evidenceStatus: EvidenceStatus,
  dominantCluster: string,
  highestSymptom: SymptomName,
) {
  if (evidenceStatus === "sparse") {
    return `${highestSymptom} is the strongest current input, but evidence depth is still gated.`;
  }

  if (evidenceStatus === "developing") {
    return `${highestSymptom} currently leads the matrix inside a developing ${dominantCluster.toLowerCase()} signal.`;
  }

  return `${highestSymptom} anchors the recurring pattern inside the ${dominantCluster.toLowerCase()} cluster.`;
}

function compileTimeline(
  evidenceStatus: EvidenceStatus,
  controls: ControlsState,
  dominantCluster: string,
  highestSymptom: SymptomName,
): TimelineItem[] {
  const cycleCopy = `${controls.cycles} tracked cycles`;

  if (evidenceStatus === "sparse") {
    return [
      {
        id: "coverage-gate",
        marker: "01",
        title: "Coverage gate",
        description: `${cycleCopy} keeps this in emerging-signal mode until more history is available.`,
      },
      {
        id: "strongest-input",
        marker: "02",
        title: "Strongest input",
        description: `${highestSymptom} is the leading input, but the engine avoids high-confidence language on sparse data.`,
      },
      {
        id: "next-depth",
        marker: "03",
        title: "Next depth threshold",
        description: "Six tracked cycles unlock developing evidence language while preserving non-diagnostic framing.",
      },
    ];
  }

  if (evidenceStatus === "developing") {
    return [
      {
        id: "coverage-gate",
        marker: "01",
        title: "Coverage gate",
        description: `${cycleCopy} clears the sparse-data gate and enables developing evidence language.`,
      },
      {
        id: "cluster-shape",
        marker: "02",
        title: "Cluster shape",
        description: `${dominantCluster} is the strongest current phase cluster, led by ${highestSymptom.toLowerCase()}.`,
      },
      {
        id: "longitudinal-threshold",
        marker: "03",
        title: "Longitudinal threshold",
        description: "Twelve tracked cycles unlock longitudinal phrasing after variance has more history to stabilize.",
      },
    ];
  }

  return [
    {
      id: "coverage-gate",
      marker: "01",
      title: "Coverage gate",
      description: `${cycleCopy} clears the longitudinal evidence threshold.`,
    },
    {
      id: "cluster-shape",
      marker: "02",
      title: "Cluster shape",
      description: `${dominantCluster} is the dominant phase cluster, led by ${highestSymptom.toLowerCase()}.`,
    },
    {
      id: "summary-window",
      marker: "03",
      title: "Visit summary window",
      description: "The generated summary can use recurring-pattern structure while staying non-diagnostic.",
    },
  ];
}

function compileVisitSummary(
  evidenceStatus: EvidenceStatus,
  controls: ControlsState,
  dominantCluster: string,
  highestSymptom: SymptomName,
) {
  const metrics = `${controls.cycles} tracked cycles; Pain ${controls.pain}/10; Fatigue ${controls.fatigue}/10; Sleep disruption ${controls.sleep}/10.`;

  if (evidenceStatus === "sparse") {
    return `Structured sample summary: ${metrics} Evidence status is sparse, so this framework labels the signal as emerging and withholds high-confidence pattern language. Dominant current cluster: ${dominantCluster}.`;
  }

  if (evidenceStatus === "developing") {
    return `Structured sample summary: ${metrics} Evidence status is developing. ${highestSymptom} is the leading input in the ${dominantCluster.toLowerCase()} cluster, with patterns establishing and variance still stabilizing.`;
  }

  return `Structured sample summary: ${metrics} Evidence status is longitudinal. ${highestSymptom} forms the clearest recurring pattern within the ${dominantCluster.toLowerCase()} cluster for structured, non-diagnostic visit preparation.`;
}

export function compileFrameworkData(input: ControlsState): DerivedFrameworkData {
  const controls = normalizeControls(input);
  const evidenceStatus = getEvidenceStatus(controls.cycles);
  const heatmap = buildHeatmap(controls);
  const dominantPhase = getDominantPhase(heatmap);
  const dominantCluster = PHASE_LABELS[dominantPhase];
  const highestSymptom = getHighestSymptom(controls);
  const isInsightLocked = evidenceStatus === "sparse";

  return {
    controls,
    evidenceStatus,
    evidenceLabel: getEvidenceLabel(evidenceStatus),
    tone: isInsightLocked ? "amber" : "mint",
    isInsightLocked,
    signalLabel: getSignalLabel(evidenceStatus),
    insightText: compileInsightText(
      evidenceStatus,
      controls,
      dominantCluster,
      highestSymptom,
    ),
    heatmap,
    dominantCluster,
    strongestInsight: compileStrongestInsight(
      evidenceStatus,
      dominantCluster,
      highestSymptom,
    ),
    timeline: compileTimeline(
      evidenceStatus,
      controls,
      dominantCluster,
      highestSymptom,
    ),
    visitSummary: compileVisitSummary(
      evidenceStatus,
      controls,
      dominantCluster,
      highestSymptom,
    ),
  };
}

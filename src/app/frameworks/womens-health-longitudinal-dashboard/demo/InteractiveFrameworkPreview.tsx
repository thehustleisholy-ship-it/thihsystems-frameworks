"use client";

import { useMemo, useState } from "react";

import {
  type ControlsState,
  type PresetId,
  PRESETS,
  compileFrameworkData,
} from "./framework-preview-engine";

const CONTROL_DEFINITIONS: Array<{
  key: keyof ControlsState;
  label: string;
  min: number;
  max: number;
  helper: string;
}> = [
  {
    key: "cycles",
    label: "Tracked cycles",
    min: 1,
    max: 24,
    helper: "History depth gate for evidence confidence.",
  },
  {
    key: "pain",
    label: "Pain",
    min: 1,
    max: 10,
    helper: "Synthetic severity input for phase clustering.",
  },
  {
    key: "fatigue",
    label: "Fatigue",
    min: 1,
    max: 10,
    helper: "Synthetic energy-disruption input.",
  },
  {
    key: "sleep",
    label: "Sleep disruption",
    min: 1,
    max: 10,
    helper: "Synthetic rest-continuity input.",
  },
];

const PHASE_COLUMNS = [
  ["menstrual", "Menstrual"],
  ["follicular", "Follicular"],
  ["ovulation", "Ovulation"],
  ["luteal", "Luteal"],
] as const;

const PRIVACY_NOTICE =
  "Privacy & architecture notice: This synthetic simulation runs entirely in your browser. Inputs are not stored, tracked, or transmitted. It demonstrates a patient-owned longitudinal data architecture and is not medical advice or a diagnostic tool.";

function cloneControls(presetId: PresetId): ControlsState {
  return { ...PRESETS[presetId].controls };
}

function toneClass(tone: "mint" | "amber") {
  return tone === "mint" ? "telemetry-mint" : "telemetry-amber";
}

export default function InteractiveFrameworkPreview() {
  const [activePreset, setActivePreset] = useState<PresetId>("pain-longitudinal");
  const [controls, setControls] = useState<ControlsState>(() =>
    cloneControls("pain-longitudinal"),
  );

  const derived = useMemo(() => compileFrameworkData(controls), [controls]);

  function selectPreset(presetId: PresetId) {
    setActivePreset(presetId);
    setControls(cloneControls(presetId));
  }

  function resetActivePreset() {
    setControls(cloneControls(activePreset));
  }

  function updateControl(key: keyof ControlsState, value: string) {
    setControls((current) => ({
      ...current,
      [key]: Number(value),
    }));
  }

  function handleSliderKey(
    key: keyof ControlsState,
    eventKey: string,
    min: number,
    max: number,
  ) {
    const delta =
      eventKey === "ArrowRight" || eventKey === "ArrowUp"
        ? 1
        : eventKey === "ArrowLeft" || eventKey === "ArrowDown"
          ? -1
          : 0;

    if (delta === 0) {
      return;
    }

    setControls((current) => ({
      ...current,
      [key]: Math.min(max, Math.max(min, current[key] + delta)),
    }));
  }

  return (
    <section
      aria-label="Interactive framework preview"
      className="grid gap-6 lg:grid-cols-[minmax(280px,0.75fr)_minmax(0,1.25fr)]"
    >
      <div className="space-y-6">
        <section className="glass-plane rounded-xl p-5 framework-live-transition">
          <h2 className="uppercase-label" id="preset-command-rail">
            Preset command rail
          </h2>
          <div
            aria-labelledby="preset-command-rail"
            className="mt-4 grid gap-3"
            role="group"
          >
            {(Object.keys(PRESETS) as PresetId[]).map((presetId) => {
              const preset = PRESETS[presetId];
              const isActive = presetId === activePreset;

              return (
                <button
                  aria-pressed={isActive}
                  className={`btn-secondary focus-ring framework-live-transition w-full justify-between text-left ${
                    isActive ? "telemetry-mint" : ""
                  }`}
                  key={preset.id}
                  onClick={() => selectPreset(preset.id)}
                  type="button"
                >
                  <span>{preset.name}</span>
                  <span className="text-xs">{preset.description}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="glass-plane rounded-xl p-5 framework-live-transition">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="uppercase-label" id="input-controls">
                Input controls
              </h2>
              <p className="mt-2 text-sm">
                Adjust synthetic inputs and watch the derived workspace update.
              </p>
            </div>
            <button
              className="btn-secondary focus-ring framework-live-transition shrink-0"
              onClick={resetActivePreset}
              type="button"
            >
              Reset to {PRESETS[activePreset].name}
            </button>
          </div>

          <div aria-labelledby="input-controls" className="mt-5 grid gap-5">
            {CONTROL_DEFINITIONS.map((control) => {
              const value = controls[control.key];
              const labelId = `${control.key}-label`;
              const valueId = `${control.key}-value`;

              return (
                <div className="grid gap-2" key={control.key}>
                  <div className="flex items-baseline justify-between gap-4">
                    <label className="font-semibold" htmlFor={control.key} id={labelId}>
                      {control.label}
                    </label>
                    <output
                      aria-live="polite"
                      className={`mono-text ${
                        control.key === "cycles" ? toneClass(derived.tone) : "telemetry-mint"
                      }`}
                      htmlFor={control.key}
                      id={valueId}
                    >
                      {control.label}: {value}
                    </output>
                  </div>
                  <input
                    aria-describedby={`${valueId} ${control.key}-helper`}
                    aria-labelledby={labelId}
                    className="framework-range focus-ring"
                    id={control.key}
                    max={control.max}
                    min={control.min}
                    onChange={(event) => updateControl(control.key, event.target.value)}
                    onKeyDown={(event) => {
                      handleSliderKey(control.key, event.key, control.min, control.max);
                    }}
                    type="range"
                    value={value}
                  />
                  <p className="text-sm" id={`${control.key}-helper`}>
                    {control.helper}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <div className="space-y-6">
        <section className="glass-plane rounded-xl p-5 framework-live-transition">
          <h2 className="uppercase-label" id="coverage-status">
            Coverage status
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <p className={`text-3xl font-semibold ${toneClass(derived.tone)}`}>
              {derived.evidenceLabel}
            </p>
            <p className="mono-text text-sm">{derived.signalLabel}</p>
          </div>
          <p
            className={`mt-4 ${
              derived.isInsightLocked ? "telemetry-amber opacity-80" : "telemetry-mint"
            }`}
          >
            {derived.insightText}
          </p>
        </section>

        <section className="glass-plane rounded-xl p-5 framework-live-transition">
          <h2 className="uppercase-label" id="phase-heatmap">
            Phase heatmap
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table aria-labelledby="phase-heatmap" className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr>
                  <th className="py-2 pr-4" scope="col">
                    Symptom
                  </th>
                  {PHASE_COLUMNS.map(([, label]) => (
                    <th className="px-3 py-2" key={label} scope="col">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {derived.heatmap.map((row) => (
                  <tr className="border-t border-white/10" key={row.symptom}>
                    <th className="py-3 pr-4 font-semibold" scope="row">
                      {row.symptom}
                    </th>
                    {PHASE_COLUMNS.map(([phase, label]) => (
                      <td className="px-3 py-3" key={phase}>
                        <span className="mono-text telemetry-mint">
                          {label}: {row[phase]}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass-plane rounded-xl p-5 framework-live-transition">
          <h2 className="uppercase-label" id="dominant-cluster">
            Dominant cluster
          </h2>
          <p className="mt-4 text-2xl font-semibold telemetry-mint">
            {derived.dominantCluster}
          </p>
          <p className="mt-3">{derived.strongestInsight}</p>
        </section>

        <section className="glass-plane rounded-xl p-5 framework-live-transition">
          <h2 className="uppercase-label" id="timeline-of-inflection-points">
            Timeline of inflection points
          </h2>
          <ol className="mt-4 grid gap-3">
            {derived.timeline.map((item) => (
              <li className="glass-plane rounded-lg p-4" key={item.id}>
                <p className="mono-text telemetry-amber">{item.marker}</p>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-labelledby="visit-summary"
          className="glass-plane rounded-xl p-5 framework-live-transition"
          role="region"
        >
          <h2 className="uppercase-label" id="visit-summary">
            12-minute visit summary
          </h2>
          <p className="mt-4 text-lg">{derived.visitSummary}</p>
        </section>

        <aside className="glass-plane rounded-xl p-5 framework-live-transition">
          <h2 className="uppercase-label telemetry-amber">Privacy & architecture notice</h2>
          <p className="mt-3">{PRIVACY_NOTICE}</p>
        </aside>
      </div>
    </section>
  );
}


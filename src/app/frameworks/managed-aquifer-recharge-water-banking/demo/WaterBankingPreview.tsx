"use client";

import { useMemo, useState } from "react";

import {
  type WaterBankingControls,
  type WaterBankingPresetId,
  type WaterBankingSignalToken,
  WATER_BANKING_PRESETS,
  compileWaterBankingPreview,
} from "./water-banking-preview-engine";

const CONTROL_DEFINITIONS: Array<{
  key: keyof WaterBankingControls;
  label: string;
  min: number;
  max: number;
  helper: string;
}> = [
  {
    key: "basinStress",
    label: "Basin stress",
    min: 1,
    max: 10,
    helper: "Visibility proxy for depletion pressure.",
  },
  {
    key: "extractionPressure",
    label: "Extraction pressure",
    min: 1,
    max: 10,
    helper: "Demand pressure on the basin.",
  },
  {
    key: "rechargeReadiness",
    label: "Recharge readiness",
    min: 1,
    max: 10,
    helper: "Site/pathway readiness for recharge review.",
  },
  {
    key: "surplusWater",
    label: "Surplus water",
    min: 1,
    max: 10,
    helper: "Stormwater or seasonal supply availability.",
  },
  {
    key: "monitoringQuality",
    label: "Monitoring quality",
    min: 1,
    max: 10,
    helper: "How visible the basin is before confidence language.",
  },
  {
    key: "droughtDuration",
    label: "Drought duration",
    min: 1,
    max: 24,
    helper: "Continuity planning window in months.",
  },
  {
    key: "qualityRisk",
    label: "Quality risk",
    min: 1,
    max: 10,
    helper: "Water-quality watchpoint pressure.",
  },
  {
    key: "governanceReadiness",
    label: "Governance readiness",
    min: 1,
    max: 10,
    helper: "Operating authority, accountability, and policy readiness.",
  },
];

const DISCLAIMER =
  "This preview is conceptual and educational. It is not hydrological, engineering, legal, financial, or regulatory advice. Site-specific managed aquifer recharge requires qualified hydrogeologist, engineer, water-quality, legal, and permitting review.";

function cloneControls(presetId: WaterBankingPresetId): WaterBankingControls {
  return { ...WATER_BANKING_PRESETS[presetId].controls };
}

function signalClass(signal: WaterBankingSignalToken) {
  return signal === "mint" ? "telemetry-mint" : "telemetry-amber";
}

function readinessTone(status: "unmapped" | "developing" | "operational") {
  return status === "operational" ? "telemetry-mint" : "telemetry-amber";
}

export default function WaterBankingPreview() {
  const [activePreset, setActivePreset] =
    useState<WaterBankingPresetId>("operational-water-bank");
  const [controls, setControls] = useState<WaterBankingControls>(() =>
    cloneControls("operational-water-bank"),
  );

  const derived = useMemo(() => compileWaterBankingPreview(controls), [controls]);

  function selectPreset(presetId: WaterBankingPresetId) {
    setActivePreset(presetId);
    setControls(cloneControls(presetId));
  }

  function resetActivePreset() {
    setControls(cloneControls(activePreset));
  }

  function updateControl(key: keyof WaterBankingControls, value: string) {
    setControls((current) => ({
      ...current,
      [key]: Number(value),
    }));
  }

  return (
    <section
      aria-label="The Water We Cannot See interactive preview"
      className="grid gap-6 lg:grid-cols-[minmax(280px,0.78fr)_minmax(0,1.22fr)]"
    >
      <div className="space-y-6">
        <section className="glass-plane rounded-xl p-5 framework-live-transition">
          <h2 className="uppercase-label" id="water-preset-command-rail">
            Preset command rail
          </h2>
          <p className="mt-3 text-sm">
            The Water We Cannot See: Managed Aquifer Recharge Continuity Preview
          </p>
          <div
            aria-labelledby="water-preset-command-rail"
            className="mt-4 grid gap-3"
            role="group"
          >
            {(Object.keys(WATER_BANKING_PRESETS) as WaterBankingPresetId[]).map(
              (presetId) => {
                const preset = WATER_BANKING_PRESETS[presetId];
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
              },
            )}
          </div>
        </section>

        <section className="glass-plane rounded-xl p-5 framework-live-transition">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
            <div>
              <h2 className="uppercase-label" id="water-input-controls">
                Input controls
              </h2>
              <p className="mt-2 text-sm">
                Adjust synthetic planning inputs and watch the continuity map update.
              </p>
            </div>
            <button
              className="btn-secondary focus-ring framework-live-transition shrink-0"
              onClick={resetActivePreset}
              type="button"
            >
              Reset to {WATER_BANKING_PRESETS[activePreset].name}
            </button>
          </div>

          <div aria-labelledby="water-input-controls" className="mt-5 grid gap-5">
            {CONTROL_DEFINITIONS.map((control) => {
              const value = controls[control.key];
              const labelId = `${control.key}-label`;
              const valueId = `${control.key}-value`;
              const unit = control.key === "droughtDuration" ? " months" : "";

              return (
                <div className="grid gap-2" key={control.key}>
                  <div className="flex items-baseline justify-between gap-4">
                    <label className="font-semibold" htmlFor={control.key} id={labelId}>
                      {control.label}
                    </label>
                    <output
                      aria-live="polite"
                      className="mono-text telemetry-mint"
                      htmlFor={control.key}
                      id={valueId}
                    >
                      {control.label}: {value}
                      {unit}
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
          <h2 className="uppercase-label" id="readiness-gate-status">
            Readiness gate status
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <p
              className={`text-3xl font-semibold ${readinessTone(
                derived.readinessStatus,
              )}`}
            >
              {derived.readinessLabel}
            </p>
            <p className="mono-text text-sm">
              Status: {derived.readinessStatus}
            </p>
          </div>
          <p className="mt-4">{derived.readinessMessage}</p>
        </section>

        <section className="glass-plane rounded-xl p-5 framework-live-transition">
          <h2 className="uppercase-label" id="basin-cross-section">
            Basin cross-section / water-bank visualization
          </h2>
          <div
            aria-labelledby="basin-cross-section"
            className="water-bank-cross-section mt-4"
          >
            {derived.crossSectionBands.map((band) => (
              <article
                className="water-bank-cross-section__band framework-live-transition"
                key={band.id}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">{band.label}</h3>
                    <p className="mt-1 text-sm">{band.explanation}</p>
                  </div>
                  <p className={`mono-text ${signalClass(band.signal)}`}>
                    {band.signal} · {band.value}
                  </p>
                </div>
                <div
                  aria-label={`${band.label} ${band.value}`}
                  className="water-bank-cross-section__meter mt-3"
                  role="meter"
                  aria-valuemax={band.id === "reserve" ? 24 : 10}
                  aria-valuemin={1}
                  aria-valuenow={band.value}
                >
                  <span
                    className="water-bank-cross-section__fill"
                    data-signal={band.signal}
                    style={{
                      inlineSize: `${
                        (band.value / (band.id === "reserve" ? 24 : 10)) * 100
                      }%`,
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="output-signal-cards"
          className="glass-plane rounded-xl p-5 framework-live-transition"
          role="region"
        >
          <h2 className="uppercase-label" id="output-signal-cards">
            Output signal cards
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              ["Basin stress signal", derived.basinStressSignal],
              ["Estimated water-bank balance", derived.waterBankBalanceEstimate],
              ["Recharge opportunity window", derived.rechargeOpportunityWindow],
              ["Drought reserve status", derived.droughtReserveStatus],
              ["Quality alert level", derived.qualityAlertLevel],
              ["Governance readiness status", derived.governanceGapSummary],
            ].map(([title, body]) => (
              <article className="glass-plane rounded-lg p-4" key={title}>
                <h3 className="font-semibold telemetry-mint">{title}</h3>
                <p className="mt-2 text-sm">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-plane rounded-xl p-5 framework-live-transition">
          <h2 className="uppercase-label" id="action-pathway">
            24-month action pathway
          </h2>
          <ol className="mt-4 grid gap-3">
            {derived.actionPathway24Month.map((step, index) => (
              <li className="glass-plane rounded-lg p-4" key={step}>
                <p className="mono-text telemetry-amber">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="glass-plane rounded-xl p-5 framework-live-transition">
          <h2 className="uppercase-label" id="policy-procurement-notes">
            Policy/procurement readiness notes
          </h2>
          <ul className="mt-4 grid gap-3">
            {derived.procurementPolicyNotes.map((note) => (
              <li className="glass-plane rounded-lg p-4 text-sm" key={note}>
                {note}
              </li>
            ))}
          </ul>
        </section>

        <aside className="glass-plane rounded-xl p-5 framework-live-transition">
          <h2 className="uppercase-label telemetry-amber">
            Decision-support disclaimer
          </h2>
          <p className="mt-3">{DISCLAIMER}</p>
        </aside>
      </div>
    </section>
  );
}

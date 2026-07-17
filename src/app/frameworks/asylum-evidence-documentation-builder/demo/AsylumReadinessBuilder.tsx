"use client";

import { useMemo, useState } from "react";
import { compileReadiness, SYNTHETIC_SCENARIOS, type ReadinessControls, type ScenarioId } from "./asylum-readiness-engine";

const fields: Array<{ key: Exclude<keyof ReadinessControls, "secureExport">; label: string; max: number; help: string }> = [
  { key: "chronology", label: "Chronology coverage", max: 5, help: "Events placed without inventing dates" },
  { key: "identityDocuments", label: "Identity-document categories", max: 5, help: "Availability only; no document upload" },
  { key: "supportingCategories", label: "Supporting-document categories", max: 8, help: "Messages, records, reports, witness contacts" },
  { key: "translationQueue", label: "Items needing translation", max: 10, help: "Queue count, not machine translation" },
  { key: "unresolvedConflicts", label: "Unresolved conflicts", max: 10, help: "Visible questions, never auto-corrected" },
  { key: "provenance", label: "Source provenance coverage", max: 5, help: "Origin, custodian, language, date obtained" },
  { key: "missingEvidenceExplanations", label: "Missing-evidence explanations", max: 5, help: "Person-authored explanations only" },
  { key: "legalReview", label: "Legal-review stage", max: 2, help: "0 none · 1 scheduled · 2 reviewed" },
];

export default function AsylumReadinessBuilder() {
  const [scenario, setScenario] = useState<ScenarioId>("early-assembly");
  const [controls, setControls] = useState(() => ({ ...SYNTHETIC_SCENARIOS[scenario].controls }));
  const output = useMemo(() => compileReadiness(controls), [controls]);
  const choose = (id: ScenarioId) => { setScenario(id); setControls({ ...SYNTHETIC_SCENARIOS[id].controls }); };

  return <div className="grid gap-6 lg:grid-cols-[minmax(280px,.8fr)_minmax(0,1.2fr)]">
    <section className="glass-plane rounded-xl p-5" aria-labelledby="controls-title">
      <p className="uppercase-label telemetry-amber">Synthetic educational scenario</p>
      <h2 className="mt-2 text-2xl font-semibold" id="controls-title">Record-readiness controls</h2>
      <div className="mt-4 grid gap-2" role="group" aria-label="Synthetic scenario presets">
        {(Object.keys(SYNTHETIC_SCENARIOS) as ScenarioId[]).map(id => <button className="btn-secondary focus-ring w-full justify-between text-left" aria-pressed={id === scenario} type="button" key={id} onClick={() => choose(id)}><span>{SYNTHETIC_SCENARIOS[id].name}</span></button>)}
      </div>
      <p className="mt-3 text-sm text-secondary">{SYNTHETIC_SCENARIOS[scenario].note}</p>
      <div className="mt-6 space-y-5">{fields.map(field => <label className="block" key={field.key}><span className="flex justify-between text-sm font-semibold"><span>{field.label}</span><output>{controls[field.key]}/{field.max}</output></span><span className="mt-1 block text-xs text-muted">{field.help}</span><input className="framework-range mt-2 w-full" type="range" min="0" max={field.max} value={controls[field.key]} onChange={e => setControls(current => ({ ...current, [field.key]: Number(e.target.value) }))} /></label>)}</div>
      <label className="mt-6 flex min-h-11 items-center gap-3 text-sm"><input type="checkbox" checked={controls.secureExport} onChange={e => setControls(current => ({ ...current, secureExport: e.target.checked }))} /> Secure-export review complete</label>
    </section>

    <section className="space-y-5" aria-live="polite" aria-atomic="false">
      <div className="glass-plane-strong rounded-xl p-6"><p className="uppercase-label">Documentation completeness map</p><div className="mt-3 flex items-end justify-between gap-4"><h2 className="text-3xl font-semibold">{output.status}</h2><span className="mono-text text-3xl telemetry-mint">{output.completenessPercent}%</span></div><p className="mt-3 text-sm text-secondary">A record-organization signal only. It does not measure truth, credibility, eligibility, or likelihood of approval.</p></div>
      <div className="grid gap-4 sm:grid-cols-3"><article className="glass-plane rounded-xl p-4"><p className="text-xs text-muted">Inventory categories</p><p className="mt-2 text-2xl">{output.sourceInventory}</p></article><article className="glass-plane rounded-xl p-4"><p className="text-xs text-muted">Translation queue</p><p className="mt-2 text-2xl">{output.translationQueue}</p></article><article className="glass-plane rounded-xl p-4"><p className="text-xs text-muted">Visible flags</p><p className="mt-2 text-2xl">{output.flags.length}</p></article></div>
      <div className="glass-plane rounded-xl p-5"><h3 className="text-lg font-semibold">Unresolved chronology and documentation flags</h3><ul className="mt-3 space-y-3 text-sm text-secondary">{output.flags.map(flag => <li className="border-l-2 border-[#ffb84d] pl-3" key={flag}>{flag}</li>)}</ul></div>
      <div className="glass-plane rounded-xl p-5"><h3 className="text-lg font-semibold">Questions for qualified legal review</h3><ol className="mt-3 list-decimal space-y-3 pl-5 text-sm text-secondary">{output.questions.map(question => <li key={question}>{question}</li>)}</ol></div>
      <div className="rounded-xl border border-[#ffb84d]/40 bg-[#ffb84d]/[.06] p-5 text-sm leading-6"><strong>Hard boundary:</strong> this illustration does not collect files, generate testimony, resolve contradictions, assess credibility, determine eligibility, predict outcomes, advise on an individual case, or submit anything.</div>
    </section>
  </div>;
}

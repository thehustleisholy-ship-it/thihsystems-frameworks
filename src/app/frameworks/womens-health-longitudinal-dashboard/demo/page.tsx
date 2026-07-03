import type { Metadata } from "next";
import Link from "next/link";
import { framework, insights, phaseHeatmap, timeline } from "@/lib/framework-content";

export const metadata: Metadata = {
  title: `${framework.title} Demo`,
  description:
    "Synthetic static dashboard preview for a patient-owned longitudinal women's health framework.",
};

const cycleCards = [
  { label: "Tracked cycles", value: "20", detail: "Synthetic sample set" },
  { label: "Highest cluster", value: "Luteal", detail: "Fatigue, pain, sleep" },
  { label: "Visit window", value: "12 min", detail: "Summary-ready export" },
  { label: "Ownership", value: "Patient", detail: "Share by consent" },
];

const phases = ["Menstrual", "Follicular", "Ovulation", "Luteal"] as const;

function intensityClass(value: number) {
  if (value >= 8) return "bg-[#f0d487] text-black";
  if (value >= 6) return "bg-[#d8b25a]/75 text-black";
  if (value >= 4) return "bg-[#d8b25a]/35 text-white";
  return "bg-white/[0.06] text-[#c7c7c7]";
}

function PreviewButton({ children, primary = false }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <button
      type="button"
      className={
        primary
          ? "focus-ring gold-button inline-flex min-h-11 items-center justify-center rounded-md px-4 text-sm font-semibold"
          : "focus-ring inline-flex min-h-11 items-center justify-center rounded-md border hairline bg-white/[0.03] px-4 text-sm font-semibold text-white hover:border-[#d8b25a]/60"
      }
      aria-label={`${children} preview action`}
    >
      {children}
      <span className="ml-2 rounded-sm border border-black/20 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]">
        Preview
      </span>
    </button>
  );
}

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b hairline py-6">
        <div className="shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link className="focus-ring text-sm gold-text" href="/frameworks/womens-health-longitudinal-dashboard">
              Back to framework
            </Link>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {framework.title} Demo
            </h1>
          </div>
          <div className="rounded-md border border-[#d8b25a]/35 bg-[#d8b25a]/10 px-4 py-3 text-sm leading-6 gold-text">
            Patient-owned data notice: this preview uses synthetic sample data only.
          </div>
        </div>
      </section>

      <section className="shell py-8">
        <div className="grid gap-4 md:grid-cols-4">
          {cycleCards.map((card) => (
            <article key={card.label} className="metal-panel rounded-lg p-5">
              <p className="text-sm muted-text">{card.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{card.value}</p>
              <p className="mt-2 text-sm silver-text">{card.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell grid gap-5 pb-10 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="metal-panel rounded-lg p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-semibold text-white">Symptom heatmap by cycle phase</h2>
              <p className="mt-2 text-sm muted-text">Intensity scale from 1 to 10. Synthetic data only.</p>
            </div>
            <div className="flex gap-2 text-xs silver-text">
              <span>Low</span>
              <span className="h-4 w-16 rounded-sm bg-gradient-to-r from-white/[0.06] to-[#f0d487]" />
              <span>High</span>
            </div>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b hairline muted-text">
                  <th className="pb-3 pr-3 font-medium">Symptom</th>
                  {phases.map((phase) => (
                    <th key={phase} className="pb-3 px-2 font-medium">
                      {phase}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {phaseHeatmap.map((row) => (
                  <tr key={row.symptom} className="border-b border-white/[0.06] last:border-0">
                    <th className="py-3 pr-3 font-medium text-white">{row.symptom}</th>
                    <td className="px-2 py-3"><span className={`block rounded-sm px-3 py-2 text-center font-mono ${intensityClass(row.menstrual)}`}>{row.menstrual}</span></td>
                    <td className="px-2 py-3"><span className={`block rounded-sm px-3 py-2 text-center font-mono ${intensityClass(row.follicular)}`}>{row.follicular}</span></td>
                    <td className="px-2 py-3"><span className={`block rounded-sm px-3 py-2 text-center font-mono ${intensityClass(row.ovulation)}`}>{row.ovulation}</span></td>
                    <td className="px-2 py-3"><span className={`block rounded-sm px-3 py-2 text-center font-mono ${intensityClass(row.luteal)}`}>{row.luteal}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="metal-panel rounded-lg p-5 sm:p-6">
          <h2 className="text-2xl font-semibold text-white">Pattern insights</h2>
          <ul className="mt-5 space-y-4">
            {insights.map((insight) => (
              <li key={insight} className="flex gap-3 text-sm leading-6 muted-text">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d8b25a]" />
                {insight}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="shell grid gap-5 pb-10 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="metal-panel rounded-lg p-5 sm:p-6">
          <h2 className="text-2xl font-semibold text-white">Timeline of inflection points</h2>
          <div className="mt-6 space-y-5">
            {timeline.map((item) => (
              <div key={item.title} className="grid grid-cols-[auto_1fr] gap-4">
                <div className="flex flex-col items-center">
                  <span className="h-3 w-3 rounded-full bg-[#d8b25a]" />
                  <span className="mt-2 h-full w-px bg-white/15" />
                </div>
                <div className="pb-5">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] gold-text">{item.date}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 muted-text">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="metal-panel rounded-lg p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <h2 className="text-2xl font-semibold text-white">Clinical export preview</h2>
              <p className="mt-2 text-sm muted-text">Concise, appointment-ready, and controlled by the patient.</p>
            </div>
            <span className="rounded-sm border border-[#d8b25a]/40 px-2 py-1 font-mono text-xs gold-text">
              Synthetic
            </span>
          </div>
          <div className="mt-6 rounded-md border hairline bg-black/45 p-4 font-mono text-sm leading-7 silver-text">
            <p>Visit focus: recurring luteal fatigue and menstrual pain increase.</p>
            <p>Pattern window: last 3 tracked cycles.</p>
            <p>Most useful questions: timing, severity, labs, differential, next observation.</p>
            <p>Patient preference: keep source data private; share summary only.</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PreviewButton primary>Generate Visit Summary</PreviewButton>
            <PreviewButton>Download PDF Preview</PreviewButton>
            <PreviewButton>View JSON Export</PreviewButton>
          </div>
        </article>
      </section>
    </main>
  );
}

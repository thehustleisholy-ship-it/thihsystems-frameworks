"use client";

import { useState } from "react";
import Link from "next/link";
import type { FrameworkMatrixEntry } from "@/lib/framework-master-matrix";
import type { FrameworkPublication } from "@/lib/framework-publication";

export default function ResearchDashboard({
  frameworks,
  publications,
}: {
  frameworks: FrameworkMatrixEntry[];
  publications: FrameworkPublication[];
}) {
  const [domain, setDomain] = useState("all");
  const [maturity, setMaturity] = useState("all");
  const [preview, setPreview] = useState("all");
  const [completeness, setCompleteness] = useState("all");
  const domains = [...new Set(frameworks.map((item) => item.category))].sort();
  const rows = frameworks.filter((framework) => {
    const publication = publications.find((item) => item.slug === framework.slug)!;
    return (domain === "all" || framework.category === domain)
      && (maturity === "all" || framework.maturity_stage === maturity)
      && (preview === "all" || framework.preview_type === preview)
      && (completeness === "all" || publication.documentation_completeness === completeness);
  });

  return (
    <>
      <fieldset className="glass-plane grid gap-4 rounded-lg p-5 md:grid-cols-4">
        <legend className="px-2 text-sm font-semibold text-white">Filter evidence status</legend>
        {[
          ["Domain", domain, setDomain, ["all", ...domains]],
          ["Maturity", maturity, setMaturity, ["all", "Structured Framework", "Interactive Prototype"]],
          ["Preview", preview, setPreview, ["all", "concept-preview", "interactive-prototype"]],
          ["Completeness", completeness, setCompleteness, ["all", "documented", "partial", "not-documented"]],
        ].map(([label, value, setter, options]) => (
          <label className="text-sm silver-text" key={label as string}>
            {label as string}
            <select className="mt-2 w-full rounded border hairline bg-[#050607] p-3" value={value as string} onChange={(event) => (setter as (value: string) => void)(event.target.value)}>
              {(options as string[]).map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
        ))}
      </fieldset>
      <p className="mt-5 text-sm muted-text" aria-live="polite">{rows.length} frameworks shown</p>
      <div className="mt-6 grid gap-4">
        {rows.map((framework) => {
          const publication = publications.find((item) => item.slug === framework.slug)!;
          const counts = publication.claims.reduce<Record<string, number>>((result, claim) => {
            result[claim.claim_class] = (result[claim.claim_class] ?? 0) + 1;
            return result;
          }, {});
          return (
            <article className="matrix-card" key={framework.slug}>
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="uppercase-label muted-text">Framework {framework.framework_number}</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{framework.framework_title}</h2>
                  <p className="mt-2 text-sm silver-text">{framework.category}</p>
                </div>
                <Link className="btn-secondary" href={framework.framework_url}>Open evidence page</Link>
              </div>
              <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <div><dt className="muted-text">Maturity</dt><dd className="text-white">{framework.maturity_stage}</dd></div>
                <div><dt className="muted-text">Preview</dt><dd className="text-white">{framework.preview_type}</dd></div>
                <div><dt className="muted-text">Documentation</dt><dd className="telemetry-amber">{publication.documentation_completeness}</dd></div>
                <div><dt className="muted-text">Claims A–F</dt><dd className="text-white">{Object.entries(counts).map(([key, count]) => `${key}:${count}`).join(" · ") || "0"}</dd></div>
                <div><dt className="muted-text">Verified sources</dt><dd className="text-white">{publication.sources.filter((source) => source.verification_status === "source-reviewed").length}</dd></div>
                <div><dt className="muted-text">Open questions</dt><dd className="text-white">{publication.open_questions.length}</dd></div>
                <div><dt className="muted-text">Expert review</dt><dd className="telemetry-amber">{framework.expert_review ? "Recorded" : "Not recorded"}</dd></div>
                <div><dt className="muted-text">Last reviewed</dt><dd className="text-white">{publication.last_reviewed_date ?? "Not yet reviewed"}</dd></div>
                <div><dt className="muted-text">Pilot status</dt><dd className="telemetry-amber">{publication.pilot_status}</dd></div>
              </dl>
              <p className="mt-5 text-sm silver-text"><span className="muted-text">Next action:</span> {publication.next_action}</p>
            </article>
          );
        })}
      </div>
    </>
  );
}

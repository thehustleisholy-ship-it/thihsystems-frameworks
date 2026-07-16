import Link from "next/link";
import { CLAIM_CLASSES } from "@/lib/evidence-record";
import type { FrameworkPublication, PublicationSection } from "@/lib/framework-publication";
import { getFrameworkBySlug } from "@/lib/framework-master-matrix";

const repositoryUrl = (path: string) =>
  `https://github.com/thehustleisholy-ship-it/thihsystems-frameworks/blob/main/${path}`;

function SectionContent({ section }: { section: PublicationSection }) {
  if (!section.text) return <p className="mt-3 telemetry-amber">Not yet documented.</p>;
  return (
    <>
      <p className="mt-3 leading-7 silver-text">{section.text}</p>
      {section.repository_paths.map((path) => (
        <a key={path} className="mt-2 block font-mono text-xs muted-text underline" href={repositoryUrl(path)} rel="noreferrer" target="_blank">{path}</a>
      ))}
    </>
  );
}

export default function FrameworkEvidence({
  publication,
}: {
  publication: FrameworkPublication;
}) {
  const sections = [
    ["Why This Exists", publication.founders_why],
    ["The Pain", publication.human_pain],
    ["Hidden System Failure", publication.hidden_infrastructure_failure],
    ["Proposed Infrastructure", publication.proposed_intervention],
    ["Evidence Summary", publication.evidence_summary],
  ] as const;
  const updates = [
    ...publication.build_record,
    ...publication.corrections,
    ...publication.failed_attempts,
    ...publication.next_attempts,
  ];

  return (
    <section className="section-pad border-t hairline" aria-labelledby="evidence-layer">
      <div className="shell max-w-5xl">
        <p className="uppercase-label telemetry-mint">Public evidence layer</p>
        <h2 id="evidence-layer" className="mt-3 text-4xl font-semibold text-white">
          Evidence, assumptions, and build record
        </h2>
        <p className="mt-4 max-w-3xl muted-text">
          Missing evidence is shown explicitly. Unverified claims are design inputs, not verified facts.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {sections.map(([title, section]) => (
            <article className="metal-panel rounded-lg p-6" key={title}>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <SectionContent section={section} />
            </article>
          ))}
        </div>

        <details className="evidence-disclosure mt-8" open>
          <summary>Evidence and Claims ({publication.claims.length})</summary>
          <div className="mt-5 space-y-4">
            {publication.claims.map((claim) => (
              <article
                className="rounded-lg border border-[#ffb84d]/40 bg-[#ffb84d]/5 p-5"
                data-verification={claim.verification_status}
                key={claim.claim_id}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="status-pill status-pill-amber">
                    {claim.claim_class}: {CLAIM_CLASSES[claim.claim_class]}
                  </span>
                  <span className="status-pill">{claim.verification_status}</span>
                </div>
                <p className="mt-4 text-base leading-7 text-white">{claim.exact_public_claim}</p>
                <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <div><dt className="muted-text">Source</dt><dd className="silver-text">{claim.source_title ?? "Not yet documented"}</dd></div>
                  <div><dt className="muted-text">Data year</dt><dd className="silver-text">{claim.data_year ?? "Not yet documented"}</dd></div>
                  <div><dt className="muted-text">Last review</dt><dd className="silver-text">{claim.review_date ?? "Not yet reviewed"}</dd></div>
                  <div><dt className="muted-text">Public-use approval</dt><dd className="silver-text">{claim.public_use_approval ? "Approved" : "Not approved as verified fact"}</dd></div>
                </dl>
                {claim.limitations.length > 0 && (
                  <p className="mt-4 text-sm telemetry-amber">Limitations: {claim.limitations.join(" ")}</p>
                )}
              </article>
            ))}
          </div>
        </details>

        {([
          ["Assumptions and Limitations", publication.assumptions],
          ["Safety Boundaries", publication.safety_boundaries],
          ["Open Questions", publication.open_questions],
        ] as Array<[string, string[]]>).map(([title, items]) => (
          <details className="evidence-disclosure mt-4" key={title}>
            <summary>{title}</summary>
            {items.length ? (
              <ul className="mt-4 space-y-2">
                {items.map((item) => <li className="silver-text" key={item}>— {item}</li>)}
              </ul>
            ) : <p className="mt-4 telemetry-amber">Not yet documented.</p>}
          </details>
        ))}

        <details className="evidence-disclosure mt-4">
          <summary>Build Record</summary>
          {updates.length ? (
            <div className="mt-4 space-y-3">
              {updates.map((update) => (
                <article className="glass-plane rounded p-4" key={`${update.type}-${update.summary}`}>
                  <span className="status-pill">{update.type}</span>
                  <p className="mt-3 silver-text">{update.summary}</p>
                  <a className="mt-2 block font-mono text-xs muted-text underline" href={repositoryUrl(update.evidence_path)} rel="noreferrer" target="_blank">Supporting evidence: {update.evidence_path}</a>
                  <p className="mt-2 text-xs muted-text">Recorded: {update.date ?? "Not yet dated"}</p>
                </article>
              ))}
            </div>
          ) : <p className="mt-4 telemetry-amber">Not yet documented.</p>}
        </details>

        <details className="evidence-disclosure mt-4">
          <summary>Sources ({publication.sources.length})</summary>
          {publication.sources.length ? publication.sources.map((source) => (
            <article className="mt-4 glass-plane rounded p-4" key={source.repository_path}>
              <p className="font-semibold text-white">{source.title}</p>
              <a className="mt-2 block font-mono text-xs muted-text underline" href={repositoryUrl(source.repository_path)} rel="noreferrer" target="_blank">{source.repository_path}</a>
              <p className="mt-2 text-sm telemetry-amber">{source.verification_status}</p>
              <p className="mt-2 text-sm muted-text">Last reviewed: {source.last_reviewed ?? "Not yet reviewed"}</p>
              {source.external_url && <a href={source.external_url}>Open source</a>}
            </article>
          )) : <p className="mt-4 telemetry-amber">Not yet documented.</p>}
        </details>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="metal-panel rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white">Pilot Status</h3>
            <p className="mt-3 telemetry-amber">{publication.pilot_status}</p>
          </article>
          <article className="metal-panel rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white">What Happens Next</h3>
            <p className="mt-3 silver-text">{publication.next_action}</p>
          </article>
        </div>

        {publication.related_framework_slugs.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white">Related Frameworks</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {publication.related_framework_slugs.map((slug) => {
                const related = getFrameworkBySlug(slug);
                return related ? (
                  <Link className="btn-secondary" href={related.framework_url} key={slug}>
                    Framework {related.framework_number}: {related.framework_title}
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

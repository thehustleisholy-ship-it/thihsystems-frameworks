import Link from "next/link";
import { frameworkMasterMatrix } from "@/lib/framework-master-matrix";

export default function SystemMapPage() {
  const frameworks = frameworkMasterMatrix.slice(0, 13);
  return (
    <main className="obsidian-canvas min-h-screen">
      <section className="section-pad border-b border-line">
        <div className="shell">
          <Link className="focus-ring telemetry-mint" href="/">Back to library</Link>
          <p className="uppercase-label mt-8 telemetry-mint">Frameworks 01–13</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold text-white">Enterprise-layer infrastructure system map</h1>
          <p className="mt-5 max-w-3xl text-lg silver-text">These links show editorially related operating layers in the canonical registry. They do not claim researched causation.</p>
        </div>
      </section>
      <section className="section-pad" aria-labelledby="visual-map">
        <div className="shell">
          <h2 id="visual-map" className="text-3xl font-semibold text-white">Connected portfolio</h2>
          <div className="system-map-grid mt-8">
            {frameworks.map((framework) => (
              <article className="system-map-node" data-domain={framework.category} key={framework.slug}>
                <p className="uppercase-label muted-text">Framework {framework.framework_number}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{framework.framework_title}</h3>
                <p className="mt-2 text-sm telemetry-mint">{framework.category}</p>
                <Link className="focus-ring mt-4 inline-flex text-sm text-white underline" href={framework.framework_url}>Open framework</Link>
                <p className="mt-4 text-xs muted-text">{framework.related_framework_slugs.length} canonical relationship(s)</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad border-t border-line" aria-labelledby="text-map">
        <div className="shell max-w-4xl">
          <h2 id="text-map" className="text-3xl font-semibold text-white">Text alternative</h2>
          <ol className="mt-6 space-y-5">
            {frameworks.map((framework) => (
              <li className="metal-panel rounded-lg p-5" key={framework.slug}>
                <Link className="focus-ring text-lg font-semibold text-white underline" href={framework.framework_url}>Framework {framework.framework_number}: {framework.framework_title}</Link>
                <p className="mt-2 silver-text">Domain: {framework.category}</p>
                <p className="mt-2 muted-text">Related within 01–13: {framework.related_framework_slugs.filter((slug) => frameworks.some((item) => item.slug === slug)).map((slug) => frameworks.find((item) => item.slug === slug)?.framework_title).join(", ") || "No canonical relationship documented."}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}

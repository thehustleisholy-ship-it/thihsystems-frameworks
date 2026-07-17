import Link from "next/link";
import { frameworkMasterMatrix } from "@/lib/framework-master-matrix";
import { frameworkPublications } from "@/lib/framework-publication";
import ResearchDashboard from "./ResearchDashboard";

export default function ResearchPage() {
  return (
    <main className="obsidian-canvas min-h-screen">
      <section className="section-pad border-b border-line">
        <div className="shell">
          <Link className="focus-ring telemetry-mint" href="/">Back to library</Link>
          <p className="uppercase-label mt-8 telemetry-mint">Portfolio evidence status</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold text-white">What is documented, and what is still missing?</h1>
          <p className="mt-5 max-w-3xl text-lg silver-text">All 30 frameworks are shown. Missing sources, reviews, questions, and pilot evidence remain visible.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="shell">
          <ResearchDashboard frameworks={frameworkMasterMatrix} publications={frameworkPublications} />
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { frameworkMasterMatrix } from "@/lib/framework-master-matrix";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ButtonLink({
  href,
  children,
  variant = "secondary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className = variant === "primary" ? "btn-primary" : "btn-secondary";
  const isExternal = href.startsWith("http");

  return isExternal ? (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowIcon />
    </a>
  ) : (
    <Link className={className} href={href}>
      {children}
      <ArrowIcon />
    </Link>
  );
}

function getStatusPillClass(status: string): string {
  if (status.includes("Ready for Public") || status.includes("verified")) {
    return "status-pill-mint";
  }
  if (status.includes("Needs Review") || status.includes("Needs Citation")) {
    return "status-pill-amber";
  }
  if (status.includes("Not Ready") || status.includes("Risk")) {
    return "status-pill-amber";
  }
  return "";
}

export default function Home() {
  const featuredFrameworkNumbers = ["02", "05", "10", "29"];
  const featuredFrameworks = frameworkMasterMatrix.filter((fw) =>
    featuredFrameworkNumbers.includes(fw.framework_number)
  );

  return (
    <main className="obsidian-canvas">
      {/* A. Hero: Intent-Based Architecture */}
      <section className="section-pad border-b border-line">
        <div className="shell">
          <div className="max-w-4xl">
            <p className="uppercase-label text-muted mb-6">THIHsystems</p>
            <h1 className="text-6xl font-bold leading-tight text-primary mb-6">
              Framework Fridays by THIHsystems
            </h1>
            <p className="text-xl font-semibold text-secondary mb-4">
              Enterprise-layer frameworks for the systems nobody tests until they fail.
            </p>
            <p className="text-base leading-7 text-muted max-w-3xl mb-8">
              A public infrastructure portfolio where hidden system failures become source-aware frameworks, demo previews, forkable repos, procurement paths, pilot guides, and policy briefs.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/#library" variant="primary">
                Explore the Framework Library
              </ButtonLink>
              <ButtonLink href="#matrix">View Master Matrix</ButtonLink>
              <ButtonLink href="https://github.com/thehustleisholy-ship-it/thihsystems-frameworks">
                Fork the Hub Repo
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* B. Intent Omnibar */}
      <section className="section-pad border-b border-line">
        <div className="shell">
          <div className="max-w-4xl">
            <p className="uppercase-label text-muted mb-4">Interface preview</p>
            <div className="intent-omnibar">
              <svg
                className="h-5 w-5 text-muted"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Ask the framework library what system failure you want to make visible..."
                disabled
              />
            </div>
            <p className="text-xs text-muted mt-3">Intent Omnibar • Non-functional interface concept</p>
          </div>
        </div>
      </section>

      {/* C. Signal Strip */}
      <section className="section-pad border-b border-line">
        <div className="shell">
          <div className="grid gap-12 md:grid-cols-5">
            <div>
              <p className="text-4xl font-bold text-primary">30</p>
              <p className="mt-2 text-sm text-muted">Public Frameworks</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">60</p>
              <p className="mt-2 text-sm text-muted">Public Routes</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">30</p>
              <p className="mt-2 text-sm text-muted">Forkable Repos</p>
            </div>
            <div>
              <p className="text-4xl font-bold telemetry-mint">1</p>
              <p className="mt-2 text-sm text-muted">Master Matrix Standard</p>
            </div>
            <div>
              <p className="text-4xl font-bold telemetry-mint">∞</p>
              <p className="mt-2 text-sm text-muted">Source &amp; Claim Discipline</p>
            </div>
          </div>
        </div>
      </section>

      {/* D. Three Foundational Value Frameworks */}
      <section className="section-pad border-b border-line">
        <div className="shell">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary">The 2030 Operating Surface</h2>
            <p className="mt-3 text-secondary">Enterprise-layer infrastructure for intent-driven operations.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Value Pipeline */}
            <div className="value-pipeline-card">
              <p className="uppercase-label text-muted">Operations</p>
              <h3 className="mt-4 text-lg font-bold text-primary">Autonomous Value Pipeline</h3>
              <p className="mt-3 text-sm text-secondary leading-6">
                Models frameworks as connected system flows instead of isolated pages.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-8 w-8 rounded border border-surface-line bg-surface-glass flex items-center justify-center text-xs text-muted">
                  ⊙
                </div>
                <p className="text-xs text-muted">Node-flow style layout</p>
              </div>
              <p className="mt-4 text-xs font-semibold text-quantum-mint">Feature: What-if sandbox overlays</p>
              <p className="mt-2 text-xs text-muted italic">Interface concept</p>
            </div>

            {/* Command Hive */}
            <div className="value-pipeline-card">
              <p className="uppercase-label text-muted">Management</p>
              <h3 className="mt-4 text-lg font-bold text-primary">Cognitive Layering &amp; Agentic Swarms</h3>
              <p className="mt-3 text-sm text-secondary leading-6">
                Supervises agents, claim states, source queues, and readiness signals.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="h-8 w-8 rounded border border-surface-line bg-surface-glass flex items-center justify-center text-xs text-muted">
                  ◆
                </div>
                <div className="h-8 w-8 rounded border border-surface-line bg-surface-glass flex items-center justify-center text-xs text-muted">
                  ◆
                </div>
                <div className="h-8 w-8 rounded border border-surface-line bg-surface-glass flex items-center justify-center text-xs text-muted">
                  ◆
                </div>
              </div>
              <p className="mt-4 text-xs font-semibold text-electric-amber">Feature: Friction-point highlighting</p>
              <p className="mt-2 text-xs text-muted italic">Interface concept</p>
            </div>

            {/* Macro Yield */}
            <div className="value-pipeline-card">
              <p className="uppercase-label text-muted">Executive Strategy</p>
              <h3 className="mt-4 text-lg font-bold text-primary">Macro-Yield Matrix</h3>
              <p className="mt-3 text-sm text-secondary leading-6">
                Isolates systemic drivers that determine institutional value and readiness.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2">
                <div className="h-12 rounded border border-surface-line bg-surface-glass flex items-center justify-center text-xs text-muted font-semibold">
                  80%
                </div>
                <div className="h-12 rounded border border-surface-line bg-surface-glass flex items-center justify-center text-xs text-muted font-semibold">
                  20%
                </div>
              </div>
              <p className="mt-4 text-xs font-semibold text-electric-amber">Feature: Microshift indicators</p>
              <p className="mt-2 text-xs text-muted italic">Interface concept</p>
            </div>
          </div>
        </div>
      </section>

      {/* E. Start Here Section */}
      <section className="section-pad border-b border-line">
        <div className="shell">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary">Start Here</h2>
            <p className="mt-3 text-secondary">Four foundational frameworks for enterprise infrastructure.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredFrameworks.map((fw) => (
              <article key={fw.slug} className="framework-card">
                <div>
                  <p className="uppercase-label text-muted">Framework {fw.framework_number}</p>
                  <h3 className="mt-3 text-xl font-bold text-primary">
                    {fw.framework_title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary leading-6">{fw.enterprise_layer}</p>
                  <p className="mt-3 text-xs uppercase-label text-muted">{fw.category}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className={`status-pill ${getStatusPillClass(fw.source_status)}`}>
                    {fw.source_status.length > 18 ? fw.source_status.substring(0, 15) + "..." : fw.source_status}
                  </span>
                  <span className={`status-pill ${getStatusPillClass(fw.public_claim_status)}`}>
                    {fw.public_claim_status.length > 15 ? fw.public_claim_status.substring(0, 12) + "..." : fw.public_claim_status}
                  </span>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row pt-4">
                  <ButtonLink href={fw.framework_url} variant="primary">
                    Read
                  </ButtonLink>
                  <ButtonLink href={fw.demo_url}>Demo</ButtonLink>
                  <ButtonLink href={fw.github_repo_url}>GitHub</ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* F. Full Framework Library */}
      <section id="library" className="section-pad border-b border-line">
        <div className="shell">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary">Framework Library</h2>
            <p className="mt-3 text-secondary">All 30 enterprise-layer frameworks for systems infrastructure.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {frameworkMasterMatrix.map((fw) => (
              <article key={fw.slug} className="framework-card">
                <div>
                  <p className="uppercase-label text-muted">Framework {fw.framework_number}</p>
                  <h3 className="mt-2 text-base font-bold text-primary">
                    {fw.framework_title}
                  </h3>
                  <p className="mt-2 text-xs uppercase-label text-muted">{fw.category}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className={`status-pill ${getStatusPillClass(fw.source_status)}`}>
                    {fw.source_status.length > 18 ? fw.source_status.substring(0, 15) + "..." : fw.source_status}
                  </span>
                  <span className={`status-pill ${getStatusPillClass(fw.public_claim_status)}`}>
                    {fw.public_claim_status.length > 15 ? fw.public_claim_status.substring(0, 12) + "..." : fw.public_claim_status}
                  </span>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row pt-3">
                  <ButtonLink href={fw.framework_url}>Read</ButtonLink>
                  <ButtonLink href={fw.demo_url}>Demo</ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* G. Master Matrix Standard */}
      <section id="matrix" className="section-pad border-b border-line">
        <div className="shell">
          <h2 className="text-4xl font-bold text-primary">The Master Matrix Standard</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg font-semibold text-secondary mb-4">
                No framework launches as inspiration alone.
              </p>
              <p className="text-base leading-7 text-muted">
                Every framework must make visible the research foundation, statistical basis, economic impact model, implementation roadmap, procurement checklist, ROI logic, pilot design, and policy brief.
              </p>
              <p className="mt-4 text-base leading-7 text-muted">
                The master matrix ensures every framework is readable by institutions, legible to operators, forkable by builders, testable by pilots, and supportable by policy makers.
              </p>
              <div className="mt-8">
                <ButtonLink href="/data/framework-master-matrix.json" variant="primary">
                  View Master Matrix (JSON)
                </ButtonLink>
              </div>
            </div>
            <div className="matrix-card">
              <p className="uppercase-label text-muted">8 Required Components</p>
              <div className="mt-6 space-y-3">
                {[
                  "Research & Evidence",
                  "Statistics & Data",
                  "Economic Impact",
                  "Implementation Path",
                  "Procurement Ready",
                  "ROI Logic",
                  "Pilot Design",
                  "Policy Brief"
                ].map((item, i) => (
                  <div key={item} className="flex items-center gap-3">
                    <p className="mono-text text-xs font-bold text-quantum-mint">0{i + 1}.</p>
                    <p className="text-sm text-primary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H. Build Pipeline */}
      <section className="section-pad border-b border-line">
        <div className="shell">
          <h2 className="text-4xl font-bold text-primary mb-8">Build Pipeline</h2>
          <div className="grid gap-4 md:grid-cols-6">
            {[
              "Name the hidden system failure",
              "Structure the framework",
              "Publish the demo preview",
              "Open the forkable repo",
              "Add research, procurement, pilot, and policy paths",
              "Track claims through the master matrix"
            ].map((item, index) => (
              <div key={item} className="border-t border-line pt-5">
                <p className="mono-text text-sm font-bold text-quantum-mint">0{index + 1}.</p>
                <p className="mt-4 text-sm font-medium leading-6 text-primary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-pad">
        <div className="shell flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-4xl font-bold text-primary">Every Friday is Framework Fridays.</h2>
            <p className="mt-4 text-base text-muted">Follow THIHsystems for the next release.</p>
          </div>
          <ButtonLink href="https://www.linkedin.com/company/124453928/" variant="primary">
            Follow THIHsystems
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}

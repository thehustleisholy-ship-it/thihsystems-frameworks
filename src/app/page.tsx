'use client';

import React from "react";
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
  const mintStatuses = ["Ready for Public", "Safe to publish", "Source verified", "Ready for public preview"];
  const amberStatuses = [
    "Needs Review",
    "Needs Citation",
    "Needs citation",
    "Needs softening",
    "Needs verification",
    "Not yet sourced",
    "Do not publish yet",
    "Not Ready",
    "Risk",
    "Ready for internal review",
  ];

  if (mintStatuses.some((s) => status.includes(s))) {
    return "status-pill-mint";
  }
  if (amberStatuses.some((s) => status.includes(s))) {
    return "status-pill-amber";
  }
  return "";
}

function getPublicClaimLabel(status: string): string {
  if (status.includes("Do not publish yet")) {
    return "Internal claim caution";
  }
  return status;
}

export default function Home() {
  const featuredFrameworkNumbers = ["02", "05", "10", "29"];
  const featuredFrameworks = frameworkMasterMatrix.filter((fw) =>
    featuredFrameworkNumbers.includes(fw.framework_number)
  );

  const [showAllFrameworks, setShowAllFrameworks] = React.useState(false);
  const visibleFrameworks = showAllFrameworks
    ? frameworkMasterMatrix
    : frameworkMasterMatrix.slice(0, 10);

  return (
    <main className="obsidian-canvas">
      {/* Hero: Enterprise Command Surface */}
      <section className="section-pad border-b border-line">
        <div className="shell">
          <div className="max-w-4xl">
            <p className="uppercase-label text-muted mb-6">THIHsystems</p>
            <h1 className="text-6xl font-bold leading-tight text-primary mb-6">
              Framework Fridays by THIHsystems
            </h1>
            <p className="text-2xl font-semibold text-secondary mb-4">
              A public operating-layer library for hidden infrastructure failures.
            </p>
            <p className="text-base leading-7 text-muted max-w-3xl mb-4">
              Thirty enterprise frameworks mapping the research, economics, procurement paths, pilot designs, source queues, and policy briefs behind systems nobody tests until they fail.
            </p>
            <p className="text-sm text-muted max-w-3xl mb-8">
              Built for institutions, operators, policymakers, funders, and builders who need more than commentary.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/#library" variant="primary">
                Enter the Framework Library
              </ButtonLink>
              <ButtonLink href="#matrix">Open the Master Matrix</ButtonLink>
              <ButtonLink href="/frameworks/job-loss-income-shock-stabilizer">
                Explore Framework 02 Source Pack
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Signal Strip: Meaning-Driven Signals */}
      <section className="section-pad border-b border-line">
        <div className="shell">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-4xl font-bold text-primary">30</p>
              <p className="mt-2 text-sm text-secondary">Frameworks</p>
              <p className="mt-1 text-xs text-muted">Mapped across health, housing, justice, water, food, energy, mobility, and planetary risk.</p>
            </div>
            <div>
              <p className="text-4xl font-bold telemetry-mint">1</p>
              <p className="mt-2 text-sm text-secondary">Master Matrix</p>
              <p className="mt-1 text-xs text-muted">Every framework tracked by research, numbers, economics, procurement, ROI, pilot, and policy path.</p>
            </div>
            <div>
              <p className="text-4xl font-bold telemetry-mint">1</p>
              <p className="mt-2 text-sm text-secondary">Source Pack</p>
              <p className="mt-1 text-xs text-muted">Framework 02 is source-identified and ready for partnership exploration.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-line">
            <p className="text-sm text-muted">
              <span className="inline-block w-3 h-3 rounded-full bg-quantum-mint mr-2"></span>
              Evidence Discipline: Claims are marked by source status and public-claim readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Status Legend */}
      <section className="section-pad border-b border-line">
        <div className="shell max-w-4xl">
          <h3 className="text-lg font-bold text-primary mb-4">Status Signals</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-plane p-6 rounded">
              <p className="flex items-center gap-2 mb-2">
                <span className="inline-block w-4 h-4 rounded-full bg-quantum-mint"></span>
                <span className="text-sm font-semibold text-primary">Quantum Mint</span>
              </p>
              <p className="text-sm text-muted">
                Source verified, ready, or publicly safe for institutional use.
              </p>
            </div>
            <div className="glass-plane p-6 rounded">
              <p className="flex items-center gap-2 mb-2">
                <span className="inline-block w-4 h-4 rounded-full bg-electric-amber"></span>
                <span className="text-sm font-semibold text-primary">Electric Amber</span>
              </p>
              <p className="text-sm text-muted">
                Needs citation, review, softening, or internal assessment before public claims.
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-muted">
            The library shows evidence gaps openly. A warning status is not a failure; it is a transparency signal.
          </p>
        </div>
      </section>

      {/* What This Library Is: FAQ for AEO/GEO */}
      <section className="section-pad border-b border-line">
        <div className="shell">
          <h2 className="text-4xl font-bold text-primary mb-12">What This Library Is</h2>

          <div className="max-w-3xl space-y-12">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                What is Framework Fridays by THIHsystems?
              </h3>
              <p className="text-base leading-7 text-muted">
                Framework Fridays is a public enterprise infrastructure framework library that turns overlooked system failures into structured frameworks, demo previews, forkable repos, source queues, procurement paths, pilot guides, and policy briefs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                What is an enterprise-layer infrastructure framework?
              </h3>
              <p className="text-base leading-7 text-muted">
                An enterprise-layer infrastructure framework maps the operating layer behind a failure, including the research base, core data inputs, workflows, economics, procurement path, pilot design, and policy support path.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Who is this for?
              </h3>
              <p className="text-base leading-7 text-muted">
                It is built for institutions, operators, policymakers, funders, builders, advocates, and the public.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Are these finished products?
              </h3>
              <p className="text-base leading-7 text-muted">
                No. These are public framework packages. Some are concept structured, some are source-identified, and some are ready for internal review or pilot design. Status signals show where each framework stands. The site does not claim validation where no pilot evidence exists.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                How does the Master Matrix work?
              </h3>
              <p className="text-base leading-7 text-muted">
                The Master Matrix standardizes all 30 frameworks across research, statistics, economics, implementation, procurement, ROI logic, pilot readiness, policy path, source status, and public-claim status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Navigation */}
      <section className="section-pad border-b border-line">
        <div className="shell">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary">Start by Role</h2>
            <p className="mt-3 text-secondary">Find frameworks by your institutional role.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                role: "For institutions",
                description: "Procurement paths, pilot guides, source queues, and readiness signals.",
              },
              {
                role: "For operators",
                description: "Workflows, data inputs, demo previews, and implementation paths.",
              },
              {
                role: "For policymakers",
                description: "Policy briefs, governance gaps, public-risk framing, and model intervention paths.",
              },
              {
                role: "For funders and sponsors",
                description: "Economic logic, avoided-cost models, pilot readiness, and evaluation structure.",
              },
              {
                role: "For builders",
                description: "Forkable repos, data models, workflow maps, and open questions.",
              },
              {
                role: "For the public",
                description: "Plain-English frameworks that make hidden system failures visible.",
              },
            ].map((item) => (
              <div key={item.role} className="glass-plane p-6 rounded">
                <h3 className="text-lg font-bold text-primary">{item.role}</h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Starting Points */}
      <section className="section-pad border-b border-line">
        <div className="shell">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary">Recommended Starting Points</h2>
            <p className="mt-3 text-secondary">Four entry points based on audience need, not a ranking of importance.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredFrameworks.map((fw) => (
              <article key={fw.slug} className="framework-card">
                <div>
                  <p className="uppercase-label text-muted">Framework {fw.framework_number}</p>
                  <h3 className="mt-3 text-xl font-bold text-primary">
                    {fw.framework_title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary">{fw.enterprise_layer}</p>
                  <p className="mt-3 text-xs text-muted leading-5">
                    {fw.hidden_foundation}
                  </p>
                  <p className="mt-3 text-xs uppercase-label text-muted">{fw.category}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className={`status-pill ${getStatusPillClass(fw.source_status)}`}>
                    {fw.source_status}
                  </span>
                  <span className={`status-pill ${getStatusPillClass(fw.public_claim_status)}`}>
                    {getPublicClaimLabel(fw.public_claim_status)}
                  </span>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row pt-4">
                  <ButtonLink href={fw.framework_url} variant="primary">
                    Read
                  </ButtonLink>
                  <ButtonLink href={fw.demo_url}>Demo</ButtonLink>
                  <ButtonLink href={`/data/framework-master-matrix.json#framework-${fw.framework_number}`}>
                    Matrix
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Library */}
      <section id="library" className="section-pad border-b border-line">
        <div className="shell">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary">Framework Library</h2>
            <p className="mt-3 text-secondary">All {showAllFrameworks ? "30" : "10+"} frameworks. Organized by operating layer.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visibleFrameworks.map((fw) => (
              <article key={fw.slug} className="framework-card">
                <div>
                  <p className="uppercase-label text-muted">Framework {fw.framework_number}</p>
                  <h3 className="mt-2 text-base font-bold text-primary">
                    {fw.framework_title}
                  </h3>
                  <p className="mt-2 text-xs text-muted leading-5">
                    {fw.hidden_foundation}
                  </p>
                  <p className="mt-3 text-xs uppercase-label text-muted">{fw.category}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className={`status-pill ${getStatusPillClass(fw.source_status)}`}>
                    {fw.source_status}
                  </span>
                  <span className={`status-pill ${getStatusPillClass(fw.public_claim_status)}`}>
                    {getPublicClaimLabel(fw.public_claim_status)}
                  </span>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row pt-3">
                  <ButtonLink href={fw.framework_url}>Read</ButtonLink>
                  <ButtonLink href={fw.demo_url}>Demo</ButtonLink>
                </div>
              </article>
            ))}
          </div>

          {!showAllFrameworks && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllFrameworks(true)}
                className="btn-secondary"
              >
                Show all 30 frameworks
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Master Matrix Standard */}
      <section id="matrix" className="section-pad border-b border-line">
        <div className="shell">
          <h2 className="text-4xl font-bold text-primary">The Master Matrix Standard</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg font-semibold text-secondary mb-4">
                Standardized framework tracking.
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

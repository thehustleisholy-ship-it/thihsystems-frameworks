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
  const className =
    variant === "primary"
      ? "focus-ring gold-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition hover:translate-y-[-1px]"
      : "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border hairline bg-white/[0.03] px-5 text-sm font-semibold text-white transition hover:border-[#d8b25a]/60 hover:bg-white/[0.06]";

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
    return "status-pill-crimson";
  }
  return "";
}

export default function Home() {
  // Featured frameworks for start here section
  const featuredFrameworks = frameworkMasterMatrix.filter(
    (fw) => ["02", "05", "10", "29"].includes(fw.framework_number)
  );

  return (
    <main>
      {/* Hero Section */}
      <section className="section-pad border-b hairline">
        <div className="shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.18em] gold-text">
              THIHsystems
            </p>
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Framework Fridays by THIHsystems
            </h1>
            <p className="mt-6 text-2xl font-medium silver-text">
              Enterprise-layer frameworks for the systems nobody tests until they fail.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 muted-text sm:text-lg">
              THIHsystems turns overlooked system failures into public frameworks, demo previews,
              forkable repos, source queues, procurement paths, pilot guides, and policy briefs.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/#library" variant="primary">
                Explore Framework Library
              </ButtonLink>
              <ButtonLink href="#matrix">View Master Matrix</ButtonLink>
              <ButtonLink href="https://github.com/thehustleisholy-ship-it/thihsystems-frameworks">Fork Hub Repo</ButtonLink>
            </div>
          </div>

          <div className="metal-panel preview-grid rounded-lg p-5">
            <div className="mb-5 flex items-center justify-between border-b hairline pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] gold-text">
                  Library index
                </p>
                <p className="mt-1 text-sm muted-text">Master matrix standard</p>
              </div>
              <div className="h-10 w-10 rounded-full border hairline bg-[#d8b25a]/15" />
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <p className="font-mono text-xs uppercase tracking-[0.16em] gold-text">
                  30 Frameworks
                </p>
                <p className="mt-2 text-sm silver-text">Enterprise infrastructure portfolio</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md border hairline bg-white/[0.025] p-3">
                  <div className="h-1.5 rounded-full bg-[#d8b25a]" />
                  <p className="mt-2 text-xs font-medium text-white">Framework Library</p>
                  <p className="mt-1 text-xs muted-text">All 30 frameworks</p>
                </div>
                <div className="rounded-md border hairline bg-white/[0.025] p-3">
                  <div className="h-1.5 rounded-full bg-[#d8b25a]" />
                  <p className="mt-2 text-xs font-medium text-white">Demo Previews</p>
                  <p className="mt-1 text-xs muted-text">Interactive tours</p>
                </div>
                <div className="rounded-md border hairline bg-white/[0.025] p-3">
                  <div className="h-1.5 rounded-full bg-[#d8b25a]" />
                  <p className="mt-2 text-xs font-medium text-white">GitHub Repos</p>
                  <p className="mt-1 text-xs muted-text">Forkable builds</p>
                </div>
                <div className="rounded-md border hairline bg-white/[0.025] p-3">
                  <div className="h-1.5 rounded-full bg-[#d8b25a]" />
                  <p className="mt-2 text-xs font-medium text-white">Source Discipline</p>
                  <p className="mt-1 text-xs muted-text">Verified claims</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signal Strip */}
      <section className="section-pad border-b hairline">
        <div className="shell">
          <div className="grid gap-8 md:grid-cols-5">
            <div>
              <p className="text-3xl font-semibold text-white">30</p>
              <p className="mt-2 text-sm muted-text">Public Frameworks</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">60</p>
              <p className="mt-2 text-sm muted-text">Public Routes</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">30</p>
              <p className="mt-2 text-sm muted-text">Forkable Repos</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">1</p>
              <p className="mt-2 text-sm muted-text">Master Matrix</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">∞</p>
              <p className="mt-2 text-sm muted-text">Source Discipline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Start Here: Featured Frameworks */}
      <section className="section-pad border-b hairline">
        <div className="shell">
          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-white">Start Here</h2>
            <p className="mt-3 muted-text">Featured frameworks: institutional stabilization, critical infrastructure, water security, and future governance.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredFrameworks.map((fw) => (
              <article key={fw.slug} className="framework-card">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] gold-text">
                    {fw.framework_number}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {fw.framework_title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 silver-text">{fw.enterprise_layer}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.12em] muted-text">{fw.category}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className={`status-pill ${getStatusPillClass(fw.source_status)}`}>
                    {fw.source_status}
                  </span>
                  <span className={`status-pill ${getStatusPillClass(fw.public_claim_status)}`}>
                    {fw.public_claim_status}
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

      {/* Full Framework Library */}
      <section id="library" className="section-pad border-b hairline">
        <div className="shell">
          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-white">Framework Library</h2>
            <p className="mt-3 muted-text">All 30 frameworks: enterprise infrastructure for the systems nobody tests until they fail.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {frameworkMasterMatrix.map((fw) => (
              <article key={fw.slug} className="framework-card">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] gold-text">
                    {fw.framework_number}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {fw.framework_title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] muted-text">{fw.category}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className={`status-pill ${getStatusPillClass(fw.source_status)}`}>
                    {fw.source_status.length > 20 ? fw.source_status.substring(0, 17) + "..." : fw.source_status}
                  </span>
                  <span className={`status-pill ${getStatusPillClass(fw.public_claim_status)}`}>
                    {fw.public_claim_status.length > 15 ? fw.public_claim_status.substring(0, 12) + "..." : fw.public_claim_status}
                  </span>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row pt-3">
                  <ButtonLink href={fw.framework_url}>
                    Read
                  </ButtonLink>
                  <ButtonLink href={fw.demo_url}>Demo</ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Master Matrix Standard Section */}
      <section id="matrix" className="section-pad border-b hairline">
        <div className="shell">
          <h2 className="text-4xl font-semibold text-white">Master Matrix Standard</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-7 silver-text">
                No framework launches as inspiration alone.
              </p>
              <p className="mt-4 text-base leading-7 muted-text">
                Every framework must make visible: research foundation, statistical basis, economic
                impact model, implementation roadmap, procurement checklist, ROI logic, pilot design,
                and policy brief.
              </p>
              <p className="mt-4 text-base leading-7 muted-text">
                The master matrix ensures every framework is readable by institutions,
                legible to operators, forkable by builders, testable by pilots,
                and supportable by policy makers.
              </p>
              <div className="mt-8">
                <ButtonLink href="/data/framework-master-matrix.json">
                  View Master Matrix (JSON)
                </ButtonLink>
              </div>
            </div>
            <div className="glass-panel rounded-lg p-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] gold-text">
                8 Required Components
              </p>
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
                    <p className="font-mono text-sm gold-text">0{i + 1}.</p>
                    <p className="text-sm text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Pipeline Section */}
      <section className="section-pad border-b hairline">
        <div className="shell">
          <h2 className="text-4xl font-semibold text-white">Build Pipeline</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-6">
            {[
              "Name the hidden system failure",
              "Structure the framework",
              "Publish the demo preview",
              "Open the forkable repo",
              "Add research, procurement, pilot, policy",
              "Track claims through matrix"
            ].map((item, index) => (
              <div key={item} className="border-t hairline pt-5">
                <p className="font-mono text-sm gold-text">0{index + 1}.</p>
                <p className="mt-4 text-sm font-medium leading-6 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-pad">
        <div className="shell flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-4xl font-semibold text-white">Every Friday is Framework Fridays.</h2>
            <p className="mt-4 text-lg muted-text">Follow THIHsystems for the next release.</p>
          </div>
          <ButtonLink href="https://www.linkedin.com/company/124453928/admin/dashboard/" variant="primary">
            Follow THIHsystems
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}


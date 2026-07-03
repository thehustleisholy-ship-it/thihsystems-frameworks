import type { Metadata } from "next";
import Link from "next/link";
import { framework, links } from "@/lib/framework-content";

export const metadata: Metadata = {
  title: framework.title,
  description:
    "A patient-owned longitudinal dashboard framework for turning at-home symptom tracking into clinically useful appointment context.",
};

const sections = [
  {
    title: "Problem",
    body: "Many people recognize the pattern: symptoms are tracked at home, compressed into a short clinic visit, and then lost because the data never becomes clinically usable. The burden shifts to memory, screenshots, notes apps, and scattered timelines instead of a clear clinical conversation.",
  },
  {
    title: "What the framework builds",
    body: "A patient-owned longitudinal dashboard that organizes cycle context, symptom severity, phase timing, inflection points, and visit-ready summaries. The point is not to diagnose. The point is to make the lived pattern legible enough for better questions and better appointments.",
  },
  {
    title: "Pattern engine",
    body: "The framework looks for clustering across cycle phase, symptom intensity, sleep, fatigue, pain, mood, and timeline changes. It favors explainable patterns over black-box conclusions, so a person can see what changed, when it changed, and why it might matter to discuss.",
  },
  {
    title: "Privacy and ownership principles",
    body: "The patient owns the data, the export, and the decision to share. A production version should minimize collection, make consent explicit, separate identity from analysis where possible, and avoid selling or repurposing sensitive health context.",
  },
  {
    title: "What is forkable now",
    body: "The public site, framework page, static demo preview, synthetic sample structure, and Vercel-ready Next.js build are prepared as the starting point. The GitHub path is the place for future schema, export, and implementation notes.",
  },
];

function CtaLink({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  const className = primary
    ? "focus-ring gold-button inline-flex min-h-12 items-center justify-center rounded-md px-5 text-sm font-semibold"
    : "focus-ring inline-flex min-h-12 items-center justify-center rounded-md border hairline bg-white/[0.03] px-5 text-sm font-semibold text-white hover:border-[#d8b25a]/60";

  if (href.startsWith("http")) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

export default function FrameworkDetailPage() {
  return (
    <main>
      <section className="section-pad border-b hairline">
        <div className="shell max-w-5xl">
          <Link className="focus-ring inline-flex text-sm gold-text" href="/">
            Back to Framework Fridays
          </Link>
          <p className="mt-10 font-mono text-sm uppercase tracking-[0.16em] gold-text">
            {framework.number}
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-white sm:text-6xl">
            {framework.title}
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-medium silver-text">
            {framework.tagline}
          </p>
          <p className="mt-8 max-w-3xl border-l-2 border-[#d8b25a] pl-5 text-2xl font-semibold leading-snug text-white">
            {framework.thesis}
          </p>
        </div>
      </section>

      <section className="section-pad border-b hairline">
        <div className="shell grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="metal-panel rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 text-base leading-8 muted-text">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="shell flex flex-col justify-between gap-8 rounded-lg border hairline bg-white/[0.03] p-6 sm:p-8 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-white">Start with the public framework.</h2>
            <p className="mt-3 max-w-2xl muted-text">
              Read the thinking, fork the build path, or open the synthetic dashboard preview.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaLink href={links.substack}>Read Substack</CtaLink>
            <CtaLink href={links.github}>Fork GitHub</CtaLink>
            <CtaLink href={links.demo} primary>
              Try Demo
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}

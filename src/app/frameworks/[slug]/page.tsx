import type { Metadata } from "next";
import Link from "next/link";
import { frameworks } from "@/lib/framework-content";

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

function CtaLink({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  const className = primary
    ? "focus-ring gold-button inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition hover:translate-y-[-1px]"
    : "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border hairline bg-white/[0.03] px-5 text-sm font-semibold text-white transition hover:border-[#d8b25a]/60 hover:bg-white/[0.06]";

  if (href.startsWith("http")) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
        <ArrowIcon />
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
      <ArrowIcon />
    </Link>
  );
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return frameworks.map((fw) => ({
    slug: fw.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fw = frameworks.find((f) => f.slug === slug);

  if (!fw) {
    return {
      title: "Framework Not Found",
    };
  }

  return {
    title: fw.title,
    description: fw.thesis,
  };
}

export default async function FrameworkDetailPage({ params }: Props) {
  const { slug } = await params;
  const fw = frameworks.find((f) => f.slug === slug);

  if (!fw) {
    return (
      <main>
        <div className="section-pad shell">
          <h1 className="text-4xl font-semibold text-white">Framework not found</h1>
          <p className="mt-4 muted-text">
            <Link href="/" className="gold-text">
              Return to home
            </Link>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="section-pad border-b hairline">
        <div className="shell max-w-5xl">
          <Link className="focus-ring inline-flex text-sm gold-text" href="/">
            Back to Framework Fridays
          </Link>
          <p className="mt-10 font-mono text-sm uppercase tracking-[0.16em] gold-text">
            {fw.number}
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-white sm:text-6xl">
            {fw.title}
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-medium silver-text">
            {fw.tagline}
          </p>
          <p className="mt-8 max-w-3xl border-l-2 border-[#d8b25a] pl-5 text-2xl font-semibold leading-snug text-white">
            {fw.thesis}
          </p>
        </div>
      </section>

      <section className="section-pad border-b hairline">
        <div className="shell max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="metal-panel rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white">Category</h2>
              <p className="mt-4 text-base leading-7 silver-text">{fw.category}</p>
            </article>
            <article className="metal-panel rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white">Enterprise Layer</h2>
              <p className="mt-4 text-base leading-7 silver-text">{fw.enterpriseLayer}</p>
            </article>
            <article className="metal-panel rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white">Theme</h2>
              <p className="mt-4 text-base leading-7 silver-text">{fw.theme}</p>
            </article>
            <article className="metal-panel rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white">Status</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {fw.statuses.map((status) => (
                  <span
                    key={status}
                    className="rounded-sm border hairline bg-white/[0.03] px-3 py-2 text-sm silver-text"
                  >
                    {status}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell flex flex-col justify-between gap-8 rounded-lg border hairline bg-white/[0.03] p-6 sm:p-8 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-white">Explore this framework.</h2>
            <p className="mt-3 max-w-2xl muted-text">
              View the demo preview, fork the GitHub repo, or read the full framework specification.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaLink href={fw.links.demo}>View Demo</CtaLink>
            <CtaLink href={fw.links.github}>GitHub</CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}

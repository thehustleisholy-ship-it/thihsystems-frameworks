import Link from "next/link";
import { framework, links } from "@/lib/framework-content";

const pipeline = [
  "LinkedIn introduces the issue.",
  "Substack explains the framework.",
  "GitHub holds the forkable build.",
  "This site houses the working demos.",
];

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

export default function Home() {
  return (
    <main>
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
              AI frameworks for real human burdens.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 muted-text sm:text-lg">
              Every Friday, THIHsystems introduces a practical framework,
              expands the thinking on Substack, publishes the build notes on
              GitHub, and turns the strongest ideas into working demos.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={links.framework} variant="primary">
                Explore Framework 01
              </ButtonLink>
              <ButtonLink href={links.substack}>Read Substack</ButtonLink>
              <ButtonLink href={links.github}>Fork on GitHub</ButtonLink>
            </div>
          </div>

          <div className="metal-panel preview-grid rounded-lg p-5">
            <div className="mb-5 flex items-center justify-between border-b hairline pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] gold-text">
                  Library index
                </p>
                <p className="mt-1 text-sm muted-text">Public framework system</p>
              </div>
              <div className="h-10 w-10 rounded-full border hairline bg-[#d8b25a]/15" />
            </div>
            <div className="space-y-4">
              <div className="rounded-md border hairline bg-black/45 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] silver-text">
                      {framework.number}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      {framework.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 muted-text">
                      {framework.tagline}
                    </p>
                  </div>
                  <span className="rounded-sm border border-[#d8b25a]/40 px-2 py-1 font-mono text-xs gold-text">
                    Live
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
                  {framework.statuses.map((status) => (
                    <span
                      key={status}
                      className="rounded-sm border hairline bg-white/[0.03] px-2 py-2 silver-text"
                    >
                      {status}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["Substack", "GitHub", "Demo"].map((item) => (
                  <div key={item} className="rounded-md border hairline bg-white/[0.025] p-3">
                    <div className="h-1.5 rounded-full bg-[#d8b25a]" />
                    <p className="mt-3 text-sm font-medium text-white">{item}</p>
                    <p className="mt-1 text-xs muted-text">Ready path</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-b hairline">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <h2 className="text-4xl font-semibold text-white">What this is</h2>
          <div className="space-y-5 text-2xl font-medium leading-tight silver-text sm:text-3xl">
            <p>Not just leads.</p>
            <p>Not just sales.</p>
            <p>Not automation for automation&apos;s sake.</p>
            <p className="pt-4 text-xl leading-8 muted-text sm:text-2xl">
              Frameworks that help people ask better questions, organize real
              problems, and build systems that serve.
            </p>
          </div>
        </div>
      </section>

      <section id="library" className="section-pad border-b hairline">
        <div className="shell">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-4xl font-semibold text-white">Framework Library</h2>
              <p className="mt-3 muted-text">Public pages, demos, and build links.</p>
            </div>
          </div>

          <article className="metal-panel rounded-lg p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.16em] gold-text">
                  {framework.number}
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  {framework.title}
                </h3>
                <p className="mt-3 text-lg silver-text">{framework.tagline}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {framework.statuses.map((status) => (
                    <span
                      key={status}
                      className="rounded-sm border hairline bg-white/[0.03] px-3 py-2 text-sm silver-text"
                    >
                      {status}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink href={links.framework} variant="primary">
                  Read
                </ButtonLink>
                <ButtonLink href={links.demo}>Demo</ButtonLink>
                <ButtonLink href={links.github}>GitHub</ButtonLink>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad border-b hairline">
        <div className="shell">
          <h2 className="text-4xl font-semibold text-white">Build pipeline</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {pipeline.map((item, index) => (
              <div key={item} className="border-t hairline pt-5">
                <p className="font-mono text-sm gold-text">0{index + 1}</p>
                <p className="mt-4 text-lg font-medium leading-7 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-4xl font-semibold text-white">Every Friday is Framework Fridays.</h2>
            <p className="mt-4 text-lg muted-text">Follow THIHsystems for the next release.</p>
          </div>
          <ButtonLink href={links.linkedin} variant="primary">
            Follow THIHsystems
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}


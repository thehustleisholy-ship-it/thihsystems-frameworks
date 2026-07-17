import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { frameworks } from "@/lib/framework-content";

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
      title: "Preview Not Found",
    };
  }

  return {
    title: `${fw.title} Concept Preview`,
    description: `Concept preview for ${fw.title}. Content is illustrative and not a validated tool.`,
  };
}

function DisclaimerBanner({ text }: { text: string }) {
  return (
    <div className="rounded-md border border-[#d8b25a]/35 bg-[#d8b25a]/10 px-4 py-3 text-sm leading-6 gold-text">
      {text}
    </div>
  );
}

export default async function DemoPage({ params }: Props) {
  const { slug } = await params;
  const fw = frameworks.find((f) => f.slug === slug);

  if (!fw) {
    notFound();
  }


  const disclaimers: Record<string, string> = {
    "black-maternal-health-emergency-response-system":
      "This is a concept preview using synthetic data only. Not medical advice. Seek immediate care for urgent symptoms.",
    "eviction-defense-documentation-system":
      "This is a concept preview using synthetic data only. Not legal advice. Consult a lawyer or legal aid organization.",
    "returning-citizen-reentry-roadmap":
      "This is a concept preview using synthetic data only. Not legal or supervision advice. Consult licensed counsel.",
    "job-loss-income-shock-stabilizer":
      "This is a concept preview using synthetic data only. Not financial, benefits, tax, or employment advice.",
    "hospital-grid-independence-resilience":
      "This is a concept preview using synthetic data only. Not a substitute for professional emergency management or engineering review.",
    "phosphorus-recovery-circular-fertilizer":
      "This is a concept preview using synthetic data only. Requires engineering, regulatory, environmental, and agricultural validation.",
    "sand-crisis-alternative-aggregate":
      "This is a concept preview using synthetic data only. Requires engineering, material science, regulatory, and project-specific validation.",
    "topsoil-regeneration-no-till-transition":
      "This is a concept preview using synthetic data only. Requires agronomic, regional, soil-specific, and financial validation.",
    "managed-aquifer-recharge-water-banking":
      "This is a concept preview using synthetic data only. Requires hydrologic modeling, water rights review, regulatory approval, and environmental validation.",
  };

  const disclaimer = disclaimers[fw.slug] || "This is a concept preview using synthetic or illustrative data only.";

  return (
    <main className="min-h-screen">
      <section className="border-b hairline py-6">
        <div className="shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link className="focus-ring text-sm gold-text" href={fw.links.detail}>
              Back to framework
            </Link>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {fw.title} Concept Preview
            </h1>
          </div>
          <DisclaimerBanner text={disclaimer} />
        </div>
      </section>

      <section className="shell py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="metal-panel rounded-lg p-6">
            <p className="text-sm muted-text">{fw.number}</p>
            <p className="mt-3 text-2xl font-semibold text-white">{fw.title}</p>
            <p className="mt-2 text-sm silver-text">{fw.theme}</p>
          </article>

          <article className="metal-panel rounded-lg p-6">
            <p className="text-sm muted-text">Enterprise Layer</p>
            <p className="mt-3 text-lg font-semibold text-white">{fw.enterpriseLayer}</p>
            <p className="mt-2 text-sm silver-text">{fw.category}</p>
          </article>

          <article className="metal-panel rounded-lg p-6">
            <p className="text-sm muted-text">Status</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {fw.statuses.map((status) => (
                <span
                  key={status}
                  className="rounded-sm border hairline bg-white/[0.03] px-2 py-1 text-xs silver-text"
                >
                  {status}
                </span>
              ))}
            </div>
          </article>

          <article className="metal-panel rounded-lg p-6">
            <p className="text-sm muted-text">Framework Thesis</p>
            <p className="mt-3 text-sm leading-6 silver-text">{fw.thesis}</p>
          </article>
        </div>
      </section>

      <section className="shell py-8">
        <article className="metal-panel rounded-lg p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white">Preview Status</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 muted-text">
                This concept preview is illustrative. It is not a validated tool and presents no measured outcomes. Any modeled content is assumptions-based and requires independent research and professional review.
              </p>
            </div>
            <span className="rounded-sm border border-[#d8b25a]/40 px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] gold-text">
              Concept
            </span>
          </div>

          <div className="mt-6 space-y-3">
            <p className="text-sm font-medium text-white">Learn more:</p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={fw.links.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-md border hairline bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition hover:border-[#d8b25a]/60"
              >
                GitHub Repository
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <Link
                href={fw.links.detail}
                className="focus-ring inline-flex items-center gap-2 rounded-md border hairline bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition hover:border-[#d8b25a]/60"
              >
                Framework Details
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

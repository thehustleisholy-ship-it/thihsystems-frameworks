import type { Metadata } from "next";
import Link from "next/link";

import { frameworks } from "@/lib/framework-content";
import InteractiveFrameworkPreview from "./InteractiveFrameworkPreview";

const framework = frameworks[0];

export const metadata: Metadata = {
  title: `${framework.title} Demo`,
  description:
    "Interactive synthetic preview for a patient-owned longitudinal women's health framework.",
};

export default function DemoPage() {
  return (
    <main className="min-h-screen obsidian-canvas">
      <section className="border-b border-line py-6">
        <div className="shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              className="focus-ring inline-flex text-sm telemetry-mint"
              href="/frameworks/womens-health-longitudinal-dashboard"
            >
              Back to framework
            </Link>
            <p className="uppercase-label mt-4 telemetry-amber">Framework 01 demo</p>
            <h1 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
              {framework.title} Demo
            </h1>
            <p className="mt-3 max-w-3xl text-secondary">
              Toggle synthetic history depth and symptom inputs to see how local,
              deterministic data architecture changes confidence, heatmap signals,
              timeline language, and the visit-summary output.
            </p>
          </div>
          <div className="glass-plane rounded-md px-4 py-3 text-sm leading-6 telemetry-amber">
            Synthetic-data notice: this preview uses generated sample inputs only.
          </div>
        </div>
      </section>

      <section className="shell py-8">
        <InteractiveFrameworkPreview />
      </section>
    </main>
  );
}

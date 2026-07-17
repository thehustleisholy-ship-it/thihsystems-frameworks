import type { Metadata } from "next";
import Link from "next/link";

import WaterBankingPreview from "./WaterBankingPreview";

export const metadata: Metadata = {
  title: "Managed Aquifer Recharge Preview | Framework 10",
  description:
    "A conceptual interactive preview for making aquifer recharge readiness, groundwater stress, drought reserve status, and governance gaps visible.",
};

export default function ManagedAquiferRechargeDemoPage() {
  return (
    <main className="min-h-screen">
      <section className="border-b hairline py-6">
        <div className="shell flex flex-col gap-4">
          <Link
            className="focus-ring text-sm telemetry-mint"
            href="/frameworks/managed-aquifer-recharge-water-banking"
          >
            Back to framework
          </Link>

          <div className="max-w-4xl">
            <p className="uppercase-label telemetry-amber">Framework 10 · Interactive Prototype</p>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Managed Aquifer Recharge & Underground Water Banking
            </h1>
            <h2 className="mt-4 text-2xl font-semibold telemetry-mint">
              The Water We Cannot See
            </h2>
            <p className="mt-4 text-lg leading-8">
              This conceptual preview makes underground water-banking logic visible. It
              does not predict basin outcomes or replace hydrological, engineering,
              legal, regulatory, or water-quality review.
            </p>
          </div>

          <div className="glass-plane rounded-xl p-4 text-sm leading-6 framework-live-transition">
            Synthetic/conceptual preview notice: these controls use deterministic
            educational logic only. They are designed to show depletion pressure,
            recharge opportunity, drought reserve framing, water-quality watchpoints,
            and governance readiness without claiming site-specific outcomes.
          </div>
        </div>
      </section>

      <section className="shell py-8">
        <WaterBankingPreview />
      </section>
    </main>
  );
}

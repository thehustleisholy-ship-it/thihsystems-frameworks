"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="obsidian-canvas min-h-screen">
      <section className="section-pad">
        <div className="shell max-w-3xl">
          <p className="uppercase-label telemetry-amber">Rendering error</p>
          <h1 className="mt-4 text-4xl font-bold text-primary">
            The framework view could not be displayed.
          </h1>
          <p className="mt-4 text-secondary">
            Retry the current route. No framework status or evidence record has
            been changed.
          </p>
          <button className="btn-primary mt-8" onClick={() => unstable_retry()}>
            Try again
          </button>
        </div>
      </section>
    </main>
  );
}

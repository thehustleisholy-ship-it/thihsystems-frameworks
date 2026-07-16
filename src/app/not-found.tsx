import Link from "next/link";

export default function NotFound() {
  return (
    <main className="obsidian-canvas min-h-screen">
      <section className="section-pad">
        <div className="shell max-w-3xl">
          <p className="uppercase-label telemetry-amber">404 · Not found</p>
          <h1 className="mt-4 text-5xl font-bold text-primary">
            This framework route does not exist.
          </h1>
          <p className="mt-6 text-secondary">
            The active catalog contains exactly 30 canonical frameworks.
            Archived concepts do not receive active public routes.
          </p>
          <Link className="btn-primary mt-8 inline-flex" href="/">
            Return to the framework library
          </Link>
        </div>
      </section>
    </main>
  );
}

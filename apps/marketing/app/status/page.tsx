import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Status | GHOSTATLAS IP",
  description: "Current operational status for GHOSTATLAS IP API, proxy network, dashboard, and billing.",
  openGraph: {
    title: "Status | GHOSTATLAS IP",
    description: "All systems operational.",
    images: ["https://ghostatlas.com/og/status.png"]
  }
};

const services = ["API", "Proxy network", "Dashboard", "Billing"];

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Nav />
      <main>
        <section className="border-b border-border bg-bg-primary">
          <div className="mx-auto w-full max-w-4xl px-6 py-24">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-success" aria-hidden="true" />
              <p className="font-mono text-sm text-success">OPERATIONAL</p>
            </div>
            <h1 className="mt-5 text-5xl font-semibold md:text-7xl">All systems operational</h1>
            <p className="mt-5 text-text-secondary">Last updated: June 19, 2026 at 09:00 UTC</p>
          </div>
        </section>

        <section className="border-b border-border bg-bg-elevated">
          <div className="mx-auto w-full max-w-4xl px-6 py-16">
            <div className="overflow-hidden rounded-lg border border-border bg-bg-card">
              {services.map((service) => (
                <div key={service} className="flex items-center justify-between border-b border-border px-5 py-4 last:border-b-0">
                  <span className="font-medium">{service}</span>
                  <span className="inline-flex items-center gap-2 font-mono text-sm text-success">
                    <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
                    Operational
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-lg border border-border bg-bg-card p-5">
              <label className="block text-sm">
                <span className="text-text-secondary">Subscribe to status updates</span>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="h-11 flex-1 rounded-md border border-border bg-bg-primary px-3 text-text-primary outline-none transition-colors focus:border-accent"
                  />
                  <button className="h-11 rounded-md bg-accent px-5 text-sm font-medium text-bg-primary">Subscribe</button>
                </div>
              </label>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

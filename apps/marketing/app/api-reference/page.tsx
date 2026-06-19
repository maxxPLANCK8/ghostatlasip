import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Card, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "API Reference | GHOSTATLAS IP",
  description: "Placeholder API reference for GHOSTATLAS IP endpoints.",
  openGraph: {
    title: "API Reference | GHOSTATLAS IP",
    description: "API reference coming soon. See our quick start guide.",
    images: ["https://ghostatlas.com/og/api-reference.png"]
  }
};

const endpoints = [
  ["GET /proxies", "List proxy pools, credentials, regions, and current health state."],
  ["POST /order", "Create a proxy order for residential, datacenter, static, or mobile products."],
  ["GET /balance", "Fetch available credits, current usage, and billing limits."]
];

export default function ApiReferencePage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Nav />
      <main>
        <section className="border-b border-border bg-bg-primary">
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <p className="font-mono text-sm text-accent">API REFERENCE</p>
            <h1 className="mt-4 text-5xl font-semibold md:text-7xl">API reference coming soon</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
              See our quick start guide while the full API reference is being expanded.
            </p>
          </div>
        </section>

        <section className="bg-bg-elevated">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <SectionHeader title="Endpoint preview" subtitle="A lightweight map of the API surface we are documenting." />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {endpoints.map(([endpoint, description]) => (
                <Card key={endpoint} className="p-6">
                  <h2 className="font-mono text-sm text-accent">{endpoint}</h2>
                  <p className="mt-4 text-sm leading-6 text-text-secondary">{description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

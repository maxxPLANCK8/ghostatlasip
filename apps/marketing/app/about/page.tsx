import type { Metadata } from "next";
import { Shield, Zap, LockKeyhole } from "lucide-react";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Button, Card, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "About | GHOSTATLAS IP",
  description: "Learn about GHOSTATLAS IP and our mission to make global proxy infrastructure reliable for developers.",
  openGraph: {
    title: "About | GHOSTATLAS IP",
    description: "Built for developers who need the world.",
    images: ["https://ghostatlas.com/og/about.png"]
  }
};

const stats = [
  ["Launched", "2026"],
  ["Locations", "195+"],
  ["Support", "24/7"]
];

const values = [
  { icon: Shield, title: "Reliability", description: "Infrastructure that keeps routing predictable under real workload pressure." },
  { icon: LockKeyhole, title: "Privacy", description: "Credential isolation and access controls designed for sensitive workflows." },
  { icon: Zap, title: "Speed", description: "Low-latency proxy paths for teams that cannot wait on brittle routing." }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Nav />
      <main>
        <section className="border-b border-border bg-bg-primary">
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <p className="font-mono text-sm text-accent">ABOUT GHOSTATLAS IP</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
              Built for developers who need the world
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
              GHOSTATLAS IP exists to make global proxy infrastructure reliable, transparent, and easy to operate for teams building automation, QA, and data workflows.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-bg-elevated">
          <div className="mx-auto grid w-full max-w-7xl gap-4 px-6 py-12 md:grid-cols-3">
            {stats.map(([label, value]) => (
              <div key={label} className="border-l border-border pl-5">
                <p className="font-mono text-3xl text-text-primary">{value}</p>
                <p className="mt-2 text-sm text-text-secondary">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-border bg-bg-primary">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <SectionHeader title="What we value" subtitle="Quiet infrastructure principles for teams that depend on global access." />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title} className="p-6">
                  <value.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h2 className="mt-5 text-lg font-medium">{value.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-elevated">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Ready to route globally?</h2>
              <p className="mt-3 text-text-secondary">Start with a free trial and test GHOSTATLAS IP in your own stack.</p>
            </div>
            <Button href="https://app.ghostatlasip.com" variant="accent" size="lg">
              Start your free trial
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

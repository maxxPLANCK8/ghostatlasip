import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Button, Card, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Integrations | GHOSTATLAS IP",
  description: "GHOSTATLAS IP works with common browser automation, scraping, proxy, and HTTP client tools.",
  openGraph: {
    title: "Integrations | GHOSTATLAS IP",
    description: "Works with your existing stack.",
    images: ["https://ghostatlas.com/og/integrations.png"]
  }
};

const integrations = [
  ["Selenium", "Route browser automation traffic through GHOSTATLAS IP proxy pools."],
  ["Puppeteer", "Launch Chromium with residential, mobile, or datacenter proxy endpoints."],
  ["Playwright", "Configure per-browser or per-context proxy routing for tests and jobs."],
  ["Scrapy", "Send crawler requests through rotating proxy credentials."],
  ["FoxyProxy", "Switch browser proxy profiles for manual QA and inspection."],
  ["cURL", "Test proxy endpoints and API calls from the command line."],
  ["Python requests", "Attach proxy credentials to Python HTTP workflows."],
  ["Axios", "Route Node.js HTTP requests through GHOSTATLAS IP endpoints."]
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Nav />
      <main>
        <section className="border-b border-border bg-bg-primary">
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <p className="font-mono text-sm text-accent">INTEGRATIONS</p>
            <h1 className="mt-4 text-5xl font-semibold md:text-7xl">Integrations</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
              Works with your existing stack.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-bg-elevated">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {integrations.map(([name, description]) => (
                <Card key={name} className="p-6">
                  <Code2 className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h2 className="mt-5 text-lg font-medium">{name}</h2>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-text-secondary">{description}</p>
                  <Link href="/docs" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80">
                    View guide
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bg-primary">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-16 md:flex-row md:items-center md:justify-between">
            <SectionHeader title="Need a custom integration?" subtitle="Tell us what you are building and we will help map the routing path." className="mx-0 text-left" />
            <Button href="/contact" variant="accent" size="lg">
              Contact us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

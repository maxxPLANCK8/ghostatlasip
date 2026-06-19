import { Code2 } from "lucide-react";

import { SectionHeader } from "@/components/ui";

const integrations = ["Selenium", "Puppeteer", "Playwright", "Scrapy", "FoxyProxy", "cURL", "Python", "Node.js"];

export function IntegrationsSection() {
  return (
    <section id="integrations" className="border-b border-border bg-bg-elevated">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <SectionHeader
          eyebrow="INTEGRATIONS"
          title="Works with your stack"
          subtitle="Drop-in compatibility with the tools you already use"
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration) => (
            <div
              key={integration}
              className="flex items-center gap-3 rounded-lg border border-border bg-bg-card px-4 py-4 opacity-50 transition-opacity hover:opacity-100"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-primary text-white">
                <Code2 className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-mono text-sm text-white">{integration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Check } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { Badge, Button, Card, SectionHeader } from "@/components/ui";
import type { ProductPageData } from "@/lib/products";

const integrations = ["Selenium", "Puppeteer", "Playwright", "Scrapy"];

type ProductPageProps = {
  product: ProductPageData;
};

function formatTierPrice(price: string, unit: string) {
  if (price === "Custom") {
    return "Custom";
  }

  return `From ${price}${unit}`;
}

function getBillingLabel(unit: string) {
  if (unit === "/GB") {
    return "Pay-as-you-go";
  }

  if (unit === "/IP") {
    return "Monthly billing";
  }

  return "Custom billing";
}

export function ProductPage({ product }: ProductPageProps) {
  return (
    <>
      <section className="border-b border-border bg-bg-primary">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <Badge>{product.eyebrow}</Badge>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.04] tracking-normal text-text-primary md:text-7xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">{product.oneLiner}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/#pricing" variant="accent" size="lg">
                {product.cta}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="#integrations" variant="ghost" size="lg">
                View integrations
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-elevated">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {product.stats.map((stat) => (
            <div key={stat.label} className="border-l border-border pl-5">
              <p className="font-mono text-3xl text-text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-bg-primary">
        <div className="mx-auto w-full max-w-7xl px-6 py-20">
          <SectionHeader
            eyebrow="FEATURES"
            title={`Built for ${product.name.toLowerCase()} workflows.`}
            subtitle="Reliable routing controls, clear observability, and developer-friendly setup for teams running production workloads."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {product.features.map((feature) => (
              <Card key={feature.title} className="p-6">
                <div className="flex gap-4">
                  <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-md border border-border bg-bg-elevated text-success">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-text-primary">{feature.title}</h3>
                    <p className="mt-2 leading-7 text-text-secondary">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-b border-border bg-bg-elevated">
        <div className="mx-auto w-full max-w-7xl px-6 py-20">
          <SectionHeader
            eyebrow="PRICING"
            title="Choose a plan that matches your routing volume."
            subtitle="Start small, scale predictably, and move to committed capacity when your workloads are ready."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {product.pricing.map((tier) => (
              <Card key={tier.tier} className="p-6">
                <h3 className="text-lg font-semibold text-text-primary">{tier.tier}</h3>
                <p className="mt-5 text-2xl font-bold text-accent">{formatTierPrice(tier.price, tier.unit)}</p>
                <p className="mt-1 text-xs text-text-muted">{getBillingLabel(tier.unit)}</p>
                <p className="mt-4 min-h-12 text-sm leading-6 text-text-secondary">{tier.description}</p>
                <ul className="mt-6 space-y-3">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-text-secondary">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-success" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="integrations" className="border-b border-border bg-bg-primary">
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-sm text-accent">INTEGRATIONS</p>
              <h2 className="mt-3 text-3xl font-semibold text-text-primary">Works with your existing stack.</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {integrations.map((integration) => (
                <span
                  key={integration}
                  className="rounded-md border border-border bg-bg-card px-4 py-3 text-center font-mono text-xs text-text-secondary"
                >
                  {integration}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-elevated">
        <div className="mx-auto w-full max-w-7xl px-6 py-20">
          <SectionHeader
            eyebrow="FAQ"
            title={`Questions about ${product.name.toLowerCase()}.`}
            subtitle="A few practical answers before your first request."
          />
          <div className="mt-10">
            <FaqAccordion items={product.faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title={`Start building with ${product.name.toLowerCase()}.`}
        subtitle="Create a project, generate credentials, and route your first production-ready request through GHOSTATLAS IP."
        cta={product.cta}
      />
    </>
  );
}

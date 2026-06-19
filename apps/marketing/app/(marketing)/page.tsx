import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Check, Database, FileCode2, Globe2, Server, Smartphone } from "lucide-react";

import { ComparisonSection } from "@/components/comparison-section";
import { FinalCtaBand } from "@/components/final-cta-band";
import { HomeFaqSection } from "@/components/home-faq-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { Badge, Button, Card, Console, SectionHeader } from "@/components/ui";

const ogImage = "https://ghostatlas.com/og/marketing.png";

export const metadata: Metadata = {
  title: "GHOSTATLAS IP — Global Proxy Infrastructure",
  description: "High-performance residential, datacenter, static residential, and mobile proxies for global routing and automation.",
  openGraph: {
    title: "GHOSTATLAS IP — Global Proxy Infrastructure",
    description: "Route traffic through high-performance proxy infrastructure anywhere on Earth.",
    images: [ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: "GHOSTATLAS IP — Global Proxy Infrastructure",
    description: "Route traffic through high-performance proxy infrastructure anywhere on Earth.",
    images: [ogImage]
  }
};

const products = [
  {
    icon: Globe2,
    title: "Residential",
    href: "/products/residential",
    price: "From $1.50/GB",
    billing: "Pay-as-you-go",
    description: "Ethically sourced residential IPs for high-trust access across consumer networks.",
    features: ["50M+ rotating IP pool", "Country and city targeting", "Sticky sessions available", "Unlimited concurrent threads"]
  },
  {
    icon: Building2,
    title: "Static Residential",
    href: "/products/static-residential",
    price: "From $0.27/IP",
    billing: "Monthly billing",
    description: "Persistent ISP-backed addresses for workflows that need stable identity and speed.",
    features: ["Dedicated static IPs", "ISP-grade reputation", "HTTP and SOCKS5 support", "Instant replacement controls"]
  },
  {
    icon: Server,
    title: "Datacenter",
    href: "/products/datacenter",
    price: "From $0.08/IP",
    billing: "Monthly billing",
    description: "Fast, cost-efficient datacenter proxies built for high-volume automation.",
    features: ["Low-latency routing", "Shared or dedicated pools", "Bulk endpoint generation", "Usage analytics included"]
  },
  {
    icon: Smartphone,
    title: "Mobile",
    href: "/products/mobile",
    price: "From $2.50/GB",
    billing: "Pay-as-you-go",
    description: "Carrier-backed mobile proxies for app testing, ad verification, and localized QA.",
    features: ["4G and 5G carrier routes", "Country-level targeting", "Flexible rotation windows", "Session persistence controls"]
  }
];

const stats = [
  ["50M+", "IPs"],
  ["195+", "countries"],
  ["<50ms", "latency"],
  ["99.99%", "uptime"]
];

const developerCards = [
  { icon: FileCode2, title: "API-first workflows", copy: "Generate endpoints, rotate sessions, and inspect usage from predictable APIs." },
  { icon: Database, title: "Proxy APIs", copy: "Create credentials, rotate sessions, inspect usage, and manage routing from code." },
  { icon: Smartphone, title: "Mobile coverage", copy: "Reach mobile carrier networks for app testing, ad verification, and localized QA." },
  { icon: Server, title: "Fleet observability", copy: "Track latency, pool health, usage, and routing behavior from a single console." }
];

export default function LandingPage() {
  return (
    <>
      <section className="overflow-hidden border-b border-border bg-bg-primary">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_0.9fr] lg:py-20">
          <div className="max-w-3xl">
            <Badge dot className="mb-6">
              Infrastructure live - 195+ locations active
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-text-primary md:text-7xl">
              Route traffic through{" "}
              <span className="inline-block whitespace-nowrap bg-gradient-to-r from-[#a78bfa] to-[#22c55e] bg-clip-text text-transparent">
                anywhere on Earth
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">
              High-performance residential, datacenter, and mobile proxies for teams that need reliable access, clean data collection, and global coverage without fragile routing.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#pricing" variant="accent" size="lg">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="#developers" variant="ghost" size="lg">
                View documentation
              </Button>
            </div>
          </div>

          <Console />
        </div>
      </section>

      <UseCasesSection />

      <section id="solutions" className="border-b border-border bg-bg-primary">
        <div className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="SOLUTIONS"
              title="Proxy infrastructure for production data work."
              subtitle="Choose IP networks for routing control, resilient automation, app testing, and global data access."
              className="mx-0 text-left"
            />
            <div className="w-full rounded-md border border-border bg-bg-elevated p-1 sm:w-auto">
              <button className="rounded bg-accent px-4 py-2 text-sm font-medium text-bg-primary">
                Proxies
              </button>
            </div>
          </div>

          <div id="pricing" className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <Link key={product.title} href={product.href} className="block cursor-pointer">
                <Card className="h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-bg-elevated">
                    <product.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{product.title}</h3>
                  <p className="mt-4 text-2xl font-bold text-accent">{product.price}</p>
                  <p className="mt-1 text-xs text-text-muted">{product.billing}</p>
                  <p className="mt-3 min-h-20 leading-7 text-text-secondary">{product.description}</p>
                  <ul className="mt-6 space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-text-secondary">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-success" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    View plans
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <IntegrationsSection />

      <ComparisonSection />

      <section id="network" className="border-b border-border bg-bg-elevated">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="border-l border-border pl-5">
              <p className="font-mono text-3xl text-text-primary">{value}</p>
              <p className="mt-2 text-sm text-text-secondary">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />

      <section id="developers" className="border-b border-border bg-bg-primary">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="DEVELOPERS"
            title="One control plane for routing and extraction."
            className="mx-0 text-left"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {developerCards.map((item) => (
              <Card key={item.title} className="p-5">
                <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-medium text-text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{item.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <HomeFaqSection />

      <FinalCtaBand />
    </>
  );
}

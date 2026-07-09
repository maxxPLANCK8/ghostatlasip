import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";

import { JadeRoutingConsole } from "@/components/jade-routing-console";
import { APP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "GhostatlasIP (Jade) - Proxies that route like they don't exist",
  description:
    "Residential, datacenter, ISP and mobile proxies on infrastructure built for scale: clean pools, sub-40ms routing, and a console that shows exactly where your traffic exits.",
  openGraph: {
    title: "GhostatlasIP (Jade) - Proxies that route like they don't exist",
    description: "Premium proxy infrastructure with clean pools, sub-40ms routing, and visible exit telemetry."
  },
  twitter: {
    card: "summary_large_image",
    title: "GhostatlasIP (Jade) - Proxies that route like they don't exist",
    description: "Premium proxy infrastructure with clean pools, sub-40ms routing, and visible exit telemetry."
  }
};

const products = [
  {
    tag: "GB-BASED",
    name: "Rotating Residential",
    desc: "72M+ real household IPs across 195+ countries. Rotate per request or hold sticky sessions up to 30 minutes.",
    price: "$5.00",
    unit: "/GB"
  },
  {
    tag: "IP-BASED",
    name: "Static Datacenter",
    desc: "Dedicated high-speed IPs on premium subnets with unlimited bandwidth from major hubs.",
    price: "$2.00",
    unit: "/IP/mo"
  },
  {
    tag: "IP-BASED",
    name: "Static Residential ISP",
    desc: "Datacenter speed with genuine ISP ASNs. The trust of residential, the reliability of static.",
    price: "$3.50",
    unit: "/IP/mo"
  },
  {
    tag: "IP-BASED",
    name: "Static Mobile",
    desc: "Real 4G and 5G carrier IPs with on-demand rotation for the hardest trust checks.",
    price: "$7.00",
    unit: "/IP/mo"
  }
];

const steps = [
  ["STEP 01", "Choose your pool", "Pick residential, datacenter, ISP or mobile. Filter by country, city or ASN before you commit."],
  ["STEP 02", "Pay as you go", "Card or crypto, per-GB or per-IP. No minimums. Balance tops up instantly and never expires."],
  ["STEP 03", "Connect and route", "Grab credentials or an API key. HTTP and SOCKS5 endpoints drop into any stack."]
];

const tiers = [
  {
    name: "Starter",
    sub: "Testing and small jobs",
    price: "$8.00",
    unit: "/ GB",
    features: ["1+ GB", "195+ countries", "City and ASN targeting", "Rotating or sticky sessions"]
  },
  {
    name: "Scale",
    sub: "Production scraping",
    price: "$5.00",
    unit: "/ GB",
    popular: true,
    features: ["5+ GB", "Everything in Starter", "Unlimited concurrency", "Priority routing"]
  },
  {
    name: "Volume",
    sub: "Heavy pipelines",
    price: "$4.00",
    unit: "/ GB",
    features: ["10+ GB", "Everything in Scale", "Dedicated account channel", "Custom rotation rules"]
  }
];

function SectionEyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex rounded-full border px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.16em] ${
        dark ? "border-mint/35 text-mint" : "border-jade/20 bg-jade/10 text-jade"
      }`}
    >
      {children}
    </span>
  );
}

function AppButton({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "secondary" }) {
  return (
    <Link
      href={APP_URL}
      className={
        variant === "primary"
          ? "inline-flex min-h-12 items-center justify-center rounded-full bg-jade px-8 py-3.5 text-sm font-semibold text-jade-bg shadow-jade transition hover:-translate-y-0.5 hover:bg-jade-dark hover:shadow-jade-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
          : "inline-flex min-h-12 items-center justify-center rounded-full border border-deep/25 bg-white/45 px-7 py-3.5 text-sm font-semibold text-deep transition hover:-translate-y-0.5 hover:border-jade hover:bg-white/75 hover:text-jade focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade"
      }
    >
      {children}
    </Link>
  );
}

export default function LandingPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_50%_at_79%_39%,rgba(47,127,109,0.18),rgba(234,245,241,0)_68%),radial-gradient(ellipse_42%_35%_at_18%_20%,rgba(15,63,53,0.08),rgba(234,245,241,0)_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(47,127,109,0.13)_1px,transparent_1px)] bg-[length:28px_28px] [mask-image:radial-gradient(ellipse_65%_60%_at_50%_35%,black,transparent_72%)]" />
        <svg viewBox="0 0 960 620" className="absolute right-[-110px] top-8 h-[620px] w-[min(980px,82vw)] overflow-visible opacity-[0.34] max-lg:right-[-280px] max-lg:w-[760px]" aria-hidden="true">
          <g className="fill-none stroke-deep/40" strokeDasharray="8 16">
            <path d="M72 380 L220 250 L370 312 L520 180 L694 238 L858 118" />
            <path d="M126 112 L274 198 L406 126 L584 310 L752 284 L900 430" />
            <path d="M186 512 L342 414 L512 478 L674 368 L846 456" />
            <path d="M370 312 L406 126 M520 180 L584 310 M694 238 L674 368" />
          </g>
          <g className="fill-jade">
            {[["72", "380"], ["220", "250"], ["370", "312"], ["520", "180"], ["694", "238"], ["858", "118"], ["126", "112"], ["406", "126"], ["584", "310"], ["900", "430"], ["186", "512"], ["512", "478"], ["846", "456"]].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" />
            ))}
          </g>
          <g className="fill-none stroke-jade">
            <circle cx="520" cy="180" r="20" />
            <circle cx="584" cy="310" r="18" />
            <circle cx="512" cy="478" r="20" />
          </g>
        </svg>

        <div className="relative mx-auto grid min-h-[720px] w-full max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-deep/20 bg-white/50 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-deep shadow-jade">
              <span className="h-1.5 w-1.5 rounded-full bg-jade animate-pulse" />
              Live / 195 countries / 72M+ IPs
            </div>
            <h1 className="max-w-4xl font-serif text-[clamp(44px,5.2vw,68px)] font-medium leading-[1.02] tracking-normal text-ink">
              Proxies that route like they <em className="text-jade">never existed.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary md:text-lg">
              Residential, datacenter, ISP and mobile proxies on infrastructure built for scale: clean pools, sub-40ms routing, and a console that shows exactly where your traffic exits.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AppButton>Open dashboard</AppButton>
              <AppButton variant="secondary">Start routing</AppButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 border-t border-deep/10 pt-6">
              {[
                ["99.98%", "network uptime"],
                ["195+", "countries covered"],
                ["<40ms", "avg routing latency"]
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-serif text-2xl font-semibold text-ink">{value}</p>
                  <p className="mt-1 text-xs text-text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <JadeRoutingConsole />
        </div>
      </section>

      <section id="solutions" className="bg-bg-primary px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Choose your pool</SectionEyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium tracking-normal text-ink">Four ways to disappear.</h2>
            <p className="mt-3 text-text-secondary">Ethically sourced, continuously monitored, and priced to scale with you.</p>
          </div>
          <div id="pricing" className="mt-11 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <div key={product.name} className="flex flex-col rounded-2xl border border-deep/10 bg-bg-card p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition hover:-translate-y-1 hover:border-jade/25 hover:shadow-jade">
                <span className="w-fit rounded-full bg-deep/10 px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-deep">{product.tag}</span>
                <h3 className="mt-5 font-serif text-[21px] font-medium leading-tight text-ink">{product.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">{product.desc}</p>
                <div className="mt-6 flex items-end justify-between border-t border-deep/10 pt-4">
                  <div>
                    <span className="text-xs text-text-muted">from </span>
                    <span className="font-serif text-xl font-semibold text-ink">{product.price}</span>
                    <span className="text-xs text-text-muted">{product.unit}</span>
                  </div>
                  <Link href={APP_URL} className="text-sm font-semibold text-jade transition hover:text-jade-dark">
                    Buy
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="network" className="border-y border-deep/10 bg-bg-elevated bg-grid-jade bg-[length:52px_52px] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>How it works</SectionEyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium tracking-normal text-ink">Live in under two minutes.</h2>
            <p className="mt-3 text-text-secondary">No sales calls, no contracts; just a rhythm that works.</p>
          </div>
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {steps.map(([step, title, desc]) => (
              <div key={step} className="rounded-2xl border border-deep/10 bg-white p-7 shadow-jade">
                <span className="rounded-full bg-deep/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-deep">{step}</span>
                <h3 className="mt-5 font-serif text-2xl font-medium text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep bg-[radial-gradient(rgba(185,232,220,0.08)_1px,transparent_1px)] bg-[length:30px_30px] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow dark>Start routing</SectionEyebrow>
            <h2 className="mt-5 font-serif text-4xl font-medium tracking-normal text-jade-bg">Simple tiers. Volume rewarded.</h2>
            <p className="mt-3 text-jade-bg/65">Pick a pool, pick a tier. Upgrade, downgrade or cancel anytime.</p>
          </div>
          <div className="mx-auto mt-11 grid max-w-5xl gap-5 md:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name} className={`relative rounded-2xl border bg-bg-primary p-7 shadow-[0_18px_42px_rgba(0,0,0,0.12)] ${tier.popular ? "border-mint bg-white md:-translate-y-2" : "border-deep/10"}`}>
                {tier.popular && <span className="absolute right-5 top-[-12px] rounded-full bg-mint px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-deep">Popular</span>}
                <h3 className="font-serif text-[21px] font-medium text-ink">{tier.name}</h3>
                <p className="mt-1 text-xs text-text-muted">{tier.sub}</p>
                <div className="mt-5">
                  <span className="font-serif text-4xl font-semibold text-ink">{tier.price}</span>
                  <span className="text-xs text-text-muted"> {tier.unit}</span>
                </div>
                <div className="mt-6 space-y-3 border-t border-deep/10 pt-5">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex gap-2.5 text-sm leading-6 text-text-secondary">
                      <Check className="mt-1 h-4 w-4 flex-none text-jade" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={APP_URL} className={`mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-full border px-5 text-sm font-semibold transition hover:bg-jade-dark hover:text-jade-bg ${tier.popular ? "border-jade bg-jade text-jade-bg" : "border-deep/25 text-deep"}`}>
                  Choose {tier.name}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-9 text-center text-xs text-jade-bg/55">
            No commitment / Cancel anytime / Enterprise volume?{" "}
            <Link href={APP_URL} className="text-mint hover:text-jade-bg">Start in the dashboard</Link>
          </p>
        </div>
      </section>

      <section id="developers" className="bg-bg-primary px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[22px] border border-deep/10 bg-gradient-to-br from-white via-bg-primary to-bg-elevated p-8 text-center shadow-jade md:p-16">
          <ShieldCheck className="mx-auto h-8 w-8 text-jade" aria-hidden="true" />
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl font-medium tracking-normal text-ink">
            Your first request is <em className="text-jade">one click</em> away.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Instant provisioning, pay-as-you-go pricing, and a console that shows every hop. Cancel anytime, with no stranded sessions.
          </p>
          <div className="mt-8">
            <AppButton>Open dashboard</AppButton>
          </div>
          <p className="mt-6 font-mono text-[11px] text-text-muted">app.ghostatlasip.com / card or crypto / from $1.75/IP</p>
        </div>
      </section>
    </>
  );
}

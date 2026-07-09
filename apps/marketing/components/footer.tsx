import Link from "next/link";

import { APP_URL, SUPPORT_EMAIL } from "@/lib/site";

const productLinks = [
  "Rotating Residential",
  "Static Datacenter",
  "Static ISP",
  "Static Mobile"
];

const legalLinks = ["Terms of Service", "Privacy Policy", "Acceptable Use Policy"];

export function Footer() {
  return (
    <footer className="bg-deep text-jade-bg">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-baseline gap-0.5">
            <span className="font-serif text-xl font-semibold">Ghostatlas</span>
            <span className="font-mono text-xs text-mint">IP</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-jade-bg/55">
            Proxies that route like they don&apos;t exist. Infrastructure for developers, scrapers
            and automation teams worldwide.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-jade-bg/40">Products</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {productLinks.map((label) => (
              <Link key={label} href="/#solutions" className="text-jade-bg/70 transition hover:text-mint">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-jade-bg/40">Legal</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {legalLinks.map((label) => (
              <Link key={label} href={APP_URL} className="text-jade-bg/70 transition hover:text-mint">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-[0.16em] text-jade-bg/40">Support</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link href={`mailto:${SUPPORT_EMAIL}`} className="text-jade-bg/70 transition hover:text-mint">
              {SUPPORT_EMAIL}
            </Link>
            <Link href={APP_URL} className="text-jade-bg/70 transition hover:text-mint">
              Dashboard
            </Link>
            <Link href={APP_URL} className="text-jade-bg/70 transition hover:text-mint">
              API Docs
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-jade-bg/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 font-mono text-[10.5px] text-jade-bg/40 md:flex-row md:items-center md:justify-between">
          <span>(C) 2026 GHOSTATLASIP.COM</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse" />
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}

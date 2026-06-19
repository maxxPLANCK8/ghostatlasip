import { Check, X } from "lucide-react";

import { SectionHeader } from "@/components/ui";

const rows = [
  { label: "Pool size", brand: "50M+ IPs", others: "Limited", free: "Unknown" },
  { label: "Latency", brand: "<50ms", others: "Variable", free: "Unstable" },
  { label: "Uptime SLA", brand: "99.99%", others: "Limited", free: "None" },
  { label: "Support response", brand: "Priority", others: "Slow", free: "None" },
  { label: "Rotation", brand: "Automatic", others: "Manual", free: "No" },
  { label: "Concurrent threads", brand: "Unlimited", others: "Capped", free: "Blocked" }
];

function StatusIcon({ positive }: { positive: boolean }) {
  return positive ? (
    <Check className="h-4 w-4 text-success" aria-hidden="true" />
  ) : (
    <X className="h-4 w-4 text-text-muted" aria-hidden="true" />
  );
}

export function ComparisonSection() {
  return (
    <section id="comparison" className="border-b border-border bg-bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <SectionHeader
          eyebrow="COMPARISON"
          title="Reliable infrastructure beats fragile workarounds."
          subtitle="Purpose-built proxy infrastructure gives teams cleaner routing, support, and operational control."
        />
        <div className="mt-10 overflow-hidden rounded-lg border border-border bg-bg-card">
          <div className="grid min-w-[720px] grid-cols-4 border-b border-border bg-bg-elevated text-sm">
            <div className="px-5 py-4 font-mono text-text-muted">Capability</div>
            <div className="border-x border-accent/60 px-5 py-4 font-mono text-accent">GHOSTATLAS IP</div>
            <div className="px-5 py-4 font-mono text-text-muted">Others</div>
            <div className="px-5 py-4 font-mono text-text-muted">Free proxies</div>
          </div>
          <div className="overflow-x-auto">
            {rows.map((row) => (
              <div key={row.label} className="grid min-w-[720px] grid-cols-4 border-b border-border text-sm last:border-b-0">
                <div className="px-5 py-4 font-medium text-text-primary">{row.label}</div>
                <div className="flex items-center gap-3 border-x border-accent/60 bg-accent/5 px-5 py-4 text-text-primary">
                  <StatusIcon positive />
                  <span>{row.brand}</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-4 text-text-secondary">
                  <StatusIcon positive={false} />
                  <span>{row.others}</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-4 text-text-secondary">
                  <StatusIcon positive={false} />
                  <span>{row.free}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

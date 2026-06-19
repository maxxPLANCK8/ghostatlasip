import { cn } from "@/lib/utils";

type ConsoleRegion = {
  region: string;
  ip: string;
  status: string;
  latency: number;
  bars: number[];
};

type ConsoleProps = {
  className?: string;
  regions?: ConsoleRegion[];
};

const defaultRegions: ConsoleRegion[] = [
  { region: "New York, US", ip: "198.51.100.24", status: "active", latency: 18, bars: [80, 62, 92, 70, 86] },
  { region: "Frankfurt, DE", ip: "203.0.113.81", status: "active", latency: 31, bars: [54, 76, 65, 88, 72] },
  { region: "Singapore, SG", ip: "192.0.2.143", status: "active", latency: 44, bars: [48, 68, 74, 58, 82] },
  { region: "Sao Paulo, BR", ip: "198.51.100.109", status: "active", latency: 39, bars: [72, 52, 64, 80, 61] },
  { region: "Tokyo, JP", ip: "203.0.113.207", status: "active", latency: 27, bars: [66, 84, 57, 79, 90] }
];

export function Console({ className, regions = defaultRegions }: ConsoleProps) {
  return (
    <div className={cn("rounded-lg border border-border bg-bg-card p-4 shadow-glow", className)}>
      <div className="rounded-md border border-border bg-bg-primary">
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <div>
            <p className="font-mono text-xs text-text-muted">ROUTING / LIVE</p>
            <h2 className="mt-1 text-lg font-medium">GHOSTATLAS IP — routing console</h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-3 py-1 font-mono text-xs text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
            synced
          </div>
        </div>
        <div className="divide-y divide-border">
          {regions.map((region, regionIndex) => (
            <div key={region.region} className="grid gap-4 px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="font-medium text-text-primary">{region.region}</p>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    {region.status}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-text-muted">{region.ip}</p>
              </div>
              <div className="flex items-end justify-between gap-4 sm:justify-end">
                <div className="flex h-9 items-end gap-1.5" aria-hidden="true">
                  {region.bars.map((height, barIndex) => (
                    <span
                      key={`${region.region}-${height}-${barIndex}`}
                      className="w-1.5 rounded-full bg-accent/75 animate-[pulse_1.8s_ease-in-out_infinite]"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${(regionIndex + barIndex) * 120}ms`
                      }}
                    />
                  ))}
                </div>
                <div className="w-16 text-right">
                  <p className="font-mono text-sm text-text-primary">{region.latency}ms</p>
                  <p className="font-mono text-[11px] text-text-muted">latency</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const metrics = [
  { label: "Active proxy pools", value: "12" },
  { label: "Requests today", value: "1.8M" },
  { label: "Success rate", value: "99.4%" },
  { label: "Avg latency", value: "42ms" }
];

export default function DashboardPage() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="font-mono text-sm text-accent">DASHBOARD</p>
        <h1 className="text-3xl font-semibold text-text-primary">Proxy operations overview</h1>
        <p className="max-w-2xl text-text-secondary">
          Monitor routing health, usage, billing posture, and account configuration from one workspace.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-lg border border-border bg-bg-card p-5">
            <p className="text-sm text-text-secondary">{metric.label}</p>
            <p className="mt-3 font-mono text-3xl text-text-primary">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-border bg-bg-card p-6">
          <h2 className="text-lg font-medium">Traffic by product</h2>
          <div className="mt-6 space-y-4">
            {["Residential", "Datacenter", "Static Residential", "Mobile"].map((item, index) => (
              <div key={item}>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{item}</span>
                  <span className="font-mono text-text-primary">{72 - index * 13}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-bg-elevated">
                  <div className="h-2 rounded-full bg-accent" style={{ width: `${72 - index * 13}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-bg-card p-6">
          <h2 className="text-lg font-medium">Recent events</h2>
          <div className="mt-5 space-y-4 text-sm text-text-secondary">
            <p>Residential pool rotated credentials.</p>
            <p>Datacenter usage crossed 75% monthly quota.</p>
            <p>New billing invoice generated.</p>
            <p>Static pool health check completed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

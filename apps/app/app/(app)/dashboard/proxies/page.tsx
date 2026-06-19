const pools = [
  { name: "Residential Global", type: "Residential", region: "195 countries", status: "Active" },
  { name: "Datacenter US/EU", type: "Datacenter", region: "32 metros", status: "Active" },
  { name: "Static ISP Login QA", type: "Static Residential", region: "US, DE, JP", status: "Active" },
  { name: "Mobile Verification", type: "Mobile", region: "18 markets", status: "Provisioning" }
];

export default function ProxiesPage() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="font-mono text-sm text-accent">PROXIES</p>
        <h1 className="text-3xl font-semibold">Proxy pools</h1>
        <p className="max-w-2xl text-text-secondary">Create, inspect, and rotate credentials for every GHOSTATLAS IP proxy product.</p>
      </div>

      <div className="mt-8 overflow-hidden rounded-lg border border-border bg-bg-card">
        <div className="grid grid-cols-4 border-b border-border px-5 py-3 font-mono text-xs text-text-muted">
          <span>Name</span>
          <span>Type</span>
          <span>Coverage</span>
          <span>Status</span>
        </div>
        {pools.map((pool) => (
          <div key={pool.name} className="grid grid-cols-4 gap-4 border-b border-border px-5 py-4 text-sm last:border-b-0">
            <span className="font-medium text-text-primary">{pool.name}</span>
            <span className="text-text-secondary">{pool.type}</span>
            <span className="text-text-secondary">{pool.region}</span>
            <span className="font-mono text-success">{pool.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BillingPage() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="font-mono text-sm text-accent">BILLING</p>
        <h1 className="text-3xl font-semibold">Billing and usage</h1>
        <p className="max-w-2xl text-text-secondary">Track usage, invoices, plan limits, and PayPal checkout status.</p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {[
          ["Current plan", "Growth"],
          ["Monthly spend", "$842.18"],
          ["Next invoice", "Jul 1, 2026"]
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-border bg-bg-card p-5">
            <p className="text-sm text-text-secondary">{label}</p>
            <p className="mt-3 font-mono text-3xl text-text-primary">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-border bg-bg-card p-6">
        <h2 className="text-lg font-medium">Payment method</h2>
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          PayPal integration hooks are scaffolded under <span className="font-mono text-text-primary">/api/paypal</span>.
        </p>
      </div>
    </div>
  );
}

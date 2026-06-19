export default function SettingsPage() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p className="font-mono text-sm text-accent">SETTINGS</p>
        <h1 className="text-3xl font-semibold">Workspace settings</h1>
        <p className="max-w-2xl text-text-secondary">Manage profile, security, workspace preferences, and integration credentials.</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {["Profile", "Authentication", "API keys", "Notifications"].map((item) => (
          <div key={item} className="rounded-lg border border-border bg-bg-card p-5">
            <h2 className="font-medium text-text-primary">{item}</h2>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Configure {item.toLowerCase()} controls for this GHOSTATLAS IP workspace.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

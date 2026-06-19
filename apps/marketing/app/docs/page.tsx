import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Card, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Documentation | GHOSTATLAS IP",
  description: "Everything you need to integrate GHOSTATLAS IP proxy infrastructure.",
  openGraph: {
    title: "Documentation | GHOSTATLAS IP",
    description: "Everything you need to integrate GHOSTATLAS IP.",
    images: ["https://ghostatlas.com/og/docs.png"]
  }
};

const sdks = [
  {
    name: "Node.js",
    install: "npm install @ghostatlas-ip/sdk",
    usage: "const client = createClient({ apiKey });\nawait client.proxies.list();"
  },
  {
    name: "Python",
    install: "pip install ghostatlas-ip",
    usage: "client = create_client(api_key=api_key)\nclient.proxies.list()"
  },
  {
    name: "Go",
    install: "go get github.com/ghostatlas-ip/sdk-go",
    usage: "client := ghostatlasip.New(apiKey)\nclient.Proxies.List(ctx)"
  },
  {
    name: "cURL",
    install: "curl https://api.ghostatlas.com/v1/proxies",
    usage: "curl -H \"Authorization: Bearer $GHOSTATLAS_IP_API_KEY\" \\\n  https://api.ghostatlas.com/v1/proxies"
  }
];

const faqs = [
  ["Rate limits", "Default limits are scoped per workspace and can be raised for production workloads."],
  ["Retries", "Use exponential backoff for transient 429, 500, 502, and 503 responses."],
  ["Errors", "API errors return structured JSON with a code, message, and request ID."],
  ["Webhooks", "Webhook delivery for orders and billing events is planned for the app console."]
];

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-md border border-border bg-bg-elevated p-4 font-mono text-xs leading-6 text-text-secondary">
      <code>{children}</code>
    </pre>
  );
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Nav />
      <main>
        <section className="border-b border-border bg-bg-primary">
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <p className="font-mono text-sm text-accent">DOCS</p>
            <h1 className="mt-4 text-5xl font-semibold md:text-7xl">Documentation</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
              Everything you need to integrate GHOSTATLAS IP.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-bg-elevated">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold">Get your first proxy in 5 minutes</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {["Sign up for a GHOSTATLAS IP workspace", "Deposit credits or start a free trial", "Order a proxy pool and copy credentials"].map((step, index) => (
                  <div key={step} className="rounded-md border border-border bg-bg-primary p-4">
                    <p className="font-mono text-sm text-accent">0{index + 1}</p>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">{step}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="border-b border-border bg-bg-primary">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <SectionHeader title="SDKs and snippets" subtitle="Use an SDK or standard HTTP tooling to create and inspect proxy resources." />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {sdks.map((sdk) => (
                <Card key={sdk.name} className="p-6">
                  <h2 className="text-lg font-medium">{sdk.name}</h2>
                  <div className="mt-4 space-y-3">
                    <CodeBlock>{sdk.install}</CodeBlock>
                    <CodeBlock>{sdk.usage}</CodeBlock>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-bg-elevated">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <SectionHeader title="API Key auth" subtitle="Send your workspace API key as a bearer token on every API request." />
            <div className="mx-auto mt-10 max-w-3xl">
              <CodeBlock>{"Authorization: Bearer GHOSTATLAS_IP_API_KEY"}</CodeBlock>
            </div>
          </div>
        </section>

        <section className="bg-bg-primary">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <SectionHeader title="Developer FAQ" subtitle="Operational notes for production integrations." />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {faqs.map(([question, answer]) => (
                <Card key={question} className="p-5">
                  <h2 className="font-medium">{question}</h2>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

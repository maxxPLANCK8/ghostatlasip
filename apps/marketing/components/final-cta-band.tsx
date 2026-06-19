import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui";

export function FinalCtaBand() {
  return (
    <section className="border-b border-border bg-bg-elevated">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1fr_0.75fr] lg:items-center">
        <div>
          <p className="font-mono text-sm text-accent">START NOW</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-text-primary md:text-5xl">
            Start routing in under 60 seconds
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">
            No credit card required. 1GB free trial.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#pricing" variant="accent" size="lg">
              Start free trial
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="mailto:sales@ghostatlasip.com" variant="ghost" size="lg">
              Talk to sales
            </Button>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-bg-card p-4">
          <div className="rounded-md border border-border bg-bg-primary p-5 font-mono text-xs text-text-secondary">
            <div className="flex gap-2 border-b border-border pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-text-muted" />
              <span className="h-2.5 w-2.5 rounded-full bg-text-muted" />
              <span className="h-2.5 w-2.5 rounded-full bg-success" />
            </div>
            <div className="space-y-3 pt-5">
              <p>
                <span className="text-accent">$</span> ghostatlas-ip auth create
              </p>
              <p>
                <span className="text-success">ok</span> credentials generated
              </p>
              <p>
                <span className="text-accent">$</span> curl proxy.ghostatlas.com
              </p>
              <p>
                <span className="text-success">200</span> routed via us-nyc-17
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

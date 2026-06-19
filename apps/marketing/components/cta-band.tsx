import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui";

type CtaBandProps = {
  title: string;
  subtitle: string;
  cta: string;
};

export function CtaBand({ title, subtitle, cta }: CtaBandProps) {
  return (
    <section className="border-t border-border bg-bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="rounded-lg border border-border bg-bg-card p-8 md:flex md:items-center md:justify-between md:gap-8 md:p-10">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-accent">READY TO ROUTE</p>
            <h2 className="mt-3 text-3xl font-semibold text-text-primary md:text-4xl">{title}</h2>
            <p className="mt-4 leading-7 text-text-secondary">{subtitle}</p>
          </div>
          <Button href="/#pricing" variant="accent" size="lg" className="mt-8 md:mt-0">
            {cta}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}

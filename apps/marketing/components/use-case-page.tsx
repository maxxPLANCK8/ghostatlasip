import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Button, Card } from "@/components/ui";
import type { UseCaseData } from "@/lib/usecases";

type UseCasePageProps = {
  useCase: UseCaseData;
};

export function UseCasePage({ useCase }: UseCasePageProps) {
  return (
    <>
      <section className="border-b border-border bg-bg-primary">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <p className="font-mono text-sm text-accent">USE CASE</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-normal text-text-primary md:text-7xl">{useCase.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">{useCase.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#pricing" variant="accent" size="lg">
              {useCase.cta}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/#use-cases" variant="ghost" size="lg">
              Back to use cases
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg-elevated">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-sm text-accent">RECOMMENDED ROUTING</p>
            <h2 className="mt-3 text-3xl font-semibold text-text-primary">{useCase.relatedProxyType}</h2>
            <p className="mt-4 leading-7 text-text-secondary">
              Use GHOSTATLAS IP routing controls to match this workflow to the proxy profile it needs.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {useCase.benefits.map((benefit) => (
              <Card key={benefit} className="p-5">
                <Check className="h-5 w-5 text-success" aria-hidden="true" />
                <p className="mt-4 text-sm leading-6 text-text-secondary">{benefit}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-primary">
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <Link href="/#solutions" className="text-sm font-medium text-accent hover:text-accent/80">
            Compare proxy products
          </Link>
        </div>
      </section>
    </>
  );
}

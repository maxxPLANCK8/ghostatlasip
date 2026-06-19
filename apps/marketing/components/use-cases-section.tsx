import Link from "next/link";
import { ArrowRight, BadgeCheck, BarChart3, LineChart, Search, ShoppingBag, Users } from "lucide-react";

import { Card, SectionHeader } from "@/components/ui";
import { useCases } from "@/lib/usecases";

const icons = {
  "ad-verification": BadgeCheck,
  "market-research": BarChart3,
  "price-tracking": LineChart,
  "seo-monitoring": Search,
  "sneaker-bots": ShoppingBag,
  "social-media": Users
};

export function UseCasesSection() {
  return (
    <section id="use-cases" className="border-b border-border bg-bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <SectionHeader
          eyebrow="USE CASES"
          title="Built for teams that need reliable global access."
          subtitle="Choose a workflow and route traffic through the network profile it needs."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Object.values(useCases).map((item) => {
            const Icon = icons[item.slug as keyof typeof icons];

            return (
            <Card key={item.slug} className="p-6">
              <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-medium text-text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{item.description}</p>
              <Link
                href={`/usecases/${item.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Card>
          );
          })}
        </div>
      </div>
    </section>
  );
}

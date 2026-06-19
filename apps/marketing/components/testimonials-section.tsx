import { Card, SectionHeader } from "@/components/ui";

const testimonials = [
  {
    quote: "GHOSTATLAS IP made our regional QA checks boring in the best possible way. The routing is predictable and the team can move faster.",
    name: "Maya Chen",
    title: "Head of Growth",
    company: "Northstar Labs"
  },
  {
    quote: "We replaced a patchwork of proxy vendors with one control plane. Visibility into latency and pool health changed our workflow.",
    name: "Jon Bell",
    title: "Data Platform Lead",
    company: "Vectra Index"
  },
  {
    quote: "The API fit directly into our existing scraping jobs, and the residential coverage solved markets we could not reach before.",
    name: "Ari Malik",
    title: "Automation Engineer",
    company: "Pipeline Systems"
  }
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-b border-border bg-bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <SectionHeader
          eyebrow="TESTIMONIALS"
          title="Proxy infrastructure teams can trust."
          subtitle="Placeholder customer stories while the real case studies are being prepared."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              <p className="leading-7 text-text-secondary">
                <span aria-hidden="true">&ldquo;</span>
                {testimonial.quote}
                <span aria-hidden="true">&rdquo;</span>
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-bg-elevated font-mono text-xs text-accent">
                  {initials(testimonial.name)}
                </span>
                <div>
                  <p className="text-sm font-medium text-text-primary">{testimonial.name}</p>
                  <p className="mt-1 text-xs text-text-muted">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

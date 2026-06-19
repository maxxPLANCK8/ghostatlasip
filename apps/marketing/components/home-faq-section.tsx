import { SectionHeader } from "@/components/ui";

const faqs = [
  {
    question: "What types of proxies do you offer?",
    answer: "GHOSTATLAS IP offers residential, static residential, datacenter, and mobile proxies for production routing and automation workflows."
  },
  {
    question: "How does billing work?",
    answer: "Billing is usage-based by product, with starter plans for trial workloads and custom pricing for committed volume."
  },
  {
    question: "Can I rotate IPs automatically?",
    answer: "Yes. You can rotate per request, on a timed interval, or keep sticky sessions when a workflow needs continuity."
  },
  {
    question: "What authentication methods are supported?",
    answer: "GHOSTATLAS IP supports username and password authentication, allowlisted IPs, and separate credentials per project."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes. New teams can start with a 1GB free trial and no credit card required."
  }
];

export function HomeFaqSection() {
  return (
    <section id="faq" className="border-b border-border bg-bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions before you route your first request?"
          subtitle="Here are the basics teams usually ask before starting a trial."
        />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-lg border border-border bg-bg-card">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="group">
              <input id={`faq-${index}`} type="checkbox" defaultChecked={index === 0} className="peer sr-only" />
              <label
                htmlFor={`faq-${index}`}
                className="flex cursor-pointer items-center justify-between gap-5 px-5 py-5 font-medium text-text-primary peer-checked:[&>span:last-child]:rotate-45"
              >
                <span>{faq.question}</span>
                <span className="text-xl leading-none text-accent transition-transform duration-300" aria-hidden="true">
                  +
                </span>
              </label>
              <div className="max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out peer-checked:max-h-40">
                <p className="px-5 pb-5 text-sm leading-7 text-text-secondary">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

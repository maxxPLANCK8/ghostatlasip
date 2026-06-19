type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-lg border border-border bg-bg-card">
      {items.map((item, index) => (
        <details key={item.question} className="group" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-medium text-text-primary">
            <span>{item.question}</span>
            <span className="text-xl leading-none text-accent transition-transform group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="px-5 pb-5 text-sm leading-7 text-text-secondary">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

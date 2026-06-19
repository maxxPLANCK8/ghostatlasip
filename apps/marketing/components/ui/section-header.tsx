import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

export function SectionHeader({ eyebrow, title, subtitle, className, ...props }: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)} {...props}>
      {eyebrow ? <p className="font-mono text-sm text-accent">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold text-text-primary md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 leading-7 text-text-secondary">{subtitle}</p> : null}
    </div>
  );
}

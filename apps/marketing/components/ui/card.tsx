import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-lg border border-border bg-bg-card transition duration-200 ease-out hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow",
        className
      )}
      {...props}
    >
      {children}
    </article>
  );
}

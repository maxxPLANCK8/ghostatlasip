import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href = "#",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variant === "primary" && "bg-text-primary text-bg-primary hover:bg-text-primary/90",
        variant === "accent" && "bg-accent text-bg-primary hover:bg-accent/90",
        variant === "ghost" &&
          "border border-border bg-transparent text-text-primary hover:border-accent/60 hover:text-accent",
        size === "sm" && "h-9 px-4 text-sm",
        size === "md" && "h-11 px-5 text-sm",
        size === "lg" && "h-12 px-6 text-base",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

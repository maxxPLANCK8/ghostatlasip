import Link from "next/link";

import { Button } from "@/components/ui";

const navItems = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Network", href: "/#network" },
  { label: "Developers", href: "/#developers" },
  { label: "Blog", href: "/blog" },
  { label: "Docs", href: "/docs" },
  { label: "Pricing", href: "/#pricing" }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/88 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-bold tracking-[-0.02em] text-text-primary md:text-2xl"
        >
          <span>GHOSTATLAS IP</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm text-text-secondary md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-text-primary">
              {item.label}
            </Link>
          ))}
        </div>
        <Button href="/#pricing" variant="accent" size="sm">
          Start free trial
        </Button>
      </nav>
    </header>
  );
}

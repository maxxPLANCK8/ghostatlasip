import Link from "next/link";

import { Button } from "@/components/ui";
import { APP_URL } from "@/lib/site";

const navItems = [
  { label: "Products", href: "/#solutions" },
  { label: "Network", href: "/#network" },
  { label: "Developers", href: "/#developers" },
  { label: "Pricing", href: "/#pricing" }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-jade-bg/10 bg-deep/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-baseline gap-0.5 font-serif text-xl font-semibold tracking-normal text-jade-bg md:text-2xl"
        >
          <span>Ghostatlas</span>
          <span className="font-mono text-sm text-mint">IP</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm text-jade-bg/75 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-mint">
              {item.label}
            </Link>
          ))}
        </div>
        <Button href={APP_URL} variant="accent" size="sm" className="rounded-full text-jade-bg shadow-jade hover:bg-jade-dark">
          Open dashboard
        </Button>
      </nav>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, CreditCard, Network, Settings } from "lucide-react";

import { signOut } from "@/lib/supabase/actions";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { label: "Proxies", href: "/dashboard/proxies", icon: Network },
  { label: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { label: "Settings", href: "/dashboard/settings", icon: Settings }
];

type SidebarProps = {
  email?: string | null;
};

function isActivePath(pathname: string, href: string) {
  if (href === "/dashboard") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar({ email }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-border bg-bg-elevated md:block">
        <div className="flex h-full flex-col">
          <div className="border-b border-border px-6 py-5">
            <Link
              href="/dashboard"
              className="flex items-center gap-2.5 text-xl font-bold tracking-[-0.02em] text-text-primary"
            >
              <span>GHOSTATLAS IP</span>
            </Link>
            <p className="mt-2 truncate text-xs text-text-muted">{email ?? "Authenticated workspace"}</p>
          </div>
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md border-l-2 border-transparent px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary",
                    active && "border-l-accent bg-border text-text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <form action={signOut} className="border-t border-border p-3">
            <button className="w-full rounded-md border border-border px-3 py-2 text-left text-sm text-text-secondary transition-colors hover:border-accent/60 hover:text-accent">
              Sign out
            </button>
          </form>
        </div>
      </aside>

      <header className="sticky top-0 z-40 border-b border-border bg-bg-primary/88 backdrop-blur-xl md:hidden">
        <div className="flex h-16 items-center justify-between px-5">
            <Link
              href="/dashboard"
              className="flex items-center gap-2.5 text-xl font-bold tracking-[-0.02em] text-text-primary"
            >
              <span>GHOSTATLAS IP</span>
            </Link>
          <form action={signOut}>
            <button className="rounded-md border border-border px-3 py-2 text-sm text-text-secondary">
              Sign out
            </button>
          </form>
        </div>
        <nav className="grid grid-cols-4 gap-1 border-t border-border px-2 py-2">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-md border-l-2 border-transparent px-2 py-2 text-[11px] text-text-secondary hover:bg-bg-card hover:text-text-primary",
                  active && "border-l-accent bg-border text-text-primary"
                )}
              >
                <item.icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}

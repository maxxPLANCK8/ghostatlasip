import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle, MessageSquare, Send, Youtube, type LucideIcon } from "lucide-react";

const contactIcons = [
  { label: "Email", href: "mailto:support@ghostatlasip.com", icon: Mail },
  { label: "WhatsApp", href: "#", icon: MessageCircle },
  { label: "Telegram", href: "#", icon: Send },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "GitHub", href: "#", icon: Github },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Discord", href: "#", icon: MessageSquare }
];

const socialIcons = contactIcons.filter((item) => ["YouTube", "GitHub", "LinkedIn", "Discord"].includes(item.label));

const columns = [
  {
    title: "Terms",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookie", href: "#" },
      { label: "Refund", href: "#" }
    ]
  },
  {
    title: "Proxies",
    links: [
      { label: "Residential proxies", href: "/products/residential" },
      { label: "Static residential", href: "/products/static-residential" },
      { label: "Datacenter proxies", href: "/products/datacenter" },
      { label: "Mobile proxies", href: "/products/mobile" }
    ]
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API reference", href: "/api-reference" },
      { label: "Status", href: "/status" },
      { label: "Integrations", href: "/integrations" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" }
    ]
  }
];

const locations = [
  { label: "United States proxies", href: "/products/residential?country=us" },
  { label: "United Kingdom proxies", href: "/products/residential?country=uk" },
  { label: "Canada proxies", href: "/products/residential?country=ca" },
  { label: "France proxies", href: "/products/residential?country=fr" },
  { label: "Germany proxies", href: "/products/residential?country=de" },
  { label: "Netherlands proxies", href: "/products/residential?country=nl" },
  { label: "Japan proxies", href: "/products/residential?country=jp" }
];

const dataFor = [
  { label: "Data for AI training", href: "#" },
  { label: "YouTube data for AI Training", href: "#" },
  { label: "Ecommerce Intelligence", href: "#" },
  { label: "Real Estate Intelligence", href: "#" }
];

function IconLink({ item }: { item: { label: string; href: string; icon: LucideIcon } }) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      aria-label={item.label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border p-2 text-text-muted transition-colors hover:border-[#2a2a2a] hover:text-text-primary"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </Link>
  );
}

function LinkList({ links }: { links: Array<{ label: string; href: string }> }) {
  return (
    <ul className="mt-4 text-sm text-text-secondary">
      {links.map((link) => (
        <li key={link.label} className="py-1.5">
          <Link href={link.href} className="transition-colors hover:text-text-primary">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(320px,1.45fr)_repeat(4,minmax(0,1fr))]">
          <div className="min-w-[300px]">
            <Link
              href="/"
              className="whitespace-nowrap text-3xl font-bold tracking-[0.05em] text-text-primary"
            >
              GHOSTATLAS IP
            </Link>
            <p className="mt-4 max-w-md text-lg leading-8 text-text-secondary">
              High-performance proxy infrastructure for teams that need reliable access, global reach, and clean developer workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {contactIcons.map((item) => (
                <IconLink key={item.label} item={item} />
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xs font-medium uppercase tracking-wider text-text-muted">Follow us</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialIcons.map((item) => (
                  <IconLink key={item.label} item={item} />
                ))}
              </div>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-medium uppercase tracking-wider text-text-muted">{column.title}</h3>
              <LinkList links={column.links} />
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-border pt-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-text-muted">195+ Locations</h3>
            <div className="mt-4 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
              {locations.map((link) => (
                <Link key={link.label} href={link.href} className="py-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-text-muted">Data for</h3>
            <div className="mt-4 grid gap-x-6 sm:grid-cols-2">
              {dataFor.map((link) => (
                <Link key={link.label} href={link.href} className="py-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 GHOSTATLAS IP. All rights reserved.</p>
          <p className="font-mono">GHOSTATLAS IP. Route smarter. Scrape cleaner. Ship faster.</p>
        </div>
      </div>
    </footer>
  );
}

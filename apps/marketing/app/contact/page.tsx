import type { Metadata } from "next";
import { AtSign, Hash, MessageCircle } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Card, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact | GHOSTATLAS IP",
  description: "Contact the GHOSTATLAS IP team for support, billing, technical help, or partnerships.",
  openGraph: {
    title: "Contact | GHOSTATLAS IP",
    description: "Get in touch with GHOSTATLAS IP.",
    images: ["https://ghostatlas.com/og/contact.png"]
  }
};

const contactMethods = [
  { icon: AtSign, title: "Email", value: "support@ghostatlasip.com" },
  { icon: MessageCircle, title: "Discord", value: "Community invite coming soon" },
  { icon: Hash, title: "Twitter/X", value: "@ghostatlasip" }
];

const faqs = [
  ["Billing", "For invoices, plan changes, or payment questions, email support and include your workspace email."],
  ["Technical", "Share your product type, region, and request IDs so we can inspect routing quickly."],
  ["Partnerships", "Tell us about the integration, audience, or reseller motion you have in mind."]
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Nav />
      <main>
        <section className="border-b border-border bg-bg-primary">
          <div className="mx-auto w-full max-w-7xl px-6 py-24">
            <p className="font-mono text-sm text-accent">CONTACT</p>
            <h1 className="mt-4 text-5xl font-semibold md:text-7xl">Get in touch</h1>
            <p className="mt-6 text-lg text-text-secondary">We respond within 24 hours.</p>
          </div>
        </section>

        <section className="border-b border-border bg-bg-elevated">
          <div className="mx-auto grid w-full max-w-7xl gap-4 px-6 py-16 md:grid-cols-3">
            {contactMethods.map((method) => (
              <Card key={method.title} className="p-6">
                <method.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h2 className="mt-5 text-lg font-medium">{method.title}</h2>
                <p className="mt-3 text-sm text-text-secondary">{method.value}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-b border-border bg-bg-primary">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader title="Send a message" subtitle="No backend yet, but the form UI is ready for wiring." className="mx-0 text-left" />
            <ContactForm />
          </div>
        </section>

        <section className="bg-bg-elevated">
          <div className="mx-auto w-full max-w-7xl px-6 py-20">
            <SectionHeader title="Quick answers" subtitle="A few notes before you write in." />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {faqs.map(([question, answer]) => (
                <Card key={question} className="p-5">
                  <h2 className="font-medium">{question}</h2>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

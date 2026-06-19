"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-lg border border-border bg-bg-card p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="text-text-secondary">Name</span>
          <input className="mt-2 h-11 w-full rounded-md border border-border bg-bg-primary px-3 text-text-primary outline-none transition-colors focus:border-accent" />
        </label>
        <label className="block text-sm">
          <span className="text-text-secondary">Email</span>
          <input
            type="email"
            className="mt-2 h-11 w-full rounded-md border border-border bg-bg-primary px-3 text-text-primary outline-none transition-colors focus:border-accent"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm">
        <span className="text-text-secondary">Message</span>
        <textarea className="mt-2 min-h-36 w-full rounded-md border border-border bg-bg-primary px-3 py-3 text-text-primary outline-none transition-colors focus:border-accent" />
      </label>
      <button className="mt-5 h-11 rounded-md bg-accent px-5 text-sm font-medium text-bg-primary transition-colors hover:bg-accent/90">
        Submit
      </button>
      {submitted ? <p className="mt-4 text-sm text-success">Message captured locally. Backend coming soon.</p> : null}
    </form>
  );
}

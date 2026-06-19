import Link from "next/link";

import { signUp } from "@/lib/supabase/actions";

type SignUpPageProps = {
  searchParams?: {
    error?: string;
  };
};

export default function SignUpPage({ searchParams }: SignUpPageProps) {
  const supabaseMissing = searchParams?.error === "supabase_missing";

  return (
    <main className="flex min-h-screen items-center justify-center bg-bg-primary px-5 py-12">
      <div className="w-full max-w-md rounded-lg border border-border bg-bg-card p-6">
        <Link href="/" className="font-mono text-sm font-semibold text-text-primary">
          GHOSTATLAS IP
        </Link>
        <h1 className="mt-8 text-3xl font-semibold">Sign up for GHOSTATLAS IP</h1>
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          Welcome to GHOSTATLAS IP. Start managing proxy infrastructure.
        </p>
        {supabaseMissing ? (
          <p className="mt-4 rounded-md border border-border bg-bg-elevated px-3 py-2 text-sm leading-6 text-text-secondary">
            Supabase credentials are not configured yet. Add <span className="font-mono text-text-primary">NEXT_PUBLIC_SUPABASE_URL</span> and{" "}
            <span className="font-mono text-text-primary">NEXT_PUBLIC_SUPABASE_ANON_KEY</span> to enable sign-up.
          </p>
        ) : searchParams?.error ? (
          <p className="mt-4 rounded-md border border-accent-dim/40 bg-accent-dim/10 px-3 py-2 text-sm text-accent">
            We could not create your account. Try another email or password.
          </p>
        ) : null}
        <form action={signUp} className="mt-6 space-y-4">
          <label className="block text-sm">
            <span className="text-text-secondary">Email</span>
            <input
              name="email"
              type="email"
              required
              className="mt-2 h-11 w-full rounded-md border border-border bg-bg-primary px-3 text-text-primary outline-none transition-colors focus:border-accent"
            />
          </label>
          <label className="block text-sm">
            <span className="text-text-secondary">Password</span>
            <input
              name="password"
              type="password"
              required
              minLength={8}
              className="mt-2 h-11 w-full rounded-md border border-border bg-bg-primary px-3 text-text-primary outline-none transition-colors focus:border-accent"
            />
          </label>
          <button className="h-11 w-full rounded-md bg-accent px-4 text-sm font-medium text-bg-primary transition-colors hover:bg-accent/90">
            Create account
          </button>
        </form>
        <p className="mt-5 text-sm text-text-secondary">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-accent hover:text-accent/90">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}

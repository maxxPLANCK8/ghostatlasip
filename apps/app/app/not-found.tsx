import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg-primary px-6 py-16 text-text-primary">
      <div className="max-w-xl text-center">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-normal md:text-7xl">Page not found</h1>
        <p className="mt-5 text-lg leading-8 text-text-secondary">The route you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-medium text-bg-primary transition-colors hover:bg-accent/90"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

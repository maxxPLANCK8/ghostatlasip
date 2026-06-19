import { redirect } from "next/navigation";

import { Sidebar } from "@/components/sidebar";
import { getSupabaseEnv } from "@/lib/supabase/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function AppLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!getSupabaseEnv().isConfigured) {
    redirect("/auth/sign-in?error=supabase_missing");
  }

  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Sidebar email={user?.email} />
      <div className="md:pl-64">
        <main className="mx-auto min-h-screen w-full max-w-7xl px-5 py-8 md:px-8 md:py-10">{children}</main>
      </div>
    </div>
  );
}

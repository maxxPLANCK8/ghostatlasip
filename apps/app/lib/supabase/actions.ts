"use server";

import { redirect } from "next/navigation";

import { getSupabaseEnv } from "@/lib/supabase/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function signIn(formData: FormData) {
  if (!getSupabaseEnv().isConfigured) {
    redirect("/auth/sign-in?error=supabase_missing");
  }

  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const supabase = createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect("/auth/sign-in?error=invalid_credentials");
  }

  redirect("/dashboard");
}

export async function signUp(formData: FormData) {
  if (!getSupabaseEnv().isConfigured) {
    redirect("/auth/sign-up?error=supabase_missing");
  }

  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const supabase = createSupabaseServerClient();

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    redirect("/auth/sign-up?error=signup_failed");
  }

  redirect("/dashboard");
}

export async function signOut() {
  if (!getSupabaseEnv().isConfigured) {
    redirect("/auth/sign-in?error=supabase_missing");
  }

  const supabase = createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/auth/sign-in");
}

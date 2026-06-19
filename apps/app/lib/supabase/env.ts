type SupabaseEnv =
  | {
      url: string;
      anonKey: string;
      isConfigured: true;
    }
  | {
      url: undefined;
      anonKey: undefined;
      isConfigured: false;
    };

export function getSupabaseEnv(): SupabaseEnv {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (url && anonKey) {
    return {
      url,
      anonKey,
      isConfigured: true
    };
  }

  return {
    url: undefined,
    anonKey: undefined,
    isConfigured: false
  };
}

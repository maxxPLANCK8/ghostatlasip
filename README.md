# GHOSTATLAS IP

GHOSTATLAS IP is split into two standalone Next.js apps:

- `apps/marketing`: public marketing site for `ghostatlas.com`
- `apps/app`: authenticated app console for `app.ghostatlas.com`

## Local Development

Install and run each app from its own directory.

```bash
cd apps/marketing
npm install
npm run dev -- -p 3000
```

```bash
cd apps/app
npm install
npm run dev -- -p 3001
```

## Environment Variables

Copy each example file before running the matching app.

```bash
copy apps\marketing\.env.example apps\marketing\.env.local
copy apps\app\.env.example apps\app\.env.local
```

### Marketing App

`apps/marketing/.env.local`

- `NEXT_PUBLIC_APP_URL`: URL for the authenticated app, usually `https://app.ghostatlas.com`.

### App Console

`apps/app/.env.local`

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL from Project Settings > API.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon public key from Project Settings > API.
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase service role key for trusted server-side jobs. Keep private.
- `PAYPAL_CLIENT_ID`: PayPal app client ID from the PayPal developer dashboard.
- `PAYPAL_CLIENT_SECRET`: PayPal app secret from the PayPal developer dashboard. Keep private.
- `PAYPAL_WEBHOOK_ID`: Webhook ID generated after registering PayPal webhooks.
- `PROXYCHEAP_API_KEY`: Proxycheap API key from account or developer settings.
- `PROXYCHEAP_API_SECRET`: Proxycheap API secret if enabled for the account. Keep private.
- `RESEND_API_KEY`: Resend API key for transactional email.
- `NEXT_PUBLIC_MARKETING_URL`: Public marketing site URL, usually `https://ghostatlas.com`.

## Verification

Run checks from each app directory:

```bash
npm run typecheck
npm run build
```

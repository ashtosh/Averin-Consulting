# Averin Consulting

Production website for **averinconsulting.com**.

## Positioning

Independent Retail Planning & Supply Chain Advisory for retailers and manufacturers.

## Technology

- Next.js 16.3 App Router
- React 19.2
- TypeScript
- Responsive plain CSS
- Designed for Vercel deployment

## Local development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Contact email

The contact page reads `NEXT_PUBLIC_CONTACT_EMAIL`. If it is not set, it falls back to `info@averinconsulting.com`.

In Vercel: **Project → Settings → Environment Variables** and add:

```text
NEXT_PUBLIC_CONTACT_EMAIL=your-working-email@domain.com
```

Then redeploy.

## Deploy to Vercel

1. Log in to Vercel with GitHub.
2. Select **Add New → Project**.
3. Import `ashtosh/Averin-Consulting`.
4. Vercel should detect **Next.js** automatically.
5. Add the contact-email environment variable if required.
6. Click **Deploy**.
7. After deployment, open **Project → Settings → Domains**.
8. Add `averinconsulting.com` and `www.averinconsulting.com`.
9. Vercel will show the exact DNS records required. Add those records in the DNS provider currently managing the domain.
10. Choose a primary domain in Vercel and redirect the other version to it.

## If the domain is managed in Squarespace

1. Open the Squarespace Domains dashboard.
2. Select `averinconsulting.com`.
3. Open **DNS → DNS Settings**.
4. Remove only Squarespace web-hosting records that conflict with pointing the website to Vercel. Do **not** remove MX/TXT/email records unless you know they are no longer required.
5. Add the apex and `www` DNS records shown by Vercel.
6. Return to Vercel and verify both domains.

Always use the current DNS values displayed by Vercel rather than copying old DNS values from tutorials.

## Main pages

- `/` Home
- `/services`
- `/capabilities`
- `/technology-advisory`
- `/ai-retail-planning`
- `/health-check`
- `/about`
- `/insights`
- `/contact`

## Recommended next enhancements

- Replace the email CTA with a secure server-side inquiry form.
- Add Google Analytics and Google Search Console.
- Publish the first 3–6 insight articles.
- Add anonymized case studies only after legal/IP review.
- Add a self-service Retail Planning Maturity Assessment.
- Add a private AI-enabled client knowledge portal later.

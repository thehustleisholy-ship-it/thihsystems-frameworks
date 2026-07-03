# THIHsystems Framework Fridays

Production-ready public hub for Framework Fridays by THIHsystems, designed for `frameworks.thihsystems.com`.

## What is included

- Home page at `/`
- Framework detail page at `/frameworks/womens-health-longitudinal-dashboard`
- Static synthetic demo preview at `/frameworks/womens-health-longitudinal-dashboard/demo`
- Next.js App Router, TypeScript, Tailwind CSS, and ESLint
- No database, auth, or external API calls

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

## Vercel deployment

1. Push this repository to GitHub: `thehustleisholy-ship-it/thihsystems-frameworks`.
2. Import the repo in Vercel.
3. Set the production domain to `frameworks.thihsystems.com`.
4. Use the default Next.js build settings:
   - Build command: `npm run build`
   - Install command: `npm install`
   - Output: Next.js default
5. Deploy to production.

No environment variables are required for v1.

## Content links

- GitHub: <https://github.com/thehustleisholy-ship-it/thihsystems-frameworks>
- Substack: <https://thihsystems.substack.com>
- LinkedIn: <https://www.linkedin.com/company/thihsystems/>

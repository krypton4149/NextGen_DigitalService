# NextGen Digital Service

A fully responsive marketing site for **NextGen Digital Service**—digital solutions for small businesses: web development, mobile apps, SEO, Google Business Profile, branding, and more. Designed with performance, scalability, and user experience in mind.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

**Repository:** [github.com/krypton4149/NextGen_DigitalService](https://github.com/krypton4149/NextGen_DigitalService)

## Live demo

- **Production:** add your Vercel URL here after the first deploy (Project → **Domains**), e.g. `https://<your-project>.vercel.app`.
- **Deploy in one step:** [Import this repo on Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkrypton4149%2FNextGen_DigitalService&project-name=nextgen-digital-service&repository-name=NextGen_DigitalService) (sign in, then confirm to build and go live).

## Features

- Home, Services, Pricing, About, and Contact pages
- One-time pricing tiers (INR) and capability comparison
- Mobile navigation drawer, accessible header/footer
- Static assets under `public/images/` (logos, team, portfolio)—served the same locally and on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run production server locally
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com/new), **Import** the GitHub repository.
3. Framework preset: **Next.js** (auto-detected). Root directory: project root.
4. Deploy. No extra env vars are required for the current static build.

**Images on Vercel:** Files in `public/` (e.g. `public/images/logo.png`) ship with the deployment and are available at `/images/logo.png`, same as locally. Use `next/image` with `src="/images/..."`.

## Git remote

```bash
git remote add origin https://github.com/krypton4149/NextGen_DigitalService.git
# or: git remote set-url origin https://github.com/krypton4149/NextGen_DigitalService.git
git push -u origin main
```

## Project structure (high level)

| Path | Purpose |
|------|---------|
| `app/` | Routes: `/`, `/about`, `/services`, `/pricing`, `/contact` |
| `components/` | UI sections (Header, Footer, Hero, etc.) |
| `public/images/` | Logos, photos, portfolio images, `app/icon.png` for favicon |
| `lib/contact.ts` | Shared contact email / phone constants |

## License

Private / all rights reserved unless you add an open-source license.

# KaamTasker homepage

Studio site for **KaamTasker** — a website, iOS/Android app, and software development company.

- **Live domain:** [kaamtasker.com](https://kaamtasker.com)
- **Pronounced:** CalmTasker / ComTasker
- **This repository:** `calmtasker-site` (source for the new root homepage; CoS will archive the existing kaamtasker.com homepage, then deploy these files)

KaamTasker builds custom websites (bookings and other product features), native mobile apps, and broader software. It is a development studio, not a marketplace.

## Stack

Built with **[sitemd](https://sitemd.cc)** `@sitemd-cc/sitemd@0.2.2` (Elastic License 2.0). Pages live in `sitemd/pages/`, settings in `sitemd/settings/`, theme in `sitemd/theme/`.

## Preview locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

SiteMD’s dev server is **http://localhost:4747**.

## Production static files

```bash
npm run build
npm run preview   # http://localhost:4173 — serves dist/
```

`npm run build` runs the **SiteMD engine renderer** and writes a static tree to `dist/` with `index.html` at the root.

**Deploy target:** upload the contents of `dist/` to the **kaamtasker.com** docroot (Namecheap). Do not deploy from this agent; CoS handles hosting once DNS exists.

## SiteMD production CLI notes

These are the exact blockers for official SiteMD cloud export in this environment:

1. `npx sitemd build` → `Unknown command: build` (v0.2.2 does not expose `build` on the public CLI).
2. `npx sitemd auth status` → `Not logged in. Run: sitemd login`
3. `npx sitemd status` → `Project: KaamTasker (trial)`, `Auth: not logged in`, `Deploy: not configured`
4. Official docs: production disk export / `sitemd deploy` requires **login + site activation** (`sitemd activate` / first deploy). There is no offline official build path.

This repo still **uses SiteMD** to generate HTML (same `build()` pipeline as `sitemd launch`). The trial banner is stripped only in `dist/` so the Namecheap homepage is client-ready. After a sitemd account exists, CoS can run `sitemd login` and `sitemd activate` if you want the official activation receipt.

## Content

Homepage sections: hero, services (websites with bookings/custom features, iOS, Android, software), process, portfolio placeholders, demo-labelled testimonials, contact, footer.

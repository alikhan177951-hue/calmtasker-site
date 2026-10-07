# KaamTasker homepage

Studio site for **KaamTasker** — a website, iOS/Android app, and software development company.

- **Live domain:** [kaamtasker.com](https://kaamtasker.com)
- **Pronounced:** CalmTasker / ComTasker
- **Brand:** real KT mark (forest green `#0B6B4F`) in `public/brand/`

KaamTasker builds custom websites (bookings and other product features), native mobile apps, and broader software. It is a development studio, not a marketplace.

## Stack

Vite + React + Tailwind CSS + Framer Motion. Static export lands in `dist/` with `index.html` at the root (Namecheap docroot). Hero uses word-stagger entrance; sections use scroll reveals and hover polish; all looping motion respects `prefers-reduced-motion`. Primary CTAs are lime `#E8EF6C` with dark ink `#06140F` text (never light-on-yellow).

Brand files live in `public/brand/` (`logo.svg`, `logo.png`, icons, BIMI). Favicon, apple-touch, and Open Graph art are generated from those assets.

## Preview locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Dev server: **http://localhost:5173**.

## Production static files

```bash
npm run build
npm run preview   # http://localhost:4173 — serves dist/
```

`npm run build` writes a static tree to `dist/` with `index.html` at the root, plus `404.html` for static hosts.

**Deploy target:** upload the contents of `dist/` to the **kaamtasker.com** docroot (Namecheap). Do not deploy from this agent; CoS handles hosting.

## Content

Homepage sections: hero, services (websites with bookings/custom features, iOS, Android, software), process (Listen → Shape → Build → Launch), portfolio placeholders, demo-labelled testimonials, contact, footer.

Contact UI uses a **lead form** (name, email, project brief) with an in-page success state, plus email and WhatsApp **icons only** (`mailto:support@kaamtasker.com`, WhatsApp via `wa.me` — number never shown as text). Area line: Cantt Model Villas, Sialkot, Pakistan.

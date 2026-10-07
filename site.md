---
---

# KaamTasker · sitemd

This project uses [sitemd](https://sitemd.cc) (Elastic License 2.0) to build the KaamTasker studio homepage.

- **Brand:** KaamTasker
- **Said:** CalmTasker / ComTasker
- **Live domain:** https://kaamtasker.com
- **This git remote:** calmtasker-site (source of truth for the new homepage until CoS deploys)

KaamTasker is a **website + iOS/Android app / software development company**. Custom websites (bookings and other product features), native mobile apps, and broader software. Not a marketplace.

## Commands

```bash
npm install
npm run dev      # sitemd launch — localhost:4747
npm run build    # SiteMD engine render → dist/ (Namecheap docroot)
npm run preview  # serve dist locally
```

Official `sitemd deploy` / activation requires a sitemd account. This repo exports static files with the SiteMD renderer so CoS can place them at the kaamtasker.com root.

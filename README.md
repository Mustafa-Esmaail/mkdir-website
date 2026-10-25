# mkdir Solutions — website

Astro + Tailwind CSS, English + Arabic (RTL). Static output, almost zero JavaScript.

## Run locally
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output in dist/
```

## Where to edit content
| What | File |
|---|---|
| Projects (case studies, EN + AR) | `src/data/projects.ts` |
| Services (EN + AR) | `src/data/services.ts` |
| All other text, contact details | `src/i18n/ui.ts` |
| Colors & fonts | `src/styles/global.css` |
| Layout (explorer sidebar, tabs, footer) | `src/layouts/Shell.astro` |

Add a project = add one object to `projects.ts`. Its page at `/work/<slug>/` and `/ar/work/<slug>/` is generated automatically.

## Before going live
1. Set your real domain in `astro.config.mjs` (`site:`).
2. Contact form: currently opens the visitor's email app. To receive submissions directly, create a free form on formspree.io or web3forms.com and point the form's `action` at it (see the comment in `src/views/Contact.astro`).

## Deploy (free)
Push to GitHub → Cloudflare Pages or Vercel → framework preset "Astro", build command `npm run build`, output `dist`.

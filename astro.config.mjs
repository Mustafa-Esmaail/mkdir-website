// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: replace with your real domain before deploying
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://mkdir.solutions',
  // On GitHub Pages without a custom domain the site lives under /<repo-name>/
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', ar: 'ar' } } }),
  ],
  vite: { plugins: [tailwindcss()] },
});

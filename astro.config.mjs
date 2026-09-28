// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // TODO: Platzhalter-Domain, sobald die finale Domain feststeht hier anpassen
  // (wirkt sich auf Sitemap und kanonische URLs aus).
  site: 'https://shuttermag.de',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // /go/ sind reine Redirect-Utility-Seiten (Affiliate-Links), keine Inhalte für die Sitemap.
      filter: (page) => !page.includes('/go/'),
    }),
    mdx(),
  ]
});
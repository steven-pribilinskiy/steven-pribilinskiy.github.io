import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://steven-pribilinskiy.github.io',
  integrations: [sitemap()],
  server: { port: 52807 },
  vite: {
    plugins: [tailwindcss()],
    server: { strictPort: true },
  },
});

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import partytown from '@astrojs/partytown';

// https://astro.build/config
// Triggering rebuild for schema sync
export default defineConfig({
  site: 'https://anarrativelens.com',
  integrations: [
    icon(),
    partytown({
      config: {
        forward: ['gtag', 'dataLayer.push'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['lucide-react']
    },
    server: {
      watch: {
        ignored: ['**/node_modules/**'],
        usePolling: true,
        interval: 100,
      },
      fs: {
        allow: ['.']
      }
    }
  }
});

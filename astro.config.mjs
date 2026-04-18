// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://anarrativelens.com',
  integrations: [icon()],
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
        allow: [
          '.',
          '/Users/jamalwilliams/Vault/Websites/anarrativelens.com/media',
          process.env.VAULT_CONTENT_PATH || ''
        ]
      }
    }
  }
});

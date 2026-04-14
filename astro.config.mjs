// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://anarrativelens.com',
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/node_modules/**'],
        usePolling: true,
        interval: 100,
      },
      fs: {
        allow: [
          '.',
          process.env.VAULT_CONTENT_PATH || ''
        ]
      }
    }
  }
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://wistermarquez90-oss.github.io',
  base: '/Prueba-humanic',
  output: 'static',
  integrations: [tailwind()],
  build: {
    format: 'file'
  },
  vite: {
    build: {
      cssCodeSplit: true
    }
  }
});

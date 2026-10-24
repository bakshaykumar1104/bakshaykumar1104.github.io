import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bakshaykumar1104.github.io',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' }
});

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'http://brenobragalha.com/',
	integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
    }
  }
});

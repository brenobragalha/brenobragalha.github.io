import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import shikiLightCustomTheme from './shiki-light-custom-theme.json'
import shikiDarkCustomTheme from './shiki-dark-custom-theme.json'

export default defineConfig({
	site: 'https://brenobragalha.com',
	integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: shikiLightCustomTheme,
        dark: shikiDarkCustomTheme,
      }
    }
  }
});

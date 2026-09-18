// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
	site: 'https://sisir.me',
	trailingSlash: 'never',

	integrations: [
		mdx(),
		tailwind({
			nesting: true,
		}),
		sitemap(),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
	],

	build: {
		format: 'directory',
		assets: 'assets',
	},

	//   adapter: cloudflare(), // needed when server-side logic is present, kept for future reference
});

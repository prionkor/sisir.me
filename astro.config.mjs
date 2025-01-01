// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://sisir.me',
	trailingSlash: 'never',

	integrations: [
		tailwind({
			nesting: true,
		}),
	],

	build: {
		format: 'directory',
		assets: 'assets',
	},

	//   adapter: cloudflare(), // needed when server-side logic is present, kept for future reference
});

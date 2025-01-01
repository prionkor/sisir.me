// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

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

	//   adapter: cloudflare(),
});

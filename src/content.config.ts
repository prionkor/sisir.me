// src/content.config.ts
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
// 1. Import the glob loader
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// 2. Add the loader to find your markdown files
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content' }),
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		publishDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = { blog };

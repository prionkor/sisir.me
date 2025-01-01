// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		publishDate: z.date(),
		updatedDate: z.date().optional(),
	}),
});

export const collections = { blog };

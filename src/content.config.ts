import { defineCollection, z } from 'astro:content'
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        draft: z.boolean().optional().default(false),
        description: z.union([z.string(), z.null()]).optional().transform((value) => value ?? ''),
        image: z.union([z.string(), z.null()]).optional().transform((value) => value ?? ''),
        category: z.union([z.string(), z.null()]).optional().transform((value) => value ?? ''),
                categories: z
                    .union([z.array(z.string()), z.string(), z.null()])
                    .optional()
                    .transform((value) => {
                        if (Array.isArray(value)) {
                            return value.map((item) => String(item).trim()).filter(Boolean);
                        }
                        const single = String(value ?? '').trim();
                        return single ? [single] : [];
                    }),
        slugId: z.string()
    }),
})

const specCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/spec" }),
})
export const collections = {
    blog: blogCollection,
    spec: specCollection,
}
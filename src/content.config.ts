// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const basics = defineCollection({
  loader: file("src/content/cv/basics.yml"),
  schema: z.object({
    name: z.string(),
    label: z.string(),
  }),
});

const works = defineCollection({
  loader: file("src/content/cv/works.yml"),
  schema: z.object({
    name: z.string(),
    position: z.string(),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { basics, works };
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
    phone: z.string(),
    email: z.string(),
    url: z.string(),
    summary: z.string(),
    label: z.string(),
    location: z.object({
      address: z.string(),
      postalCode: z.string(),
      city: z.string(),
      countryCode: z.string(),
      region: z.string(),
    }),
    profiles: z.array(z.object({
      network: z.string(),
      username: z.string(),
      url: z.string(),
    }))
  }),
});

const works = defineCollection({
  loader: file("src/content/cv/works.yml"),
  schema: z.object({
    name: z.string(),
    position: z.string(),
    summary: z.string(),
    startDate: z.string(),
    endDate: z.optional(z.string()),
    highlights: z.array(z.string()),
  }),
});

const educations = defineCollection({
  loader: file("src/content/cv/educations.yml"),
  schema: z.object({
    institution: z.string(),
    url: z.string(),
    area: z.string(),
    studyType: z.string(),
    startDate: z.string(),
    endDate: z.optional(z.string()),
    score: z.string(),
    courses: z.array(z.string()),
  })
});

const skills = defineCollection({
  loader: file("src/content/cv/skills.yml"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    level: z.number().min(1).max(5),
    keywords: z.array(z.string()),
    order: z.number(),
  }),
});
// 5. Export a single `collections` object to register your collection(s)
export const collections = { basics, works, skills, educations };
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default("Your Name"),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog: blogCollection,
};

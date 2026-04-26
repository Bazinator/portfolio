import { defineCollection} from 'astro:content';
import { z } from 'astro/zod'
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date()
  })
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(999),
    description: z.string(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).min(1),
    links: z
      .object({
        github: z.string().default(''),
        demo: z.string().default('')
      })
      .default({ github: '', demo: '' }),
    image: z.string(),
    overview: z.string(),
    problem: z.string(),
    approach: z.array(z.string()).min(1),
    techStack: z.array(z.string()).min(1),
    learnings: z.array(z.string()).min(1),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional()
        })
      )
      .default([])
  })
});

export const collections = {
  blog,
  projects
};

import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';

const posts = defineCollection({
  name: 'posts',
  directory: 'content/blog',
  include: '**/*.mdx',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string(),
    authors: z.array(z.string()),
    tags: z.array(z.string()),
  }),
  transform: async ({ title, ...page }, context) => {
    const body = await context.cache(page.content, async () =>
      compileMDX(context, page)
    );

    return {
      ...page,
      _title: title,
      _slug: page._meta.path,
      body,
    };
  },
});

const legals = defineCollection({
  name: 'legal',
  directory: 'content/legal',
  include: '**/*.mdx',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
  transform: async ({ title, ...page }, context) => {
    const body = await context.cache(page.content, async () =>
      compileMDX(context, page)
    );

    return {
      ...page,
      _title: title,
      _slug: page._meta.path,
      body,
    };
  },
});

export default defineConfig({
  collections: [posts, legals],
});

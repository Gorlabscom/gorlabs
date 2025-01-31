import { allPosts, allLegals } from 'content-collections';

export const blog = {
  postsQuery: null,
  latestPostQuery: null,
  postQuery: (slug: string) => null,
  getPosts: async () => allPosts,
  getLatestPost: async () =>
    allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ),
  getPost: async (slug: string) =>
    allPosts.find(({ _meta }) => _meta.path === slug),
};

export const legal = {
  postsQuery: null,
  latestPostQuery: null,
  postQuery: (slug: string) => null,
  getPosts: async () => allLegals,
  getLatestPost: async () =>
    allLegals.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ),
  getPost: async (slug: string) =>
    allLegals.find(({ _meta }) => _meta.path === slug),
};

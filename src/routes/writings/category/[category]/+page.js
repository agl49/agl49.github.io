import { categoryTags } from '../../../../lib/constants.js';

export const load = async ({ fetch, params }) => {
  const { category } = params;
  const response = await fetch(`/api/posts`);
  const allPosts = await response.json();

  const posts = allPosts.filter((post) => post.meta.categories.includes(category));

  return {
    category,
    posts
  };
};

/** @type {import('./$types').EntryGenerator} */
export function entries() {
  let tags = [];

  for (let i = 0; i < categoryTags.length; i++) {
    tags.push({ category: categoryTags[i] });
  }

  return tags;
}

export const prerender = true;

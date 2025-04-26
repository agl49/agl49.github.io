import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export async function GET() {
  let allPosts;

  try {
    allPosts = await fetchMarkdownPosts();
  } catch (err) {
    console.log(err);
    console.log('Problem with fetching markdown posts');
  }

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });

  return json(sortedPosts);
}

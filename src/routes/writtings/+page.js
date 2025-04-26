export const load = async ({ fetch }) => {
  const response = await fetch(`/api/posts`);
  const allPosts = await response.json();

  return {
    posts: allPosts
  };
};

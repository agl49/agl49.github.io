export const load = async ({ fetch }) => {
  try {
    const response = await fetch(`/api/posts`);

    if (!response.ok) {
      // Handle non-OK responses properly
      console.error(`Failed to fetch: ${response.status} ${response.statusText}`);
      return {
        posts: [] // or some default value
      };
    }

    const allPosts = await response.json();

    return {
      posts: allPosts
    };
  } catch (error) {
    console.error('Error loading data:', error);
    return {
      posts: [] // or some default value
    };
  }
};

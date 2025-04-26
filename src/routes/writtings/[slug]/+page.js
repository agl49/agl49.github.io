export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const { title, date, categories } = post.metadata;
  const content = post.default;

  console.log('slug page');
  console.log(post.metadata);

  return {
    content,
    title,
    date,
    categories
  };
}

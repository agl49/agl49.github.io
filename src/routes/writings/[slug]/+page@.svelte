<script>
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';

  let { data } = $props();

  const Content = $derived(data.content);

  console.log('page data');
  console.log(data);
</script>

<div in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
  <article class="markdown">
    <h1>{data.title}</h1>
    <p>Published: {data.date}</p>
    <Content />
  </article>

  {#if data.categories.length}
    <aside>
      <h2>Posted in:</h2>
      <ul>
        {#each data.categories as category}
          <li>
            <a href="{base}/writings/category/{category}">
              {category}
            </a>
          </li>
        {/each}
      </ul>
    </aside>
  {/if}
</div>

<style>
  .markdown {
    max-width: 550px;
    text-align: center;
    text-align: left;
  }
</style>

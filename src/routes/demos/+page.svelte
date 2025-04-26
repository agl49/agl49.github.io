<script>
  import { fade } from 'svelte/transition';
  let nothing = $state(); // vscode calls this legacy mode other wise.

  // Keeping in case you decide to host some code that runs live in your website
  // or have it be a portal to other sites. But for now, we'll unlist it from the
  // navigation options.
</script>

<div in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
  <h1 class="main">Demos page</h1>
  <p>I'll add more stuff here once I have some more modern stuff to show off.</p>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0rem;
    /* min-height: 100vh; */
    color: white;
    z-index: 1;
  }
</style>

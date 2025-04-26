<script>
  import { goto } from '$app/navigation';

  export let type = 'primary';
  export let onClick = () => {};
  export let disabled = false;
  export let href = null;
</script>

<div class="buttonDiv">
  <button class={type} on:click={href ? () => goto(href) : onClick} {disabled}>
    <slot />
  </button>
</div>

<style>
  .buttonDiv {
    padding-top: 2em;
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .primary {
    --border: 2px; /* the border width */
    --slant: 0em; /* control the slanted corners */
    --color: red; /* the color */

    font-size: 35px;
    /* padding: 0.4em 1.2em; */

    padding: 10px 20px;
    min-width: 300px;
    max-width: 50%;
    width: auto;
    box-sizing: border-box;

    border: none;
    cursor: pointer;
    font-weight: normal;
    color: black;
    background: var(--color);

    background-repeat: no-repeat;

    clip-path: polygon(
      0 0,
      calc(100% - var(--slant)) 0,
      100% var(--slant),
      100% 100%,
      var(--slant) 100%,
      0 calc(100% - var(--slant))
    );
    transition:
      color var(--t, 0.6s),
      background-size 0.6s;
  }

  .primary:hover {
    background: white;
    background-size: calc(var(--slant) + 1.3 * var(--border))
      calc(var(--slant) + 1.3 * var(--border));
    background-repeat: no-repeat;
    clip-path: polygon(
      0 0,
      calc(100% - var(--slant)) 0,
      100% var(--slant),
      100% 100%,
      var(--slant) 100%,
      0 calc(100% - var(--slant))
    );
    transition:
      color var(--t, 0.6s),
      background-size 0.6s;
    background-color: white;
    color: black;
  }
</style>

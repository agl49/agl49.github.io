<!-- We want an icon that once clicked it transforms into many buttons -->
<!-- Inital icon it is must be injected -->
<!-- button list must also be injected -->
<!-- Has to have aninimation for expanding and shrinking -->

<script>
  import '@fontsource/source-code-pro'; // Defaults to weight 400

  let { buttons = [] } = $props();
  // export let buttons = [];
</script>

<div>
  {#each buttons as button (button.id)}
    <button class="btn" onclick={button.onClick}>
      {button.label}
    </button>
  {/each}
</div>

<style>
  .btn {
    /* padding: 15px 100px; */
    margin: 10px 4px;
    color: #fff;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    /* font-family: sans-serif; */
    font-family: 'Source Code Pro';
    text-transform: uppercase;
    text-align: center;
    position: relative;
    /* text-decoration: none; */
    display: inline-block;
  }

  .btn::before {
    content: '';
    position: absolute;
    bottom: 0%;
    left: 0px;
    width: 100%;
    height: 1px;
    background: #6098ff;
    display: block;
    -webkit-transform-origin: right top;
    -ms-transform-origin: right top;
    transform-origin: right top;
    -webkit-transform: scale(0, 1);
    -ms-transform: scale(0, 1);
    transform: scale(0, 1);
    -webkit-transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
    transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
  }

  .btn:hover::before {
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
  }
</style>

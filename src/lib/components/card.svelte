<script>
  let {
    dateRange = [],
    title = 'default title',
    link = 'link',
    tags = [],
    blurb = '...'
  } = $props();
</script>

<div class="outer-card">
  <div class="card">
    <div class="card-rest">
      <!-- this is also the link -->
      <h3>
        <a class="link" href={link}>
          {title}
        </a>
      </h3>
      <p>
        {dateRange[0]} -- {dateRange[1]}
      </p>
      <p>
        <!-- main text -->
        {blurb}
      </p>

      <!--tags -->
      <div class="tag-padding">
        {#each tags as tag}
          <span class="tag-cloud">
            {tag}
          </span>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .outer-card {
    padding-top: 15px;
  }

  .card {
    background: rgba(255, 255, 255, 0);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  /* .card-date {
    display: inline-block;
  } */

  .card-rest {
    display: inline-block;
    padding-left: 0.5em;
  }

  .tag-padding {
    padding-bottom: 10px;
  }

  .tag-cloud {
    display: inline-block;
    color: white;
    padding: 8px 20px;
    border-radius: 25px;
    background-color: #101021;
    margin-top: 8px;
  }

  .link {
    /* padding: 15px 100px; */
    margin: 10px 4px;
    color: #fff;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    /* font-family: sans-serif; */
    /* text-decoration: none; */
    text-align: left;
    position: relative;
    /* text-decoration: none; */
    display: inline-block;
  }

  .link::before {
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

  .link:hover::before {
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    transform: scale(1, 1);
  }
</style>

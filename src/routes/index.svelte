<script>
</script>

<svelte:head>
  <title>Don't Panic</title>
</svelte:head>

<div>
  <h1 style="text-align: center">
    Welcome To <span>Loyola</span>
    <span>University</span>
    <span>Chicago's</span> Coding Community!
  </h1>
</div>

<style>
  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 2em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  h1 > :nth-child(odd) {
    color: var(--primary);
  }
  h1 > :nth-child(even) {
    color: var(--secondary);
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

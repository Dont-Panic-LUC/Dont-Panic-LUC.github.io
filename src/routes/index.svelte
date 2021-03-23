<script>
</script>

<svelte:head>
  <title>Don't Panic</title>
</svelte:head>

<div id="hero">
  <h1 id="hero-title">
    Welcome To <span>Loyola</span>
    <span>University</span>
    <span>Chicago's</span> Coding Community!
  </h1>
</div>

<div id="mission">
  <h2>
    Founded in 2018, DON'T PANIC! aims to connect students from all disciplines
    in the Loyola coding community.
  </h2>
  <a href="about" class="button button--secondary">Learn more →</a>
</div>

<style>
  div {
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
  }

  #hero {
    padding: 6em 2em;
  }

  #hero-title {
    font-size: 2em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  #hero-title > :nth-child(odd) {
    color: var(--primary);
  }
  #hero-title > :nth-child(even) {
    color: var(--secondary);
  }

  #mission {
    background: var(--primary);
    color: var(--primary-text);

    margin-left: calc(-100vw / 2 + 56em / 2);
    margin-right: calc(-100vw / 2 + 56em / 2);

    padding: 4em 2em;
  }

  @media (max-width: 56em) {
    #mission {
      margin: 0px;
    }
  }

  #mission h2 {
    max-width: 32em;
    font-size: 1.25em;
  }

  @media (min-width: 45em) {
    #hero-title {
      font-size: 3em;
    }
    #mission h2 {
      max-width: 32em;
      font-size: 1.5em;
    }
  }
  @media (min-width: 60em) {
    #hero-title {
      font-size: 4em;
    }
    #mission h2 {
      max-width: 32em;
      font-size: 1.75em;
    }
  }
</style>

<script lang="ts">
  import Nav from '../components/Nav.svelte';

  export let segment: string;
</script>

<div>
  <Nav {segment} />

  <main>
    <slot />
  </main>
</div>

<style>
  div {
    background: var(--background);
    min-height: 100vh;
  }

  main {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    max-width: 56em;
    margin: 0 auto;

    flex: 1;

    display: flex;
    flex-direction: column;
  }
</style>

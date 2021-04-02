<script lang="ts">
  import {onMount} from "svelte";
  import {setContext} from 'svelte'
  import {writable} from 'svelte/store'
  import Navbar from "../components/Navbar.svelte";

  export let segment: string;
  export let theme: string;

  function sendTheme(themeGiven: string) {
    theme = themeGiven;
  }

  function handDownTheme(event: any) {
    sendTheme(event.detail.theme);
  }

  onMount(() => {
    if (document.body.classList.contains('bright')) {
      theme = 'bright';
    }
    else theme = 'dark';
  });

  const theme$ = writable(theme);
  $: $theme$ = theme

  setContext('theme', theme$)
</script>

<div>
  <Navbar {segment} on:message={handDownTheme} />

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

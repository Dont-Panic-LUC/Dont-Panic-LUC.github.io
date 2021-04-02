<script lang="ts">

  import DiscordLink from '../components/DiscordLink.svelte';

  import { getContext} from 'svelte'

  const theme$: any = getContext('theme')

  $: theme = $theme$
  console.log("Theme: " + theme);
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>
<h1>Contact Us</h1>

<section>
  <p>
    Are you looking for a place with CS folks that like to geek out, learn some
    CS, make friends, and be in a judgment free zone and a helpful environment?
  </p>
  <p>
    Look no further. Just join our discord below, or <a
      href="mailto:dontpanic.luc@gmail.com">email us</a
    > and we'll get back to you ASAP.
  </p>
</section>

<DiscordLink theme={theme}/>

<style>
  section {
    padding: 2em;
  }
  h1 {
    text-align: center;
    color: var(--primary);
  }
  p {
    font-size: 1.2em;
  }
</style>

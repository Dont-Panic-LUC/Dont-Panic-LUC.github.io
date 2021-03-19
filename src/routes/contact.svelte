<script>
  import DiscordLink from "../components/DiscordLink.svelte";
</script>
<svelte:head>
  <title>Contact</title>
</svelte:head>
<h1>Contact Us</h1>

<p>
  Are you looking for a place with CS folks that like to geek out, learn some
  CS, make friends, and be in a judgment free zone and a helpful environment?
</p>
<p>
  Look no further. Just join our discord below, or <a href="mailto:dontpanic.luc@gmail.com">email us</a> and we'll get back to you ASAP.
</p>

<DiscordLink/>
<style>
  h1 {
    text-align: center;
    color: var(--primary);
  }
  p {
    font-size: 1.2em;
  }
</style>

<!--So heres my hack implementation. -->
<script lang="ts">
  export let theme: string;
</script>

<!--Discords Server Widget is funky because it loads it's own CSS variables, so when the document loads, any CSS rules you make are overruled.-->

<!--Since the Dark mode button only sends a event to the Navbar, and the rest is done through css variables, it's impossible to style the iframe correctly by theme without some funky event forwarding.-->

<!--Therefore in order for the theme to change, you have to look at your own document first, then set the theme in the iframe after the component mounts.-->

{#if theme === 'light'}
  <iframe
    title="Join the Don't Panic! Discord"
    src="https://discord.com/widget?id=740005650934792193&theme=light"
    width="350"
    height="500"
    allowtransparency={true}
    frameborder="0"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  />
{:else if theme === 'dark'}
  <iframe
    title="Join the Don't Panic! Discord"
    src="https://discord.com/widget?id=740005650934792193&theme=dark"
    width="350"
    height="500"
    allowtransparency={true}
    frameborder="0"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
  />
{/if}

<style>
  iframe {
    margin: 0 auto;
  }
</style>

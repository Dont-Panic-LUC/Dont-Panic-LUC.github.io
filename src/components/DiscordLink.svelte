<!--Discords Server Widget is funky because it loads it's own CSS variables, so when the document loads, any CSS rules you make are overruled.-->

<!--Since the Dark mode button only sends a event to the Navbar, and the rest is done through css variables, it's impossible to style the iframe correctly by theme without some funky event forwarding.-->

<!--Therefore in order for the theme to change, you have to look at your own document first, then set the theme in the iframe after the component mounts.-->

<!--So heres my hack implementation. -->



<script lang="ts">
    import {afterUpdate, beforeUpdate, createEventDispatcher} from 'svelte';
    import { onMount, onDestroy } from 'svelte';
    const dispatch = createEventDispatcher();
    let theme;
    const checkTheme = () => {
        if (document.body.classList.contains('light')) {
            theme = 'light';
        }
        if (document.body.classList.contains('dark')) {
            theme = 'dark';
        }
        console.log(theme);
    };
    onMount(async() => {
        checkTheme();
    })
</script>

{#if theme === 'light'}
    <iframe src="https://discord.com/widget?id=740005650934792193&theme=light" width="350" height="500"
            allowtransparency="true" frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
{:else if theme === 'dark' }
    <iframe src="https://discord.com/widget?id=740005650934792193&theme=dark" width="350" height="500"
            allowtransparency="true" frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

{/if}

<style>
    iframe {
        margin: 0 auto;
    }
</style>

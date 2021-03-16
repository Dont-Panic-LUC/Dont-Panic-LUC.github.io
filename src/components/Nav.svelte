<script lang="ts">
	import DarkModeButton from './DarkModeButton.svelte';
	import dpLogoDark from 'images/dpLogoBlack.svg'
	import dpLogoWhite from 'images/dpLogoWhite.svg'
	let src = dpLogoDark;
	export let segment: string;
	function changeLogo(theme) {
		if (theme === 'dark') {
			src = dpLogoWhite;
		}
		else if (theme === 'light') {
			src = dpLogoDark;
		}
	}
	function handleThemeChange(event) {
		changeLogo(event.detail.theme);
	}
</script>

<nav>
	<ul>
			<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
			<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>

			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
                 the blog data when we hover over the link or tap it on a touchscreen -->
			<li><a rel=prefetch aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">Contact</a></li>
			<li><a rel=prefetch aria-current="{segment === 'events' ? 'page' : undefined}" href="events">Events</a></li>
			<li><a rel=prefetch aria-current="{segment === 'e-board' ? 'page' : undefined}" href="e-board">E-Board</a></li>
			<li style="margin-left: 10px"><img alt="logo"  src={src}></li>
	</ul>
	<DarkModeButton on:message={handleThemeChange} on:click={changeLogo} />
</nav>

<style>
	nav {
		border-bottom: 1px solid rgba(255, 62, 0, 0.1);
		font-weight: 300;
		padding: 0 1em;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255, 62, 0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		color: var(--color);
	}
	img {
		height: 30px;
		width: 30px;
		margin-top: 10px;
	}
</style>

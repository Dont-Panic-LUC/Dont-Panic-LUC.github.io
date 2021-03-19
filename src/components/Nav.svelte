<script lang="ts">
  import DarkModeButton from './DarkModeButton.svelte';
  import dpLogoDark from 'images/dpLogoBlack.svg';
  import dpLogoWhite from 'images/dpLogoWhite.svg';
  let src = dpLogoDark;
  export let segment: string;
  function changeLogo(theme) {
    if (theme === 'dark') {
      src = dpLogoWhite;
    } else if (theme === 'light') {
      src = dpLogoDark;
    }
  }
  function handleThemeChange(event) {
    changeLogo(event.detail.theme);
  }
</script>

<nav>
  <a class="logo-link" href=".">
    <img alt="logo" {src} />
  </a>
  <ul>
    <li>
      <a
        class="link"
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">About</a
      >
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
                 the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        class="link"
        rel="prefetch"
        aria-current={segment === 'contact' ? 'page' : undefined}
        href="contact">Contact</a
      >
    </li>
    <li>
      <a
        class="link"
        rel="prefetch"
        aria-current={segment === 'events' ? 'page' : undefined}
        href="events">Events</a
      >
    </li>
    <li>
      <a
        class="link"
        rel="prefetch"
        aria-current={segment === 'e-board' ? 'page' : undefined}
        href="e-board">E-Board</a
      >
    </li>
  </ul>
  <DarkModeButton on:message={handleThemeChange} on:click={changeLogo} />
</nav>

<style>
  nav {
    border-bottom: 1px solid var(--bg-item-outline);
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
    display: block;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: var(--secondary);
    display: block;
    bottom: -1px;
  }

  a {
    cursor: pointer;
  }

  a.link {
    text-decoration: none;
    padding: 1em 0.5em;
    margin: 0 1em;
    display: block;
    color: var(--text);
  }

  a.logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 1.5em;
    width: 1.5em;
    margin-left: 1em;
  }

  @media screen and (max-width: 600px) {
    a.link {
      font-size: 0.9em;
      padding: 1em 0.5em;
      margin: 0 0.125em;
    }

    img {
      height: 1.25em;
      width: 1.25em;
      margin-left: 0.5em;
    }
  }
</style>

<script>
  export let name,
    role,
    src,
    link,
    linkTitle,
    position = '50% 50%';
</script>

<div class="card">
  <div class="card-content">
    <h2>{name}</h2>
    <p>{role}</p>
    {#if link}
      <a href={link} target="_blank" rel="noopener noreferrer"
        >{linkTitle || link}</a
      >
    {/if}
  </div>
  <img
    {src}
    alt={`Picture of ${name}`}
    style={`object-position: ${position};`}
  />
</div>

<style>
  a {
    text-decoration: none;
    color: var(--primary);
  }
  a:hover {
    background: var(--primary);
    color: var(--primary-text);
  }

  img {
    width: 100%;
    height: 19.25em;
    object-fit: cover;
  }

  .card {
    width: 100%;
    height: 24em;
    overflow: hidden;
    border-radius: 0.5em;

    border: 1px solid var(--bg-item-outline);

    background: var(--bg-item);
  }

  .card-content {
    padding: 1.25em 1.5em;
  }

  .card-content h2 {
    font-size: 1.25em;
    margin: 0;
  }

  .card-content p {
    font-weight: 200;
    margin: 0.25em 0 0 0;
  }

  div {
    width: 100%;
  }
</style>

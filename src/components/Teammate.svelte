<script>
  export let name,
    role,
    src,
    position = '50% 50%';
</script>

<div class="card">
  <div class="card-content">
    <h2>{name}</h2>
    <p>{role}</p>
  </div>
  <img
    {src}
    alt={`Picture of ${name}`}
    style={`object-position: ${position};`}
  />
</div>

<style>
  img {
    width: 100%;
    height: 11.25em;
    object-fit: cover;
  }

  .card {
    width: 100%;
    height: 16em;
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

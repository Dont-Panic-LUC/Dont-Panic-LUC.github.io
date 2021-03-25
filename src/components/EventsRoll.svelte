<script lang="ts">
  import dayjs from 'dayjs';

  export let events: {
    title: string;
    image: string;
    date: string;
    html: any;
  }[];

  export let title: string = 'Upcoming Events';
  export let isPast: boolean = false;

  const today = new Date().toISOString();

  const sortedEvents = events
    .filter((e) => (isPast ? e.date < today : e.date >= today))
    .sort((a, b) => {
      if (a.date < b.date) return 1;
      else return -1;
    });
</script>

<div id="container">
  <h1>{title}</h1>
  <div class="card-container">
    {#each sortedEvents as e}
      <article class="card">
        {#if e.image}
          <div class="card-image-container">
            <img
              src={`content/events/${e.image}`}
              alt={`Banner for the event ${e.title}`}
            />
          </div>
        {/if}
        <div class="card-content">
          <div class="card-top">
            <p>{dayjs(e.date).format('MMM DD, hh:mma')}</p>
            <h2>{e.title}</h2>
          </div>
          {@html e.html}
        </div>
      </article>
    {/each}
  </div>
</div>

<style>
  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--bg-item);
    color: var(--text);

    border-radius: 4px;
    margin-bottom: 1em;

    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.18);
  }

  .card:last-of-type {
    margin-bottom: 0em;
  }

  @media screen and (max-width: 45em) {
    .card {
      flex-direction: column;
    }
  }

  .card-image-container {
    height: 20em;
    padding: 2em 0em 2em 2em;
  }

  @media screen and (max-width: 60em) {
    .card-image-container {
      height: 16em;
      padding: 2em 0em 2em 2em;
    }
  }

  @media screen and (max-width: 45em) {
    .card-image-container {
      height: 12em;
      padding: 2em 2em 0em 2em;
    }
  }

  .card-image-container img {
    height: 100%;
  }

  .card-content {
    padding: 2em;
  }

  .card-top h2 {
    margin: 0;
  }

  h1 {
    font-size: 1.5em;
  }

  @media (min-width: 45em) {
    h1 {
      font-size: 1.75em;
    }
  }
  @media (min-width: 60em) {
    h1 {
      font-size: 2em;
    }
  }
</style>

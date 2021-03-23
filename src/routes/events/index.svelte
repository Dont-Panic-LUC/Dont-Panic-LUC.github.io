<script context="module" lang="ts">
  export function preload() {
    return this.fetch(`events.json`)
      .then((r: { json: () => any }) => r.json())
      .then((events: { slug: string; title: string; html: any }[]) => {
        return { events };
      });
  }
</script>

<script lang="ts">
  import EventsRoll from '../../components/EventsRoll.svelte';

  export let events: {
    title: string;
    image: string;
    date: string;
    html: any;
  }[];

  const today = new Date().toISOString();
  console.log(today);

  const sortedUpcomingEvents = events
    .filter((e) => e.date >= today)
    .sort((a, b) => {
      if (a.date < b.date) return 1;
      else return -1;
    });
  const sortedPastEvents = events
    .filter((e) => e.date < today)
    .sort((a, b) => {
      if (a.date < b.date) return 1;
      else return -1;
    });
</script>

<svelte:head>
  <title>Events</title>
</svelte:head>

<div id="container">
  <EventsRoll {events} />
  <div id="spacer" />
  <EventsRoll {events} isPast title="Past Events" />
</div>

<style>
  #container {
    padding: 2em;
  }

  #spacer {
    margin-top: 4em;
  }
</style>

<script context="module" lang="ts">
  export function preload() {
    return this.fetch(`events.json`)
      .then((r: { json: () => any }) => r.json())
      .then((events: { slug: string; title: string; html: any }[]) => {
        return { events };
      });
  }
</script>

<h1>Oppertunities</h1>

<script lang="ts">
  import EventsRoll from '../components/OppertunitiesCom.svelte';

  export let events: {
    title: string;
    image: string;
    date: string;
    html: any;
  }[];
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

  h1 {
    text-align: center;
    color: var(--primary);
  }

</style>
  




<script>
  import { Card, CardText, CardActions, Button } from 'svelte-materialify';
  export let name,
    role,
    src,
    position = '50% 50%';
</script>

<div class="d-flex mt-4 card">
  <Card shaped style="width: 100%;">
    <div class="pl-4 pr-4 pt-3">
      <span class="text-overline"> {role} </span>
      <br />
      <span class="text-h5 mb-2">{name}</span>
      <br />
    </div>
    <img {src} alt={name + 'Pic'} style={`object-position: ${position};`} />
    <!-- <CardActions>
      <Button rounded outlined>Button</Button>
    </CardActions> -->
  </Card>
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
    border-bottom-right-radius: 24px;
  }

  div {
    width: 100%;
  }
</style>

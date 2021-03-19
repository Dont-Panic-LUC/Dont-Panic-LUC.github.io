<script>
    import { Card, CardText, CardActions, Button } from 'svelte-materialify';
    export let name, role, src;
</script>

<div class="d-flex mt-4">
    <Card shaped style="max-width:300px;">
        <div class="pl-4 pr-4 pt-3">
            <span class="text-overline"> {role} </span>
            <br />
            <span class="text-h5 mb-2">{name}</span>
            <br />
        </div>
        <img src={src} alt={name + "Pic"}>
        <CardActions>
            <Button rounded outlined>Button</Button>
        </CardActions>
    </Card>
</div>

<style>
    img {
        width: 100%;
        height: 150px;
    }
</style>

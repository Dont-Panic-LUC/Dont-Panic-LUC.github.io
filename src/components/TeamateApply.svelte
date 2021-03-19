<script>
    export let name,
        position = '50% 50%';
</script>

<div class="card">
    <div class="card-content">
        <h2>You!</h2>
        <p>Head of Applying</p>
        <h2><a href="https://docs.google.com/forms/d/e/1FAIpQLSdEV5soG_fWijQtK8RBF5-23EPHdIfYOqzjZLnDAc-PQVnkoA/viewform" >Click here to apply.</a></h2>
    </div>
    <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fcriminal-case-grimsborough%2Fimages%2F2%2F26%2FUnknown_Character.png%2Frevision%2Flatest%3Fcb%3D20141106142941&f=1&nofb=1"
            alt={`Picture of ${name}`}
            style={`object-position: ${position};`}
    />
</div>

<style>
    img {
        width: 100%;
        height: 15.25em;
        object-fit: cover;
    }

    .card {
        width: 100%;
        height: 20em;
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

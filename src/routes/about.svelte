<svelte:head>
  <title>About</title>
</svelte:head>
<h1>About Us</h1>

<section>
  <p>
    DON'T PANIC! was started in the Fall of 2018 with the goal of uniting
    students from all the disciplines in the Loyola coding community.
  </p>
  <p>
    Our aim since the beginning has been to create a community of people who
    have a passion and drive to learn and make friends.
  </p>
  <p>
    We aim to serve our community in a variety of ways; first being relaxed
    meetings where we get together and discuss important topics in the Computer
    Science field, second being events where we go out and interact with the
    larger Chicago coding community, and finally through our Discord channel,
    where we discuss anything and everything.
  </p>
  <img
    src="content/miscImage/googlePassport.jpg"
    alt="pic of us"
  />
</section>

<style>
  section {
    padding: 2em;
  }
  h1 {
    text-align: center;
    color: var(--primary);
  }
  p {
    font-size: 1.2em;
  }
  img {
    display: block;
    margin: 0 auto;
  }
  @media screen and (max-width: 400px)  { /*phones in general */
    img {
      width: 200px;
    }
  }
  @media screen and (min-width: 500px)  { /*tablets and computers in general */
    img {
      width: 400px;
    }
  }

</style>

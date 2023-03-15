<script>
  import Teammate from '../components/Teammate.svelte';
</script>

<svelte:head>
  <title>E-Board</title>
</svelte:head>
<h1>E-Board</h1>
<!-- <h3>* Subject to change, as The E-Board is in process of transitioning to Fall 2021 * </h3> -->
<section>
  
  <Teammate
    src="assets/e-board/Tamanna-2.jpeg"
    role="President"
    name="Tamanna Miah"
    position="50% 65%"
    link=""
    linkTitle="→"
  />
  
  <Teammate
    src="assets/e-board/Aaron-2.jpeg"
    role="Vice President"
    name="Aaron Juco"
    link=""
    linkTitle="→"
  />

  <Teammate
    src="assets/e-board/Laila.jpeg"
    role="Head of Communications"
    name="Laila Hamdan"
    link=""
    linkTitle="→"
  />

  <Teammate
    src="assets/e-board/Tristian.jpeg"
    role="Treasurer"
    name="Tristian Truong"
    position="50% 60%"
    link=""
    linkTitle="→"
  />
  
  <Teammate
    src="assets/e-board/Jenna.jpeg"
    role="CAN Representative"
    name="Jenna Hazlip"
    link=""
    linkTitle="→"
  />

  <Teammate
    src="assets/e-board/Isaiah.JPG"
    role="Lead Website Developer"
    name="Isaiah Bouromphongsa"
    position="50% 60%"
    link=""
    linkTitle=""
  />
  
  <Teammate
    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fcriminal-case-grimsborough%2Fimages%2F2%2F26%2FUnknown_Character.png%2Frevision%2Flatest%3Fcb%3D20141106142941&f=1&nofb=1"
    role="Head of Applying"
    name="You!"
    link="https://docs.google.com/forms/d/e/1FAIpQLSdEV5soG_fWijQtK8RBF5-23EPHdIfYOqzjZLnDAc-PQVnkoA/viewform"
    linkTitle="Click here to apply →"
  />

  <!-- <Teammate
    src="assets/e-board/Julia.jpg"
    role="President"
    name="Julia Bennett"
    position="50% 65%"
    link=""
    linkTitle="→"
  />
  
  <Teammate
    src="assets/e-board/Eno.jpg"
    role="Treasurer"
    name="Eno Dynowski"
    position="50% 60%"
    link=""
    linkTitle="→"
  />
  
  <Teammate
    src="assets/e-board/Kenneth.jpg"
    role="CAN and ACM rep"
    name="Kenneth Hernandez"
    link=""
    linkTitle="→"
  />

  <Teammate
    src="assets/e-board/Tamanna.jpg"
    role="Head of Marketing"
    name="Tamanna Miah"
    link=""
    linkTitle="→"
  />

  <Teammate
    src="assets/e-board/Aaron.jpg"
    role="Head of Recruitment"
    name="Aaron Juco"
    link=""
    linkTitle="→"
  />

  <Teammate
    src="assets/e-board/Victor-2.jpg"
    role="Lead Website Developer"
    name="Victor Rakotondranoro"
    position="50% 60%"
    link="https://viciiiz.github.io"
    linkTitle="Portfolio →"
  /> -->

  <!-- <Teammate
    src={'assets/e-board/tien.jpg'}
    role="President"
    name="Tien VoNguyen"
    link="https://www.linkedin.com/in/%E2%9C%A7-tien-v-358b09122/"
    linkTitle="LinkedIn →"
  /> -->
  <!-- <Teammate
    src="assets/e-board/henry.jpg"
    role="President"
    name="Henry Fellerhoff"
    position="50% 65%"
    link="https://www.henryfellerhoff.com"
    linkTitle="Portfolio →"
  /> -->

  <!-- <Teammate
    src="assets/e-board/jess.jpg"
    role="Vice President"
    name="Jess Bajerek"
    position="50% 60%"
    link="#"
    linkTitle=" →"
  /> -->
  
  <!-- <Teammate
    src="assets/e-board/alex.jpg"
    role="Treasurer"
    name="Alex Rose"
    position="50% 60%"
    link="https://alex-rose.vercel.app/"
    linkTitle="Portfolio →"
  /> -->

  <!-- <Teammate
    src="assets/e-board/alex.jpg"
    role="Vice President"
    name="Alex Rose"
    position="50% 60%"
    link="https://alex-rose.vercel.app/"
    linkTitle="Portfolio →"
  /> -->
  <!-- <Teammate
    src="assets/e-board/makenna.jpg"
    role="Treasurer"
    name="Makenna Walsh"
    position="50% 100%"
    link="https://www.linkedin.com/in/makenna-walsh-b54b14127/"
    linkTitle="LinkedIn →"
  /> -->
  <!--  <Teammate-->
  <!--    src="content/eBoard/Rayyan.jpg"-->
  <!--    role="Lead Website Devoloper"-->
  <!--    name="Mohammed Rayyan Shaji"-->
  <!--  />-->
  <!-- <Teammate
    src="assets/e-board/henry.jpg"
    role="Events Chair"
    name="Henry Fellerhoff"
    position="50% 65%"
    link="https://www.henryfellerhoff.com"
    linkTitle="Portfolio →"
  /> -->
  <!-- <Teammate
    src="assets/e-board/anran.png"
    role="Head of Recruitment"
    name="Anran Wang"
    position="50% 45%"
    link="https://www.linkedin.com/in/anranwang4/"
    linkTitle="LinkedIn →"
  /> -->
  <!-- <Teammate
    src="assets/e-board/iqra.jpg"
    role="CAN and ACM rep"
    name="Iqra Rehman"
    link="https://www.linkedin.com/in/iqra-rehman-b4225b184/"
    linkTitle="LinkedIn →" -->
</section>

<style>
  /* h3 {
    color: var(--text);
    text-align: center;
  } */
  h1 {
    text-align: center;
    color: var(--primary);
  }
  section {
    padding: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1em;
    place-items: center;
  }
</style>

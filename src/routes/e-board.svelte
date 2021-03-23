<script>
  import Teammate from '../components/Teammate.svelte';
  import TeamateApply from '../components/TeamateApply.svelte';
</script>

<svelte:head>
  <title>E-Board</title>
</svelte:head>

<section>
  <TeamateApply />
  <Teammate
    src="https://dontpanic.cs.luc.edu/static/media/Tien.027cbc19.jpg"
    role="President"
    name="Tien VoNguyen"
  />
  <Teammate
    src="https://dontpanic.cs.luc.edu/static/media/Alex.8c3b843c.jpg"
    role="Vice President"
    name="Alex Rose"
    position="50% 60%"
  />
  <Teammate
    src="https://dontpanic.cs.luc.edu/static/media/Makenna.82a4db6a.jpg"
    role="Treasurer"
    name="Makenna Walsh"
    position="50% 100%"
  />
  <!-- <Teammate
    src="https://dontpanic.cs.luc.edu/static/media/Rayyan.f8724987.JPG"
    role="Lead Website Devoloper"
    name="Mohammed Rayyan Shaji"
  /> -->
  <Teammate
    src="https://dontpanic.cs.luc.edu/static/media/henry.a2858651.jpg"
    role="Events Chair"
    name="Henry Fellerhoff"
    position="50% 55%"
  />
  <Teammate
    src="https://dontpanic.cs.luc.edu/static/media/Anran.7bdca682.png"
    role="Head of Recruitment"
    name="Anran Wang"
    position="50% 45%"
  />
  <Teammate
    src="https://dontpanic.cs.luc.edu/static/media/iqra.3cf2f451.jpg"
    role="CAN and ACM rep"
    name="Iqra Rehman"
  />
</section>

<style>
  section {
    padding: 2em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1em;
    place-items: center;
  }
</style>

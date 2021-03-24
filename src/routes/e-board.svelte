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
    src={'content/eBoard/tien.jpg'}
    role="President"
    name="Tien VoNguyen"
  />
  <Teammate
    src="content/eBoard/alex.jpg"
    role="Vice President"
    name="Alex Rose"
    position="50% 60%"
  />
  <Teammate
    src="content/eBoard/makenna.jpg"
    role="Treasurer"
    name="Makenna Walsh"
    position="50% 100%"
  />
<!--  <Teammate-->
<!--    src="content/eBoard/Rayyan.jpg"-->
<!--    role="Lead Website Devoloper"-->
<!--    name="Mohammed Rayyan Shaji"-->
<!--  />-->
  <Teammate
    src="content/eBoard/henry.jpg"
    role="Events Chair"
    name="Henry Fellerhoff"
    position="50% 55%"
  />
  <Teammate
    src="content/eBoard/anran.png"
    role="Head of Recruitment"
    name="Anran Wang"
    position="50% 45%"
  />
  <Teammate
    src="content/eBoard/iqra.jpg"
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

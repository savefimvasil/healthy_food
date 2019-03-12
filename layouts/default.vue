<template>
  <div class="layout">
    <Header/>
    <nuxt/>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<style lang="scss">
  div.layout{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>

<script>
  import Header from "../components/Header/Header";
  import Footer from "../components/Footer/Footer";
  export default {
    components: {Footer, Header}
  }
</script>

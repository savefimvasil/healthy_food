<template>
  <div class="layout">
    <Header/>
    <div class="container">
      <AdminMenu/>
      <nuxt class="content"/>
    </div>
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
    .content{
      flex: 1;
    }
  }
</style>

<script>
  import Header from "../components/Header/Header";
  import Footer from "../components/Footer/Footer";
  import AdminMenu from "../components/Admin/AdminMenu";
  export default {
    components: {AdminMenu, Footer, Header}
  }
</script>

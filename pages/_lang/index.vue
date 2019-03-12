<template>
  <div class="index--page">
    <Main/>
    <FoodList
      class="container"
      :news="news"
      title="Самые популярные обеды"
      :showMore="true"
    />
  </div>
</template>

<script>
  import Main from '~/components/Main/Main'
  import FoodList from '~/components/FoodList/FoodList'
export default {
  components: {
    Main,
    FoodList
  },
  data () {
    return {
      news: null
    }
  },
  async created() {
    await this.$store.dispatch('news/getAllNewsFromApi')
    this.news = this.$store.state.news
  }
}
</script>

<style lang="scss">
  *{
    font-family: 'Open Sans', sans-serif;
  }
</style>


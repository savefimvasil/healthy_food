<template>
  <div class="news-page">
    <div class="container">
      <div class="row">
        <News
          :news="news"
          title="Все обеды"
        />
      </div>
      </div>
  </div>
</template>

<script>
  import News from '../../../components/FoodList/FoodList'

  export default {
    name: "news",
    components: {
      News
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

<style lang="scss" scoped>
  .news-page{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .container{
      padding-top: 50px;
      h1{
        text-align: center;
      }
    }
  }
</style>

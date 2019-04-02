<template>
  <div class="news-page">
    <div class="container">
      <div class="row">
        <FoodList
          :news="ammo"
          title="Все обеды"
          :template="template"
          :sort="sort"
        />
      </div>
      </div>
  </div>
</template>

<script>
  import FoodList from '../../../components/FoodList/FoodList'
  import axios from 'axios'

  export default {
    name: "news",
    components: {
      FoodList
    },
    data() {
      return{
        query: undefined,
        firstLoad: false,
        template: '',
        sort: ''
      }
    },
    methods: {
      getAds(){
        if(this.$route.query.parentId) {
          this.query = this.$route.query.parentId
        } else this.query = undefined
        this.$store.dispatch('ammo/getAllNewsById', this.query)
        this.firstLoad = true
      },
      async getTemplate() {
        let id = this.$route.query.parentId
        if(id !== undefined) {
          let url = `http://localhost:4000/foodlist/edit/${id}`;
          await axios.get(url).then((response) => {
            this.template = response.data.blockView
            this.sort = response.data.sortType
          });
        } else {
          this.template = 'block'
          this.sort = 'asc'
        }
      }
    },
    async created() {
      this.getAds()
      this.getTemplate()
      console.log(this.$route)
    },
    computed: {
      ammo() {
        return this.$store.state.ammo
      }
    },
    watch: {
      '$route' (to, from) {
        this.getAds()
        this.getTemplate()
      }
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

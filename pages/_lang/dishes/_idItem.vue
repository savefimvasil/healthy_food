<template>
    <div class="news--item">
      <div class="container">
        <h1>
          {{
            $route.params.lang === 'ru' ?
            ad.titleRU :
            $route.params.lang === 'ua' ?
            ad.titleUA :
            ad.titleRU
          }}
        </h1>
        <img :src="ad.img" alt="">
        <p>
          {{
            $route.params.lang === 'ru' ?
            ad.descriptionRU :
            $route.params.lang === 'ua' ?
            ad.descriptionUA :
            ad.descriptionRU
          }}
        </p>
        <FoodList
          :news="ammo"
          title="Еще для Вас"
          :template="template"
          :sort="sort"
        />
      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import FoodList from '../../../components/FoodList/FoodList'

    export default {
      name: "idItem",
      props: ['pageData'],
      components: {
        FoodList
      },
      data() {
        return{
          ad: {},
          query: undefined,
          firstLoad: false,
          template: '',
          sort: ''
        }
      },
      methods: {
        getAds(){
          this.query = this.ad._id
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
      },
      watch: {
        '$route' (to, from) {
          this.getAds()
          this.getTemplate()
        }
      },
      computed: {
        ammo() {
          return this.$store.state.ammo
        }
      },
      mounted() {
        let id = this.$route.params.idItem
        let url = `http://localhost:4000/FoodList/search/${id}`;
        axios.get(url).then((response) => {
          this.ad = response.data;
          this.getAds()
        });
      }
    }
</script>

<style lang="scss" scoped>
  .news--item{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 100px;
      h1{
        text-align: center;
      }
      img{
        max-width: 700px;
      }
    }
  }
</style>

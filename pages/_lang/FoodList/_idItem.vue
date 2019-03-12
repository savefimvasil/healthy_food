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
      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
      name: "idItem",
      props: ['pageData'],
      data () {
        return {
          ad: {}
        }
      },
      mounted() {
        let id = this.$route.params.idItem

        let url = `http://localhost:4000/FoodList/edit/${id}`;
        axios.get(url).then((response) => {
          this.ad = response.data;
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

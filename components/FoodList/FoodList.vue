<template>
    <div class="news">
      <h2>{{title}}</h2>
      <div class="row">
        <div v-for="(item, index) in news" :key="index" class="col-lg-3 col-sm-6 card">
          <div class="card--item">
            <div class="description">
              <img width="100%" height="170px" :src="item.img" alt="">
              <h3>
                {{
                  $route.params.lang === 'ru' ?
                  item.titleRU :
                  $route.params.lang === 'ua' ?
                  item.titleUA :
                  item.titleRU
                }}
              </h3>
              <p>{{
                  $route.params.lang === 'ru' ?
                  item.miniDescriptionRU :
                  $route.params.lang === 'ua' ?
                  item.miniDescriptionUA :
                  item.miniDescriptionRU
                }}
              </p>
            </div>
            <nuxt-link :to="'/' + $i18n.locale + '/dishes/' + item._id">Перейти к заказу</nuxt-link></div>
        </div>
      </div>
      <nuxt-link v-if="showMore" :to="'/' + $i18n.locale + '/dishes/'" class="show-more-link">Перейти к полному списку обедов</nuxt-link>
    </div>
</template>


<script>
  export default {
    name: "News",
    props: ['news', 'title', 'showMore']
  }
</script>

<style lang="scss" scoped>
  $amazon: #417B5A;

  .news{
    padding: 50px 0 70px 0;
    width: 100%;
    .row{
      display: flex;
      /*justify-content: space-between;*/
    }
    h2{
      padding-bottom: 50px;
      text-align: center;
      font-size: 50px;
      font-weight: bold;
      color: $amazon;
    }
  }
  .card{
    border: 1px solid $amazon;
    margin: 0 10px 30px 10px;
    padding: 20px 10px;
    transition: all .2s;
    max-width: 270px;
    &:hover{
      -webkit-box-shadow: 0px 0px 20px 0px rgba(65,123,90,1);
      -moz-box-shadow: 0px 0px 20px 0px rgba(65,123,90,1);
      box-shadow: 0px 0px 20px 0px rgba(65,123,90,1);
    }
    div.card--item{
      min-height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      a{
        border: 1px solid $amazon;
        border-radius: 5px;
        text-align: center;
        color: $amazon;
        padding: 2px 8px;
        text-decoration: none;
        transition: .2s;
        &:hover{
          background: $amazon;
          color: #fff;
        }
      }
      .description{
        img{
          border-radius: 2px;
        }
        h3{
          font-size: 20px;
          font-weight: bold;
          padding: 5px 0 0 0;
        }
        p{
          font-size: 14px;
          margin: 0;
          padding-bottom: 5px;
        }
        p.description--date{
          font-size: 12px;
          padding: 0;
        }
      }
    }
  }
  .show-more-link{
    display: flex;
    justify-content: center;
    margin: 20px auto 0 auto;
    width: 450px;
    background: #fff;
    border: 1px solid $amazon;
    border-radius: 5px;
    color: $amazon;
    padding: 5px 8px;
    text-decoration: none;
    text-transform: uppercase;
    transition: .2s;
    font-size: 20px;
    &:hover{
      background: $amazon;
      color: #fff;
    }

  }
  .card div.card--item{
    padding: 0 10px 0 10px;
    transition: .2s;
  }
  @media (max-width: 1200px) {
    .news{
      h2{
        font-size: 45px;
      }
    }
  }
  @media (max-width: 992px) {
    .news{
      h2{
        font-size: 36px;
      }
    }
  }
  @media (max-width: 768px) {
    .news{
      h2{
        font-size: 28px;
      }
    }
  }
  @media (max-width: 576px) {
    .news{
      padding: 40px 0;
      h2{
        font-size: 24px;
        padding-bottom: 40px;
      }
    }
    .row{
      margin: 0;
    }
  }
</style>

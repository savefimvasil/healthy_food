<template>
    <div :class="template">
      <h2 v-if="data.length !== 0">{{title}}</h2>
      <div class="row">
        <div v-for="(item, index) in data" :key="index" class="col-lg-3 col-sm-6 card">
          <div class="card--item">
            <div class="description">
              <img width="100%" height="170px" :src="item.img" alt="">
              <div class="info">
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
            </div>
            <button @click="changeRoute(item._id)">Перейти к заказу</button>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
  export default {
    name: "News",
    props: ['news', 'title', 'template', 'sort'],
    methods: {
      changeRoute(id) {
        this.$router.push({ path: '/' + this.$i18n.locale + '/dishes/' + id, query: { parentId: id } })
        this.query = id
      },
    },
    computed: {
      data() {
        let sort = this.sort
        let data = []
        for(let a in this.news){
          data.push(this.news[a])
        }
        data.sort(function(a, b){
          let keyA = a.titleUA
          let keyB = b.titleUA
          if(sort === 'asc') {
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
          } else if (sort === 'desc') {
            if(keyA < keyB) return 1;
            if(keyA > keyB) return -1;
          }
          return 0;
        });
        return data
      }
    }
  }
</script>

<style lang="scss" scoped>
  $amazon: #417B5A;

  .block{
    padding: 50px 0 70px 0;
    width: 100%;
    .row{
      display: flex;
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
    }
    h2{
      padding-bottom: 50px;
      text-align: center;
      font-size: 50px;
      font-weight: bold;
      color: $amazon;
    }
  }
  .blog{
    padding-top: 50px;
    .row{
      display: flex;
      flex-direction: column;
      .card{
        border: 1px solid $amazon;
        margin: 0 10px 30px 10px;
        padding: 20px 10px;
        transition: all .2s;
        max-width: 100%;
        &:hover{
          -webkit-box-shadow: 0px 0px 20px 0px rgba(65,123,90,1);
          -moz-box-shadow: 0px 0px 20px 0px rgba(65,123,90,1);
          box-shadow: 0px 0px 20px 0px rgba(65,123,90,1);
        }
        div.card--item{
          min-height: 250px;
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
            display: flex;
            img{
              max-width: 50%;
              border-radius: 2px;
              padding-right: 20px;
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
    .block{
      h2{
        font-size: 45px;
      }
    }
  }
  @media (max-width: 992px) {
    .block{
      h2{
        font-size: 36px;
      }
    }
  }
  @media (max-width: 768px) {
    .block{
      h2{
        font-size: 28px;
      }
    }
  }
  @media (max-width: 576px) {
    .block{
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

<template>
    <div class="admin">
      <div class="container">
        <h1>Админ панель</h1>
        <div class="admin-menu">
          <nuxt-link :to="'/' + $i18n.locale + '/admin/FoodList'" @click="selectCategory('news')" :class="selectedCategory === 'news' ? 'selected': ''">Каталог обедов</nuxt-link>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "AdminMenu",
    data () {
      return {
        selectedCategory: ''
      }
    },
    methods: {
      selectCategory (val) {
        this.selectedCategory = val
      }
    }
  }
</script>

<style lang="scss" scoped>
  $amazon: #417B5A;
  .admin{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .container{
      padding-top: 80px;
      h1{
        text-align: center;
        color: $amazon;
      }
      p{
        margin-top: 50px;
      }
      .admin-menu{
        width: 100%;
        display: flex;
        a{
          background: #fff;
          border: 1px solid $amazon;
          border-radius: 5px;
          color: $amazon;
          flex: 1;
          transition: .3s;
          font-size: 24px;
          text-align: center;
          text-transform: uppercase;
          &:hover{
            color: #fff;
            background: $amazon;
            text-decoration: none;
          }
          &:focus{
            color: #fff;
            background: $amazon;
            outline: none;
          }
          &.nuxt-link-exact-active, &.nuxt-link-active{
            color: #fff;
            background: $amazon;
          }
        }
      }
    }
  }
</style>

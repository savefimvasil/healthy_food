<template>
  <div class="admin-news">
    <div class="admin-news-menu">
      <button :class="selectedCategory === 'add' ? 'selected' : ''" @click="selectCategory('add')">Добавить</button>
    </div>
    <div class="admin-news-form">
      <list-of-posts/>
      <AddPost v-if="selectedCategory === 'add' && $route.query.isAdd" />
    </div>
  </div>
</template>

<script>
  import AddPost from './FoodList/Add'
  import ListOfPosts from './FoodList/List'
  export default {
    name: "News",
    components: {
      AddPost,
      ListOfPosts
    },
    data() {
      return {
        selectedCategory: ''
      }
    },
    methods: {
      selectCategory(val) {
        this.$router.push({path: '/' + this.$i18n.locale + '/admin/dishes', query: { isAdd: true,  addId: this.$route.query.parentId, parentId: this.$route.query.parentId} })
        this.selectedCategory = val
      }
    },
    async created() {
      await this.$store.dispatch('news/getAllNewsFromApi')
    }
  }
</script>

<style lang="scss" scoped>
  $amazon: #417B5A;
.admin-news{
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  .admin-news-menu{
    display: flex;
    flex-direction: column;
    width: 250px;
    button{
      background: #fff;
      border: 1px solid $amazon;
      color: $amazon;
      transition: .3s;
      font-size: 20px;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 5px;
      border-radius: 5px;
      &:hover{
        color: #fff;
        background: $amazon;
      }
      &:focus{
        color: #fff;
        background: $amazon;
        outline: none;
      }
      &.selected{
        color: #fff;
        background: $amazon;
      }
    }
  }
  .admin-news-form{
    box-sizing: padding-box;
    margin: 0 50px;
    flex: 1;
  }
}
</style>

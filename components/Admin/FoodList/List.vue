<template>
  <div>
    <EditComponent v-if="$route.query.editId"/>
    <table v-else class="table table-hover">
      <thead>
      <tr>
        <th>Новость</th>
        <th>Описание</th>
        <th style="text-align: center">Действие</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in posts" :key="post._id">
        <td>{{ post.titleRU }}</td>
        <td>{{ post.miniDescriptionRU }}</td>
        <td width="150px" class="buttons-td">
          <nuxt-link :to="'/' + $i18n.locale + '/admin/FoodList?editId=' + post._id">Edit</nuxt-link>
          <a @click.prevent="deletePost(post._id)">Delete</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import EditComponent from './Edit'
  export default {
    name: "List",
    components: {
      EditComponent
    },
    methods: {
      deletePost(id) {
        this.$store.dispatch('news/deleteNewsById', id)
      }
    },
    computed: {
      posts() {
        return this.$store.state.news
      }
    }
  }
</script>

<style lang="scss" scoped>
  $amazon: #417B5A;
  .buttons-td{
    text-align: center;
    a{
      color: $amazon;
      background-color: #fff;
      border: 1px solid $amazon;
      border-radius: 2px;
      padding: 0 8px;
      transition: .3s;
      &:hover {
        color: #fff;
        background-color:$amazon;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
</style>

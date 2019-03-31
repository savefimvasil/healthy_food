<template>
  <div>
    <EditComponent v-if="$route.query.editId"/>
    <table v-else class="table table-hover">
      <thead>
      <tr>
        <th>Новость</th>
        <th style="text-align: center">Действие</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in ammo" :key="post._id">
        <td @click="changeRoute(post._id)">{{ post.titleUA }}</td>
        <td width="150px" class="buttons-td">
          <p @click="editPage(post._id)">Edit</p>
          <a @click.prevent="deletePost(post._id)">Delete</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import axios from 'axios'
  import EditComponent from './Edit'
  export default {
    name: "List",
    components: {
      EditComponent
    },
    data() {
      return{
        query: undefined
      }
    },
    methods: {
      deletePost(id) {
        this.$store.dispatch('ammo/deleteNewsById', id)
      },
      changeRoute(id) {
        this.$router.push({ path: '/' + this.$i18n.locale + '/admin/dishes', query: { parentId: id } })
        this.query = id
        this.getAds()
      },
      editPage(id){
        this.$router.push({ path:'/' + this.$i18n.locale + '/admin/dishes', query: {editId: id } })
      },
      getAds(){
        if(this.$route.query.parentId) {
          this.query = this.$route.query.parentId
        } else this.query = undefined
        this.$store.dispatch('ammo/getAllNewsById', this.query)
      }
    },
    async created() {
      this.getAds()
    },
    computed: {
      ammo() {
        return this.$store.state.ammo
      }
    },
    watch: {
      '$route' (to, from) {
        this.getAds()
      }
    }
  }
</script>

<style lang="scss" scoped>
  $teal_blue: #40798C;
  $yankees_blue: #1C3144;
  $gainsboro: #e2f1f2;
  $sunset_orange: #EE6352;
  $blue_yonder: #576CA8;
  .buttons-td{
    text-align: center;
    p{
      display: inline-block;
      color: $yankees_blue;
      background-color: $gainsboro;
      padding: 0 8px;
      margin: 0;
      transition: .3s;
      &:hover {
        color: $gainsboro;
        background-color: $yankees_blue;
        text-decoration: none;
        cursor: pointer;
      }
    }
    a{
      color: $yankees_blue;
      background-color: $gainsboro;
      padding: 0 8px;
      transition: .3s;
      &:hover {
        color: $gainsboro;
        background-color: $yankees_blue;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
</style>

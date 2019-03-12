<template>
  <div>
    <form @submit.prevent="updatePost">
      <div class="row">
        <label>Заголовок:</label>
        <div class="description">
          <input placeholder="Заголовок UA" type="text" class="form-control" v-model="post.titleUA">
          <input placeholder="Заголовок RU" type="text" class="form-control" v-model="post.titleRU">
        </div>
      </div>
      <div class="row">
        <label>Описание:</label>
        <div class="description">
          <textarea placeholder="Описание UA" class="form-control" v-model="post.descriptionUA" rows="5"></textarea>
          <textarea placeholder="Описание RU" class="form-control" v-model="post.descriptionRU" rows="5"></textarea>
        </div>
      </div>
      <div class="row">
        <label>Краткое описание:</label>
        <div class="description">
          <input placeholder="Краткое описание UA" type="text" class="form-control" v-model="post.miniDescriptionUA">
          <input placeholder="Краткое описание RU" type="text" class="form-control" v-model="post.miniDescriptionRU">
        </div>
      </div>
      <button class="btn btn-primary">Обновить</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Add",
    data () {
      return {
        post: {}
      }
    },
    methods: {
      updatePost() {
        let id = this.$route.query.editId
        let uri = `http://localhost:4000/FoodList/update/${id}`;
        axios.post(uri, this.post).then(() => {
          this.$router.push('/' + this.$i18n.locale + '/admin/FoodList')
        });
      }
    },
    mounted() {
      let id = this.$route.query.editId
      let url = `http://localhost:4000/FoodList/edit/${id}`;
      axios.get(url).then((response) => {
        this.post = response.data;
      });
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    flex-direction: column;
    div.description{
      display: flex;
      textarea:first-child, input:first-child{
        margin-right: 10px;
      }
    }
  }
  label {
    margin-bottom: 0px;
    margin-top: 5px;
  }
  input.date{
    max-width: 250px;
  }
  button{
    margin: 20px 0 0 0;
  }
</style>

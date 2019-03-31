<template>
  <div>
    <form @submit.prevent="addPost">
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
      <div class="row">
        <label>Лого: </label>
        <input title=""
               type="file"
               class="search-box"
               @change="onLogoChange"
        >
      </div>
      <div class="row main-image">
        <img v-if="logoImageSrc" :src="logoImageSrc" alt="" width="150px" height="100px">
      </div>
      <div class="row">
        <label>template:</label>
        <select v-model="post.blockView">
          <option>block</option>
          <option>blog</option>
        </select>
      </div>
      <div class="row">
        <label>sort:</label>
        <select v-model="post.sortType">
          <option>asc</option>
          <option>desc</option>
        </select>
      </div>
      <br>
      <div class="row">
        <button>Create</button>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  import fb from 'firebase'
  export default {
    data () {
      return {
        post: {},
        logoImageSrc: ''
      }
    },
    methods: {
      async addPost(){
        if(this.$route.query.parentId === undefined) {
          this.post.parentId = []
        } else this.post.parentPost = this.$route.query.parentId

        const logoImageExt = this.logoImage.name.slice(this.logoImage.name.lastIndexOf('.'))
        await fb.storage().ref(`ads/${this.post.titleRU}${logoImageExt}`).put(this.logoImage)
        const logoImageSrc = await fb.storage().ref(`ads/${this.post.titleRU}${logoImageExt}`).getDownloadURL()

        this.post.img = logoImageSrc

        console.log(this.post)

        let url = 'http://localhost:4000/foodlist/add';
        axios.post(url, this.post).then(() => {
          this.$router.push({ path: '/' + this.$i18n.locale + '/admin/dishes', query: { parentId: this.post.parentId } })
        });
      },
      onLogoChange (event) {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload = e => {
          this.logoImageSrc = reader.result
        }
        reader.readAsDataURL(file)
        this.logoImage = file
      },
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
  .main-image{
    margin: 10px 0;
  }
</style>

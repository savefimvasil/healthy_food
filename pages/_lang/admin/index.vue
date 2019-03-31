<template>
  <div class="admin">
    <div class="container">
    </div>
  </div>
</template>

<script>
  import Header from '../../../components/Header/Header'
  import Footer from '../../../components/Footer/Footer'
  import AdminNews from '../../../components/Admin/FoodList'

  export default {
    name: "admin",
    components: {
      Header,
      Footer,
      AdminNews
    },
    layout: 'admin',
    data(){
      return {
        selectedCategory: ''
      }
    },
    methods: {
      selectCategory(val) {
        this.selectedCategory = val
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>


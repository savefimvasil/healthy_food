<template>
  <div>
    <div class="container">
      <FoodList/>
    </div>
  </div>
</template>

<script>
  import FoodList from '../../../components/Admin/FoodList.vue'
  export default {
    name: "news",
    layout: 'admin',
    components: {
      FoodList
    }
  }
</script>

<style scoped>
</style>

<template>
  <div>
    <div class="container">
      <News/>
    </div>
  </div>
</template>

<script>
  import News from '../../../components/Admin/FoodList.vue'
  export default {
    name: "news",
    layout: 'admin',
    components: {
      News
    }
  }
</script>

<style scoped>
</style>

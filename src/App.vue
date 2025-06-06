<script>
  import BottomNavigation from './components/TabBar.vue'
  import TopBar from './components/TopBar.vue'
  export default {
    name: 'App',
    components: {
        BottomNavigation,
        TopBar
    },
  }
</script>

<template>
  <div id="app">
    <!-- <TopBar/> -->
    <router-view></router-view>
    <!-- <BottomNavigation/> -->
  </div>
</template>

<style scoped>
</style>

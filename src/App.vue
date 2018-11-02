<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import MHeader from '@/pages/myheader/myheader'
import Tab from '@/pages/tab/tab.vue'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus" scoped>
</style>
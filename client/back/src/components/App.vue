<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import 'assets/styles/reset.css'
  import 'assets/styles/functional.less'

  export default {
    mounted () {
      this.$http.get('/api/api/pv')
    }
  }
</script>

<style lang="css" scoped>
</style>

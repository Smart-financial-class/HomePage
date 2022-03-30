<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    document.getElementById('app').style.height = window.innerHeight + 'px'
  }
}
</script>

<style scoped>
</style>

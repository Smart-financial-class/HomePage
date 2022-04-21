<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},

  data: () => ({
    //
  })
}
</script>

<style>

#particles-js {
  width: 100%;
  height: 100%;

  z-index: 0;
  position: fixed;
}
</style>

<template>
  <v-app>
    <div class="loginMask" :style="{ height: style.height }">
      <Login></Login>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Login from '@/components/Login'

export default {
  name: 'App',
  components: {
    Login
  },
  data () {
    return {
      style: {
        height: window.innerHeight + 'px'
      }
    }
  }
}
</script>

<style scoped>
/*粒子效果作为背景的样式*/
#particles-js {
  width: 100%;
  height: 100%;
  z-index: 0;
  position: fixed;
}

.loginMask {
  z-index: 1;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
}
</style>

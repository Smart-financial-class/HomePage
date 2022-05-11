<template>
  <v-app-bar dense fixed elevate-on-scroll>
    <!--    <v-app-bar-title style="width: 150px;" @click="toHome" id="NavTitle">主页</v-app-bar-title>-->
    <img
      :src="logo"
      alt="logo"
      style="height: 75%"
      @click="toHome"
      id="NavIcon"
    />

    <v-tabs align-with-title color="#40798C" optional>
      <v-tab href="#">总站</v-tab>
      <v-tab href="http://vcafilm.gitee.io/resources/login">资源</v-tab>
      <v-tab href="http://hjlhjlhjl.xyz:8090/MajorInfor/index.html">高校</v-tab>
      <v-tab href="http://www.biubiuxtz.cn:9999/finance">知识</v-tab>
      <v-tab href="http://124.223.164.9/smart-financial/#/">门户</v-tab>
    </v-tabs>
    <v-tab class="login"><img src="../assets/login.png" alt="登录" class="loginBtn" /></v-tab>
  </v-app-bar>
</template>

<script>
import logo from '../assets/homepage-logo.png'

export default {
  name: 'HomePageNavBar',
  methods: {
    toHome () {
      this.$router.push({ name: 'HomePage' })
    }
  },
  data () {
    return {
      logo
    }
  }
}
</script>

<style scoped>
/*设定导航标题样式*/
#NavIcon {
  cursor: pointer;
  padding: 1px 2px;
}

.login {
  position: fixed;
  right: 0;
  height: 100%;
}

.loginBtn {
  height: 50%;
}
</style>

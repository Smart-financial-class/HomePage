<template>
  <v-app-bar dense fixed elevate-on-scroll>
    <v-app-bar-title style="width: 150px;" @click="toHome" id="NavTitle">主页</v-app-bar-title>
    <v-tabs align-with-title color="#40798C">
      <v-tab to="/">Home</v-tab>
      <v-tab href="http://vcafilm.gitee.io/resources/login">资源</v-tab>
      <v-tab href="https://huangda2027.github.io/MajorInfor/index">高校</v-tab>
      <v-tab href="http://www.biubiuxtz.cn:9999/finance">知识</v-tab>
      <v-tab href="#" disabled>site4</v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>

export default {
  name: 'HomePageNavBar',
  methods: {
    toHome () {
      this.$router.push({name: 'HomePage'})
    }
  }
}
</script>

<style scoped>
/*设定导航标题样式*/
#NavTitle {
  cursor: pointer;
}
</style>

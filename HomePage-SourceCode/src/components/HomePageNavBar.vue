<template>
  <v-app-bar fixed elevate-on-scroll>
    <v-app-bar-nav-icon @click="toHome">
      <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M804 392.7v459l-474.6 16.8V407.4" fill="#91B4FF"/>
        <path d="M860.6 458.9L567.5 197.6 329.4 407.4" fill="#91B4FF"/>
        <path
          d="M220.1 607.6c-14.6 0-26.4-11.8-26.4-26.4V424.5c0-14.6 11.8-26.4 26.4-26.4s26.4 11.8 26.4 26.4v156.8c-0.1 14.5-11.9 26.3-26.4 26.3zM220.1 738.3c-14.6 0-26.4-11.8-26.4-26.4v-50.5c0-14.6 11.8-26.4 26.4-26.4s26.4 11.8 26.4 26.4V712c-0.1 14.5-11.9 26.3-26.4 26.3zM804 897.5H220.1c-14.6 0-26.4-11.8-26.4-26.4v-71.3c0-14.6 11.8-26.4 26.4-26.4s26.4 11.8 26.4 26.4v45h531.2V424.5c0-14.6 11.8-26.4 26.4-26.4s26.4 11.8 26.4 26.4v446.7c-0.1 14.5-12 26.3-26.5 26.3z"
          fill="#3778FF"/>
        <path
          d="M932.6 553.1c-6.2 0-12.5-2.2-17.5-6.7L510.9 186.1 106.7 546.4c-10.9 9.7-27.5 8.7-37.2-2.1-9.7-10.9-8.7-27.5 2.1-37.2l421.7-375.9c10-8.9 25.1-8.9 35.1 0l421.7 375.9c10.9 9.7 11.8 26.3 2.1 37.2-5.1 5.8-12.4 8.8-19.6 8.8z"
          fill="#3778FF"/>
      </svg>
    </v-app-bar-nav-icon>
    <v-tabs align-with-title :optional="true" show-arrows>
      <v-tab class="tab-title" href="http://vcafilm.gitee.io/resources/login">资源</v-tab>
      <v-tab class="tab-title" href="https://huangda2027.github.io/MajorInfor/index">高校</v-tab>
      <v-tab class="tab-title" href="http://www.biubiuxtz.cn:9999/finance">知识</v-tab>
      <v-tab class="tab-title" href="#" disabled>site4</v-tab>
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
.tab-title {
  font-size: 16px;
}
</style>

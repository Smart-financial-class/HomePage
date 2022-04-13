<template>
  <div class="root">
    <HomePageNavBar></HomePageNavBar>
    <div class="body">
      <div id="news">
        <NewsNav></NewsNav>
      </div>
      <div class="line">
        <div class="sites"></div>
        <div class="sites"></div>
      </div>
      <div class="line">
        <div class="sites"></div>
        <div class="sites"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsNav from './NewsNav'
import HomePageNavBar from './HomePageNavBar'

export default {
  name: 'HomePage',
  components: { NewsNav, HomePageNavBar },
  data () {
    return {
      title: ['Home']
    }
  }
}
</script>

<style scoped>
#news {
  width: 50%;
  height: 20%;
  margin: 0 20%;
}

.line {
  width: 60%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.root {
  height: 100%;
}

.body {
  position: relative;
  top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 80%;
  width: 100%;
}

.sites {
  width: 30%;
  margin: 2% 10%;
  height: 200px;
  background-color: rgb(217, 255, 252);
}
</style>

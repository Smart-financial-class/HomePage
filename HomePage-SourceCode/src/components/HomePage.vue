<template>
  <div class="root">
    <HomePageNavBar></HomePageNavBar>
    <div class="body">
      <div id="news">
        <NewsNav></NewsNav>
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
.root {
  height: 100%;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  margin: 10px;
}

#news {
  width: 50%;
  height: 50%;
}
</style>

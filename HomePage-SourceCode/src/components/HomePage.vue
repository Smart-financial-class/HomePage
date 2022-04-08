<template>
  <div class="body">
    <div id="news">
      <NewsNav></NewsNav>
    </div>
  </div>
</template>

<script>
import NewsNav from '@/components/NewsNav'

export default {
  name: 'HomePage',
  components: { NewsNav },
  data () {
    return {
      title: ['Home']
    }
  }
}
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#news {
  width: 50%;
  height: 50%;
}
</style>

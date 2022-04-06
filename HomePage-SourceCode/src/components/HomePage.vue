<template>
  <div class="body">
    <NewsNav :titles="title"></NewsNav>
  </div>
</template>

<script>
import NewsNav from '@/components/NewsNav'

export default {
  name: 'HomePage',
  components: {NewsNav},
  data () {
    return {
      title: ['Home']
    }
  }
}
</script>

<style scoped>

</style>

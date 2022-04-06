<template>
  <div>
    <ImgList :images="pics"></ImgList>
    <NewsTitleList :titles="titles"></NewsTitleList>
  </div>
</template>

<script>
import ImgList from '@/components/ImgList'
import NewsTitleList from '@/components/NewsTitleList'

export default {
  name: 'NewsNav',
  components: {NewsTitleList, ImgList},
  props: {
    images: {
      type: Array,
      required: true
    },
    titles: {
      type: Array,
      required: true
    }
  },
  computed: {
    pics() {
      return this.images.map((src, index) => {
        return {src, alt: '' + index + '.jpg'}
      })
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
}
</style>

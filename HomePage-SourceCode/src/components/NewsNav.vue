<template>
  <div>111
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
      default () {
        return [require('@/assets/1.jpg'), require('@/assets/2.jpg'), require('@/assets/1.jpg'), require('@/assets/2.jpg')]
      }
    },
    titles: {
      type: Array,
      default () {
        return ['1awdijawidhaiwhd', '2aldnlawdlawdoa', '3awkdnalmskkamzxoawjdwagf', '4awkdnawndoawnd', 'awkdghadashdawd']
      }
    }
  },
  computed: {
    pics () {
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

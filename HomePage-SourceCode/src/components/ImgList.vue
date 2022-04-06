<template>
  <div id="ImageListRoot">
    <div id="img" v-for="(img, index) of images" :key="index">
      <transition><img :src="img.src" :alt="img.alt" v-show="index === active"></transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ImgList',
  props: ['images'],
  data () {
    return {
      active: 0
    }
  },
  mounted () {
    setInterval(() => {
      this.active = (this.active + 1) % this.images.length
    }, 5000)
  }
}
</script>

<style scoped>
div#ImageListRoot {
  width: 50%;
  position: relative;
  display: inline-block;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
}

.v-enter-active, .v-leave-active {
  transition: 1s ease-in-out;
}

.v-enter {
  transform: translateX(100%);
  opacity: 0;
}

.v-enter-to, .v-leave {
  transform: translateX(0);
  opacity: 1;
}

.v-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

div#img {
  position: absolute;
}

</style>

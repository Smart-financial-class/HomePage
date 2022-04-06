<template>
  <div id="ImageListRoot">
    <div
        id="img"
        v-for="(img, index) of images"
        :key="index"
        :class="{active: index === active, inactive: index !== active}">
      <img :src="img.src" :alt="img.alt">
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
    }, 3000)
  }
}
</script>

<style scoped>
div#ImageListRoot {
  width: 50%;
  height: auto;
  position: relative;
  display: inline-block;
}

img {
  width: 100%;
  height: 100%;
}

div#img {
  transition: all ease-in-out 0.3s;
  position: absolute;
}

.active {
  display: block;
  top: 0;
  left: 0;
}

.inactive {
  display: none;
  top: 0;
  left: 100%;
}
</style>

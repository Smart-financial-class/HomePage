<template>
  <div class="NewsCarouselRoot">
    <v-carousel continuous interval="3000" class="carousel"
                hide-delimiters
                show-arrows-on-hover
                style="height: 100%; width: 100%">
      <v-carousel-item v-for="(image, index) in images" :key="index">
        <v-img :src="image" contain position="center" style="width: 100%; height: 100%"></v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import imageKnowledge from '../assets/knowledge.png'
import imageSchool from '../assets/school.png'
import imageResource from '../assets/resource.png'

export default {
  name: 'NewsCarousel',
  data () {
    return {
      images: [image1, image2, imageResource, imageSchool, imageKnowledge]
    }
  }
}
</script>

<style scoped>
.NewsCarouselRoot {
  width: 100%;
  height: 100%;
}

.carousel {
  width: 480px;
}
</style>

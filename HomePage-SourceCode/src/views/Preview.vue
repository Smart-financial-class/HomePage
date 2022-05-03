<template>
  <div class="body" id="scene" :style="{ height: style.height }">
    <div id="textBox" data-depth="0.3">
      <div id="mainTitle">智能财务</div>
      <div id="subTitle">智在杭电</div>
    </div>
    <div id="frontIMG" class="imgBox" data-depth="0.6">
      <img src="../assets/HDU/building.png" alt="三鼎问天" class="images" />
    </div>
    <div id="backIMG" class="imgBox" data-depth="0.2">
      <img src="../assets/HDU/building4.png" alt="4教" class="images" />
    </div>
    <!-- <div id="sky" data-depth="0.1">
      <img src="../assets/HDU/sky.jpg" alt="sky">
    </div> -->
  </div>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  name: 'Preview',
  data () {
    return {
      style: {
        height: window.innerHeight + 'px'
      }
    }
  },
  mounted () {
    window.onresize = () => {
      this.style.height = window.innerHeight + 'px'
    }
    let scene = document.getElementById('scene')
    // eslint-disable-next-line
    let parallaxInstance = new Parallax(scene)
  }
}
</script>

<style scoped>
.body {
  overflow: hidden;
}

.images {
  width: 100%;
}

.imgBox {
  position: fixed;
  width: 100%;
  height: 80%;
  margin-left: 20%;
  margin-top: 10%;
}

#frontIMG {
  z-index: 2;
  margin-top: 0;
  margin-left: 0;
  width: 110%;
}

#backIMG {
  z-index: 1;
  width: 80%;
}

#mainTitle {
  font-size: 120px;
  font-weight: 1200;
}

/* #sky {
  width: 110%;
} */
</style>

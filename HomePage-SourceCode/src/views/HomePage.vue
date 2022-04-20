<template>
  <v-main>
    <vue-particles
      color="#000000"
      :particleOpacity="0.5"
      :particlesNumber="128"
      shapeType="circle"
      :particleSize="4"
      linesColor="#000000"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.2"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      style="width: 100%; height: 100%"
    >
    </vue-particles>
    <HomePageNavBar></HomePageNavBar>
    <!-- 主页内容主体 -->

    <v-card width="60%" id="content" elevation="4" rounded hover>
      <v-card-title class="mt-10 text-h1">智能财务网站主页</v-card-title>
      <!-- 新闻图片轮播 -->
      <NewsCarousel style="width: 80%"></NewsCarousel>
      <!-- 各个网站信息 -->
      <v-container class="container">
        <SiteInfo class="site-info" v-for="(site, i) in sites" :key="i"
                  :info="site"
        ></SiteInfo>
      </v-container>
    </v-card>

  </v-main>
</template>

<script>
// 组件
import NewsCarousel from '../components/NewsCarousel'
import HomePageNavBar from '../components/HomePageNavBar'
import SiteInfo from '../components/SiteInfo'

// 图片
import imageKnowledge from '../assets/knowledge.png'
import imageSchool from '../assets/school.png'
import imageResource from '../assets/resource.png'

export default {
  name: 'HomePage',
  components: {SiteInfo, NewsCarousel, HomePageNavBar},
  data () {
    return {
      sites: [
        {
          title: '智能财务知识网',
          detail: '准备好进入智能财务了么? 欢迎~',
          image: imageKnowledge,
          reverse: false,
          href: 'http://www.biubiuxtz.cn:9999/finance',
          color: '#343435'
        },
        {
          title: '智能财务高校网',
          detail: '目前该网站已经收录了6所高校智能财务专业的相关信息, 包括专业简介，培养目标，课程概览等',
          image: imageSchool,
          reverse: true,
          href: 'https://huangda2027.github.io/MajorInfor/index',
          color: '#1D4E89'
        },
        {
          title: 'Resources',
          detail: '......',
          image: imageResource,
          reverse: false,
          href: 'http://vcafilm.gitee.io/resources/login',
          color: '#9EC1A3'
        }
      ]
    }
  }
}
</script>

<style scoped>
#content {
  position: absolute;
  left: 50%;
  top: 4%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.site-info {
  width: 80%;
}

#particles-js {
  width: 100%;
  height: 100%;
}

/*#main {*/
/*  background-image: url("../assets/background.png");*/
/*  background-size: cover;*/
/*}*/

/*#news {*/
/*  width: 50%;*/
/*}*/
/*.line {*/
/*  width: 60%;*/
/*  height: 200px;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*}*/

/*.root {*/
/*  width: 100%;*/
/*}*/

/*.body {*/
/*  position: relative;*/
/*  top: 10%;*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*  flex-wrap: wrap;*/
/*  height: 80%;*/
/*  width: 100%;*/
/*}*/

/*.sites {*/
/*  width: 30%;*/
/*  margin: 2% 10%;*/
/*  height: 200px;*/
/*  background-color: rgb(217, 255, 252);*/
/*}*/
</style>

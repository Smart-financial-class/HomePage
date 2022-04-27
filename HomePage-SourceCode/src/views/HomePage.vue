<template>
  <v-main>
    <!--背景粒子效果-->
    <vue-particles
      color="#000000"
      :particleOpacity="0.5"
      :particlesNumber="72"
      shapeType="circle"
      :particleSize="3"
      linesColor="#000000"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.3"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <!--导航栏-->
    <HomePageNavBar></HomePageNavBar>
    <!-- 主页内容主体 -->
    <v-card width="60%" id="content" elevation="4" rounded hover ref="card">
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
import imagePortal from '../assets/portal.png'

export default {
  name: 'HomePage',
  components: {SiteInfo, NewsCarousel, HomePageNavBar},
  data () {
    return {
      // 项目中各个网站的信息
      sites: [
        {
          title: '智能财务知识网',
          details: ['本网站旨在为对智能财务感兴趣的用户提供尽可能完善的专业知识介绍、当下智能财务对于各个场景的处理的一些知识点和相应的处理方式，并且普及财务知识、宣传推广财务小工具、讨论智能财务专业建设'],
          image: imageKnowledge,
          reverse: false, // 用于控制图片显示位置
          href: 'http://www.biubiuxtz.cn:9999/finance',
          color: '#343435' // 控制卡片背景颜色
        },
        {
          title: '智能财务高校网',
          details: ['目前该网站已经收录了6所高校智能财务专业的相关信息, 包括专业简介，培养目标，课程概览等'],
          image: imageSchool,
          reverse: true,
          href: 'https://huangda2027.github.io/MajorInfor/index',
          color: '#1D4E89'
        },
        {
          title: 'Resources',
          details: ['提供财务工具的信息门户', '为用户提供方便快捷的使用平台', '展现创新实践课程学习效果'],
          image: imageResource,
          reverse: false,
          href: 'http://vcafilm.gitee.io/resources/login',
          color: '#9EC1A3'
        },
        {
          title: '智能财务门户网',
          details: ['......'],
          image: imagePortal,
          reverse: true,
          href: 'http://124.223.164.9/smart-financial/#/',
          color: '#BFC3C9'
        }
      ]
    }
  }
}
</script>

<style scoped>
/*内容主体样式*/
#content {
  position: absolute;
  left: 50%;
  top: 4%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: default;
}

/*网站信息容器样式*/
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/*网站信息样式*/
.site-info {
  width: 80%;
}
</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'
import 'vuetify/dist/vuetify.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/fonts/font.css'

// 引入Element ui组件
Vue.use(ElementUI)
Vue.use(Vuetify)
Vue.use(VueParticles)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(),
  components: {App},
  template: '<App/>'
})

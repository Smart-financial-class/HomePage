import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ApiDoc from '@/components/ApiDoc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/apidoc',
      name: 'ApiDoc',
      component: ApiDoc
    }
  ]
})

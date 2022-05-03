import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage'
import ApiDoc from '../views/ApiDoc'
import Preview from '@/views/Preview'

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
    },
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    }
  ]
})

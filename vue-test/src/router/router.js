import Vue from 'vue'
import Router from 'vue-router'
import View from '@/components/View'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      component: View
    }
  ]
})

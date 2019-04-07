import Vue from 'vue'
import Router from 'vue-router'
import Dust from '@/components/Dust'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dust',
      component: Dust
    }
  ]
})

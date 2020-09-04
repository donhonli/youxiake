import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home.vue'
Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      name:'home',
      component:Home

    },
    {
      path:'/city',
      name:'city',
      component:() => import('../components/city/City.vue')
    },
    {
      path:'/detials',
      name:'detials',
      component:() => import('../components/detials/Detials.vue')
    }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

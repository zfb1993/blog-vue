import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component:resolve => require(['@/views/Layout.vue'],resolve),
    children:[
      {
          name: '首页',
          icon:"md-home",
          path: 'index',
          component: Home,
      },
      {
          name:'子页',
          icon:"md-people",
          path: 'user',
          component: () => import('@/views/About.vue'),
      },
    ],
  },
]

export const router = new VueRouter({
  routes
})


import Vue from 'vue'
import VueRouter from 'vue-router'

import exams from './exams'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...exams
]

const router = new VueRouter({
  routes
})

export default router

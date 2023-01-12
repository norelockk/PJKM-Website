import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Component from '@/views/Component.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Component',
    name: 'component',
    component: Component
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

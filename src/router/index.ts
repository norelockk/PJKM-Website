import { createRouter, createWebHistory } from 'vue-router'
import release from '@/views/Release.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: release
    }
  ]
})

export default router

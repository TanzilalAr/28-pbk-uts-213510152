import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import myApp from '../views/myApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/myapp',
        name: 'myapp',
        component: () => import('../views/myApp.vue')
      },
  ]
})

export default router
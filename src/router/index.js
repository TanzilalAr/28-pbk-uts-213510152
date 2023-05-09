import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import myApp from '../views/myApp.vue'
import NotFound from '../views/NotFound.vue'


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
        component: myApp
      },
    // catchall 404 
    {
      path: '/:catchAll(.*)',
      name : 'NotFound',
      component: NotFound 
    }
  ]
})

export default router
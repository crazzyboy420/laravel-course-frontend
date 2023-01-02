import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=> import('../views/Home.vue')
    },
    {
      path: '/:type',
      name: 'courses',
      component: () => import('../views/Courses.vue')
    },
    {
      path: '/single-course/:courseType/:slug',
      name: 'single-course',
      props:true,
      component: () => import('../views/Single.vue')
    },
    {
      path: '/archive/:archiveType/:slug',
      name: 'archive',
      component: () => import('../views/Archive.vue')
    }

  ]
})

export default router

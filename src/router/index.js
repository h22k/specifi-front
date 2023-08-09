import { createRouter, createWebHistory } from 'vue-router'
import { isUserLoggedIn } from '@/router/middleware/isUserLoggedIn';
import { isGuest } from '@/router/middleware/isGuest';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/AuthView.vue'),
      beforeEnter: [isGuest]
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/TaskView.vue'),
      beforeEnter: [isUserLoggedIn],
      // children: [
      //   {
      //     path: '/tasks/create',
      //     name: 'task-create',
      //     component: () => import('../views/CreateTaskView.vue')
      //   }
      // ]
    },
  ]
})

export default router

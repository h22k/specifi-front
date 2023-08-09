import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/AuthView.vue'),
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/TaskView.vue'),
    },
    {
      path: '/tasks/create',
      name: 'task-create',
      component: () => import('../views/CreateTaskView.vue')
    }
  ]
})

export default router

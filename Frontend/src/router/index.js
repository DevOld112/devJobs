import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/layout',
          name: 'principal',
          component: () => import('../views/layout/LayoutView.vue'),
        },
        {
          path: 'vacancy',
          name: 'vacancy',
          children: [
            {
              path: 'newVacancy',
              name: 'newVacancy',
              component: () => import('../views/layout/NewVacancyView.vue')
            },
            {
              path: 'edit/:id',
              name: 'editVacancy',
              component: () => import('../views/layout/EditVacancyView.vue')
            },
            {
              path: ':id',
              name: 'job',
              component: () => import('../views/layout/jobView.vue')
            }
          ]
        },
        {
          path: '/auth',
          name: 'authLayout',
          component: () => import('../views/auth/authLayoutView.vue'),
          children: [
            {
              path: 'register',
              name: 'register',
              component: () => import('../views/auth/RegisterView.vue')
            },
            {
              path: 'login',
              name: 'login',
              component: () => import('../views/auth/LoginView.vue')
            }
          ]
        }
      ]
    },
  ]
})

export default router

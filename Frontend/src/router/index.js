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
          component: () => import('../views/layout/LayoutView.vue')
        },
        {
          path: '/vacancy',
          name: 'vacancy',
          children: [
            {
              path: '/newVacancy',
              name: 'newVacancy',
              component: () => import('../views/layout/NewVacancyView.vue')
            }
          ]
        }
      ]
    },
  ]
})

export default router
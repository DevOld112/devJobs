import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import authApi from '../api/authApi'

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
              meta: {requiresAuth: true },
              component: () => import('../views/layout/NewVacancyView.vue')
            },
            {
              path: 'edit/:id',
              name: 'editVacancy',
              meta: {requiresAuth: true },
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
        },
        {
          path: '/panel',
          name: 'panel',
          component: () => import('../views/panel/PanelLayoutView.vue'),
          meta: {requiresAuth: true},
          children: [
            {
              path: 'user',
              name: 'panelNavegation',
              component: () => import('../views/panel/botonesLayoutView.vue')
            }
          ]
        }
      ]
    },
  ]
})

router.beforeEach( async(to, from, next) => {

  const requiresAuth = to.matched.some(url => url.meta.requiresAuth)
  
  if(requiresAuth){

    try {
      const { data } = await authApi.auth()
      next()
    } catch (error) {
      next({name: 'login'})
    }

  } else {
    next()
  }

  
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Auth/Login'
import Singup from '@/components/Auth/Singup'
import Dashboard from '@/components/dashboard/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/singup',
      name: 'singup',
      component: Singup
    }

  ]
})

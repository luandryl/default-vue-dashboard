// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Auth from './services/Authentication'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: {
    color: 'blue',
    hue: '200'
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (localStorage.getItem('auth') == null || localStorage.getItem('auth') === 'undefined') {
      next()
      Auth.logout()
    } else {
      next()
    }
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


import Vue from 'vue'
import VueRouter from 'vue-router'
import * as VueHamburgerButton from 'vue-hamburger-button'
import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueHamburgerButton)

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

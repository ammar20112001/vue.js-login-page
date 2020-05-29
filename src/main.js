import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import { routes } from './router.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

const router = new VueRouter({
  routes,
  mode: 'history'
})

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

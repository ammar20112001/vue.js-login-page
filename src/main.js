import Vue from 'vue'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Vuelidate)

export const eventBus = new Vue();


new Vue({
  render: h => h(App),
}).$mount('#app')

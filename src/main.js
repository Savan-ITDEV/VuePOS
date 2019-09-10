import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

const request = axios.create({
  baseURL: '/api',
})
Vue.use(VueAxios, request)
Vue.use(Buefy)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

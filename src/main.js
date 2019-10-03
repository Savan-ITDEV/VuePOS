import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
//import Buefy from 'buefy';
//import 'buefy/dist/buefy.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
//import Rx from 'rxjs'
import VueRx from 'vue-rx';
import BootstrapVue from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/select.dataTables.min.css'
import '../node_modules/bootstrap/dist/css/buttons.dataTables.min.css'
import '../node_modules/bootstrap/dist/css/dataTables.bootstrap4.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import '../node_modules/bootstrap/dist/jsdataTables.bootstrap4.min'
// import '../node_modules/bootstrap/dist/jquery.dataTables.min'
import jQuery from 'jquery';



Vue.config.productionTip = false;

const request = axios.create({
	baseURL: "",
});
global.jQuery = jQuery
global .$ = jQuery

Vue.use(BootstrapVue)

Vue.use(VueAxios, request);
//Vue.use(Buefy);

Vue.use(VueRx);
new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App)
}).$mount('#app');

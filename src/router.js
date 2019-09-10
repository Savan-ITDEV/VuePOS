import Vue from 'vue';
import Router from 'vue-router';
import Canteen from './views/Canteen.vue';
import UserConfig from './views/UserConfig.vue';
import Dashboard from './views/Dashboard.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'dashboard',
			component: Dashboard
		},
		{
			path: '/canteen',
			name: 'canteen',
			component: Canteen
		},
		{
			path: '/UserConfig',
			name: 'UserConfig',
			component: UserConfig
		}
	]
});

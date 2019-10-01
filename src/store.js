import Vue from 'vue';
import Vuex from 'vuex';
import db from './plugins/firebaseInit';
import { stat } from 'fs';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		titel: 'RMS',
		datas: [],
		start: true,
		drawer: false,
	},
	mutations: {
		setTitel(state, titel) {
			state.titel = titel;
		},
		setData(state, datas) {
			state.datas.push(datas);
		},
		setStart(state, start) {
			state.start = start;
		},
		setDrawer(state, status) {
			state.drawer = status
		  },
	},
	getters: {
		titel: (state) => state.titel,
		start: (state) => state.start,
		datas: (state) => state.datas
	},
	actions: {}
});

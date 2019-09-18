import Vue from 'vue';
import Vuex from 'vuex';
import db from './plugins/firebaseInit';
import { stat } from 'fs';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		titel: 'RMS',
		datas: [],
		start: true
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
		}
	},
	getters: {
		titel: (state) => state.titel,
		start: (state) => state.start,
		datas: (state) => state.datas
	},
	actions: {}
});

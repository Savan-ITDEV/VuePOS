import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Observable } from 'rxjs/Observable';
import store from '../store';
export function all() {
	store.commit('setStart', true);
	const database = firebase.firestore();

	// eslint-disable-next-line no-unused-vars
	return Observable.create(function(observer) {
		database.collection('products').onSnapshot((snapshot) => {
			var mes = snapshot.docs.map((docSnapshot) => docSnapshot);
			var datas = [];
			mes.forEach((doc) => {
				const data = {
					doc: doc.id,
					name: doc.data().name,
					img: doc.data().img
				};
				datas.push(data);
			});
			observer.next(datas);
			store.commit('setStart', false);
		});
	});
}

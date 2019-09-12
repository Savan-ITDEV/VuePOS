import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Observable } from 'rxjs/Observable';
import store from '../store'
export function all() {
	store.commit('setStart', true);
	const database = firebase.firestore();
	// eslint-disable-next-line no-unused-vars
	
	return Observable.create(function(observer) {
		database.collection('products').onSnapshot((snapshot) => {
			// eslint-disable-next-line no-console
			observer.next(snapshot.docs.map((docSnapshot) => docSnapshot));
			//console.log(snapshot.docs.map((docSnapshot) => docSnapshot.data()));
			store.commit('setStart', false);
		});
		
	});
}

import Vue from 'vue'
import Vuex from 'vuex'
import db from './plugins/firebaseInit'
import { stat } from 'fs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      titel:'Hello world',
      datas:[]
  },
  mutations: {
   setTitel(state,titel)
   {
     state.titel = titel;
     
   },
   setData(state,datas){
    db.collection('menu').orderBy("title", "asc").get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
          // console.log(doc.id);
          const data = {
              'title': doc.data().title,
              'icon': doc.data().icon,
              'route': doc.data().route
          }
            datas.push(data);
          state.data = datas;
          
      })
    })
   }
  },
  getters:{
       titel:state => state.titel,
       
  },
  actions: {

  },
 
})

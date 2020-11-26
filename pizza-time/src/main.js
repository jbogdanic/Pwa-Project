import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'
import firebase from "firebase"


Vue.use(Buefy)
Vue.config.productionTip = false



var firebaseConfig = {
  apiKey: "AIzaSyC6Zc1Gvgy4JYsRWkHSE4CbtDH2djmKw8w",
  authDomain: "pizza-time-1d7fc.firebaseapp.com",
  databaseURL: "https://pizza-time-1d7fc.firebaseio.com",
  projectId: "pizza-time-1d7fc",
  storageBucket: "pizza-time-1d7fc.appspot.com",
  messagingSenderId: "99151393751",
  appId: "1:99151393751:web:40c31d36633a001d141192",
  measurementId: "G-FKPCDZBEEZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

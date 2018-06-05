// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'purecss';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import firebase from 'firebase/app';
import 'firebase/auth';
import EventBus from '@/events/eventBus';
import App from './App';
import router from './router';

import config from './helpers/firebaseConfig';


firebase.initializeApp(config);
Vue.config.productionTip = false;
Vue.use(VeeValidate, {
  events: '',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      EventBus.$emit('onAuthStateChanged', user);
    });
  },
  render: h => h(App),
});

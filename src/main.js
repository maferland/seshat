// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'purecss';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import firebase from 'firebase';
import App from './App';
import router from './router';

import config from './helpers/firebaseConfig';

Vue.config.productionTip = true;

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
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
/*       if (user) {
        this.$router.push('/success');
      } else {
        this.$router.push('/login');
      } */
    });
  },
  render: h => h(App),
});

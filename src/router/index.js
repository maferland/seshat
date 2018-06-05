import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import Router from 'vue-router';
import Home from '@/views/Home';
import Repository from '@/views/Repository';
import Issue from '@/views/Issue';

import Login from '@/views/Login';

Vue.use(Router);

const router = new Router({
  linkActiveClass: 'pure-menu-selected',
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/repositories',
      name: 'Repositories',
      component: Repository,
      meta: {
        secure: true,
      },
    },
    {
      path: '/issues',
      name: 'Issues',
      component: Issue,
      meta: {
        secure: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const secure = to.matched.some(record => record.meta.secure);

  if (secure && !currentUser) next('login');
  else next();
});

export default router;

import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Repository from '@/views/Repository';
import Issue from '@/views/Issue';

import Login from '@/components/ui/Login';
import LoginSuccess from '@/components/ui/LoginSuccess';

Vue.use(Router);

const router = new Router({
  linkActiveClass: 'pure-menu-selected',
  mode: 'history',
  routes: [
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
      path: '/success',
      name: 'Success',
      component: LoginSuccess,
    },
    {
      path: '#repositories',
      name: 'Repositories',
      secure: true,
      component: Repository,
    },
    {
      path: '#issues',
      name: 'Issues',
      secure: true,
      component: Issue,
    },
  ],
});

export default router;

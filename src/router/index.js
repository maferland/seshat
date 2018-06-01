import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Repository from '@/views/Repository';
import Issue from '@/views/Issue';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'pure-menu-selected',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/repositories',
      name: 'Repositories',
      component: Repository,
    },
    {
      path: '/issue',
      name: 'Issues',
      component: Issue,
    },
  ],
});

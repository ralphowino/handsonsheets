import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/auth/login',
      name: 'auth-login',
      component: require('@/pages/auth/login'),
      meta: { auth: false },
    },
    {
      path: '/',
      name: 'dashboard',
      component: require('@/pages/dashboard'),
      meta: { auth: true },
    },
    {
      path: '/document/:id',
      name: 'document-details',
      component: require('@/pages/document'),
      meta: { auth: true },
    },
    {
      path: '*',
      redirect: '/auth/login',
    },
  ],
});

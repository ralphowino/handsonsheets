import Vue from 'vue';
import axios from 'axios';

import VueMaterial from 'vue-material';

import App from './App';
import router from './router';
import store from './store';


Vue.use(VueMaterial);

Vue.material.registerTheme('secondary', {
  primary: {
    color: 'grey',
    hue: '100',
  },
  accent: 'red',
  warn: 'red',
  background: 'grey',
});

if (!process.env.IS_WEB) {
  Vue.use(require('vue-electron'));
}
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');

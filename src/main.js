// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';

Vue.use(VueResource);

/* eslint-disable no-new */
const root = new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
  http: {
    root: 'http://localhost:3000/',
  },
});
// document.addEventListener('DOMContentLoaded', function () {
//   root.$mount('#app')
// })

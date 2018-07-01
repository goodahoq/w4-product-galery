// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import home from './components/home'
import product from './components/product'
import router from './router'

Vue.component('home', home);
Vue.component('product', product);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    home,
    product,
  },
  template: '<App/>'
})

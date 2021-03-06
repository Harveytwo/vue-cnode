// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueSimplemde from 'vue-simplemde'
Vue.use(VueSimplemde)

// 引入 base.css / rem.js
import '../static/css/base.css'
import '../static/js/rem.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

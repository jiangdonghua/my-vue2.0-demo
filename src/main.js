// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import { Swipe, SwipeItem } from 'vue-swipe'
import 'vue-swipe/dist/vue-swipe.css'
// import * as filters from './filters'
// Vue.filter('date', filters.dateFilter)

Vue.use(MuseUI)
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  MuseUI,
  template: '<App/>',
  components: { App }
})

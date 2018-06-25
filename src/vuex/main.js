import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Import Vuex store instance
import { store } from './store'

new Vue({
  el: '#app',
  router,
  // ...and register it in your application entry point like router
  store,
  render: h => h(App)
})
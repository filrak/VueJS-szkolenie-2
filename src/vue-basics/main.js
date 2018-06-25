// In this file we are instantiating our Vue.js application.
// Its your applications entry point where you can specify many useful properties about your app (eg. where it should render)
// More about Vue instance: https://vuejs.org/v2/guide/instance.html
// ---------------------------------------------------
// We are importing the Vue itself which will be used to instatiate our application
import Vue from 'vue'
// ...along with top-level component which will be rendered under DOM element specified in 'el' property
import App from './App.vue'
// We usually also pass most of the instantiable plugin instances into apps instance. 
// Here we are importing VueRouter instance which will be the router of our application
import router from './router'
// Once we have everything imported we are creating our application instance from Vue constructor
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
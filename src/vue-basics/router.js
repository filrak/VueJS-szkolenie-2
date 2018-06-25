// In this file we are instantiating Application Router 
// and specifying the routes
// Vue Router docs: https://router.vuejs.org/
// ------------------------------------------
import Vue from 'vue'
import VueRouter from 'vue-router'
import Listing from './pages/Listing.vue'
import Post from './pages/Post.vue'

// Register Vue plugin with Vue.use()
// More about Vue plugins: https://vuejs.org/v2/guide/plugins.html
Vue.use(VueRouter)

// Here we are instantiating our application router with it's rputes
const router = new VueRouter({
  routes: [
    // Here we are registering our routes. 
    // Depending on a path the application will render proper components inside <router-view> (can be found in App.vue)
    { path: '/', component: Listing },
    // Dynamic route with 'id' param will match every route starting with '/post/' 
    // More about dynamic routes: https://router.vuejs.org/guide/essentials/dynamic-matching.html
    { path: '/post/:id', component: Post }
  ]
})

// The VueRouter instance is imported in main.js and passed to main Vue instance
export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Listing from './pages/Listing.vue'
import Post from './pages/Post.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Listing },
    { path: '/post/:id', component: Post }
  ]
})

export default router
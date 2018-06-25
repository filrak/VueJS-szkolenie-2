import Vue from 'vue'
// Import Vuex to instantiate it's modules
import Vuex from 'vuex'

// Tell Vue to register vuex plugin the same way we did with router before
Vue.use(Vuex)

// Since mutation identifiers are strings it's safer to keep this strings as variables 
// which will help avoiding typos and allow intelisense autocomplete for mutations
export const MUTATION_TYPES = {
  POST_SET: 'POSTS_SET',
  POST_DELETE: 'POSTS_DELETE',
  POST_SET_CURRENT: 'POST_SET_CURRENT'
}

// Vuex stores can be splitter into modules.
// It's a good practice to use this feature to split your state into smaller peices divided by state context

// Forst we are creating post module to handle posts in our blog.
const postModule = {
  // By default, actions, mutations and getters inside modules are still registered 
  // under the global namespace - this allows multiple modules to react to the same mutation/action type.
  // When the module is registered, all of its getters, actions and mutations will be automatically namespaced 
  // based on the path the module is registered at. ( eg. 'posts/fetchPosts' action versus fimple 'fetchPosts')
  // Read more about namespaced modules: https://vuex.vuejs.org/guide/modules.html#namespacing 
  namespaced: true,
  // The state of the Vuex module is a single source of truth for your application data.
  // You should refer to the satte directly in your components instead of copying it's value.
  // This state can't be modified directly - only throught mutations.
  // More about state: https://vuex.vuejs.org/guide/state.html
  state: {
    posts: null,
    currentPost: null
  },
  // Mutations are responsible ONLY for modifying the state. 
  // When we are modifying the state throught a set of defined functions instead of modifying it
  // directly in components it's much easier to track changes and debug the app.
  // The mutations can be performed directly inside components or through actions
  // Read more about mutations: https://vuex.vuejs.org/guide/mutations.html
  mutations: {
    [MUTATION_TYPES.POST_SET] (state, posts) {
      state.posts = posts
    },
    [MUTATION_TYPES.POST_DELETE] (state, id) {
      state.posts.splice(id, 1)
    },
    [MUTATION_TYPES.POST_SET_CURRENT] (state, post) {
      state.currentPost = post
    }
  },
  // All vuex-related business logic that is responsible for more complex operations than only updating the state shpuld be
  // written as actions. Usually we do things like: 'fetch data and update state' along with some operations on this data.
  actions: {
    fetchPosts (context) {
      // This method was previously placed in Listing.vue file.
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
      })
      .then( response => response.json())
      .then( json => context.commit(MUTATION_TYPES.POST_SET, json) ) 
    },
    fetchCurrentPost (context, id) {
      fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'GET'
      })
      .then ( response => response.json() )
      .then ( json => context.commit(MUTATION_TYPES.POST_SET_CURRENT, json)  )
    }
  }
}

const usermodule = {
  namespaced: true,
  state: {}
  // Internals of this module are ommited as it's only purpose 
  // is to demonstrate how to create multiple Vuex modules
}

export const store = new Vuex.Store({
  modules: {
    post: postModule,
    user: usermodule
  }
})
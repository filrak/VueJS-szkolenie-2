import Vuex from 'vuex'

export const MUTATION_TYPES = {
  POSTS_SET: 'POSTS_SET',
  USER_SET: 'POSTS_SET'
}

const postModule = {
  state: {
    posts: null
  },
  mutations: {
    [MUTATION_TYPES.POSTS_SET] (state, posts) {
      state.posts = posts
    }
  }
}

const userModule = {
  state: {
    user: {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  mutations: {
    [MUTATION_TYPES.USER_SET] (state, user) {
      state.user = user
    }
  }
}

export const store = new Vuex.Store({
  modules: {
    post: postModule,
    user: usermodule
  }
})
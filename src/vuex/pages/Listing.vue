<template>
  <div id="listing">
    Listing component
    <post-tile @delete="deletePost($event)" v-for="(post, index) in posts" :key="index" :post="post" :index="index"/>
  </div>
</template>

<script>
import PostTile from '../components/PostTile.vue'
import { MUTATION_TYPES } from '../store'

export default {
  name: 'listing',
  // Vuex state and getters should be passed to components as a computed properties.
  // Computed properties value will change if the returned reference will change.
  // In the example below the 'posts' property will immidiately update after any 
  // changes made to Vuex store field that it's returning
  // Read more about computed properties: https://vuejs.org/v2/guide/computed.html
  computed: {
    posts () {
      return this.$store.state.post.posts
    }
  },
  methods: {
    deletePost (id) {
      this.$store.commit('post/' + MUTATION_TYPES.POST_DELETE, id)
    }
  },
  created() {
    this.$store.dispatch('post/fetchPosts')
  },
  components: {
    PostTile
  }
}
</script>

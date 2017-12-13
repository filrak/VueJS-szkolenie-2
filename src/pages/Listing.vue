<template>
  <div id="listing">
    Listing component
    <post-tile @delete="deletePost($event)"v-for="(post, index) in posts" :key="index" :post="post" :index="index"/>
  </div>
</template>

<script>
import PostTile from '../components/PostTile.vue'

  export default {
    name: 'listing',
    data () {
      return {
        posts: null
      }
    },
    methods: {
      deletePost (id) {
        this.posts.splice(id, 1)
      }
    },
    created() {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
      }).then(
        response => response.json()
      ).then(
        json => this.posts = json
      )
    },
    components: {
      PostTile
    }
  }
</script>

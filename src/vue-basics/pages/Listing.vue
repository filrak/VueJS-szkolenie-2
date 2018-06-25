<template>
  <div id="listing">
    Listing component
    <!-- 
      '@delete' is a sharthand of 'v-on:delete' which is responsible for catching 'delete' event emitted by given component.
      This is a standard way of sending data from child to parent components.
      In the example below we are listening for the 'delete' event sent from the PostTile component together with 
      it's id inside 'posts' object. You can see how this event is emitted in PostTile.vue.
      Read more about listening to events: https://vuejs.org/v2/guide/events.html
      ######################
      We are also using 'v-for' directive to display post-tile component for every element inside 'posts' object.
      It's important to understand that if object will change it will be re-rendered only if the element passed to 
      ':key' property will change.
      Read more about list rendering: https://vuejs.org/v2/guide/list.html
    -->
    <post-tile @delete="deletePost($event)" v-for="(post, index) in posts" :key="index" :post="post" :index="index"/>
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
    })
    .then( response => response.json())
    .then( json => this.posts = json ) 
  },
  components: {
    PostTile
  }
}
</script>

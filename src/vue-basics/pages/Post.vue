<template>
  <div id="post">
    <h1> {{ post.title }}</h1>
    <p> {{ post.body }}</p>
  </div>
</template>

<script>
import getPostMixin from '../mixins/getPost.js'

export default {
  name: 'Post',
  data () {
    return {
      post: null
    }
  },
  // This function is called 'lifecycle hook' and is called when component enters his 'created()' phase of it's lifecycle.
  // Read more about components lifecycle: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks 
  created () {
    // Please notice that this function is from  'getPostMixin'
    // We can achieve the same behavior by adding 'instant: true' property to '$route' watcher udder 'watch' property
    this.fetchData()
  },  
  // Watchers are... well watching for changes. 
  // If provided element will change the provided function will be called 
  // Watched properties must be reactive. Component properties from data and computed are reactive by default.
  // Read more about Vues reactivity system: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties
  watch: {
    // When we are changing the address from (for example) 'page/1' to 'page/2' we aren't actually leaving this page.
    // Ot happens because this two addresses are refering to the same component. 
    // Even the ':id' property is changing the Post component is rendered only once during entering the page.
    // After changing the address from 'page/1' to 'page/2' the created() lifecycle hook isn't fired 
    // since the component was created when we entered it for the first time 
    // and later (when we changed to page/2) only some of it's properties has changed
    '$route'() {
      this.fetchData()
    }
  },
  // Here you can register components mixins. You can find more details inside 'mixins/getPost.js' file
  mixins: [getPostMixin]
}
</script>
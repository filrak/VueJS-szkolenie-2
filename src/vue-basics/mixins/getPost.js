// Vue mixins are the way to distribute reusable pieces of code across components
// If you add a mixin inside a components 'mixins' field the mixin's properties
// will be merged with component ones
// You can find this mixin injected into component inside 'pages/Post.vue' file
// Read more about mixins: https://vuejs.org/v2/guide/mixins.html
export default {
  methods: {
    fetchData() {
      fetch('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id, {
        method: 'GET'
      })
      .then ( response => response.json() )
      .then ( json => this.post = json )
    }
  }
}
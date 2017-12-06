<template>
  <div id="post">
    <h1> {{ post.title }}</h1>
    <p> {{ post.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'post',
  data() {
    return {
      post: null
    }
  },
  methods: {
    fetchData() {
      fetch('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id, {
        method: 'GET'
      }).then(
        response => response.json()
        ).then(
        json => this.post = json
        )
    }
  },
    created() {
      this.fetchData()
  },  
  watch: {
    '$route'() {
      this.fetchData()
    }
  }
}
</script>
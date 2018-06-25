<template>
  <div id="post">
    <h1> {{ post.title }}</h1>
    <p> {{ post.body }}</p>
  </div>
</template>

<script>

export default {
  name: 'Post',
  computed: {
    post () {
      return this.$store.state.post.currentPost
    }
  },
  created () {
    this.$store.dispatch('post/fetchCurrentPost', this.$route.params.id,)
  },
  watch: {
    '$route'() {
       this.$store.dispatch('post/fetchCurrentPost', this.$route.params.id,)
    }
  }
}
</script>
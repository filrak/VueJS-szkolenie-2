<template>
  <div class="post">
    <router-link :to="'/post/'+post.id">
      <h3>{{ index }}. {{ post.title }}</h3>
    </router-link>
    <span @click="deletePost" class="cross">X</span>
  </div>
</template>

<script>
export default {
  name: 'post-tile',
  props: ['post', 'index'],
  methods: {
    deletePost () {
      this.$emit('delete', this.index)
      // We can either do this by emitting the event to parent component since this component is a presentational one 
      // or by dispatching Vuex action directly
    }
  }
}
</script>

<style>
h3 {
  display: inline-block;
  width: calc(100% - 50px);
}
.cross {
  color: red;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
}
</style>
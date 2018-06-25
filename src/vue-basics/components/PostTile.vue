<template>
  <div class="post">
    <!-- 
      if you will pass the compontnt's props with ':' sign it 
      // will be treated as JS code (eg. <comp :some-prop="ThisOneIsJavaScriptVariable" />)
      otherwise it will be interpreted as a string (eg. <comp someprop="ThisOneiSaString" />)
      In the example below we are passing '/posts/' string with dynamic 'post.title' property received from props.
    -->
    <router-link :to="'/post/'+post.id">
      <h3>{{ index }}. {{ post.title }}</h3>
    </router-link>
    <span @click="deletePost" class="cross">X</span>
  </div>
</template>

<script>
// This component is responsible for displaying the Post's title and 'X' sign on Listing.vue for each post.
export default {
  name: 'post-tile',
  // Props are data sets or properties passed to the component from its parent. 
  // They look like HTML attributes but can hold JS logic
  // You can use 'props' in your component in the same way you're using data properties (this.propName)
  props: ['post', 'index'],
  methods: {
    // In this function we are emitting the event which can be captured in the parent component.
    // In our case the parent component is 'Listing.vue'. Take a look at it and see how the event was captured
    deletePost () {
      // We are emitting event with name 'delete'. It's possible to pass data along with the events. 
      // In this case we are passing the index of post that we want to remove in parent component
      this.$emit('delete', this.index)
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
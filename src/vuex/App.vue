<template>
  <div class="app">
    <h1>{{ title }}</h1>
    <Main-menu />
    <router-view></router-view>
  </div>
</template>

<script>
import MainMenu from './components/Menu'

export default {
  name: 'app',
  data () {
    return {
      title: "Simple blog"
    }
  },
  components: {
    MainMenu
  }
}
</script>

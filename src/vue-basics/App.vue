<template>
  <div class="app">
    <!-- 
      Properties from data() field can be bound to the view through {{ mustacheInterpolation }}
    -->
    <h1>{{ title }}</h1>
    <!-- 
      You can insert components registered in 'components' property here. 
      Please note that cammelCase notation from <script> tag is translated to kebab-case on <template>.
      In below exampple we are inserting MainMenu component with <Main-menu /> tag
      Read more about components normalization: https://vuejs.org/v2/guide/components-registration.html#Name-Casing 
    -->        
    <Main-menu />
    <!-- Here the VueRouter is rendering it's routes. Read more in 'router.js' -->
    <router-view></router-view>
  </div>
</template>

<script>
// This is your application main component. 
// This one will be rendered in the DOM element specified in main.js ('el' property of Vue instance)
// --------------------------
import MainMenu from './components/Menu'

export default {
  // Name property is useful for Vue Devtools to debug:
  // Download Vue Devtools: https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
  name: 'app',
  // Data properties are available in view throigh {{ mustacheInterpolation }} 
  // and in javaScript through this.propertyName (eg. thistitle will return "Simple blog")
  // Read more about properties and methods: https://vuejs.org/v2/guide/instance.html#Data-and-Methods 
  data () {
    return {
      title: "Simple blog"
    }
  },
  components: {
    // Here you can register child components for this particular component:
    // Read more about local component registration: 
    // https://vuejs.org/v2/guide/components-registration.html#Local-Registration-in-a-Module-System
    MainMenu
  }
}
</script>

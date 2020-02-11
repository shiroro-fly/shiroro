<template>
  <div class="hello">
    <router-link id="Home" to="/Home">Home</router-link>
    <router-link id="FirstPage" to="/FirstPage">FirstPage</router-link>
    <router-link id="SecondPage" to="/SecondPage">SecondPage</router-link>
    <ul>
      <li><a href="http://localhost:8080/#/Home" target="_blank">Home</a></li>
      <li><a href="http://localhost:8080/#/FirstPage" target="_blank">FirstPage</a></li>
      <li><a href="http://localhost:8080/#/SecondPage" target="_blank">SecondPage</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

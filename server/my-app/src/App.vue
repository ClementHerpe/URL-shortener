<template>
  <div class="content__container">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Bienvenue sur SimpleURL"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  background-image:url(http://bit.ly/2gPLxZ4);
  width: 100%;
  height: 100%;
  font-family: Arial, Helvetica;
  letter-spacing: 0.02em;
    font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

.content__container {
  backdrop-filter: blur(10px);
  width: 50%;
  margin: auto;
  padding: 4em 1em;
}

</style>

<template>
  <div id="app">
    <img src="./assets/logo.png" class="logo">
    <quotes-app></quotes-app>
  </div>
</template>

<script>
  import QuotesApp from './components/QuotesApp'
  export default {
    name: 'App',
    components: {
      QuotesApp,

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 5px;
  }
  .logo{
    height: 100px;
    width: 100px;
  }
</style>

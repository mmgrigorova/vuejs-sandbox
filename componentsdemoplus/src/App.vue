<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <p>{{selectedComponent}}</p>
        <hr>
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default Content</p>
          </component>
        </keep-alive>
        <!--        <app-quote>-->
        <!--          <h2 slot="title">{{ quoteTitle }}</h2>-->
        <!--          <p slot="content">A woderful quote!</p>-->
        <!--        </app-quote>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue';

  export default {
    name: 'App',
    data: function () {
      return {
        quoteTitle: 'The Quote',
        selectedComponent: 'appQuote'
      }
    },
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New
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
    margin-top: 60px;
  }
</style>

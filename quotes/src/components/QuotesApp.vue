<template>
  <div class="container">

    <app-header :quotesCount="quotesCount"
              :maxQuotes="maxQuotes"></app-header>
    <hr>
    <add-quote :quotesCount="quotesCount"></add-quote>
    <hr>
    <quotes-list :quotesList="quotes"></quotes-list>
    <div class="row">
      <div class="col-sm alert alert-primary">Click on Quote to delete it</div>
    </div>
  </div>
</template>

<script>
  import QuotesApp from './QuotesApp'
  import AddQuote from './AddQuote'
  import QuotesList from './QuotesList'
  import {eventBus} from "../main";
  import Header from './Header';

  export default {
    name: "QuotesApp",
    data() {
      return {
        title: "Quotes Added",
        quotesCount: 0,
        quotes: [],
        maxQuotes: 10
      }
    },
    components: {
      QuotesApp,
      'appHeader': Header,
      AddQuote,
      QuotesList
    },
    methods: {
      updateCount(addend) {
        if (this.quotesCount === 0 && addend < 0) {
          return;
        }
        this.quotesCount += addend;
      }
    },
    created() {
      eventBus.$on('quoteAdded', () => {
        this.updateCount(1);
      });
      eventBus.$on('quoteDeleted', () => {
        this.updateCount(-1);
      })
    }
  }
</script>

<style>

</style>

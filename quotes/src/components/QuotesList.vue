<template>
  <div>
    <div class="row">
      <button @click="deleteQuote">Delete Quote</button>
    </div>
    <div>
      <ul>
        <li v-for="quote in quotesList" class="quotes" @click="deleteQuote(quote.id)">
          "{{ quote.text }}"
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {eventBus} from "../main";

  export default {
    name: "QuotesList",
    props: {
      quotesList: Array
    },
    data() {
      return {
        lastId: 0
      }
    },
    methods: {
      addQuote(text) {
        console.log('adding quote')
        this.lastId++;
        this.quotesList.push({
          id: this.lastId,
          text: text
        })
      },
      deleteQuote(quoteId) {
        this.removeQuote(quoteId);
        eventBus.deleteQuote();
      },
      removeQuote(removeId) {
        this.quotesList.splice(this.quotesList.findIndex(function (i) {
          return i.id === removeId;
        }), 1);
      }
    },
    created() {
      eventBus.$on('quoteAdded', (quoteText) => {
        this.addQuote(quoteText)
      })
    }
  }
</script>

<style scoped>
  .quotes:hover {
    background-color: lightcoral;
  }
  li{
    display: inline-block;
    height: 50px;
    min-width: 200px;
    margin: 10px;
    border: 1px solid #ccc;
    padding: 5px;
    font-family: 'Arizonia', cursive;
  }
</style>

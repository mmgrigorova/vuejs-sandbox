<template>
  <div class="container">
    <div class="row">
      <textarea class="col-sm-6 form-control" v-model="quote" placeholder="Put in a nice quote here!" name="addQuote"/>
    </div>
    <div class="row">
      <button @click="addQuote(quote)">Add Quote</button>
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main';

  export default {
    name: "AddQuote",
    data() {
      return {
        quote: ""
      }
    },
    methods: {
      addQuote(quote) {
        eventBus.addQuote(quote);
        this.quote = "";
      }
    }
  }
</script>

<style scoped>

</style>

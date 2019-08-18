// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
export const eventBus = new Vue({
  methods: {
    addQuote(quoteText){
      this.$emit('quoteAdded', quoteText);
      this.$emit('updateProgress');
    },
    deleteQuote(){
      this.$emit('quoteDeleted', -1);
      this.$emit('updateProgress');
    }
  }
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

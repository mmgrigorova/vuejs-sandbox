import Vue from 'vue'
import App from './App.vue'

// Helps passing data accross children
export const eventBus = new Vue({
  methods:{
    changeAge(age){
      this.$emit('ageWasReset', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});



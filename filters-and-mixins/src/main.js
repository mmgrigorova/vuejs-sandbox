import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('to-lowercase', function(value){
  return value.toLowerCase();
});

Vue.filter('countLength', function (value) {
  return value + ' (' + value.length + ')';
});

Vue.mixin({
  created(){
    console.log('Global mixin created hook');    
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')

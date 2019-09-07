import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-httpdemo.firebaseio.com/';
// interceptor - executed upon each http request!
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  next(response => {
    
  });
});

new Vue({
  render: h => h(App),
}).$mount('#app')

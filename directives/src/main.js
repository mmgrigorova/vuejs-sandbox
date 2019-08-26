import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('highlight', {
    // binding - arguments, value, modifiers
    bind(el, binding, vnode) {
        // el.style.backgroundColor = 'green';
        var delay = 0;
        
        if (binding.modifiers['delayed']){
            delay = 3000;
        }
        
        setTimeout(() => {
            if(binding.arg === 'background'){
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        }, delay);  
    }
});

new Vue({
    el: '#app',
    render: h => h(App),
}).
$mount('#app')

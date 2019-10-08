import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

////////////////////////////////////
////////// Custom Directives ///////
////////////////////////////////////
Vue.directive('rainbow', {
  bind(el, binding, vnode){
    el.style.color = "#"+Math.random().toString(2,8);
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode){
    if (binding.vaue == 'wide'){
      el.style.maxWidth = "1200px"
    } else if(binding.value == 'narrow'){
      el.style = '560px'
    }

    if (binding.arg == 'column'){
      el.style.background = '#ddd'
      el.style.padding = "20px"
    }
  }
})

////////////////////////////////////
//////////   Custom Filters  ///////
////////////////////////////////////
Vue.filter('to-uppercase', value => {
  return value.toUpperCase()
})

Vue.filter('snippet', value => {
  return value.slice(0, 100) + '...'
})

new Vue({
  render: h => h(App),
}).$mount('#app')

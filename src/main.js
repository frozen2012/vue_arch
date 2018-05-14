import Vue from 'vue'
import store from './store/store'
import router from './router/router'
import App from './App.vue'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const shared = {
  nomeUsuario: null
}

new Vue({
  router,
  data: {
    shared
  },
  render: h => h(App)
}).$mount('#app')

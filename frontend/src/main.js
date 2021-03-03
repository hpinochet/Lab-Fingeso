import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'

Vue.config.productionTip = false

const axiosInstance = axios.create({ 
  baseURL: "http://localhost:8081" 
}) 

// Para acceder a axios desde this.$http 
Vue.prototype.$http = axiosInstance

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.config.globalProperties.$showMessage = function(msg) {
    alert(msg);
  };  

app.config.globalProperties.$axios = axios

app.use(pinia)
app.use(router)
app.mount('#app')
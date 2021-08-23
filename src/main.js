import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import axios from 'axios'
import router from './router.js'

axios.default.baseURL = "http://localhost:8080/"

createApp(App)
.use(ElementPlus)
.use(router)
.mount('#app')

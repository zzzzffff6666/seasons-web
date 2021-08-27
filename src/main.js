<<<<<<< HEAD
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './config/router';
import axios from './config/axios'

const app = createApp(App);
app.config.globalProperties.$http = axios;

app.use(ElementPlus)
.use(router)
.mount('#app');
=======
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
>>>>>>> a83de56ccdab832ea1ea396a1f2685efc4000196

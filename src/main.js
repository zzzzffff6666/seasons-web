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

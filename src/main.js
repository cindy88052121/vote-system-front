import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

import axios from 'axios';
// const instance = axios.create({
//     baseURL: 'http://localhost:9000/voteSystem', // 基礎 URL
//     headers: {'Content-Type': 'application/json'}
// });
axios.defaults.baseURL = 'http://localhost:9000/voteSystem';
const app = createApp(App).use(router);

app.config.globalProperties.axios=axios;

app.mount('#app');

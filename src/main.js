import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createPinia } from 'pinia';

createApp(App)
    .use(router)
    .use(createPinia())
    .use(Toast)
    .mount('#app');

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
    .use(Toast, {
        position: "bottom-center",
        timeout: 2000,
        hideProgressBar: true,
        showCloseButtonOnHover: true,
    })
    .mount('#app');

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createPinia } from 'pinia';
import PlayIcon from './assets/SVG/PlayIcon.vue';
import HeartIcon from './assets/SVG/HeartIcon.vue';

createApp(App)
    .use(router)
    .use(createPinia())
    .component('PlayIcon', PlayIcon)
    .component('HeartIcon', HeartIcon)
    .use(Toast, {
        position: "bottom-center",
        timeout: 2000,
        hideProgressBar: true,
        showCloseButtonOnHover: true,
    })
    .mount('#app');

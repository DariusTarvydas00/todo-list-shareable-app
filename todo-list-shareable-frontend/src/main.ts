import {createApp} from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { createPinia } from 'pinia'
import './index.css'
import axios from "axios";

axios.interceptors.request.use(config => {
    const token = sessionStorage.getItem("token");
    config.headers!["Authorization"] = `Bearer ${token}`;
    return config;
});

const app = createApp(App)
app.config.globalProperties.hostname = "http://161.97.99.214:3000"
app.use(store).use(router).use(createPinia()).mount("#app");

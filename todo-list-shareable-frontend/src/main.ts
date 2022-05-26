import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { createPinia } from 'pinia'

const app = createApp(App)
app.config.globalProperties.hostname = "http://172.23.0.4:3000"
app.use(store).use(router).use(createPinia()).mount("#app");

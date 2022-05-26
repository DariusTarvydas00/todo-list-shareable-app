import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { createPinia } from 'pinia'

const app = createApp(App)
app.config.globalProperties.hostname = "http://161.97.99.214"
app.use(store).use(router).use(createPinia()).mount("#app");

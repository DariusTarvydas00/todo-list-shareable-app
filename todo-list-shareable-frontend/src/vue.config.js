import axios from "axios";
import {configs} from "eslint-plugin-vue";

axios.interceptors.request.use(function (config) {
    config.headers.test = 'I am only a header!';
    return config;
}, null, { synchronous: true });

export default configs()
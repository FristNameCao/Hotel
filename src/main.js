import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores"

//css重置
import "normalize.css";
import "./assets/css/index.css";


const app = createApp(App);
//使用路由router
app.use(router);
//使用状态管理器
app.use(pinia)
app.mount("#app");

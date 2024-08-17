import router from "@/router";
import store from "@/store";
import { createApp } from "vue";
import App from "./App.vue";

// load tools
// import { createPinia } from "pinia";
// import ElementPlus from "element-plus";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// import vue3SeamlessScroll from "vue3-seamless-scroll";
import { loadSvg } from "@/icons";
import { loadPlugins } from "@/plugins";
import i18n from "../locales";
//配置 Element Plus 组件国际化
// import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// import en from "element-plus/dist/locale/en.mjs";
// css
import "animate.css";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "hover.css/css/hover-min.css";
import "uno.css";
import "./styles/index.scss";

const app = createApp(App);

app.use(i18n);

/** 加载插件 */
loadPlugins(app);
/** 加载全局 SVG */
loadSvg(app);

app.use(store).use(router).mount("#app");

import router from '@/router'
import store from '@/store'
import { createApp } from 'vue'
import App from './App.vue'

// load tools
// import { createPinia } from "pinia";
// import ElementPlus from "element-plus";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// import vue3SeamlessScroll from "vue3-seamless-scroll";
import { loadPlugins } from '@/plugins'
import { loadSvg } from '@/icons'
import i18n from '../locales'
//配置 Element Plus 组件国际化
// import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// import en from "element-plus/dist/locale/en.mjs";
// css
// import "./style.css";
import '@/styles/index.scss'
import 'animate.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'hover.css/css/hover-min.css'
import 'uno.css'

const app = createApp(App)

app.use(i18n)

// app.use(vue3SeamlessScroll);

// app.use(ElementPlus, {
//   // locale: zhCn,
//   locale: localStorage.getItem("locale") === "zh_CN" ? zhCn : en,
// });

// app.use(createPinia());
// app.use(ElementPlus, {
//   locale: zhCn,
// });
/** 加载插件 */
loadPlugins(app)
/** 加载全局 SVG */
loadSvg(app)

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component);
// }

app.use(store).use(router).mount('#app')

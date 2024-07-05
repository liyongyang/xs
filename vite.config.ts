import vue from "@vitejs/plugin-vue";
import path from "path";
import UnoCSS from "unocss/vite";
import { defineConfig, loadEnv } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig((env) => {
  process.env = { ...process.env, ...loadEnv(env.mode, process.cwd()) };
  return {
    base: "./",
    plugins: [
      vue(),
      // AutoImport(),
      UnoCSS(),
      /** 将 SVG 静态图转化为 Vue 组件 */
      svgLoader(),
      /** SVG */ createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "~@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // additionalData: `@import "./src/styles/variables.less";@import "./src/styles/mixins.less";`,
        },
      },
    },
    server: {
      /** 是否开启 HTTPS */
      https: false,
      /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
      host: true, // host: "0.0.0.0"
      /** 端口号 */
      port: 3333,
      /** 是否自动打开浏览器 */
      open: false,
      /** 跨域设置允许 */
      cors: true,
      /** 端口被占用时，是否直接退出 */
      strictPort: false,
      /** 接口代理 */
      proxy: {
        [process.env.VITE_BASE_API]: {
          // target: "https://mock.mengxuegu.com/mock/63218b5fb4c53348ed2bc212/api/v1",
          target: process.env.VITE_PROXY_URL,
          ws: true,
          /** 是否允许跨域 */
          changeOrigin: true,
          secure: false,
          rewrite: (path) =>
            path.replace(new RegExp("^" + process.env.VITE_BASE_API), ""),
        },
      },
    },
    build: {
      rollupOptions: {},
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  };
});

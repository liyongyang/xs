// import { useUserStoreHook } from "@/store/modules/user";
import { Rxios } from "./Rxios";

import { getToken } from "./cache/cookies";

// axios全局设置
const http = new Rxios({
  baseURL: import.meta.env.VITE_PROXY_URL,
  timeout: 60 * 1000,
  responseType: "json",
});
// axios.defaults.timeout = 30000

/**
 * 此处为捕获到的异常，可以将此异常提交给Vuex的Store或者使用微信组件弹出
 * @param error
 */
function sendError(error: any) {
  let msg = "发生错误";
  if (error.msg) {
    msg = error.msg;
  } else if (error.message) {
    msg = error.message;
  }
  // 1。store.dispatch('error/appendError', errorData)
  // 2。弹出
}
// axios请求拦截
http.interceptors.request.use(
  (config) => {
    const loading = (config as any).showLoading;
    if (loading) {
      // Toast.loading({
      //   message: "拼命加载中...",
      //   forbidClick: true,
      //   duration: 0
      // });
    }
    // Add X-Access-Token header to every request, you can add other custom headers here
    if (getToken()) {
      config.headers["Authorization"] = getToken();
    }
    if (config.params) {
      Object.keys(config.params).map((t) => {
        if (config.params[t] === null || config.params[t] === " ") {
          delete config.params[t];
        }
      });
    }
    return config;
  },
  (error) => {
    sendError(error);
    return Promise.reject(error);
  }
);

// // axios 响应拦截，对响应的状态处理
// http.interceptors.response.use(
//   (response) => {
//     // Toast.clear();
//     const res = response.data;
//     if (res && res.hasOwnProperty("code")) {
//       if (res.code === 401) {
//         useUserStoreHook().Logout();
//         location.reload();
//         router.push("/login");
//         // const url = location.pathname + location.search;
//         // const redirectUrl = encodeURIComponent(url);
//         // if (AppModule.hiddenHeader) {
//         //   window.parent.postMessage(
//         //     { action: "login", redirect: redirectUrl },
//         //     "*"
//         //   );
//         // } else {
//         // router.push("/login?redirect=" + redirectUrl);
//         // }
//       } else if (res.code !== 200) {
//         sendError(res);
//         return Promise.reject(res);
//       }
//       // response.data = res.hasOwnProperty("data") ? res.data : res;
//       response.data =
//         res.hasOwnProperty("data") &&
//         !res.hasOwnProperty("pages") &&
//         !res.hasOwnProperty("total")
//           ? res.data
//           : res;
//     }
//     return response;
//   },
//   (error) => {
//     sendError(error);
//     return Promise.reject(error);
//   }
// );
/**
 * 参数处理
 * @param {*} params  参数
 */
function tansParams(params: any) {
  let result = "";
  Object.keys(params).forEach((key) => {
    if (
      !Object.is(params[key], undefined) &&
      !Object.is(params[key], null) &&
      !Object.is(JSON.stringify(params[key]), "{}")
    ) {
      result +=
        encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";
    }
  });
  return result;
}

export default http;

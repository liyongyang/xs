import { Rxios } from "./Rxios";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/store/modules/user";
import router from "../router";
import { saveAs } from "file-saver";
import { tap } from "rxjs/operators";

// axios全局设置
const http = new Rxios({
  baseURL: import.meta.env.VITE_PROXY_URL, // url = base url + request url
  timeout: 60 * 1000,
  responseType: "json",
});
export const httpHj = new Rxios({
  baseURL: import.meta.env.VUE_APP_HJ_BASE_API, // url = base url + request url
  timeout: 60 * 1000,
  responseType: "json",
});
export const httpHj1 = new Rxios({
  baseURL: import.meta.env.VUE_APP_HJ1_BASE_API, // url = base url + request url
  timeout: 60 * 1000,
  responseType: "json",
});
export const httpHjcoord = new Rxios({
  baseURL: import.meta.env.VUE_APP_HJCOORD_BASE_API, // url = base url + request url
  timeout: 60 * 1000,
  responseType: "text",
});
export const httpVideo = new Rxios({
  baseURL: import.meta.env.VUE_APP_VIDEO_BASE_API, // url = base url + request url
  timeout: 60 * 1000,
  responseType: "json",
});
// axios.defaults.timeout = 30000

/**
 * 此处为捕获到的异常，可以将此异常提交给Vuex的Store或者使用微信组件弹出
 * @param error
 */
function sendError(error) {
  let msg = "发生错误";
  if (error.msg) {
    msg = error.msg;
  } else if (error.message) {
    msg = error.message;
  }
  // 1。store.dispatch('error/appendError', errorData)
  // 2。弹出
  ElMessage({
    message: msg || "Error",
    type: "error",
    duration: 1.5 * 1000,
  });
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
    if (useUserStore.token) {
      console.log("token", useUserStore.token);
      config.headers["Authorization"] = useUserStore.token;
    }
    // if (!config.url?.endsWith("login")) {
    //   config.params = {
    //     ...config.params,
    //     _platform: "MobileWeb",
    //     _version: "1.0.0",
    //     _net: "",
    //     _os: "",
    //     _device: "",
    //     _describe: "",
    //     _trace: getTrace(),
    //     _sequence: getSequence(),
    //     _time: getTime()
    //   };
    // }
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

// axios 响应拦截，对响应的状态处理
http.interceptors.response.use(
  (response) => {
    // Toast.clear();
    const res = response.data;
    if (res && res.hasOwnProperty("code")) {
      if (res.code === 401) {
        useUserStore.ResetToken();
        router.push("/login");
        // const url = location.pathname + location.search;
        // const redirectUrl = encodeURIComponent(url);
        // if (AppModule.hiddenHeader) {
        //   window.parent.postMessage(
        //     { action: "login", redirect: redirectUrl },
        //     "*"
        //   );
        // } else {
        // router.push("/login?redirect=" + redirectUrl);
        // }
      } else if (res.code !== 200) {
        sendError(res);
        return Promise.reject(res);
      }
      // response.data = res.hasOwnProperty("data") ? res.data : res;
      response.data =
        res.hasOwnProperty("data") &&
        !res.hasOwnProperty("pages") &&
        !res.hasOwnProperty("total")
          ? res.data
          : res;
    }
    return response;
  },
  (error) => {
    sendError(error);
    return Promise.reject(error);
  }
);
/**
 * 参数处理
 * @param {*} params  参数
 */
function tansParams(params) {
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

export const formConfig = {
  transformRequest: (data) => {
    const formData = new FormData();
    if (data) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const v = data[key];
          if (v !== null && v !== undefined && v !== "") {
            formData.append(key, v);
          }
        }
      }
    }
    return formData;
  },
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  responseType: "blob",
};

// 通用下载方法
export function downloadFile(url, params, filename, suffix?) {
  const type = suffix || "xlsx";
  return http.post<any>(url, params, formConfig).pipe(
    tap((res) => {
      saveAs(
        new Blob([res], { type: res.type }),
        `${filename}_${new Date().getTime()}.${type}`
      );
    })
  );
}

export default http;

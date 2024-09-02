import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";
import { get } from "lodash-es";
import { getToken } from "./cache/cookies";

/** 创建请求实例 */
function createService() {
  // 创建一个 Axios 实例
  const service = axios.create();
  // 请求拦截
  service.interceptors.request.use(
    (config) => config,
    // 发送失败
    (error) => Promise.reject(error)
  );
  // 响应拦截（可根据具体业务作出相应的调整）
  service.interceptors.response.use(
    (response) => {
      // apiData 是 API 返回的数据
      const apiData = response.data as any;
      // 这个 Code 是和后端约定的业务 Code
      const code = apiData.code;
      // 如果没有 Code, 代表这不是项目后端开发的 API
      if (code === undefined) {
        ElMessage.error("非本系统的接口");
        return Promise.reject(new Error("非本系统的接口"));
      } else {
        if (code === 200) {
          return apiData;
        } else {
          let tip = "";
          switch (code) {
            case 200:
              // code === 200 代表没有错误
              return apiData;
            case 400:
              tip = "请求错误";
              break;
            case 401:
              // Token 过期时，直接退出登录并强制刷新页面（会重定向到登录页）
              break;
            case 403:
              tip = "拒绝访问";
              break;
            case 404:
              tip = "请求地址出错";
              break;
            case 408:
              tip = "请求超时";
              break;
            case 500:
              tip = "账号或密码错误"; //服务器内部错误
              break;
            case 501:
              tip = "服务未实现";
              break;
            case 502:
              tip = "网关错误";
              break;
            case 503:
              tip = "服务不可用";
              break;
            case 504:
              tip = "网关超时";
              break;
            case 505:
              tip = "HTTP 版本不受支持";
              break;
            case 506:
              tip = "请输入正确的账号或密码";
              break;
            default:
              return Promise.reject(new Error("Error"));
          }
          // 不是正确的 Code
          ElMessage({
            message: tip || "Error",
            center: true,
            offset: 180,
            type: "error",
          });
        }
      }
    },
    (error) => {
      // Status 是 HTTP 状态码
      const status = get(error, "response.status");
      switch (status) {
        case 400:
          error.message = "请求错误";
          break;
        case 401:
          // Token 过期时，直接退出登录并强制刷新页面（会重定向到登录页）
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求地址出错";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "账号或密码错误"; //服务器内部错误
          break;
        case 501:
          error.message = "服务未实现";
          break;
        case 502:
          error.message = "网关错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网关超时";
          break;
        case 505:
          error.message = "HTTP 版本不受支持";
          break;
        case 506:
          error.message = "请输入正确的账号或密码";
          break;
        default:
          break;
      }
      ElMessage.error(error.message);
      return Promise.reject(error);
    }
  );
  return service;
}

/** 创建请求方法 */
function createRequestFunction(service: AxiosInstance) {
  return function <T>(config: AxiosRequestConfig): Promise<T> {
    const configDefault = {
      headers: {
        // 携带 Token
        Authorization: "Bearer " + getToken(),
        "Content-Type": get(config, "headers.Content-Type", "application/json"),
      },
      timeout: 20000,
      baseURL: import.meta.env.VITE_PROXY_URL,
      data: {},
    };
    return service(Object.assign(configDefault, config));
  };
}

/** 用于网络请求的实例 */
export const service = createService();
/** 用于网络请求的方法 */
export const request = createRequestFunction(service);

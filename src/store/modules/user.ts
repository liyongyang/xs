import { ref } from "vue";
import store from "@/store";
import { defineStore } from "pinia";
import { usePermissionStore } from "./permission";
import { getToken, removeToken, setToken } from "@/utils/cache/cookies";
import router from "@/router";
import { login } from "@/api/index";

import { type ILoginRequestData, loginApi, getUserInfoApi } from "@/api/login";
import { type RouteRecordRaw } from "vue-router";

export const useUserStore = defineStore("user", () => {
  const token = ref<string>(getToken() || "");
  const roles = ref<string[]>([]);
  const username = ref<string>("");

  /** 设置角色数组 */
  const setRoles = (value: string[]) => {
    roles.value = value;
  };
  /** 登录 */
  const getLogin = (loginData: ILoginRequestData) => {
    return new Promise((resolve, reject) => {
      login
        .loginApi({
          username: loginData.username,
          password: loginData.password,
          // code: loginData.code
        })
        .then((res) => {
          setToken(res.data.token);
          token.value = res.data.token;
          router.push({ path: "/" });
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  /** 获取用户详情 */
  const getInfo = () => {
    return new Promise((resolve, reject) => {
      login
        .getUserInfoApi()
        .then((res) => {
          roles.value = res.roles || "";
          username.value = res.user.nickName || "";
          // roles.value = res.data.roles
          // username.value = res.data.username
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  /** 切换角色 */
  const changeRoles = async (role: string) => {
    const newToken = "token-" + role;
    token.value = newToken;
    setToken(newToken);
    await getInfo();
    const permissionStore = usePermissionStore();
    permissionStore.setRoutes(roles.value);
    permissionStore.dynamicRoutesConfig.forEach((item: RouteRecordRaw) => {
      router.addRoute(item);
    });
  };
  /** 登出 */
  const logout = () => {
    removeToken();
    token.value = "";
    roles.value = [];
  };
  /** 重置 Token */
  const resetToken = () => {
    removeToken();
    token.value = "";
    roles.value = [];
  };

  return {
    token,
    roles,
    username,
    setRoles,
    getLogin,
    getInfo,
    changeRoles,
    logout,
    resetToken,
  };
});

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store);
}

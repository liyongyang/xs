import { login } from "@/api/login";
import store from "@/store";
import { getToken, removeToken, setToken } from "@/utils/cache/cookies";
import * as crypto from "crypto-js";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const token = ref<string>(getToken() || "");
  const roles = ref<string[]>([]);
  const username = ref<string>("");

  /** 设置角色数组 */
  const setRoles = (value: string[]) => {
    roles.value = value;
  };
  /** 登录 */
  const getLogin = (userInfo: any) => {
    const aesKey = "sh32h7gfd5tgj8yd";
    const aesIv = "18520824a2bc3d4e";
    const { userName, password } = userInfo;
    const usernameEncode = crypto.AES.encrypt(
      crypto.enc.Utf8.parse(userName),
      crypto.enc.Utf8.parse(aesKey),
      {
        iv: crypto.enc.Utf8.parse(aesIv),
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7,
      }
    ).toString();

    const pwd = crypto.AES.encrypt(
      crypto.enc.Utf8.parse(password),
      crypto.enc.Utf8.parse(aesKey),
      {
        iv: crypto.enc.Utf8.parse(aesIv),
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7,
      }
    ).toString();
    return new Promise((resolve, reject) => {
      login
        .loginApi({
          userName: usernameEncode,
          password: pwd,
        })
        .then((res) => {
          setToken(res.data.token);
          token.value = res.data.token;
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  /** 获取用户详情 */
  // const getInfo = () => {
  //   return new Promise((resolve, reject) => {
  //     login
  //       .getUserInfoApi()
  //       .then((res) => {
  //         roles.value = res.roles || "";
  //         username.value = res.user.nickName || "";
  //         // roles.value = res.data.roles
  //         // username.value = res.data.username
  //         resolve(res);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // };
  // /** 切换角色 */
  // const changeRoles = async (role: string) => {
  //   const newToken = "token-" + role;
  //   token.value = newToken;
  //   setToken(newToken);
  //   await getInfo();
  //   const permissionStore = usePermissionStore();
  //   permissionStore.setRoutes(roles.value);
  //   permissionStore.dynamicRoutesConfig.forEach((item: RouteRecordRaw) => {
  //     router.addRoute(item);
  //   });
  // };
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
    // getInfo,
    // changeRoles,
    logout,
    resetToken,
  };
});

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store);
}

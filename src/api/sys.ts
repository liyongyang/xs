import http, { downloadFile } from "@/utils/http";

const tansParams = (params) => {
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
};

const config = {
  headers: { "Content-Type": "application/json" },
};

class Sys {
  /**
   * 登录
   */
  login(params: any) {
    return http.post<any>("/sys-user/login", params);
  }
  loginCheck() {
    return http.get<any>("/sys-user/checkToken");
  }
  upload(params: any) {
    return http.post<any>("/sys-user/upload", params, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
  /**
   *
   * @param params 留言列表
   * @returns
   */
  getMsgList(params: any) {
    return http.get<any>("/t-message-info/page", { params });
  }

  /**
   *
   * @param params 添加留言
   * @returns
   */
  addMsg(params: any) {
    return http.post<any>("/t-message-info/addMessage", params);
  }
  /**
   *
   * @param params 删除留言
   * @returns
   */
  deleteMsg(params: any) {
    return http.delete<any>("/t-message-info/delByIds", { data: params });
  }
  /**
   * 账号列表
   */
  userList(params: any) {
    return http.get<any>("/sys-user/page", { params });
  }
  /**
   * 添加账号
   */
  addUser(params: any) {
    return http.post<any>("/sys-user/addUser", params);
  }
  /**
   * 编辑账号
   */
  editUser(params: any) {
    return http.put<any>("/sys-user/updateUser", params, config);
  }
  /**
   * 删除账号
   */
  deletUser(params: any) {
    return http.delete<any>("/sys-user/delByIds", { data: params });
  }
  // 导出账号
  exportUser(params, filename) {
    return downloadFile(
      "/lgd-modules-system/logininfor/export",
      params,
      filename
    );
  }
  /**
   *  报备列表
   */
  getReportList(params: any) {
    return http.get<any>("/t-customer-report/page", { params });
  }
  /**
   * 添加报备
   */
  addReport(params: any) {
    return http.post<any>("/t-customer-report/addReport", params);
  }
  /**
   * 编辑报备
   */
  editReport(params: any) {
    return http.put<any>("/t-customer-report/updateStatus", params);
  }
  /**
   * 删除报备
   */
  deletReport(params: any) {
    return http.delete<any>("/t-customer-report/delByIds", { data: params });
  }
  getHomeList() {
    return http.get<any>("/t-home-info/getHomeList");
  }
  addHome(params: any) {
    return http.post<any>("/t-home-info/addHome", params);
  }
  updateHome(params: any) {
    return http.put<any>("/t-home-info/updateHome", params);
  }
  deletHome(params: any) {
    return http.delete<any>("/t-home-info/delByIds", { data: params });
  }
}

export const sys = new Sys();

import http from "@/utils/http";

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

class Gd {
  /**
   * 账号列表
   */
  getgd(params: any) {
    return http.get<any>("/t-product-publicity/getProductPublicityList", {
      params,
    });
  }
  /**
   * 添加
   */
  addgd(params: any) {
    return http.post<any>("/t-product-publicity/addProductPublicity", params);
  }
  /**
   * 编辑账号
   */
  editgd(params: any) {
    return http.put<any>(
      "/t-product-publicity/updateProductPublicity",
      params,
      config
    );
  }
  /**
   * 删除账号
   */
  deletUser(params: any) {
    return http.delete<any>("/sys-user/delByIds", { data: params });
  }
}

export const gd = new Gd();

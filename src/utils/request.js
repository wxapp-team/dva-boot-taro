import Taro from "@tarojs/taro";
import { showErrorToast } from "./util";

/**
 * 封封微信的的request
 */
function request(url, data = {}, method = "GET") {
  return new Promise(function(resolve, reject) {
    Taro.request({
      url: url,
      data: data,
      method: method,
      header: {
        // 'Content-Type': 'application/json',
        // 'X-Litemall-Token': Taro.getStorageSync('token')
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(res) {
        if (res.statusCode == 200) {
          const { code, msg, result } = res.data;
          if (code == 501) {
            // 清除登录相关内容
            try {
              Taro.removeStorageSync("userInfo");
              Taro.removeStorageSync("token");
            } catch (e) {
              // Do something when catch error
            }
            // 切换到登录页面
            Taro.navigateTo({
              url: "/pages/auth/login/login"
            });
          } else if (code == "200") {
            resolve(result);
          } else if (code == "500") {
            reject(result)
          } else {
            resolve(res.data);
          }
        } else {
          reject(res.errMsg);
        }
      },
      fail: function(err) {
        Taro.showModal({
          title: "错误信息",
          content: err.errMsg,
          showCancel: false
        });
        reject(err);
      }
    });
  });
}

request.get = (url, data) => {
  return request(url, data, "GET");
};

request.post = (url, data) => {
  return request(url, data, "POST");
};

export default request;

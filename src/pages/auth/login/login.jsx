import Taro, { Component } from "@tarojs/taro";
import { View, Button, Image, Navigator } from "@tarojs/components";
import { AtInput } from "taro-ui";
import { loginByAccount } from "@/services/auth";
import { isValidPhone } from "@/utils/util";
import * as images from "@/assets/images";
import "./index.less";

class AccountLogin extends Component {
  config = {
    navigationBarTitleText: "登录"
  };

  state = {
    mobile: ""
  };

  componentWillMount() {}
  componentDidMount() {}

  onChange = value => {
    this.setState({
      mobile: value
    });
  };

  accountLogin = () => {
    const { mobile } = this.state;
    if (mobile.length < 1) {
      Taro.showModal({
        title: "错误信息",
        content: "请输入手机号码",
        showCancel: false
      });
      return false;
    }

    if (!isValidPhone(mobile)) {
      Taro.showModal({
        title: "错误信息",
        content: "手机号码格式错误",
        showCancel: false
      });
      return false;
    }

    loginByAccount({
      tel: mobile,
      weixin: Taro.getStorageSync("openid")
    })
      .then(res => {
        this.setState({
          loginErrorCount: 0
        });
        Taro.setStorageSync("userInfo", res);
        Taro.reLaunch({
          url: "/pages/index/index"
        });
      })
      .catch(msg => {
        Taro.showModal({
          title: "错误信息",
          content: msg,
          showCancel: false
        });
        this.setState({
          loginErrorCount: this.state.loginErrorCount + 1
        });
      });
  };

  render() {
    const { mobile } = this.state;
    return (
      <View className="container login">
        <View className="top">
          <View className="title">登录</View>

          <View className="form-box">
            <View className="form-item">
              <AtInput
                className="input-field"
                type="number"
                value={mobile}
                onChange={this.onChange}
                placeholder="手机号"
              />
            </View>

            <Button className="login-btn" onClick={this.accountLogin}>
              登录
            </Button>

            <View className="form-item-text">
              <Navigator
                url="/pages/auth/register/register"
                className="register"
              >
                注册账号
              </Navigator>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default AccountLogin;

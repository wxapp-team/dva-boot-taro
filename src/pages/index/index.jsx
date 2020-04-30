import Taro, { Component } from "@tarojs/taro";
import { AtToast } from "taro-ui";
import { connect } from "@tarojs/redux";
import { View, Button, Canvas } from "@tarojs/components";
import "./index.less";

@connect(({ home }) => ({
  home
}))
export default class Index extends Component {
  state = {};

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: ""
  };

  toLogin() {
    Taro.navigateTo({
      url: "/pages/auth/login/login"
    });
  }

  toRegister() {
    Taro.navigateTo({
      url: "/pages/auth/register/register"
    });
  }

  onLogout() {
    Taro.navigateTo({
      url: "/pages/auth/login/login"
    });
  }

  render() {
    return (
      <View className="index">
        <View className="top">
          <View className="txt1">还没注册？点击下方按钮快速注册吧！</View>

          <View className="at-row btns">
            <View className="at-col">
              <Button onClick={this.toLogin}>用户登录</Button>
            </View>
            <View className="at-col">
              <Button onClick={this.toRegister}>用户注册</Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

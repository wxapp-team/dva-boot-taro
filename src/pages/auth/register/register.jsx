import Taro, { Component } from "@tarojs/taro";
import { View, Image, Picker } from "@tarojs/components";
import { AtInput, AtButton, AtListItem } from "taro-ui";
import { reg, getOpenId } from "@/services/auth";
import { getAreaList, getUserInfo } from "@/services/common";
import { isValidPhone, isValidIdCard } from "@/utils/util";
import Api from "@/config/api";
import * as images from "@/assets/images";
import "./index.less";

export default class extends Component {
  config = {
    navigationBarTitleText: "注册"
  };

  state = {
    form: {
      name: ""
    },
  };

  componentDidMount() {
    
  }

  render() {
    const {
      form
    } = this.state;
    const { name } = form;
    return (
      <View className="container register">
        <View className="card-box">
          <View className="title info">基本信息</View>
          <View className="form-box">
            <View className="form-item">
              <AtInput
                title="姓名"
                maxlength={10}
                value={name}
                placeholder="姓名"
              />
            </View>
          </View>
        </View>
        <AtButton
          type="primary"
          className="register-btn"
          onClick={this.startRegister}
        >
          注册
        </AtButton>
      </View>
    );
  }
}

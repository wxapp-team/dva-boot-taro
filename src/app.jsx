import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import "taro-ui/dist/style/index.scss";
import dva from "./dva";
import models from "./models";
import * as user from "./utils/user";
import { set as setGlobalData, get as getGlobalData } from "./global_data";
import Index from "./pages/index";

import "./app.less";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    console.log("系统出错了!");
    // dispatch(action("sys/error", e));
  }
});
const store = dvaApp.getStore();

class App extends Component {
  componentDidMount() {}

  componentDidShow() {
    user
      .checkLogin()
      .then(res => {
        setGlobalData("hasLogin", true);
      })
      .catch(() => {
        setGlobalData("hasLogin", false);
      });
  }

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: ["pages/index/index", "pages/auth/login/login", "pages/auth/register/register"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#11AAA3",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "white"
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));

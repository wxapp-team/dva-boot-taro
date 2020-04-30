// const WxApiRoot = 'http://gzfp.gzkjy.cn:9901/';
const WxApiRoot = 'https://gzfp.gzkjy.cn';

export default {
  AuthLoginByAccount: WxApiRoot + '/api/member/login', // 出入林场人员登录接口
  AuthRegister: WxApiRoot + '/api/member/save', // 账号注册
  AuthUserUpdate: WxApiRoot + '/api/member/update', // 账号更新

  FileUpload: WxApiRoot + '/upload/uploadFileForMp', // 上传文件

  GetAreaList: WxApiRoot + '/api/area/listAll', // 区域列表
  GetUserInfo: WxApiRoot + '/api/member/findById', // 获取用户信息
  GetOpenId: WxApiRoot + '/api/weixin/getUser', // 获取openId
};

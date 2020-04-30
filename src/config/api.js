// const WxApiRoot = 'http://xxx.gzkjy.cn:9901/';
const WxApiRoot = 'https://xxx.gzkjy.cn';

export default {
  AuthLoginByAccount: WxApiRoot + '/api/member/login',
  AuthRegister: WxApiRoot + '/api/member/save',
  AuthUserUpdate: WxApiRoot + '/api/member/update',

  FileUpload: WxApiRoot + '/upload/uploadFileForMp',

  GetAreaList: WxApiRoot + '/api/area/listAll',
  GetUserInfo: WxApiRoot + '/api/member/findById',
  GetOpenId: WxApiRoot + '/api/weixin/getUser'
};

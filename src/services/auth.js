

import request from '../utils/request';
import Api from '../config/api';

/**
 *  微信登录
 */
export async function loginByWeXin(payload) {
  return request.post(Api.AuthLoginByWeixin, payload);
}

/**
 *  用户登录
 */
export async function loginByAccount(payload) {
  return request.post(Api.AuthLoginByAccount, payload);
}

/**
 *  用户注册
 */
export async function reg(payload) {
  if (payload && payload.member_id) {
    return request.post(Api.AuthUserUpdate, payload);
  }
  return request.post(Api.AuthRegister, payload);
}

/**
 *  退出登录
 */
export async function logOut() {
  return request.post(Api.AuthLogout);
}

/**
 *  获取openId
 */
export async function getOpenId(payload) {
  return request.post(Api.GetOpenId, payload);
}

/**
 *  用户更新，重新审核
 */
export async function userUpdate(payload) {
  return request.post(Api.AuthUserUpdate, payload);
}

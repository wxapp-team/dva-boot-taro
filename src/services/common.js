import request from '../utils/request';
import Api from '../config/api';

/**
 *  区域列表
 */
export async function getAreaList(payload) {
  return request.post(Api.GetAreaList, payload);
}

/**
 * 获取用户详情
 */
export async function getUserInfo(payload) {
  return request.post(Api.GetUserInfo, payload);
}

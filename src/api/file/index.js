import request from '@/utils/request';
import { FILE } from '@/api/base-url.js';

// 列表查詢
export function getFilesList(params, data) {
  return request({
    url: `${FILE}/listPage`,
    method: 'post',
    params,
    data
  });
}

// 更新檔案
export function updateFile(data) {
  return request({
    url: `${FILE}/updateFile`,
    method: 'post',
    data: data
  });
}

export function deleteFile(params) {
  return request({
    url: `${FILE}/deleteFile`,
    method: 'post',
    params
  });
}

// 獲取路由
export const uploadFile = (data) => {
  return request({
    url: `${ FILE }/upload`,
    method: 'post',
    data,
  });
};

// 下載檔案
export function downCommonFile(params) {
  return request({
    url: `${ FILE }/downloadFile`,
    method: 'post',
    headers: {
      'Access-Control-Expose-Headers': 'content-disposition',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    responseType: 'blob',
    params
  });
}

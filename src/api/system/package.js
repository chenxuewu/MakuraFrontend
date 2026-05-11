import request from '@/utils/request'

// 查詢訂單包裹列表
export function listPackage(query) {
  return request({
    url: '/system/package/list',
    method: 'get',
    params: query
  })
}

// 查詢訂單包裹詳細
export function getPackage(id) {
  return request({
    url: '/system/package/' + id,
    method: 'get'
  })
}

// 新增訂單包裹
export function addPackage(data) {
  return request({
    url: '/system/package',
    method: 'post',
    data: data
  })
}

// 修改訂單包裹
export function updatePackage(data) {
  return request({
    url: '/system/package',
    method: 'put',
    data: data
  })
}

// 刪除訂單包裹
export function delPackage(id) {
  return request({
    url: '/system/package/' + id,
    method: 'delete'
  })
}

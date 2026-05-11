import request from '@/utils/request'

// 查詢商品倉庫位置列表
export function listLocation(query) {
  return request({
    url: '/product/location/list',
    method: 'get',
    params: query
  })
}

// 查詢商品倉庫位置詳細
export function getLocation(locationId) {
  return request({
    url: '/product/location/' + locationId,
    method: 'get'
  })
}

// 新增商品倉庫位置
export function addLocation(data) {
  return request({
    url: '/product/location',
    method: 'post',
    data: data
  })
}

// 修改商品倉庫位置
export function updateLocation(data) {
  return request({
    url: '/product/location',
    method: 'put',
    data: data
  })
}

// 刪除商品倉庫位置
export function delLocation(locationId) {
  return request({
    url: '/product/location/' + locationId,
    method: 'delete'
  })
}

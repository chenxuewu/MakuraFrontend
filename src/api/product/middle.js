import request from '@/utils/request'

// 查詢商品屬性和單位中間列表
export function listMiddle(query) {
  return request({
    url: '/product/middle/list',
    method: 'get',
    params: query
  })
}

// 查詢商品屬性和單位中間詳細
export function getMiddle(id) {
  return request({
    url: '/product/middle/' + id,
    method: 'get'
  })
}

// 新增商品屬性和單位中間
export function addMiddle(data) {
  return request({
    url: '/product/middle',
    method: 'post',
    data: data
  })
}

// 修改商品屬性和單位中間
export function updateMiddle(data) {
  return request({
    url: '/product/middle',
    method: 'put',
    data: data
  })
}

// 刪除商品屬性和單位中間
export function delMiddle(id) {
  return request({
    url: '/product/middle/' + id,
    method: 'delete'
  })
}

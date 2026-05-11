import request from '@/utils/request'

// 查詢購物車列表
export function listItem(query) {
  return request({
    url: '/system/item/list',
    method: 'get',
    params: query
  })
}

// 查詢購物車詳細
export function getItem(id) {
  return request({
    url: '/system/item/' + id,
    method: 'get'
  })
}

// 新增購物車
export function addItem(data) {
  return request({
    url: '/system/item',
    method: 'post',
    data: data
  })
}

// 修改購物車
export function updateItem(data) {
  return request({
    url: '/system/item',
    method: 'put',
    data: data
  })
}

// 刪除購物車
export function delItem(id) {
  return request({
    url: '/system/item/' + id,
    method: 'delete'
  })
}

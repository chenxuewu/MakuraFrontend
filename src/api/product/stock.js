import request from '@/utils/request'

// 查詢庫存列表
export function listStock(query) {
  return request({
    url: '/product/stock/list',
    method: 'get',
    params: query
  })
}

// 查詢庫存詳細
export function getStock(id) {
  return request({
    url: '/product/stock/' + id,
    method: 'get'
  })
}

// 新增庫存
export function addStock(data) {
  return request({
    url: '/product/stock',
    method: 'post',
    data: data
  })
}

// 修改庫存
export function updateStock(data) {
  return request({
    url: '/product/stock',
    method: 'put',
    data: data
  })
}

// 刪除庫存
export function delStock(id) {
  return request({
    url: '/product/stock/' + id,
    method: 'delete'
  })
}

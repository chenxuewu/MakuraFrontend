import request from '@/utils/request'

// 查詢sku的庫存列表
export function listSku(query) {
  return request({
    url: '/system/sku/list',
    method: 'get',
    params: query
  })
}

// 查詢sku的庫存詳細
export function getSku(id) {
  return request({
    url: '/system/sku/' + id,
    method: 'get'
  })
}

// 新增sku的庫存
export function addSku(data) {
  return request({
    url: '/system/sku',
    method: 'post',
    data: data
  })
}

// 修改sku的庫存
export function updateSku(data) {
  return request({
    url: '/system/sku',
    method: 'put',
    data: data
  })
}

// 刪除sku的庫存
export function delSku(id) {
  return request({
    url: '/system/sku/' + id,
    method: 'delete'
  })
}

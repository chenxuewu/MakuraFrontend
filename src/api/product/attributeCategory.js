import request from '@/utils/request'

// 查詢商品屬性分類列表
export function listAttributeCategory(query) {
  return request({
    url: '/productAttributeCategory/list',
    method: 'get',
    params: query
  })
}
// 查詢商品屬性分類列表
export function treeAttributeCategory(query) {
  return request({
    url: '/productAttributeCategory/getAttributeCategoryTree',
    method: 'get',
    params: query
  })
}
// 查詢商品屬性分類詳細
export function getAttributeCategory(id) {
  return request({
    url: '/productAttributeCategory/' + id,
    method: 'get'
  })
}

// 新增商品屬性分類
export function addAttributeCategory(data) {
  return request({
    url: '/productAttributeCategory',
    method: 'post',
    data: data,
    timeout: 180000
  })
}

// 修改商品屬性分類
export function updateAttributeCategory(data) {
  return request({
    url: '/productAttributeCategory',
    method: 'put',
    data: data,
    timeout: 180000
  })
}

// 刪除商品屬性分類
export function delAttributeCategory(id) {
  return request({
    url: '/productAttributeCategory/' + id,
    method: 'delete',
    timeout: 180000
  })
}

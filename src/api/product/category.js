import request from '@/utils/request'

// 查詢商品屬性分類列表
export function listCategory(query) {
  return request({
    url: '/product/category/list',
    method: 'get',
    params: query
  })
}

// 查詢商品屬性分類詳細
export function getCategory(id) {
  return request({
    url: '/product/category/' + id,
    method: 'get'
  })
}

// 新增商品屬性分類
export function addCategory(data) {
  return request({
    url: '/product/category',
    method: 'post',
    data: data,
    timeout: 180000
  })
}

// 修改商品屬性分類
export function updateCategory(data) {
  return request({
    url: '/product/category',
    method: 'put',
    data: data,
    timeout: 180000
  })
}

// 刪除商品屬性分類
export function delCategory(id) {
  return request({
    url: '/product/category/' + id,
    method: 'delete',
    timeout: 180000
  })
}

// 前台——取得商品分類樹（只取一級，無需登入）
export function frontGetCategoryTree() {
  return request({
    url: '/productCategory/frontGetCategoryTree',
    method: 'get'
  })
}

// 前台——取得完整分類樹（含子分類，無需登入）
export function frontAllGetCategoryTree() {
  return request({
    url: '/productAttributeCategory/frontAllGetCategoryTree',
    method: 'get'
  })
}

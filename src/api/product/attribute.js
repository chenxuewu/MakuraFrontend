import request from '@/utils/request'

// 查詢商品屬性引數列表
export function listAttribute(query) {
  return request({
    url: '/productAttribute/list',
    method: 'get',
    params: query
  })
}

// 查詢商品屬性引數詳細
export function getAttribute(attributeId) {
  return request({
    url: '/productAttribute/' + attributeId,
    method: 'get'
  })
}

// 新增商品屬性引數
export function addAttribute(data) {
  return request({
    url: '/productAttribute',
    method: 'post',
    data: data,
    timeout: 180000
  })
}

// 修改商品屬性引數
export function updateAttribute(data) {
  return request({
    url: '/productAttribute',
    method: 'put',
    data: data,
    timeout: 180000
  })
}

// 刪除商品屬性引數
export function delAttribute(attributeId) {
  return request({
    url: '/productAttribute/' + attributeId,
    method: 'delete',
    timeout: 180000
  })
}


// 查詢商品屬性引數詳細
export function getAttributeDataByAttributeCategoryId(attributeCategoryId) {
  return request({
    url: '/productAttributeCategory/getAttributeData/' + attributeCategoryId,
    method: 'get'
  })
}


// 查詢商品屬性分類列表
export function getAttributeCategoryTree(query) {
  return request({
    url: '/productAttributeCategory/getAttributeCategoryTree',
    method: 'get',
    params: query
  })
}


// 查詢商品屬性分類列表
export function attributeCategoryTree(query) {
  return request({
    url: '/productAttributeCategory/getAttributeCategoryTree',
    method: 'get',
    params: query
  })
}


//==========================前天介面===========================

// 前臺——查詢商品屬性分類列表
export function getFrontProductCategoryTree(query) {
  return request({
    url: '/productAttributeCategory/frontGetCategoryTree',
    method: 'get',
    params: query
  })
}

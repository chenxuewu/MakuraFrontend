import request from '@/utils/request'

// 查詢商品屬性值列表
export function listValue(query) {
  return request({
    url: '/product/attributeValue/list',
    method: 'get',
    params: query
  })
}

// 查詢商品屬性值詳細
export function getValue(valueId) {
  return request({
    url: '/product/attributeValue/' + valueId,
    method: 'get'
  })
}

// 新增商品屬性值
export function addValue(data) {
  return request({
    url: '/product/attributeValue',
    method: 'post',
    data: data
  })
}

// 修改商品屬性值
export function updateValue(data) {
  return request({
    url: '/product/attributeValue',
    method: 'put',
    data: data
  })
}

// 刪除商品屬性值
export function delValue(valueId) {
  return request({
    url: '/product/attributeValue/' + valueId,
    method: 'delete'
  })
}

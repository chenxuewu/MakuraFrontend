import request from '@/utils/request'

// 查詢訂單包裹和商品中間列表
export function listRelation(query) {
  return request({
    url: '/system/relation/list',
    method: 'get',
    params: query
  })
}

// 查詢訂單包裹和商品中間詳細
export function getRelation(id) {
  return request({
    url: '/system/relation/' + id,
    method: 'get'
  })
}

// 新增訂單包裹和商品中間
export function addRelation(data) {
  return request({
    url: '/system/relation',
    method: 'post',
    data: data
  })
}

// 修改訂單包裹和商品中間
export function updateRelation(data) {
  return request({
    url: '/system/relation',
    method: 'put',
    data: data
  })
}

// 刪除訂單包裹和商品中間
export function delRelation(id) {
  return request({
    url: '/system/relation/' + id,
    method: 'delete'
  })
}

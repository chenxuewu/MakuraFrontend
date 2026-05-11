import request from '@/utils/request'

// 查詢使用者收藏商品中間列表
export function listCollect(query) {
  return request({
    url: '/product/collect/list',
    method: 'get',
    params: query
  })
}

// 查詢使用者收藏商品中間詳細
export function getCollect(id) {
  return request({
    url: '/product/collect/' + id,
    method: 'get'
  })
}

// 新增使用者收藏商品中間
export function addCollect(data) {
  return request({
    url: '/product/collect',
    method: 'post',
    data: data
  })
}

// 修改使用者收藏商品中間
export function updateCollect(data) {
  return request({
    url: '/product/collect',
    method: 'put',
    data: data
  })
}

// 刪除使用者收藏商品中間
export function delCollect(id) {
  return request({
    url: '/product/collect/' + id,
    method: 'delete'
  })
}

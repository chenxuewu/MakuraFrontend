import request from '@/utils/request'

// 查詢商品可見性列表
export function listVisible(query) {
  return request({
    url: '/product/visible/list',
    method: 'get',
    params: query
  })
}

// 查詢商品可見性詳細
export function getVisible(id) {
  return request({
    url: '/product/visible/' + id,
    method: 'get'
  })
}

// 新增商品可見性
export function addVisible(data) {
  return request({
    url: '/product/visible',
    method: 'post',
    data: data
  })
}

// 修改商品可見性
export function updateVisible(data) {
  return request({
    url: '/product/visible',
    method: 'put',
    data: data
  })
}

// 刪除商品可見性
export function delVisible(id) {
  return request({
    url: '/product/visible/' + id,
    method: 'delete'
  })
}

import request from '@/utils/request'

// 查询商品标签关联列表
export function listRelation(query) {
  return request({
    url: '/product/tagRelation/list',
    method: 'get',
    params: query
  })
}

// 查询商品标签关联详细
export function getRelation(id) {
  return request({
    url: '/product/tagRelation/' + id,
    method: 'get'
  })
}

// 新增商品标签关联
export function addRelation(data) {
  return request({
    url: '/product/tagRelation',
    method: 'post',
    data: data
  })
}

// 修改商品标签关联
export function updateRelation(data) {
  return request({
    url: '/product/tagRelation',
    method: 'put',
    data: data
  })
}

// 删除商品标签关联
export function delRelation(id) {
  return request({
    url: '/product/tagRelation/' + id,
    method: 'delete'
  })
}

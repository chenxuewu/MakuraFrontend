import request from '@/utils/request'

// 查詢團長店鋪和商品中間 列表
export function listGroup(query) {
  return request({
    url: '/system/group/list',
    method: 'get',
    params: query
  })
}

// 查詢團長店鋪和商品中間 詳細
export function getGroup(id) {
  return request({
    url: '/system/group/' + id,
    method: 'get'
  })
}

// 新增團長店鋪和商品中間
export function addGroup(data) {
  return request({
    url: '/system/group',
    method: 'post',
    data: data
  })
}

// 修改團長店鋪和商品中間
export function updateGroup(data) {
  return request({
    url: '/system/group',
    method: 'put',
    data: data
  })
}

// 刪除團長店鋪和商品中間
export function delGroup(id) {
  return request({
    url: '/system/group/' + id,
    method: 'delete'
  })
}

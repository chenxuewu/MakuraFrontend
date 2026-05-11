import request from '@/utils/request'

// 查詢商品評論列表
export function listComment(query) {
  return request({
    url: '/productcomment/list',
    method: 'get',
    params: query
  })
}

// 查詢商品評論詳細
export function getComment(id) {
  return request({
    url: '/productcomment/' + id,
    method: 'get'
  })
}

// 新增商品評論
export function addComment(data) {
  return request({
    url: '/productcomment',
    method: 'post',
    data: data
  })
}

// 修改商品評論
export function updateComment(data) {
  return request({
    url: '/productcomment',
    method: 'put',
    data: data
  })
}

// 刪除商品評論
export function delComment(id) {
  return request({
    url: '/productcomment/' + id,
    method: 'delete'
  })
}
// 新增預設5條好評
export function randGoodComment(data) {
  return request({
    url: '/productcomment/randGoodComment',
    method: 'post',
    data
  });
}
// 所有好評
export function addAllGoodComments(data) {
  return request({
    url: '/productcomment/allProductGoodComment',
    method: 'post',
    data
  });
}
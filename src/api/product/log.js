import request from '@/utils/request'

// 查詢商品購買記列表
export function listLog(query) {
  return request({
    url: '/productbuy/log/list',
    method: 'get',
    params: query
  })
}

// 查詢商品購買記詳細
export function getLog(id) {
  return request({
    url: '/productbuy/log/' + id,
    method: 'get'
  })
}

// 新增商品購買記
export function addLog(data) {
  return request({
    url: '/productbuy/log',
    method: 'post',
    data: data
  })
}

// 修改商品購買記
export function updateLog(data) {
  return request({
    url: '/productbuy/log',
    method: 'put',
    data: data
  })
}

// 刪除商品購買記
export function delLog(id) {
  return request({
    url: '/productbuy/log/' + id,
    method: 'delete'
  })
}

import request from '@/utils/request'

// 查詢商品屬性單位列表
export function listUnit(query) {
  return request({
    url: '/attribute/unit/list',
    method: 'get',
    params: query
  })
}

// 查詢商品屬性單位詳細
export function getUnit(unitId) {
  return request({
    url: '/attribute/unit/' + unitId,
    method: 'get'
  })
}

// 新增商品屬性單位
export function addUnit(data) {
  return request({
    url: '/attribute/unit',
    method: 'post',
    data: data
  })
}

// 修改商品屬性單位
export function updateUnit(data) {
  return request({
    url: '/attribute/unit',
    method: 'put',
    data: data
  })
}

// 刪除商品屬性單位
export function delUnit(unitId) {
  return request({
    url: '/attribute/unit/' + unitId,
    method: 'delete'
  })
}

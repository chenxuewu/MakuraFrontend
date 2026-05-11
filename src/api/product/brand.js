import request from '@/utils/request'

// 查詢品牌列表
export function listBrand(query) {
  return request({
    url: '/product/brand/list',
    method: 'get',
    params: query,
    timeout: 180000
  })
}

// 查詢品牌詳細
export function getBrand(brandId) {
  return request({
    url: '/product/brand/' + brandId,
    method: 'get',
    timeout: 180000
  })
}

// 新增品牌
export function addBrand(data) {
  return request({
    url: '/product/brand',
    method: 'post',
    data: data,
    timeout: 180000
  })
}

// 修改品牌
export function updateBrand(data) {
  return request({
    url: '/product/brand',
    method: 'put',
    data: data,
    timeout: 180000
  })
}

// 刪除品牌
export function delBrand(brandId) {
  return request({
    url: '/product/brand/' + brandId,
    method: 'delete',
    timeout: 180000
  })
}

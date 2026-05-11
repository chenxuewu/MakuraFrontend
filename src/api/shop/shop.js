import request from '@/utils/request'

// 查詢店鋪列表
export function listShop(query) {
  return request({
    url: '/product/shop/list',
    method: 'get',
    params: query
  })
}

// 查詢店鋪詳細
export function getShop(shopId) {
  return request({
    url: '/product/shop/' + shopId,
    method: 'get'
  })
}
// 查詢店鋪詳細
export function getOwnerShopInfo() {
  return request({
    url: '/product/shop/getOwnerShopInfo',
    method: 'get'
  })
}
// 新增店鋪
export function addShop(data) {
  return request({
    url: '/product/shop',
    method: 'post',
    data: data
  })
}

// 修改店鋪
export function updateShop(data) {
  return request({
    url: '/product/shop',
    method: 'put',
    data: data
  })
}

// 刪除店鋪
export function delShop(shopId) {
  return request({
    url: '/product/shop/' + shopId,
    method: 'delete'
  })
}


// 新增上級商品到店鋪或從店鋪移除商品
export function manageProduct(data, isAdding) {
  return request({
    url: '/product/shop/manageProduct?isAdding=' + isAdding,
    method: 'post',
    data: data
  })
}

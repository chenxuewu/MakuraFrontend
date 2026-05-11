import request from '@/utils/request'

// 查詢商品資訊列表
export function listProduct(query) {
  return request({
    url: '/product/list',
    method: 'get',
    params: query
  })
}

// 前臺——獲取商品資訊詳細資訊(適用於後臺新增店鋪商品列表檢視詳情)
export function getProduct(id) {
  return request({
    url: '/product/frontGetProductById/' + id,
    method: 'get'
  })
}

// 前臺——獲取商品資訊新增日誌資訊
export function frontGetProductQueryLog(id) {
  return request({
    url: '/product/frontGetProductQueryLog/' + id,
    method: 'get'
  })
}
// 後臺——獲取商品SKU價格列表
// isCurrentShop:是否當前店查詢（0-否，1-是
// productId:商品id
export function getSkuPriceList(isCurrentShop, productId) {
  return request({
    url: `/product/getSkuPriceList/${isCurrentShop}/${productId}`,
    method: 'get'
  })
}

//後臺——我的商品列表資訊詳細資訊
export function behindGetProductById(id) {
  return request({
    url: '/product/behindGetProductById/' + id,
    method: 'get'
  })
}


// 查詢商品資訊詳細
export function getBackProduct(id) {
  return request({
    url: '/product/' + id,
    method: 'get'
  })
}

// 新增商品資訊
export function addProduct(data) {
  return request({
    url: '/product',
    method: 'post',
    data: data
  })
}

// 修改商品資訊
export function updateProduct(data) {
  return request({
    url: '/product',
    method: 'put',
    data: data
  })
}

// 刪除商品資訊
export function delProduct(id) {
  return request({
    url: '/product/' + id,
    method: 'delete'
  })
}

// 根據skuId查詢sku的價格
export function findSkuPriceBySkuId(skuIds, isSuperior) {
  return request({
    url: `/product/findSkuPriceBySkuId?skuIds=${skuIds}&isSuperior=${isSuperior}`,
    method: 'post',
  });
}

// 修改商品上架狀態、推薦狀態、新品狀態
export function updateStatus(data) {
  return request({
    url: '/product/updateStatus',
    method: 'put',
    data: data
  })
}

// 商品稽核
export function review(data) {
  return request({
    url: '/product/review',
    method: 'put',
    data: data
  })
}

// 解凍商品
export function unfreeze(productId) {
  return request({
    url: `/product/unfreeze?productId=${productId}`,
    method: 'put'
  })
}

// 團長查詢上級店鋪商品資訊列表
export function superiorProductList(query) {
  return request({
    url: '/product/superiorProductList',
    method: 'get',
    params: query
  })
}

// 團長商品管理SKU價格編輯
export function skuPriceUpdate(data) {
  return request({
    url: '/product/skuPriceUpdate',
    method: 'post',
    data: data
  })
}

// =====================前臺介面=====================
// 查詢商品資訊列表
export function frontProductList(query) {
  return request({
    url: '/product/frontList',
    method: 'get',
    params: query
  })
}

//根據商品id和使用者角色獲取上級店鋪sku資訊
export function getSkuInfoByProductId(productId) {
  return request({
    url: `/product/getSkuInfoByProductId/${productId}`,
    method: 'get',
  });
}

// 供應商查詢商品資訊列表
export function supplierProductList(query) {
  return request({
    url: '/product/supplierProductList',
    method: 'get',
    params: query
  })
}

//前臺——根據商品id和使用者角色獲取sku資訊(不登陸預設查詢一級團長的商品)
export function getSkuInfoByProductIdNoLogin(id) {
  return request({
    url: '/purchase/getSkuInfoByProductIdNoLogin/' + id,
    method: 'get'
  })
}


//前臺——獲取商品資訊詳細資訊(適用於後臺新增店鋪商品列表檢視詳情(不登陸預設查詢一級團長的商品))
export function frontGetProductByIdNoLogin(id) {
  return request({
    url: '/purchase/frontGetProductByIdNoLogin/' + id,
    method: 'get'
  })
}

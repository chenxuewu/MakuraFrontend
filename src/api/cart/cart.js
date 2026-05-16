import request from '@/utils/request'

// 查詢我的購物車列表
export function cartList(searchParam, cartItemIds) {
  return request({
    url: '/carItem/list',
    method: 'get',
    params: {
      pageNum: 1,
      pageSize: 10000,
      searchParam: searchParam,
      cartItemIds: cartItemIds
    }
  });
}
// 查詢我的購物車列表(查詢一條獲取總條數)
export function cartListOne(searchParam, cartItemIds) {
  return request({
    url: '/carItem/list',
    method: 'get',
    params: {
      pageNum: 1,
      pageSize: 10000,
      searchParam: searchParam,
      cartItemIds: cartItemIds
    }
  });
}

//商品加入購物車
export function addPurchase(data) {
    return request({
        url: '/carItem/addPurchase',
        method: 'post',
        data: data
    })
}


// 購物車商品數量減少或增加
export function reductionProduct(catrItemId, quantity) {
    return request({
        url: `/carItem/reductionProduct/${catrItemId}`,
        method: 'put',
        params: { quantity }
    })
}


// 購物車移除商品
export function removeProduct(catrItemIds) {
    return request({
      url: `/carItem/removeProduct`,
      method: 'post',
      params: { catrItemIds }
    })
}

// 修改商品sku
export function updateSku(xtCartItem) {
  return request({
    url: `/carItem/updateSku`,
    method: 'post',
    data: xtCartItem
  })
}

import request from '@/utils/request'



//前臺——查詢商品列表(不登陸預設查詢一級團長的商品)
export function frontListNoLogin(query) {
  return request({
    url: '/purchase/frontListNoLogin',
    method: 'get',
    params: query
  })
}

// 下單
export function addProductNoAuth(data) {
  return request({
    url: '/purchase/order',
    method: 'post',
    data: data
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

//根據城市和區域查詢711門店不同的街道列表
export function listDifferentRoadsByCityAndZone(data) {
  return request({
    url: '/purchase/listDifferentRoadsByCityAndZone?' + data,
    method: 'get'
  })
}

//根據城市、區域和街道查詢711商超物件列表
export function listStoresByCityZoneRoad(data) {
  return request({
    url: '/purchase/listStoresByCityZoneRoad?' + data,
    method: 'get'
  })
}

//檢視商品詳情埋點介面 (已移至 src/utils/eventLog.js，全域性方法 $logEvent)
// export function eventlog(data) {
//   return request({
//     url: '/purchase/eventlog',
//     method: 'post',
//     data: data
//   })
// }
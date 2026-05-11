import request from '@/utils/request'

// 查詢使用者收貨地址列表
export function listAddress(query) {
  return request({
    url: '/system/address/list',
    method: 'get',
    params: query
  })
}

// 查詢使用者收貨地址詳細
export function getAddress(addressId) {
  return request({
    url: '/system/address/' + addressId,
    method: 'get'
  })
}

// 獲取使用者預設選中收貨地址
export function defaultAddress() {
  return request({
    url: '/system/address/defaultAddress',
    method: 'get'
  })
}

// 新增使用者收貨地址
export function addAddress(data) {
  return request({
    url: '/system/address',
    method: 'post',
    data: data
  })
}

// 修改使用者收貨地址
export function updateAddress(data) {
  return request({
    url: '/system/address',
    method: 'put',
    data: data
  })
}

// 刪除使用者收貨地址
export function delAddress(addressId) {
  return request({
    url: '/system/address/' + addressId,
    method: 'delete'
  })
}
// 設定地址為預設地址
export function updateDefaultAddress(addressId) {
  return request({
    url: '/system/address/updateDefaultAddress/' + addressId,
    method: 'put'
  })
}

// 獲取行政區樹形
export function getAdministrativeAreaTree() {
  return request({
    url: '/system/address/getAdministrativeAreaTree',
    method: 'get'
  })
}
  // 獲取行政區詳情
export function getAdministrativeAreaByArea(areaId) {
  return request({
    url: '/system/address/getAdministrativeAreaByArea/' + areaId,
    method: 'get'
  })

}
// 獲取 711 街道列表
export function getStreets(data) {
  return request({
    url: '/user/server/listDifferentRoadsByCityAndZone',
    method: 'get',
    params: {
      city: data.city,  // 中文市名
      zone: data.area,  // 中文區名
      deliveryType: data.deliveryType   //  2：711 3：全家family

    }
  });
}

// 獲取 711 便利店列表
export function getStores(data) {
  return request({
    url: '/user/server/listStoresByCityZoneRoad',
    method: 'get',
    params: {
      city: data.city,         // 中文市名
      zone: data.area,         // 中文區名
      road: data.streetName, // 中文街道名
      deliveryType: data.deliveryType   //  2：711 3：全家family
    }
  });
}

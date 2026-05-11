import request from '@/utils/request'

// 統計總銷售額等資料
export function getHomeGroupInfo() {
  return request({
    url: '/product/homeGroup/getHomeGroupInfo',
    method: 'get'
  })
}

// 統計總銷售額資料
export function salesVolumeGroup(quary) {
  return request({
    url: '/product/homeGroup/salesVolumeGroup',
    method: 'get',
    params: quary
  })
}

// 統計總銷售數量資料
export function salesVolumeNumGroup(quary) {
  return request({
    url: '/product/homeGroup/salesVolumeNumGroup',
    method: 'get',
    params: quary
  })
}

// 下級團的銷售排行
export function deptOrderGroup(quary) {
  return request({
    url: '/product/homeGroup/deptOrderGroup',
    method: 'get',
    params: quary
  })
}

// 統計總訂單銷售數量資料
export function deptOrderNumGroup(quary) {
  return request({
    url: '/product/homeGroup/deptOrderNumGroup',
    method: 'get',
    params: quary
  })
}

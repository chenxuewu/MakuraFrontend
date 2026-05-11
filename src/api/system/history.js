import request from '@/utils/request'

// 查詢邀請記錄列表
export function listHistory(query) {
  return request({
    url: '/system/history/list',
    method: 'get',
    params: query
  })
}

// 查詢邀請記錄詳細
export function getHistory(inviteId) {
  return request({
    url: '/system/history/' + inviteId,
    method: 'get'
  })
}

// 新增邀請記錄
export function addHistory(data) {
  return request({
    url: '/system/history',
    method: 'post',
    data: data
  })
}

// 修改邀請記錄
export function updateHistory(data) {
  return request({
    url: '/system/history',
    method: 'put',
    data: data
  })
}

// 刪除邀請記錄
export function delHistory(inviteId) {
  return request({
    url: '/system/history/' + inviteId,
    method: 'delete'
  })
}

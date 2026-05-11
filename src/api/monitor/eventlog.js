import request from '@/utils/request'

// 查詢前端埋點日誌列表
export function listLogs(query) {
  return request({
    url: '/monitor/eventLogs/list',
    method: 'get',
    params: query
  })
}

// 查詢前端埋點日誌詳細
export function getLogs(id) {
  return request({
    url: '/monitor/eventLogs/' + id,
    method: 'get'
  })
}

// 刪除前端埋點日誌
export function delLogs(id) {
  return request({
    url: '/monitor/eventLogs/' + id,
    method: 'delete'
  })
}

// 新增前端埋點日誌
export function addEventLog(data) {
  return request({
    url: '/purchase/eventlog',
    method: 'post',
    data: data
  })
}

// 清空操作日誌
export function cleanEventlog() {
  return request({
    url: '/monitor/eventLogs/clean',
    method: 'delete'
  })
}
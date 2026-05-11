import request from '@/utils/request'

// 查詢商品和檔案中間列表
export function listFile(query) {
  return request({
    url: '/system/file/list',
    method: 'get',
    params: query
  })
}

// 查詢商品和檔案中間詳細
export function getFile(id) {
  return request({
    url: '/system/file/' + id,
    method: 'get'
  })
}

// 新增商品和檔案中間
export function addFile(data) {
  return request({
    url: '/system/file',
    method: 'post',
    data: data
  })
}

// 修改商品和檔案中間
export function updateFile(data) {
  return request({
    url: '/system/file',
    method: 'put',
    data: data
  })
}

// 刪除商品和檔案中間
export function delFile(id) {
  return request({
    url: '/system/file/' + id,
    method: 'delete'
  })
}

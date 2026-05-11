import request from '@/utils/request'

// 查詢郵件傳送記錄列表
export function listRecord(query) {
  return request({
    url: '/email/list',
    method: 'get',
    params: query
  })
}

// 查詢郵件傳送記錄詳細
export function getRecord(id) {
  return request({
    url: '/email/' + id,
    method: 'get'
  })
}

// 新增郵件傳送記錄
export function addRecord(data) {
  return request({
    url: '/email',
    method: 'post',
    data: data
  })
}

// 修改郵件傳送記錄
export function updateRecord(data) {
  return request({
    url: '/email',
    method: 'put',
    data: data
  })
}

// 刪除郵件傳送記錄
export function delRecord(id) {
  return request({
    url: '/email/' + id,
    method: 'delete'
  })
}

/**
 * 測試傳送郵件
 * @param phone
 * @param content
 * @returns {*}
 */
export function sendEmail(emailAddress,subject, content) {
  return request({
    url: '/email/sendEmail',
    method: 'get',
    params: {
      emailAddress: emailAddress,
      subject: subject,
      body: content
    }
  });
}

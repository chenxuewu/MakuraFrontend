import request from '@/utils/request'

// 查詢簡訊傳送記錄列表
export function listRecord(query) {
  return request({
    url: '/sms/list',
    method: 'get',
    params: query
  })
}

// 查詢簡訊傳送記錄詳細
export function getRecord(id) {
  return request({
    url: '/sms/' + id,
    method: 'get'
  })
}

// 新增簡訊傳送記錄
export function addRecord(data) {
  return request({
    url: '/sms',
    method: 'post',
    data: data
  })
}

// 修改簡訊傳送記錄
export function updateRecord(data) {
  return request({
    url: '/sms',
    method: 'put',
    data: data
  })
}

// 刪除簡訊傳送記錄
export function delRecord(id) {
  return request({
    url: '/sms/' + id,
    method: 'delete'
  })
}


// 傳送簽收快遞通知（批次）
export function sendSms(xtOrderItemForms, sendType) {
  return request({
    url: '/sms/sendBatchNewsletter',
    method: 'post',
    data: xtOrderItemForms,
    params: {
      sendType: sendType
    }
  })
}

/**
 * 測試傳送簡訊
 * @param phone
 * @param content
 * @returns {*}
 */
export function sendSingleSms(phone, content) {
  return request({
    url: '/sms/send',
    method: 'post',
    params: {
      phone: phone,
      content: content
    }
  });
}
